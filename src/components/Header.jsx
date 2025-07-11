import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect, useRef } from 'react';
import { LanguageContext } from '../LanguageContext';

const content = {
  en: {
    home: 'Home',
    business: 'Business',
    businessMenu: [
      { name: 'Industrial Technologies', path: '/business/advanced-tech' },
      { name: 'Innovation Facilitation', path: '/business/innovation' },
      { name: 'Technical Consulting', path: '/business/consulting' },
      { name: 'Industry Applications', path: '/business/applications' }
    ],
    products: 'Products',
    contact: 'Contact Us',
    career: 'Career',
    langSwitch: '中文',
  },
  cn: {
    home: '网站首页',
    business: '核心业务',
    businessMenu: [
      { name: '工业技术', path: '/business/advanced-tech' },
      { name: '创新促进', path: '/business/innovation' },
      { name: '技术咨询', path: '/business/consulting' },
      { name: '行业应用', path: '/business/applications' }
    ],
    products: '产品中心',
    contact: '联系我们',
    career: '招聘信息',
    langSwitch: 'EN',
  },
};

// 搜索关键词映射
const searchMap = {
  en: {
    home: '/',
    career: '/career',
    contact: '/contact',
    products: '/products',
    innovation: '/business/innovation',
    'advanced industrial technologies': '/business/advanced-tech',
    'technical consulting': '/business/consulting',
    'industry applications': '/business/applications',
  },
  cn: {
    网站首页: '/',
    联系我们: '/contact',
    产品中心: '/products',
    招聘信息: '/career',
    创新促进: '/business/innovation',
    先进工业技术: '/business/advanced-tech',
    技术咨询: '/business/consulting',
    服务行业: '/business/applications',
  },
};

const Header = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const text = content[lang];
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const handleMenuClick = (path) => {
    navigate(path);
    setShowDropdown(false);
  };

  // 点击外部区域关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 处理搜索功能
  const handleSearch = () => {
    const keyword = searchTerm.trim().toLowerCase();
    const match = Object.entries(searchMap[lang]).find(([key]) =>
      key.toLowerCase().includes(keyword)
    );
    if (match) {
      navigate(match[1]);
      setSearchTerm('');
      setShowDropdown(false);
    } else {
      navigate('/notfound');
    }
  };

  return (
    <header style={{ backgroundColor: '#d9d9d9', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Logo + Company Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src="/logo.png" alt="Company Logo" style={{ width: '73px', height: '73px' }} />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>International Innovation Institute LLC</span>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0 }}>
          <li><Link to="/" style={linkStyle}>{text.home}</Link></li>
          <li><Link to="/products" style={linkStyle}>{text.products}</Link></li>
          <li ref={dropdownRef} style={{ position: 'relative' }}>
            <span onClick={() => setShowDropdown((prev) => !prev)} style={{ ...linkStyle, cursor: 'pointer' }}>
              {text.business} ⌄
            </span>
            {showDropdown && (
              <div style={simpleDropdownStyle}>
                {text.businessMenu.map((item, index) => (
              <div
                key={index}
                onClick={() => handleMenuClick(item.path)}
                style={simpleDropdownItemStyle}
              >
                {item.name}
              </div>
            ))}
           </div>
          )}
          </li>
          <li><Link to="/contact" style={linkStyle}>{text.contact}</Link></li>
          <li><Link to="/career" style={linkStyle}>{text.career}</Link></li>
        </ul>
      </nav>

      {/* Language Switcher + Search */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          style={{ padding: '0.25rem' }}
        >
          <option value="en">EN</option>
          <option value="cn">中文</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={lang === 'en' ? 'Search' : '搜索'}
          style={{ padding: '0.3rem', borderRadius: '4px', border: 'none' }}
        />
      </div>
    </header>
  );
};

const linkStyle = {
  color: '#1f2d3d',
  textDecoration: 'none',
};

const simpleDropdownStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#ffffff',
  border: '1px solid #ccc',
  width: '150px', 
  display: 'flex',
  flexDirection: 'column',
  fontSize: '0.85rem', 
  zIndex: 999,
};

const simpleDropdownItemStyle = {
  padding: '6px 10px', 
  borderBottom: '1px solid #e0e0e0',
  cursor: 'pointer',
  color: '#1f2d3d',
  transition: 'background-color 0.2s',
};

const simpleDropdownItemHoverStyle = {
  backgroundColor: '#f5f5f5',
};

export default Header;

