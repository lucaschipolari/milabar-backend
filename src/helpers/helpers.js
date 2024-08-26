import HttpCodes from 'http-status-codes';

export const internalError = (res, e, message = 'Ocurrió un error') => {
  res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
    data: null,
    message,
  });
};
