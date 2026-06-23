import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoRequest, toggleTodoRequest, editTodoRequest } from '../../store/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    dispatch(editTodoRequest({ id: todo.id, text: editText }));
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodoRequest({ id: todo.id, completed: !todo.completed }))}
      />

      {isEditing ? (
        <div className="edit-box">
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
          />
          <button onClick={handleSave}>💾</button>
        </div>
      ) : (
        <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}

      <div className="actions">
        {!isEditing && <button onClick={() => setIsEditing(true)}>✏️</button>}
        <button onClick={() => dispatch(deleteTodoRequest(todo.id))}>❌</button>
      </div>
    </li>
  );
}

export default TodoItem;