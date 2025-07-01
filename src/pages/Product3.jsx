import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const modules = [
  {
    image: '/images/alloy1.jpg',
    title: { cn: '中文名称', en: 'Titanium Alloy' },
    desc: {
      cn: '中文详情介绍。',
      en: 'Lightweight and strong, ideal for aerospace structures.',
    },
  },
  {
    image: '/images/alloy2.jpg',
    title: { cn: '中文名称', en: 'Nickel-Based Alloy' },
    desc: {
      cn: '中文详情介绍。',
      en: 'Resistant to high-temperature corrosion, used in engines.',
    },
  },
  {
    image: '/images/alloy3.jpg',
    title: { cn: '中文名称', en: 'Aluminum Alloy' },
    desc: {
      cn: '中文详情介绍。',
      en: 'Light and durable, used in transportation and construction.',
    },
  },
  {
    image: '/images/alloy4.jpg',
    title: { cn: '中文名称', en: 'High Strength Steel' },
    desc: {
      cn: '中文详情介绍。',
      en: 'Improves safety, widely used in car bodies.',
    },
  },
  {
    image: '/images/alloy5.jpg',
    title: { cn: '中文名称', en: 'Copper Alloy' },
    desc: {
      cn: '中文详情介绍。',
      en: 'Excellent conductivity, ideal for electronic components.',
    },
  },
  {
    image: '/images/alloy6.jpg',
    title: { cn: '中文名称', en: 'Powder Metallurgy Alloy' },
    desc: {
      cn: '中文详情介绍。',
      en: 'Used for custom-shaped and functional components.',
    },
  },
  {
    image: '/images/alloy5.jpg',
    title: { cn: '中文名称', en: 'Copper Alloy' },
    desc: {
      cn: '中文详情介绍。',
      en: 'Excellent conductivity, ideal for electronic components.',
    },
  },
  {
    image: '/images/alloy5.jpg',
    title: { cn: '中文名称', en: 'Copper Alloy' },
    desc: {
      cn: '中文详情介绍。',
      en: 'Excellent conductivity, ideal for electronic components.',
    },
  },
];

const Product3 = () => {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '高级合金材料' : 'Advanced Alloy Material'}
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        {lang === 'cn'
          ? '适用于航空航天与汽车工业的优质合金，具备强度高、耐腐蚀等特性。'
          : 'Premium-grade alloy used in aerospace and automotive industries, known for strength and corrosion resistance.'}
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

export default Product3;
