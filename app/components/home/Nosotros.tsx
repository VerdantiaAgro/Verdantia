const Nosotros = () => {
    return (
        <section id="nosotros" className="py-24 bg-[#0F1612] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Image Column */}
                    <div className="relative order-2 lg:order-1 animate-slideInLeft">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden relative z-10 shadow-2xl border border-white/5">
                            <img
                                src="/home-imgs/about-img.webp"
                                alt="Campo de verduras mexicanas"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1612]/40 to-transparent"></div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -right-4 md:-right-8 lg:-right-12 z-20 glass-dark p-8 md:p-10 rounded-xl border border-white/10 max-w-xs shadow-2xl animate-fadeInUp">
                            <span className="text-[#DBB75F] text-xs font-bold uppercase tracking-[0.3em] block mb-6 border-b border-[#DBB75F]/30 pb-2">Stats</span>
                            <div className="space-y-8">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">15+</div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-[0.1em] leading-relaxed">
                                        Años de experiencia en producción agrícola, comercialización mayorista y operaciones logísticas
                                    </p>
                                </div>
                                <div className="flex gap-8">
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-1">5+</div>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.1em]">Países alcanzados</p>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-[#DBB75F] mb-1">100%</div>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-[0.1em]">Trazabilidad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2 space-y-12 animate-slideInRight">
                        <div className="space-y-8">
                            <div className="inline-block border-l-2 border-[#DBB75F] pl-4">
                                <span className="text-[#DBB75F] text-sm font-bold uppercase tracking-[0.4em]">Nuestra Historia</span>
                            </div>

                            <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                                Sobre <br />
                                <span className="text-[#DBB75F]">Verdantia</span>
                            </h2>

                            <p className="text-[#A1A1AA] text-lg md:text-xl leading-relaxed max-w-2xl font-light italic">
                                "Somos una empresa mexicana especializada en la exportación de verduras frescas de la más alta calidad,
                                comprometidos con prácticas sustentables y el desarrollo de nuestras comunidades rurales."
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 pt-4">
                            <div className="space-y-4 group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-[#DBB75F] group-hover:w-12 transition-all duration-300"></div>
                                    <h3 className="text-white font-bold text-lg uppercase tracking-widest">Misión</h3>
                                </div>
                                <p className="text-[#A1A1AA] leading-relaxed text-sm">
                                    Conectar los mejores productos del campo mexicano con mercados internacionales,
                                    manteniendo los más altos estándares de calidad y trazabilidad.
                                </p>
                            </div>

                            <div className="space-y-4 group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-[#DBB75F] group-hover:w-12 transition-all duration-300"></div>
                                    <h3 className="text-white font-bold text-lg uppercase tracking-widest">Visión</h3>
                                </div>
                                <p className="text-[#A1A1AA] leading-relaxed text-sm">
                                    Ser la empresa líder en exportación de verduras mexicanas, reconocida por su
                                    compromiso con la sustentabilidad y la excelencia operacional.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Nosotros
