import { Router } from 'express';
import prisma from '../utils/prisma.js';
import { createUploadMiddleware } from '../middlewares/uploadMiddleware.js';
import fs from 'fs';
import path from 'path';
import HttpException from '../utils/httpException.js';
import requireAuth from '../middlewares/requireAuth.js';

const router = Router();

const uploadByAuth = createUploadMiddleware(req => req.auth?.id?.toString(), 'image', 'annonces');

router.post('/', uploadByAuth, requireAuth, async (req, res) => {
  const etudiantId = req.auth.id;
  const { titre, contenu } = req.body;
  if (!titre || titre.length > 150) throw new HttpException(400, 'Titre invalide');

  const imagePath = req.file ? `/public/annonces/${etudiantId}/${req.file.filename}` : null;

  const newAnnonce = await prisma.annonce.create({
    data: { titre, contenu, image: imagePath, etudiantId },
  });

  res.status(201).json(newAnnonce);
});


router.get('/', async (_req, res) => {
const annonces = await prisma.annonce.findMany({
  include: {
    auteur: {
      select: {
        id: true,
        prenom: true,
        nom: true,
        image: true,
        email: true,
        isAuthGoogle: true,
        dateInscription: true
      }
    },
    commentaires: {
      include: {
        auteur: {
          select: {
            id: true,
            prenom: true,
            image: true
          }
        }
      }
    }
  },
  orderBy: {
    dateDePublication: 'desc'
  }
});

  res.status(201).json(annonces);
});


router.put('/:id', uploadByAuth,requireAuth, async (req, res) => {
  const etudiantId = req.auth.id;

  const annonceId = parseInt(req.params.id, 10);
  if (isNaN(annonceId)) throw new HttpException(400, 'ID annonce invalide');

  const { titre, contenu } = req.body;
  if (!titre || titre.length > 150) throw new HttpException(400, 'Titre invalide');

  const annonce = await prisma.annonce.findUnique({ where: { id: annonceId } });

  if (!annonce) throw new HttpException(404, 'Annonce non trouvée');
  if (annonce.etudiantId !== etudiantId) throw new HttpException(403, 'Accès refusé');

  if (req.file && annonce.image) {
    const oldImagePath = path.join(process.cwd(), annonce.image);
    if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
  }

  const imagePath = req.file ? `/public/annonces/${etudiantId}/${req.file.filename}` : annonce.image;

  const updatedAnnonce = await prisma.annonce.update({
    where: { id: annonceId },
    data: { titre, contenu, image: imagePath },
  });

  res.json(updatedAnnonce);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const etudiantId = req.auth.id;

  const annonceId = parseInt(req.params.id, 10);
  if (isNaN(annonceId)) throw new HttpException(400, 'ID annonce invalide');

  const annonce = await prisma.annonce.findUnique({ where: { id: annonceId } });

  if (!annonce) throw new HttpException(404, 'Annonce non trouvée');
  if (annonce.etudiantId !== etudiantId) throw new HttpException(403, 'Accès refusé');

  if (annonce.image) {
    const imagePath = path.join(process.cwd(), annonce.image);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
  }

  await prisma.annonce.delete({ where: { id: annonceId } });

  res.json({ message: 'Annonce supprimée avec succès' });
});

router.get('/etudiant', requireAuth,  async (req, res) => {
  const etudiantId = req.auth.id;
  const annonces = await prisma.annonce.findMany({
    where: { etudiantId },
    include: { auteur: true, commentaires: true },
  });

  res.json(annonces);
});

router.get('/etudiant/total',requireAuth, async (req, res) => {
  const etudiantId = req.auth.id;
  const total = await prisma.annonce.count({ where: { etudiantId } });
  res.json({ total });
});

export default router;
