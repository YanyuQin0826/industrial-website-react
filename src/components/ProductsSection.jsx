import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
en: {
    heading: 'Our Products',
    products: [
    {
      name: 'Smart Control Unit',
      description: 'An AI-powered control system for automated factories.',
      image: 'https://via.placeholder.com/250x150?text=Smart+Control+Unit',
    },
    {
      name: 'Precision Welding Tool',
      description: 'High-efficiency industrial welding equipment.',
      image: 'https://via.placeholder.com/250x150?text=Welding+Tool',
    },
    {
      name: 'Advanced Alloy Material',
      description: 'Premium-grade alloy used in aerospace and automotive.',
      image: 'https://via.placeholder.com/250x150?text=Alloy+Material',
    },
  ],
},
cn: {
    heading: '产品中心',
    products: [
        {
            name: '自动化控制模块',
            description: '高性能模块，助力智能工厂自动化。',
        },
        {
            name: '工业传感器',
            description: '高精度温度、压力、运动等传感器。',
        },
        {
            name: '精密工具组件',
            description: '适用于高精度作业的先进工具。',
        },
        {
            name: '原材料解决方案',
            description: '支持多种工业应用的可靠材料。',
        },
      ],
    },
};

  const ProductsSection = () => {
    const { lang } = useContext(LanguageContext);
    const text = content[lang];

    if (!text || !Array.isArray(text.products)) {
        return (
          <section style={{ padding: '2rem', color: 'red' }}>
            ⚠️ 无法加载产品内容，请检查语言配置
          </section>
        );
      }

    return (
      <section style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{text.heading}</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          {text.products.map((product, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                padding: '1rem',
                maxWidth: '250px',
                textAlign: 'center',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', borderRadius: '6px', marginBottom: '1rem' }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductsSection;
  