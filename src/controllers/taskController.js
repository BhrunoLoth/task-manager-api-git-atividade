const taskService = require('../services/taskService');

function createTask(req, res) {
  const { title, description } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({
      error: 'Task title is required'
    });
  }

  const task = taskService.createTask({ title, description });

  return res.status(201).json(task);
}

function listTasks(req, res) {
  const tasks = taskService.listTasks();
  return res.status(200).json(tasks);
}

function findTaskById(req, res) {
  const task = taskService.findTaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }

  return res.status(200).json(task);
}

function updateTask(req, res) {
  const task = taskService.updateTask(req.params.id, req.body);

  if (!task) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }

  return res.status(200).json(task);
}

function deleteTask(req, res) {
  const deletedTask = taskService.deleteTask(req.params.id);

  if (!deletedTask) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }

  return res.status(200).json({
    message: 'Task deleted successfully',
    task: deletedTask
  });
}

module.exports = {
  createTask,
  listTasks,
  findTaskById,
  updateTask,
  deleteTask
};
