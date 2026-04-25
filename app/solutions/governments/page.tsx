"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Building2, ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function GovernmentsSolutionPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    Smart City & Governance
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Integrasi Birokrasi" : "Bureaucratic Integration"} <span className="text-vault-amber">Masa Depan.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Bantu instansi Anda merespon aspirasi warga dengan lebih cerdas. Dapatkan analisis data berbasis bukti untuk pengambilan keputusan yang lebih tepat sasaran."
                      : "Help your agency respond to citizen aspirations more intelligently. Get evidence-based data analysis for more targeted decision-making."}
                </p>
                <Link href="/contact" className="bg-vault-amber text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all w-fit shadow-2xl">
                    {t.btnRequestDemo} <ArrowRight size={22} />
                </Link>
            </div>
            <div className="bg-vault-card border border-white/10 p-12 rounded-[4rem] relative overflow-hidden group shadow-2xl">
                <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                <Building2 size={120} className="text-vault-amber mx-auto mb-10 group-hover:rotate-6 transition-transform" />
                <div className="space-y-4 max-w-xs mx-auto">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <ShieldCheck size={20} className="text-vault-amber" />
                        <span className="text-xs font-black text-foreground uppercase tracking-widest">ISO 27001 Ready</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <BarChart3 size={20} className="text-vault-amber" />
                        <span className="text-xs font-black text-foreground uppercase tracking-widest">API First Access</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
