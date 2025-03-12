import express from 'express';
import passport from 'passport';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticación con Facebook y Google
 */

/**
 * @swagger
 * /api/auth/facebook:
 *   get:
 *     summary: Iniciar sesión con Facebook
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirige a Facebook para autenticación
 */

/**
 * @swagger
 * /api/auth/facebook/callback:
 *   get:
 *     summary: Callback de Facebook después de la autenticación
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Usuario autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 */

/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     summary: Iniciar sesión con Google
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirige a Google para autenticación
 */

/**
 * @swagger
 * /api/auth/google/callback:
 *   get:
 *     summary: Callback de Google después de la autenticación
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Usuario autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 */

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  (req, res) => {
    const { user, token } = req.user;
    res.json({ user, token });
  }
);

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const { user, token } = req.user;
    res.json({ user, token });
  }
);

export default router;
