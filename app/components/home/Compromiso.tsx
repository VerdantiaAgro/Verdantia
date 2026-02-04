import type { ReactNode } from 'react'
import { useTranslation } from '~/i18n/useTranslation'

interface CompromisoTranslation {
    titulo: string
    descripcion: string
}

const iconos: ReactNode[] = [
    (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
    ),
    (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
        </svg>
    ),
    (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    ),
    (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    )
]

const Compromiso = () => {
    const { t, tArray } = useTranslation()
    const compromisosTranslations = tArray<CompromisoTranslation>('compromiso.items')

    const compromisos = compromisosTranslations.map((compromiso, index) => ({
        ...compromiso,
        icono: iconos[index]
    }))

    return (
        <section id="compromiso" className="py-24 bg-[#0F1612]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20 space-y-4">
                    <div className="inline-block border-l-2 border-[#DBB75F] pl-4">
                        <span className="text-[#DBB75F] text-sm font-bold uppercase tracking-[0.4em]">{t('compromiso.sectionLabel')}</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                        {t('compromiso.titlePart1')} <br />
                        <span className="text-[#DBB75F]">{t('compromiso.titlePart2')}</span>
                    </h2>
                    <p className="text-lg text-[#A1A1AA] max-w-2xl font-light leading-relaxed pt-4">
                        {t('compromiso.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {compromisos.map((compromiso, index) => (
                        <div
                            key={index}
                            className="group bg-[#1A251F] border border-white/5 rounded-3xl p-10 hover:border-[#DBB75F]/30 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-[#DBB75F] rounded-2xl flex items-center justify-center mb-8 text-[#0F1612] shadow-xl shadow-[#DBB75F]/10 group-hover:scale-110 transition-transform duration-500">
                                    {compromiso.icono}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#DBB75F] transition-colors duration-300">
                                    {compromiso.titulo}
                                </h3>

                                <p className="text-[#A1A1AA] leading-relaxed font-light">
                                    {compromiso.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats section */}
                <div className="mt-20 glass-dark border border-white/5 rounded-3xl p-10 lg:p-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-5xl font-bold text-[#DBB75F] mb-3 tracking-tighter">{t('compromiso.stats.traceability.value')}</div>
                            <div className="text-[10px] text-[#A1A1AA] uppercase tracking-[0.2em]">{t('compromiso.stats.traceability.label')}</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-[#DBB75F] mb-3 tracking-tighter">{t('compromiso.stats.water.value')}</div>
                            <div className="text-[10px] text-[#A1A1AA] uppercase tracking-[0.2em]">{t('compromiso.stats.water.label')}</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-[#DBB75F] mb-3 tracking-tighter">{t('compromiso.stats.certifications.value')}</div>
                            <div className="text-[10px] text-[#A1A1AA] uppercase tracking-[0.2em]">{t('compromiso.stats.certifications.label')}</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-[#DBB75F] mb-3 tracking-tighter">{t('compromiso.stats.families.value')}</div>
                            <div className="text-[10px] text-[#A1A1AA] uppercase tracking-[0.2em]">{t('compromiso.stats.families.label')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Compromiso
