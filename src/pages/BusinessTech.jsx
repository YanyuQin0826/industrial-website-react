import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessTech = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '先进工业技术' : 'Advanced Industrial Technologies'}
      </h2>

      <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
        {lang === 'cn'
          ? '我们专注于开发与交付前沿工业技术，覆盖自动化系统、智能质检、绿色能源与新材料。五大研究中心协同推动跨学科解决方案，助力制造企业实现可持续转型。'
          : 'We develop and deliver advanced industrial technologies—from automation systems and intelligent inspection to sustainable energy and next-gen materials. Our five research centers ensure interdisciplinary synergy and scalable innovation.'}
      </p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '重点方向：' : 'Core Focus Areas:'}
      </h3>

      <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
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
    </section>
  );
};

export default BusinessTech;
