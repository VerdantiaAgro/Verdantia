import { useTranslation } from '~/i18n/useTranslation'

const PrivacyPolicy = () => {
    const { t, tArray } = useTranslation()
    const section2Items = tArray<string>('legal.privacy.section2.items')
    const section3Items = tArray<string>('legal.privacy.section3.items')

    return (
        <div className="space-y-6 text-[#A1A1AA] leading-relaxed">
            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.privacy.section1.title')}</h3>
                <p>
                    {t('legal.privacy.section1.content')}
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.privacy.section2.title')}</h3>
                <p>
                    {t('legal.privacy.section2.content')}
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    {section2Items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.privacy.section3.title')}</h3>
                <p>{t('legal.privacy.section3.content')}</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    {section3Items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.privacy.section4.title')}</h3>
                <p>
                    {t('legal.privacy.section4.content')}
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.privacy.section5.title')}</h3>
                <p>
                    {t('legal.privacy.section5.content')}
                </p>
            </section>


            <section className="pt-6 border-t border-white/5">
                <p className="text-xs italic">{t('legal.privacy.lastUpdate')}</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
