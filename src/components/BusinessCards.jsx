import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
    en: {
        heading: 'Our Core Businesses',
        businesses: [
            {
                title: 'Advanced Industrial Technologies',
                description: 'From lab to production — we deliver automation, materials, and energy solutions ready for industrial scale.',
            },
            {
                title: 'Innovation Facilitation',
                description: 'Bridging research and markets — we accelerate technology transfer and commercialization.',
            },
            {
                title: 'Technical Consulting & Advisory',
                description: 'Enhancing production through data and cross-disciplinary engineering — for better technology, cost efficiency, and sustainability.',
            },
        ],
    },
    cn: {
        heading: '核心业务',
        businesses: [
          {
            title: '先进的工业技术',
            description: '从实验室到产线，交付自动化、材料与能源的工业级解决方案。',
          },
          {
            title: '创新促进',
            description: '连接科研与市场，助力技术加速转化与商业落地。',
          },
          {
            title: '技术咨询与顾问',
            description: '用数据和跨领域工程经验，提升现有产线和组织的技术含量、成本效率和可持续表现。',
          },
        ],
      },
    };

  const BusinessCards = () => {
    const { lang } = useContext(LanguageContext);
    const text = content[lang];

    console.log("当前语言 lang = ", lang);
    console.log("对应文本内容 = ", text);
    if (!text || !Array.isArray(text.businesses)) {
        return (
          <section style={{ padding: '2rem', color: 'red' }}>
            ⚠️ 内容加载失败，请检查语言配置（lang: {lang}）
          </section>
        );
      }

    return (
      <section style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{text.heading}</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
      
          {text.businesses.map((item, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 250px',
                background: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BusinessCards;
  