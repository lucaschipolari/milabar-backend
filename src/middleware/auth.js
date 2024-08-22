import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {

  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];  
  // Si no hay token, denegar el acceso
  if (!token) {
    return res.status(401).json({ msg: 'No hay token, permiso denegado' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Asegúrate de que uses el mismo secreto que en el controlador
    req.user = decoded;  // Añadir el usuario decodificado al request
    next();  // Continuar con el siguiente middleware o controlador
  } catch (error) {
    return res.status(401).json({ msg: 'Token no es válido' });
  }
};
