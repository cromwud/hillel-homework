import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import { clearTodosRequest } from '../../store/todoSlice';

function TodoList() {
  const { list: todos, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="list-container">
      {loading && <p>Завантаження даних із Саги...</p>}
      
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <footer className="todo-footer">
        <span>Всього задач: {todos.length}</span>
        {todos.length > 0 && (
          <button className="clear-btn" onClick={() => dispatch(clearTodosRequest())}>
            Очистити все
          </button>
        )}
      </footer>
    </div>
  );
}

export default TodoList;