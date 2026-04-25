"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { BarChart3, ArrowRight, Eye, ShieldCheck, Search } from "lucide-react";
import Link from "next/link";

export default function AuditFeaturePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    Public Auditability
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Audit Transparan" : "Transparent Audit"} <span className="text-vault-amber">Tanpa Batas.</span>
                </h1>
                <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Setiap langkah proses birokrasi dapat diaudit secara real-time. Kami memberikan transparansi total untuk membangun kembali kepercayaan publik."
                      : "Every step of the bureaucratic process can be audited in real-time. We provide total transparency to rebuild public trust."}
                </p>
                <Link href="/dashboard" className="bg-vault-amber text-black px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-all w-fit">
                    {t.navGlobal} <ArrowRight size={20} />
                </Link>
            </div>
            <div className="bg-white/2 border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <Search size={100} className="text-vault-amber/20 mb-8" />
                <div className="space-y-4">
                    <div className="p-4 bg-black/40 rounded-xl border border-white/10 flex justify-between">
                        <span className="text-xs text-slate-500 font-black">Audit Hash</span>
                        <span className="text-xs text-vault-amber font-mono">0x4a...f2e1</span>
                    </div>
                    <div className="p-4 bg-black/40 rounded-xl border border-white/10 flex justify-between">
                        <span className="text-xs text-slate-500 font-black">Status</span>
                        <span className="text-xs text-green-500 font-black uppercase tracking-widest">Verified</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
