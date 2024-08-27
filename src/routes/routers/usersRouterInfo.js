// Ruta para habilitar/deshabilitar un usuario
import express from 'express';
import { Users } from '../../controllers/users/index.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const userRouterInfo = express.Router();

userRouterInfo.put(
  '/status/:id',
  isAuthenticated,
  isAdmin,
  Users.PutController.toggleUserStatus,
);

userRouterInfo.get(
  '/status/enabled',
  isAuthenticated,
  isAdmin,
  Users.GetController.getUsersAble,
);

userRouterInfo.get(
  '/status/disabled',
  isAuthenticated,
  isAdmin,
  Users.GetController.getUsersDisable,
);

userRouterInfo.get(
  '/status/detail/:id',
  isAuthenticated,
  isAdmin,
  Users.GetController.getUserById,
);
