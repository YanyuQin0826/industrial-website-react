import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { Link } from 'react-router-dom';

const content = {
    en: {
      heading: 'Contact Us',
      address: '123 Industrial Road, Innovation City, USA',
      phone: 'Phone',
      email: 'Email',
      formTitle: 'Send us a message',
      name: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      company: 'Company Name',
      inquiry: 'Type of Inquiry',
      submit: 'Submit',
      cooperation: 'Interested in collaborating? Reach out to us anytime.',
      backToHome: 'Back to Home',
    },
    cn: {
      heading: '联系我们',
      address: '美国·创新市·工业大道123号',
      phone: '电话',
      email: '邮箱',
      formTitle: '在线留言',
      name: '姓名',
      emailLabel: '电子邮箱',
      phoneLabel: '联系电话',
      company: '公司名称',
      inquiry: '咨询类型',
      submit: '提交',
      cooperation: '想要合作？欢迎随时与我们联系。',
      backToHome: '返回首页',
    },
  };

const Contact = () => {
    const { lang } = useContext(LanguageContext);
    const text = content[lang];

    return (
      <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{text.heading}</h2>

        <div style={{ marginBottom: '2rem' }}>
            <p><strong>{text.phone}:</strong> +1 234 567 890</p>
            <p><strong>{text.email}:</strong> contact@institute.com</p>
            <p><strong>📍 {text.address}</strong></p>
            <p>{text.cooperation}</p>
        </div>
  
        <h3>{text.formTitle}</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder={text.name} required />
          <input type="email" placeholder={text.emailLabel} required />
          <input type="tel" placeholder={text.phoneLabel} />
          <input type="text" placeholder={text.company} />
          <select required>
            <option value="">{text.inquiry}</option>
            <option value="partnership">{lang === 'en' ? 'Partnership' : '合作咨询'}</option>
            <option value="product">{lang === 'en' ? 'Product Info' : '产品咨询'}</option>
            <option value="support">{lang === 'en' ? 'Support' : '技术支持'}</option>
          </select>
          <textarea placeholder="Your Message" rows={5} />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>{text.submit}</button>
        </form>
        <div style={{ marginTop: '2rem' }}>
          <Link
              to="/"
              style={{
              display: 'inline-block',
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
  
  export default Contact;
  