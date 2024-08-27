import express from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isMyAccount } from '../../middlewares/isMyAccount.js';
import { Users } from '../../controllers/users/index.js';
import { PutController } from '../../controllers/users/controllers/PutController.js';
import { GetController } from '../../controllers/users/controllers/GetController.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_userValidationSchema } from '../../helpers/validationsSchemas/usersValidationSchema.js';

export const userRouterPrueba = express.Router();
export const userRouter = express.Router();

userRouter.post('/register',(req, res, next) => validateBody(req, res, next, post_userValidationSchema), Users.PostController.postUser);

// Ruta para habilitar/deshabilitar un usuario
userRouterPrueba.put('/users/:id', PutController.toggleUserStatus);

// Ruta para obtener usuarios habilitados
userRouterPrueba.get('/users/enabled', GetController.getUsersAble);

// Ruta para obtener usuarios deshabilitados
userRouterPrueba.get('/users/disabled', GetController.getUsersDisable);

userRouterPrueba.get('/users/detail/:id', GetController.getUserById);

userRouter.get('/:id', Users.GetController.getUserById);

userRouter.put('/:id', Users.PutController.putUsers);
