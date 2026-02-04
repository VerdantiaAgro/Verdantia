import { useTranslation } from '~/i18n/useTranslation'

interface ProductoCongeladoTranslation {
    nombre: string
    nombreAlterno: string
    formato: string
    categoria: string
    descripcion: string
    beneficios: string[]
    notaNutricional: string
}

const productosImagenes = [
    { id: "pac-fresas", imagen: "/home-imgs/pac_fresas.webp" },
    { id: "pac-choco-banana", imagen: "/home-imgs/pac_choco_banana.webp" },
    { id: "pac-fresas-crema", imagen: "/home-imgs/fresas_con_crema.webp" },
    { id: "tub-fresas-chocolate", imagen: "/home-imgs/fresas_con_chocolate.webp" },
    { id: "tub-fresas-crema", imagen: "/home-imgs/fresas_con_crema.webp" },
    { id: "pac-mango", imagen: "/home-imgs/mango_pac.webp" }
]

const Productos2 = () => {
    const { t, tArray } = useTranslation()
    const productosTranslations = tArray<ProductoCongeladoTranslation>('productos2.items')

    const productos = productosImagenes.map((producto, index) => ({
        ...producto,
        ...productosTranslations[index]
    }))

    return (
        <section id="productos-congelados" className="py-24 bg-[#0F1612] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Intro Section */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-2 bg-[#DBB75F]/10 text-[#DBB75F] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
                        {t('productos2.sectionLabel')}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E5E5] mb-6 leading-tight">
                        {t('productos2.titlePart1')} <span className="text-[#DBB75F]">{t('productos2.titlePart2')}</span>
                    </h2>
                    <p className="text-xl text-[#A1A1AA] font-medium mb-4">
                        {t('productos2.subtitle')}
                    </p>
                    <p className="text-lg text-[#A1A1AA]/80 leading-relaxed font-light">
                        {t('productos2.description')}
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productos.map((producto, index) => (
                        <article
                            key={producto.id}
                            className="group bg-[#1A251F] border border-white/5 rounded-3xl overflow-hidden hover:border-[#DBB75F]/30 hover:shadow-2xl hover:shadow-[#DBB75F]/5 hover:scale-[1.02] transition-all duration-700"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Product Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="w-full h-full object-cover transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1612] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-[#DBB75F] transition-colors duration-300">
                                                {producto.nombre}
                                            </h3>
                                            <p className="text-xs text-[#A1A1AA] uppercase tracking-widest mt-1">
                                                {producto.nombreAlterno}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Format & Category Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="inline-block px-3 py-1 bg-white/5 text-[#E5E5E5] text-[10px] font-bold uppercase tracking-wider rounded-full">
                                            {producto.formato}
                                        </span>
                                        <span className="inline-block px-3 py-1 bg-[#DBB75F]/10 text-[#DBB75F] text-[10px] font-bold uppercase tracking-wider rounded-full">
                                            {producto.categoria}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                        {producto.descripcion}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/5 mb-6"></div>

                                {/* Benefits */}
                                <div className="mb-6">
                                    <h4 className="text-[10px] font-bold text-[#DBB75F] uppercase tracking-[0.2em] mb-4">{t('productos2.benefitsLabel')}</h4>
                                    <ul className="space-y-3">
                                        {producto.beneficios?.map((beneficio, i) => (
                                            <li key={i} className="text-xs text-[#A1A1AA] flex items-start">
                                                <span className="w-1 h-1 bg-[#DBB75F] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                {beneficio}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Nutritional Note */}
                                <div className="bg-white/5 rounded-2xl p-4 mt-6">
                                    <p className="text-[10px] text-[#A1A1AA] italic leading-relaxed">
                                        {producto.notaNutricional}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Final Note Section */}
                <div className="mt-20 text-center">
                    <div className="inline-block glass-dark border border-white/5 rounded-3xl px-10 py-12 max-w-3xl">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {t('productos2.finalNote.titlePart1')} <span className="text-[#DBB75F]">{t('productos2.finalNote.titlePart2')}</span>
                        </h3>
                        <p className="text-[#A1A1AA] font-light leading-relaxed">
                            {t('productos2.finalNote.description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Productos2
