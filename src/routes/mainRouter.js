import express from 'express';

import { productoRouter } from './routers/productoRouter.js';
// import authRoutes from './routers/auth.js';

import { contactRouter } from './routers/contactRouter.js';
import { shoppingCartRouter } from './routers/shoppingCartRouter.js';
import { userRouter } from './routers/userRouter.js';
import { userRouterInfo } from './routers/usersRouterInfo.js';

export const mainRouter = express.Router();

mainRouter.use('/productos', productoRouter);

mainRouter.use('/contact', contactRouter);

mainRouter.use('/shoppingCart', shoppingCartRouter);

mainRouter.use('/users', userRouter);

mainRouter.use('/profile', userRouter);

mainRouter.use('/user-info', userRouterInfo);
