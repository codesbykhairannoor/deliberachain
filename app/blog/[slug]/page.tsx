"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { blogPosts } from "@/lib/blogData";
import { translations } from "@/lib/translations";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Share2, 
  MessageSquare,
  ChevronRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const router = useRouter();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="text-center">
          <h1 className="text-4xl font-black text-foreground mb-4">404</h1>
          <p className="text-muted-foreground mb-8">Post not found</p>
          <button 
            onClick={() => router.push("/blog")}
            className="px-8 py-4 bg-vault-amber text-black rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const title = post.title[lang as "en" | "id"];
  const content = post.content[lang as "en" | "id"];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      {/* Background Decor */}
      <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-16 opacity-60">
            <Link href="/blog" className="hover:text-vault-amber transition-colors">Blog</Link>
            <ChevronRight size={12} className="opacity-30" />
            <span className="text-vault-amber truncate max-w-[200px] italic">{title}</span>
        </div>

        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
        >
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-black text-muted-foreground mb-10 uppercase tracking-widest">
                <div className="flex items-center gap-3 bg-muted border border-border px-5 py-2.5 rounded-full shadow-sm">
                    <Calendar size={14} className="text-vault-amber" /> {post.date}
                </div>
                <div className="flex items-center gap-3 bg-muted border border-border px-5 py-2.5 rounded-full shadow-sm">
                    <User size={14} className="text-vault-amber" /> {post.author}
                </div>
                <div className="flex items-center gap-3 bg-muted border border-border px-5 py-2.5 rounded-full shadow-sm">
                    <Clock size={14} className="text-vault-amber" /> {post.readTime}
                </div>
                <div className="flex items-center gap-3 bg-vault-amber/10 text-vault-amber border border-vault-amber/20 px-5 py-2.5 rounded-full shadow-sm italic">
                    {post.category}
                </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">
                {title}
            </h1>

            <div className="h-2 w-32 bg-vault-amber rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)]"></div>
        </motion.div>

        {/* Content Area */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-amber max-w-none mb-32 dark:prose-invert"
        >
            <div 
                className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium space-y-10 blog-content-wrapper"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </motion.div>

        {/* Footer Info */}
        <div className="pt-20 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
            <div className="flex flex-wrap gap-4">
                {post.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 bg-muted border border-border rounded-full text-muted-foreground shadow-sm hover:border-vault-amber/30 transition-colors">
                        <Tag size={14} className="opacity-50" /> {tag}
                    </div>
                ))}
            </div>
            
            <div className="flex items-center gap-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-60 italic">Share this impact:</span>
                <div className="flex gap-4">
                    {[1,2,3].map(i => (
                        <button key={i} className="w-12 h-12 bg-muted border border-border rounded-2xl flex items-center justify-center text-muted-foreground hover:text-vault-amber hover:border-vault-amber transition-all shadow-sm active:scale-90">
                            <Share2 size={20} />
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Related / Back */}
        <div className="mt-40 p-16 md:p-24 bg-muted border border-border rounded-[4rem] text-center relative overflow-hidden group shadow-2xl shadow-black/5">
            <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
            <div className="relative z-10">
                <div className="w-16 h-16 bg-background border border-border rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-sm group-hover:rotate-12 transition-transform">
                    <Sparkles size={32} className="text-vault-amber" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-8 uppercase tracking-tighter leading-none">Ready to learn more?</h3>
                <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-medium leading-relaxed">Explore other insights about how we are redefining digital democracy with Gemini 2.0 Flash and Blockchain.</p>
                <div className="flex justify-center gap-8">
                    <Link href="/blog" className="flex items-center gap-3 text-foreground font-black hover:text-vault-amber transition-all uppercase text-xs tracking-widest group/back">
                        <ArrowLeft size={24} className="group-hover/back:-translate-x-3 transition-transform" /> Back to Chronicle
                    </Link>
                </div>
            </div>
        </div>
      </div>
      
      <style jsx global>{`
        .blog-content-wrapper h2 {
            font-size: 2rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -0.05em;
            margin-top: 4rem;
            margin-bottom: 1.5rem;
            color: var(--foreground);
        }
        .blog-content-wrapper p {
            margin-bottom: 2rem;
            line-height: 1.8;
            opacity: 0.85;
        }
        .blog-content-wrapper blockquote {
            border-left: 6px solid var(--vault-amber);
            padding-left: 2rem;
            font-style: italic;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 4rem 0;
            color: var(--foreground);
        }
      `}</style>
    </div>
  );
}
