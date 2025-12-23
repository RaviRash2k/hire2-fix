import express from 'express';
import { registerUser, loginUser, applyTechnician, uploadAvatar, deleteAvatar } from '../controllers/userController.js';
import { protect } from '../middlewares/auth.js';
import upload from '../middlewares/upload.js';

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.post('/apply-technician', protect, applyTechnician);
userRoute.post('/upload-avatar', protect, upload.single("profileImage"), uploadAvatar);
userRoute.delete('/delete-avatar', protect, deleteAvatar);

export default userRoute;