const Contact = () => {
  return (
    <div className="container">
      <div style={{ maxWidth: '500px', margin: '0 auto', marginTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', letterSpacing: '-0.02em', textAlign: 'center' }}>Get in touch</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem' }}>Have a question or want to work together?</p>
        
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>Name</label>
            <input type="text" placeholder="Jane Doe" required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>Message</label>
            <textarea placeholder="Hello..." rows="5" required />
          </div>
          <button type="submit" style={{ padding: '0.75rem', marginTop: '1rem' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
