const taskService = require('../services/taskService');

const getAll = async (req, res, next) => {
  try {
    const tasks = await taskService.getAll();

    res.status(200).json(tasks);
  } catch (error) {
    console.log('Get tasks:', error.message);
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await taskService.getById(id);

    res.status(200).json(task);
  } catch (error) {
    console.log('Get task By id:', error.message);
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { text } = req.body;
    const task = await taskService.create(text);

    res.status(201).json(task);
  } catch (error) {
    console.log('Create task:', error.message);
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const result = await taskService.update(id, text);

    res.status(200).json(result);
  } catch (error) {
    console.log('Update task:', error.message);
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    await taskService.deleteTask(id);
    res.status(204).json();
  } catch (error) {
    console.log('Delete task:', error.message);
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteTask,
};
