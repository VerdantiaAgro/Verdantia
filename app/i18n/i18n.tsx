import { createContext, useState, useEffect, type ReactNode } from 'react'
import es from './translations/es.json'
import en from './translations/en.json'

export type Language = 'es' | 'en'

type Translations = typeof es

interface I18nContextType {
    language: Language
    setLanguage: (lang: Language) => void
    translations: Translations
}

const translations: Record<Language, Translations> = { es, en }

export const I18nContext = createContext<I18nContextType | null>(null)

interface I18nProviderProps {
    children: ReactNode
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
    const [language, setLanguageState] = useState<Language>('es')

    useEffect(() => {
        // Check localStorage first
        const savedLang = localStorage.getItem('language') as Language | null
        if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
            setLanguageState(savedLang)
            return
        }

        // Check URL query param
        const urlParams = new URLSearchParams(window.location.search)
        const urlLang = urlParams.get('lang') as Language | null
        if (urlLang && (urlLang === 'es' || urlLang === 'en')) {
            setLanguageState(urlLang)
            localStorage.setItem('language', urlLang)
            return
        }

        // Check browser language
        const browserLang = navigator.language.split('-')[0]
        if (browserLang === 'en') {
            setLanguageState('en')
            localStorage.setItem('language', 'en')
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
    }

    return (
        <I18nContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
            {children}
        </I18nContext.Provider>
    )
}
