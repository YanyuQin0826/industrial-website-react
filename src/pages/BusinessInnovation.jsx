import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const BusinessInnovation = () => {
const { lang } = useContext(LanguageContext);

return (
<section style={{ padding: '2rem' }}>
<h2>{lang === 'cn' ? '创新促进' : 'Innovation Facilitation'}</h2>
<p>{lang === 'cn'
? '推动科技成果转化与协同创新的孵化平台。'
: 'Driving collaborative innovation and technology transfer through incubation platforms.'}</p>
</section>
);
};

export default BusinessInnovation;