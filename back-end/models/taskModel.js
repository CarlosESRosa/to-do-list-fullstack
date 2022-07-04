const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM ToDoList.task';

  const [result] = await connection.execute(query);
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM ToDoList.task WHERE id = ?';

  const [result] = await connection.execute(query, [id]);
  return result;
};

const create = async (text) => {
  const query = 'INSERT INTO ToDoList.task (text) VALUES (?)';

  const [registeredId] = await connection.execute(query, [text]);
  const task = {
    id: registeredId.insertId,
    text,
  };
  return task;
};

const update = async (id, text) => {
  const query = 'UPDATE ToDoList.task SET text = ? WHERE id = ?';

  await connection.execute(query, [text, id]);

  const result = {
    id,
    text,
  };
  return result;
};

const deleteTask = async (id) => {
  const query = 'DELETE FROM ToDoList.task WHERE id = ?';

  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteTask,
};
