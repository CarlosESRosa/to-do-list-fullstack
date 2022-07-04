import React, { useState, useEffect } from 'react';
// import myData from '../mockDB';

function TaskList() {
  const [allTasks, setAllTasks] = useState([]);

  const fetchApi = async () => {
    console.log('test');
    const data = await fetch('http://localhost:3000/tasks');
    console.log(data);
    setAllTasks(data);
  };

  useEffect(() => {
    fetchApi();
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
      {allTasks.map((element) => (
        <div key={element.id}>
          <h1>{element.task}</h1>
          <button type="button" onClick={() => deleteTask()}>DELETE</button>
          <button type="button" onClick={() => updateTask()}>UPDATE</button>
        </div>
      ))}
      <button type="button" onClick={() => addTask()}>ADD</button>
    </>
  );
}

export default TaskList;
