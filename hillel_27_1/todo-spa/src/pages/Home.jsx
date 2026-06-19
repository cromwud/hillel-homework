import { useState } from 'react';

function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="page-container">
      <h1>Мій список TODO</h1>
      
      <form onSubmit={handleAddTodo} className="todo-form">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Що потрібно зробити?"
        />
        <button type="submit">Додати</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;