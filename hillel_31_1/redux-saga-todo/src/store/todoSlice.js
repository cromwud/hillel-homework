import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    
    fetchTodosRequest: (state) => { state.loading = true; },
    addTodoRequest: (state, action) => {},
    deleteTodoRequest: (state, action) => {},
    toggleTodoRequest: (state, action) => {},
    editTodoRequest: (state, action) => {},
    clearTodosRequest: (state) => {},

    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    addTodoSuccess: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodoSuccess: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    toggleTodoSuccess: (state, action) => {
      const todo = state.list.find(t => t.id === action.payload.id);
      if (todo) todo.completed = action.payload.completed;
    },
    editTodoSuccess: (state, action) => {
      const todo = state.list.find(t => t.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
    clearTodosSuccess: (state) => {
      state.list = [];
    },
    todoOperationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const {
  fetchTodosRequest, fetchTodosSuccess,
  addTodoRequest, addTodoSuccess,
  deleteTodoRequest, deleteTodoSuccess,
  toggleTodoRequest, toggleTodoSuccess,
  editTodoRequest, editTodoSuccess,
  clearTodosRequest, clearTodosSuccess,
  todoOperationFailure
} = todoSlice.actions;

export default todoSlice.reducer;