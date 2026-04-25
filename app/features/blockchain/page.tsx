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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 font-black text-[10px] tracking-[0.2em] uppercase mb-8">
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
                    <Link href="/dashboard" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-3 border border-border rounded-2xl bg-muted shadow-inner">
                        <Activity className="text-green-500 animate-pulse" size={18} />
                        <span className="text-[10px] font-black text-foreground uppercase tracking-widest italic">Mainnet Operational</span>
                    </div>
                </div>
            </motion.div>

            <div className="relative">
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="p-16 bg-background border border-border rounded-[3.5rem] relative overflow-hidden flex flex-col items-center justify-center shadow-inner">
                        <div className="absolute inset-0 bg-pattern-diagonal opacity-5"></div>
                        <div className="grid grid-cols-3 gap-6 mb-12">
                            {[1,2,3].map(i => (
                                <motion.div 
                                    key={i}
                                    animate={{ 
                                        y: [0, -15, 0],
                                        boxShadow: ["0 0 20px rgba(245,158,11,0)", "0 0 30px rgba(245,158,11,0.2)", "0 0 20px rgba(245,158,11,0)"]
                                    }}
                                    transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                                    className="w-24 h-24 bg-muted border border-border rounded-2xl flex items-center justify-center text-vault-amber shadow-sm"
                                >
                                    <Lock size={40} />
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex items-center gap-6 w-full px-8 opacity-40">
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-foreground"></div>
                            <div className="text-[10px] font-black text-foreground uppercase tracking-[0.3em] italic">Immutable Protocol Active</div>
                            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-foreground"></div>
                        </div>
                        <div className="mt-12 text-center">
                            <div className="text-5xl font-black text-foreground mb-2 tracking-tighter">#12,402,192</div>
                            <div className="text-[10px] font-black text-vault-amber uppercase tracking-[0.5em] italic">Current Block Height</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. SECURITY LAYERS GRID */}
        <section className="mb-48">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase leading-none">{pt.layerTitle}</h2>
                <div className="h-1.5 w-24 bg-vault-amber mx-auto rounded-full mb-8"></div>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium leading-relaxed">{pt.immutableSub}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: pt.sec1Title, desc: pt.sec1Desc, icon: <Fingerprint />, color: "text-blue-500" },
                    { title: pt.sec2Title, desc: pt.sec2Desc, icon: <Layers />, color: "text-vault-amber" },
                    { title: pt.sec3Title, desc: pt.sec3Desc, icon: <Server />, color: "text-green-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] group shadow-sm hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-10 bg-background w-24 h-24 flex items-center justify-center rounded-[2rem] border border-border shadow-inner transition-transform group-hover:scale-110`}>
                            {cloneElement(item.icon, { size: 48 })}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. AUDIT FLOW VISUALIZATION */}
        <section className="mb-48 bg-muted/50 border border-border rounded-[5rem] p-16 lg:p-32 overflow-hidden relative shadow-inner">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vault-amber/5 blur-[150px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div>
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-16 tracking-tighter leading-none uppercase">{pt.auditFlow}</h2>
                    <div className="space-y-16">
                        {[
                            { label: "01", title: pt.step1, desc: "Aspirasi dikonversi menjadi metadata terenkripsi secara on-device." },
                            { label: "02", title: pt.step2, desc: "Hash unik dihasilkan dan dikirim ke jaringan Base Layer-2." },
                            { label: "03", title: pt.step3, desc: "Node validator memverifikasi integritas payload secara konsensus." },
                            { label: "04", title: pt.step4, desc: "Data terkunci selamanya dalam ledger publik tak terhapus." }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-10 group">
                                <div className="text-5xl font-black text-foreground/5 group-hover:text-vault-amber transition-colors italic tracking-tighter">{step.label}</div>
                                <div>
                                    <h4 className="text-2xl font-black text-foreground mb-3 uppercase tracking-tighter leading-none">{step.title}</h4>
                                    <p className="text-lg text-muted-foreground font-medium leading-relaxed opacity-80">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-background border border-border rounded-[4rem] p-12 font-mono text-xs text-vault-amber/80 space-y-8 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-pattern-diagonal opacity-5"></div>
                        <div className="flex justify-between border-b border-border pb-6">
                            <span className="font-black uppercase opacity-40">TRANSACTION_HASH:</span>
                            <span className="text-blue-500 font-bold">0x8A2F...D91C1</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-6">
                            <span className="font-black uppercase opacity-40">FROM:</span>
                            <span className="text-foreground font-black">CITIZEN_V2_ENCRYPTED</span>
                        </div>
                        <div className="flex justify-between border-b border-border pb-6">
                            <span className="font-black uppercase opacity-40">STATUS:</span>
                            <span className="text-green-600 font-black animate-pulse">[SUCCESS_COMMITTED]</span>
                        </div>
                        <div className="pt-4 text-[10px] text-muted-foreground leading-relaxed bg-muted p-6 rounded-3xl border border-border shadow-inner">
                            {`{ 
  "payload": "On-chain_Archive_Active", 
  "consensus": "FINALIZED", 
  "node_id": "BASE_L2_MAINNET_01" 
}`}
                        </div>
                    </div>
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-vault-amber rounded-full blur-[100px] opacity-20"></div>
                </div>
            </div>
        </section>

        {/* 4. TRANSPARENCY STATS */}
        <section className="mb-48">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { label: pt.stat1, icon: <Activity className="text-green-600" /> },
                    { label: pt.stat2, icon: <Zap className="text-vault-amber" /> },
                    { label: pt.stat3, icon: <Globe className="text-blue-600" /> }
                ].map((item, i) => (
                    <div key={i} className="p-16 bg-muted/50 border border-border rounded-[4rem] flex flex-col items-center text-center shadow-sm hover:border-vault-amber/30 transition-all group">
                        <div className="mb-10 p-6 bg-background rounded-3xl border border-border shadow-inner group-hover:scale-110 transition-transform">
                            {cloneElement(item.icon, { size: 32 })}
                        </div>
                        <div className="text-2xl font-black text-foreground uppercase tracking-tighter leading-none">{item.label}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-blue-600 border border-blue-500/30 rounded-[6rem] text-center relative overflow-hidden group shadow-[0_0_100px_rgba(37,99,235,0.2)]">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Globe size={48} className="text-blue-600 animate-spin-slow" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                    Build a future <br/> without shadows.
                </h2>
                <p className="text-2xl text-white/80 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight">
                    Decentralization is not a choice, it is a human right. Start contributing to a truly transparent democracy.
                </p>
                <Link href="/dashboard" className="bg-white text-blue-600 px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                   <span className="relative z-10">{t.btnGetStarted}</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                   <div className="absolute inset-0 bg-blue-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
