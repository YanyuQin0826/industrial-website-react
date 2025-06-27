import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div>
      <section style={{
        backgroundImage: "url('/your-image-path.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem' }}>Welcome to Our Company</h1>
        <Link to="/contact">
          <button style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            Contact Us
          </button>
        </Link>
      </section>

      <section id="about" style={{ padding: '2rem' }}>
        <AboutSection />
      </section>
    </div>
  );
};

export default Home;