import express from 'express';
import { getUser, Login, logout, register, updatePassword, updateUserProfile } from '../controller/usersController';
import { isAuthenticated } from '../MIDDLEWARES/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',Login);
router.get('/logout',isAuthenticated,logout);
router.get('/getUser',isAuthenticated,getUser);
router.put('/updateuser',isAuthenticated,updateUserProfile);
router.put('/updatepassword',isAuthenticated,updatePassword);