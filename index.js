import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';

const app = express();
dotenv.config();
connectToDB()

app.use(express.json());

// Routes

app.listen(process.env.PORT, () => {
    console.log('Server started');
});


