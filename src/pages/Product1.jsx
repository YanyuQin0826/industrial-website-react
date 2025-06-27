import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const Product1 = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{lang === 'cn' ? '智能控制单元' : 'Smart Control Unit'}</h2>
      <p>{lang === 'cn' ? '用于智能工厂的 AI 控制系统，支持实时监控与优化。' : 'An AI-powered control system for automated factories. Enables real-time monitoring and optimization.'}</p>
      <Link to="/products">← {lang === 'cn' ? '返回产品页' : 'Back to Products'}</Link>
    </section>
  );
};

export default Product1;