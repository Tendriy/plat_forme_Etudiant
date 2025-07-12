import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import { expressjwt } from 'express-jwt';
import session from 'express-session';
import passport from './config/passport.js';
import setupChatSocket from './socket/chatSocket.js';

const app = express();
const server = http.createServer(app)

app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use('/public', express.static(path.join(process.cwd(), 'public')));
setupChatSocket(server) 

app.use(expressjwt({
  secret: process.env.ACCESS_TOKEN_SECRET,
  algorithms: ['HS256'],
}).unless({
  path: [
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/token',
    '/auth/google',
    '/auth/google/callback',
    '/auth/request-reset',
    '/auth/verify-otp',
    '/auth/reset-password'
  ]
}));

for (const [pathName, router] of Object.entries(routes)) {
  app.use(`/${pathName}`, router);
}

app.use(errorHandler);

export default app;
