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
  Globe,
  Sparkles
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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
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
                    <Link href="/dashboard" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.navGlobal} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-16 relative overflow-hidden border border-border shadow-inner">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <div className="p-3 bg-vault-amber/10 rounded-2xl border border-vault-amber/20">
                                    <Eye className="text-vault-amber" size={32} />
                                </div>
                                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic opacity-60">Live Observer Active</div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center p-6 bg-muted border border-border rounded-2xl shadow-sm group-hover:border-green-500/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                        <span className="text-[10px] font-black uppercase text-foreground tracking-widest">Aspiration_Verify_01</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-vault-amber font-bold">#8a2f...c1</span>
                                </div>
                                <div className="flex justify-between items-center p-6 bg-muted border border-border rounded-2xl opacity-60 shadow-sm group-hover:border-blue-500/30 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                        <span className="text-[10px] font-black uppercase text-foreground tracking-widest">Decision_Log_X</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-vault-amber font-bold">#12d0...a4</span>
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
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase leading-none">{pt.streamTitle}</h2>
                <div className="h-1.5 w-24 bg-vault-amber mx-auto rounded-full mb-8"></div>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">{pt.streamSub}</p>
            </div>
            <div className="bg-muted border border-border rounded-[4rem] p-12 font-mono text-xs text-foreground/80 relative overflow-hidden h-[450px] shadow-inner">
                <div className="absolute inset-0 bg-pattern-diagonal opacity-5 pointer-events-none"></div>
                <div className="space-y-6">
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                        <div key={i} className="flex gap-8 animate-pulse border-b border-border/50 pb-4 last:border-0">
                            <span className="text-vault-amber font-bold shrink-0">[{new Date().toISOString().split('T')[1].split('.')[0]}]</span>
                            <span className="text-blue-500 shrink-0 font-bold">TX_ID: {Math.random().toString(16).substring(2, 12).toUpperCase()}</span>
                            <span className="truncate font-medium">Validating structural integrity on Base network... {i % 2 === 0 ? 'SIGNATURE_MATCHED_OK' : 'BLOCK_COMMITTED_SUCCESS'}</span>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-muted to-transparent pointer-events-none"></div>
            </div>
        </section>

        {/* 3. PROTOCOL GRID */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none">{pt.protocolTitle}</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: pt.proto1Title, desc: pt.proto1Desc, icon: <Lock />, color: "text-blue-500" },
                    { title: pt.proto2Title, desc: pt.proto2Desc, icon: <Database />, color: "text-vault-amber" },
                    { title: pt.proto3Title, desc: pt.proto3Desc, icon: <Clock />, color: "text-green-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] text-center flex flex-col items-center shadow-sm hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-10 bg-background w-24 h-24 flex items-center justify-center rounded-[2rem] border border-border shadow-inner group-hover:scale-110 transition-transform`}>
                            {cloneElement(item.icon, { size: 40 })}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 4. OPEN DATA STANDARDS */}
        <section className="mb-48 bg-muted/50 border border-border rounded-[6rem] p-16 lg:p-32 overflow-hidden relative shadow-inner">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vault-amber/5 blur-[150px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="bg-background border border-border rounded-[3rem] p-12 font-mono text-[11px] text-green-600/80 space-y-6 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-pattern-diagonal opacity-5"></div>
                        <div className="text-muted-foreground font-black opacity-40 uppercase tracking-widest">// Dlibration Open Data Node API</div>
                        <div className="flex gap-4">
                            <span className="text-blue-600 font-black">GET</span> 
                            <span className="text-foreground font-bold">/api/v2/audit/ledger?region=GLOBAL</span>
                        </div>
                        <div className="text-vault-amber leading-relaxed bg-muted p-6 rounded-2xl border border-border shadow-inner">
                            {`{ 
  "status": "VALIDATED", 
  "consensus": "99.9%",
  "ledger": [ 
    { "tx": "0x7a2...c9", "verified": true } 
  ] 
}`}
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.openDataTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed italic">{pt.openDataDesc}</p>
                    <div className="space-y-8">
                        {[pt.point1, pt.point2, pt.point3].map((point, i) => (
                            <div key={i} className="flex items-center gap-6 text-foreground font-black uppercase text-xs tracking-widest">
                                <div className="w-12 h-12 bg-vault-amber/10 rounded-2xl flex items-center justify-center text-vault-amber shrink-0 border border-vault-amber/20 shadow-sm">
                                    <CheckCircle2 size={24} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-foreground border border-border rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-background border border-border rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Globe size={48} className="text-vault-amber animate-spin-slow" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-background mb-10 tracking-tighter leading-[0.85] uppercase">
                    Verify everything. <br/> Trust no one.
                </h2>
                <p className="text-2xl text-background/60 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight">
                    Dlibration is built on the principle of radical auditability. Join us in creating a future where truth is immutable and public trust is earned through evidence.
                </p>
                <Link href="/dashboard" className="bg-vault-amber text-black px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                   <span className="relative z-10">Start Auditing Now</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}

import { cloneElement } from "react";
