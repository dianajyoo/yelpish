import express from 'express';
import auth from '../controllers/auth';
import { validate, authenticate, setCookie } from '../middleware/authenticate';

const router = express.Router();

export const registerUser = router.post(
  '/register',
  validate,
  auth.registerUser
);
export const loginUser = router.post('/login', auth.loginUser);
export const verifyUser = router.get('/verify', authenticate, auth.verifyUser);
