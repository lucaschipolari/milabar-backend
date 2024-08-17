import express from 'express';
import { Productos } from '../../controllers/productos/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import {post_put_productoValidationSchema } from '../../helpers/validationSchemas/productosValidationSchemas.js';

export const productoRouter = express.Router();

productoRouter.post('/agregar-producto', (req,res,next)=>validateBody(req, res, next, post_put_productoValidationSchema),Productos.PostController.postProductos);
productoRouter.get('/', Productos.GetController.getProductos);
productoRouter.get('detalle/:id', Productos.GetController.getProducto);
productoRouter.put('/detalle/:id',Productos.PutController.putProductos);
productoRouter.delete('/:id', Productos.DeleteController.deleteProductos);