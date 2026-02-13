import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Skeleton from '../components/Skeleton'

const LoginPage = ({ onBack, isLoaded, setIsLoaded }) => {
    // Safety timeout to ensure isLoaded resolves even if image fails
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isLoaded) setIsLoaded(true)
        }, 1500)
        return () => clearTimeout(timer)
    }, [isLoaded, setIsLoaded])

    return (
        <div className="h-screen w-full bg-[#FFFFFF] flex items-center justify-center overflow-hidden bg-grain select-none relative">

            {/* Split Layout Container */}
            <div className="flex w-full h-full max-w-[1440px] max-h-[900px] shadow-[0_0_100px_rgba(0,0,0,0.03)] overflow-hidden relative">

                {/* Floating Back Button - Tidy & Accessible */}
                <button
                    onClick={onBack}
                    className="absolute top-10 right-10 z-[100] w-10 h-10 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-all group cursor-pointer"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Left Side: Hero Gateway (Blue Atmosphere) */}
                <div className="hidden lg:flex flex-1 relative bg-[#F0F4FF] p-24 flex-col justify-between overflow-hidden border-r border-black/[0.03]">
                    {/* Atmospheric Textures & Deep Blue Blobs */}
                    <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2F65E3]/[0.02] via-transparent to-[#2F65E3]/[0.05] pointer-events-none" />

                    {/* Signature Blue Blobs */}
                    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#2F65E3]/10 blur-[140px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2F65E3]/5 blur-[120px] rounded-full pointer-events-none" />

                    {/* Brand Identifier */}
                    <div className="relative z-20 mb-8">
                        {!isLoaded ? (
                            <Skeleton className="h-20 w-48 rounded-2xl" />
                        ) : (
                            <img
                                src="/kodryx.png"
                                alt="Kodryx"
                                className="h-28 w-auto object-contain"
                                onLoad={() => setIsLoaded(true)}
                            />
                        )}
                    </div>

                    {/* Elite Value Proposition */}
                    <div className="relative z-20">
                        {!isLoaded ? (
                            <div className="space-y-4 mb-6">
                                <Skeleton className="h-14 w-full" />
                                <Skeleton className="h-14 w-2/3" />
                            </div>
                        ) : (
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-[48px] font-black text-black leading-[1.1] tracking-[-0.03em] mb-6"
                            >
                                Engineered for <br />
                                <span className="text-[#2F65E3] italic font-medium">Automation.</span>
                            </motion.h1>
                        )}

                        {!isLoaded ? (
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[380px]" />
                                <Skeleton className="h-4 w-[320px]" />
                            </div>
                        ) : (
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-[15px] text-black/40 font-bold max-w-[380px] leading-relaxed"
                            >
                                Log in to access your high-performance automation ecosystem and dashboard.
                            </motion.p>
                        )}
                    </div>

                    {/* Visual Status Marker */}
                    <div className="relative z-20 flex items-center gap-4">
                        {!isLoaded ? (
                            <Skeleton className="h-4 w-32" />
                        ) : (
                            <>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2F65E3] animate-pulse" />
                                <span className="text-black/20 text-[10px] font-black uppercase tracking-[0.4em]">System Gateway Active</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Side: Auth Form (Pure Minimalist White) */}
                <div className="flex-1 bg-white flex flex-col justify-center px-12 lg:px-24 relative z-50">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-[360px] mx-auto"
                    >
                        {/* Header Context */}
                        <div className="mb-12">
                            {!isLoaded ? (
                                <div className="space-y-3">
                                    <Skeleton className="h-10 w-2/3" />
                                    <Skeleton className="h-4 w-full" />
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-[32px] font-black text-black leading-tight mb-2">Welcome Back</h2>
                                    <p className="text-[14px] text-black/40 font-bold tracking-tight px-0.5">Enter your credentials to manage your automations.</p>
                                </>
                            )}
                        </div>

                        {/* Tidy Form Fields */}
                        <div className="space-y-6">
                            <div className="space-y-1.5">
                                {!isLoaded ? (
                                    <>
                                        <Skeleton className="h-3 w-20 ml-1" />
                                        <Skeleton className="h-12 w-full rounded-2xl" />
                                    </>
                                ) : (
                                    <>
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 ml-1">E-mail Address</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-6 py-3.5 bg-[#F8F8F8] border border-transparent focus:border-black/5 rounded-2xl text-[14px] focus:bg-white outline-none transition-all placeholder:text-black/10 font-bold shadow-sm"
                                        />
                                    </>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                {!isLoaded ? (
                                    <>
                                        <div className="flex justify-between">
                                            <Skeleton className="h-3 w-20 ml-1" />
                                            <Skeleton className="h-3 w-24" />
                                        </div>
                                        <Skeleton className="h-12 w-full rounded-2xl" />
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-between items-end mr-1">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 ml-1">Password</label>
                                            <button className="text-[10px] font-black uppercase text-[#2F65E3]/60 hover:text-[#2F65E3] transition-colors mb-0.5">Lost password?</button>
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="••••••••••••"
                                            className="w-full px-6 py-3.5 bg-[#F8F8F8] border border-transparent focus:border-black/5 rounded-2xl text-[14px] focus:bg-white outline-none transition-all placeholder:text-black/10 font-bold shadow-sm"
                                        />
                                    </>
                                )}
                            </div>

                            {/* Interaction Zone */}
                            <div className="pt-2">
                                {!isLoaded ? (
                                    <Skeleton className="h-14 w-full rounded-2xl" />
                                ) : (
                                    <button className="w-full py-4 bg-[#2F65E3] text-white font-black rounded-2xl text-[15px] shadow-[0_12px_24px_rgba(47,101,227,0.2)] hover:shadow-[0_20px_40px_rgba(47,101,227,0.3)] hover:-translate-y-1 active:scale-95 transition-all">
                                        Sign In to Dashboard
                                    </button>
                                )}
                            </div>

                            {!isLoaded ? (
                                <Skeleton className="h-4 w-3/4 mx-auto" />
                            ) : (
                                <div className="relative py-3">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-black/[0.04]"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="px-4 bg-white text-black/20 font-black uppercase tracking-[0.4em] text-[8px]">Secure Authentication</span>
                                    </div>
                                </div>
                            )}

                            {/* Alternative Auth */}
                            {!isLoaded ? (
                                <Skeleton className="h-14 w-full rounded-2xl" />
                            ) : (
                                <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-black/[0.06] rounded-2xl font-black text-black text-[13px] hover:bg-black/5 transition-all active:scale-95 shadow-sm">
                                    <svg width="18" height="18" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Continue with Google
                                </button>
                            )}
                        </div>

                        {/* Footer Context */}
                        <div className="mt-10 text-center">
                            {!isLoaded ? (
                                <Skeleton className="h-4 w-1/2 mx-auto" />
                            ) : (
                                <p className="text-[12px] text-black/30 font-bold">
                                    Don't have an account? <button className="text-[#2F65E3] hover:underline font-black ml-1">Create new account</button>
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
