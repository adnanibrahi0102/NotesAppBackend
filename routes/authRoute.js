import express from 'express';
import { loginController, registerController } from '../controllers/authController.js';

const router=express.Router();

//auth routes
router.post('/register',registerController);
router.post('/login',loginController);

export default router;