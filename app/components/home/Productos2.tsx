interface ProductoCongelado {
    id: string;
    nombre: string;
    nombreAlterno: string;
    formato: string;
    categoria: string;
    imagen: string;
    descripcion: string;
    beneficios: string[];
    usos: string[];
    notaNutricional: string;
}

const Productos2 = () => {
    const productos: ProductoCongelado[] = [
        {
            id: "pac-fresas",
            nombre: "Pac Fresas",
            nombreAlterno: "Fresas Congeladas Rebanadas",
            formato: "226 g · Tetra Pak",
            categoria: "Fruta congelada · Lista para usar",
            imagen: "/home-imgs/pac_fresas.webp",
            descripcion: "Fresas rebanadas congeladas, ideales para bebidas, postres y preparaciones rápidas.",
            beneficios: [
                "Fresas reales con cortes consistentes.",
                "Ideales para smoothies, desayunos y repostería.",
                "Formato individual que facilita el control de porciones.",
                "Reduce desperdicio comparado con fruta fresca."
            ],
            usos: [
                "Smoothies y licuados.",
                "Bowls con yogurt y granola.",
                "Toppings para postres."
            ],
            notaNutricional: "Aproximadamente 85 kcal por porción, naturally ricas en vitamina C."
        },
        {
            id: "pac-choco-banana",
            nombre: "Pac Choco Banana",
            nombreAlterno: "Plátano con Chocolate",
            formato: "226 g · Tetra Pak",
            categoria: "Postre congelado · Porción individual",
            imagen: "/home-imgs/pac_choco_banana.webp",
            descripcion: "Combinación de plátano con chocolate en un formato práctico y listo para consumir.",
            beneficios: [
                "Mezcla indulgente de plátano y chocolate.",
                "Porción perfecta para familias y niños.",
                "Se disfruta directo desde el congelador.",
                "Atractivo para compras por impulso."
            ],
            usos: [
                "Snack rápido.",
                "Base para licuados de desayuno.",
                "Postre para niños."
            ],
            notaNutricional: "Aproximadamente 138 kcal por porción."
        },
        {
            id: "pac-fresas-crema",
            nombre: "Pac Fresas con Crema",
            nombreAlterno: "Strawberries & Cream",
            formato: "226 g · Tetra Pak",
            categoria: "Postre congelado · Porción individual",
            imagen: "/home-imgs/fresas_con_crema.webp",
            descripcion: "Versión congelada del clásico postre de fresas con crema.",
            beneficios: [
                "Sabor clásico y reconocible.",
                "Porción controlada para indulgencia moderada.",
                "Incluye trozos reales de fresa.",
                "Ideal para líneas premium."
            ],
            usos: [
                "Postre rápido en casa.",
                "Opción pequeña para cafés y hoteles.",
                "Producto por impulso en congeladores."
            ],
            notaNutricional: "Aproximadamente 138 kcal por porción."
        },
        {
            id: "tub-fresas-chocolate",
            nombre: "Fresas con Chocolate",
            nombreAlterno: "Strawberries with Chocolate",
            formato: "380 g · Tina",
            categoria: "Postre congelado · Formato familiar",
            imagen: "/home-imgs/fresas_con_chocolate.webp",
            descripcion: "Tina familiar de fresas con chocolate, ideal para compartir.",
            beneficios: [
                "Pensado para consumo familiar.",
                "Puede servirse solo o como topping.",
                "Versátil para retail y food service.",
                "Atractivo en menús y buffets."
            ],
            usos: [
                "Postre familiar.",
                "Topping para waffles o pancakes.",
                "Estaciones de postres en hoteles."
            ],
            notaNutricional: "Aproximadamente 140 kcal por porción."
        },
        {
            id: "tub-fresas-crema",
            nombre: "Fresas con Crema",
            nombreAlterno: "Strawberries with Cream",
            formato: "380 g · Tina",
            categoria: "Postre congelado · Formato familiar",
            imagen: "/home-imgs/fresas_con_crema.webp",
            descripcion: "Postre cremoso de fresas con crema en presentación para compartir.",
            beneficios: [
                "Textura suave con trozos de fresa.",
                "Postre clásico y familiar.",
                "Listo para servir con cuchara.",
                "Fácil de posicionar en retail."
            ],
            usos: [
                "Postre en tazones.",
                "Acompañar con galletas o panqué.",
                "Reuniones informales en casa."
            ],
            notaNutricional: "Aproximadamente 138 kcal por porción."
        },
        {
            id: "pac-mango",
            nombre: "Mango Pac",
            nombreAlterno: "Cubos de Mango Congelado",
            formato: "226 g · Tetra Pak",
            categoria: "Fruta congelada · Lista para licuar",
            imagen: "/home-imgs/mango_pac.webp",
            descripcion: "Cubos de mango maduro congelado, prácticos para smoothies, bowls and postres.",
            beneficios: [
                "Sabor tropical atractivo para el consumidor europeo.",
                "Listo para usarse sin preparación previa.",
                "Reduce tiempos de cocina y desperdicio.",
                "Ideal para bebidas, bowls y frappes."
            ],
            usos: [
                "Smoothies y bowls de desayuno.",
                "Aguas frescas o bebidas frías.",
                "Frappes y postres tropicales."
            ],
            notaNutricional: "Aproximadamente 199 kcal por porción."
        }
    ]

    return (
        <section id="productos-congelados" className="py-24 bg-[#0F1612] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Intro Section */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-2 bg-[#DBB75F]/10 text-[#DBB75F] text-sm font-semibold tracking-wider uppercase rounded-full mb-6">
                        Nueva Línea
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E5E5] mb-6 leading-tight">
                        Frutas y <span className="text-[#DBB75F]">Postres Congelados</span>
                    </h2>
                    <p className="text-xl text-[#A1A1AA] font-medium mb-4">
                        Fruta real, procesos de calidad y fórmulas listas para disfrutarse.
                    </p>
                    <p className="text-lg text-[#A1A1AA]/80 leading-relaxed font-light">
                        Presentamos una selección de productos elaborados con fruta mexicana, diseñados para el mercado internacional.
                        Versatilidad y frescura en cada porción.
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
                                    <h4 className="text-[10px] font-bold text-[#DBB75F] uppercase tracking-[0.2em] mb-4">Beneficios</h4>
                                    <ul className="space-y-3">
                                        {producto.beneficios.map((beneficio, i) => (
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
                            Para Retail, Food Service y Proyectos de <span className="text-[#DBB75F]">Marca Propia</span>
                        </h3>
                        <p className="text-[#A1A1AA] font-light leading-relaxed">
                            Cada producto Verdantia está desarrollado bajo estándares de exportación y procesos pensados para programas de abasto, menús de hotelería y oportunidades de marca propia..
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Productos2
