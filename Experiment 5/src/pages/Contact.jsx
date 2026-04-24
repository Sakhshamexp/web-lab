const Contact = () => {
  return (
    <div className="container">
      <div style={{ maxWidth: '600px', margin: '0 auto', marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Contact Me</h2>
        <form className="card" onSubmit={e => e.preventDefault()}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
          <input type="text" placeholder="Your name" />
          
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
          <input type="email" placeholder="you@example.com" />
          
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
          <textarea rows="4" placeholder="Your message..."></textarea>
          
          <button type="submit" style={{ marginTop: '1rem' }}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
