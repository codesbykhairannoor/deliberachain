"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  PlayCircle, 
  Search, 
  Terminal, 
  ShieldCheck, 
  Database,
  ArrowRight,
  ExternalLink,
  Cpu,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Demo Header */}
        <div className="text-center mb-40 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-foreground mb-10 uppercase"
            >
              See the Future <br/> <span className="text-vault-amber">In Action.</span>
            </motion.h1>
            <div className="h-2 w-32 bg-vault-amber mx-auto rounded-full mb-10"></div>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed italic"
            >
              {lang === 'id' 
                ? "Eksplorasi simulasi interaktif bagaimana Dlibration mengelola aspirasi publik secara real-time dengan integrasi Gemini 2.0 dan Blockchain."
                : "Explore interactive simulations of how Dlibration manages public aspirations in real-time with Gemini 2.0 and Blockchain integration."}
            </motion.p>
        </div>

        {/* Video Player Mockup */}
        <div className="relative group mb-48">
            <div className="absolute -inset-10 bg-vault-amber/10 blur-[150px] rounded-full -z-10 group-hover:bg-vault-amber/20 transition-all duration-700"></div>
            <div className="relative aspect-video bg-muted border border-border rounded-[4rem] overflow-hidden flex items-center justify-center shadow-2xl p-2 md:p-4">
                <div className="absolute inset-0 bg-background rounded-[3.5rem] overflow-hidden border border-border">
                    <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                        alt="Demo Video Placeholder" 
                        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                </div>
                
                <button className="relative z-10 w-28 h-28 bg-vault-amber rounded-3xl flex items-center justify-center text-black hover:scale-110 transition-all shadow-[0_0_60px_rgba(245,158,11,0.4)] hover:bg-white active:scale-95 group/play">
                    <PlayCircle size={48} fill="currentColor" className="group-hover/play:rotate-12 transition-transform" />
                </button>
                
                <div className="absolute bottom-12 left-12 z-20 flex items-center gap-6 bg-background/80 backdrop-blur-xl border border-border px-8 py-4 rounded-2xl shadow-2xl">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Live Platform Simulation Alpha-V1 (1:45)</span>
                </div>
            </div>
        </div>

        {/* Interactive Explorer Mockup */}
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
                <div className="bg-muted border border-border rounded-[3.5rem] overflow-hidden shadow-inner p-1">
                    <div className="bg-background rounded-[3.2rem] overflow-hidden border border-border shadow-2xl">
                        <div className="bg-muted px-10 py-6 border-b border-border flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <Terminal size={20} className="text-vault-amber" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground italic">Blockchain Protocol Explorer Simulator</span>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-3 h-3 rounded-full bg-border"></div>
                                <div className="w-3 h-3 rounded-full bg-border"></div>
                                <div className="w-3 h-3 rounded-full bg-border"></div>
                            </div>
                        </div>
                        <div className="p-10 font-mono text-[11px] space-y-6 bg-muted/20">
                            <div className="flex gap-6 text-green-600 group/line"><span className="opacity-40 font-black">0x12f...</span> <span className="font-bold group-hover:translate-x-2 transition-transform">[COMMIT] Aspiration Submitted: "Perbaikan Jembatan Utama..."</span></div>
                            <div className="flex gap-6 text-vault-amber group/line"><span className="opacity-40 font-black">0x34a...</span> <span className="font-bold group-hover:translate-x-2 transition-transform">[PROCESS] Gemini 2.0 Clustering in progress...</span></div>
                            <div className="flex gap-6 text-blue-600 group/line"><span className="opacity-40 font-black">0x99b...</span> <span className="font-black group-hover:translate-x-2 transition-transform">[VERIFIED] Consensus reached on Base L2 Ledger.</span></div>
                            <div className="flex gap-6 text-muted-foreground animate-pulse"><span className="opacity-40 font-black">0x...</span> <span className="font-bold">Awaiting next cryptographic proof confirmation...</span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-muted/50 border border-border p-12 rounded-[3.5rem] flex flex-col justify-between shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-vault-amber">
                    <Sparkles size={120} />
                </div>
                <div className="relative z-10">
                    <h3 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none">Ready for Real?</h3>
                    <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-10 italic">
                        Experience the raw power of deliberative democracy. Connect your testnet wallet to interact with live data and smart contracts.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground/70">
                            <div className="w-10 h-10 bg-vault-amber/10 rounded-xl flex items-center justify-center text-vault-amber border border-vault-amber/20">
                                <ShieldCheck size={20} />
                            </div>
                            Zero Fee Testing
                        </div>
                        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground/70">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                                <Database size={20} />
                            </div>
                            Live Base L2 Sync
                        </div>
                        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground/70">
                            <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 border border-green-500/20">
                                <Cpu size={20} />
                            </div>
                            AI Inference Loop
                        </div>
                    </div>
                </div>
                <Link href="/dashboard" className="w-full bg-foreground text-background py-8 rounded-3xl font-black text-center mt-12 hover:bg-vault-amber hover:text-black transition-all flex items-center justify-center gap-4 text-xl shadow-2xl active:scale-95 uppercase tracking-widest">
                    Enter Portal <ArrowRight size={24} />
                </Link>
            </div>
        </div>

        {/* Technical Callout */}
        <div className="mt-48 text-center pt-24 border-t border-border">
            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.6em] mb-12 italic opacity-60">Engineered with State-of-the-art Stack</p>
            <div className="flex flex-wrap justify-center gap-20 grayscale opacity-30 group">
                <div className="flex items-center gap-3 font-black text-3xl tracking-tighter hover:grayscale-0 hover:opacity-100 transition-all cursor-default">NEXT.JS</div>
                <div className="flex items-center gap-3 font-black text-3xl tracking-tighter hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-vault-amber">GEMINI 2.0</div>
                <div className="flex items-center gap-3 font-black text-3xl tracking-tighter hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-blue-500">BASE L2</div>
                <div className="flex items-center gap-3 font-black text-3xl tracking-tighter hover:grayscale-0 hover:opacity-100 transition-all cursor-default">TURBOPACK</div>
            </div>
        </div>

      </div>
    </div>
  );
}
