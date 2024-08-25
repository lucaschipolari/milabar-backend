import express from 'express';
import { ShoppingCart } from '../../controllers/shoppingCart/index.js';
import { post_shoppingCartValidationSchema } from '../../helpers/validationsSchemas/shoppingCartValidation.js';
import { validateBody } from '../../middlewares/validateBody.js';

export const shoppingCartRouter = express.Router();

// shoppingCartRouter.get('/', ShoppingCart.GetController.getCart);
shoppingCartRouter.post(
  '/',
  (req, res, next) =>
    validateBody(req, res, next, post_shoppingCartValidationSchema),
  ShoppingCart.PostController.addProductToCart,
);
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
