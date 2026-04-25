"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Users, ArrowRight, Shield, Heart, Zap } from "lucide-react";
import Link from "next/link";

export default function CitizensSolutionPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    Empowering the People
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Suara Anda Adalah" : "Your Voice is"} <span className="text-vault-amber">Kekuatan Kami.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Kami memberikan platform yang aman, anonim, dan transparan bagi setiap warga untuk berpartisipasi dalam pembentukan kebijakan publik tanpa rasa takut."
                      : "We provide a safe, anonymous, and transparent platform for every citizen to participate in shaping public policy without fear."}
                </p>
                <Link href="/dashboard" className="bg-vault-amber text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all w-fit shadow-2xl">
                    {t.btnGetStarted} <ArrowRight size={22} />
                </Link>
            </div>
            <div className="relative">
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="p-12 bg-vault-card border border-white/10 rounded-[4rem] text-center">
                    <Users size={120} className="text-vault-amber mx-auto mb-8" />
                    <div className="text-3xl font-black text-foreground mb-4 italic">100% Digital</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest font-black">Citizen Sovereignty</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
