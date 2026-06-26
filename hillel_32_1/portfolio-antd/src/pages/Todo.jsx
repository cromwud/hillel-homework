
import React, { useState } from 'react';
import { Typography, Input, Button, List, Checkbox, Space } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Вивчити базові компоненти Ant Design', completed: true },
    { id: 2, text: 'Налаштувати роутинг у проєкті', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (!inputValue.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px 0' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Мій список завдань</Title>
      
      <Space.Compact style={{ width: '100%', marginBottom: 20 }}>
        <Input 
          placeholder="Додати нове завдання..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={addTodo}
        />
        <Button type="primary" onClick={addTodo} icon={<PlusOutlined />}>Додати</Button>
      </Space.Compact>

      <List
        bordered
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="text" danger icon={<DeleteOutlined />} onClick={() => deleteTodo(item.id)} />
            ]}
          >
            <Checkbox 
              checked={item.completed} 
              onChange={() => toggleTodo(item.id)}
            >
              <span style={{ textDecoration: item.completed ? 'line-through' : 'none', color: item.completed ? '#bfbfbf' : 'inherit' }}>
                {item.text}
              </span>
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Todo;