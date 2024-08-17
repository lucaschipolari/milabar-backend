import HttpCodes from 'http-status-codes';
import ContactModel from '../../../models/contactSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class DeleteController {
  static async deleteContact(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const action = await ContactModel.updateOne(
        {
          _id: id,
          isActive: true,
        },
        {
          isActive: false,
        },
      );

      if (action.matchedCount === 0) {
        res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'El mensaje indicado no fue encontrado',
        });
      }

      res.json({
        data: null,
        message: 'Mensaje eliminado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un error eliminando el recurso indicado');
    }
  }
}
