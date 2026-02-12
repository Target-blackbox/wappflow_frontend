import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Skeleton from './Skeleton'

const platformData = [
    {
        name: 'WhatsApp',
        textColor: 'text-[#037312]',
        waveColor: 'bg-[#DAF7D9]/70',
        main: { bg: 'bg-[#087E07]', icon: 'whatsapp', size: 'w-24 h-24', rounded: 'rounded-3xl' },
        left: { bg: 'bg-[#004CFD]', icon: 'telegram', size: 'w-16 h-16', rounded: 'rounded-full' },
        right: { bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', icon: 'instagram', size: 'w-16 h-16', rounded: 'rounded-2xl' },
    },
    {
        name: 'Instagram',
        textColor: 'text-[#E1306C]',
        waveColor: 'bg-[#FFD8E9]/70',
        main: { bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', icon: 'instagram', size: 'w-24 h-24', rounded: 'rounded-3xl' },
        left: { bg: 'bg-[#087E07]', icon: 'whatsapp', size: 'w-16 h-16', rounded: 'rounded-2xl' },
        right: { bg: 'bg-[#004CFD]', icon: 'telegram', size: 'w-16 h-16', rounded: 'rounded-full' },
    },
    {
        name: 'Telegram',
        textColor: 'text-[#004CFD]',
        waveColor: 'bg-[#C5EFFF]/70',
        main: { bg: 'bg-[#004CFD]', icon: 'telegram', size: 'w-24 h-24', rounded: 'rounded-full' },
        left: { bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', icon: 'instagram', size: 'w-16 h-16', rounded: 'rounded-2xl' },
        right: { bg: 'bg-[#087E07]', icon: 'whatsapp', size: 'w-16 h-16', rounded: 'rounded-2xl' },
    },
]

const IconSvg = ({ type, className = '' }) => {
    switch (type) {
        case 'whatsapp':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
            )
        case 'instagram':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            )
        case 'telegram':
            return (
                <svg className={className} viewBox="0 0 24 24" fill="white">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
            )
        default:
            return null
    }
}

const PlatformSections = ({ isLoaded }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useEffect(() => {
        if (!isLoaded) return
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % platformData.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [isLoaded])

    const p = platformData[activeIndex]

    return (
        <section ref={ref} className="mt-0 mb-20 relative h-[420px]">
            <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                {!isLoaded ? (
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex gap-16 mb-8 mt-12 items-center">
                            <Skeleton variant="circle" className="w-16 h-16" />
                            <Skeleton className="w-24 h-24 rounded-3xl" />
                            <Skeleton variant="circle" className="w-16 h-16" />
                        </div>
                        <Skeleton className="h-10 w-48" />
                    </div>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            {/* Wave Background */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 h-[75%] transition-colors duration-1000 ${p.waveColor}`}
                                style={{ borderRadius: '50% 50% 0 0 / 25% 25% 0 0' }}
                            ></div>

                            {/* Icons Row */}
                            <div className="relative z-10 flex items-center justify-center gap-16 mb-8 mt-12">
                                <motion.div
                                    initial={{ scale: 0.8, y: 20 }}
                                    animate={{ scale: 1, y: 0 }}
                                    className={`${p.left.size} ${p.left.bg} ${p.left.rounded} shadow-lg flex items-center justify-center animate-float-medium`}
                                >
                                    <IconSvg type={p.left.icon} className="w-8 h-8" />
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 1.2, y: 40 }}
                                    animate={{ scale: 1, y: 0 }}
                                    className={`${p.main.size} ${p.main.bg} ${p.main.rounded} shadow-2xl flex items-center justify-center animate-float-slow`}
                                >
                                    <IconSvg type={p.main.icon} className="w-12 h-12" />
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0.8, y: 20 }}
                                    animate={{ scale: 1, y: 0 }}
                                    className={`${p.right.size} ${p.right.bg} ${p.right.rounded} shadow-lg flex items-center justify-center animate-float-medium delay-400`}
                                >
                                    <IconSvg type={p.right.icon} className="w-8 h-8" />
                                </motion.div>
                            </div>

                            {/* Platform Title */}
                            <h2 className={`relative z-10 text-4xl font-extrabold tracking-tight ${p.textColor}`}>
                                {p.name}
                            </h2>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </section>
    )
}

export default PlatformSections
