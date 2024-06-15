import mongoose from 'mongoose'

// title, content, BlocklyXML
const ExerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  content: {
    type: String,
    required: [true, 'Please provide a content'],
  },
  blocklyXML: {
    type: String,
    required: [true, 'Please provide a BlocklyXML'],
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Courses',
    },
  ],
  difficulty: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

const Exercises =
  mongoose.models.Exercises || mongoose.model('Exercises', ExerciseSchema)

export default Exercises
