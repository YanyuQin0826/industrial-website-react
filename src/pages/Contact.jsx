import { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
  en: {
    heading: 'Contact Us',
    name: 'Your Name',
    email: 'Your Email',
    phoneInput: 'Phone Number',
    message: 'Message',
    submit: 'Send Message',
    success: '✅ Thank you! We’ll be in touch shortly.',
  },
  cn: {
    heading: '联系我们',
    name: '您的姓名',
    email: '您的邮箱',
    phoneInput: '电话号码',
    message: '留言内容',
    submit: '发送消息',
    success: '✅ 感谢您的联系，我们将尽快与您取得联系。',
  },
};

const Contact = () => {
  const { lang } = useContext(LanguageContext);
  const text = content[lang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formUrl = 'https://formspree.io/f/meokdjee'; 
  
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
  
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('❌ Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Formspree error:', error);
      alert('❌ Error sending message.');
    }
  };

  return (
    <section
      style={{
        padding: '3rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f7f9fb',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem 2.5rem',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>{text.heading}</h2>
      

        {submitted ? (
          <p style={{ textAlign: 'center', color: 'green', fontSize: '1.1rem' }}>{text.success}</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* 姓名 */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>{text.name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            {/* 邮箱 */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>{text.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            {/* 电话 */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>{text.phoneInput}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            {/* 留言 */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600' }}>{text.message}</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  resize: 'vertical',
                }}
              ></textarea>
            </div>

            {/* 提交按钮 */}
            <button
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '0.9rem',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
              {text.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;

