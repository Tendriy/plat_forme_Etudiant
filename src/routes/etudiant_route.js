import express from 'express'
import prisma from '../utils/prisma.js'
import HttpException from '../utils/httpException.js'

const router = express.Router()

router.get('/', async (_req, res) => {
  const etudiants = await prisma.etudiant.findMany()
  res.status(200).json(etudiants)
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10)

  if (isNaN(id)) {
    throw new HttpException('ID invalide', 400)
  }

  const etudiant = await prisma.etudiant.findUnique({ where: { id } })

  if (!etudiant) {
    throw new HttpException("Étudiant non trouvé", 404)
  }

  res.status(200).json(etudiant)
})

router.post('/', async (req, res) => {
  const { nom, prenom, email, motDePasse, dateInscription } = req.body

  if (!nom || !prenom || !email || !motDePasse || !dateInscription) {
    throw new HttpException("Champs obligatoires manquants", 400)
  }

  const nouvelEtudiant = await prisma.etudiant.create({
    data: { nom, prenom, email, motDePasse, dateInscription }
  })

  res.status(201).json(nouvelEtudiant)
})

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const { nom, prenom, email, motDePasse, dateInscription } = req.body

  if (isNaN(id)) {
    throw new HttpException('ID invalide', 400)
  }

  const etudiantExistant = await prisma.etudiant.findUnique({ where: { id } })

  if (!etudiantExistant) {
    throw new HttpException("Étudiant non trouvé", 404)
  }

  const etudiantMisAJour = await prisma.etudiant.update({
    where: { id },
    data: { nom, prenom, email, motDePasse, dateInscription }
  })

  res.status(200).json(etudiantMisAJour)
})

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10)

  if (isNaN(id)) {
    return res.status(400).json({ erreur: 'ID invalide' })
  }

  const etudiantExistant = await prisma.etudiant.findUnique({ where: { id } })

  if (!etudiantExistant) {
    throw new HttpException("Étudiant non trouvé", 404)
  }

  await prisma.etudiant.delete({ where: { id } })

  return res.status(204).send()
})

export default router
