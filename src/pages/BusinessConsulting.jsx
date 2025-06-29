import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessConsulting = () => {
  const { lang } = useContext(LanguageContext);

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
  };

  const containerStyle = {
    maxWidth: '800px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.08)',
    padding: '2.5rem',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    width: '100%',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#222',
  };

  const paragraphStyle = {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    marginTop: '2rem',
  };

  const listStyle = {
    lineHeight: '1.8',
    paddingLeft: '1.5rem',
    fontSize: '1rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          {lang === 'cn' ? '技术咨询与优化' : 'Technical Consulting & Advisory'}
        </h2>

        <p style={paragraphStyle}>
          {lang === 'cn'
            ? '我们为制造企业提供产线优化、数字化改造与可持续发展咨询，结合数据能力与产业经验，提升整体效率与合规水平。'
            : 'We help manufacturers optimize processes, digitize systems, and meet ESG goals through expert consulting and real-world engineering experience.'}
        </p>

        <h3 style={subheadingStyle}>
          {lang === 'cn' ? '咨询服务：' : 'Consulting Services:'}
        </h3>

        <ul style={listStyle}>
          <li>
            {lang === 'cn'
              ? '工艺流程与设备升级'
              : 'Process & equipment optimization'}
          </li>
          <li>
            {lang === 'cn'
              ? '自动化系统架构与数据集成'
              : 'Automation architecture & data integration'}
          </li>
          <li>
            {lang === 'cn'
              ? 'ESG 审核与碳排管理'
              : 'ESG & sustainability audits'}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BusinessConsulting;
