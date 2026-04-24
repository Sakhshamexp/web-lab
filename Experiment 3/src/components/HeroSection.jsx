import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Hi, I'm a <span className="highlight">Creative Developer</span>
          </h1>
          <p className="hero-description">
            I build modern, responsive, and engaging web applications. Let's turn your ideas into reality.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn">View My Work</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
