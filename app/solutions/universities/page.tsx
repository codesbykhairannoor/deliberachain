"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { GraduationCap, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

export default function UniversitiesSolutionPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    Campus Democracy
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Laboratorium" : "Laboratory for"} <span className="text-vault-amber">Demokrasi Digital.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Implementasikan sistem pemungutan suara dan aspirasi mahasiswa yang transparan dan tidak dapat dimanipulasi di lingkungan kampus Anda."
                      : "Implement a student voting and aspiration system that is transparent and unmanipulatable in your campus environment."}
                </p>
                <Link href="/contact" className="bg-vault-amber text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all w-fit shadow-2xl">
                    {lang === 'id' ? "Daftar Paket Kampus" : "Get Campus Pack"} <ArrowRight size={22} />
                </Link>
            </div>
            <div className="bg-white/2 border border-white/10 p-12 rounded-[4rem] text-center shadow-2xl">
                <GraduationCap size={120} className="text-vault-amber mx-auto mb-10" />
                <div className="text-2xl font-black text-foreground">Academic Integrity</div>
                <div className="text-sm text-muted-foreground mt-2 font-bold uppercase tracking-widest italic">Research-First Protocol</div>
            </div>
        </div>
      </div>
    </div>
  );
}
