import React, { useState, useEffect } from 'react';
import myData from '../mockDB';

const newtask = {
  id: 4,
  task: 'Jogar Vava',
  status: 'pronto',
  data: '03/06/2022',
};

function TaskList() {
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    setAllTasks(myData);
  }, []);

  const addTask = (task) => {
    setAllTasks([...allTasks, task]);
  };

  return (
    <>
      <h1>ToDo List</h1>
      {allTasks.map((element) => <h1 key={element.id}>{element.task}</h1>)}
      <button type="button" onClick={() => addTask(newtask)}>ADD</button>
    </>
  );
}

export default TaskList;
