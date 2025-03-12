import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import corsOptions from "./utils/cors.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
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
  ],
};
const specs = swaggerJsdoc(options);
dotenv.config();
connectToDB();

app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors(corsOptions));
app.use(limiter);
app.use(helmet());

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
