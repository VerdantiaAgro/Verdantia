import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import type { ReactNode } from 'react'

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const LegalModal = ({ isOpen, onClose, title, children }: LegalModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#0F1612]/90 backdrop-blur-sm z-[100] cursor-pointer"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 z-[101] bg-[#1a231e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0F1612]/50">
                            <h2 className="text-xl md:text-2xl font-bold text-[#DBB75F] tracking-tight">
                                {title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                                aria-label="Cerrar"
                            >
                                <IoClose className="w-6 h-6 text-[#A1A1AA] group-hover:text-white" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                            <div className="max-w-4xl mx-auto text-[#A1A1AA]">
                                {children}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/5 bg-[#0F1612]/50 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-[#DBB75F] hover:bg-[#c5a555] text-[#0F1612] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                            >
                                Entendido
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default LegalModal
