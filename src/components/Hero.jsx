import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

const content = {
  en: [
    {
      title: 'Empowering Industry. Connecting the Future.',
      description: 'Transforming research into scalable industrial innovation.',
      image: 'https://via.placeholder.com/800x300?text=Smart+Automation',
    },
    {
      title: 'From Breakthroughs to Business',
      description: 'Three Core Business Lines Empowering Global Industry',
      image: 'https://via.placeholder.com/800x300?text=Mission+and+Vision',
    },
    {
      title: 'Partner with Us',
      description: 'Let’s Co-Create the Future of Industry',
      image: 'https://via.placeholder.com/800x300?text=Partnership+Invitation',
    },
  ],
  cn: [
    {
      title: '赋能产业，链接未来',
      description: '将科研成果转化为可规模化的产业创新.',
      image: 'https://via.placeholder.com/800x300?text=智能自动化',
    },
    {
      title: '从突破到产业',
      description: '三大核心业务驱动全球工业创新。',
      image: 'https://via.placeholder.com/800x300?text=使命与愿景',
    },
    {
      title: '共创产业未来',
      description: '携手打造创新、成长与转型的合作新范式',
      image: 'https://via.placeholder.com/800x300?text=合作邀请',
    },
  ],
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { lang } = useContext(LanguageContext);
  const slides = content[lang];
  const navigate = useNavigate();

  // 自动轮播
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
        backgroundColor: '#f9f9f9',
        padding: '2rem 0',
        marginBottom: '3rem',
      }}
    >
      {/* 图片容器 */}
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        <img
          src={slides[current].image}
          alt={slides[current].title}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            display: 'block',
          }}
        />

        {/* 文字叠加在图片上 */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'black',
            textAlign: 'center',
            textShadow: '0 0 6px #ffffffff(0,0,0,0.6)',
            padding: '1rem',
            zIndex: 2,
          }}
        >
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#1f2d3d', fontWeight: 'bold',}}>
            {slides[current].title}
          </h2>
          <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.4', }}>{slides[current].description}</p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              marginTop: '1rem',
              marginBottom: '1.8rem',
              padding: '0.6rem 1.2rem',
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

        {/* 圆点导航 */}
        <div
          style={{
            position: 'absolute',
            top: '80%',
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
      </div>
    </section>
  );
};

export default Hero;
