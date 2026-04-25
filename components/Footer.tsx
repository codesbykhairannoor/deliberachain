"use client";

import Link from "next/link";
import { useLanguageStore } from "../lib/store";
import { translations } from "../lib/translations";
import { 
  Twitter, 
  Instagram, 
  Github, 
  Linkedin, 
  Link as LinkIcon,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
                <div className="relative w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg group-hover:border-vault-amber/30 transition-all">
                    <LinkIcon size={14} className="text-vault-amber absolute -translate-x-0.5 -translate-y-0.5" />
                    <Sparkles size={12} className="text-white absolute translate-x-0.5 translate-y-0.5" />
                </div>
                <span className="text-xl font-black tracking-tight text-white">Deliberate<span className="text-vault-amber">Chain</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Membangun infrastruktur demokrasi digital yang transparan, aman, dan tak bisa dimanipulasi dengan kekuatan AI & Blockchain.
            </p>
            <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-vault-amber hover:text-black transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-vault-amber hover:text-black transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-vault-amber hover:text-black transition-all"><Github size={18} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Features</Link></li>
              <li><Link href="/solutions" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Solutions</Link></li>
              <li><Link href="/pricing" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Pricing</Link></li>
              <li><Link href="/demo" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Live Demo</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Blog</Link></li>
              <li><Link href="/guide" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Documentation</Link></li>
              <li><Link href="/community" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Community</Link></li>
              <li><Link href="/impact" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Impact Stories</Link></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Contact</Link></li>
              <li><Link href="/legal" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link href="/legal" className="text-slate-500 hover:text-vault-amber transition-colors text-sm font-medium">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">
            &copy; 2026 DeliberateChain Protocol. Built for a better future.
          </p>
          <div className="flex items-center gap-6">
             <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-green-500/50">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                All systems operational
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
