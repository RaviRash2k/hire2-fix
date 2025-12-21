import express from 'express';
import { registerUser, loginUser, applyTechnician } from '../controllers/userController.js';
import { protect } from '../middlewares/auth.js';

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.post('/apply-technician', protect, applyTechnician);

export default userRoute;