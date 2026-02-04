import { useState, type ChangeEvent, type FormEvent } from 'react'
import Button1 from '~/layout/Button1'
import { FaInstagram } from 'react-icons/fa'
import { useTranslation } from '~/i18n/useTranslation'

interface FormData {
    nombre: string;
    empresa: string;
    email: string;
    telefono: string;
    mensaje: string;
    productos: string[];
    website: string;
}

interface Message {
    type: 'success' | 'error' | '';
    text: string;
}

const Contacto = () => {
    const { t, tArray } = useTranslation()
    const productOptions = tArray<string>('contacto.products')

    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        mensaje: '',
        productos: [],
        website: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<Message>({ type: '', text: '' })
    const [isSuccess, setIsSuccess] = useState(false)

    // Validar campos en tiempo real
    const validateField = (name: string, value: string) => {
        switch (name) {
            case 'nombre':
                return value.length >= 2 && value.length <= 100
            case 'empresa':
                return value.length >= 2 && value.length <= 100
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            case 'telefono':
                return !value || value.length >= 8
            case 'mensaje':
                return value.length >= 10 && value.length <= 1000
            default:
                return true
        }
    }

    // Manejar cambios en inputs
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        // Sanitizar entrada básica (solo trim para campos que no son mensaje)
        let cleanValue = name === 'mensaje' ? value : value.trim()

        // Limitar longitud según el campo
        const maxLengths: Record<string, number> = {
            nombre: 100,
            empresa: 100,
            telefono: 20,
            mensaje: 1000
        }

        if (maxLengths[name] && cleanValue.length > maxLengths[name]) {
            cleanValue = cleanValue.substring(0, maxLengths[name])
        }

        setFormData((prev: FormData) => ({
            ...prev,
            [name]: cleanValue
        }))

        // Limpiar mensajes de error cuando el usuario empiece a escribir
        if (message.type === 'error') {
            setMessage({ type: '', text: '' })
        }
    }

    // Manejar checkboxes de productos
    const handleProductChange = (producto: string, checked: boolean) => {
        setFormData((prev: FormData) => ({
            ...prev,
            productos: checked
                ? [...prev.productos, producto]
                : prev.productos.filter((p: string) => p !== producto)
        }))
    }

    // Enviar formulario
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        // Validación del cliente antes de enviar
        const requiredFields: (keyof FormData)[] = ['nombre', 'empresa', 'email', 'mensaje']
        const missingFields = requiredFields.filter(field => {
            const value = formData[field]
            if (Array.isArray(value)) return value.length === 0
            return field === 'mensaje' ? !value || !value.trim() : !value?.trim()
        })

        if (missingFields.length > 0) {
            setMessage({
                type: 'error',
                text: `${t('contacto.validation.requiredFields')} ${missingFields.join(', ')}`
            })
            return
        }

        // Validar formato de email
        if (!validateField('email', formData.email)) {
            setMessage({
                type: 'error',
                text: t('contacto.validation.invalidEmail')
            })
            return
        }

        // Validar longitud del mensaje (trim solo para validación, no para el valor final)
        if (!validateField('mensaje', formData.mensaje.trim())) {
            setMessage({
                type: 'error',
                text: t('contacto.validation.messageLength')
            })
            return
        }

        setIsLoading(true)
        setMessage({ type: '', text: '' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                setMessage({
                    type: 'success',
                    text: t('contacto.validation.successMessage')
                })
                setIsSuccess(true)

                // Limpiar formulario después de 2 segundos
                setTimeout(() => {
                    setFormData({
                        nombre: '',
                        empresa: '',
                        email: '',
                        telefono: '',
                        mensaje: '',
                        productos: [],
                        website: ''
                    })
                    setIsSuccess(false)
                }, 2000)
            } else {
                setMessage({
                    type: 'error',
                    text: data.message || t('contacto.validation.errorMessage')
                })
            }
        } catch (error) {
            console.error('Error:', error)
            setMessage({
                type: 'error',
                text: t('contacto.validation.connectionError')
            })
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section id="contacto" className="py-24 bg-[#0F1612]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20 space-y-4">
                    <div className="inline-block border-l-2 border-[#DBB75F] pl-4">
                        <span className="text-[#DBB75F] text-sm font-bold uppercase tracking-[0.4em]">{t('contacto.sectionLabel')}</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
                        {t('contacto.titlePart1')} <br />
                        <span className="text-[#DBB75F]">{t('contacto.titlePart2')}</span>
                    </h2>
                    <p className="text-lg text-[#A1A1AA] max-w-2xl font-light leading-relaxed pt-4">
                        {t('contacto.description')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Contact Form */}
                    <div className="bg-[#1A251F] border border-white/5 rounded-3xl p-10 lg:p-12 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">{t('common.sendMessage')}</h3>

                        {/* Mensaje de estado */}
                        {message.text && (
                            <div className={`mb-8 p-6 rounded-2xl border ${message.type === 'success'
                                ? 'bg-green-500/10 border-green-500/20 text-green-400'
                                : 'bg-red-500/10 border-red-500/20 text-red-400'
                                }`}>
                                <div className="flex items-center gap-3 text-sm font-medium">
                                    {message.type === 'success' ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 11 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {message.text}
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Honeypot field - hidden from real users */}
                            <input
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                style={{ display: 'none' }}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="nombre" className="text-[10px] font-bold text-[#DBB75F] uppercase tracking-widest pl-1">
                                        {t('contacto.form.fullName')} *
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        required
                                        maxLength={100}
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-[#DBB75F] focus:border-[#DBB75F] outline-none transition-all duration-300 text-white placeholder-white/20 font-light"
                                        placeholder={t('contacto.form.fullNamePlaceholder')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="empresa" className="text-[10px] font-bold text-[#DBB75F] uppercase tracking-widest pl-1">
                                        {t('contacto.form.company')} *
                                    </label>
                                    <input
                                        type="text"
                                        id="empresa"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-[#DBB75F] focus:border-[#DBB75F] outline-none transition-all duration-300 text-white placeholder-white/20 font-light"
                                        placeholder={t('contacto.form.companyPlaceholder')}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] font-bold text-[#DBB75F] uppercase tracking-widest pl-1">
                                        {t('contacto.form.corporateEmail')} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-[#DBB75F] focus:border-[#DBB75F] outline-none transition-all duration-300 text-white placeholder-white/20 font-light"
                                        placeholder={t('contacto.form.emailPlaceholder')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="telefono" className="text-[10px] font-bold text-[#DBB75F] uppercase tracking-widest pl-1">
                                        {t('contacto.form.phone')}
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-[#DBB75F] focus:border-[#DBB75F] outline-none transition-all duration-300 text-white placeholder-white/20 font-light"
                                        placeholder={t('contacto.form.phonePlaceholder')}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-bold text-[#DBB75F] uppercase tracking-widest pl-1">
                                    {t('contacto.form.productsOfInterest')}
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                                    {productOptions.map((producto) => (
                                        <label key={producto} className="group flex items-center gap-3 cursor-pointer">
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.productos.includes(producto)}
                                                    onChange={(e) => handleProductChange(producto, e.target.checked)}
                                                    className="peer appearance-none w-5 h-5 border border-white/20 rounded-lg checked:bg-[#DBB75F] checked:border-[#DBB75F] transition-all duration-300"
                                                />
                                                <svg className="absolute w-3 h-3 text-[#0F1612] opacity-0 peer-checked:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-[#A1A1AA] group-hover:text-white transition-colors duration-300 font-light">{producto}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mensaje" className="text-[10px] font-bold text-[#DBB75F] uppercase tracking-widest pl-1">
                                    {t('contacto.form.message')} *
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    rows={4}
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    required
                                    maxLength={1000}
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-1 focus:ring-[#DBB75F] focus:border-[#DBB75F] outline-none transition-all duration-300 text-white placeholder-white/20 font-light resize-none"
                                    placeholder={t('contacto.form.messagePlaceholder')}
                                ></textarea>
                            </div>

                            <Button1
                                type="submit"
                                variant="solid"
                                showArrow={true}
                                disabled={isLoading || isSuccess}
                                className="w-full py-5 rounded-2xl"
                            >
                                {isSuccess ? t('common.sent') : isLoading ? t('common.sending') : t('common.send')}
                            </Button1>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-[#DBB75F] uppercase tracking-[0.3em]">{t('contacto.info.directChannels')}</h4>
                                <div className="space-y-6">
                                    <div className="group flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#DBB75F] group-hover:bg-[#DBB75F] group-hover:text-[#0F1612] transition-all duration-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-white font-bold tracking-tight">{t('contacto.info.corporateEmail')}</p>
                                            <ul className="text-sm text-[#A1A1AA] space-y-1 font-light">
                                                <li>francisco.a.verdantia@outlook.com</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="group flex items-start gap-6">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#DBB75F] group-hover:bg-[#DBB75F] group-hover:text-[#0F1612] transition-all duration-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-white font-bold tracking-tight">{t('contacto.info.headquarters')}</p>
                                            <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                                                Av. Florencia #680-A, Res. Campestre<br />
                                                Irapuato, Gto. México
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-xs font-bold text-[#DBB75F] uppercase tracking-[0.3em]">{t('contacto.info.community')}</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.instagram.com/verdantiaagro"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-[#DBB75F] hover:text-[#0F1612] transition-all duration-500 group"
                                    >
                                        <FaInstagram className="w-6 h-6 text-[#DBB75F] group-hover:text-[#0F1612] transition-colors" />
                                        <span className="font-bold text-sm tracking-tight text-white group-hover:text-[#0F1612]">@verdantiaagro</span>
                                    </a>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="p-8 bg-white/5 border border-dashed border-white/10 rounded-3xl space-y-4">
                                <h4 className="text-white font-bold tracking-tight">{t('contacto.info.businessHours')}</h4>
                                <div className="space-y-2 text-sm text-[#A1A1AA] font-light">
                                    <div className="flex justify-between"><span>{t('contacto.info.weekdays')}</span><span>09:00 – 18:00</span></div>
                                    <div className="flex justify-between"><span>{t('contacto.info.saturday')}</span><span>09:00 – 13:00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacto
