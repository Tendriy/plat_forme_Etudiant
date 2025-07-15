import { Router } from 'express';
import prisma from '../utils/prisma.js';
import HttpException from '../utils/httpException.js';
import requireAuth from '../middlewares/requireAuth.js';

const router = Router();

router.get('/', requireAuth, async (req, res) => {
  const currentUserId = Number(req.auth.id);
  if (!currentUserId) {
    throw new HttpException('Utilisateur non authentifié', 400);
  }

  const etudiants = await prisma.etudiant.findMany({
    where: {
      id: { not: currentUserId }
    },
    select: {
      id: true,
      prenom: true,
      nom: true,
      email: true,
      image: true,
      demandesEnvoyees: {
        where: { receveurId: currentUserId },
        select: { statut: true }
      },
      demandesRecues: {
        where: { demandeurId: currentUserId },
        select: { statut: true }
      }
    }
  });

  const etudiantsAvecStatut = etudiants.map(etudiant => {
    let statut = 'NON_AMI';
    
    const demandeReçue = etudiant.demandesRecues[0];
    const demandeEnvoyée = etudiant.demandesEnvoyees[0];

    if (demandeReçue) {
      statut = demandeReçue.statut; 
    } else if (demandeEnvoyée) {
      if (demandeEnvoyée.statut === 'EN_ATTENTE') {
        statut = 'EN_ATTENTE_DE_LUI'; 
      } else {
        statut = demandeEnvoyée.statut; 
      }
    }

    return {
      id: etudiant.id,
      prenom: etudiant.prenom,
      nom: etudiant.nom,
      email: etudiant.email,
      image: etudiant.image,
      statutAmitie: statut
    };
  });

  res.json(etudiantsAvecStatut);
});

router.get("/disponibles", requireAuth, async (req, res) => {
  const userId = Number(req.auth.id);

  const relations = await prisma.amitie.findMany({
    where: {
      OR: [{ demandeurId: userId }, { receveurId: userId }],
    },
  });

  const exclureIds = new Set([userId]);
  for (const r of relations) {
    exclureIds.add(r.demandeurId === userId ? r.receveurId : r.demandeurId);
  }

  const etudiants = await prisma.etudiant.findMany({
    where: { id: { notIn: Array.from(exclureIds) } },
    select: { id: true, nom: true, prenom: true, email: true },
  });

  res.json(etudiants);
});


export default router;
