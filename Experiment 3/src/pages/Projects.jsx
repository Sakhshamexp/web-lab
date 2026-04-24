import CardComponent from '../components/CardComponent';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app featuring drag-and-drop boards, real-time updates, and user authentication.',
      link: '#'
    },
    {
      id: 3,
      title: 'AI Image Generator',
      description: 'A web app leveraging OpenAI APIs to generate images based on text prompts.',
      link: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A responsive dashboard displaying real-time weather data and forecasts using third-party APIs.',
      link: '#'
    }
  ];

  return (
    <div className="projects-page fade-in">
      <div className="container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>A selection of some of my recent work.</p>
        </div>
        <div className="projects-grid">
          {projectData.map((project) => (
            <CardComponent 
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
