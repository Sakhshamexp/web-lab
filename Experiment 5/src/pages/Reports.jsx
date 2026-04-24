import { useMemo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { AppContext } from '../context/AppContext';

const Reports = () => {
  const favorites = useSelector(state => state.app.favorites);
  const { theme } = useContext(AppContext);
  
  // Hardcoded total projects available in the platform
  const totalProjectsInSystem = 4;

  const reportData = useMemo(() => {
    // Simulating an expensive calculation or data transformation
    return {
      totalProjects: totalProjectsInSystem,
      totalFavorites: favorites.length,
      favoriteRatio: ((favorites.length / totalProjectsInSystem) * 100).toFixed(1)
    };
  }, [favorites.length, totalProjectsInSystem]);

  return (
    <div className="container">
      <div style={{ marginBottom: '2rem' }}>
        <h2>Reports Dashboard</h2>
        <p style={{ opacity: 0.8 }}>Summary of your portfolio statistics. Current Theme: <strong>{theme}</strong>.</p>
      </div>
      
      <div className="grid">
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontWeight: 600, opacity: 0.7, textTransform: 'uppercase' }}>Total Projects</p>
          <h3 style={{ fontSize: '3rem', margin: '1rem 0 0' }}>{reportData.totalProjects}</h3>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontWeight: 600, opacity: 0.7, textTransform: 'uppercase' }}>Favorite Projects</p>
          <h3 style={{ fontSize: '3rem', margin: '1rem 0 0' }}>{reportData.totalFavorites}</h3>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontWeight: 600, opacity: 0.7, textTransform: 'uppercase' }}>Favorite Ratio</p>
          <h3 style={{ fontSize: '3rem', margin: '1rem 0 0', color: 'var(--primary)' }}>{reportData.favoriteRatio}%</h3>
        </div>
      </div>
    </div>
  );
};

export default Reports;
