import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { useNavigate } from 'react-router-dom';

const businessCards = {
  en: [
    {
      title: 'Advanced Industrial Technologies',
      description: 'Explore smart manufacturing, industrial automation, and cutting-edge tech solutions.',
      path: '/business/advanced-tech',
      image: '/images/banner1.png',
    },
    {
      title: 'Innovation Facilitation',
      description: 'We empower global collaboration through strategic innovation facilitation services.',
      path: '/business/innovation',
      image: '/images/banner2.png',
    },
    {
      title: 'Technical Consulting & Advisory',
      description: 'Professional advice, technical optimization, and implementation consulting.',
      path: '/business/consulting',
      image: '/images/banner3.png',
    },
  ],
  cn: [
    {
      title: '先进工业技术',
      description: '探索智能制造、工业自动化与前沿科技解决方案。',
      path: '/business/advanced-tech',
      image: '/images/banner1.png',
    },
    {
      title: '创新促进',
      description: '通过战略性创新促进服务，推动全球合作。',
      path: '/business/innovation',
      image: '/images/banner2.png',
    },
    {
      title: '技术咨询与优化',
      description: '提供专业建议、技术优化与落地咨询服务。',
      path: '/business/consulting',
      image: '/images/banner3.png',
    },
  ],
};

const Home = () => {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const cards = businessCards[lang];

  return (
    <div>
      {/* 顶部轮播 */}
      <Hero />

      {/* About Us 区块 */}
      <section id="about" style={{ padding: '4rem 1rem', backgroundColor: '#f7f9fb' }}>
        <AboutSection />
      </section>

      {/* Core Business 三个板块卡片展示 */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#ffffff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {lang === 'en' ? 'Core Business Areas' : '核心业务板块'}
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}>
          {cards.map((card, index) => (
            <div key={index} style={{
              width: '320px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }} onClick={() => navigate(card.path)}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={card.image} alt={card.title} style={{ width: '100%', height: 'auto' }} />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{card.title}</h3>
                <p style={{ color: '#555' }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
