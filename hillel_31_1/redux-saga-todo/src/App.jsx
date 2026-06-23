import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodosRequest } from './store/todoSlice';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1>TODO List (Redux Saga)</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;