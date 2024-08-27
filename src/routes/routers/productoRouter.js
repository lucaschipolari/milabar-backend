import express from 'express';
import { Productos } from '../../controllers/productos/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_put_productoValidationSchema } from '../../helpers/validationSchemas/productosValidationSchemas.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const productoRouter = express.Router();

productoRouter.post(
  '/agregar-producto',
  isAuthenticated,
  isAdmin,
  (req, res, next) =>
    validateBody(req, res, next, post_put_productoValidationSchema),
  Productos.PostController.postProductos,
);
productoRouter.get('/', Productos.GetController.getProductos);

productoRouter.get(
  'detalle/:id',
  isAuthenticated,
  isAdmin,
  Productos.GetController.getProducto,
);
productoRouter.put(
  '/detalle/:id',
  isAuthenticated,
  isAdmin,
  Productos.PutController.putProductos,
);
productoRouter.delete(
  '/:id',
  isAuthenticated,
  isAdmin,
  Productos.DeleteController.deleteProductos,
);
