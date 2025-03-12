import express from 'express';
import { registerUser, loginUser, getUserReferrals } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/referrals', authMiddleware, getUserReferrals);

export default router;
