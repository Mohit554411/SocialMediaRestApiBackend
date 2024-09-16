import express from 'express';
import AuthController from '../controllers/authController.js';

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post('/register', (req,res,next)=>{authController.register(req,res,next)});
authRouter.post('/login', (req,res,next)=>{authController.login(req,res,next)});

export default authRouter;