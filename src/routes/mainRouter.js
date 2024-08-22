import express from 'express';

import {productoRouter} from './routers/productoRouter.js';
import authRoutes from './routers/auth.js';

import { productoRouter } from './routers/productoRouter.js';

import { contactRouter } from './routers/contactRouter.js';
import { userRouterPrueba } from './routers/userRouterPrueba.js';



export const mainRouter = express.Router();

mainRouter.use('/productos', productoRouter);



mainRouter.use('/auth', authRoutes);

mainRouter.use('/contact', contactRouter);

mainRouter.use('/usersPrueba', userRouterPrueba);

