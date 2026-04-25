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
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-40 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Demo Header */}
        <div className="text-center mb-32">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-8"
            >
              See the Future <br/> <span className="text-vault-amber">In Action.</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto opacity-80"
            >
              Eksplorasi simulasi interaktif bagaimana Dlibration mengelola aspirasi publik secara real-time.
            </motion.p>
        </div>

        {/* Video Player Mockup */}
        <div className="relative group mb-40">
            <div className="absolute -inset-10 bg-vault-amber/10 blur-[150px] rounded-full -z-10 group-hover:bg-vault-amber/20 transition-all"></div>
            <div className="relative aspect-video bg-vault-card border border-white/10 rounded-[3rem] overflow-hidden flex items-center justify-center shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Demo Video Placeholder" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                <button className="relative z-10 w-24 h-24 bg-vault-amber rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-[0_0_50px_rgba(245,158,11,0.5)] group-hover:bg-white">
                    <PlayCircle size={40} fill="currentColor" />
                </button>
                
                <div className="absolute bottom-12 left-12 z-20 flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-white">Live Platform Demo (1:45)</span>
                </div>
            </div>
        </div>

        {/* Interactive Explorer Mockup */}
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-black border border-white/10 rounded-[2.5rem] overflow-hidden">
                    <div className="bg-white/5 px-8 py-4 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Terminal size={18} className="text-vault-amber" />
                            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Blockchain Explorer Simulator</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                        </div>
                    </div>
                    <div className="p-8 font-mono text-sm space-y-4">
                        <div className="flex gap-4 text-green-500"><span className="opacity-40">0x12f...</span> <span>[COMMIT] Aspiration Submitted: "Perbaikan Jembatan..."</span></div>
                        <div className="flex gap-4 text-vault-amber"><span className="opacity-40">0x34a...</span> <span>[PROCESS] AI Clustering in progress...</span></div>
                        <div className="flex gap-4 text-blue-500"><span className="opacity-40">0x99b...</span> <span>[VERIFIED] Data stored on Base Sepolia Ledger.</span></div>
                        <div className="flex gap-4 text-slate-500 animate-pulse"><span className="opacity-40">0x...</span> <span>Awaiting next block confirmation...</span></div>
                    </div>
                </div>
            </div>
            
            <div className="bg-vault-card border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Uji Coba Langsung?</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                        Anda bisa langsung mencoba dashboard interaktif kami dengan mengoneksikan wallet testnet Anda.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                            <ShieldCheck size={16} className="text-vault-amber" /> Zero Fee Transactions
                        </div>
                        <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                            <Database size={16} className="text-vault-amber" /> Real Blockchain Sync
                        </div>
                        <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                            <Cpu size={16} className="text-vault-amber" /> Instant AI Feedback
                        </div>
                    </div>
                </div>
                <Link href="/dashboard" className="w-full bg-white text-black py-5 rounded-2xl font-black text-center mt-12 hover:bg-vault-amber transition-all flex items-center justify-center gap-2">
                    Enter Dashboard <ArrowRight size={18} />
                </Link>
            </div>
        </div>

        {/* Technical Callout */}
        <div className="mt-40 text-center">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Protocol Stack</p>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
                <div className="flex items-center gap-2 font-black text-2xl">NEXT.JS</div>
                <div className="flex items-center gap-2 font-black text-2xl">GEMINI AI</div>
                <div className="flex items-center gap-2 font-black text-2xl">THIRDWEB</div>
                <div className="flex items-center gap-2 font-black text-2xl">BASE</div>
            </div>
        </div>

      </div>
    </div>
  );
}
