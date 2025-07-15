import { Server } from "socket.io";
import prisma from "../utils/prisma.js";
import jwt from "jsonwebtoken";

export default function setupChatSocket(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:5173",
      credentials: true,
    },
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error("Token manquant"));
    try {
      const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      socket.user = payload;
      next();
    } catch {
      next(new Error("Token invalide"));
    }
  });

  io.on("connection", (socket) => {
    console.log("Utilisateur connecté:", socket.user.id);

    socket.on("join_room", ({ etudiant1Id, etudiant2Id }) => {
      const roomId = [etudiant1Id, etudiant2Id].sort().join("-");
      console.log(`Socket ${socket.id} rejoint room ${roomId}`);
      socket.join(roomId);
    });

    socket.on("send_message", async ({ senderId, receiverId, content, roomId }) => {
      console.log(`Message de ${senderId} vers ${receiverId} dans room ${roomId}`);

      try {
        const message = await prisma.message.create({
          data: {
            contenu: content,
            etudiantId: senderId,
            receveurs: {
              create: [{ etudiantId: receiverId }],
            },
          },
        });

        io.to(roomId).emit("receive_message", {
          senderId,
          receiverId,
          content,
          date: message.createdAt,
          roomId,
        });
      } catch (error) {
        console.error("Erreur sauvegarde message :", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("Utilisateur déconnecté:", socket.user.id);
    });
  });

  return io;
}
