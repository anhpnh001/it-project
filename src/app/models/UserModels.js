import { Verified } from 'lucide-react';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Please provide a username'],
    },
    email:{
        type: String,
        required: [true, 'Please provide a email'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
    },
    isVerfiedd:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    VerifyTokenExpixy: String,
});


const Users =
 mongoose.models.Users || mongoose.model('Users', UserSchema);

export default Users;