let tasks = [];
let nextId = 1;

function createTask(data) {
  const task = {
    id: nextId,
    title: data.title,
    description: data.description || '',
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(task);
  nextId += 1;

  return task;
}

function listTasks() {
  return tasks;
}

function findTaskById(id) {
  return tasks.find((task) => task.id === Number(id));
}

function updateTask(id, data) {
  const task = findTaskById(id);

  if (!task) {
    return null;
  }

  task.title = data.title ?? task.title;
  task.description = data.description ?? task.description;
  task.completed = data.completed ?? task.completed;
  task.updatedAt = new Date().toISOString();

  return task;
}

function deleteTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id === Number(id));

  if (taskIndex === -1) {
    return null;
  }

  const [deletedTask] = tasks.splice(taskIndex, 1);
  return deletedTask;
}

module.exports = {
  createTask,
  listTasks,
  findTaskById,
  updateTask,
  deleteTask
};
