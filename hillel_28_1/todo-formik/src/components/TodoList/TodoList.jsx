import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, onDeleteTodo }) {
  if (todos.length === 0) {
    return <p className="empty-message">Список задач порожній. Час відпочити! </p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDeleteTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;