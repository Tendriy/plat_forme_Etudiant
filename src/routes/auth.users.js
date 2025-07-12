import { Router } from 'express';
import { createUploadMiddleware } from '../middlewares/uploadMiddleware.js';
import prisma from '../utils/prisma.js';

const router = Router();

const uploadUserImage = createUploadMiddleware('userId', 'image', 'users');

router.post('/:userId/upload', uploadUserImage, async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  if (!req.file) return res.status(400).json({ message: 'Aucun fichier reçu' });

  const imagePath = `/public/users/${userId}/${req.file.filename}`;

  try {
    await prisma.etudiant.update({
      where: { id: userId },
      data: { image: imagePath },
    });

    res.json({ message: 'Image utilisateur uploadée', imagePath });
  } catch (error) {
    res.status(500).json({ message: 'Erreur base de données', error: error.message });
  }
});

export default router;
