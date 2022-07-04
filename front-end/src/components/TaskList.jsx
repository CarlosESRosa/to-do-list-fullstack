import React, { useState, useEffect } from 'react';
import myData from '../mockDB';

function TaskList() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    setAllTasks(myData);
  });

  return (
    <>
      <h1>ToDo List</h1>
      {allTasks.map((element) => <h1 key={element.id}>{element.task}</h1>)}
    </>
  );
}

export default TaskList;
