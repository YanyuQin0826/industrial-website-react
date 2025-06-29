import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { Link } from 'react-router-dom';

const content = {
  en: {
    heading: 'Our Products',
    products: [
      {
        name: 'Smart Control Unit',
        description: 'An AI-powered control system for automated factories.',
        path: '/products/product1',
        image: 'https://via.placeholder.com/250x150?text=Smart+Control', // 你可以换成你自己的图片
      },
      {
        name: 'Precision Welding Tool',
        description: 'High-efficiency industrial welding equipment.',
        path: '/products/product2',
        image: 'https://via.placeholder.com/250x150?text=Welding+Tool',
      },
      {
        name: 'Advanced Alloy Material',
        description: 'Premium-grade alloy used in aerospace and automotive.',
        path: '/products/product3',
        image: 'https://via.placeholder.com/250x150?text=Alloy+Material',
      },
      {
        name: 'Industrial Sensor Suite',
        description: 'High-precision sensors for temperature, pressure, and motion.',
        path: '/products/product4',
        image: 'https://via.placeholder.com/250x150?text=Sensor+Suite',
      },
    ],
  },
  cn: {
    heading: '产品中心',
    products: [
      {
        name: '自动化控制模块',
        description: '高性能模块，助力智能工厂自动化。',
        path: '/products/product1',
        image: 'https://via.placeholder.com/250x150?text=自动化模块',
      },
      {
        name: '工业焊接工具',
        description: '高效工业焊接设备，精准可靠。',
        path: '/products/product2',
        image: 'https://via.placeholder.com/250x150?text=焊接工具',
      },
      {
        name: '先进合金材料',
        description: '用于航空和汽车的高级合金材料。',
        path: '/products/product3',
        image: 'https://via.placeholder.com/250x150?text=合金材料',
      },
      {
        name: '工业传感器套件',
        description: '智能工厂环境下使用的高精度传感器。',
        path: '/products/product4',
        image: 'https://via.placeholder.com/250x150?text=传感器',
      },
    ],
  },
};

const Products = () => {
  const { lang } = useContext(LanguageContext);
  const text = content[lang];

  const sectionStyle = {
    padding: '6rem 2rem 4rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '2.5rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#222',
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
  };

  const cardStyle = {
    textDecoration: 'none',
    color: 'inherit',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    maxWidth: '250px',
    textAlign: 'center',
    transition: 'transform 0.2s ease',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>{text.heading}</h2>

      <div style={gridStyle}>
        {text.products.map((product, index) => (
          <Link
            to={product.path}
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                }}
              />
            )}
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
              }}
            >
              {product.name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;


