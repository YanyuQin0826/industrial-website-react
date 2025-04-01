const Footer = () => {
    return (
      <footer
        style={{
          backgroundColor: '#1f2d3d',
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
          marginTop: '4rem',
        }}
      >
        <p><strong>Industrial Research Institute</strong></p>
        <p>123 Innovation Blvd, Tech City, Global</p>
        <p>Email: contact@iri-global.org | Tel: +1 800 123 4567</p>
  
        <div style={{ marginTop: '1rem' }}>
          <a href="#" style={{ color: '#ccc', margin: '0 1rem' }}>Facebook</a>
          <a href="#" style={{ color: '#ccc', margin: '0 1rem' }}>LinkedIn</a>
          <a href="#" style={{ color: '#ccc', margin: '0 1rem' }}>WeChat</a>
        </div>
  
        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          <a href="#" style={{ color: '#aaa', marginRight: '1rem' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#aaa' }}>Terms of Use</a>
        </div>
  
        <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#888' }}>
          &copy; 2025 Industrial Research Institute. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  