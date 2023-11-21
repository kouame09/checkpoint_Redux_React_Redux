import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); 

  console.log('Tasks:', tasks);

  return (
    <div className='container-task-list'>
      <h2>Liste des tâches</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
