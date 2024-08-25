import express from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isMyAccount } from '../../middlewares/isMyAccount.js';
import { PostController } from '../../controllers/users/controllers/PostController.js';
import { PutController } from '../../controllers/users/controllers/PutController.js';
import { GetController } from '../../controllers/users/controllers/GetController.js';

export const userRouterPrueba = express.Router();
export const userRouter = express.Router();

userRouterPrueba.post('/users', PostController.createUser);

// Ruta para habilitar/deshabilitar un usuario
userRouterPrueba.put('/users/:id', PutController.toggleUserStatus);

// Ruta para obtener usuarios habilitados
userRouterPrueba.get('/users/enabled', GetController.getUsersAble);

// Ruta para obtener usuarios deshabilitados
userRouterPrueba.get('/users/disabled', GetController.getUsersDisable);

userRouterPrueba.get('/users/detail/:id', GetController.getUserById);

userRouter.get('/:id', GetController.getUserById);

userRouter.put('/:id', PutController.putUsers);
