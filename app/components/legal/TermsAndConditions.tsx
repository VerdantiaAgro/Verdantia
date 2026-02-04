import { useTranslation } from '~/i18n/useTranslation'

const TermsAndConditions = () => {
    const { t } = useTranslation()

    return (
        <div className="space-y-6 text-[#A1A1AA] leading-relaxed">
            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.terms.section1.title')}</h3>
                <p>
                    {t('legal.terms.section1.content')}
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.terms.section2.title')}</h3>
                <p>
                    {t('legal.terms.section2.content')}
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.terms.section3.title')}</h3>
                <p>
                    {t('legal.terms.section3.content')}
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.terms.section4.title')}</h3>
                <p>
                    {t('legal.terms.section4.content')}
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.terms.section5.title')}</h3>
                <p>
                    {t('legal.terms.section5.content')}
                </p>
            </section>

            <section>
                <h3 className="text-white text-lg font-bold mb-3">{t('legal.terms.section6.title')}</h3>
                <p>
                    {t('legal.terms.section6.content')}
                </p>
            </section>

            <section className="pt-6 border-t border-white/5">
                <p className="text-xs italic">{t('legal.terms.lastUpdate')}</p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
