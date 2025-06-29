import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

const NotFound = () => {
  const { lang } = useContext(LanguageContext);

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
  };

  const containerStyle = {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: '#fff',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#d9534f',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>
          {lang === 'cn' ? '404 - 页面未找到' : '404 - Page Not Found'}
        </h1>
        <p style={paragraphStyle}>
          {lang === 'cn'
            ? '您访问的页面不存在或已被移动。'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>
        <Link to="/" style={buttonStyle}>
          {lang === 'cn' ? '返回首页' : 'Back to Home'}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
