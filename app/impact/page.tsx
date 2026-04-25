"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Globe, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function ImpactPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const projections = [
    {
      title: t.impactStoryTitle1,
      desc: t.impactStoryDesc1,
      icon: <ShieldCheck className="text-vault-amber" size={32} />,
      metric: "90% Trust Index"
    },
    {
      title: t.impactStoryTitle2,
      desc: t.impactStoryDesc2,
      icon: <Zap className="text-blue-500" size={32} />,
      metric: "70% Faster Response"
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. IMPACT HERO - Grid / Alternating */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-48">
            <div className="flex-1">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
                >
                    Vision & Impact
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-8"
                >
                    {t.impactHeroTitle} <br/> <span className="text-vault-amber">{t.impactHeroTitleGold}</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 opacity-80 leading-relaxed mb-12 max-w-xl"
                >
                    {lang === 'id' ? "Kami tidak hanya membangun platform, kami membangun standar baru untuk transparansi publik yang dapat diukur dan diverifikasi." : "We don't just build a platform; we build a new standard for measurable and verifiable public transparency."}
                </motion.p>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
                <div className="space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-10 bg-vault-card border border-white/10 rounded-[2.5rem] text-center relative overflow-hidden">
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-vault-amber/10 text-[8px] font-black uppercase text-vault-amber rounded-full">Target 2026</div>
                        <div className="text-4xl font-black text-vault-amber mb-2 italic">12k+</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.impactStat1}</div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center relative overflow-hidden">
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/10 text-[8px] font-black uppercase text-slate-400 rounded-full">Benchmark</div>
                        <div className="text-4xl font-black text-white mb-2 italic">2.4s</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.impactStat2}</div>
                    </motion.div>
                </div>
                <div className="space-y-6 pt-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center relative overflow-hidden">
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/10 text-[8px] font-black uppercase text-slate-400 rounded-full">Proyeksi</div>
                        <div className="text-4xl font-black text-white mb-2 italic">450k+</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.impactStat3}</div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-10 bg-vault-card border border-white/10 rounded-[2.5rem] text-center relative overflow-hidden">
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-vault-amber/10 text-[8px] font-black uppercase text-vault-amber rounded-full">Protokol</div>
                        <div className="text-4xl font-black text-vault-amber mb-2 italic">100%</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Immutable</div>
                    </motion.div>
                </div>
            </div>
        </div>

        {/* 2. IMPACT PROJECTIONS (Replacing Fake Stories) */}
        <div className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-24 tracking-tighter text-center">{t.impactProjectionTitle}</h2>
            <div className="grid lg:grid-cols-2 gap-12">
                {projections.map((proj, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group p-12 bg-vault-card border border-white/5 rounded-[3rem] hover:border-vault-amber/30 transition-all flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            {proj.icon}
                        </div>
                        <div>
                            <div className="text-vault-amber font-black text-sm mb-2 italic">{proj.metric}</div>
                            <h3 className="text-2xl font-bold text-white mb-4">{proj.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{proj.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* 3. FUTURE VISION - Wide Layout */}
        <div className="p-12 lg:p-24 bg-white/2 border border-white/10 rounded-[4rem] text-center relative overflow-hidden">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Globe size={80} className="text-vault-amber mx-auto mb-12 animate-float" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                   {lang === 'id' ? "Standar Baru untuk Tata Kelola Masa Depan." : "The New Standard for Future Governance."}
                </h2>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                   {lang === 'id' ? "Kami berkomitmen untuk terus berinovasi, memastikan setiap bit data aspirasi yang Anda berikan menjadi fondasi bagi kebijakan yang lebih adil." : "We are committed to continuous innovation, ensuring that every bit of aspiration data you provide becomes the foundation for fairer policies."}
                </p>
                <Link href="/dashboard" className="bg-vault-amber hover:bg-yellow-500 text-black px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl inline-flex items-center gap-3">
                   {t.btnGetStarted} <ArrowRight size={24} />
                </Link>
             </div>
        </div>

      </div>
    </div>
  );
}
