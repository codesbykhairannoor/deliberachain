"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  FileText, 
  ArrowRight, 
  Download, 
  Cpu, 
  Database, 
  Lock, 
  Globe, 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  Activity,
  Layers,
  Search,
  Sparkles,
  Target
} from "lucide-react";
import Link from "next/link";

export default function WhitepaperResourcePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        heroTitle: "Landasan Visi",
        heroTitleGold: "Protokol.",
        heroSub: "Dlibration bukan sekadar aplikasi, ini adalah protokol deliberasi digital yang dirancang untuk transparansi radikal. Pelajari arsitektur sistem kami di sini.",
        abstractTitle: "Visi Arsitektural",
        abstractDesc: "Whitepaper ini merinci desain teknis bagaimana Generative AI dan Blockchain dapat bekerja sama untuk menciptakan ruang publik yang tak terbantahkan.",
        architectureTitle: "Pilar Teknologi",
        arch1Title: "Logika Deliberasi AI",
        arch1Desc: "Desain sistem pemrosesan aspirasi menggunakan model Gemini 2.0 untuk analisis sentimen objektif.",
        arch2Title: "Ledger Tak Terbantahkan",
        arch2Desc: "Arsitektur penyimpanan data on-chain pada jaringan Base untuk integritas informasi abadi.",
        arch3Title: "Kedaulatan Identitas",
        arch3Desc: "Rancangan protokol privasi untuk menjaga anonimitas pelapor tanpa mengorbankan validitas.",
        downloadTitle: "Akses Spesifikasi Teknis",
        downloadDesc: "Pelajari rincian algoritma dan model data yang sedang kami kembangkan untuk masa depan demokrasi.",
        btnDownload: "Lihat Draft PDF (v1.0)"
    },
    en: {
        heroTitle: "Foundational",
        heroTitleGold: "Protocol.",
        heroSub: "Dlibration is not just an app, it's a digital deliberation protocol designed for radical transparency. Learn about our system architecture here.",
        abstractTitle: "Architectural Vision",
        abstractDesc: "This whitepaper details the technical design of how Generative AI and Blockchain can collaborate to create an indisputable public space.",
        architectureTitle: "Technological Pillars",
        arch1Title: "AI Deliberation Logic",
        arch1Desc: "System design for aspiration processing using Gemini 2.0 models for objective sentiment analysis.",
        arch2Title: "Indisputable Ledger",
        arch2Desc: "On-chain data storage architecture on the Base network for eternal information integrity.",
        arch3Title: "Identity Sovereignty",
        arch3Desc: "Privacy protocol design to maintain reporter anonymity without compromising validity.",
        downloadTitle: "Access Technical Specifications",
        downloadDesc: "Learn the details of the algorithms and data models we are developing for the future of democracy.",
        btnDownload: "View PDF Draft (v1.0)"
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
                    <BookOpen size={14} /> Design Specification
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase italic">
                    The <br/> 
                    <span className="text-vault-amber">Vision.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium italic opacity-80">
                    {pt.heroSub}
                </p>
                <div className="flex flex-wrap gap-6">
                    <button className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {pt.btnDownload} <Download size={22} />
                    </button>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-16 relative overflow-hidden border border-border shadow-inner text-center">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                        <FileText size={160} className="text-vault-amber/10 mb-10 mx-auto animate-float" />
                        <div className="relative z-10">
                            <div className="text-3xl font-black text-foreground uppercase tracking-tighter leading-none mb-3 italic">Draft v1.0.4</div>
                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.4em] mt-6 italic opacity-60">Strategic Roadmap: 2024-2025</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. ABSTRACT SECTION */}
        <section className="mb-48 text-center bg-muted/50 border border-border rounded-[4rem] p-16 lg:p-32 relative overflow-hidden shadow-inner">
            <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-12 tracking-tighter uppercase leading-none italic">{pt.abstractTitle}</h2>
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium italic leading-relaxed opacity-80">
                   "{pt.abstractDesc}"
                </p>
            </div>
        </section>

        {/* 3. ARCHITECTURE GRID */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none italic">{pt.architectureTitle}</h2>
            <div className="grid md:grid-cols-3 gap-10 relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2 -z-10 opacity-30"></div>
                {[
                    { title: pt.arch1Title, desc: pt.arch1Desc, icon: <Cpu />, color: "text-blue-500" },
                    { title: pt.arch2Title, desc: pt.arch2Desc, icon: <Layers />, color: "text-vault-amber" },
                    { title: pt.arch3Title, desc: pt.arch3Desc, icon: <Lock />, color: "text-green-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-background border border-border rounded-[4rem] group text-center flex flex-col items-center shadow-xl hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-10 bg-muted w-24 h-24 flex items-center justify-center rounded-[2rem] border border-border shadow-inner transition-transform group-hover:scale-110`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none italic">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed italic opacity-80">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 4. SYSTEM FLOW MOCKUP */}
        <section className="mb-48">
             <div className="bg-muted/30 border border-border rounded-[5rem] p-16 lg:p-32 text-center shadow-inner">
                <h2 className="text-[10px] font-black text-muted-foreground mb-20 uppercase tracking-[0.6em] opacity-60 italic">Proposed System Logic</h2>
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="flex justify-between items-center px-12 py-8 bg-background border border-border rounded-[2rem] shadow-sm hover:border-vault-amber/30 transition-colors group">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground italic">Input Layer</span>
                        <div className="h-[2px] flex-1 mx-12 bg-gradient-to-r from-transparent via-vault-amber to-transparent opacity-20"></div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-vault-amber group-hover:animate-pulse italic">Wallet Auth</span>
                    </div>
                    <div className="flex justify-between items-center px-12 py-8 bg-background border border-border rounded-[2rem] shadow-sm hover:border-blue-500/30 transition-colors group">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground italic">Consensus Layer</span>
                        <div className="h-[2px] flex-1 mx-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 group-hover:animate-pulse italic">Base L2 Mining</span>
                    </div>
                    <div className="flex justify-between items-center px-12 py-8 bg-vault-amber/10 border border-vault-amber/20 rounded-[2rem] shadow-xl group">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-vault-amber italic">Analysis Layer</span>
                        <div className="h-[2px] flex-1 mx-12 bg-gradient-to-r from-transparent via-vault-amber to-transparent opacity-40"></div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-foreground font-black italic group-hover:animate-bounce">Gemini 2.0 Logic</span>
                    </div>
                </div>
             </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-foreground border border-foreground rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-background rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles size={48} className="text-vault-amber animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-background mb-10 tracking-tighter leading-[0.85] uppercase italic">
                    Building the <br/> Blueprint.
                </h2>
                <p className="text-2xl text-background/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight opacity-80">
                    {lang === 'id' ? 'Pelajari bagaimana kami merancang masa depan demokrasi digital yang aman, terbuka, dan tak terbantahkan.' : 'Learn how we are designing the future of digital democracy that is secure, open, and indisputable.'}
                </p>
                <div className="flex justify-center">
                    <Link href="/contact" className="bg-vault-amber text-black px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">Request Whitepaper</span> <Download size={36} className="relative z-10 group-hover/btn:translate-y-2 transition-transform" />
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
