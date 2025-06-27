import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

const content = {
  en: {
    heading: 'About Us',
    introText:
      'International Innovation Institute LLC (III) is committed to driving global industrial transformation by delivering cutting-edge automation technologies and integrated solutions to manufacturers worldwide. \nThrough five interdisciplinary research centers and a business-driven operating model, III transforms advanced research into scalable industrial value. We serve as a bridge between academia, industry, and capital—accelerating the deployment of intelligent, efficient, and sustainable manufacturing systems.',
    missionList: [
      { label: 'Mission:', value: 'Empowering industry, connecting the future.' },
      { label: 'Vision:', value: 'To become a global leader in industrial innovation.' },
      { label: 'Values:', value: 'Innovation · Collaboration · Responsibility · Sustainability' },
    ],
    teamHeading: 'Founding Team',
    teamText:
      'Our founding team consists of world-class industry leaders and academic experts from top institutions such as UCLA and Fudan University. Team members bring diverse expertise across automation, manufacturing systems, global supply chains, and data science.'
      
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
      '创始团队由来自 UCLA、复旦大学等全球顶尖高校的博士、MBA 及多位产业领袖共同组建，具备自动化、制造系统、供应链与数据科学等跨界专业背景。\n',
  },
};

const AboutSection = () => {
  const { lang } = useContext(LanguageContext);
  const text = content[lang];

  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{text.heading}</h2>

      <p>{text.introText}</p>

      <ul>
        {text.missionList.map((item, index) => (
          <li key={index}>
            <strong>{item.label}</strong> {item.value}
          </li>
        ))}
      </ul>

      <h3>{text.teamHeading}</h3>
      <p>{text.teamText}</p>
    </section>
  );
};

export default AboutSection;