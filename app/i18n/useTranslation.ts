import { useContext } from 'react'
import { I18nContext, type Language } from './i18n'

export const useTranslation = () => {
    const context = useContext(I18nContext)

    if (!context) {
        throw new Error('useTranslation must be used within an I18nProvider')
    }

    const { language, setLanguage, translations } = context

    // Helper function to get nested translation by key path
    const t = (key: string, params?: Record<string, string | number>): string => {
        const keys = key.split('.')
        let value: unknown = translations

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = (value as Record<string, unknown>)[k]
            } else {
                console.warn(`Translation key not found: ${key}`)
                return key
            }
        }

        if (typeof value !== 'string') {
            console.warn(`Translation value is not a string: ${key}`)
            return key
        }

        // Handle interpolation
        if (params) {
            return value.replace(/\{\{(\w+)\}\}/g, (_, paramKey) => {
                return params[paramKey]?.toString() ?? `{{${paramKey}}}`
            })
        }

        return value
    }

    // Helper to get an array of translations
    const tArray = <T>(key: string): T[] => {
        const keys = key.split('.')
        let value: unknown = translations

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = (value as Record<string, unknown>)[k]
            } else {
                console.warn(`Translation key not found: ${key}`)
                return []
            }
        }

        if (!Array.isArray(value)) {
            console.warn(`Translation value is not an array: ${key}`)
            return []
        }

        return value as T[]
    }

    const changeLanguage = (lang: Language) => {
        setLanguage(lang)
    }

    return {
        t,
        tArray,
        changeLanguage,
        currentLanguage: language
    }
}
