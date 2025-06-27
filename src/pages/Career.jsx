import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
  en: {
    heading: 'Careers at Our Company',
    paragraph1: 'We are always looking for talented individuals to join our team. Explore exciting career opportunities and grow with us.',
    paragraph2: 'Email your resume to: careers@yourcompany.com'
  },
  cn: {
    heading: '加入我们',
    paragraph1: '我们始终欢迎优秀的人才加入我们的团队。探索令人兴奋的职业机会，与我们共同成长。',
    paragraph2: '请将您的简历发送至：careers@yourcompany.com'
  }
};

const Career = () => {
  const { lang } = useContext(LanguageContext);
  const text = content[lang] || content.en;

  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{text.heading}</h2>
      <p>{text.paragraph1}</p>
      <p>{text.paragraph2}</p>
    </section>
  );
};

export default Career;
