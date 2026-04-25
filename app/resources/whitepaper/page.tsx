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
  Search
} from "lucide-react";
import Link from "next/link";

export default function WhitepaperResourcePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        whitepaperTitle: "Landasan Teknis Dlibration",
        whitepaperSub: "Dokumen komprehensif yang merinci visi, arsitektur, dan protokol keamanan di balik ekosistem deliberasi digital kami.",
        abstractTitle: "Abstrak Eksekutif",
        abstractDesc: "Whitepaper ini membahas krisis kepercayaan dalam demokrasi modern dan bagaimana integrasi Generative AI Pro dengan Base Blockchain dapat menciptakan sistem akuntabilitas publik yang abadi.",
        architectureTitle: "Arsitektur Protokol",
        arch1Title: "Layer AI Deliberasi",
        arch1Desc: "Mesin pengolah sentimen yang mampu menganalisis 1 juta+ token secara real-time.",
        arch2Title: "Immutable Storage",
        arch2Desc: "Penyimpanan data on-chain menggunakan Layer-2 Base untuk efisiensi biaya.",
        arch3Title: "Identity Protection",
        arch3Desc: "Protokol privasi tingkat lanjut untuk melindungi data personal warga.",
        downloadTitle: "Unduh Dokumen Lengkap",
        downloadDesc: "Dapatkan akses ke rincian teknis mendalam tentang algoritma dan model data kami.",
        btnDownload: "Unduh PDF (v1.0)"
    },
    en: {
        whitepaperTitle: "Technical Foundation of Dlibration",
        whitepaperSub: "A comprehensive document detailing the vision, architecture, and security protocols behind our digital deliberation ecosystem.",
        abstractTitle: "Executive Abstract",
        abstractDesc: "This whitepaper addresses the trust crisis in modern democracy and how the integration of Generative AI Pro with Base Blockchain can create an eternal system of public accountability.",
        architectureTitle: "Protocol Architecture",
        arch1Title: "Deliberation AI Layer",
        arch1Desc: "A sentiment processing engine capable of analyzing 1 million+ tokens in real-time.",
        arch2Title: "Immutable Storage",
        arch2Desc: "On-chain data storage using Base Layer-2 for cost efficiency.",
        arch3Title: "Identity Protection",
        arch3Desc: "Advanced privacy protocols to protect citizens' personal data.",
        downloadTitle: "Download Full Document",
        downloadDesc: "Gain access to deep technical details about our algorithms and data models.",
        btnDownload: "Download PDF (v1.0)"
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <BookOpen size={14} /> Official Specification
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    The <br/> 
                    <span className="text-vault-amber">Whitepaper.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Kami percaya pada transparansi radikal. Pelajari bagaimana kami membangun masa depan demokrasi digital dari sudut pandang teknis dan filosofis."
                      : "We believe in radical transparency. Learn how we are building the future of digital democracy from both a technical and philosophical perspective."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <button className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber transition-all shadow-2xl">
                        {pt.btnDownload} <Download size={22} />
                    </button>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="bg-vault-card border border-white/10 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group flex flex-col items-center">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                    <FileText size={160} className="text-vault-amber/10 mb-8 mx-auto animate-float" />
                    <div className="text-center">
                        <div className="text-2xl font-black text-foreground uppercase tracking-tighter">Specification v1.0.4</div>
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] mt-4">Last Updated: April 2024</p>
                    </div>
                </div>
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-vault-amber rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            </motion.div>
        </div>

        {/* 2. ABSTRACT SECTION */}
        <section className="mb-48 text-center bg-white/[0.02] border border-white/10 rounded-[4rem] p-16 lg:p-24 relative overflow-hidden">
            <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter uppercase">{pt.abstractTitle}</h2>
                <p className="text-2xl text-muted-foreground font-medium italic leading-relaxed">
                   "{pt.abstractDesc}"
                </p>
            </div>
        </section>

        {/* 3. ARCHITECTURE GRID */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.architectureTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 -z-10"></div>
                {[
                    { title: pt.arch1Title, desc: pt.arch1Desc, icon: <Cpu />, color: "text-blue-400" },
                    { title: pt.arch2Title, desc: pt.arch2Desc, icon: <Layers />, color: "text-vault-amber" },
                    { title: pt.arch3Title, desc: pt.arch3Desc, icon: <Lock />, color: "text-green-400" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-12 bg-vault-card border border-white/10 rounded-[3rem] group text-center flex flex-col items-center"
                    >
                        <div className={`${item.color} mb-8 transition-transform group-hover:scale-110`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 4. TECHNICAL DIAGRAM MOCKUP */}
        <section className="mb-48">
             <div className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-16 lg:p-24 text-center">
                <h2 className="text-2xl font-black text-muted-foreground mb-16 uppercase tracking-[0.5em] opacity-40">System Logic Diagram</h2>
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="flex justify-between items-center px-12 py-6 bg-white/5 border border-white/10 rounded-2xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">User Layer</span>
                        <div className="h-[2px] flex-1 mx-8 bg-vault-amber/20"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-vault-amber">E2E Encryption</span>
                    </div>
                    <div className="flex justify-between items-center px-12 py-6 bg-white/5 border border-white/10 rounded-2xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Protocol Layer</span>
                        <div className="h-[2px] flex-1 mx-8 bg-blue-400/20"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Base L2 Consensus</span>
                    </div>
                    <div className="flex justify-between items-center px-12 py-6 bg-vault-amber/10 border border-vault-amber/20 rounded-2xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-vault-amber">Analysis Layer</span>
                        <div className="h-[2px] flex-1 mx-8 bg-vault-amber/40"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-bold italic">GenAI Pro Analysis</span>
                    </div>
                </div>
             </div>
        </section>

        {/* 5. CALL TO ACTION - DOWNLOAD */}
        <section className="p-20 bg-vault-amber border border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Download size={80} className="text-black mx-auto mb-12 animate-bounce opacity-30" />
                <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-[0.9] uppercase">
                    Deep dive into <br/> the code.
                </h2>
                <p className="text-xl text-black/80 mb-12 font-bold leading-relaxed">
                    Explore our open-source codebase and technical documentation on GitHub to see how we are building a trustless future.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-black text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                       Download Whitepaper <Download size={28} />
                    </button>
                    <Link href="https://github.com" className="px-16 py-8 border-2 border-black/20 rounded-[2.5rem] font-black text-2xl hover:bg-black/5 transition-all text-black inline-flex items-center gap-4">
                       View on GitHub <Globe size={28} />
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
