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
        <p><strong>International Innovation Institute LLC</strong></p>
        <p>9034 Hermosa Dr, Temple City, CA 91780</p>
        <p>Email: liang@sdaovc.cn | WhatsApp: +86 15305325679</p>
  
        <div style={{ marginTop: '1rem' }}>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>Facebook</a>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>LinkedIn</a>
          <a href="#" style={{ color: 'white', margin: '0 1rem' }}>WeChat</a>
        </div>
  
        <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          <a href="#" style={{ color: '#aaa', marginRight: '1rem' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#aaa' }}>Terms of Use</a>
        </div>
  
        <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#888' }}>
          &copy; 2025 International Innovation Institute LLC. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  