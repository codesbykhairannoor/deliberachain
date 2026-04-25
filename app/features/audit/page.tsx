"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  BarChart3, 
  ArrowRight, 
  Eye, 
  ShieldCheck, 
  Search, 
  Activity, 
  Lock, 
  Database,
  CheckCircle2,
  AlertCircle,
  Clock,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function AuditFeaturePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        auditTitle: "Arsitektur Transparansi",
        auditSub: "Dlibration membangun sistem audit yang tidak bisa dibantah, di mana setiap keputusan publik dapat dilacak hingga ke akarnya.",
        streamTitle: "Aliran Audit Real-Time",
        streamSub: "Melihat aktivitas validasi yang terjadi di jaringan Base secara langsung.",
        protocolTitle: "Protokol Verifikasi",
        proto1Title: "Hashing Aspirasi",
        proto1Desc: "Setiap teks dikonversi menjadi sidik jari digital unik yang tak bisa diubah.",
        proto2Title: "Validasi Multi-Node",
        proto2Desc: "Ribuan node blockchain memverifikasi keaslian data secara konsensus.",
        proto3Title: "Timestamp Abadi",
        proto3Desc: "Catatan waktu yang tidak bisa dimanipulasi untuk bukti sejarah.",
        openDataTitle: "Standar Data Terbuka",
        openDataDesc: "Kami menyediakan akses API publik bagi peneliti, jurnalis, dan aktivis untuk memverifikasi data secara mandiri.",
        point1: "Akses API JSON-RPC",
        point2: "Dataset Publik Terenkripsi",
        point3: "Integrasi Block Explorer"
    },
    en: {
        auditTitle: "Architecture of Transparency",
        auditSub: "Dlibration builds an incontrovertible audit system where every public decision can be traced back to its roots.",
        streamTitle: "Real-Time Audit Stream",
        streamSub: "Observe live validation activities occurring on the Base network.",
        protocolTitle: "Verification Protocols",
        proto1Title: "Aspiration Hashing",
        proto1Desc: "Every text is converted into a unique digital fingerprint that cannot be altered.",
        proto2Title: "Multi-Node Validation",
        proto2Desc: "Thousands of blockchain nodes verify data authenticity through consensus.",
        proto3Title: "Eternal Timestamp",
        proto3Desc: "Unmanipulatable time records for historical proof.",
        openDataTitle: "Open Data Standards",
        openDataDesc: "We provide public API access for researchers, journalists, and activists to verify data independently.",
        point1: "JSON-RPC API Access",
        point2: "Encrypted Public Datasets",
        point3: "Block Explorer Integration"
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <ShieldCheck size={14} /> Trust Architecture
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    Audit <br/> 
                    <span className="text-vault-amber">Universal.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Tidak ada lagi kotak hitam dalam birokrasi. Dlibration mentransformasi setiap langkah keputusan menjadi bukti digital yang dapat diverifikasi oleh siapa saja, kapan saja."
                      : "No more black boxes in bureaucracy. Dlibration transforms every decision step into digital proof that can be verified by anyone, at any time."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/dashboard" className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber transition-all shadow-2xl">
                        {t.navGlobal} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="bg-vault-card border border-white/10 p-2 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="bg-[#080808] rounded-[3.5rem] p-12 relative overflow-hidden">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <Eye className="text-vault-amber" size={32} />
                                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">Live Observer Active</div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center p-6 bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-[10px] font-black uppercase text-foreground">Aspiration_Verify_01</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-vault-amber">#8a2f...c1</span>
                                </div>
                                <div className="flex justify-between items-center p-6 bg-white/5 border border-white/10 rounded-2xl opacity-60">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-[10px] font-black uppercase text-foreground">Decision_Log_X</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-vault-amber">#12d0...a4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. REAL-TIME STREAM SECTION */}
        <section className="mb-48">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tighter uppercase">{pt.streamTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{pt.streamSub}</p>
            </div>
            <div className="bg-vault-card border border-white/10 rounded-[3rem] p-10 font-mono text-[11px] text-foreground/70 relative overflow-hidden h-[400px]">
                <div className="absolute inset-0 bg-pattern-diagonal opacity-5 pointer-events-none"></div>
                <div className="space-y-4">
                    {[1,2,3,4,5,6,7,8].map(i => (
                        <div key={i} className="flex gap-6 animate-pulse">
                            <span className="text-vault-amber/40 shrink-0">[{new Date().toISOString().split('T')[1].split('.')[0]}]</span>
                            <span className="text-blue-400 shrink-0 italic">TX_ID: {Math.random().toString(16).substring(2, 10)}</span>
                            <span className="truncate">Validating payload on Base Sepolia... {i % 2 === 0 ? 'SIGNATURE_MATCH' : 'BLOCK_COMMITTED'}</span>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vault-card to-transparent pointer-events-none"></div>
            </div>
        </section>

        {/* 3. PROTOCOL GRID */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.protocolTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: pt.proto1Title, desc: pt.proto1Desc, icon: <Lock /> },
                    { title: pt.proto2Title, desc: pt.proto2Desc, icon: <Database /> },
                    { title: pt.proto3Title, desc: pt.proto3Desc, icon: <Clock /> }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-12 bg-white/2 border border-white/10 rounded-[3rem] text-center flex flex-col items-center"
                    >
                        <div className="text-vault-amber mb-8 scale-150">{item.icon}</div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 4. OPEN DATA STANDARDS */}
        <section className="mb-48 bg-vault-amber/[0.02] border border-vault-amber/20 rounded-[5rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vault-amber/5 blur-[120px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="bg-black/60 border border-white/10 rounded-3xl p-8 font-mono text-xs text-green-500/80 space-y-4">
                        <div className="text-muted-foreground">// Dlibration Open Data Endpoint</div>
                        <div>
                            <span className="text-blue-400">GET</span> /api/v1/audit/summary?limit=10
                        </div>
                        <div className="text-vault-amber">
                            {`{ "status": "success", "data": [ { "id": "tx_492", "verified": true, "source": "BLOCKCHAIN" } ] }`}
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.openDataTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">{pt.openDataDesc}</p>
                    <div className="space-y-6">
                        {[pt.point1, pt.point2, pt.point3].map((point, i) => (
                            <div key={i} className="flex items-center gap-4 text-foreground font-bold">
                                <div className="w-10 h-10 bg-vault-amber/10 rounded-xl flex items-center justify-center text-vault-amber shrink-0">
                                    <CheckCircle2 size={20} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 bg-black border border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Globe size={80} className="text-vault-amber mx-auto mb-12 animate-spin-slow opacity-40" />
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                    Verify everything. <br/> Trust no one.
                </h2>
                <p className="text-xl text-white/60 mb-12 font-bold leading-relaxed">
                    Dlibration is built on the principle of radical auditability. Join us in creating a future where truth is immutable and public trust is earned through evidence.
                </p>
                <Link href="/dashboard" className="bg-vault-amber text-black px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   Start Auditing Now <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
