import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './App.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDoList App</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
