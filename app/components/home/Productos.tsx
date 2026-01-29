interface Producto {
    nombre: string;
    imagen: string;
    descripcion: string;
    gridClass: string;
}

const Productos = () => {
    const productos: Producto[] = [
        {
            nombre: "Limón persa",
            imagen: "/home-imgs/limon_persa.webp",
            descripcion: "De piel fina y alto rendimiento de jugo, preferido mundialmente.",
            gridClass: "lg:col-span-2 lg:row-span-2"
        },
        {
            nombre: "Mango Ataulfo",
            imagen: "/home-imgs/mango_ataulfo.webp",
            descripcion: "Mango de textura cremosa y sabor dulce, sin fibra.",
            gridClass: "lg:col-span-1 lg:row-span-1"
        },
        {
            nombre: "Pimiento morrón",
            imagen: "/home-imgs/pimiento_morron.webp",
            descripcion: "Pimientos morrones premium en colores vibrantes, dulces y crujientes, ideales para exportación.",
            gridClass: "lg:col-span-1 lg:row-span-1"
        },
        {
            nombre: "Jitomate saladette",
            imagen: "/home-imgs/jitomate_saladette.webp",
            descripcion: "Ideal para ensaladas y preparaciones gourmet, con excelente vida de anaquel.",
            gridClass: "lg:col-span-2 lg:row-span-1"
        },
        {
            nombre: "Cebolla blanca",
            imagen: "/home-imgs/cebolla_blanca.webp",
            descripcion: "Sabor suave y textura firme, cultivada sustentablemente.",
            gridClass: "lg:col-span-1 lg:row-span-1"
        },
        {
            nombre: "Chile jalapeño y serrano",
            imagen: "/home-imgs/chile_jalapeño.webp",
            descripcion: "El picor perfecto para la cocina internacional.",
            gridClass: "lg:col-span-1 lg:row-span-1"
        },
        {
            nombre: "Pepino",
            imagen: "/home-imgs/pepino.webp",
            descripcion: "Pepinos de forma uniforme y excelente calidad para exportación.",
            gridClass: "lg:col-span-2 lg:row-span-1"
        }
    ]

    return (
        <section id="productos" className="py-24 bg-[#0F1612]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20 space-y-4">
                    <div className="inline-block border-l-2 border-[#DBB75F] pl-4">
                        <span className="text-[#DBB75F] text-sm font-bold uppercase tracking-[0.4em]">Nuestros Productos</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                        Productos de <br />
                        <span className="text-[#DBB75F]">Exportación</span>
                    </h2>
                    <p className="text-lg text-[#A1A1AA] max-w-2xl font-light leading-relaxed pt-4">
                        Seleccionamos lo mejor del campo mexicano, cumpliendo con los estándares internacionales
                        más rigurosos para llevar frescura y sabor a todo el mundo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[290px]">
                    {productos.map((producto, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-3xl bg-[#1A251F] border border-white/5 transition-all duration-700 hover:border-[#DBB75F]/30 hover:shadow-2xl hover:shadow-[#DBB75F]/5 hover:scale-[1.02] ${producto.gridClass}`}
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1612] via-[#0F1612]/40 to-transparent opacity-80 transition-opacity duration-700"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                        {producto.nombre}
                                    </h3>
                                    <p className="text-[#A1A1AA] text-sm leading-relaxed transition-all duration-700 max-w-xs line-clamp-2">
                                        {producto.descripcion}
                                    </p>
                                </div>

                                {/* Visual Indicator */}
                                <div className="mt-6 flex items-center gap-4 transition-opacity duration-700">
                                    <div className="h-[1px] w-12 bg-[#DBB75F]"></div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#DBB75F]">Premium Quality</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action or Detail */}
                <div className="mt-20 flex flex-col items-center text-center">
                    <div className="w-px h-20 bg-gradient-to-b from-[#DBB75F] to-transparent mb-8"></div>
                    <p className="text-[#A1A1AA] text-sm uppercase tracking-[0.3em]">Certificaciones Globales & Trazabilidad Total</p>
                </div>
            </div>
        </section>
    )
}

export default Productos
