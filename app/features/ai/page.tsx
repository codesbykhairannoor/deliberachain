"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Sparkles, 
  ArrowRight, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Search, 
  BarChart, 
  Lock, 
  Globe, 
  MessageSquare,
  CheckCircle2,
  Users,
  Building2
} from "lucide-react";
import Link from "next/link";

export default function AiFeaturePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        liveDemo: "Demo Analisis Live",
        liveDemoSub: "Melihat bagaimana Generative AI mengolah ribuan suara menjadi insight strategis.",
        howItWorks: "Cara Kerja Otak AI",
        step1Title: "Koleksi Data",
        step1Desc: "Menarik ribuan laporan dari blockchain secara real-time.",
        step2Title: "Vektor & Konteks",
        step2Desc: "Mengubah teks aspirasi menjadi representasi numerik untuk pemahaman makna.",
        step3Title: "Clustering Cerdas",
        step3Desc: "Mengelompokkan isu serupa untuk mendeteksi tren masalah di daerah.",
        step4Title: "Policy Brief",
        step4Desc: "Menghasilkan rekomendasi kebijakan yang didukung data empiris.",
        benefitsTitle: "Manfaat Nyata",
        benefitGov: "Pemerintah dapat merespon masalah 10x lebih cepat dengan data yang sudah terstruktur.",
        benefitCit: "Warga mendapatkan kepastian bahwa suara mereka dianalisis secara objektif tanpa bias manusia.",
        techSpecs: "Spesifikasi Teknis",
        tech1: "128k Context Window",
        tech2: "99.9% Akurasi Kategorisasi",
        tech3: "Latensi Analisis < 2 Detik",
        tech4: "Dukungan 50+ Dialek Lokal",
    },
    en: {
        liveDemo: "Live Analysis Demo",
        liveDemoSub: "Observe how Generative AI processes thousands of voices into strategic insights.",
        howItWorks: "How the AI Brain Works",
        step1Title: "Data Collection",
        step1Desc: "Pulling thousands of reports from the blockchain in real-time.",
        step2Title: "Vector & Context",
        step2Desc: "Converting aspiration text into numerical representations for semantic understanding.",
        step3Title: "Smart Clustering",
        step3Desc: "Grouping similar issues to detect regional problem trends.",
        step4Title: "Policy Brief",
        step4Desc: "Generating policy recommendations backed by empirical data.",
        benefitsTitle: "Real Benefits",
        benefitGov: "Governments can respond to issues 10x faster with pre-structured data.",
        benefitCit: "Citizens gain assurance that their voices are analyzed objectively without human bias.",
        techSpecs: "Technical Specifications",
        tech1: "128k Context Window",
        tech2: "99.9% Categorization Accuracy",
        tech3: "Analysis Latency < 2 Seconds",
        tech4: "Supports 50+ Local Dialects",
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vault-amber/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <Sparkles size={14} /> Intelligence Layer
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    {lang === 'id' ? "Otak" : "The Brain"} <br/> 
                    <span className="text-vault-amber">Demokrasi.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Dlibration menggunakan Gemini 2.0 Flash untuk mentransformasi tumpukan data menjadi kebijakan nyata. Tidak ada lagi aspirasi yang terabaikan karena keterbatasan birokrasi."
                      : "Dlibration utilizes Gemini 2.0 Flash to transform piles of data into real policies. No more ignored aspirations due to bureaucratic limitations."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/dashboard" className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber transition-all shadow-2xl">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-2 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-800 flex items-center justify-center text-[10px] font-black">AI</div>)}
                        </div>
                        <span className="text-xs font-bold text-muted-foreground italic">Powered by Google AI</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="bg-vault-card border border-white/10 p-2 rounded-[3.5rem] shadow-2xl overflow-hidden group">
                    <div className="bg-[#050505] rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">ai-engine-v1.0</div>
                            </div>
                            
                            <div className="space-y-8">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl animate-pulse">
                                    <div className="h-2 w-full bg-vault-amber/40 rounded-full mb-3"></div>
                                    <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-vault-amber/10 border border-vault-amber/20 rounded-2xl text-center">
                                        <div className="text-2xl font-black text-vault-amber mb-1">1,242</div>
                                        <div className="text-[8px] font-black uppercase text-vault-amber/60 tracking-widest">Clusters</div>
                                    </div>
                                    <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center">
                                        <div className="text-2xl font-black text-blue-400 mb-1">98.2%</div>
                                        <div className="text-[8px] font-black uppercase text-blue-400/60 tracking-widest">Confidence</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-black rounded-2xl border border-white/5 font-mono text-[10px] text-green-500/60">
                                <span className="text-vault-amber">{`root@dlibration:~$`}</span> {`exec ai_analysis --all`} <br/>
                                <span className="text-blue-400">{`[INFO]`}</span> {`Tokenizing public sentiments...`} <br/>
                                <span className="text-blue-400">{`[INFO]`}</span> {`Applying safety filters...`} <br/>
                                <span className="text-green-400">{`[DONE]`}</span> {`Summary generated in 1.4s`}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. LIVE DEMO SIMULATION SECTION */}
        <section className="mb-48">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tighter uppercase">{pt.liveDemo}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{pt.liveDemoSub}</p>
            </div>
            
            <div className="bg-vault-card border border-white/10 rounded-[3rem] p-12 overflow-hidden relative">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-vault-amber uppercase tracking-widest mb-8">Raw Aspirations</h4>
                        {[1,2,3].map(i => (
                            <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl opacity-60">
                                <p className="text-[10px] text-muted-foreground italic mb-2">"Saya merasa jalan di desa kami perlu perbaikan segera karena menghambat akses ekonomi..."</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-slate-700 rounded-full"></div>
                                    <span className="text-[9px] text-slate-500">0x42...f21</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <div className="w-24 h-24 bg-vault-amber rounded-3xl flex items-center justify-center text-black shadow-[0_0_50px_rgba(245,158,11,0.4)] animate-spin-slow relative z-10">
                            <Cpu size={40} />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 border border-vault-amber/20 rounded-full animate-ping"></div>
                        </div>
                        <div className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-vault-amber">Processing Insight</div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-8">AI Cluster Output</h4>
                        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="text-blue-400" size={18} />
                                <span className="text-xs font-black text-foreground uppercase tracking-tight">Kategori: Infrastruktur</span>
                            </div>
                            <p className="text-sm text-foreground font-medium leading-relaxed">
                                Mayoritas warga (78%) di Sektor A melaporkan kerusakan jalan. AI merekomendasikan prioritas perbaikan pada kuartal depan.
                            </p>
                        </div>
                        <div className="p-6 bg-white/2 border border-white/10 rounded-2xl border-dashed">
                            <span className="text-[10px] font-bold text-muted-foreground italic">Generating next brief...</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. WORKFLOW SECTION */}
        <section className="mb-48 bg-white/[0.02] border-y border-white/5 py-32 -mx-6 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.howItWorks}</h2>
                <div className="grid md:grid-cols-4 gap-12">
                    {[
                        { title: pt.step1Title, desc: pt.step1Desc, icon: <Database /> },
                        { title: pt.step2Title, desc: pt.step2Desc, icon: <Search /> },
                        { title: pt.step3Title, desc: pt.step3Desc, icon: <Zap /> },
                        { title: pt.step4Title, desc: pt.step4Desc, icon: <BarChart /> }
                    ].map((step, idx) => (
                        <div key={idx} className="relative group">
                            {idx < 3 && <div className="hidden md:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-vault-amber/30 to-transparent -z-10"></div>}
                            <div className="w-20 h-20 bg-vault-card border border-white/10 rounded-2xl flex items-center justify-center text-vault-amber mb-8 group-hover:scale-110 transition-transform group-hover:border-vault-amber/50">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. STAKEHOLDER BENEFITS SECTION */}
        <section className="mb-48">
            <div className="grid lg:grid-cols-2 gap-12">
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-16 bg-gradient-to-br from-vault-amber/20 to-transparent border border-vault-amber/20 rounded-[4rem] relative overflow-hidden"
                >
                    <Building2 className="text-vault-amber mb-8" size={64} />
                    <h3 className="text-4xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none">For Governments</h3>
                    <p className="text-xl text-foreground/80 font-medium leading-relaxed mb-10">{pt.benefitGov}</p>
                    <ul className="space-y-4">
                        {['Eliminate manual data entry', 'Reduce processing costs by 60%', 'Real-time constituent sentiment'].map(item => (
                            <li key={item} className="flex items-center gap-3 text-sm font-bold text-vault-amber">
                                <div className="w-1.5 h-1.5 bg-vault-amber rounded-full"></div> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-16 bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20 rounded-[4rem] relative overflow-hidden"
                >
                    <Users className="text-blue-400 mb-8" size={64} />
                    <h3 className="text-4xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none">For Citizens</h3>
                    <p className="text-xl text-foreground/80 font-medium leading-relaxed mb-10">{pt.benefitCit}</p>
                    <ul className="space-y-4">
                        {['100% Objective analysis', 'Immediate feedback receipt', 'Anonymous participation'].map(item => (
                            <li key={item} className="flex items-center gap-3 text-sm font-bold text-blue-400">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>

        {/* 5. TECH SPECS GRID */}
        <section className="mb-48 text-center">
            <h2 className="text-2xl font-black text-muted-foreground mb-16 uppercase tracking-[0.5em] opacity-40">{pt.techSpecs}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[pt.tech1, pt.tech2, pt.tech3, pt.tech4].map((spec, i) => (
                    <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                        <div className="text-xl font-black text-foreground">{spec.split(' ')[0]}</div>
                        <div className="text-[10px] font-black text-muted-foreground uppercase mt-1 tracking-widest">{spec.split(' ').slice(1).join(' ')}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="p-12 lg:p-24 bg-vault-amber border border-white/10 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Sparkles size={80} className="text-black mx-auto mb-12 animate-float" />
                <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-[0.9] uppercase">
                    Ready to modernize <br/> your deliberation?
                </h2>
                <p className="text-xl text-black/70 mb-12 font-bold leading-relaxed">
                    Join thousands of citizens and local governments using Dlibration to build a fairer, data-driven future today.
                </p>
                <Link href="/dashboard" className="bg-black text-white px-16 py-8 rounded-3xl font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   {t.btnGetStarted} <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
