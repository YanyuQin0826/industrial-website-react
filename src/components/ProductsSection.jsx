import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { useNavigate } from 'react-router-dom';

const content = {
  en: {
    heading: 'Our Products',
    products: [
      {
        name: 'Advanced Industrial Technologies',
        description: 'From lab to production — we deliver automation, materials, and energy solutions ready for industrial scale.',
        image: 'https://via.placeholder.com/250x150?text=Smart+Control+Unit', //可更改product 1 模块的图片
        route: 'product1',
      },
      {
        name: 'Innovation Facilitation',
        description: 'Bridging research and markets — we accelerate technology transfer and commercialization.',
        image: 'https://via.placeholder.com/250x150?text=Welding+Tool', //可更改product 2 模块的图片
        route: 'product2',
      },
      {
        name: 'Advanced Alloy Material',
        description: 'Premium-grade alloy used in aerospace and automotive.',
        image: 'https://via.placeholder.com/250x150?text=Alloy+Material', //可更改product 3 模块的图片
        route: 'product3',
      },
      {
        name: 'Industrial Sensor Suite',
        description: 'High-precision sensors for temperature, pressure, and motion monitoring.',
        image: 'https://via.placeholder.com/250x150?text=Sensor+Suite', //可更改product 4 模块的图片
        route: 'product4',
      },
    ],
  },
  cn: {
    heading: '产品中心',
    products: [
      {
        name: '先进的工业技术',
        description: '从实验室到产线，交付自动化、材料与能源的工业级解决方案。',
        image: 'https://via.placeholder.com/250x150?text=自动化控制模块',
        route: 'product1',
      },
      {
        name: '创新促进',
        description: '连接科研与市场，助力技术加速转化与商业落地。',
        image: 'https://via.placeholder.com/250x150?text=工业传感器',
        route: 'product4',
      },
      {
        name: '技术咨询与顾问',
        description: '用数据和跨领域工程经验，提升现有产线和组织的技术含量、成本效率和可持续表现。',
        image: 'https://via.placeholder.com/250x150?text=精密工具组件',
        route: 'product2',
      },
      {
        name: '原材料解决方案',
        description: '支持多种工业应用的可靠材料。',
        image: 'https://via.placeholder.com/250x150?text=原材料解决方案',
        route: 'product3',
      },
    ],
  },
};

const ProductsSection = () => {
  const { lang } = useContext(LanguageContext);
  const text = content[lang];
  const navigate = useNavigate();

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
              transition: 'transform 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', borderRadius: '6px', marginBottom: '1rem' }}
              />
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button
              onClick={() => navigate(`/products/${product.route}`)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              {lang === 'cn' ? '了解更多' : 'Learn More'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;


  