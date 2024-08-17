import express from 'express';
import { Productos } from '../../controllers/productos/index.js';

export const productoRouter = express.Router();

productoRouter.post('/', Productos.PostController.postProductos);
productoRouter.get('/', Productos.GetController.getProductos);
productoRouter.get('/:id', Productos.GetController.getProducto);
productoRouter.put('/:id', Productos.PutController.putProductos);
productoRouter.delete('/:id', Productos.DeleteController.deleteProductos);
