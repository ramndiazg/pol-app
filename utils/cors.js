const allowedOrigins = [
    'http://localhost:3000',
    'https://vercel.com',
    'https://otrodominio.com',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Domain not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};

export default corsOptions;
