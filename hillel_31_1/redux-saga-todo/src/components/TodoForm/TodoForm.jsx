import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoRequest } from '../../store/todoSlice';

function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodoRequest(text)); 
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Додати нову задачу..."
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default TodoForm;