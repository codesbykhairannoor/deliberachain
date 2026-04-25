"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Zap, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  Cpu, 
  Lock,
  Layers,
  Search,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const features = [
    {
      title: t.featAiTitle,
      desc: t.featAiDesc,
      icon: <Search className="text-vault-amber" size={32} />,
      badge: "Gemini 1.5 Pro",
      href: "/features/ai"
    },
    {
      title: t.featChainTitle,
      desc: t.featChainDesc,
      icon: <Database className="text-blue-500" size={32} />,
      badge: "On-Chain",
      href: "/features/blockchain"
    },
    {
      title: t.featGovTitle,
      desc: t.featGovDesc,
      icon: <Sparkles className="text-yellow-400" size={32} />,
      badge: "AI Powered",
      href: "/features/gov"
    },
    {
      title: t.featAuditTitleShort,
      desc: "Transparency dashboard for every transaction and policy change.",
      icon: <BarChart3 className="text-green-500" size={32} />,
      badge: "Real-time",
      href: "/features/audit"
    },
    {
      title: "Immutable History",
      desc: "Policy records that cannot be erased or modified by anyone.",
      icon: <Lock className="text-red-500" size={32} />,
      badge: "Secure",
      href: "/features/blockchain"
    },
    {
      title: "Consensus Mechanism",
      desc: "Decentralized decision making with verified participation.",
      icon: <Layers className="text-purple-500" size={32} />,
      badge: "DAO",
      href: "/features/gov"
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. FEATURES HERO - Text on Right, Visual on Left */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-48">
            <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10"></div>
                <div className="grid grid-cols-2 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-square bg-vault-card border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:border-vault-amber/30 transition-all"
                    >
                        <ShieldCheck size={48} className="text-vault-amber mb-4 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-black text-white">Security</div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="aspect-square bg-vault-card border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:border-blue-500/30 transition-all translate-y-12"
                    >
                        <Database size={48} className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-black text-white">Transparency</div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="aspect-square bg-vault-card border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:border-yellow-400/30 transition-all -translate-y-12"
                    >
                        <Sparkles size={48} className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-black text-white">Intelligence</div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="aspect-square bg-vault-card border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:border-green-500/30 transition-all"
                    >
                        <BarChart3 size={48} className="text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-black text-white">Auditable</div>
                    </motion.div>
                </div>
            </div>

            <div className="order-1 lg:order-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
                >
                    Platform Capabilities
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-8"
                >
                  {t.featHeroTitle} <br/> <span className="text-vault-amber">{t.featHeroTitleGold}</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-slate-400 opacity-80 leading-relaxed mb-12"
                >
                  {lang === 'id' ? "Dlibration menggabungkan kecanggihan kecerdasan buatan dengan keamanan teknologi blockchain untuk menciptakan ekosistem demokrasi yang tak tertandingi." : "Dlibration combines sophisticated artificial intelligence with the security of blockchain technology to create an unparalleled democratic ecosystem."}
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Link href="/dashboard" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-vault-amber transition-all shadow-2xl">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </motion.div>
            </div>
        </div>

        {/* 2. FEATURE GRID - Responsive Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-vault-card border border-white/5 rounded-[2.5rem] hover:bg-white/[0.03] hover:border-vault-amber/30 transition-all duration-500 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                    {feat.icon}
                </div>
                
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-vault-amber/30 transition-all">
                  {feat.icon}
                </div>
                
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-500 mb-4 group-hover:text-vault-amber group-hover:border-vault-amber/30 transition-all">
                  {feat.badge}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feat.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{feat.desc}</p>
                
                <Link href={feat.href} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-vault-amber group-hover:gap-4 transition-all">
                    Explore Feature <ArrowRight size={14} />
                </Link>
            </motion.div>
          ))}
        </div>

        {/* 3. TECHNICAL ARCHITECTURE - Alternating Layout */}
        <div className="mt-48 space-y-32">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none">
                      Arsitektur Keamanan <br/> Berlapis
                    </h2>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-xl bg-vault-amber/10 flex items-center justify-center text-vault-amber shrink-0 border border-vault-amber/20">
                                <Lock size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">Advanced Cryptography</h4>
                                <p className="text-slate-500 leading-relaxed">Setiap laporan dienkripsi sebelum masuk ke IPFS untuk melindungi privasi sensitif pengguna.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-xl bg-vault-amber/10 flex items-center justify-center text-vault-amber shrink-0 border border-vault-amber/20">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-2">AI Content Guard</h4>
                                <p className="text-slate-500 leading-relaxed">Mendeteksi spam dan upaya manipulasi opini secara real-time dengan akurasi tinggi menggunakan Gemini 1.5.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white/2 border border-white/10 rounded-[3rem] aspect-square flex items-center justify-center relative overflow-hidden">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                    <div className="relative z-10 w-48 h-48 bg-vault-amber rounded-[3rem] flex items-center justify-center text-black shadow-[0_0_80px_rgba(245,158,11,0.4)] animate-bounce-slow">
                        <ShieldCheck size={100} />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
