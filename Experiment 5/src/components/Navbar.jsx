import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const favorites = useSelector(state => state.app.favorites);

  return (
    <nav style={{ borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', padding: '0 1.5rem', margin: '0 auto' }}>
        <strong style={{ fontSize: '1.25rem', marginRight: 'auto' }}>
          <Link to="/">MyPortfolio</Link>
        </strong>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/reports">Reports</Link>
          <span style={{ fontWeight: 600, color: 'var(--primary)' }}>★ {favorites.length}</span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
