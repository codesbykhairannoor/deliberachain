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
  Compass,
  Lock
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
        road3: "Q4 2024: Gemini 2.0 Flash Integration",
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
        road3: "Q4 2024: Gemini 2.0 Flash Integration",
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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO - STORY FOCUS */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
                    <Flag size={14} /> The Visionary Mission
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    Voices <br/> 
                    <span className="text-vault-amber">Eternalized.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium italic opacity-80">
                    {lang === 'id' 
                      ? "Dlibration lahir dari satu kegelisahan: hilangnya kepercayaan publik pada janji birokrasi. Kami membangun jembatan digital berbasis blockchain untuk memastikan setiap aspirasi menjadi data yang abadi."
                      : "Dlibration was born from one concern: the loss of public trust in bureaucratic promises. We build a digital bridge based on blockchain to ensure every aspiration becomes eternal data."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/dashboard" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-16 relative overflow-hidden flex flex-col items-center border border-border shadow-inner text-center">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                        <Globe size={160} className="text-vault-amber/10 mb-10 mx-auto animate-spin-slow" />
                        <div className="relative z-10">
                            <div className="text-4xl font-black text-foreground mb-3 uppercase tracking-tighter leading-none italic">GLOBAL</div>
                            <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] opacity-60">Network Infrastructure v2</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. MANIFESTO SECTION */}
        <section className="mb-48 text-center bg-muted/50 border border-border rounded-[5rem] p-16 lg:p-32 relative overflow-hidden shadow-inner">
            <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-12 tracking-tighter uppercase leading-none">{pt.manifestoTitle}</h2>
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium italic leading-relaxed mb-16">
                   "{pt.manifestoSub}"
                </p>
                <div className="flex items-center justify-center gap-6">
                    <div className="w-20 h-20 bg-vault-amber rounded-[2rem] shadow-xl border-4 border-white/20"></div>
                    <div className="text-left">
                        <div className="text-2xl font-black text-foreground uppercase tracking-tight leading-none mb-1">Khairan Noor</div>
                        <div className="text-[10px] font-black text-vault-amber uppercase tracking-[0.4em] italic opacity-80">Protocol Architect</div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. ROADMAP VISUAL */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none">{pt.roadmapTitle}</h2>
            <div className="grid md:grid-cols-4 gap-12 relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 -z-10 opacity-30"></div>
                {[
                    { title: pt.road1, icon: <Compass />, status: "Completed", color: "text-green-500" },
                    { title: pt.road2, icon: <Rocket />, status: "Active", color: "text-blue-500" },
                    { title: pt.road3, icon: <Cpu />, status: "Ongoing", color: "text-vault-amber" },
                    { title: pt.road4, icon: <Globe />, status: "Planned", color: "text-zinc-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        whileHover={{ y: -10 }}
                        className="bg-background border border-border p-10 rounded-[3rem] shadow-xl relative group hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`w-20 h-20 bg-muted border border-border rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform ${item.color}`}>
                            {item.icon}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40 italic">{item.status}</div>
                        <h4 className="text-xl font-black text-foreground leading-tight uppercase tracking-tighter">{item.title}</h4>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 4. METHODOLOGY GRID */}
        <section className="mb-48">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-10 tracking-tighter uppercase leading-none">{pt.methodTitle}</h2>
                <div className="h-2 w-32 bg-vault-amber mx-auto rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
                {[
                    { title: pt.method1, desc: pt.method1Desc, icon: <ShieldCheck />, color: "text-blue-500" },
                    { title: pt.method2, desc: pt.method2Desc, icon: <Users />, color: "text-vault-amber" },
                    { title: pt.method3, desc: pt.method3Desc, icon: <Lock />, color: "text-green-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] text-center flex flex-col items-center group shadow-sm hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-12 bg-background w-24 h-24 flex items-center justify-center rounded-[2.5rem] border border-border shadow-inner transition-transform group-hover:scale-110`}>
                            {item.icon}
                        </div>
                        <h3 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed italic text-lg opacity-80">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-vault-amber border border-vault-amber/30 rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles size={48} className="text-white opacity-40 animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.85] uppercase">
                    The Revolution <br/> is on-chain.
                </h2>
                <p className="text-2xl text-black/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight opacity-80">
                    Be the early adopter of the next-generation digital democracy. Your contribution today shapes the governance of tomorrow with Gemini 2.0 Flash.
                </p>
                <div className="flex justify-center">
                    <Link href="/dashboard" className="bg-black text-white px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">{t.btnGetStarted}</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                       <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
