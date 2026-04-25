"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { BookOpen, ArrowRight, Download, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function WhitepaperPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    Protocol Vision
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Whitepaper Protokol" : "Protocol Whitepaper"} <span className="text-vault-amber">v1.0.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Pelajari arsitektur teknis, model gamifikasi, dan mekanisme konsensus di balik Dlibration. Bagaimana kami menggabungkan kedaulatan data dengan transparansi publik."
                      : "Learn about the technical architecture, gamification model, and consensus mechanism behind Dlibration. How we combine data sovereignty with public transparency."}
                </p>
                <button className="bg-vault-amber text-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all w-fit shadow-2xl flex items-center gap-4">
                    Download PDF <Download size={24} />
                </button>
            </div>
            <div className="bg-vault-card border border-white/10 p-12 rounded-[4rem] relative overflow-hidden group shadow-2xl">
                <BookOpen size={150} className="text-vault-amber/10 mx-auto mb-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShieldCheck size={48} className="text-vault-amber mb-4" />
                    <div className="text-lg font-black text-foreground">SHA-256 Verified</div>
                    <div className="text-[10px] text-muted-foreground font-mono mt-2 break-all">f7e8a9c2d1b0...9e3a1f4b</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
