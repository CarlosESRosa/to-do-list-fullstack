import React, { useState, useEffect } from 'react';
import fetchAPI from '../helpers/fetchApi';
// import myData from '../mockDB';

function TaskList() {
  const [allTasks, setAllTasks] = useState([]);

  const fetchData = async () => {
    const data = await fetchAPI();
    setAllTasks(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTask = () => {
    console.log('function to delete task');
  };

  const deleteTask = () => {
    console.log('function to delete task');
  };

  const updateTask = () => {
    console.log('function to update task');
  };

  return (
    <>
      <h1>ToDo List</h1>
      { allTasks.map((element) => (
        <div key={element.id}>
          <h1>{element.text}</h1>
          <button type="button" onClick={() => deleteTask()}>DELETE</button>
          <button type="button" onClick={() => updateTask()}>UPDATE</button>
        </div>
      )) }
      <button type="button" onClick={() => addTask()}>ADD</button>
    </>
  );
}

export default TaskList;
