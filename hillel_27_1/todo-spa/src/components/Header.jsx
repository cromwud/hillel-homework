import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="main-header">
      <nav>
        <NavLink to="/" end>Головна</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
        <NavLink to="/about">Про мене</NavLink>
      </nav>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? '☀️ Світла тема' : '🌙 Темна тема'}
      </button>
    </header>
  );
}

export default Header;
