import express from 'express';
import { ShoppingCart } from '../../controllers/shoppingCart/index.js';

export const shoppingCartRouter = express.Router();

// shoppingCartRouter.get('/', ShoppingCart.GetController.getCart);
shoppingCartRouter.post('/', ShoppingCart.PostController.addProductToCart);
// shoppingCartRouter.put(
//   '/:id',
//   ShoppingCart.PutController.updateProductQuantity,
// );
// shoppingCartRouter.all(
//   '/:id',
//   ShoppingCart.DeleteController.removeProductFromCart,
// );
// shoppingCartRouter.delete(
//   '/',
//   ShoppingCart.DeleteController.emptyCartController,
// );
