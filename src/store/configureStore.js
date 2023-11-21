import { createStore, combineReducers } from 'redux';
import taskReducer from '../reducers/taskReducer';
import filterReducer from '../reducers/filterReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  filter: filterReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
