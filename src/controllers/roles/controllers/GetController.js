import HttpCodes from 'http-status-codes';
import Role from '../../../models/roleSchema.js';

export class GetController {
  static async getRoles(req, res) {
    try {
      const dataRoles = await Role.find({
        name: { $nin: ['superadmin', 'user'] },
      });

      res.json({
        data: dataRoles,
        message: null,
      });
    } catch (e) {
      console.error(e);
      res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
        data: null,
        message: 'Ocurrió un error al leer la lista de roles',
      });
    }
  }
}
