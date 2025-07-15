import { Router } from "express";
import prisma from "../utils/prisma.js";
import HttpException from "../utils/httpException.js";
import requireAuth from "../middlewares/requireAuth.js";

const router = Router();

router.post("/inviter", requireAuth, async (req, res) => {
  const demandeurId = Number(req.auth.id);
  const { receveurId } = req.body;

  if (!receveurId || demandeurId === receveurId) {
    throw new HttpException("Invitation invalide", 400);
  }

  const exist = await prisma.amitie.findUnique({
    where: {
      demandeurId_receveurId: { demandeurId, receveurId },
    },
  });

  if (exist) throw new HttpException("Déjà invité ou en relation", 400);

  const invitation = await prisma.amitie.create({
    data: {
      demandeurId,
      receveurId,
      statut: "EN_ATTENTE",
    },
  });

  res.status(201).json({ statut: invitation.statut });
});

router.post("/accepter", requireAuth, async (req, res) => {
  const receveurId = Number(req.auth.id);
  const { demandeurId } = req.body;

  const amitie = await prisma.amitie.findUnique({
    where: { demandeurId_receveurId: { demandeurId, receveurId } },
  });

  if (!amitie || amitie.receveurId !== receveurId)
    throw new HttpException("Accès interdit", 403);
  if (amitie.statut !== "EN_ATTENTE")
    throw new HttpException("Déjà traité", 400);

  const updated = await prisma.amitie.update({
    where: { id: amitie.id },
    data: { statut: "ACCEPTEE", dateAcceptation: new Date() },
  });

  res.json({ statut: updated.statut });
});



router.post("/refuser", requireAuth, async (req, res) => {
  const receveurId = Number(req.auth.id);
  const { demandeurId } = req.body;

  const amitie = await prisma.amitie.findUnique({
    where: { demandeurId_receveurId: { demandeurId, receveurId } },
  });

  if (!amitie || amitie.receveurId !== receveurId)
    throw new HttpException("Accès interdit", 403);
  if (amitie.statut !== "EN_ATTENTE")
    throw new HttpException("Déjà traité", 400);

  const updated = await prisma.amitie.update({
    where: { id: amitie.id },
    data: { statut: "REFUSEE" },
  });

  res.json({ statut: updated.statut });
});

router.get("/invitations-recues", requireAuth, async (req, res) => {
  const id = Number(req.auth.id);

  const invites = await prisma.amitie.findMany({
    where: { receveurId: id, statut: "EN_ATTENTE" },
    include: {
      demandeur: { select: { id: true, nom: true, prenom: true, email: true } },
    },
  });

  res.json(invites.map((a) => ({ ...a.demandeur, statutAmitie: a.statut })));
});

router.get("/invitations-envoyees", requireAuth, async (req, res) => {
  const id = Number(req.auth.id);

  const demandes = await prisma.amitie.findMany({
    where: { demandeurId: id, statut: "EN_ATTENTE" },
    include: {
      receveur: { select: { id: true, nom: true, prenom: true, email: true } },
    },
  });

  res.json(demandes.map((a) => ({ ...a.receveur, statutAmitie: a.statut })));
});

router.get('/amis', requireAuth, async (req, res) => {
  const etudiantId = Number(req.auth.id);

  const amis = await prisma.amitie.findMany({
    where: {
      statut: 'ACCEPTEE',
      OR: [
        { demandeurId: etudiantId },
        { receveurId: etudiantId }
      ]
    },
    include: {
      demandeur: {
        select: { id: true, nom: true, prenom: true, email: true }
      },
      receveur: {
        select: { id: true, nom: true, prenom: true, email: true }
      }
    }
  });

  const result = amis.map(a => {
    const ami = a.demandeurId === etudiantId ? a.receveur : a.demandeur;
    return {
      id: ami.id,
      nom: ami.nom,
      prenom: ami.prenom,
      email: ami.email
    };
  });

  res.json(result);
});


export default router;
