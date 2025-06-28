function verifyToken(req, res, next) {
    const token = req.cookies?.session_token;
  console.log("TOOOken", token);
  
    if (!token) {
      console.log("Token manquant dans cookie:", req.cookies);
      return res.status(401).json({ error: true, message: "Token d'authentification manquant" });
    }
  
    next();
  }
  
  export default verifyToken;
  