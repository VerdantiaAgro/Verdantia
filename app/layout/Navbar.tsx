import { useState, useRef, useEffect } from 'react'
import { useLenis } from 'lenis/react'
import Button1 from './Button1'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '~/i18n/useTranslation'

interface NavLink {
    href: string
    label: string
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const sidebarRef = useRef<HTMLDivElement>(null)
    const lenis = useLenis()
    const { t, tArray } = useTranslation()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
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

    const navLinks = tArray<NavLink>('navbar.links')

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1612]/95 backdrop-blur-sm border-b border-white/5">
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

                        {/* CTA Button and Language Switcher - Desktop */}
                        <div className="hidden md:flex items-center gap-4">
                            <LanguageSwitcher />
                            <Button1
                                href="#contacto"
                                size="sm"
                                showArrow={false}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#contacto")}
                            >
                                {t('common.contactUs')}
                            </Button1>
                        </div>

                        {/* Language Switcher + Menu button - Mobile */}
                        <div className="md:hidden flex items-center gap-3">
                            <LanguageSwitcher />
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:text-[#DBB75F] transition-colors duration-300 p-2"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
                onClick={closeMenu}
            />

            {/* Side Drawer */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 right-0 h-full w-72 bg-[#0F1612] border-l border-white/10 z-[70] transform transition-transform duration-300 ease-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                    <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Menu</span>
                    <button
                        onClick={closeMenu}
                        className="text-white/70 hover:text-white transition-colors duration-200 p-1"
                        aria-label="Close menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Drawer Content */}
                <div className="flex flex-col h-[calc(100%-73px)]">
                    {/* Navigation Links */}
                    <div className="flex-1 py-4 overflow-y-auto">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="flex items-center text-white hover:text-[#DBB75F] hover:bg-white/5 transition-all duration-200 px-6 py-4 text-base font-medium border-b border-white/5"
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                                    opacity: isMenuOpen ? 1 : 0,
                                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="p-5 border-t border-white/10">
                        <Button1
                            href="#contacto"
                            size="sm"
                            showArrow={false}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#contacto")}
                            className="w-full justify-center"
                        >
                            {t('common.contactUs')}
                        </Button1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
