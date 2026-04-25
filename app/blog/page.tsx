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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vault-amber/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. BLOG HERO */}
        <div className="max-w-3xl mb-32">
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
                className="text-xl text-muted-foreground font-medium leading-relaxed"
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
                    <div className="p-12 lg:p-20 bg-vault-card border border-white/10 rounded-[4rem] flex flex-col lg:flex-row gap-16 items-center hover:border-vault-amber/30 transition-all shadow-2xl relative overflow-hidden">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-[16/9] bg-gradient-to-br from-vault-amber/20 to-blue-500/20 rounded-[3rem] flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform duration-700">
                                <Sparkles size={120} className="text-vault-amber/30 animate-pulse" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative z-10">
                            <div className="flex items-center gap-4 text-xs font-black text-vault-amber uppercase tracking-widest mb-8">
                                <Tag size={14} /> Featured Story
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tighter leading-tight uppercase">
                                {blogPosts[0].title[lang as "en" | "id"]}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium line-clamp-2">
                                {blogPosts[0].excerpt[lang as "en" | "id"]}
                            </p>
                            <div className="flex items-center gap-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-12">
                                <div className="flex items-center gap-2"><Calendar size={12} /> {blogPosts[0].date}</div>
                                <div className="flex items-center gap-2"><Clock size={12} /> {blogPosts[0].readTime}</div>
                            </div>
                            <div className="inline-flex items-center gap-3 text-vault-amber font-black text-lg group-hover:gap-5 transition-all">
                                Read Insight <ArrowRight size={22} />
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        )}

        {/* 3. BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, idx) => (
                <motion.div 
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <div className="p-10 bg-white/2 border border-white/5 rounded-[3rem] hover:bg-white/[0.04] hover:border-vault-amber/20 transition-all flex flex-col h-full">
                            <div className="flex items-center justify-between mb-8">
                                <div className="px-4 py-1.5 bg-vault-amber/10 text-vault-amber text-[9px] font-black uppercase tracking-widest rounded-full">
                                    {post.category}
                                </div>
                                <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                    {post.date}
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none group-hover:text-vault-amber transition-colors">
                                {post.title[lang as "en" | "id"]}
                            </h3>
                            
                            <p className="text-sm text-muted-foreground mb-12 font-medium leading-relaxed line-clamp-3">
                                {post.excerpt[lang as "en" | "id"]}
                            </p>
                            
                            <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[9px] font-black text-muted-foreground uppercase tracking-widest">
                                    <User size={10} /> {post.author}
                                </div>
                                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-muted-foreground group-hover:bg-vault-amber group-hover:text-black transition-all">
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>

        {/* 4. NEWSLETTER CTA (Simplified) */}
        <section className="mt-48 p-12 lg:p-24 bg-vault-amber border border-white/10 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Search size={64} className="text-black mx-auto mb-10 opacity-30" />
                <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-[0.9] uppercase">
                    Don't miss <br/> a single bit.
                </h2>
                <p className="text-xl text-black/70 mb-12 font-bold leading-relaxed">
                    Subscribe to our weekly digest for the latest on digital democracy and on-chain governance.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="px-8 py-5 bg-black/10 border-2 border-black/20 rounded-2xl font-bold placeholder:text-black/40 focus:outline-none focus:border-black/40 text-black md:w-96"
                    />
                    <button className="bg-black text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all">
                        Subscribe
                    </button>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
