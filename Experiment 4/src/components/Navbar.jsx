import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { theme, toggleTheme, favorites } = useContext(AppContext);
  const location = useLocation();

  const getLinkStyle = (path) => {
    return {
      opacity: location.pathname === path ? 1 : 0.7,
      fontWeight: location.pathname === path ? 600 : 500
    };
  };

  return (
    <nav style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1rem 1.5rem' }}>
        <strong style={{ fontSize: '1.2rem', marginRight: 'auto' }}>
          <Link style={{ opacity: 1 }} to="/">Portfolio.</Link>
        </strong>
        <Link to="/projects" style={getLinkStyle('/projects')}>Projects</Link>
        <Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link>
        <Link to="/analytics" style={getLinkStyle('/analytics')}>Analytics</Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            ★ {favorites.length}
          </span>
          <button className="outline" onClick={toggleTheme} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
