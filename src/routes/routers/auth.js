import { Router } from 'express';
import { Auth } from '../../controllers/auth/index.js';

const router = Router();

router.post('/register', Auth.PostController.register);

router.post('/login', Auth.PostController.login);

export default router;
