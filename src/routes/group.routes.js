import express from 'express'
import prisma from '../utils/prismaClient.js'

const router = express.Router()

router.post('/create', async (req, res) => {
  const { nom, membreIds } = req.body

  const groupe = await prisma.groupe.create({
    data: {
      nom,
      membres: {
        create: membreIds.map(id => ({ etudiantId: id }))
      }
    },
    include: { membres: true }
  })
  res.status(201).json(groupe)
})

router.post('/add-member', async (req, res) => {
  const { groupeId, etudiantId } = req.body

  const added = await prisma.etudiantGroupe.create({
    data: { groupeId, etudiantId }
  })
  res.status(201).json(added)
  
})

router.post('/send-message', async (req, res) => {
  const { auteurId, groupeId, contenu } = req.body
  const message = await prisma.messageGroupe.create({
    data: { auteurId, groupeId, contenu }
  })
  res.status(201).json(message)
  
})

export default router
