import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Admin from '../models/Admin.js';

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Not autorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        const admin = await Admin.findById(decoded.id);

        if (!user && !admin) {
            return res.status(401).json({ message: 'Not autorized' });
        }

        req.user = user || admin;
        req.role = user ? 'user' : 'admin';
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid Token' });
    }
};

export default authMiddleware;
