import express from 'express'
import prisma from '../utils/prisma.js'
import HttpException from '../utils/httpException.js'

function messageRouter(io) {
  const router = express.Router()

  router.get('/:receiverId/:senderId', async (req, res) => {
    const receiverId = parseInt(req.params.receiverId, 10)
    const senderId = parseInt(req.params.senderId, 10)

    if (isNaN(receiverId) || isNaN(senderId)) {
      throw new HttpException("Les IDs doivent être des nombres entiers valides.", 400)
    }

    const messages = await prisma.message.findMany({
      where: {
        AND: [
          { receiverId },
          { senderId }
        ]
      }
    })

    res.json(messages)
  })

  router.post('/', async (req, res) => {
    const { contenu, date, senderId, receiverId } = req.body

    if (!contenu || !senderId || !receiverId) {
      throw new HttpException("Champs requis manquants", 400)
    }

    const senderIdNum = parseInt(senderId, 10)
    const receiverIdNum = parseInt(receiverId, 10)

    if (isNaN(senderIdNum) || isNaN(receiverIdNum)) {
      throw new HttpException("IDs invalides", 400)
    }

    const sender = await prisma.etudiant.findUnique({ where: { id: senderIdNum } })
    if (!sender) {
      throw new HttpException("Expéditeur non trouvé", 404)
    }

    const receiver = await prisma.etudiant.findUnique({ where: { id: receiverIdNum } })
    if (!receiver) {
      throw new HttpException("Destinataire non trouvé", 404)
    }

    const createdMessage = await prisma.message.create({
      data: {
        contenu,
        date: date ? new Date(date) : new Date(),
        senderId: senderIdNum,
        receiverId: receiverIdNum
      }
    })

    io.emit(`sender_${senderIdNum}.receiver_${receiverIdNum}.create`, createdMessage)
    res.status(201).json(createdMessage)
  })


  router.put('/:messageId', async (req, res) => {
    const id = parseInt(req.params.messageId, 10)
    const { contenu, date, senderId, receiverId } = req.body

    if (isNaN(id)) 
      throw new HttpException("ID invalide", 400)

    const message = await prisma.message.findUnique({ where: { id } })

    if (!message) 
      throw new HttpException("Message non trouvé", 404)

    const dataToUpdate = {}
    if (contenu !== undefined) 
      dataToUpdate.contenu = contenu
    if (date !== undefined) 
      dataToUpdate.date = new Date(date)
    if (senderId !== undefined) {
      const senderIdNum = parseInt(senderId, 10)
      if (isNaN(senderIdNum)) 
        throw new HttpException("senderId invalide", 400)

      const sender = await prisma.etudiant.findUnique({ where: { id: senderIdNum } })

      if (!sender) 
        throw new HttpException("Expéditeur non trouvé", 404)

      dataToUpdate.senderId = senderIdNum
    }
    if (receiverId !== undefined) {
      const receiverIdNum = parseInt(receiverId, 10)
      
      if (isNaN(receiverIdNum)) 
        throw new HttpException("receiverId invalide", 400)

      const receiver = await prisma.etudiant.findUnique({ where: { id: receiverIdNum } })

      if (!receiver) 
        throw new HttpException("Destinataire non trouvé", 404)

      dataToUpdate.receiverId = receiverIdNum
    }

    const updatedMessage = await prisma.message.update({
      where: { id },
      data: dataToUpdate
    })

    io.emit(`sender_${updatedMessage.senderId}.receiver_${updatedMessage.receiverId}.update`, updatedMessage)
    res.json(updatedMessage)
  })

  router.delete('/:messageId', async (req, res) => {
    const id = parseInt(req.params.messageId, 10)

    if (isNaN(id)) 
      throw new HttpException("ID invalide", 400)

    const message = await prisma.message.findUnique({ where: { id } })
    if (!message) 
      throw new HttpException("Message non trouvé", 404)

    const deleted = await prisma.message.delete({ where: { id } })

    io.emit(`sender_${deleted.senderId}.receiver_${deleted.receiverId}.delete`, { id })
    res.status(200).json({
      message: "Message supprimé avec succès",
      data: deleted
    })
  })

  return router
}

export default messageRouter
