import express from 'express';
import { registerUser, loginUser, applyTechnician, uploadAvatar, deleteAvatar, getTechnicianProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/auth.js';
import {profileUpload, nicUpload} from '../middlewares/upload.js';

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.post('/login', loginUser);
userRoute.get('/technician/:id', protect, getTechnicianProfile);

//apply technician
userRoute.post('/apply-technician', protect, nicUpload.fields([
  { name: 'nicFront', maxCount: 1 },
  { name: 'nicBack', maxCount: 1 }
]), applyTechnician);

//profile pic
userRoute.post('/upload-avatar', protect, profileUpload.single("profileImage"), uploadAvatar);
userRoute.delete('/delete-avatar', protect, deleteAvatar);

export default userRoute;