import React from 'react';
import SwapiConsole from './components/SwapiConsole/SwapiConsole';
import TodoSection from './components/TodoSection/TodoSection';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
     
      <SwapiConsole />
      <TodoSection />
    </div>
  );
}

export default App;