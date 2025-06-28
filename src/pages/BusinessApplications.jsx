import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessApplications = () => {
const { lang } = useContext(LanguageContext);

return (
<section style={{ padding: '2rem' }}>
<h2>{lang === 'cn' ? '服务行业与落地成效' : 'Industry Applications'}</h2>
<p>{lang === 'cn'
? '涵盖汽车、电子、医疗、能源等关键行业的应用案例。'
: 'Case studies in automotive, electronics, healthcare, energy, and more.'}</p>
</section>
);
};

export default BusinessApplications;