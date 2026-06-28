import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) {
      setError('Назва таски не може бути порожньою!');
      return;
    }

    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue('');
    setError('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>TODO Додаток</h2>
      
      <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Введіть завдання..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flexGrow: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>Додати</button>
      </form>

      {error && <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>}

      <ul style={{ paddingLeft: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '8px 0' }}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}