// ProgressModel.js
import mongoose from 'mongoose'

const ProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Courses',
    required: true,
  },
  completedExercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercises',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

const Progress =
  mongoose.models.Progress || mongoose.model('Progress', ProgressSchema)

export default Progress
