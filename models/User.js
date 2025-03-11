import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    idNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    referredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    referrals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    profile: {
        address: {
            type: String,
            trim: true,
        },
        photo: {
            type: String,
            trim: true,
        },
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;