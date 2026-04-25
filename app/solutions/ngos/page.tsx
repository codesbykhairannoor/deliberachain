"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Heart, ArrowRight, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function NgosSolutionPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    Social Impact & NGOs
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Perkuat Advokasi" : "Strengthen Advocacy"} <span className="text-vault-amber">Berbasis Data.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Gunakan bukti digital yang sah untuk memperkuat kampanye advokasi Anda. Kumpulkan data aspirasi yang terverifikasi on-chain untuk dampak yang lebih nyata."
                      : "Use valid digital evidence to strengthen your advocacy campaigns. Collect on-chain verified aspiration data for more tangible impact."}
                </p>
                <Link href="/contact" className="bg-vault-amber text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all w-fit shadow-2xl">
                    {lang === 'id' ? "Mulai Kampanye" : "Start Campaign"} <ArrowRight size={22} />
                </Link>
            </div>
            <div className="bg-vault-card border border-white/10 p-12 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
                <Heart size={120} className="text-vault-amber mx-auto mb-10 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-black text-foreground">Humanity First</div>
                <div className="text-sm text-muted-foreground mt-2 font-bold uppercase tracking-widest italic">Advocacy Engine</div>
            </div>
        </div>
      </div>
    </div>
  );
}
