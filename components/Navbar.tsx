"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  BarChart3,
  Users,
  Building2,
  GraduationCap,
  Heart,
  FileText,
  BookOpen,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const { lang, setLang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      name: t.navFeatures, 
      id: "features",
      title: lang === 'id' ? "Fitur Canggih" : "Advanced Features",
      description: lang === 'id' ? "Teknologi blockchain dan AI untuk transparansi total." : "Blockchain and AI tech for total transparency.",
      dropdown: [
        { name: t.featAiTitleShort, href: "/features/ai", icon: <Sparkles size={18} />, desc: "Gemini 1.5 Analysis" },
        { name: t.featChainTitleShort, href: "/features/blockchain", icon: <Shield size={18} />, desc: "Immutable Ledger" },
        { name: t.featGovTitleShort, href: "/features/gov", icon: <Building2 size={18} />, desc: "Agency Dashboard" },
        { name: t.featAuditTitleShort, href: "/features/audit", icon: <BarChart3 size={18} />, desc: "Public Transparency" },
      ]
    },
    { 
      name: t.navSolutions, 
      id: "solutions",
      title: lang === 'id' ? "Solusi Sektoral" : "Sectoral Solutions",
      description: lang === 'id' ? "Implementasi khusus untuk berbagai lapisan masyarakat." : "Custom implementation for various social layers.",
      dropdown: [
        { name: t.solCitizensTitle, href: "/solutions/citizens", icon: <Users size={18} />, desc: "For the People" },
        { name: t.solGovTitle, href: "/solutions/governments", icon: <Zap size={18} />, desc: "For Smart Cities" },
        { name: t.solUniTitle, href: "/solutions/universities", icon: <GraduationCap size={18} />, desc: "For Campus Democracy" },
        { name: t.solNgoTitle, href: "/solutions/ngos", icon: <Heart size={18} />, desc: "For Social Impact" },
      ]
    },
    { 
      name: t.navResources, 
      id: "resources",
      title: lang === 'id' ? "Pusat Pengetahuan" : "Knowledge Center",
      description: lang === 'id' ? "Pelajari lebih lanjut tentang protokol dan panduan kami." : "Learn more about our protocol and guides.",
      dropdown: [
        { name: "Documentation", href: "/resources/docs", icon: <FileText size={18} />, desc: "Technical Guides" },
        { name: "Whitepaper", href: "/resources/whitepaper", icon: <BookOpen size={18} />, desc: "Protocol Vision" },
        { name: t.navBlog, href: "/blog", icon: <MessageSquare size={18} />, desc: "Latest Updates" },
      ]
    },
    { name: t.navImpact, href: "/impact" },
    { name: t.navPricing, href: "/pricing" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`bg-background/90 backdrop-blur-3xl border border-border rounded-[2.5rem] px-8 py-5 flex items-center justify-between transition-all ${scrolled ? "shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-vault-amber/20" : ""}`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-vault-amber rounded-2xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:rotate-12 transition-transform">
              <Zap size={28} fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-white tracking-tighter uppercase">Dlibration<span className="text-vault-amber">.</span></span>
              <span className="text-[9px] font-black tracking-[0.4em] text-slate-500 uppercase mt-0.5">Immutable Gov</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <div 
                key={link.id || link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.id || null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold transition-colors hover:text-vault-amber ${activeDropdown === link.id ? "text-vault-amber" : "text-slate-400"}`}>
                    {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.id ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link href={link.href!} className={`px-4 py-2 text-sm font-bold transition-colors hover:text-white ${pathname === link.href ? "text-white" : "text-slate-400"}`}>
                    {link.name}
                  </Link>
                )}

                {/* Mega Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[450px]"
                    >
                      <div className="bg-vault-card border border-white/20 rounded-[2.5rem] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden relative">
                        <div className="absolute inset-0 bg-vault-amber/5 blur-[100px] -z-10"></div>
                        
                        {/* Section Info */}
                        <div className="mb-8 pb-6 border-b border-white/10">
                            <h4 className="text-lg font-black text-white mb-1">{link.title}</h4>
                            <p className="text-sm text-slate-500 font-medium">{link.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {link.dropdown.map((item) => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10"
                            >
                              <div className="mt-1 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover/item:text-vault-amber group-hover/item:bg-vault-amber/10 transition-all border border-white/5 group-hover/item:border-vault-amber/30">
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-black text-white group-hover/item:text-vault-amber transition-colors">{item.name}</div>
                                <div className="text-[11px] text-slate-500 font-bold leading-tight mt-1">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex bg-vault-card border border-border rounded-xl p-1 gap-1">
                <button onClick={() => setLang('id')} className={`px-4 py-1.5 text-xs rounded-lg font-black transition-all ${lang === 'id' ? 'bg-vault-amber text-black shadow-lg' : 'text-slate-500 hover:text-foreground'}`}>ID</button>
                <button onClick={() => setLang('en')} className={`px-4 py-1.5 text-xs rounded-lg font-black transition-all ${lang === 'en' ? 'bg-vault-amber text-black shadow-lg' : 'text-slate-500 hover:text-foreground'}`}>EN</button>
            </div>

            {/* Theme Toggle */}
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-vault-card border border-border text-foreground hover:text-vault-amber transition-all"
            >
                {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
            
            <div className="hidden md:flex items-center gap-3">
               <Link href="/dashboard" className="bg-vault-amber hover:bg-yellow-500 text-black px-8 py-3 rounded-2xl font-black text-sm transition-all shadow-[0_15px_30px_rgba(245,158,11,0.25)] flex items-center gap-2 group hover:scale-105 active:scale-95">
                  {t.btnGetStarted} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <button 
              className="lg:hidden w-12 h-12 flex items-center justify-center text-white bg-white/5 rounded-xl border border-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[110] bg-background lg:hidden p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
               <span className="text-3xl font-black text-white uppercase tracking-tighter">Menu<span className="text-vault-amber">.</span></span>
               <button onClick={() => setMobileMenuOpen(false)} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10"><X /></button>
            </div>
            
            <div className="flex-1 space-y-10 overflow-y-auto pr-4">
               {navLinks.map((link) => (
                 <div key={link.name} className="space-y-6">
                    {link.dropdown ? (
                      <>
                        <div className="flex flex-col">
                            <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 mb-2">{link.name}</div>
                            <div className="text-[10px] text-slate-500 font-bold">{link.description}</div>
                        </div>
                        <div className="grid gap-8 pl-4">
                           {link.dropdown.map(item => (
                             <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white flex items-center gap-5 group">
                                <span className="text-vault-amber group-active:scale-110 transition-transform">{item.icon}</span> {item.name}
                             </Link>
                           ))}
                        </div>
                      </>
                    ) : (
                      <Link href={link.href!} onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black text-white block uppercase tracking-tighter">
                        {link.name}
                      </Link>
                    )}
                 </div>
               ))}
            </div>

            <div className="pt-12 border-t border-white/10 space-y-4">
               <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="w-full bg-vault-amber text-black py-6 rounded-[2rem] font-black text-center block text-xl shadow-2xl">
                  {t.btnGetStarted}
               </Link>
               <div className="flex justify-center gap-4 pt-6">
                  <button onClick={() => { setLang('id'); setMobileMenuOpen(false); }} className={`flex-1 py-4 rounded-2xl font-black transition-all ${lang === 'id' ? 'bg-white text-black' : 'bg-white/5 text-slate-500 border border-white/10'}`}>ID</button>
                  <button onClick={() => { setLang('en'); setMobileMenuOpen(false); }} className={`flex-1 py-4 rounded-2xl font-black transition-all ${lang === 'en' ? 'bg-white text-black' : 'bg-white/5 text-slate-500 border border-white/10'}`}>EN</button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
