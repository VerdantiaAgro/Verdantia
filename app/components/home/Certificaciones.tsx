import type { ReactNode } from 'react';

interface Certificacion {
    nombre: string;
    descripcion: string;
    categoria: string;
    icono: ReactNode;
}

const Certificaciones = () => {
    const certificaciones: Certificacion[] = [
        {
            nombre: "GlobalG.A.P.",
            descripcion: "Certificación internacional que garantiza buenas prácticas agrícolas y trazabilidad completa",
            categoria: "Agricultura",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            nombre: "HACCP",
            descripcion: "Sistema de análisis de peligros y puntos críticos de control para seguridad alimentaria",
            categoria: "Seguridad Alimentaria",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            nombre: "BRC Food Safety",
            descripcion: "Estándar británico para fabricantes de productos alimentarios destinados a la venta minorista",
            categoria: "Calidad Internacional",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            nombre: "SQF (Safe Quality Food)",
            descripcion: "Certificación reconocida internacionalmente para la gestión de calidad y seguridad alimentaria",
            categoria: "Calidad y Seguridad",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        },
        {
            nombre: "USDA Organic",
            descripcion: "Certificación orgánica del Departamento de Agricultura de Estados Unidos",
            categoria: "Agricultura Orgánica",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
        },
        {
            nombre: "Rainforest Alliance",
            descripcion: "Certificación de sostenibilidad que protege la biodiversidad y comunidades rurales",
            categoria: "Sustentabilidad",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            nombre: "SENASICA",
            descripcion: "Certificación del Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria de México",
            categoria: "Regulación Nacional",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            nombre: "ISO 22000",
            descripcion: "Estándar internacional para sistemas de gestión de seguridad alimentaria",
            categoria: "Gestión Internacional",
            icono: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ]

    const getCategoryColor = (categoria: string) => {
        switch (categoria) {
            case 'Agricultura':
                return 'bg-green-100 text-green-800'
            case 'Seguridad Alimentaria':
                return 'bg-red-100 text-red-800'
            case 'Calidad Internacional':
                return 'bg-blue-100 text-blue-800'
            case 'Calidad y Seguridad':
                return 'bg-purple-100 text-purple-800'
            case 'Agricultura Orgánica':
                return 'bg-emerald-100 text-emerald-800'
            case 'Sustentabilidad':
                return 'bg-teal-100 text-teal-800'
            case 'Regulación Nacional':
                return 'bg-orange-100 text-orange-800'
            case 'Gestión Internacional':
                return 'bg-indigo-100 text-indigo-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <section id="certificaciones" className="py-20 bg-[#121212]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#E5E5E5] mb-6">
                        Nuestras <span className="text-[#DBB75F]">Certificaciones</span>
                    </h2>
                    <p className="text-lg text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
                        Respaldamos nuestro compromiso con la calidad, seguridad alimentaria y sustentabilidad
                        a través de certificaciones internacionales reconocidas mundialmente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {certificaciones.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="w-16 h-16 bg-[#DBB75F] rounded-full flex items-center justify-center mb-4 text-[#121212]">
                                    {cert.icono}
                                </div>

                                <h3 className="text-lg font-bold text-[#E5E5E5] mb-2">
                                    {cert.nombre}
                                </h3>

                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(cert.categoria)}`}>
                                    {cert.categoria}
                                </span>

                                <p className="text-[#A1A1AA] text-sm leading-relaxed flex-grow">
                                    {cert.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Resumen de beneficios */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-[#E5E5E5] text-center mb-8">
                        Beneficios de Nuestras <span className="text-[#DBB75F]">Certificaciones</span>
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#DBB75F] rounded-full flex items-center justify-center mx-auto mb-4 text-[#121212]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-[#E5E5E5] mb-2">Acceso Global</h4>
                            <p className="text-[#A1A1AA] text-sm">Nuestras certificaciones nos permiten acceder a los mercados más exigentes del mundo</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#DBB75F] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F1612]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-[#E5E5E5] mb-2">Confianza Total</h4>
                            <p className="text-[#A1A1AA] text-sm">Garantizamos la máxima calidad y seguridad en cada producto que exportamos</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#DBB75F] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F1612]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-[#E5E5E5] mb-2">Sustentabilidad</h4>
                            <p className="text-[#A1A1AA] text-sm">Comprometidos con prácticas responsables que protegen el medio ambiente</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificaciones
