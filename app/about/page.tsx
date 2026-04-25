"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Target, 
  Users, 
  ShieldCheck, 
  Globe, 
  Zap,
  ArrowRight,
  Sparkles,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. ABOUT HERO - Text on Right, Large Icon on Left */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-20 bg-vault-amber/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-vault-card border border-white/10 rounded-[4rem] aspect-square flex items-center justify-center relative overflow-hidden group">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                    <Globe size={200} className="text-vault-amber/20 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Zap size={80} fill="currentColor" className="text-vault-amber shadow-[0_0_50px_rgba(245,158,11,0.5)]" />
                    </div>
                </div>
            </div>

            <div className="order-1 lg:order-2">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
                >
                    Our Origin Story
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.05]"
                >
                  {t.aboutHeroTitle} <br/> <span className="text-vault-amber">{t.aboutHeroTitleGold}</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 opacity-80 leading-relaxed mb-12"
                >
                  {t.aboutSub}
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Link href="/dashboard" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-vault-amber transition-all shadow-2xl">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </motion.div>
            </div>
        </div>

        {/* 2. VISIONARY BLOCK - Large Grid Layout */}
        <div className="mb-48">
            <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 p-12 lg:p-24 bg-white/2 border border-white/5 rounded-[4rem] relative overflow-hidden flex flex-col justify-center">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                    <div className="relative z-10">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-vault-amber mb-8">{t.aboutVisionary}</div>
                        <p className="text-2xl md:text-4xl font-black text-white leading-tight mb-12 italic">
                           "{t.aboutFounderVision}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-vault-amber rounded-full"></div>
                            <div>
                                <div className="font-black text-white">Khairan Noor</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Architect & Founder</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 grid gap-12">
                    <div className="p-10 bg-vault-amber/10 border border-vault-amber/20 rounded-[3rem] text-center flex flex-col items-center justify-center">
                        <Target size={48} className="text-vault-amber mb-6" />
                        <h3 className="text-xl font-black text-white mb-4">{t.visiTitle}</h3>
                        <p className="text-sm text-slate-400 font-medium">{t.visiDesc}</p>
                    </div>
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center flex flex-col items-center justify-center">
                        <Sparkles size={48} className="text-vault-amber mb-6" />
                        <h3 className="text-xl font-black text-white mb-4">{t.misiTitle}</h3>
                        <p className="text-sm text-slate-400 font-medium">{t.misiDesc}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. VALUES - Grid / Icon Layout */}
        <div className="py-24 border-t border-white/5">
            <h2 className="text-center text-4xl md:text-6xl font-black text-white mb-24 tracking-tighter">{t.valuesTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: t.val1Title, desc: t.val1Desc, icon: <Database size={32} /> },
                  { title: t.val2Title, desc: t.val2Desc, icon: <Cpu size={32} /> },
                  { title: t.val3Title, desc: t.val3Desc, icon: <Users size={32} /> }
                ].map((val, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-12 bg-vault-card border border-white/5 rounded-[3rem] hover:border-vault-amber/30 transition-all text-center"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10">
                            <div className="text-vault-amber">{val.icon}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed">{val.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
