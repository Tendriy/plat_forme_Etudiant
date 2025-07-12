import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import prisma from '../utils/prisma.js';
import passport from '../config/passport.js';
import { sendOTP } from '../utils/mailer.js';
import crypto from 'crypto';
import dayjs from 'dayjs';

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

  const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  const user = await prisma.etudiant.findUnique({ where: { id: payload.id } });
  if (!user || user.refreshToken !== refreshToken) {
    return res.status(403).json({ message: 'Refresh token invalide' });
  }
  const newAccessToken = generateAccessToken(user);
  await prisma.etudiant.update({ where: { id: user.id }, data: { accessToken: newAccessToken } });
  res.json({ accessToken: newAccessToken });
 
});

router.delete('/logout', async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).json({ message: 'Refresh token manquant' });

  const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  await prisma.etudiant.update({
    where: { id: payload.id },
    data: { accessToken: null, refreshToken: null },
  });
  res.json({ message: 'Déconnexion réussie' });
  
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

router.post('/request-reset', async (req, res) => {
  const { email } = req.body;

  const user = await prisma.etudiant.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: 'Email introuvable' });

  const otp = crypto.randomInt(100000, 999999).toString();
  const otpExpiresAt = dayjs().add(5, 'minute').toDate();

  await prisma.etudiant.update({
    where: { email },
    data: { otpCode: otp, otpExpiresAt }
  });

  await sendOTP(email, otp);

  res.json({ message: 'Code envoyé à votre email.' });
});


router.post('/verify-otp', async (req, res) => {
  const { email, otpCode } = req.body;

  const user = await prisma.etudiant.findUnique({ where: { email } });

  if (!user || user.otpCode !== otpCode || new Date() > user.otpExpiresAt) {
    return res.status(400).json({ message: 'Code invalide ou expiré' });
  }

  res.json({ message: 'Code validé. Vous pouvez réinitialiser votre mot de passe.' });
});

router.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await prisma.etudiant.findUnique({ where: { email } });
  if (!user || !user.otpCode || new Date() > user.otpExpiresAt) {
    return res.status(400).json({ message: 'Code expiré ou invalide' });
  }

  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.etudiant.update({
    where: { email },
    data: {
      motDePasse: hashed,
      otpCode: null,
      otpExpiresAt: null
    }
  });

  res.json({ message: 'Mot de passe réinitialisé avec succès.' });
});

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
