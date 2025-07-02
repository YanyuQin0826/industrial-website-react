import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

const content = {
  en: [
    { image: '/images/banner1.png' },
    { image: '/images/banner2.png' },
    { image: '/images/banner3.png' },
  ],
  cn: [
    { image: '/images/banner1.png' },
    { image: '/images/banner2.png' },
    { image: '/images/banner3.png' },
  ],
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { lang } = useContext(LanguageContext);
  const slides = content[lang];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        marginBottom: '3rem',
      }}
    >
      {/* 图片容器 */}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src={slides[current].image}
          alt={`Slide ${current + 1}`}
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* 圆点导航 */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            zIndex: 3,
          }}
        >
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: current === index ? '#007bff' : '#ccc',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            />
          ))}
        </div>

        {/* Explore More 按钮 */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
          }}
        >
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '1rem',
              borderRadius: '6px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {lang === 'en' ? 'Explore More' : '了解更多'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

