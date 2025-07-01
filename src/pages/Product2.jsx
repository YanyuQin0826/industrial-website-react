import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const modules = [
  {
    image: '/images/weld1.jpg',
    title: { cn: '模块一名称', en: 'Laser Welding Head' },
    desc: {
      cn: '中文详情。',
      en: 'Ideal for high-precision welding with minimal heat-affected zone.',
    },
  },
  {
    image: '/images/weld2.jpg',
    title: { cn: '模块二名称', en: 'Multi-axis Welding Arm' },
    desc: {
      cn: '中文详情。',
      en: 'Enables flexible welding paths for complex assemblies.',
    },
  },
  {
    image: '/images/weld3.jpg',
    title: { cn: '模块三名称', en: 'Smart Control Unit' },
    desc: {
      cn: '中文详情。',
      en: 'Integrated control of welding parameters and monitoring.',
    },
  },
  {
    image: '/images/weld4.jpg',
    title: { cn: '模块四名称', en: 'Air Cooling System' },
    desc: {
      cn: '中文详情。',
      en: 'Improves welding efficiency and reduces energy usage.',
    },
  },
  {
    image: '/images/weld5.jpg',
    title: { cn: '模块五名称', en: 'Auto Feeding System' },
    desc: {
      cn: '中文详情。',
      en: 'Enhances automation speed and precision in welding.',
    },
  },
  {
    image: '/images/weld6.jpg',
    title: { cn: '模块六名称', en: 'Remote Monitoring Module' },
    desc: {
      cn: '中文详情。',
      en: 'Allows real-time remote monitoring of equipment status.',
    },
  },
  {
    image: '/images/weld7.jpg',
    title: { cn: '模块七名称', en: 'Smart Seam Detection' },
    desc: {
      cn: '中文详情。',
      en: 'Automatically detects and aligns welding seams.',
    },
  },
  {
    image: '/images/weld8.jpg',
    title: { cn: '模块八名称', en: 'Safety Protection Shield' },
    desc: {
      cn: '中文详情。',
      en: 'Protects operators and meets industrial safety standards.',
    },
  },
];

const Product2 = () => {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '精密焊接工具' : 'Precision Welding Tool'}
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        {lang === 'cn'
          ? '高效节能的工业焊接设备，精度高，能耗低。'
          : 'High-efficiency industrial welding equipment with precision accuracy and low energy consumption.'}
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
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>{module.title[lang]}</h3>
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

export default Product2;
