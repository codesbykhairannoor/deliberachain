"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { FileText, ArrowRight, Search, Book, Code } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-32">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                Technical Documentation
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter">
                {lang === 'id' ? "Panduan & Dokumentasi" : "Guides & Documentation"} <span className="text-vault-amber">Teknis.</span>
            </h1>
            <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input 
                    type="text" 
                    placeholder={t.resSearchPlaceholder} 
                    className="w-full bg-white/5 border border-white/10 p-6 pl-16 rounded-2xl text-foreground outline-none focus:border-vault-amber transition-all font-bold"
                />
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Getting Started", icon: <Book size={32}/>, desc: "Pelajari cara kerja dasar Dlibration." },
                { title: "API Reference", icon: <Code size={32}/>, desc: "Integrasi sistem eksternal dengan protokol kami." },
                { title: "Governance", icon: <FileText size={32}/>, desc: "Panduan partisipasi dalam DAO." }
            ].map((card, i) => (
                <div key={i} className="p-12 bg-vault-card border border-white/5 rounded-[3rem] hover:border-vault-amber/30 transition-all group">
                    <div className="text-vault-amber mb-8 group-hover:scale-110 transition-transform">{card.icon}</div>
                    <h3 className="text-2xl font-black text-foreground mb-4">{card.title}</h3>
                    <p className="text-muted-foreground font-medium mb-8 leading-relaxed">{card.desc}</p>
                    <button className="text-xs font-black uppercase tracking-widest text-foreground border-b border-vault-amber pb-1">Read Docs</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
