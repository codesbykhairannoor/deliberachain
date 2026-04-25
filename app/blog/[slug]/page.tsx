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
  ChevronRight
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
            className="px-8 py-4 bg-vault-amber text-black rounded-2xl font-black"
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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      {/* Background Decor */}
      <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vault-amber/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-12">
            <Link href="/blog" className="hover:text-vault-amber transition-colors">Blog</Link>
            <ChevronRight size={10} />
            <span className="text-vault-amber truncate max-w-[200px]">{title}</span>
        </div>

        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
        >
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-muted-foreground mb-8">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                    <Calendar size={14} className="text-vault-amber" /> {post.date}
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                    <User size={14} className="text-vault-amber" /> {post.author}
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                    <Clock size={14} className="text-vault-amber" /> {post.readTime}
                </div>
                <div className="flex items-center gap-2 bg-vault-amber/10 text-vault-amber px-4 py-2 rounded-full uppercase tracking-widest">
                    {post.category}
                </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-12 tracking-tighter leading-[0.95] uppercase">
                {title}
            </h1>

            <div className="h-1.5 w-32 bg-vault-amber rounded-full"></div>
        </motion.div>

        {/* Content Area */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-amber max-w-none mb-24"
        >
            <div 
                className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium space-y-8"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </motion.div>

        {/* Footer Info */}
        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="flex flex-wrap gap-4">
                {post.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-6 py-2 bg-white/5 border border-white/10 rounded-full text-muted-foreground">
                        <Tag size={12} /> {tag}
                    </div>
                ))}
            </div>
            
            <div className="flex items-center gap-6">
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Share this impact:</span>
                <div className="flex gap-4">
                    {[1,2,3].map(i => (
                        <button key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-vault-amber hover:border-vault-amber transition-all">
                            <Share2 size={18} />
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Related / Back */}
        <div className="mt-32 p-12 bg-vault-card border border-white/10 rounded-[3rem] text-center relative overflow-hidden group">
            <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
            <div className="relative z-10">
                <h3 className="text-2xl font-black text-foreground mb-6 uppercase">Ready to learn more?</h3>
                <p className="text-muted-foreground mb-10 max-w-md mx-auto">Explore other insights about how we are redefining digital democracy with AI and Blockchain.</p>
                <div className="flex justify-center gap-6">
                    <Link href="/blog" className="flex items-center gap-2 text-foreground font-black hover:text-vault-amber transition-all">
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
