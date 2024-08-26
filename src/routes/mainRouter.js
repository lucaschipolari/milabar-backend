import express from 'express';

import {productoRouter} from './routers/productoRouter.js';
import authRoutes from './routers/auth.js';

import { contactRouter } from './routers/contactRouter.js';
import { shoppingCartRouter } from './routers/shoppingCartRouter.js';
import { userRouterPrueba } from './routers/userRouter.js';

import { userRouter } from './routers/userRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/productos', productoRouter);

mainRouter.use('/users', authRoutes);

mainRouter.use('/contact', contactRouter);

mainRouter.use('/shoppingCart', shoppingCartRouter);

mainRouter.use('/users', userRouter);

mainRouter.use('/profile', userRouter);


