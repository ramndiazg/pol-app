import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
dotenv.config();
connectToDB();

app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
