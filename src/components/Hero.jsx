import { useState, useEffect, useContext } from 'react';
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
      tagline: '•  Advanced Industrial Technologies, \n•  Innovation Facilitation, \n•  Technical Consulting & Optimization',
      image: 'https://via.placeholder.com/800x300?text=Mission+and+Vision',
    },
    {
      title: 'Partner with Us',
      description: 'Let’s Co-Create the Future of Industry',
      tagline:'Partner with us for innovation, growth, and transformation.',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000); // 每 10 秒轮播
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      style={{
        backgroundColor: '#ffffffff',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
      }}
    >

      {/* 图片 + 内容 */}
      <div style={{ position: 'relative', maxWidth: '800px' }}>
        <img
          src={slides[current].image}
          alt={slides[current].title}
          style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
        />
      </div>

      <h2>{slides[current].title}</h2>
      <p>{slides[current].description}</p>

      {/* 底部圆点导航 */}
      <div style={{ marginTop: '1rem' }}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              margin: '0 5px',
              borderRadius: '50%',
              background: current === index ? '#000' : '#ccc',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Learn More 按钮 */}
      <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Contact Us</button>
    </section>
  );
};

export default Hero;
