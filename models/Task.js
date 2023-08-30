import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [50, 'name can not be more than 50 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.model('Task', TaskSchema)
