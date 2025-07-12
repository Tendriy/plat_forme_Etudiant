import { Server } from 'socket.io'
import prisma from '../utils/prisma.js'

export default function setupChatSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true
    }
  })

  io.on('connection', socket => {
    socket.on('join_room', ({ etudiant1Id, etudiant2Id }) => {
      const roomId = [etudiant1Id, etudiant2Id].sort().join('-')
      socket.join(roomId)
    })

    socket.on('send_message', async ({ senderId, receiverId, content }) => {
      const roomId = [senderId, receiverId].sort().join('-')

      const message = await prisma.message.create({
        data: {
          contenu: content,
          etudiantId: senderId,
          receveurs: {
            create: [{ etudiantId: receiverId }]
          }
        }
      })

      io.to(roomId).emit('receive_message', {
        senderId,
        receiverId,
        content,
        date: message.date
      })
    })

    socket.on('join_group', ({ groupeId }) => {
      const room = `group-${groupeId}`
      socket.join(room)
    })

    socket.on('send_group_message', async ({ auteurId, groupeId, contenu }) => {
      const message = await prisma.messageGroupe.create({
        data: { auteurId, groupeId, contenu }
      })

      io.to(`group-${groupeId}`).emit('receive_group_message', {
        auteurId,
        groupeId,
        contenu,
        date: message.date
      })
    })
  })
}
