import { Router } from 'express';
import prisma from '../utils/prisma.js';
import HttpException from '../utils/httpException.js';
import requireAuth from '../middlewares/requireAuth.js';

const router = Router();

router.post('/inviter', requireAuth, async (req, res) => {
  const demandeurId = Number(req.auth.id);
  const { receveurId } = req.body;

  if (!receveurId) {
    throw new HttpException(400, 'receveurId est requis');
  }
  if (demandeurId === receveurId) {
    throw new HttpException(400, 'Vous ne pouvez pas vous inviter vous-même');
  }

  const exist = await prisma.amitie.findUnique({
    where: {
      demandeurId_receveurId: {
        demandeurId,
        receveurId,
      },
    },
  });

  if (exist) {
    throw new HttpException(400, 'Demande d\'amitié déjà envoyée');
  }

  const invitation = await prisma.amitie.create({
    data: {
      demandeurId,
      receveurId,
      statut: 'EN_ATTENTE',
    },
  });

  res.status(201).json(invitation);
});


router.post('/accepter', requireAuth, async (req, res) => {
  const receveurId = Number(req.auth.id);
  const { demandeurId } = req.body;

  if (!demandeurId) {
    throw new HttpException(400, 'demandeurId est requis');
  }

  const amitie = await prisma.amitie.findUnique({
    where: {
      demandeurId_receveurId: {
        demandeurId,
        receveurId,
      },
    },
  });

  if (!amitie) {
    throw new HttpException(404, 'Aucune demande d\'amitié trouvée');
  }

  if (amitie.statut !== 'EN_ATTENTE') {
    throw new HttpException(400, 'Cette demande d\'amitié a déjà été traitée');
  }

  const updatedAmitie = await prisma.amitie.update({
    where: { id: amitie.id },
    data: {
      statut: 'ACCEPTEE',
      dateAcceptation: new Date(),
    },
  });

  res.json(updatedAmitie);
});


router.post('/refuser', requireAuth, async (req, res) => {
  const receveurId = Number(req.auth.id);
  const { demandeurId } = req.body;

  if (!demandeurId) {
    throw new HttpException(400, 'demandeurId est requis');
  }

  const amitie = await prisma.amitie.findUnique({
    where: {
      demandeurId_receveurId: {
        demandeurId,
        receveurId,
      },
    },
  });

  if (!amitie) {
    throw new HttpException(404, 'Aucune demande d\'amitié trouvée');
  }

  if (amitie.statut !== 'EN_ATTENTE') {
    throw new HttpException(400, 'Cette demande d\'amitié a déjà été traitée');
  }

  const updatedAmitie = await prisma.amitie.update({
    where: { id: amitie.id },
    data: {
      statut: 'REFUSEE',
    },
  });

  res.json(updatedAmitie);
});

export default router;
