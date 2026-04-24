import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button className="outline" onClick={toggleTheme} style={{ marginLeft: '1rem', padding: '0.4rem 0.8rem' }}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;
