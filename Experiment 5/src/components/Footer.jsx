const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', marginTop: 'auto', padding: '2rem 0', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} MyPortfolio. Built for Experiment 5.</p>
    </footer>
  );
};

export default Footer;
