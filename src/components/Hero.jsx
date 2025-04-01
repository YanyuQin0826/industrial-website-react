import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; 

const content = {
  en: [
    {
      title: 'Empowering Industry with Smart Automation',
      description: 'We deliver intelligent control systems to optimize production.',
      image: 'https://via.placeholder.com/800x300?text=Smart+Automation',
    },
    {
      title: 'Our Mission and Vision',
      description: 'Driving global industrial transformation through innovation and sustainability.',
      image: 'https://via.placeholder.com/800x300?text=Mission+and+Vision',
    },
    {
      title: 'Partner with Us',
      description: 'Join forces to build a smarter industrial future together.',
      image: 'https://via.placeholder.com/800x300?text=Partnership+Invitation',
    },
  ],
  cn: [
    {
      title: '用智能自动化赋能工业',
      description: '我们提供智能控制系统，优化生产效率。',
      image: 'https://via.placeholder.com/800x300?text=智能自动化',
    },
    {
      title: '我们的使命与愿景',
      description: '通过创新和可持续性推动全球工业转型。',
      image: 'https://via.placeholder.com/800x300?text=使命与愿景',
    },
    {
      title: '欢迎合作',
      description: '携手共创更智能的工业未来。',
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
        backgroundColor: '#f4f4f4',
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
      <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Learn More</button>
    </section>
  );
};

export default Hero;
