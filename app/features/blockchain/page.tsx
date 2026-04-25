"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Shield, ArrowRight, Database, Lock, Globe } from "lucide-react";
import Link from "next/link";

export default function BlockchainFeaturePage() {
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
                    Immutable Trust Ledger
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight">
                    {lang === 'id' ? "Aspirasi Abadi di" : "Eternal Aspirations on"} <span className="text-vault-amber">Base Blockchain.</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
                    {lang === 'id' 
                      ? "Setiap kata yang Anda suarakan dicatat secara permanen di ledger blockchain. Tidak ada yang bisa menghapus, mengubah, atau menyembunyikan kebenaran publik."
                      : "Every word you voice is permanently recorded on the blockchain ledger. No one can delete, alter, or hide the public truth."}
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
                    <Database size={120} className="text-vault-amber/20 mb-8 animate-float" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <div className="text-[8px] font-black uppercase text-muted-foreground mb-1">Block Height</div>
                            <div className="text-sm font-black text-foreground">#12,402,192</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                            <div className="text-[8px] font-black uppercase text-muted-foreground mb-1">Network</div>
                            <div className="text-sm font-black text-foreground italic">Base Sepolia</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem]">
                <Lock className="text-vault-amber mb-6" size={32} />
                <h3 className="text-xl font-black text-foreground mb-4">Anti-Censorship</h3>
                <p className="text-sm text-muted-foreground font-medium">Data yang sudah masuk ke blockchain tidak dapat dihapus oleh otoritas manapun.</p>
            </div>
            <div className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem]">
                <Shield className="text-vault-amber mb-6" size={32} />
                <h3 className="text-xl font-black text-foreground mb-4">Verifiability</h3>
                <p className="text-sm text-muted-foreground font-medium">Setiap warga dapat memverifikasi keaslian laporan melalui Hash ID unik.</p>
            </div>
            <div className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem]">
                <Globe className="text-vault-amber mb-6" size={32} />
                <h3 className="text-xl font-black text-foreground mb-4">Decentralized</h3>
                <p className="text-sm text-muted-foreground font-medium">Infrastruktur yang tersebar di ribuan node untuk menjamin ketersediaan data 24/7.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
