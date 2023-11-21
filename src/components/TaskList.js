import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Assurez-vous que vous accédez aux tâches correctement

  console.log('Tasks:', tasks); // Vérifiez ici si vous obtenez les bonnes données

  return (
    <div>
      <h2>Liste des tâches</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
