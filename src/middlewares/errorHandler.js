import HttpException from '../utils/httpException.js'

export default function errorHandler(err, _req, res, _next) {
  if (err instanceof HttpException) {
    return res.status(err.status).json({ error: true, message: err.message });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: true, message: 'Token invalide ou manquant' });
  }

  console.error(err);
  res.status(500).json({ error: true, message: 'Erreur interne du serveur' });
}
