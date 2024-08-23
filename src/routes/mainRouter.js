import express from 'express';
import { productoRouter } from './routers/productoRouter.js';
import { contactRouter } from './routers/contactRouter.js';
import { shoppingCartRouter } from './routers/shoppingCartRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/productos', productoRouter);
mainRouter.use('/contact', contactRouter);
mainRouter.use('/shoppingCart', shoppingCartRouter);
