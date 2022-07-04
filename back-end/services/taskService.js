const taskModel = require('../models/taskModel');

const errorHandler = (status, message) => ({ status, message });

const getAll = async () => {
  const result = await taskModel.getAll();

  return result;
};

const getById = async (id) => {
  const [result] = await taskModel.getById(id);

  if (!result) throw errorHandler(404, 'Task not found');

  return result;
};

const create = async (text) => {
  const newTask = await taskModel.create(text);

  return newTask;
};

module.exports = {
  getAll,
  getById,
  create,
};
