import HttpCodes from 'http-status-codes';
import ContactModel from '../../../models/contactSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PutController {
  static async putContact(req, res) {
    const {
      body,
      params: { id },
    } = req;

    try {
      const action = await ContactModel.updateOne(
        {
          _id: id,
        },
        body,
      );

      if (action.matchedCount === 0) {
        res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'El mensaje indicado no fue encontrado',
        });
      }

      res.json({
        data: null,
        message: 'Lista de mensajes actualizado correctamente',
      });
    } catch (e) {
      internalError(
        res,
        e,
        'Ocurrio un error actualizando el recurso indicado',
      );
    }
  }
}
