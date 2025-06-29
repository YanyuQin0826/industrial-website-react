import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
  en: {
    heading: 'About Us',
    introText:
      'International Innovation Institute LLC (III) is committed to driving global industrial transformation by delivering cutting-edge automation technologies and integrated solutions to manufacturers worldwide.\nThrough five interdisciplinary research centers and a business-driven operating model, III transforms advanced research into scalable industrial value. We serve as a bridge between academia, industry, and capital—accelerating the deployment of intelligent, efficient, and sustainable manufacturing systems.',
    missionList: [
      { label: 'Mission:', value: 'Empowering industry, connecting the future.' },
      { label: 'Vision:', value: 'To become a global leader in industrial innovation.' },
      { label: 'Values:', value: 'Innovation · Collaboration · Responsibility · Sustainability' },
    ],
    teamHeading: 'Founding Team',
    teamText:
      'Our founding team consists of world-class industry leaders and academic experts from top institutions such as UCLA and Fudan University. Team members bring diverse expertise across automation, manufacturing systems, global supply chains, and data science.',
  },
  cn: {
    heading: '关于我们',
    introText:
      '国际创新研究所有限责任公司（III）致力于通过提供尖端自动化技术与一体化解决方案，推动全球制造业的工业转型。\n我们依托五大跨学科研究中心，以市场为导向的运营模式，将前沿科研成果转化为可规模化落地的工业价值。III 是连接科研机构、制造企业与资本的桥梁，加速构建智能、高效、可持续的未来制造体系。',
    missionList: [
      { label: '使命：', value: '赋能产业，链接未来。' },
      { label: '愿景：', value: '成为全球工业创新的引领者。' },
      { label: '价值观：', value: '创新 · 协作 · 责任 · 可持续。' },
    ],
    teamHeading: '创始团队',
    teamText:
      '创始团队由来自 UCLA、复旦大学等全球顶尖高校的博士、MBA 及多位产业领袖共同组建，具备自动化、制造系统、供应链与数据科学等跨界专业背景。',
  },
};

const AboutSection = () => {
  const { lang } = useContext(LanguageContext);
  const text = content[lang];

  const sectionStyle = {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '30px 40px',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#222',
  };

  const introStyle = {
    whiteSpace: 'pre-line',
    fontSize: '1.05rem',
    lineHeight: '1.8',
    marginBottom: '25px',
  };

  const listStyle = {
    paddingLeft: '20px',
    marginBottom: '30px',
    lineHeight: '1.6',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    fontWeight: '600',
  };

  const teamTextStyle = {
    fontSize: '1rem',
    lineHeight: '1.7',
    whiteSpace: 'pre-line',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>{text.heading}</h2>

        <p style={introStyle}>{text.introText}</p>

        <ul style={listStyle}>
          {text.missionList.map((item, index) => (
            <li key={index}>
              <strong>{item.label}</strong> {item.value}
            </li>
          ))}
        </ul>

        <h3 style={subheadingStyle}>{text.teamHeading}</h3>
        <p style={teamTextStyle}>{text.teamText}</p>
      </div>
    </section>
  );
};

export default AboutSection;
