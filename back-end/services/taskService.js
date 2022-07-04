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

const update = async (id, text) => {
  const verifyTask = await taskModel.getById(id);

  if (verifyTask.length === 0) throw errorHandler(404, 'Task not found');

  const result = await taskModel.update(id, text);

  return result;
};

const deleteTask = async (id) => {
  const result = await taskModel.deleteTask(id);
  if (result.affectedRows === 0) throw errorHandler(404, 'Task not found');
  return result;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteTask,
};
