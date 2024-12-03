import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'ALL', 
  searchQuery: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
      prepare({ title, description, dueDate }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            dueDate,
            completed: false,
          },
        };
      },
    },
    editTask(state, action) {
      const { id, title, description, dueDate } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.description = description;
        existingTask.dueDate = dueDate;
      }
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleCompletion(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    reorderTasks(state, action) {
      const { sourceIndex, destinationIndex } = action.payload;
      const [movedTask] = state.tasks.splice(sourceIndex, 1);
      state.tasks.splice(destinationIndex, 0, movedTask);
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleCompletion,
  setFilter,
  setSearchQuery,
  reorderTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
