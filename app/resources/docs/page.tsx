"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  FileText, 
  ArrowRight, 
  Search, 
  Book, 
  Code,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Shield
} from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        heroTitle: "Pusat Panduan &",
        heroTitleGold: "Dokumentasi.",
        heroSub: "Semua yang Anda butuhkan untuk memahami, membangun, dan berintegrasi dengan protokol Dlibration.",
        searchPlaceholder: "Cari panduan teknis...",
        sectionTitle: "Direktori Dokumentasi",
        card1Title: "Panduan Memulai",
        card1Desc: "Pelajari langkah awal untuk berpartisipasi dalam ekosistem on-chain kami.",
        card2Title: "Desain Integrasi API",
        card2Desc: "Rancangan teknis untuk integrasi sistem eksternal dengan protokol deliberasi.",
        card3Title: "Tata Kelola DAO",
        card3Desc: "Panduan partisipasi dalam pengambilan keputusan berbasis komunitas.",
        comingSoon: "Segera Hadir"
    },
    en: {
        heroTitle: "Guide Center &",
        heroTitleGold: "Documentation.",
        heroSub: "Everything you need to understand, build, and integrate with the Dlibration protocol.",
        searchPlaceholder: "Search technical guides...",
        sectionTitle: "Documentation Directory",
        card1Title: "Getting Started",
        card1Desc: "Learn the first steps to participate in our on-chain ecosystem.",
        card2Title: "API Integration Design",
        card2Desc: "Technical design for external system integration with the deliberation protocol.",
        card3Title: "DAO Governance",
        card3Desc: "Guide to participating in community-based decision making.",
        comingSoon: "Coming Soon"
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. DOCS HERO */}
        <div className="text-center max-w-4xl mx-auto mb-40 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.4em] uppercase mb-10 shadow-sm"
            >
                <Terminal size={16} /> Knowledge Base v1.0
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-foreground mb-10 tracking-tighter uppercase leading-none italic">
                {pt.heroTitle} <br/> <span className="text-vault-amber">{pt.heroTitleGold}</span>
            </h1>
            <div className="relative max-w-2xl mx-auto group">
                <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-vault-amber transition-colors" size={24} />
                <input 
                    type="text" 
                    placeholder={pt.searchPlaceholder} 
                    className="w-full bg-muted border border-border p-10 pl-24 rounded-[2.5rem] text-foreground outline-none focus:border-vault-amber transition-all font-black text-lg shadow-inner italic"
                />
            </div>
        </div>

        {/* 2. DOCS GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-48">
            {[
                { title: pt.card1Title, icon: <Book size={40}/>, desc: pt.card1Desc, status: "Published" },
                { title: pt.card2Title, icon: <Code size={40}/>, desc: pt.card2Desc, status: pt.comingSoon },
                { title: pt.card3Title, icon: <Shield size={40}/>, desc: pt.card3Desc, status: pt.comingSoon }
            ].map((card, i) => (
                <div key={i} className="p-16 bg-background border border-border rounded-[4rem] hover:border-vault-amber/30 transition-all group relative overflow-hidden shadow-2xl flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-vault-amber/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                        <div className="text-vault-amber mb-10 bg-muted w-24 h-24 flex items-center justify-center rounded-3xl border border-border shadow-inner group-hover:scale-110 transition-transform">
                            {card.icon}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-4 italic opacity-60">{card.status}</div>
                        <h3 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tighter italic leading-none">{card.title}</h3>
                        <p className="text-muted-foreground font-medium mb-10 leading-relaxed italic opacity-80">{card.desc}</p>
                    </div>
                    <button className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-foreground border-b-2 border-vault-amber pb-2 self-start hover:gap-6 transition-all active:scale-95">
                        Read Documentation <ArrowRight size={18} />
                    </button>
                </div>
            ))}
        </div>

        {/* 3. FINAL CTA */}
        <section className="p-20 md:p-32 bg-foreground border border-foreground rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-background rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles size={48} className="text-vault-amber animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-background mb-10 tracking-tighter leading-[0.85] uppercase italic">
                    Need Help <br/> Building?
                </h2>
                <p className="text-2xl text-background/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight opacity-80">
                    Join our developer community on Discord or reach out to our core team for technical support and partnership inquiries.
                </p>
                <div className="flex justify-center">
                    <Link href="/contact" className="bg-vault-amber text-black px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">Contact Developers</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
