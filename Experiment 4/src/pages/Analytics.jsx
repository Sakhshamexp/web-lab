import { useContext, useMemo } from 'react';
import { AppContext } from '../context/AppContext';

const Analytics = () => {
  const { favorites } = useContext(AppContext);

  // Hardcode to simulate total projects
  const totalProjects = 3;

  const analyticsData = useMemo(() => {
    return {
      totalProjectsCount: totalProjects,
      favoritesCount: favorites.length
    };
  }, [favorites.length, totalProjects]);

  return (
    <div className="container">
      <div style={{ marginTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}>Analytics</h1>
        <p style={{ marginBottom: '3rem' }}>A quick overview of your portfolio data.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.7 }}>Total Projects</p>
            <h2 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: 0 }}>{analyticsData.totalProjectsCount}</h2>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.7 }}>Total Favorites</p>
            <h2 style={{ fontSize: '4rem', marginTop: '1rem', marginBottom: 0 }}>{analyticsData.favoritesCount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
