import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessInnovation = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '创新促进' : 'Innovation Facilitation'}
      </h2>

      <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
        {lang === 'cn'
          ? '我们通过战略合作、联合开发和全球知识产权部署，推动技术加速商业落地。'
          : 'We accelerate the commercialization of research through strategic partnerships, joint development, and global IP deployment.'}
      </p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '核心服务：' : 'Key Services:'}
      </h3>

      <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
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
    </section>
  );
};

export default BusinessInnovation;
