import { useState, useRef, useEffect } from 'react'
import { useLenis } from 'lenis/react'
import Button1 from './Button1'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLElement>(null)
    const lenis = useLenis()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // Cerrar menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu()
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('touchstart', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [isMenuOpen])

    const scrollToTop = () => {
        lenis?.scrollTo(0)
    }

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault()
            lenis?.scrollTo(href)
            if (isMenuOpen) closeMenu()
        }
    }

    const navLinks = [
        { href: "#nosotros", label: "Nosotros" },
        { href: "#productos", label: "Productos" },
        { href: "#alcances", label: "Alcances" },
        { href: "#proceso", label: "Proceso" },
        { href: "#capacidad", label: "Capacidad" },
        { href: "#compromiso", label: "Compromiso" },
    ]

    return (
        <nav ref={menuRef} className="fixed top-0 left-0 right-0 z-50 bg-[#0F1612]/95 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={scrollToTop}
                            className="cursor-pointer"
                        >
                            <img
                                src="/home-imgs/verdantia-logo.png"
                                alt="Verdantia"
                                className="h-24 w-auto"
                            />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-white hover:text-[#DBB75F] transition-colors duration-300 px-3 py-2 text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button1
                            href="#contacto"
                            size="sm"
                            showArrow={false}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#contacto")}
                        >
                            Contáctanos
                        </Button1>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-[#DBB75F] transition-colors duration-300 p-2"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className={`h-6 w-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-screen opacity-100 visible rounded-lg'
                    : 'max-h-0 opacity-0 invisible overflow-hidden'
                    }`}>
                    <div className="px-2 pt-2 pb-6 space-y-1 bg-[#0F1612] border border-white/10 rounded-lg shadow-lg mt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block text-white hover:text-[#DBB75F] hover:bg-white/10 transition-all duration-300 px-3 py-2 text-base font-medium rounded-lg"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={(e) => handleNavClick(e, "#contacto")}
                            className="block text-white hover:text-[#DBB75F] hover:bg-white/10 transition-all duration-300 px-3 py-2 text-base font-medium rounded-lg"
                        >
                            Contacto
                        </a>
                        <div className="pt-4 px-3">
                            <Button1
                                href="#contacto"
                                size="sm"
                                showArrow={false}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#contacto")}
                            >
                                Contáctanos
                            </Button1>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
