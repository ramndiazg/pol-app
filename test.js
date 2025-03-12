import request from 'supertest';
import { app, server } from './index.js';
import mongoose from 'mongoose';

describe('GET /api/news', () => {
    it('should get all news', async () => {
        const res = await request(app).get('/api/news');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

describe('POST /api/users/register', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'Test User',
                email: 'test@example.com',
                password: 'password123',
                phone: '1234567890',
                idNumber: '123456789',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('token');
    });
});

afterAll(async () => {
    await mongoose.connection.close();
    server.close();
});