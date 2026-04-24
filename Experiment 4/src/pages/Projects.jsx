import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Projects = () => {
  const { favorites, dispatchFavorites } = useContext(AppContext);

  const projects = [
    { id: 1, name: 'Project Alpha', desc: 'A minimalist task management tool built with React.' },
    { id: 2, name: 'Project Beta', desc: 'An elegant weather dashboard with smooth animations.' },
    { id: 3, name: 'Project Gamma', desc: 'A clean, typography-focused blog template.' },
  ];

  const toggleFavorite = (project) => {
    const isFav = favorites.find(f => f.id === project.id);
    if (isFav) {
      dispatchFavorites({ type: 'REMOVE', payload: project });
    } else {
      dispatchFavorites({ type: 'ADD', payload: project });
    }
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em' }}>Projects</h1>
          <p>A selection of recent work.</p>
        </div>
        <button className="outline" onClick={() => dispatchFavorites({ type: 'CLEAR' })}>
          Clear Favorites
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map(proj => {
          const isFav = favorites.find(f => f.id === proj.id);
          return (
            <div key={proj.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ flexGrow: 1 }}>
                <h3>{proj.name}</h3>
                <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{proj.desc}</p>
              </div>
              <button 
                className={isFav ? 'outline' : ''} 
                onClick={() => toggleFavorite(proj)}
                style={{ width: '100%', marginTop: 'auto' }}
              >
                {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
