import HttpCodes from 'http-status-codes';

export const isAdmin = (req, res, next) => {
  const { user } = req;

  if (
    !user.roles.some(
      (role) => role.name === 'admin' || role.name === 'superadmin',
    )
  ) {
    res.status(HttpCodes.FORBIDDEN).json({
      data: null,
      message: 'No tienes permiso para acceder a este recurso',
    });
    return;
  }

  next();
};
