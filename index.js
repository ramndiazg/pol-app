import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from './routes/authRoutes.js'; // Importa las rutas de autenticación
import passport from './config/passport.js'; // Importa Passport
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import corsOptions from "./utils/cors.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
const PORT = process.env.PORT || 5001;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pol-App API",
      version: "1.0.0",
      description: "API para la aplicación Pol-App",
    },
    servers: [
        {
            url: 'http://localhost:5001',
            description: 'Servidor local',
        },
        {
            url: 'https://vercel.com',
            description: 'Servidor de producción',
        },
    ],
  },
  apis: [
    "./routes/adminRoutes.js",
    "./routes/newsRoutes.js",
    "./routes/userRoutes.js",
    './routes/authRoutes.js',
  ],
};
const specs = swaggerJsdoc(options);
dotenv.config();
connectToDB();

app.use(express.json());

app.use(passport.initialize());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/auth', authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors(corsOptions));
app.use(limiter);
app.use(helmet());

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export { app, server };
