import express from 'express'
import prisma from '../utils/prisma.js'
import HttpException from '../utils/httpException.js'
import crypto from 'crypto'

const router = express.Router()

router.post('/login', async (req, res) => {
  const { email, motDePasse } = req.body
  
  if (!email || !motDePasse) {
    throw new HttpException('Email et mot de passe requis', 400)
  }

  const etudiant = await prisma.etudiant.findUnique({ where: { email } })
  if (!etudiant) {
    throw new HttpException('Email ou mot de passe invalide', 401)
  }

  const validPassword = motDePasse === etudiant.motDePasse
  if (!validPassword) {
    throw new HttpException('Email ou mot de passe invalide', 401)
  }

  const token = crypto.randomBytes(48).toString('hex')

  res.cookie('session_token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000
  })
  
  res.json({ token, etudiantId: etudiant.id })
})

export default router
