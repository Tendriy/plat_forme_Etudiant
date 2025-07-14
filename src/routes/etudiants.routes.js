import { Router } from 'express';
import prisma from '../utils/prisma.js';
import HttpException from '../utils/httpException.js';
import requireAuth from '../middlewares/requireAuth.js';

const router = Router();


router.get('/', requireAuth ,async (req, res) => {
  const currentUserId = Number(req.auth.id);
  if (!currentUserId) {
    throw new HttpException(400, 'currentUserId est requis en query param');
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
        select: {
          statut: true
        }
      },
      demandesRecues: {
        where: { demandeurId: currentUserId },
        select: {
          statut: true
        }
      }
    }
  });

  const etudiantsAvecStatut = etudiants.map(e => {
    let statut = 'NON_AMI';
    const demandeEnvoyee = e.demandesRecues[0];
    const demandeRecue = e.demandesEnvoyees[0];
    if (demandeEnvoyee) statut = demandeEnvoyee.statut;
    else if (demandeRecue) {
      if (demandeRecue.statut === 'EN_ATTENTE') statut = 'EN_ATTENTE_DE_LUI';
      else statut = demandeRecue.statut;
    }

    return {
      id: e.id,
      prenom: e.prenom,
      nom: e.nom,
      email: e.email,
      image: e.image,
      statutAmitie: statut
    };
  });

  res.json(etudiantsAvecStatut);

});

export default router;
