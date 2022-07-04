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

module.exports = {
  getAll,
  getById,
  create,
};
