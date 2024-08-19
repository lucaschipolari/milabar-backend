import express from 'express';
import {productoRouter} from './routers/productoRouter.js';
import authRoutes from './routers/auth.js';

export const mainRouter = express.Router();

mainRouter.use('/productos', productoRouter);


mainRouter.use('/auth', authRoutes);
