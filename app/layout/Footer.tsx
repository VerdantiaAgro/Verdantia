import { useState } from 'react'
import { useLenis } from 'lenis/react'
import { FaInstagram } from 'react-icons/fa'
import LegalModal from '~/layout/LegalModal'
import PrivacyPolicy from '~/components/legal/PrivacyPolicy'
import TermsAndConditions from '~/components/legal/TermsAndConditions'

const Footer = () => {
    const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null)
    const lenis = useLenis()

    const handleScroll = (href: string) => {
        lenis?.scrollTo(href)
    }

    return (
        <footer className="bg-[#0F1612] text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Company Info */}
                    <div className="col-span-1 lg:col-span-2 space-y-8">
                        <button
                            onClick={() => handleScroll('#')}
                            className="cursor-pointer transition-opacity hover:opacity-80 focus:outline-none"
                        >
                            <img
                                src="/home-imgs/verdantia-logo.png"
                                alt="Verdantia"
                                className="h-32 w-auto opacity-90"
                            />
                        </button>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-sm font-light">
                            Exportamos las mejores verduras mexicanas al mundo, con compromiso sustentable
                            y trazabilidad completa desde el campo hasta tu mesa.
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="https://www.instagram.com/verdantiaagro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="absolute -inset-2 bg-[#DBB75F]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <FaInstagram className="relative w-5 h-5 text-[#A1A1AA] group-hover:text-[#DBB75F] transition-colors duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-[#DBB75F] uppercase tracking-[0.3em]">Enlaces</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Nosotros", href: "#nosotros" },
                                { name: "Productos", href: "#productos" },
                                { name: "Proceso", href: "#proceso" },
                                { name: "Compromiso", href: "#compromiso" },
                                { name: "Contacto", href: "#contacto" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => handleScroll(link.href)}
                                        className="text-[#A1A1AA] text-sm hover:text-[#DBB75F] transition-colors duration-300 font-light cursor-pointer"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold text-[#DBB75F] uppercase tracking-[0.3em]">Contacto</h4>
                        <div className="space-y-6 text-[#A1A1AA] text-sm font-light">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 bg-[#DBB75F] rounded-full"></div>
                                    <span className="text-white text-xs font-medium">Email</span>
                                </div>
                                <div className="pl-4 space-y-1">
                                    <div>francisco.a.verdantia@outlook.com</div>
                                    <div>marcelo.r.verdantia@outlook.com</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 bg-[#DBB75F] rounded-full"></div>
                                    <span className="text-white text-xs font-medium">Ubicación</span>
                                </div>
                                <div className="pl-4">
                                    Av. Florencia #680-A, Res. Campestre<br />
                                    Irapuato, Gto. México
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 mt-20 pt-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[#A1A1AA]/50 text-[10px] uppercase tracking-widest font-medium">
                            © 2024 Verdantia. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-medium">
                            <button
                                onClick={() => setActiveModal('privacy')}
                                className="text-[#A1A1AA]/50 hover:text-[#DBB75F] transition-colors duration-300 cursor-pointer"
                            >
                                Privacidad
                            </button>
                            <button
                                onClick={() => setActiveModal('terms')}
                                className="text-[#A1A1AA]/50 hover:text-[#DBB75F] transition-colors duration-300 cursor-pointer"
                            >
                                Términos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal Modals */}
            <LegalModal
                isOpen={activeModal === 'privacy'}
                onClose={() => setActiveModal(null)}
                title="Aviso de Privacidad"
            >
                <PrivacyPolicy />
            </LegalModal>

            <LegalModal
                isOpen={activeModal === 'terms'}
                onClose={() => setActiveModal(null)}
                title="Términos y Condiciones"
            >
                <TermsAndConditions />
            </LegalModal>
        </footer>
    )
}

export default Footer
