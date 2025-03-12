import express from 'express';
import { createNews, getNews, likeNews } from '../controllers/newsController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createNews);
router.get('/', getNews);
router.post('/:id/like', authMiddleware, likeNews);

export default router;
