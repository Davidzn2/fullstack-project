const Task = require('../models/TaskModel')

// Vamos a crear el CRUD (Create, Read, Update, Delete)
// Los verbos son: POST, GET, PUT, DELETE
module.exports = {
    findOneById: async (req, res) => {
        const { id } = req.params;
        const task = await Task.findById(id)
        return res.status(200).json(task)
    },
    findAll: async (req, res) => {
        const tasks = await Task.find()
        return res.status(200).json(tasks)
    },
    create: async (req, res) => {
        const newTask = new Task({ ...req.body })
        const insertedTask = await newTask.save()
        return res.status(201).json(insertedTask)
    },
    setTaskDone: async (req, res) => {
        const { id } = req.params;
        await Task.updateOne({ _id: id }, req.body)
        const UpdatedTask = await Task.findById(id)
        return res.status(200).json(UpdatedTask)
    },
    deleteTask: async (req, res) => {
        const { id } = req.params;
        const taskToDelete = Task.findByIdAndDelete(id)
        return res.status(200).json(taskToDelete)
    }
}