import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload });
    },
    clearTodos: (state) => {
      state.list = []; 
    },
  },
});

export const { addTodo, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;