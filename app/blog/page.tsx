"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { blogPosts } from "@/lib/blogData";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User, 
  Sparkles,
  Tag,
  Search
} from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      {/* Background Decor */}
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. BLOG HERO */}
        <div className="max-w-4xl mb-32">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
            >
                <Sparkles size={14} /> Insights & Updates
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase"
            >
              The <span className="text-vault-amber">Dlibration</span> <br/> Chronicle.
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl"
            >
              Explore our latest thoughts on democracy, technology, and the future of public participation.
            </motion.p>
        </div>

        {/* 2. FEATURED POST (First one) */}
        {blogPosts.length > 0 && (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-32 relative group"
            >
                <Link href={`/blog/${blogPosts[0].slug}`}>
                    <div className="p-10 lg:p-20 bg-muted border border-border rounded-[4rem] flex flex-col lg:flex-row gap-20 items-center hover:border-vault-amber/30 transition-all shadow-2xl relative overflow-hidden group/card shadow-black/5">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="lg:w-1/2 relative w-full">
                            <div className="aspect-[16/9] bg-background border border-border rounded-[3rem] flex items-center justify-center group-hover/card:scale-105 transition-transform duration-700 shadow-inner overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-vault-amber/10 to-blue-500/10 opacity-30"></div>
                                <Sparkles size={140} className="text-vault-amber/20 animate-pulse relative z-10" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative z-10">
                            <div className="flex items-center gap-4 text-[10px] font-black text-vault-amber uppercase tracking-[0.3em] mb-10">
                                <Tag size={16} /> Featured Story
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter leading-none uppercase">
                                {blogPosts[0].title[lang as "en" | "id"]}
                            </h2>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium line-clamp-2">
                                {blogPosts[0].excerpt[lang as "en" | "id"]}
                            </p>
                            <div className="flex items-center gap-8 text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-16 opacity-60">
                                <div className="flex items-center gap-3"><Calendar size={14} /> {blogPosts[0].date}</div>
                                <div className="flex items-center gap-3"><Clock size={14} /> {blogPosts[0].readTime}</div>
                            </div>
                            <div className="inline-flex items-center gap-4 text-foreground font-black text-xl group-hover/card:gap-8 transition-all uppercase tracking-tighter">
                                Read Insight <ArrowRight size={28} className="text-vault-amber" />
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        )}

        {/* 3. BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.slice(1).map((post, idx) => (
                <motion.div 
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                >
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <div className="p-12 bg-muted/50 border border-border rounded-[3.5rem] hover:bg-muted hover:border-vault-amber/20 transition-all flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-black/5">
                            <div className="flex items-center justify-between mb-10">
                                <div className="px-6 py-2 bg-vault-amber/10 text-vault-amber text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-vault-amber/20 shadow-sm">
                                    {post.category}
                                </div>
                                <div className="text-[9px] font-black text-muted-foreground uppercase tracking-widest italic opacity-50">
                                    {post.date}
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none group-hover:text-vault-amber transition-colors">
                                {post.title[lang as "en" | "id"]}
                            </h3>
                            
                            <p className="text-sm text-muted-foreground mb-16 font-medium leading-relaxed line-clamp-3">
                                {post.excerpt[lang as "en" | "id"]}
                            </p>
                            
                            <div className="mt-auto pt-10 border-t border-border flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">
                                    <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center overflow-hidden">
                                        <User size={12} className="opacity-50" />
                                    </div>
                                    {post.author}
                                </div>
                                <div className="w-12 h-12 bg-background border border-border rounded-2xl flex items-center justify-center text-foreground group-hover:bg-vault-amber group-hover:text-black group-hover:border-vault-amber transition-all shadow-sm">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>

        {/* 4. NEWSLETTER CTA (Simplified) */}
        <section className="mt-48 p-16 lg:p-32 bg-vault-amber border border-vault-amber/30 rounded-[5rem] text-center relative overflow-hidden group shadow-2xl shadow-vault-amber/20">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Search size={48} className="text-white opacity-40" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.85] uppercase">
                    Don't miss <br/> a single bit.
                </h2>
                <p className="text-2xl text-black/70 mb-16 font-black leading-relaxed max-w-3xl mx-auto uppercase italic tracking-tight">
                    Subscribe to our weekly digest for the latest on digital democracy and on-chain governance.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="px-10 py-6 bg-black/10 border-4 border-black/10 rounded-[2rem] font-black placeholder:text-black/30 focus:outline-none focus:border-black/30 text-black md:flex-1 uppercase text-sm tracking-widest"
                    />
                    <button className="bg-black text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95 uppercase tracking-widest text-sm">
                        Subscribe Now
                    </button>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
