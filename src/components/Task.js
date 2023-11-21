import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../actions/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditTask = () => {
    dispatch(editTask(task.id, editedDescription));
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={handleToggleTask}
          />
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Modifié</button>
          <button onClick={handleDeleteTask}>Supprimé</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Sauvegardé</button>
        </>
      )}
    </div>
  );
};

export default Task;
