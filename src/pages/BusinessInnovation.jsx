import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessInnovation = () => {
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
    </section>
  );
};

export default BusinessInnovation;
