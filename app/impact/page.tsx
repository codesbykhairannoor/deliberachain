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
  Cpu,
  MapPin,
  Heart,
  Briefcase,
  Layers,
  Sparkles,
  Rocket,
  Shield
} from "lucide-react";
import Link from "next/link";
import { cloneElement } from "react";

export default function ImpactPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        heroTitle: "Membangun Jejak",
        heroTitleGold: "Transparansi.",
        heroSub: "Dlibration dirancang untuk mengubah cara dunia mengelola aspirasi. Kami tidak hanya membangun platform, kami membangun standar baru untuk akuntabilitas publik.",
        milestoneTitle: "Fase Pengembangan Protokol",
        mile1: "Tahap 1: Arsitektur Alpha",
        mile1Desc: "Pengembangan inti protokol pada jaringan Base Sepolia.",
        mile2: "Tahap 2: Integrasi AI",
        mile2Desc: "Implementasi Gemini 2.0 untuk analisis sentimen skala besar.",
        mile3: "Tahap 3: Desentralisasi",
        mile3Desc: "Migrasi penuh ke tata kelola berbasis komunitas (DAO).",
        useCaseTitle: "Skenario Implementasi Visioner",
        case1: "Transparansi Anggaran",
        case1Desc: "Memungkinkan warga memverifikasi alokasi dana secara real-time di atas blockchain.",
        case2: "Deliberasi Akademik",
        case2Desc: "Ruang diskusi terstruktur untuk pemilihan dan kebijakan di lingkungan universitas.",
        case3: "Audit Kebijakan NGO",
        case3Desc: "Membantu organisasi sosial mengumpulkan bukti digital untuk advokasi kebijakan.",
        futureTitle: "Visi Masa Depan",
        futureSub: "Setiap bit data adalah langkah menuju dunia yang lebih adil dan transparan."
    },
    en: {
        heroTitle: "Building Traces of",
        heroTitleGold: "Transparency.",
        heroSub: "Dlibration is designed to change the way the world manages aspirations. We are not just building a platform, we are building a new standard for public accountability.",
        milestoneTitle: "Protocol Development Phases",
        mile1: "Phase 1: Alpha Architecture",
        mile1Desc: "Core protocol development on the Base Sepolia network.",
        mile2: "Phase 2: AI Integration",
        mile2Desc: "Implementation of Gemini 2.0 for large-scale sentiment analysis.",
        mile3: "Phase 3: Decentralization",
        mile3Desc: "Full migration to community-based governance (DAO).",
        useCaseTitle: "Visionary Implementation Scenarios",
        case1: "Budget Transparency",
        case1Desc: "Allowing citizens to verify fund allocation in real-time on the blockchain.",
        case2: "Academic Deliberation",
        case2Desc: "Structured discussion space for elections and policies in university environments.",
        case3: "NGO Policy Audit",
        case3Desc: "Helping social organizations gather digital evidence for policy advocacy.",
        futureTitle: "Future Vision",
        futureSub: "Every bit of data is a step towards a fairer and more transparent world."
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO - IMPACT VISUAL */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
                    <Rocket size={14} /> Roadmap to Impact
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase italic">
                    {pt.heroTitle} <br/> 
                    <span className="text-vault-amber">{pt.heroTitleGold}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium italic opacity-80">
                    {pt.heroSub}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/dashboard" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <div className="relative">
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-2 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-16 relative overflow-hidden flex flex-col items-center border border-border shadow-inner">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10 text-center">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <div className="p-8 bg-muted border border-border rounded-3xl shadow-sm group-hover:border-vault-amber/30 transition-colors">
                                        <div className="text-4xl font-black text-vault-amber mb-2 italic">100%</div>
                                        <div className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em]">Data Integrity</div>
                                    </div>
                                    <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-3xl shadow-sm group-hover:border-blue-500/30 transition-colors">
                                        <div className="text-4xl font-black text-blue-500 mb-2 italic">Zero</div>
                                        <div className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em]">Censorship</div>
                                    </div>
                                </div>
                                <div className="pt-12">
                                    <div className="p-12 bg-green-500/5 border border-green-500/10 rounded-[3rem] h-full flex flex-col justify-center shadow-sm group-hover:border-green-500/30 transition-colors">
                                        <div className="text-5xl font-black text-green-500 mb-3 italic">∞</div>
                                        <div className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em] italic">Eternal Records</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. VISIONARY USE CASES GRID */}
        <section className="mb-48">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-10 tracking-tighter uppercase leading-none italic">{pt.useCaseTitle}</h2>
                <div className="h-2 w-32 bg-vault-amber mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: pt.case1, desc: pt.case1Desc, icon: <MapPin />, color: "text-red-500" },
                    { title: pt.case2, desc: pt.case2Desc, icon: <Briefcase />, color: "text-vault-amber" },
                    { title: pt.case3, desc: pt.case3Desc, icon: <ShieldCheck />, color: "text-blue-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] group text-center shadow-inner hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-10 transition-transform group-hover:rotate-12 flex justify-center bg-background w-20 h-20 items-center rounded-3xl mx-auto border border-border shadow-2xl`}>
                            {cloneElement(item.icon, { size: 40 })}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tighter leading-tight">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed italic opacity-80">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. MILESTONES SECTION */}
        <section className="mb-48">
            <div className="text-center mb-20">
                <h2 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.6em] opacity-60 italic">{pt.milestoneTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { title: pt.mile1, desc: pt.mile1Desc, icon: <Layers /> },
                    { title: pt.mile2, desc: pt.mile2Desc, icon: <Cpu /> },
                    { title: pt.mile3, desc: pt.mile3Desc, icon: <Globe /> }
                ].map((item, i) => (
                    <div key={i} className="p-12 bg-background border border-border rounded-[3.5rem] relative overflow-hidden shadow-2xl group hover:border-vault-amber/20 transition-all text-center">
                        <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform text-vault-amber">
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-black text-foreground uppercase tracking-tighter leading-none mb-4">{item.title}</h4>
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest opacity-60 leading-relaxed italic">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. FINAL CTA */}
        <section className="p-20 md:p-32 bg-foreground border border-foreground rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-background rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Heart size={48} className="text-vault-amber animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-background mb-10 tracking-tighter leading-[0.85] uppercase italic">
                    The Future is <br/> Transparent.
                </h2>
                <p className="text-2xl text-background/70 mb-16 font-black leading-relaxed max-w-2xl mx-auto uppercase italic tracking-tight opacity-80">
                    {pt.futureSub}
                </p>
                <div className="flex justify-center">
                    <Link href="/dashboard" className="bg-vault-amber text-black px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">Explore Prototype</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
