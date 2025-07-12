import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from '../utils/prisma.js';
import jwt from 'jsonwebtoken';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
const callbackURL = process.env.GOOGLE_CALLBACK_URL

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: callbackURL,
}, async (_accessToken, _googleRefreshToken, profile, done) => {
  try {
    const email = profile.emails[0].value;
    let user = await prisma.etudiant.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.etudiant.create({
        data: {
          prenom: profile.name?.givenName || null,
          nom: profile.name?.familyName || '',
          email,
          motDePasse: '',
          isAuthGoogle: true,
          image: profile.photos[0]?.value || null,
        },
      });
    } else if (!user.isAuthGoogle) {
      user = await prisma.etudiant.update({
        where: { email },
        data: { isAuthGoogle: true },
      });
    }

    const tokenPayload = { id: user.id, email: user.email };
    const accessToken = jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '90d' });
    const refreshToken = jwt.sign(tokenPayload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '120d' });

    await prisma.etudiant.update({
      where: { id: user.id },
      data: { refreshToken, accessToken },
    });

    done(null, { ...user, accessToken, refreshToken });
  } catch (error) {
    done(error);
  }
}));

export default passport;
