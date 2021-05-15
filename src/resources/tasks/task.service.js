const taskRepo = require('./task.memory.repository');
const Task = require('./task.model');

const getAll = () => taskRepo.getAll();

const addTask = (task) => taskRepo.addTask(new Task(task));

const removeTask = (id) => taskRepo.removeTask(id);

const getTask = (id) => taskRepo.getTask(id);

const updateTask = (id, body) => taskRepo.updateTask(id, body);

module.exports = {
    getAll,
    addTask,
    removeTask,
    getTask,
    updateTask,
};
