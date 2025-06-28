import express from 'express'
import http from 'http'
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io'
import cors from 'cors'
import HttpException from './utils/httpException.js'
import etudiantRouter from './routes/etudiant_route.js'
import messageRouter from './routes/message_route.js'
import annonceRouter from './routes/annonce_route.js'
import authRouter from './routes/auth_route.js'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    credentials: true
  }
})


app.use(cookieParser());
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))


app.use('/auth', authRouter)
app.use('/etudiants', etudiantRouter)
app.use('/messages', messageRouter(io)) 
app.use('/annonces', annonceRouter)

app.use((err, _req, res, _next) => {
  if (err instanceof HttpException) {
    res.status(err.status).json({ error: true, message: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: true, message: 'Erreur interne du serveur' });
  }
});
const PORT = 3000
server.listen(PORT, () => {
  console.log(`
  ========================================
   Serveur en ligne : http://localhost:${PORT}
   Heure : ${new Date().toLocaleString()}
  ========================================
  `)
})
