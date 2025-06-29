import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
  en: {
    heading: 'Join Our Team',
    intro: 'We are looking for passionate individuals to join us. Explore current job openings below:',
    jobs: [
      {
        title: 'Frontend Developer Intern',
        description: 'Work with React to build responsive user interfaces. Basic experience with JavaScript and Git required.',
        location: 'Remote / US',
        email: 'careers@yourcompany.com'
      },
      {
        title: 'Marketing Assistant',
        description: 'Assist in content creation, social media, and outreach campaigns. Creativity and communication skills preferred.',
        location: 'On-site (New York)',
        email: 'careers@yourcompany.com'
      }
    ],
    applyText: 'To apply, send your resume to:',
  },
  cn: {
    heading: '加入我们',
    intro: '我们正在寻找有热情的伙伴加入我们的团队。以下是当前开放职位：',
    jobs: [
      {
        title: '前端开发实习生',
        description: '使用 React 构建响应式网页。要求掌握基础 JavaScript 和 Git。',
        location: '远程 / 美国',
        email: 'careers@company.com'
      },
      {
        title: '市场助理',
        description: '协助内容撰写、社交媒体与外联活动。有创意与沟通能力者优先。',
        location: '现场办公（纽约）',
        email: 'careers@company.com'
      }
    ],
    applyText: '请将您的简历发送至：',
  }
};

const Career = () => {
  const { lang } = useContext(LanguageContext);
  const text = content[lang] || content.en;

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
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '2rem',
    textAlign: 'center',
  };

  const jobCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.2rem',
    marginBottom: '1.5rem',
    backgroundColor: '#fafafa',
  };

  const jobTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  };

  const jobDescStyle = {
    fontSize: '1rem',
    marginBottom: '0.3rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>{text.heading}</h2>
        <p style={paragraphStyle}>{text.intro}</p>

        {text.jobs.map((job, index) => (
          <div key={index} style={jobCardStyle}>
            <div style={jobTitleStyle}>{job.title}</div>
            <div style={jobDescStyle}>{job.description}</div>
            <div style={jobDescStyle}><strong>{lang === 'cn' ? '工作地点：' : 'Location: '}</strong>{job.location}</div>
            <div style={jobDescStyle}>
              <strong>{lang === 'cn' ? '投递简历：' : 'Apply via: '}</strong>
              <a href={`mailto:${job.email}`}>{job.email}</a>
            </div>
          </div>
        ))}

        <p style={{ ...paragraphStyle, marginTop: '2rem' }}>
          {text.applyText} <a href="mailto:careers@yourcompany.com">careers@yourcompany.com</a>
        </p>
      </div>
    </section>
  );
};

export default Career;

