import type { ReactNode } from 'react';

interface CapacidadItem {
    titulo: string;
    cifra: string;
    unidad: string;
    descripcion: string;
    icono: ReactNode;
}

const Capacidad = () => {
    const capacidades: CapacidadItem[] = [
        {
            titulo: "Embarques Regulares",
            cifra: "18",
            unidad: "toneladas por carga",
            descripcion: "Capacidad de carga optimizada para mantener frecuencias constantes y cumplir con cronogramas de entrega internacionales",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        },
        {
            titulo: "Producción Trazada",
            cifra: "100%",
            unidad: "origen hasta destino",
            descripcion: "Sistema integral de trazabilidad que documenta cada etapa del proceso productivo y logístico con certificación digital",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            )
        },
        {
            titulo: "Escalabilidad",
            cifra: "Demanda",
            unidad: "institucional y retail",
            descripcion: "Infraestructura flexible que se adapta a volúmenes variables, desde órdenes pequeñas hasta contratos institucionales de gran escala",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ]

    return (
        <section id="capacidad" className="py-24 bg-[#0F1612]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20 space-y-4">
                    <div className="inline-block border-l-2 border-[#DBB75F] pl-4">
                        <span className="text-[#DBB75F] text-sm font-bold uppercase tracking-[0.4em]">Logística</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                        Capacidad <br />
                        <span className="text-[#DBB75F]">Operativa</span>
                    </h2>
                    <p className="text-lg text-[#A1A1AA] max-w-2xl font-light leading-relaxed pt-4">
                        Infraestructura logística robusta y procesos optimizados que garantizan
                        entregas consistentes y escalabilidad para satisfacer la demanda global.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {capacidades.map((capacidad, index) => (
                        <div
                            key={index}
                            className="group bg-[#1A251F] border border-white/5 rounded-3xl p-10 hover:border-[#DBB75F]/30 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 text-center"
                        >
                            <div className="w-20 h-20 bg-[#DBB75F] rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#0F1612] shadow-xl shadow-[#DBB75F]/10 group-hover:scale-110 transition-transform duration-500">
                                {capacidad.icono}
                            </div>

                            <div className="mb-6">
                                <div className="text-5xl font-bold text-white mb-2 tracking-tighter">
                                    {capacidad.cifra}
                                </div>
                                <div className="text-[10px] text-[#DBB75F] font-bold uppercase tracking-[0.2em]">
                                    {capacidad.unidad}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                                {capacidad.titulo}
                            </h3>

                            <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                                {capacidad.descripcion}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Certificaciones */}
                <div className="bg-white/5 border border-white/5 rounded-3xl p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="w-24 h-24 bg-[#DBB75F] rounded-3xl flex items-center justify-center text-[#0F1612] flex-shrink-0 shadow-2xl">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                Infraestructura <span className="text-[#DBB75F]">Certificada Globalmente</span>
                            </h3>
                            <p className="text-[#A1A1AA] leading-relaxed font-light text-lg">
                                Contamos con una red de campos y empacadoras certificadas bajo normas internacionales
                                como <span className="text-white font-medium">GlobalG.A.P.</span> y <span className="text-white font-medium">HACCP</span>,
                                garantizando los más altos estándares de calidad y seguridad alimentaria.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Capacidad
