import ContactModel from '../../../models/contactSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetController {
  static async getContact(_, res) {
    try {
      const data = await ContactModel.find();

      const filteredData = data.map((contact) => {
        return {
          id: contact._doc._id,
          issue: contact._doc.issue,
          name: contact._doc.name,
          lastname: contact._doc.lastname,
          email: contact._doc.email,
          message: contact._doc.message,
        };
      });

      res.json({
        data: filteredData,
        message: 'mensaje encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrio un error al leer la lista de mensajes');
    }
  }
}
