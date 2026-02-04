import type { ReactNode } from 'react'
import { useTranslation } from '~/i18n/useTranslation'

interface PasoTranslation {
    numero: string
    titulo: string
    descripcion: string
}

const iconos: ReactNode[] = [
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
    ),
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
    ),
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9h6" />
        </svg>
    ),
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    )
]

const Proceso = () => {
    const { t, tArray } = useTranslation()
    const pasosTranslations = tArray<PasoTranslation>('proceso.pasos')

    const pasos = pasosTranslations.map((paso, index) => ({
        ...paso,
        icono: iconos[index]
    }))

    return (
        <section id="proceso" className="py-24 bg-[#0F1612]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20 space-y-4">
                    <div className="inline-block border-l-2 border-[#DBB75F] pl-4">
                        <span className="text-[#DBB75F] text-sm font-bold uppercase tracking-[0.4em]">{t('proceso.sectionLabel')}</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                        {t('proceso.titlePart1')} <br />
                        <span className="text-[#DBB75F]">{t('proceso.titlePart2')}</span>
                    </h2>
                    <p className="text-lg text-[#A1A1AA] max-w-2xl font-light leading-relaxed pt-4">
                        {t('proceso.description')}
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line for desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#DBB75F] via-[#DBB75F]/50 to-transparent transform -translate-x-1/2"></div>

                    {/* Timeline line for mobile */}
                    <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#DBB75F] via-[#DBB75F]/50 to-transparent"></div>

                    <div className="space-y-12 lg:space-y-0">
                        {pasos.map((paso, index) => (
                            <div
                                key={index}
                                className={`relative flex items-start lg:items-center py-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'} ml-12 lg:ml-0`}>
                                    <div className="group bg-[#1A251F] border border-white/5 rounded-3xl p-8 lg:p-10 hover:border-[#DBB75F]/30 transition-all duration-700 hover:shadow-2xl">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                                            <div className="w-16 h-16 bg-[#DBB75F] rounded-2xl flex items-center justify-center text-[#0F1612] shadow-xl shadow-[#DBB75F]/10 group-hover:scale-110 transition-transform duration-500">
                                                {paso.icono}
                                            </div>
                                            <div>
                                                <span className="text-4xl font-bold text-[#DBB75F]/20 block leading-none mb-1">{paso.numero}</span>
                                                <h3 className="text-2xl font-bold text-white tracking-tight">{paso.titulo}</h3>
                                            </div>
                                        </div>
                                        <p className="text-[#A1A1AA] leading-relaxed font-light">
                                            {paso.descripcion}
                                        </p>
                                    </div>
                                </div>

                                {/* Center dot for desktop */}
                                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#DBB75F] rounded-full shadow-[0_0_15px_rgba(219,183,95,0.5)] z-10"></div>

                                {/* Timeline dot for mobile */}
                                <div className="lg:hidden absolute left-[22px] transform -translate-x-1/2 w-3 h-3 bg-[#DBB75F] rounded-full shadow-[0_0_15px_rgba(219,183,95,0.5)] z-10 top-16"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proceso
