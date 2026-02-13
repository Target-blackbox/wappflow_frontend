import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

const pricingPlans = [
    {
        name: 'Free',
        price: '0',
        description: 'Perfect for exploring the power of Kodryx.',
        features: ['100 Messages / month', 'WhatsApp Integration', 'Basic Auto-replies', 'Community Support'],
        cta: 'Start for free',
        popular: false
    },
    {
        name: 'Growth',
        price: '29',
        description: 'Designed for scaling your brand rapidly.',
        features: ['5,000 Messages / month', 'Social Meta Integration', 'Advanced AI Flows', 'Priority Support'],
        cta: 'Scale Now',
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Limitless automation for elite organizations.',
        features: ['Unlimited Messages', 'Direct API Access', 'Custom AI Training', '24/7 Dedicated Manager'],
        cta: 'Contact Sales',
        popular: false
    }
]

const Pricing = ({ isLoaded, onSignup }) => {
    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden flex items-center justify-center">
            {/* Atmospheric Lighting - Signature Blue Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F65E3]/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-12 w-full relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    {!isLoaded ? (
                        <div className="flex flex-col items-center gap-4">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-16 w-[500px]" />
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[12px] font-bold text-black/20 tracking-[0.4em] uppercase mb-4">Pricing</h2>
                            <h3 className="text-[44px] md:text-[54px] font-black text-black leading-tight tracking-tight">
                                Simple plans for <br />
                                <span className="text-[#2F65E3] italic font-medium">limitless potential.</span>
                            </h3>
                        </motion.div>
                    )}
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`relative rounded-[40px] p-10 border transition-all duration-300 ${plan.popular
                                    ? 'bg-white shadow-[0_40px_100px_rgba(47,101,227,0.1)] border-[#2F65E3]/20 scale-105 z-20'
                                    : 'bg-[#F8F8F8]/50 backdrop-blur-xl border-black/[0.03] hover:border-black/5'
                                }`}
                        >
                            {!isLoaded ? (
                                <div className="space-y-6">
                                    <Skeleton className="h-8 w-24" />
                                    <Skeleton className="h-12 w-32" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-5/6" />
                                    </div>
                                    <Skeleton className="h-14 w-full rounded-2xl" />
                                </div>
                            ) : (
                                <>
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#2F65E3] rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em]">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h4 className="text-[16px] font-black text-black/30 uppercase tracking-[0.1em] mb-4">{plan.name}</h4>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[44px] font-black text-black">
                                                {plan.price !== 'Custom' && '$'}{plan.price}
                                            </span>
                                            {plan.price !== 'Custom' && <span className="text-[16px] font-bold text-black/20">/mo</span>}
                                        </div>
                                        <p className="text-[14px] text-black/40 font-bold mt-2">{plan.description}</p>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-4 mb-10">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-[14px] text-black/60 font-medium">
                                                <div className="w-5 h-5 rounded-full bg-[#2F65E3]/5 flex items-center justify-center">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2F65E3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button
                                        onClick={onSignup}
                                        className={`w-full py-5 rounded-[22px] font-black text-[15px] transition-all duration-300 active:scale-95 ${plan.popular
                                                ? 'bg-[#2F65E3] text-white shadow-[0_20px_40px_rgba(47,101,227,0.3)] hover:shadow-[0_25px_50px_rgba(47,101,227,0.4)] hover:-translate-y-1'
                                                : 'bg-black/5 text-black hover:bg-black hover:text-white'
                                            }`}
                                    >
                                        {plan.cta}
                                    </button>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Secure Badge */}
                {!isLoaded ? (
                    <div className="flex justify-center mt-12">
                        <Skeleton className="h-6 w-48" />
                    </div>
                ) : (
                    <div className="flex justify-center mt-16">
                        <div className="px-6 py-3 rounded-full bg-black/[0.02] border border-black/[0.04] flex items-center gap-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeOpacity="0.2" strokeWidth="2.5">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0110 0v4" />
                            </svg>
                            <span className="text-[11px] font-black text-black/20 uppercase tracking-[0.2em]">Secure Checkout • 14-Day Guarantee</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Pricing
