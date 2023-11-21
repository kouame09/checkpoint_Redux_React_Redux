import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask({ description: taskDescription }));
      setTaskDescription(''); // Réinitialisation du champ après ajout
    }
  };

  return (
    <div className='container-form-task'>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Ajouter une tâche</button>
    </div>
  );
};

export default AddTaskForm;
