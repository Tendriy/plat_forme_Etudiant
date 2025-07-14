function requireAuth(req, _res, next) {
  if (!req.auth?.id) {
    throw new HttpException('Non autorisé.', 400)
  }
  next();
}

export default requireAuth