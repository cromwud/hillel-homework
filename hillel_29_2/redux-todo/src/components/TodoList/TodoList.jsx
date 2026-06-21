import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {

  const todos = useSelector((state) => state.todos.list);

  return (
    <div className="todos-container">
      <h2>TODOS</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;