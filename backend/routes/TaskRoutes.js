const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const Task = require('../models/TaskModel');

router.get('/', TaskController.findAll)
router.get('/:id', TaskController.findOneById);
router.post('/', TaskController.create)
router.put('/:id', TaskController.setTaskDone)
router.delete('/:id', TaskController.deleteTask)

module.exports = router;
