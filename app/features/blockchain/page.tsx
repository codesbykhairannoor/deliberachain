"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Shield, 
  ArrowRight, 
  Database, 
  Lock, 
  Globe, 
  Link as LinkIcon, 
  Activity, 
  Eye, 
  Key,
  Layers,
  Server,
  Fingerprint,
  Zap,
  Cpu,
  Award,
  Check
} from "lucide-react";
import Link from "next/link";
import { cloneElement } from "react";

export default function BlockchainFeaturePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        immutableTitle: "Integritas Tanpa Kompromi",
        immutableSub: "Bagaimana Dlibration menjamin setiap kata yang Anda tulis menjadi sejarah yang tak bisa dihapus.",
        layerTitle: "Lapisan Keamanan Protokol",
        sec1Title: "Kriptografi Tingkat Militer",
        sec1Desc: "Setiap laporan ditandatangani secara digital menggunakan kunci privat unik Anda.",
        sec2Title: "Penyimpanan Terdesentralisasi",
        sec2Desc: "Dokumen lampiran disimpan di IPFS, memastikan tidak ada titik kegagalan tunggal.",
        sec3Title: "Base Layer-2",
        sec3Desc: "Menggunakan skalabilitas Ethereum untuk biaya rendah namun dengan keamanan maksimal.",
        auditFlow: "Alur Audit Publik",
        step1: "Aspirasi Dikirim",
        step2: "Pencatatan Hash",
        step3: "Validasi Node",
        step4: "Bukti Abadi",
        transparencyStats: "Statistik Transparansi",
        stat1: "Waktu Blok 2 Detik",
        stat2: "Biaya Transaksi $0.0001",
        stat3: "100% Uptime Jaringan",
    },
    en: {
        immutableTitle: "Uncompromising Integrity",
        immutableSub: "How Dlibration ensures every word you write becomes indelible history.",
        layerTitle: "Protocol Security Layers",
        sec1Title: "Military-Grade Cryptography",
        sec1Desc: "Every report is digitally signed using your unique private key.",
        sec2Title: "Decentralized Storage",
        sec2Desc: "Attachment documents are stored on IPFS, ensuring no single point of failure.",
        sec3Title: "Base Layer-2",
        sec3Desc: "Leveraging Ethereum's scalability for low costs with maximum security.",
        auditFlow: "Public Audit Flow",
        step1: "Aspiration Sent",
        step2: "Hash Recording",
        step3: "Node Validation",
        step4: "Eternal Proof",
        transparencyStats: "Transparency Statistics",
        stat1: "2s Block Time",
        stat2: "$0.0001 Tx Cost",
        stat3: "100% Network Uptime",
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <Database size={14} /> Decentralized Ledger
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    {lang === 'id' ? "Hukum" : "The Law"} <br/> 
                    <span className="text-vault-amber">Algoritma.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Kami menggantikan kepercayaan pada birokrasi dengan bukti matematis. Aspirasi Anda tidak lagi bergantung pada kertas, melainkan pada ribuan node blockchain yang saling memvalidasi."
                      : "We replace trust in bureaucracy with mathematical proof. Your aspirations no longer rely on paper, but on thousands of mutually validating blockchain nodes."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/dashboard" className="bg-vault-amber text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(245,158,11,0.3)]">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-2 border border-white/10 rounded-2xl bg-white/5">
                        <Activity className="text-green-500 animate-pulse" size={18} />
                        <span className="text-xs font-bold text-foreground">Mainnet Operational</span>
                    </div>
                </div>
            </motion.div>

            <div className="relative">
                <div className="bg-vault-card border border-white/10 p-2 rounded-[4rem] shadow-2xl relative overflow-hidden">
                    <div className="p-16 bg-[#080808] rounded-[3.5rem] relative overflow-hidden flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-pattern-diagonal opacity-5"></div>
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {[1,2,3].map(i => (
                                <motion.div 
                                    key={i}
                                    animate={{ 
                                        y: [0, -10, 0],
                                        boxShadow: ["0 0 20px rgba(245,158,11,0)", "0 0 20px rgba(245,158,11,0.2)", "0 0 20px rgba(245,158,11,0)"]
                                    }}
                                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                    className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-vault-amber"
                                >
                                    <Lock size={32} />
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 w-full px-8">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
                            <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">Immutable Connection</div>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
                        </div>
                        <div className="mt-12 text-center">
                            <div className="text-4xl font-black text-foreground mb-2">#12,402,192</div>
                            <div className="text-[10px] font-black text-vault-amber uppercase tracking-[0.4em]">Current Block Height</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. SECURITY LAYERS GRID */}
        <section className="mb-48">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tighter uppercase">{pt.layerTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{pt.immutableSub}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: pt.sec1Title, desc: pt.sec1Desc, icon: <Fingerprint />, color: "text-blue-400" },
                    { title: pt.sec2Title, desc: pt.sec2Desc, icon: <Layers />, color: "text-vault-amber" },
                    { title: pt.sec3Title, desc: pt.sec3Desc, icon: <Server />, color: "text-green-400" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-12 bg-white/2 border border-white/10 rounded-[3rem] group"
                    >
                        <div className={`${item.color} mb-8 transition-transform group-hover:scale-110`}>
                            {cloneElement(item.icon, { size: 48 })}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. AUDIT FLOW VISUALIZATION */}
        <section className="mb-48 bg-vault-amber/[0.03] border border-vault-amber/10 rounded-[4rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vault-amber/10 blur-[100px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.auditFlow}</h2>
                    <div className="space-y-12">
                        {[
                            { label: "01", title: pt.step1, desc: "Aspirasi dikonversi menjadi metadata terenkripsi." },
                            { label: "02", title: pt.step2, desc: "Hash unik dihasilkan dan dikirim ke jaringan Base." },
                            { label: "03", title: pt.step3, desc: "Node validator memverifikasi integritas payload." },
                            { label: "04", title: pt.step4, desc: "Data terkunci selamanya dalam ledger publik." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="text-4xl font-black text-white/10 group-hover:text-vault-amber transition-colors">{step.label}</div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground font-medium">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-black/40 border border-white/10 rounded-3xl p-8 font-mono text-xs text-vault-amber/80 space-y-4">
                        <div className="flex justify-between border-b border-white/5 pb-4">
                            <span>TRANSACTION_HASH:</span>
                            <span className="text-blue-400">0x8a2f...91c1</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-4">
                            <span>FROM:</span>
                            <span>0xCitizen_Auth</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-4">
                            <span>STATUS:</span>
                            <span className="text-green-500">[SUCCESS]</span>
                        </div>
                        <div className="pt-4 text-[10px] text-muted-foreground leading-relaxed">
                            {`{ "payload": "Fix road in Village A", "timestamp": "1714041600", "node_id": "BASE_SEP_01" }`}
                        </div>
                    </div>
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-vault-amber rounded-full blur-[80px] opacity-30"></div>
                </div>
            </div>
        </section>

        {/* 4. TRANSPARENCY STATS */}
        <section className="mb-48">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: pt.stat1, icon: <Activity className="text-green-500" /> },
                    { label: pt.stat2, icon: <Zap className="text-vault-amber" /> },
                    { label: pt.stat3, icon: <Globe className="text-blue-400" /> }
                ].map((item, i) => (
                    <div key={i} className="p-12 bg-white/2 border border-white/5 rounded-[2.5rem] flex flex-col items-center text-center">
                        <div className="mb-6 p-4 bg-white/5 rounded-2xl">{item.icon}</div>
                        <div className="text-2xl font-black text-foreground uppercase tracking-tight">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 bg-blue-600 border border-white/10 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Globe size={80} className="text-white mx-auto mb-12 animate-spin-slow opacity-20" />
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                    Build a future <br/> without shadows.
                </h2>
                <p className="text-xl text-white/80 mb-12 font-bold leading-relaxed">
                    Decentralization is not a choice, it is a human right. Start contributing to a truly transparent democracy.
                </p>
                <Link href="/dashboard" className="bg-white text-blue-600 px-16 py-8 rounded-3xl font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   {t.btnGetStarted} <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}

