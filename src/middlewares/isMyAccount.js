import jwt from 'jsonwebtoken';
import HttpCodes from 'http-status-codes';

export const isMyAccount = (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const usuarioAutenticadoId = decoded.user.id;

    const { id } = req.params;

    if (usuarioAutenticadoId !== id) {
      return res.status(HttpCodes.FORBIDDEN).json({
        msg: 'No tienes permiso para acceder a esta sección',
      });
    }

    next();
  } catch (error) {
    res.status(HttpCodes.UNAUTHORIZED).json({
      msg: 'Autenticación fallida',
    });
  }
};
