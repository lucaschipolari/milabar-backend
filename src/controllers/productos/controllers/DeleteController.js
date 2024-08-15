import HttpCodes from 'http-status-codes';

import ProductoModel from '../../../models/productoSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class DeleteController {
  static async deleteProductos(req, res) {
    const {
      params: { id },
    } = req;
    try {
      const action = await ProductoModel.updateOne(
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
          message: 'El producto indicado no fue encontrado',
        });
        return;
      }
      res.json({
        data: null,
        message: 'Producto eliminado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error eliminando el recurso indicado');
    }
  }
}
