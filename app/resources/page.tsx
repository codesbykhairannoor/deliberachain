"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Search, 
  BookOpen, 
  FileText, 
  Video, 
  Terminal,
  ArrowRight,
  Download,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. RESOURCES HERO - Left Aligned with Search Bar */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-48">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
                >
                    Knowledge Base
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-none"
                >
                  {t.resHeroTitle} <br/> <span className="text-vault-amber">{t.resHeroTitleGold}</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground opacity-80 leading-relaxed mb-12 max-w-xl"
                >
                  {t.resHeroSub}
                </motion.p>
                
                {/* Large Search Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative group max-w-xl"
                >
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-vault-amber transition-colors" size={24} />
                    <input 
                        type="text" 
                        placeholder={t.resSearchPlaceholder} 
                        className="w-full bg-white/5 border border-white/10 p-6 pl-16 rounded-[2rem] text-foreground focus:border-vault-amber outline-none transition-all shadow-2xl" 
                    />
                </motion.div>
            </div>

            <div className="relative hidden lg:block">
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <div className="bg-vault-card border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                            <BookOpen size={48} className="text-vault-amber mb-4" />
                            <div className="text-sm font-black text-foreground">Guides</div>
                        </div>
                        <div className="bg-vault-card border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                            <Video size={48} className="text-blue-500 mb-4" />
                            <div className="text-sm font-black text-foreground">Tutorials</div>
                        </div>
                    </div>
                    <div className="space-y-6 pt-12">
                        <div className="bg-vault-card border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                            <FileText size={48} className="text-yellow-400 mb-4" />
                            <div className="text-sm font-black text-foreground">API Docs</div>
                        </div>
                        <div className="bg-vault-card border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-all">
                            <Terminal size={48} className="text-green-500 mb-4" />
                            <div className="text-sm font-black text-foreground">SDKs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. FEATURED RESOURCE - Wide Layout */}
        <div className="mb-48">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative bg-vault-card border border-white/10 rounded-[4rem] p-12 lg:p-24 overflow-hidden"
             >
                <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                <div className="absolute top-0 right-0 p-12 text-vault-amber/5 group-hover:text-vault-amber/10 transition-colors">
                    <FileText size={300} />
                </div>
                
                <div className="relative z-10 max-w-3xl">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-vault-amber mb-8">{t.resLatestWhitepaper}</div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight tracking-tighter">
                        {t.resWhitepaperTitle}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        {t.resWhitepaperDesc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-vault-amber text-black px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:scale-105 transition-all shadow-2xl">
                           <Download size={24} /> Download PDF
                        </button>
                        <button className="border border-white/10 text-foreground px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-white/5 transition-all">
                           Read Online <ExternalLink size={24} />
                        </button>
                    </div>
                </div>
             </motion.div>
        </div>

        {/* 3. CATEGORIES - Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-48">
            {[
              { title: "Technical Docs", items: ["Smart Contracts", "AI Prompting", "Node Setup"], color: "amber" },
              { title: "User Guides", items: ["Creating Wallet", "Submitting Issues", "Voter ID"], color: "blue" },
              { title: "Case Studies", items: ["Desa Digital", "Campus Voting", "Urban Planning"], color: "green" },
              { title: "Compliance", items: ["Privacy Policy", "Data Sovereignty", "Terms"], color: "slate" }
            ].map((cat, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem] hover:border-vault-amber/20 transition-all"
                >
                    <h4 className="text-xl font-black text-foreground mb-8 tracking-tight">{cat.title}</h4>
                    <ul className="space-y-4">
                        {cat.items.map(item => (
                            <li key={item}>
                                <Link href="#" className="flex items-center justify-between group/link text-muted-foreground hover:text-foreground transition-colors">
                                    <span className="text-sm font-bold">{item}</span>
                                    <ChevronRight size={14} className="text-vault-amber group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>

        {/* 4. LEARNING CENTER - NEW */}
        <section className="mb-48 p-20 bg-blue-600 border border-white/10 rounded-[5rem] relative overflow-hidden group">
            <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                        Dlibration <br/> Academy.
                    </h2>
                    <p className="text-xl text-white/80 mb-12 font-bold leading-relaxed">
                        Master the art of on-chain deliberation. Our free video courses teach you how to leverage AI and Blockchain for effective advocacy.
                    </p>
                    <button className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
                        Enter Academy <ArrowRight size={24} />
                    </button>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1 aspect-[4/5] bg-white/10 rounded-3xl backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-end">
                        <div className="text-white font-black text-lg mb-2">Web3 Basics</div>
                        <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">12 Modules</div>
                    </div>
                    <div className="flex-1 aspect-[4/5] bg-vault-amber rounded-3xl p-8 flex flex-col justify-end mt-12">
                        <div className="text-black font-black text-lg mb-2">AI Policy</div>
                        <div className="text-black/60 text-[10px] font-bold uppercase tracking-widest">8 Modules</div>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}
