import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessInnovation = () => {
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
    backgroundImage: 'url("/images/innovation.png")', 
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
            {lang === 'cn' ? '创新促进' : 'Innovation Facilitation'}
          </h2>

          <p style={paragraphStyle}>
            {lang === 'cn'
              ? '我们通过战略合作、联合开发和全球知识产权部署，推动技术加速商业落地。'
              : 'We accelerate the commercialization of research through strategic partnerships, joint development, and global IP deployment.'}
          </p>

          <h3 style={subheadingStyle}>
            {lang === 'cn' ? '核心服务：' : 'Key Services:'}
          </h3>

          <ul style={listStyle}>
            {lang === 'cn' ? (
              <>
                <li>技术转移与 IP 战略</li>
                <li>市场/法规准入路径设计</li>
                <li>联合实验室与投资对接</li>
              </>
            ) : (
              <>
                <li>IP strategy & technology transfer</li>
                <li>Regulatory & market readiness planning</li>
                <li>Joint labs and venture matchmaking</li>
              </>
            )}
          </ul>
        </div>

        {/* 右侧图片展示 */}
        <div style={imageStyle} />
      </div>
    </section>
  );
};

export default BusinessInnovation;

