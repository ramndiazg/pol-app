import express from 'express';
import { createNews, getNews, likeNews } from '../controllers/newsController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: News
 *   description: Operaciones relacionadas con noticias
 */

/**
 * @swagger
 * /api/news:
 *   post:
 *     summary: Crear una nueva noticia (solo para administradores)
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *             example:
 *               title: Nueva Noticia
 *               content: Este es el contenido de la noticia.
 *               image: https://example.com/image.jpg
 *     responses:
 *       201:
 *         description: Noticia creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       403:
 *         description: No autorizado (solo para administradores)
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Obtener todas las noticias
 *     tags: [News]
 *     responses:
 *       200:
 *         description: Lista de noticias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /api/news/{id}/like:
 *   post:
 *     summary: Dar like a una noticia (solo para usuarios)
 *     tags: [News]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la noticia
 *     responses:
 *       200:
 *         description: Like agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       400:
 *         description: Ya diste like a esta noticia
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error del servidor
 */

router.post('/', authMiddleware, createNews);
router.get('/', getNews);
router.post('/:id/like', authMiddleware, likeNews);

export default router;
