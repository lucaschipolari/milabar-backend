import express from 'express';
import { productoRouter } from './routers/productoRouter.js';

import { contactRouter } from './routers/contactRouter.js';
import { userRouterPrueba } from './routers/userRouterPrueba.js';


export const mainRouter = express.Router();

mainRouter.use('/productos', productoRouter);

mainRouter.use('/contact', contactRouter);

mainRouter.use('/usersPrueba', userRouterPrueba);
