import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const Product4 = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{lang === 'cn' ? '工业传感器套件' : 'Industrial Sensor Suite'}</h2>
      <p>{lang === 'cn' ? '用于智能工厂的高精度温度、压力与运动监测传感器。' : 'High-precision sensors for temperature, pressure, and motion monitoring in smart factory environments.'}</p>
      <Link to="/products">← {lang === 'cn' ? '返回产品页' : 'Back to Products'}</Link>
    </section>
  );
};

export default Product4;