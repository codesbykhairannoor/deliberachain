"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Sparkles, ArrowRight, Shield, Zap, Cpu } from "lucide-react";
import Link from "next/link";

export default function AiFeaturePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
                >
                    Advanced AI Deliberation
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Analisis Kebijakan Berbasis" : "Policy Analysis Powered by"} <span className="text-vault-amber">Gemini 1.5 Pro.</span>
                </h1>
                <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Gunakan kekuatan AI tercanggih untuk meringkas ribuan aspirasi menjadi poin-poin strategis dalam hitungan detik. Validasi otomatis untuk mencegah spam dan ujaran kebencian."
                      : "Harness the power of cutting-edge AI to summarize thousands of aspirations into strategic points in seconds. Automatic validation to prevent spam and hate speech."}
                </p>
                <div className="flex gap-4">
                    <Link href="/dashboard" className="bg-vault-amber text-black px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-all">
                        {t.btnGetStarted} <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10"></div>
                <div className="bg-vault-card border border-white/10 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                    <Sparkles size={120} className="text-vault-amber/20 mb-8 animate-float" />
                    <div className="space-y-6">
                        <div className="h-2 w-32 bg-vault-amber rounded-full"></div>
                        <div className="h-2 w-48 bg-white/10 rounded-full"></div>
                        <div className="h-2 w-40 bg-white/5 rounded-full"></div>
                    </div>
                    <div className="mt-12 p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-[10px] text-vault-amber/60">
                        {`> Initializing Gemini-1.5-Pro...`} <br/>
                        {`> Analyzing 12,402 public reports...`} <br/>
                        {`> Generating policy brief [Success]`}
                    </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem]">
                <Cpu className="text-vault-amber mb-6" size={32} />
                <h3 className="text-xl font-black text-white mb-4">Context Window</h3>
                <p className="text-sm text-slate-500 font-medium">Mampu menganalisis hingga 1 juta token data aspirasi secara simultan.</p>
            </div>
            <div className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem]">
                <Shield className="text-vault-amber mb-6" size={32} />
                <h3 className="text-xl font-black text-white mb-4">Spam Filter</h3>
                <p className="text-sm text-slate-500 font-medium">Algoritma moderasi otomatis untuk menjaga kualitas diskusi publik.</p>
            </div>
            <div className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem]">
                <Zap className="text-vault-amber mb-6" size={32} />
                <h3 className="text-xl font-black text-white mb-4">Clustering</h3>
                <p className="text-sm text-slate-500 font-medium">Pengelompokkan otomatis isu-isu serupa untuk efisiensi birokrasi.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
