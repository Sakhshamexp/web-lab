import { useDispatch } from 'react-redux';
import { clearFavorites } from '../redux/slices/appSlice';
import CardComponent from '../components/CardComponent';

const Projects = () => {
  const dispatch = useDispatch();

  const projectsList = [
    { id: 1, name: 'E-commerce Platform', description: 'A scalable online store built with React and Node.js.' },
    { id: 2, name: 'Task Manager App', description: 'A productivity app utilizing Redux for state management.' },
    { id: 3, name: 'Weather Dashboard', description: 'A minimal dashboard showing real-time weather data.' },
    { id: 4, name: 'Social Media Clone', description: 'A full-stack social network simulation.' }
  ];

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>My Projects</h2>
        <button className="outline" onClick={() => dispatch(clearFavorites())}>
          Clear All Favorites
        </button>
      </div>
      <div className="grid">
        {projectsList.map(project => (
          <CardComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
