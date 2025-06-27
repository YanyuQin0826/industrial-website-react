// src/pages/Products.jsx
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
        image: 'https://via.placeholder.com/250x150?text=Smart+Control+Unit',
        path: '/products/product1',
      },
      {
        name: 'Precision Welding Tool',
        description: 'High-efficiency industrial welding equipment.',
        image: 'https://via.placeholder.com/250x150?text=Welding+Tool',
        path: '/products/product2',
      },
      {
        name: 'Advanced Alloy Material',
        description: 'Premium-grade alloy used in aerospace and automotive.',
        image: 'https://via.placeholder.com/250x150?text=Alloy+Material',
        path: '/products/product3',
      },
      {
        name: 'Industrial Sensor Suite',
        description: 'High-precision sensors for temperature, pressure, and motion.',
        image: 'https://via.placeholder.com/250x150?text=Sensor+Suite',
        path: '/products/product4',
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
      },
      {
        name: '工业焊接工具',
        description: '高效工业焊接设备，精准可靠。',
        path: '/products/product2',
      },
      {
        name: '先进合金材料',
        description: '用于航空和汽车的高级合金材料。',
        path: '/products/product3',
      },
      {
        name: '工业传感器套件',
        description: '智能工厂环境下使用的高精度传感器。',
        path: '/products/product4',
      },
    ],
  },
};

const Products = () => {
  const { lang } = useContext(LanguageContext);
  const text = content[lang];

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
          <Link
            to={product.path}
            key={index}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              padding: '1rem',
              maxWidth: '250px',
              textAlign: 'center',
            }}
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
