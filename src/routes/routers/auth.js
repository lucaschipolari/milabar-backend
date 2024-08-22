import { Router } from 'express';
import { Auth } from '../../controllers/auth/index.js';



const router = Router();

// Ruta de registro
router.post('/register', Auth.PostController.register);

// Ruta de login
router.post('/login', Auth.PostController.login);



export default router;
