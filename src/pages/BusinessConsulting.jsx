import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessConsulting = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '技术咨询与优化' : 'Technical Consulting & Advisory'}
      </h2>

      <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
        {lang === 'cn'
          ? '我们为制造企业提供产线优化、数字化改造与可持续发展咨询，结合数据能力与产业经验，提升整体效率与合规水平。'
          : 'We help manufacturers optimize processes, digitize systems, and meet ESG goals through expert consulting and real-world engineering experience.'}
      </p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>
        {lang === 'cn' ? '咨询服务：' : 'Consulting Services:'}
      </h3>

      <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
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
    </section>
  );
};

export default BusinessConsulting;
