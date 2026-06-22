import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from './swapiSlice';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
    todos: todoReducer,
  },
});