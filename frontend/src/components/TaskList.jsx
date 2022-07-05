/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import fetchAPI from '../helpers/fetchApi';
// import myData from '../mockDB';

function TaskList() {
  const [allTasks, setAllTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchData = async () => {
    const data = await fetchAPI();
    setAllTasks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [allTasks]);

  const handleChange = ({ target }, setterState) => {
    setterState(target.value);
  };

  const addTask = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newTask }),
    };
    fetch('http://localhost:3000/tasks', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    setNewTask('');
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' })
      .then(() => console.log(`Delete successful task id: ${id}`));
  };

  const updateTask = (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: 'Generic update task' }),
    };
    fetch(`http://localhost:3000/tasks/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <header className="input-container">
        <h1>
          <span id="header-todo">TO.DO</span>
          {' '}
          List
        </h1>
        <div className="add-task">
          <input
            onChange={(event) => handleChange(event, setNewTask)}
            placeholder="New task"
            value={newTask}
          />
          <button type="button" id="addButton" onClick={() => addTask()}><i className="far fa-check-square" /></button>
        </div>
      </header>
      <ul className="task-list">
        { allTasks.map((element) => (
          <li key={element.id}>
            <p>{element.text}</p>
            <div>
              <button type="button" id="editButton" onClick={() => updateTask(element.id)}><i className="fas fa-edit" /></button>
              <button type="button" id="removeButton" onClick={() => deleteTask(element.id)}><i className="fas fa-trash" /></button>
            </div>
          </li>
        )) }
      </ul>
    </>
  );
}

export default TaskList;
