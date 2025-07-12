import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../utils/prisma.js';
import passport from '../config/passport.js';

const router = Router();
const SALT_ROUNDS = 10;

router.post('/sign-up', async (req, res) => {
  const { prenom, nom, email, motDePasse } = req.body;
  const existingUser = await prisma.etudiant.findUnique({ where: { email } });
  if (existingUser) return res.status(400).json({ message: 'Email déjà utilisé' });

  const hashedPassword = await bcrypt.hash(motDePasse, SALT_ROUNDS);
  const newUser = await prisma.etudiant.create({
    data: { prenom, nom, email, motDePasse: hashedPassword },
  });
  res.status(201).json(newUser);
});

router.post('/sign-in', async (req, res) => {
  const { email, motDePasse } = req.body;
  const user = await prisma.etudiant.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: 'Identifiants invalides' });

  const valid = await bcrypt.compare(motDePasse, user.motDePasse);
  if (!valid) return res.status(401).json({ message: 'Identifiants invalides' });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await prisma.etudiant.update({
    where: { id: user.id },
    data: { accessToken, refreshToken },
  });

  res.json({ accessToken, refreshToken });
});

router.post('/token', async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'Refresh token manquant' });

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await prisma.etudiant.findUnique({ where: { id: payload.id } });
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ message: 'Refresh token invalide' });
    }
    const newAccessToken = generateAccessToken(user);
    await prisma.etudiant.update({ where: { id: user.id }, data: { accessToken: newAccessToken } });
    res.json({ accessToken: newAccessToken });
  } catch {
    res.status(403).json({ message: 'Refresh token invalide' });
  }
});

router.delete('/logout', async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).json({ message: 'Refresh token manquant' });

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    await prisma.etudiant.update({
      where: { id: payload.id },
      data: { accessToken: null, refreshToken: null },
    });
    res.json({ message: 'Déconnexion réussie' });
  } catch {
    res.status(403).json({ message: 'Refresh token invalide' });
  }
});

router.get('/profile', async (req, res) => {
  const userId = req.auth?.id;
  if (!userId) return res.status(401).json({ message: 'Non authentifié' });

  const user = await prisma.etudiant.findUnique({
    where: { id: userId },
    select: { id: true, prenom: true, nom: true, email: true, image: true },
  });
  res.json({ message: 'Bienvenue !', user });
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login-fail' }),
  (req, res) => {
    res.redirect(`http://localhost:5173?accessToken=${req.user.accessToken}&refreshToken=${req.user.refreshToken}`);
  }
);

function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '90d' }
  );
}

function generateRefreshToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '120d' }
  );
}

export default router;
