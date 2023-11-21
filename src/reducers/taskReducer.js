const initialState = {
    tasks: [], // initialisez tasks comme un tableau vide ou avec des tâches initiales
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { ...action.payload, id: state.tasks.length + 1, isDone: false }],
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.taskId
              ? { ...task, description: action.payload.updatedDescription }
              : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  