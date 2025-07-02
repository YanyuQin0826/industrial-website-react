import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessTech = () => {
  const { lang } = useContext(LanguageContext);

  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '4rem 1rem',
    fontFamily: 'Arial, sans-serif',
  };

  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
  };

  const textStyle = {
    flex: '1 1 500px',
    padding: '2.5rem',
    boxSizing: 'border-box',
  };

  const imageStyle = {
    flex: '1 1 400px',
    minHeight: '320px',
    backgroundImage: 'url("/images/business-tech.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
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
    marginTop: '1rem',
  };

  const listStyle = {
    lineHeight: '1.8',
    paddingLeft: '1.5rem',
    fontSize: '1rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={wrapperStyle}>
        {/* 左侧文字 */}
        <div style={textStyle}>
          <h2 style={headingStyle}>
            {lang === 'cn' ? '先进工业技术' : 'Advanced Industrial Technologies'}
          </h2>
          <p style={paragraphStyle}>
            {lang === 'cn'
              ? '我们专注于开发与交付前沿工业技术，覆盖自动化系统、智能质检、绿色能源与新材料。五大研究中心协同推动跨学科解决方案，助力制造企业实现可持续转型。'
              : 'We develop and deliver advanced industrial technologies—from automation systems and intelligent inspection to sustainable energy and next-gen materials. Our five research centers ensure interdisciplinary synergy and scalable innovation.'}
          </p>

          <h3 style={subheadingStyle}>
            {lang === 'cn' ? '重点方向：' : 'Core Focus Areas:'}
          </h3>

          <ul style={listStyle}>
            {lang === 'cn' ? (
              <>
                <li>AI 驱动的工业自动化</li>
                <li>智能能源与能效提升</li>
                <li>高性能材料与可降解解决方案</li>
                <li>半导体与微电子技术</li>
                <li>生物医药制造技术</li>
              </>
            ) : (
              <>
                <li>AI-powered industrial automation</li>
                <li>Smart energy & energy efficiency</li>
                <li>High-performance materials & sustainability</li>
                <li>Semiconductor & microelectronics</li>
                <li>Biopharmaceutical manufacturing</li>
              </>
            )}
          </ul>
        </div>

        {/* 右侧图片 */}
        <div style={imageStyle} />
      </div>
    </section>
  );
};

export default BusinessTech;

