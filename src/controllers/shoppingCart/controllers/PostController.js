import HttpCodes from 'http-status-codes';
import ShoppingModel from '../../../models/shoppingCartSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async addProductToCart(req, res) {
    // const { productId, cantidad } = req.body;
    const { products, total } = req.body;

    const newCart = new ShoppingModel({
      products,
      total,
    });

    try {
      // Buscar el carrito del usuario
      //   const cart = await ShoppingModel.findOne({ userId: req.user.id });

      // Si no existe crea uno nuevo
      //   if (!cart) {
      //   const newCart = new ShoppingModel({
      //     //   userId: req.user.id,
      //     productos: [{ productId, cantidad }],
      await newCart.save();
      return res.status(HttpCodes.CREATED).json({
        data: newCart,
        message: 'Carrito creado y producto agregado correctamente',
      });

      //   }

      // Si existe actualizar el carrito
      //   const existingProductIndex = cart.productos.findIndex(
      //     (p) => p.productId === productId,
      //   );
      //   if (existingProductIndex > -1) {
      //     cart.productos[existingProductIndex].cantidad += cantidad;
      //   } else {
      //     cart.productos.push({ productId, cantidad });
      //   }

      //   await cart.save();
      //   return res.status(HttpCodes.OK).json({
      //     data: cart,
      //     message: 'Producto agregado al carrito correctamente',
      //   });
    } catch (e) {
      return internalError(
        res,
        e,
        'Ocurrio un error al agregar el producto al carrito',
      );
    }
  }
}
