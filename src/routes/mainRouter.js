import express from 'express';
import {productoRouter} from './routers/productoRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/productos', productoRouter);