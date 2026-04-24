import './CardComponent.css';

const CardComponent = ({ title, description, link }) => {
  return (
    <div className="card fade-in">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
          View Project &rarr;
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
