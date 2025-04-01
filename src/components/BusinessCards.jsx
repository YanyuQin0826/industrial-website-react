import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
    en: {
        heading: 'Our Core Businesses',
        businesses: [
            {
                title: 'Smart Automation Systems',
                description: 'Delivering intelligent automation control to optimize manufacturing processes.',
            },
            {
                title: 'Industrial Tools',
                description: 'Providing precision tools and instruments for industrial production.',
            },
            {
                title: 'Raw Materials',
                description: 'Supplying high-quality raw materials to support global industries.',
            },
        ],
    },
    cn: {
        heading: '核心业务',
        businesses: [
          {
            title: '智能自动化系统',
            description: '提供智能自动化控制系统，优化制造流程。',
          },
          {
            title: '工业工具',
            description: '提供精密工业生产工具与仪器。',
          },
          {
            title: '工业原材料',
            description: '为全球工业提供高质量原材料。',
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
  