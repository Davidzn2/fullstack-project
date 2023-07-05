const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        default: "Que vas a hacer hoy?",
        required: true
    },
    content: {
        type: String
    },
    asignee:{
        type: String
    },
    done: {
        type: Boolean,
        default: false,
        required: true
    },
    dueDate: {
        type: Date,
    },
    isActive:{
        type: Boolean,
        default: true
    }
})

const Task = mongoose.model("Task", taskSchema)
module.exports = Task