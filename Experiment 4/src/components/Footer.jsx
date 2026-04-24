const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', marginTop: '2rem' }}>
      <div className="container" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Minimal Portfolio.</p>
      </div>
    </footer>
  );
};

export default Footer;
