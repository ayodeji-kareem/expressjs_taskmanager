import express from 'express'

const taskRouter = express.Router()

import { getAllTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/tasks.js'

taskRouter.route('/').get(getAllTasks).post(createTask)
taskRouter.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default taskRouter