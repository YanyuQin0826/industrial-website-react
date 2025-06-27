import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const Product2 = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{lang === 'cn' ? '精密焊接工具' : 'Precision Welding Tool'}</h2>
      <p>{lang === 'cn' ? '高效节能的工业焊接设备，精度高，能耗低。' : 'High-efficiency industrial welding equipment with precision accuracy and low energy consumption.'}</p>
      <Link to="/products">← {lang === 'cn' ? '返回产品页' : 'Back to Products'}</Link>
    </section>
  );
};

export default Product2;