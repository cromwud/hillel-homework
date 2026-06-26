
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import Resume from './pages/Resume';
import Todo from './pages/Todo';
import Swapi from './pages/Swapi';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppHeader />
        <Content style={{ padding: '0 50px', marginTop: 64, flex: 1, background: '#f5f5f5' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380, marginTop: 16, borderRadius: 8 }}>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/swapi" element={<Swapi />} />
            </Routes>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;