import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<div className="page-container"><h2>Сторінку не знайдено 404</h2></div>} />
            </Routes>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;