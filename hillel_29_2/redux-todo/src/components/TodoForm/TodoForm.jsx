import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; 

    dispatch(addTodo(inputValue));
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введіть текст завдання..."
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TodoForm;