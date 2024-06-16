// UserModel.js
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  role: {
    type: String,
    enum: ['Student', 'Teacher', 'Admin'],
    default: 'Student',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verifyTokenExpiry: String,
  progress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Progress',
    },
  ],
})

const Users = mongoose.models.Users || mongoose.model('Users', UserSchema)

export default Users
