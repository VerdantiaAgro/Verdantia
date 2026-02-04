import { useTranslation } from '~/i18n/useTranslation'

interface MercadoTranslation {
    pais: string
    detalles: string
}

const mercadosData = [
    { bandera: "🇲🇽", estado: "activo" },
    { bandera: "🇺🇸", estado: "activo" },
    { bandera: "🇩🇪", estado: "prospección" },
    { bandera: "🇳🇱", estado: "prospección" },
    { bandera: "🇮🇪", estado: "prospección" }
]

const Alcances = () => {
    const { t, tArray } = useTranslation()
    const mercadosTranslations = tArray<MercadoTranslation>('alcances.mercados')

    const mercados = mercadosData.map((mercado, index) => ({
        ...mercado,
        pais: mercadosTranslations[index]?.pais || '',
        detalles: mercadosTranslations[index]?.detalles || ''
    }))

    const getEstadoBadge = (estado: string) => {
        switch (estado) {
            case 'activo':
                return { text: t('alcances.estados.activo'), color: 'bg-[#DBB75F] text-[#0F1612]' }
            case 'operativo':
                return { text: t('alcances.estados.operativo'), color: 'bg-[#1E1E1E] text-white' }
            case 'prospección':
                return { text: t('alcances.estados.prospeccion'), color: 'bg-[#2D2D2D] text-white' }
            default:
                return { text: estado, color: 'bg-gray-100 text-gray-800' }
        }
    }

    return (
        <section id="alcances" className="py-24 bg-[#0F1612]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20 space-y-4">
                    <div className="inline-block border-l-2 border-[#DBB75F] pl-4">
                        <span className="text-[#DBB75F] text-sm font-bold uppercase tracking-[0.4em]">{t('alcances.sectionLabel')}</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                        {t('alcances.titlePart1')} <br />
                        <span className="text-[#DBB75F]">{t('alcances.titlePart2')}</span>
                    </h2>
                    <p className="text-lg text-[#A1A1AA] max-w-2xl font-light leading-relaxed pt-4">
                        {t('alcances.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {mercados.map((mercado, index) => {
                        const badge = getEstadoBadge(mercado.estado)
                        return (
                            <div
                                key={index}
                                className="group bg-[#1A251F] border border-white/5 rounded-3xl p-8 hover:border-[#DBB75F]/30 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
                            >
                                <div className="text-center h-full flex flex-col justify-between">
                                    <div>
                                        <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{mercado.bandera}</div>
                                        <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{mercado.pais}</h3>
                                    </div>
                                    <div>
                                        <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badge.color} mb-4`}>
                                            {badge.text}
                                        </span>
                                        <p className="text-[#A1A1AA] text-xs leading-relaxed font-light">
                                            {mercado.detalles}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-16 bg-white/5 border border-white/5 rounded-3xl p-10 lg:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                        <div className="space-y-4">
                            <div className="w-12 h-px bg-[#DBB75F]"></div>
                            <h4 className="text-lg font-bold text-white tracking-tight">{t('alcances.features.activeMarkets.title')}</h4>
                            <p className="text-[#A1A1AA] text-sm font-light leading-relaxed">{t('alcances.features.activeMarkets.description')}</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-px bg-[#DBB75F]"></div>
                            <h4 className="text-lg font-bold text-white tracking-tight">{t('alcances.features.europeanProspection.title')}</h4>
                            <p className="text-[#A1A1AA] text-sm font-light leading-relaxed">{t('alcances.features.europeanProspection.description')}</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-px bg-[#DBB75F]"></div>
                            <h4 className="text-lg font-bold text-white tracking-tight">{t('alcances.features.totalTraceability.title')}</h4>
                            <p className="text-[#A1A1AA] text-sm font-light leading-relaxed">{t('alcances.features.totalTraceability.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Alcances
