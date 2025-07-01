import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const modules = [
  {
    image: '/images/sensor1.jpg',
    title: { cn: '中文名称', en: 'Temperature Sensor' },
    desc: {
      cn: '中文介绍详情。',
      en: 'Monitors temperature fluctuations in real time to ensure stable operation.',
    },
  },
  {
    image: '/images/sensor2.jpg',
    title: { cn: '中文名称', en: 'Pressure Sensor' },
    desc: {
      cn: '中文介绍详情。',
      en: 'Accurately detects pressure variations in hydraulic and pneumatic systems.',
    },
  },
  {
    image: '/images/sensor3.jpg',
    title: { cn: '中文名称', en: 'Accelerometer' },
    desc: {
      cn: '中文介绍详情。',
      en: 'Tracks motion and vibration to prevent equipment faults.',
    },
  },
  {
    image: '/images/sensor4.jpg',
    title: { cn: '中文名称', en: 'Displacement Sensor' },
    desc: {
      cn: '中文介绍详情。',
      en: 'High-precision displacement detection for control and measurement systems.',
    },
  },
  {
    image: '/images/sensor5.jpg',
    title: { cn: '中文名称', en: 'Humidity Sensor' },
    desc: {
      cn: '中文介绍详情。',
      en: 'Measures ambient humidity to maintain product quality and safety.',
    },
  },
  {
    image: '/images/sensor6.jpg',
    title: { cn: '中文名称', en: 'Photoelectric Sensor' },
    desc: {
      cn: '中文介绍详情。',
      en: 'Detects presence and position of objects for automated control.',
    },
  },
  {
    image: '/images/sensor7.jpg',
    title: { cn: '中文名称', en: 'Force Sensor' },
    desc: {
      cn: '中文介绍详情。',
      en: 'Measures mechanical forces like compression, tension, and weight.',
    },
  },
  {
    image: '/images/sensor8.jpg',
    title: { cn: '中文名称', en: 'Multi-Sensor Module' },
    desc: {
      cn: '中文介绍详情。',
      en: 'Combines multiple sensing functions for complex industrial scenarios.',
    },
  },
];

const Product4 = () => {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '工业传感器套件' : 'Industrial Sensor Suite'}
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        {lang === 'cn'
          ? '用于智能工厂的高精度温度、压力与运动监测传感器。'
          : 'High-precision sensors for temperature, pressure, and motion monitoring in smart factory environments.'}
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {modules.map((module, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={module.image}
              alt={module.title[lang]}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <h3 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              {module.title[lang]}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1rem' }}>
              {module.desc[lang]}
            </p>
            <button
              onClick={() => navigate('/contact')}
              style={{
                backgroundColor: '#1a1a1a',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {lang === 'cn' ? '了解更多' : 'Learn More'}
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/products">← {lang === 'cn' ? '返回产品页' : 'Back to Products'}</Link>
      </div>
    </section>
  );
};

export default Product4;
