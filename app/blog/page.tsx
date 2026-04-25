"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const posts = [
    {
      title: lang === 'id' ? "Masa Depan Demokrasi Digital di Indonesia" : "The Future of Digital Democracy in Indonesia",
      desc: lang === 'id' ? "Bagaimana teknologi blockchain dapat menyelesaikan masalah klasik manipulasi data dalam sistem aspirasi publik." : "How blockchain technology can solve classic data manipulation problems in public aspiration systems.",
      date: "Oct 24, 2026",
      readTime: "5 min read",
      tag: "Technology",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: lang === 'id' ? "Integrasi AI Gemini 1.5 Pro untuk Analisis Kebijakan" : "Gemini 1.5 Pro AI Integration for Policy Analysis",
      desc: lang === 'id' ? "Mempelajari bagaimana sistem kami meringkas ribuan suara rakyat menjadi poin-poin strategis bagi pemerintah." : "Learn how our system summarizes thousands of citizen voices into strategic points for the government.",
      date: "Oct 22, 2026",
      readTime: "8 min read",
      tag: "Artificial Intelligence",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: lang === 'id' ? "Transparansi Dana Desa melalui Ledger Publik" : "Village Fund Transparency through Public Ledgers",
      desc: lang === 'id' ? "Studi kasus implementasi Dlibration di wilayah percontohan Jawa Barat." : "Case study of Dlibration implementation in West Java pilot regions.",
      date: "Oct 20, 2026",
      readTime: "6 min read",
      tag: "Case Study",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. BLOG HERO - Centered Editorial Style */}
        <div className="mb-32 text-center max-w-4xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
            >
                Updates & Insights
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-12"
            >
              {t.blogHeroTitle} <br/> <span className="text-vault-amber">{t.blogHeroTitleGold}</span>
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-12 border-t border-white/5">
                <button className="px-6 py-2 rounded-full bg-vault-amber text-black font-black text-xs uppercase tracking-widest">{t.blogAllArticles}</button>
                <button className="px-6 py-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-all font-black text-xs uppercase tracking-widest">Technology</button>
                <button className="px-6 py-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-all font-black text-xs uppercase tracking-widest">Governance</button>
                <button className="px-6 py-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-all font-black text-xs uppercase tracking-widest">Community</button>
            </div>
        </div>

        {/* 2. FEATURED POST - Wide Horizontal Layout */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group mb-32 relative rounded-[4rem] overflow-hidden border border-white/10 h-[600px] flex items-end"
        >
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Featured Post" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="relative z-10 p-12 lg:p-24 w-full max-w-5xl">
                <div className="flex items-center gap-4 text-vault-amber font-black uppercase tracking-[0.3em] text-[10px] mb-8">
                    <Tag size={16} /> {t.blogFeatured}
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter group-hover:text-vault-amber transition-colors">Menuju Indonesia Emas 2045 dengan Infrastruktur Demokrasi Web3</h2>
                <div className="flex flex-wrap items-center gap-10 text-slate-400 text-xs font-bold uppercase tracking-widest mb-12">
                    <span className="flex items-center gap-3"><Calendar size={16}/> Oct 25, 2026</span>
                    <span className="flex items-center gap-3"><Clock size={16}/> 12 min read</span>
                </div>
                <Link href="#" className="inline-flex items-center gap-4 bg-vault-amber text-black px-12 py-6 rounded-2xl font-black text-lg transition-all hover:gap-8 shadow-2xl">
                    {t.blogReadMore} <ArrowRight size={24} />
                </Link>
            </div>
        </motion.div>

        {/* 3. BLOG GRID - Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-vault-card border border-white/5 rounded-[3rem] overflow-hidden hover:bg-white/[0.02] hover:border-white/20 transition-all"
                >
                    <div className="h-72 overflow-hidden relative">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-vault-amber border border-vault-amber/20">
                           {post.tag}
                        </div>
                    </div>
                    <div className="p-12">
                        <h3 className="text-2xl font-black text-white mb-6 leading-tight group-hover:text-vault-amber transition-colors line-clamp-2 tracking-tight">{post.title}</h3>
                        <p className="text-slate-500 font-medium text-sm mb-10 line-clamp-3 leading-relaxed">{post.desc}</p>
                        <div className="flex items-center justify-between pt-8 border-t border-white/5">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">{post.date}</span>
                            <Link href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-vault-amber hover:text-black hover:border-vault-amber transition-all shadow-xl">
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* 4. PAGINATION - Loop style icons */}
        <div className="mt-32 flex items-center justify-center gap-4">
             <button className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all"><ChevronLeft size={24} /></button>
             <button className="w-14 h-14 rounded-2xl bg-vault-amber text-black font-black shadow-2xl">1</button>
             <button className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all font-black text-sm">2</button>
             <button className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-all"><ChevronRight size={24} /></button>
        </div>

      </div>
    </div>
  );
}
