import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const modules = [
  {
    image: '/images/module1.jpg',
    title: { cn: '模块一', en: 'Module One' },
    desc: {
      cn: '模块一用于实时数据采集与处理。',
      en: 'Module One for real-time data acquisition and processing.',
    },
  },
  {
    image: '/images/module2.jpg',
    title: { cn: '模块二', en: 'Module Two' },
    desc: {
      cn: '模块二提供智能预测与分析功能。',
      en: 'Module Two enables smart forecasting and analytics.',
    },
  },
  {
    image: '/images/module3.jpg',
    title: { cn: '模块三', en: 'Module Three' },
    desc: {
      cn: '模块三用于设备间的智能协调。',
      en: 'Module Three coordinates smart device interactions.',
    },
  },
  {
    image: '/images/module4.jpg',
    title: { cn: '模块四', en: 'Module Four' },
    desc: {
      cn: '模块四支持远程维护与故障检测。',
      en: 'Module Four supports remote maintenance and fault detection.',
    },
  },
  {
    image: '/images/module5.jpg',
    title: { cn: '模块五', en: 'Module Five' },
    desc: {
      cn: '模块五整合系统管理与可视化面板。',
      en: 'Module Five integrates system management and dashboards.',
    },
  },
  {
    image: '/images/module1.jpg',
    title: { cn: '模块六', en: 'Module One' },
    desc: {
      cn: '模块一用于实时数据采集与处理。',
      en: 'Module One for real-time data acquisition and processing.',
    },
  },
  {
    image: '/images/module1.jpg',
    title: { cn: '模块七', en: 'Module One' },
    desc: {
      cn: '模块一用于实时数据采集与处理。',
      en: 'Module One for real-time data acquisition and processing.',
    },
  },
];

const Product1 = () => {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '智能控制单元' : 'Smart Control Unit'}
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        {lang === 'cn'
          ? '用于智能工厂的 AI 控制系统，支持实时监控与优化。'
          : 'An AI-powered control system for automated factories. Enables real-time monitoring and optimization.'}
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

export default Product1;
