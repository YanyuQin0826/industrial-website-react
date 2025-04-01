import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';

const content = {
    en: {
      heading: 'About Us',
      introHeading: 'Company Introduction',
      introText:
        'Industrial Research Institute is dedicated to driving industrial transformation by providing cutting-edge automation technologies and integrated solutions to global manufacturers.',
      missionHeading: 'Mission, Vision & Values',
      missionList: [
        { label: 'Mission:', value: 'Empowering industry, connecting the future.' },
        { label: 'Vision:', value: 'To become a global leader in industrial innovation.' },
        { label: 'Values:', value: 'Innovation, Collaboration, Responsibility, and Sustainability.' },
      ],
      teamHeading: 'Founding Team',
      teamText:
        'Our team consists of experts with deep experience in automation, manufacturing systems, and global supply chains.',
        backToHome: 'Back to Home',
    },
    cn: {
      heading: '关于我们',
      introHeading: '公司简介',
      introText:
        '国际创新研究院（International Innovation Institute LLC）致力于通过提供尖端自动化技术与一体化解决方案，推动全球制造业的产业升级与转型。转型。',
      missionHeading: '使命、愿景与价值观',
      missionList: [
        { label: '使命：', value: '赋能工业，连接未来。' },
        { label: '愿景：', value: '成为全球领先的工业创新平台。' },
        { label: '价值观：', value: '创新、协作、责任、可持续发展。' },
      ],
      teamHeading: '创始团队',
      teamText:
        '我们由一支在自动化、制造系统和全球供应链等领域具有丰富经验的专家团队组成。',
        backToHome: '返回首页',
    },
  };

const AboutSection = () => {
    const { lang } = useContext(LanguageContext);
    const text = content[lang];

    return (
      <section style={{ 
        padding: '2rem', 
        maxWidth: '800px', 
        margin: '0 auto' }}>
        <h2>{text.heading}</h2>
  
        <h3>{text.introHeading}</h3>
        <p>{text.introText}</p>

        <h3>{text.missionHeading}</h3>
        <ul>
        {text.missionList.map((item, index) => (
          <li key={index}>
            <strong>{item.label}</strong> {item.value}
          </li>
        ))}
        </ul>
        
        <h3>{text.teamHeading}</h3>
        <p>{text.teamText}</p>

        <div style={{ marginTop: '2rem' }}>
        <Link
            to="/"
            style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#1f2d3d',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            }}
            >
            ← {text.backToHome}
            </Link>
         </div>
    </section>
    );
};
  
  export default AboutSection;
