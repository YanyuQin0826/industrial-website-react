import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
    en: {
      home: 'Home',
      career:'Career',
      business: 'Business',
      products: 'Products',
      contact: 'Contact Us',
      langSwitch: '中文',
    },
    cn: {
      home: '首页',
      career: '招聘信息',
      business: '核心业务',
      products: '产品中心',
      contact: '联系我们',
      langSwitch: 'EN',
    },
  };

const Header = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const text = content[lang];

    const toggleLang = () => {
        setLang(lang === 'en' ? 'cn' : 'en');
    };

    return (
      <header style={{
        backgroundColor: '#d9d9d9', 
        color: '#1a1a1a', 
        padding: '1rem 2rem',
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
      {/* Logo + Company Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img
            src="/logo.png"
            alt="Company Logo"
            style={{ width: '73px', height: '73px' }}
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          International Innovation Institute LLC
        </span>
      </div>

      {/* Navigation Menu */}
        <nav>
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            gap: '2rem', 
            padding: 0, 
            margin: 0, 
            alignItems: 'center',
            }}>
            <li><Link to="/" style={{ color: '#1f2d3d', textDecoration: 'none' }}>{text.home}</Link></li>
            <li><a href="#about" style={{ color: '#1f2d3d', textDecoration: 'none' }}>{text.about}</a></li>
            <li><Link to="/business" style={{ color: '#1f2d3d', textDecoration: 'none' }}>{text.business}</Link></li>
            <li><Link to="/products" style={{ color: '#1f2d3d', textDecoration: 'none' }}>{text.products}</Link></li>
            <li><Link to="/contact" style={{ color: '#1f2d3d', textDecoration: 'none' }}>{text.contact}</Link></li>
            <li><Link to="/career" style={{ color: '#1f2d3d', textDecoration: 'none' }}>{text.career}</Link></li>
          </ul>
        </nav>
        {/* Language Selector and Search */}
        <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            alignItems: 'center' 
            }}>
          <select 
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{ padding: '0.25rem' }}>
            <option value="en">EN</option>
            <option value="cn">中文</option>
          </select>
          <input 
            type="text" 
            placeholder={lang === 'en' ? "Search" : "搜索"}
            style={{ padding: '0.3rem', borderRadius: '4px', border: 'none' }}
        />
        </div>
      </header>
    );
  };
  
  export default Header;
  
  