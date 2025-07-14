import { Router } from 'express';
import prisma from '../utils/prisma.js';
import HttpException from '../utils/httpException.js';
import requireAuth from '../middlewares/requireAuth.js';

const router = Router();


router.post('/', requireAuth, async (req, res) => {
  const { contenu, annonceId } = req.body;
  const etudiantId = req.auth.id;

  if (!contenu || !annonceId) {
    throw new HttpException('Champs manquants.', 400)
  }

  const newCommentaire = await prisma.commentaire.create({
    data: {
      contenu,
      etudiantId,
      annonceId,
      date: new Date(),
    },
    include: {
      auteur: true,
    },
  });
  res.status(201).json(newCommentaire);
});

router.put('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { contenu } = req.body;
  const etudiantId = req.auth.id;

  if (!contenu) {
    throw new HttpException('Contenu obligatoire.', 400)
  }

  const existingComment = await prisma.commentaire.findUnique({
    where: { id: Number(id) },
  });

  if (!existingComment) {
    throw new HttpException('Commentaire non trouvé.', 404)
  }

  if (existingComment.etudiantId !== etudiantId) {
    throw new HttpException('Accès refusé.', 403)
  }
  const updatedCommentaire = await prisma.commentaire.update({
    where: { id: Number(id) },
    data: { contenu },
  });

  res.json(updatedCommentaire);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const etudiantId = req.auth.id;

  const existingComment = await prisma.commentaire.findUnique({
    where: { id: Number(id) },
  });

  if (!existingComment) {
    throw new HttpException('Commentaire non trouvé.', 404)
  }
  if (existingComment.etudiantId !== etudiantId) {
    throw new HttpException('Accès refusé.', 403)
  }

  await prisma.commentaire.delete({
    where: { id: Number(id) },
  });

  res.status(204).send();

});

export default router;
