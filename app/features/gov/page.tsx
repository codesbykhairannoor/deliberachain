"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Building2, ArrowRight, BarChart3, Layout, Users } from "lucide-react";
import Link from "next/link";

export default function GovFeaturePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    Agency Empowerment
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Dashboard Khusus untuk" : "Dedicated Dashboard for"} <span className="text-vault-amber">Instansi Pemerintah.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Kelola aspirasi publik dengan efisien melalui dashboard analitik yang komprehensif. Pantau sentimen, kategorisasi otomatis, dan respon cepat."
                      : "Manage public aspirations efficiently through a comprehensive analytical dashboard. Monitor sentiment, automatic categorization, and rapid response."}
                </p>
                <Link href="/contact" className="bg-vault-amber text-black px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-all w-fit">
                    {t.btnRequestDemo} <ArrowRight size={20} />
                </Link>
            </div>
            <div className="bg-vault-card border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <Layout size={100} className="text-vault-amber/20 mb-8" />
                <div className="space-y-4">
                    <div className="h-4 w-full bg-white/5 rounded-full"></div>
                    <div className="h-4 w-3/4 bg-white/5 rounded-full"></div>
                    <div className="h-20 w-full bg-vault-amber/5 rounded-2xl border border-vault-amber/20 flex items-center justify-center text-vault-amber font-black text-xs">Analytics Flow Active</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
