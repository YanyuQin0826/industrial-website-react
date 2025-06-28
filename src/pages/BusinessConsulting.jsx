import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessConsulting = () => {
const { lang } = useContext(LanguageContext);

return (
<section style={{ padding: '2rem' }}>
<h2>{lang === 'cn' ? '技术咨询与优化' : 'Technical Consulting & Advisory'}</h2>
<p>{lang === 'cn'
? '为企业提供定制化技术解决方案与专家服务。'
: 'Delivering expert technical solutions tailored to enterprise needs.'}</p>
</section>
);
};

export default BusinessConsulting;