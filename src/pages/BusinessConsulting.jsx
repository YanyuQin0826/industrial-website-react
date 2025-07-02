import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessConsulting = () => {
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
    backgroundImage: 'url("/images/consulting.jpg")', // 🔁 替换为实际图片路径
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
        {/* 左侧文字内容 */}
        <div style={textStyle}>
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

        {/* 右侧图片展示 */}
        <div style={imageStyle} />
      </div>
    </section>
  );
};

export default BusinessConsulting;
