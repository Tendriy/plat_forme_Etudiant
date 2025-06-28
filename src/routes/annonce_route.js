import express from 'express'
import prisma from '../utils/prisma.js'
import HttpException from '../utils/httpException.js'
import verifyToken from '../middlewares/verify_token.js'

const router = express.Router()

router.get('/', verifyToken , async (_req, res) => {
    const annonces = await prisma.annonce.findMany()
    res.status(200).json(annonces)
})

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10)
    if (isNaN(id))
        throw new HttpException("ID invalide", 400)

    const annonce = await prisma.annonce.findUnique({ where: { id } })

    if (!annonce)
        throw new HttpException("Annonce non trouvée", 404)

    res.status(200).json(annonce)
})

router.post('/', async (req, res) => {
    const { titre, contenu, image, dateDePublication, etudiantId } = req.body

    if (!titre) {
        throw new HttpException("Le champ 'titre' est obligatoire", 400)
    }

    if (etudiantId !== undefined) {
        const etudiantExiste = await prisma.etudiant.findUnique({
            where: { id: etudiantId }
        })

        if (!etudiantExiste) {
            throw new HttpException("L'étudiant avec cet ID n'existe pas", 400)
        }
    }

    const created = await prisma.annonce.create({
        data: {
            titre,
            contenu,
            image,
            dateDePublication: dateDePublication ? new Date(dateDePublication) : undefined,
            etudiantId
        }
    })

    res.status(201).json(created)
})

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const { titre, contenu, image, dateDePublication, etudiantId } = req.body

    if (isNaN(id))
        throw new HttpException("ID invalide", 400)

    const annonce = await prisma.annonce.findUnique({ where: { id } })

    if (!annonce)
        throw new HttpException("Annonce non trouvée", 404)

    if (etudiantId !== undefined) {
        const etudiantExiste = await prisma.etudiant.findUnique({ where: { id: etudiantId } })
        if (!etudiantExiste)
            throw new HttpException("L'étudiant avec cet ID n'existe pas", 400)
    }

    const updated = await prisma.annonce.update({
        where: { id },
        data: {
            titre,
            contenu,
            image,
            dateDePublication: dateDePublication ? new Date(dateDePublication) : undefined,
            etudiantId
        }
    })

    res.status(200).json(updated)
})


router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10)

    if (isNaN(id))
        throw new HttpException("ID invalide", 400)

    const annonce = await prisma.annonce.findUnique({ where: { id } })
    if (!annonce)
        throw new HttpException("Annonce non trouvée", 404)

    await prisma.annonce.delete({ where: { id } })

    res.status(204).send()
})

export default router
