import express from 'express';
import auth from '../controllers/auth';

const router = express.Router();

export const registerUser = router.post('/register', auth.registerUser);
export const verifyUser = router.get('/verify', auth.verifyUser);
export const loginUser = router.post('/login', auth.loginUser);