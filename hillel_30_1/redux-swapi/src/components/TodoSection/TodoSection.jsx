import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodos } from '../../store/todoSlice';
import './TodoSection.css';

function TodoSection() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  
  const todos = useSelector((state) => state.todos.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <div className="todo-box">
      <h2 className="section-title">TODO Додаток</h2>
      
      <form onSubmit={handleSubmit} className="custom-todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Додати завдання до списку..."
        />
        <button type="submit">Добавить</button>
      </form>

      <ul className="custom-todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="custom-todo-item">
            {todo.text}
          </li>
        ))}
      </ul>

      
      <footer className="custom-todo-footer">
        <span>Всего задач: <strong>{todos.length}</strong></span>
        <button onClick={() => dispatch(clearTodos())} className="clear-btn">
          Clear
        </button>
      </footer>
    </div>
  );
}

export default TodoSection;