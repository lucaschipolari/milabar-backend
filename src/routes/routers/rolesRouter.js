import express from 'express';
import { Roles } from '../../controllers/roles/index.js';
import { Users } from '../../controllers/users/index.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const rolesRouter = express.Router();

rolesRouter.get('/', Roles.GetController.getRoles);

rolesRouter.put(
  '/:id',
  isAuthenticated,
  isAdmin,
  Users.PutController.updateUserRoles,
);
