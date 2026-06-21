import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFooter from './components/TodoFooter/TodoFooter';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">TODO</h1>
      <TodoForm />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;