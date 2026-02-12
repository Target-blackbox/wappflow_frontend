import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Skeleton from './Skeleton'

const features = [
    {
        title: 'Single file forwarding',
        description:
            'Send PDF, images, or documents via WhatsApp instantly. Perfect for invoices, report, and confirmations.',
        side: 'left',
        cardBg: 'bg-[#DAF7D9]/60',
        titleColor: 'text-[#037312]',
        icon: (
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-md">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
            </div>
        ),
        illustration: (
            <div className="absolute -top-4 -right-4 w-28 h-28 flex items-center justify-center">
                <div className="animate-float-gentle">
                    <div className="w-12 h-12 bg-[#087E07] rounded-xl shadow-lg flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        </svg>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Bulk WhatsApp Messaging',
        description:
            'Send messages to multiple contacts using Excel/CSV. Ideal for marketing campaigns and announcements.',
        side: 'right',
        cardBg: 'bg-[#FFD8E9]/60',
        titleColor: 'text-[#C62828]',
        icon: null,
        illustration: (
            <div className="absolute -top-6 -right-6 w-32 h-32 flex items-center justify-center">
                <div className="animate-float-gentle delay-200">
                    <div className="flex items-end gap-1">
                        <div className="w-10 h-10 bg-[#087E07] rounded-xl shadow-md flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="w-7 h-7 bg-orange-400 rounded-lg shadow-sm flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                            <div className="w-7 h-7 bg-[#2F65E3] rounded-lg shadow-sm flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: 'Auto-Reply Chatbot',
        description:
            'Automatically respond to incoming messages with keyword-based rules. Great for FAQs and support.',
        side: 'left',
        cardBg: 'bg-[#C5EFFF]/40',
        titleColor: 'text-[#004CFD]',
        icon: (
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-md">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
            </div>
        ),
        illustration: null,
    },
]

const FeatureCard = ({ feature, index, isLoaded }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: feature.side === 'left' ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative flex ${feature.side === 'left' ? 'justify-start' : 'justify-end'
                } mb-20`}
        >
            {!isLoaded ? (
                <div className="w-full max-w-[380px] p-7 rounded-2xl bg-[#F4F4F4]/50 border border-black/5">
                    <Skeleton className="w-16 h-16 mb-4" />
                    <Skeleton className="h-6 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            ) : (
                <div
                    className={`relative ${feature.cardBg} backdrop-blur-sm p-7 rounded-2xl shadow-sm max-w-[380px] border border-white/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 ease-out gpu-accelerated`}
                >
                    {feature.icon && <div className="mb-4">{feature.icon}</div>}
                    <h3 className={`text-lg font-bold ${feature.titleColor} mb-2`}>
                        {feature.title}
                    </h3>
                    <p className="text-[13px] text-black/50 leading-relaxed">
                        {feature.description}
                    </p>
                    {feature.illustration}
                </div>
            )}
        </motion.div>
    )
}

const RobotIllustration = ({ isLoaded }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-end mb-16"
        >
            {!isLoaded ? (
                <Skeleton className="w-32 h-48 rounded-2xl" />
            ) : (
                <div className="animate-bob">
                    <div className="relative">
                        <div className="w-32 h-36 relative">
                            <div className="w-24 h-20 bg-gradient-to-b from-[#C5EFFF] to-[#90CAF9] rounded-2xl mx-auto relative border-2 border-[#90CAF9]">
                                <div className="absolute top-5 left-4 w-4 h-4 bg-[#004CFD] rounded-full">
                                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                                <div className="absolute top-5 right-4 w-4 h-4 bg-[#004CFD] rounded-full">
                                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                                </div>
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#90CAF9]"></div>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#2F65E3] rounded-full"></div>
                            </div>
                            <div className="w-20 h-14 bg-gradient-to-b from-[#C5EFFF] to-[#90CAF9] rounded-xl mx-auto -mt-1 border-2 border-[#64B5F6] flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-1">
                                    <div className="w-2 h-2 bg-[#004CFD] rounded-full"></div>
                                    <div className="w-2 h-2 bg-[#004CFD] rounded-full"></div>
                                    <div className="w-2 h-2 bg-[#2F65E3] rounded-full"></div>
                                    <div className="w-2 h-2 bg-[#2F65E3] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -right-10 top-0 bg-white px-3 py-1.5 rounded-xl shadow-md text-[10px] text-black/50 font-medium border border-[#D9D9D9] animate-pulse-gentle">
                            Hi! 👋
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    )
}

const FeaturesTimeline = ({ isLoaded }) => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-[1000px] mx-auto px-16 relative">
                <div className="absolute left-1/2 top-16 bottom-32 -translate-x-1/2 border-l-2 border-dashed border-[#D9D9D9]"></div>
                <div className="absolute left-1/2 top-16 w-3 h-3 bg-[#2F65E3] rounded-full -translate-x-1/2 shadow-sm"></div>
                <div className="absolute left-1/2 bottom-32 w-3 h-3 bg-[#2F65E3] rounded-full -translate-x-1/2 shadow-sm"></div>

                <div className="grid grid-cols-2 gap-x-24 gap-y-0 pt-8">
                    <div className="pt-8">
                        <FeatureCard feature={features[0]} index={0} isLoaded={isLoaded} />
                    </div>
                    <div className="pt-8"></div>
                    <div></div>
                    <div>
                        <FeatureCard feature={features[1]} index={1} isLoaded={isLoaded} />
                    </div>
                    <div>
                        <FeatureCard feature={features[2]} index={2} isLoaded={isLoaded} />
                    </div>
                    <div>
                        <RobotIllustration isLoaded={isLoaded} />
                    </div>
                </div>

                <div className="text-center mt-8">
                    {!isLoaded ? (
                        <div className="flex justify-center">
                            <Skeleton className="h-12 w-40" />
                        </div>
                    ) : (
                        <button className="px-7 py-3 text-[14px] font-semibold text-white bg-[#2F65E3] rounded-xl shadow-[0_4px_16px_rgba(47,101,227,0.3)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                            Start for free
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FeaturesTimeline
