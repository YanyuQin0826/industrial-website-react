import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const Product3 = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{lang === 'cn' ? '高级合金材料' : 'Advanced Alloy Material'}</h2>
      <p>{lang === 'cn' ? '适用于航空航天与汽车工业的优质合金，具备强度高、耐腐蚀等特性。' : 'Premium-grade alloy used in aerospace and automotive industries, known for strength and corrosion resistance.'}</p>
      <Link to="/products">← {lang === 'cn' ? '返回产品页' : 'Back to Products'}</Link>
    </section>
  );
};

export default Product3;