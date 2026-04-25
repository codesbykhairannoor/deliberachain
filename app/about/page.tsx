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
  Cpu,
  Database,
  Calendar,
  Flag,
  Rocket,
  Compass
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        manifestoTitle: "Manifesto Demokrasi",
        manifestoSub: "Mengapa kami membangun Dlibration? Karena suara Anda terlalu berharga untuk sekadar menjadi statistik di atas kertas.",
        roadmapTitle: "Peta Jalan Protokol",
        road1: "Q4 2023: Konseptualisasi & Riset AI",
        road2: "Q2 2024: Peluncuran Alpha Base Sepolia",
        road3: "Q4 2024: Integrasi Generative AI Pro",
        road4: "2025+: Ekspansi Tata Kelola Global",
        methodTitle: "Metodologi Deliberasi",
        method1: "Transparansi Radikal",
        method1Desc: "Semua proses audit dapat diakses publik 24/7.",
        method2: "Inklusivitas Berbasis Data",
        method2Desc: "Menjangkau suara-suara yang selama ini tak terdengar.",
        method3: "Keamanan Berdaulat",
        method3Desc: "Identitas dan data Anda dilindungi hukum algoritma."
    },
    en: {
        manifestoTitle: "Democracy Manifesto",
        manifestoSub: "Why did we build Dlibration? Because your voice is too valuable to just be a statistic on paper.",
        roadmapTitle: "Protocol Roadmap",
        road1: "Q4 2023: Conceptualization & AI Research",
        road2: "Q2 2024: Alpha Launch on Base Sepolia",
        road3: "Q4 2024: Generative AI Pro Integration",
        road4: "2025+: Global Governance Expansion",
        methodTitle: "Deliberation Methodology",
        method1: "Radical Transparency",
        method1Desc: "All audit processes are publicly accessible 24/7.",
        method2: "Data-Driven Inclusivity",
        method2Desc: "Reaching voices that have long been unheard.",
        method3: "Sovereign Security",
        method3Desc: "Your identity and data are protected by algorithmic law."
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO - STORY FOCUS */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <Flag size={14} /> The Visionary Mission
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    Voices <br/> 
                    <span className="text-vault-amber">Eternalized.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Dlibration lahir dari satu kegelisahan: hilangnya kepercayaan publik pada janji birokrasi. Kami membangun jembatan digital berbasis blockchain untuk memastikan setiap aspirasi menjadi data yang abadi."
                      : "Dlibration was born from one concern: the loss of public trust in bureaucratic promises. We build a digital bridge based on blockchain to ensure every aspiration becomes eternal data."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/dashboard" className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber transition-all shadow-2xl">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <div className="relative">
                <div className="bg-vault-card border border-white/10 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                    <Globe size={160} className="text-vault-amber/10 mb-8 animate-spin-slow mx-auto" />
                    <div className="text-center">
                        <div className="text-4xl font-black text-foreground mb-2">GLOBAL</div>
                        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em]">Network Infrastructure</div>
                    </div>
                </div>
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-vault-amber rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            </div>
        </div>

        {/* 2. MANIFESTO SECTION */}
        <section className="mb-48 text-center bg-white/[0.02] border border-white/10 rounded-[4rem] p-16 lg:p-24 relative overflow-hidden">
            <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter uppercase">{pt.manifestoTitle}</h2>
                <p className="text-2xl text-muted-foreground font-medium italic leading-relaxed mb-12">
                   "{pt.manifestoSub}"
                </p>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-vault-amber rounded-full"></div>
                    <div className="text-left">
                        <div className="text-xl font-black text-foreground uppercase tracking-tight">Khairan Noor</div>
                        <div className="text-xs font-bold text-vault-amber uppercase tracking-widest">Protocol Architect</div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. ROADMAP VISUAL */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.roadmapTitle}</h2>
            <div className="grid md:grid-cols-4 gap-12">
                {[
                    { title: pt.road1, icon: <Compass />, status: "Completed" },
                    { title: pt.road2, icon: <Rocket />, status: "Active" },
                    { title: pt.road3, icon: <Cpu />, status: "Ongoing" },
                    { title: pt.road4, icon: <Globe />, status: "Planned" }
                ].map((item, i) => (
                    <div key={i} className="relative group">
                        <div className="w-20 h-20 bg-vault-card border border-white/10 rounded-3xl flex items-center justify-center text-vault-amber mb-8 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-40">{item.status}</div>
                        <h4 className="text-lg font-bold text-foreground leading-tight">{item.title}</h4>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. METHODOLOGY GRID */}
        <section className="mb-48">
            <div className="grid lg:grid-cols-3 gap-12">
                {[
                    { title: pt.method1, desc: pt.method1Desc, icon: <ShieldCheck /> },
                    { title: pt.method2, desc: pt.method2Desc, icon: <Users /> },
                    { title: pt.method3, desc: pt.method3Desc, icon: <Lock /> }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-white/2 border border-white/5 rounded-[4rem] text-center flex flex-col items-center"
                    >
                        <div className="text-vault-amber mb-8 scale-150">{item.icon}</div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 bg-vault-amber border border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Sparkles size={80} className="text-black mx-auto mb-12 animate-float" />
                <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-[0.9] uppercase">
                    The Revolution <br/> is on-chain.
                </h2>
                <p className="text-xl text-black/70 mb-12 font-bold leading-relaxed">
                    Be the early adopter of the next-generation digital democracy. Your contribution today shapes the governance of tomorrow.
                </p>
                <Link href="/dashboard" className="bg-black text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   {t.btnGetStarted} <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}

import { Lock } from "lucide-react";
