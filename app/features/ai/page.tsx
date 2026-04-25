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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      {/* Background Decor */}
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vault-amber/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

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
                    <Link href="/dashboard" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-3 border border-border rounded-2xl bg-muted shadow-inner backdrop-blur-sm">
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-800 flex items-center justify-center text-[10px] font-black text-white">AI</div>)}
                        </div>
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">Powered by Google AI</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-12 relative overflow-hidden border border-border shadow-inner">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                                </div>
                                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest opacity-60 font-black">ai-engine-v2.0-flash</div>
                            </div>
                            
                            <div className="space-y-10">
                                <div className="p-8 bg-muted border border-border rounded-3xl animate-pulse shadow-sm">
                                    <div className="h-2.5 w-full bg-vault-amber/30 rounded-full mb-4"></div>
                                    <div className="h-2.5 w-2/3 bg-muted-foreground/10 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-8 bg-vault-amber/5 border border-vault-amber/10 rounded-[2rem] text-center shadow-sm">
                                        <div className="text-3xl font-black text-vault-amber mb-2">1,242</div>
                                        <div className="text-[9px] font-black uppercase text-vault-amber/60 tracking-[0.2em]">Clusters</div>
                                    </div>
                                    <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[2rem] text-center shadow-sm">
                                        <div className="text-3xl font-black text-blue-500 mb-2">98.2%</div>
                                        <div className="text-[9px] font-black uppercase text-blue-400/60 tracking-[0.2em]">Confidence</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-muted border border-border rounded-3xl font-mono text-[10px] text-green-600/80 shadow-inner">
                                <span className="text-vault-amber font-bold">{`root@dlibration:~$`}</span> {`exec ai_analysis --all --deep`} <br/>
                                <span className="text-blue-500">{`[INFO]`}</span> {`Tokenizing public sentiments using Gemini 2.0...`} <br/>
                                <span className="text-blue-500">{`[INFO]`}</span> {`Applying multi-layer safety filters...`} <br/>
                                <span className="text-green-600 font-bold">{`[DONE]`}</span> {`Executive summary generated in 0.8s`}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. LIVE DEMO SIMULATION SECTION */}
        <section className="mb-48">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase leading-none">{pt.liveDemo}</h2>
                <div className="h-1.5 w-24 bg-vault-amber mx-auto rounded-full mb-8"></div>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">{pt.liveDemoSub}</p>
            </div>
            
            <div className="bg-muted border border-border rounded-[4rem] p-12 md:p-20 overflow-hidden relative shadow-2xl">
                <div className="grid lg:grid-cols-3 gap-20">
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-vault-amber uppercase tracking-[0.3em] mb-10 opacity-70 italic">Raw Aspirations Input</h4>
                        {[1,2,3].map(i => (
                            <div key={i} className="p-6 bg-background border border-border rounded-2xl opacity-60 shadow-sm hover:opacity-100 transition-opacity">
                                <p className="text-xs text-muted-foreground italic mb-4 font-medium leading-relaxed">"Saya merasa jalan di desa kami perlu perbaikan segera karena menghambat akses ekonomi keluarga kami..."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-muted rounded-full border border-border"></div>
                                    <span className="text-[10px] font-mono text-muted-foreground">0x42...f21</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <div className="w-28 h-28 bg-vault-amber rounded-[2rem] flex items-center justify-center text-black shadow-[0_0_80px_rgba(245,158,11,0.3)] animate-spin-slow relative z-10 border-4 border-black/5">
                            <Cpu size={48} />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-56 h-56 border-2 border-vault-amber/10 rounded-full animate-ping"></div>
                        </div>
                        <div className="mt-16 text-[10px] font-black uppercase tracking-[0.5em] text-vault-amber animate-pulse italic">Processing Insight...</div>
                    </div>
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-10 opacity-70 italic">AI Cognitive Output</h4>
                        <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[2.5rem] shadow-sm hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2 bg-blue-500/10 rounded-xl">
                                    <CheckCircle2 className="text-blue-500" size={24} />
                                </div>
                                <span className="text-xs font-black text-foreground uppercase tracking-widest">Category: INFRASTRUCTURE</span>
                            </div>
                            <p className="text-sm text-foreground font-black leading-relaxed italic opacity-80">
                                Majority of citizens (78.4%) in Sector A reported critical road damage. AI recommends high-priority budget allocation for Q3.
                            </p>
                        </div>
                        <div className="p-8 bg-muted border border-border rounded-[2.5rem] border-dashed text-center opacity-40">
                            <span className="text-[10px] font-black text-muted-foreground italic uppercase tracking-widest">Generating next brief...</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. WORKFLOW SECTION */}
        <section className="mb-48 bg-muted/30 border-y border-border py-32 -mx-6 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-32 tracking-tighter text-center uppercase leading-none">{pt.howItWorks}</h2>
                <div className="grid md:grid-cols-4 gap-16">
                    {[
                        { title: pt.step1Title, desc: pt.step1Desc, icon: <Database /> },
                        { title: pt.step2Title, desc: pt.step2Desc, icon: <Search /> },
                        { title: pt.step3Title, desc: pt.step3Desc, icon: <Zap /> },
                        { title: pt.step4Title, desc: pt.step4Desc, icon: <BarChart /> }
                    ].map((step, idx) => (
                        <div key={idx} className="relative group text-center md:text-left">
                            {idx < 3 && <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-vault-amber/40 to-transparent -z-10 opacity-20"></div>}
                            <div className="w-24 h-24 bg-background border border-border rounded-[2rem] flex items-center justify-center text-vault-amber mb-10 group-hover:scale-110 transition-transform group-hover:border-vault-amber shadow-xl mx-auto md:mx-0">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{step.title}</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed opacity-80">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. STAKEHOLDER BENEFITS SECTION */}
        <section className="mb-48">
            <div className="grid lg:grid-cols-2 gap-10">
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-16 bg-gradient-to-br from-vault-amber/10 to-background border border-vault-amber/20 rounded-[4rem] relative overflow-hidden shadow-xl group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-vault-amber/5 rounded-full blur-[100px] -z-10"></div>
                    <Building2 className="text-vault-amber mb-10 group-hover:rotate-12 transition-transform" size={80} />
                    <h3 className="text-4xl font-black text-foreground mb-8 uppercase tracking-tighter leading-none">For Governments</h3>
                    <p className="text-xl text-foreground font-medium leading-relaxed mb-12 opacity-80">{pt.benefitGov}</p>
                    <ul className="space-y-6">
                        {['Eliminate manual data entry', 'Reduce processing costs by 60%', 'Real-time constituent sentiment'].map(item => (
                            <li key={item} className="flex items-center gap-4 text-xs font-black text-vault-amber uppercase tracking-widest">
                                <div className="w-2 h-2 bg-vault-amber rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-16 bg-gradient-to-br from-blue-500/10 to-background border border-blue-500/20 rounded-[4rem] relative overflow-hidden shadow-xl group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>
                    <Users className="text-blue-500 mb-10 group-hover:rotate-12 transition-transform" size={80} />
                    <h3 className="text-4xl font-black text-foreground mb-8 uppercase tracking-tighter leading-none">For Citizens</h3>
                    <p className="text-xl text-foreground font-medium leading-relaxed mb-12 opacity-80">{pt.benefitCit}</p>
                    <ul className="space-y-6">
                        {['100% Objective analysis', 'Immediate feedback receipt', 'Anonymous participation'].map(item => (
                            <li key={item} className="flex items-center gap-4 text-xs font-black text-blue-500 uppercase tracking-widest">
                                <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>

        {/* 5. TECH SPECS GRID */}
        <section className="mb-48 text-center">
            <h2 className="text-[10px] font-black text-muted-foreground mb-20 uppercase tracking-[0.6em] opacity-60 italic">{pt.techSpecs}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {[pt.tech1, pt.tech2, pt.tech3, pt.tech4].map((spec, i) => (
                    <div key={i} className="p-10 bg-muted/50 border border-border rounded-[2.5rem] shadow-sm hover:border-vault-amber/20 transition-all group">
                        <div className="text-2xl font-black text-foreground mb-2 uppercase tracking-tighter group-hover:scale-110 transition-transform">{spec.split(' ')[0]}</div>
                        <div className="text-[8px] font-black text-muted-foreground uppercase mt-2 tracking-[0.2em] opacity-60">{spec.split(' ').slice(1).join(' ')}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* 6. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-vault-amber border border-vault-amber/30 rounded-[6rem] text-center relative overflow-hidden group shadow-[0_0_100px_rgba(245,158,11,0.2)]">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-black rounded-[2rem] flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles size={48} className="text-white animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.85] uppercase">
                    Ready to modernize <br/> your deliberation?
                </h2>
                <p className="text-2xl text-black/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight">
                    Join thousands of citizens and local governments using Dlibration to build a fairer, data-driven future today.
                </p>
                <Link href="/dashboard" className="bg-black text-white px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                   <span className="relative z-10">{t.btnGetStarted}</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                   <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
