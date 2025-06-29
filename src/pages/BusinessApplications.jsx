import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessApplications = () => {
  const { lang } = useContext(LanguageContext);

  const services = lang === 'cn'
    ? ['电子与半导体', '智能制造', '能源与公共事业', '医疗与生物医药', '食品与消费品', '化工与新材料']
    : ['Electronics & Semiconductors', 'Advanced Manufacturing', 'Energy & Utilities', 'Pharmaceuticals & Healthcare', 'Food & Consumer Goods', 'Chemicals & Materials'];

  const impacts = lang === 'cn'
    ? ['生产效率提升 +52%', '故障停机率降低 –48%', '能效使用效率提升 +29%', '运维成本下降 –21%']
    : ['+52% Productivity', '–48% Downtime', '+29% Energy Efficiency', '–21% Operating Costs (OPEX)'];

  const scenarios = lang === 'cn'
    ? [
        '食品行业：包装产线效率优化、油类精炼处理系统升级',
        '电子行业：芯片组装自动化检测系统',
        '医药行业：无菌生产流程的数字化监控',
        '能源行业：绿色能源系统的实时监测与维护',
      ]
    : [
        'Food Industry: Packaging line optimization, edible oil refining system upgrades',
        'Electronics: Automated inspection for chip assembly',
        'Pharmaceuticals: Digital monitoring of aseptic production processes',
        'Energy: Real-time monitoring and maintenance of green energy systems',
      ];

  const sectionStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#1a237e',
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
    color: '#0d47a1',
  };

  const listStyle = {
    paddingLeft: '1.5rem',
    marginBottom: '1rem',
  };

  const liStyle = {
    marginBottom: '0.4rem',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>
        {lang === 'cn' ? '服务行业与落地成效' : 'Industry Applications'}
      </h2>

      <h3 style={subtitleStyle}>
        {lang === 'cn' ? '服务行业：' : 'Who We Serve:'}
      </h3>
      <ul style={listStyle}>
        {services.map((item, idx) => (
          <li key={idx} style={liStyle}>{item}</li>
        ))}
      </ul>

      <h3 style={subtitleStyle}>
        {lang === 'cn' ? '项目成效：' : 'Business Impact:'}
      </h3>
      <ul style={listStyle}>
        {impacts.map((item, idx) => (
          <li key={idx} style={liStyle}>{item}</li>
        ))}
      </ul>

      <h3 style={subtitleStyle}>
        {lang === 'cn' ? '典型应用场景：' : 'Application Scenarios:'}
      </h3>
      <ul style={listStyle}>
        {scenarios.map((item, idx) => (
          <li key={idx} style={liStyle}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default BusinessApplications;
