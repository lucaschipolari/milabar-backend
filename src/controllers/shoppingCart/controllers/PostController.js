import HttpCodes from 'http-status-codes';
import ShoppingModel from '../../../models/shoppingCartSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async addProductToCart(req, res) {
    const { products, total, tableNumber, details } = req.body;

    const newCart = new ShoppingModel({
      products,
      total,
      tableNumber,
      details,
    });

    try {
      await newCart.save();
      return res.status(HttpCodes.CREATED).json({
        data: newCart,
        message: 'Carrito creado y producto agregado correctamente',
      });
    } catch (e) {
      return internalError(
        res,
        e,
        'Ocurrio un error al agregar el producto al carrito',
      );
    }
  }
}
