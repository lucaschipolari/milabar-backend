import express from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isMyAccount } from '../../middlewares/isMyAccount.js';

import { Auth } from '../../controllers/auth/index.js';
import { Users } from '../../controllers/users/index.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

export const userRouter = express.Router();

userRouter.post('/register', Users.PostController.postUser);

userRouter.post('/login', Auth.PostController.login);

userRouter.get('/:id', isAuthenticated, Users.GetController.getUserById);

userRouter.put('/:id', isAuthenticated, Users.PutController.putUsers);
