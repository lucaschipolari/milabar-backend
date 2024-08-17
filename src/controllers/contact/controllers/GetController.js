import HttpCodes from 'http-status-codes';
import ContactModel from '../../../models/contactSchema.js';

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
        message: null,
      });
    } catch (e) {
      console.error(e);
      res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
        data: null,
        message: 'Ocurrio un error al leer la lista de mensajes',
      });
    }
  }
}
