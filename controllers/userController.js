import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res) => {
    const { name, phone, email, idNumber, password, referredBy } = req.body;

    try {
        const userExistsByEmail = await User.findOne({ email });
        if (userExistsByEmail) {
            return res.status(400).json({ message: 'El email ya está registrado' });
        }

        const userExistsByPhone = await User.findOne({ phone });
        if (userExistsByPhone) {
            return res.status(400).json({ message: 'El teléfono ya está registrado' });
        }

        const userExistsByIdNumber = await User.findOne({ idNumber });
        if (userExistsByIdNumber) {
            return res.status(400).json({ message: 'El id ya está registrado' });
        }

        const user = await User.create({
            name,
            phone,
            email,
            idNumber,
            password,
            referredBy,
        });

        if (referredBy) {
            await User.findByIdAndUpdate(referredBy, { $push: { referrals: user._id } });
        }

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

export const getUserReferrals = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('referrals');
        res.json(user.referrals);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener referidos' });
    }
};
