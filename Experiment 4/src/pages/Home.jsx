import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className="container">
      <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', letterSpacing: '-0.02em' }}>Hello, I'm a developer.</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px' }}>
          Welcome to my simple portfolio. This minimal design focuses on content and clean typography. The current active theme is <strong>{theme}</strong>.
        </p>
      </div>
    </div>
  );
};

export default Home;
