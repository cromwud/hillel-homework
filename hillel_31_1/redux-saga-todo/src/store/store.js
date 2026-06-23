import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './todoSlice';
import watchTodoSagas from './todoSagas';


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});


sagaMiddleware.run(watchTodoSagas);