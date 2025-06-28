import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessTech = () => {
const { lang } = useContext(LanguageContext);

return (
<section style={{ padding: '2rem' }}>
<h2>{lang === 'cn' ? '先进工业技术' : 'Advanced Industrial Technologies'}</h2>
<p>{lang === 'cn'
? '展示我们在智能制造、自动化设备、工业 AI 等方面的技术成果。'
: 'Showcasing our expertise in smart manufacturing, automation systems, and industrial AI.'}</p>
</section>
);
};

export default BusinessTech;