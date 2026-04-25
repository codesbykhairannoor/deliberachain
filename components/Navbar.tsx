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
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import ClientOnly from "./ClientOnly";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

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
        { name: t.featAiTitleShort, href: "/features/ai", icon: <Sparkles size={20} />, desc: "Generative AI Analysis" },
        { name: t.featChainTitleShort, href: "/features/blockchain", icon: <Shield size={20} />, desc: "Immutable Ledger" },
        { name: t.featGovTitleShort, href: "/features/gov", icon: <Building2 size={20} />, desc: "Agency Dashboard" },
        { name: t.featAuditTitleShort, href: "/features/audit", icon: <BarChart3 size={20} />, desc: "Public Transparency" },
      ]
    },
    { 
      name: t.navSolutions, 
      id: "solutions",
      title: lang === 'id' ? "Solusi Sektoral" : "Sectoral Solutions",
      description: lang === 'id' ? "Implementasi khusus untuk berbagai lapisan masyarakat." : "Custom implementation for various social layers.",
      dropdown: [
        { name: t.solCitizensTitle, href: "/solutions/citizens", icon: <Users size={20} />, desc: "For the People" },
        { name: t.solGovTitle, href: "/solutions/governments", icon: <Zap size={20} />, desc: "For Smart Cities" },
        { name: t.solUniTitle, href: "/solutions/universities", icon: <GraduationCap size={20} />, desc: "For Campus Democracy" },
        { name: t.solNgoTitle, href: "/solutions/ngos", icon: <Heart size={20} />, desc: "For Social Impact" },
      ]
    },
    { 
      name: t.navResources, 
      id: "resources",
      title: lang === 'id' ? "Pusat Pengetahuan" : "Knowledge Center",
      description: lang === 'id' ? "Pelajari lebih lanjut tentang protokol dan panduan kami." : "Learn more about our protocol and guides.",
      dropdown: [
        { name: "Documentation", href: "/resources/docs", icon: <FileText size={20} />, desc: "Technical Guides" },
        { name: "Whitepaper", href: "/resources/whitepaper", icon: <BookOpen size={20} />, desc: "Protocol Vision" },
        { name: t.navBlog, href: "/blog", icon: <MessageSquare size={20} />, desc: "Latest Updates" },
      ]
    },
    { name: t.navImpact, href: "/impact" },
    { name: t.navPricing, href: "/pricing" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${scrolled ? "bg-background/80 backdrop-blur-2xl border-border py-4" : "bg-transparent border-transparent py-8"}`}>
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-vault-amber rounded-2xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:rotate-12 transition-transform">
              <Zap size={28} fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-foreground tracking-tighter">Dlibration<span className="text-vault-amber">.</span></span>
              <span className="text-[10px] font-black tracking-[0.4em] text-muted-foreground uppercase mt-1">Immutable Gov</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div 
                key={link.id || link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.id || null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button className={`flex items-center gap-2 px-4 py-2 text-[15px] font-bold transition-all hover:text-vault-amber ${activeDropdown === link.id ? "text-vault-amber" : "text-muted-foreground"}`}>
                    {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.id ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link href={link.href!} className={`px-4 py-2 text-[15px] font-bold transition-all hover:text-vault-amber ${pathname === link.href ? "text-vault-amber" : "text-muted-foreground"}`}>
                    {link.name}
                  </Link>
                )}

                {/* Vertical Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      className="absolute top-full left-0 pt-4 w-[340px]"
                    >
                      <div className="bg-vault-card border border-white/20 rounded-[2.5rem] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden relative">
                        <div className="absolute inset-0 bg-vault-amber/5 blur-[80px] -z-10"></div>
                        
                        <div className="flex flex-col gap-1">
                          {link.dropdown.map((item) => (
                            <Link 
                              key={item.href} 
                              href={item.href}
                              className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10"
                            >
                              <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground group-hover/item:text-vault-amber group-hover/item:bg-vault-amber/10 transition-all border border-white/5 group-hover/item:border-vault-amber/30 shadow-inner">
                                {item.icon}
                              </div>
                              <div className="flex-1">
                                <div className="text-[16px] font-black text-foreground group-hover/item:text-vault-amber transition-colors">{item.name}</div>
                                <div className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest mt-1 opacity-60 group-hover/item:opacity-100 transition-opacity">{item.desc}</div>
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
                <button onClick={() => setLang('id')} className={`px-4 py-1.5 text-xs rounded-lg font-black transition-all ${lang === 'id' ? 'bg-vault-amber text-black shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}>ID</button>
                <button onClick={() => setLang('en')} className={`px-4 py-1.5 text-xs rounded-lg font-black transition-all ${lang === 'en' ? 'bg-vault-amber text-black shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}>EN</button>
            </div>

            {/* Theme Toggle */}
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-vault-card border border-border text-foreground hover:text-vault-amber transition-all shadow-sm"
            >
                {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            
            <div className="hidden md:flex items-center gap-3">
               <ClientOnly>
                  <ConnectButton 
                      client={client} 
                      theme={theme === "dark" ? "dark" : "light"}
                      accountAbstraction={{
                          chain: baseSepolia,
                          sponsorGas: true,
                      }}
                      connectModal={{ size: "wide" }}
                      connectButton={{
                          className: "!bg-vault-amber !text-black !font-black !px-10 !py-4 !rounded-2xl !text-sm !shadow-[0_15px_30px_rgba(245,158,11,0.25)] hover:!scale-105 transition-transform uppercase !tracking-widest"
                      }}
                  />
               </ClientOnly>
            </div>

            <button 
              className="lg:hidden w-12 h-12 flex items-center justify-center text-foreground bg-white/5 rounded-2xl border border-white/10"
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
            className="fixed inset-0 z-[110] bg-background lg:hidden p-10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-16">
               <span className="text-3xl font-black text-foreground uppercase tracking-tighter">Menu<span className="text-vault-amber">.</span></span>
               <button onClick={() => setMobileMenuOpen(false)} className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-foreground border border-white/10 shadow-inner"><X size={32} /></button>
            </div>
            
            <div className="flex-1 space-y-12 overflow-y-auto pr-4 scrollbar-hide">
               {navLinks.map((link) => (
                 <div key={link.name} className="space-y-8">
                    {link.dropdown ? (
                      <>
                        <div className="flex flex-col">
                            <div className="text-2xl font-black uppercase tracking-tight text-foreground mb-1">{link.name}</div>
                        </div>
                        <div className="grid gap-10 pl-6 border-l border-white/5">
                           {link.dropdown.map(item => (
                             <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-foreground flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-vault-amber group-active:scale-110 transition-transform">
                                    {item.icon}
                                </div> 
                                <div className="flex flex-col">
                                    <span className="leading-none">{item.name}</span>
                                    <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-2">{item.desc}</span>
                                </div>
                             </Link>
                           ))}
                        </div>
                      </>
                    ) : (
                      <Link href={link.href!} onClick={() => setMobileMenuOpen(false)} className="text-4xl font-black text-foreground block uppercase tracking-tighter hover:text-vault-amber transition-colors">
                        {link.name}
                      </Link>
                    )}
                 </div>
               ))}
            </div>

            <div className="pt-12 border-t border-white/10 space-y-8">
               <div className="flex justify-center scale-110">
                  <ClientOnly>
                    <ConnectButton 
                        client={client} 
                        theme={theme === "dark" ? "dark" : "light"}
                        accountAbstraction={{
                            chain: baseSepolia,
                            sponsorGas: true,
                        }}
                        connectModal={{ size: "wide" }}
                        connectButton={{
                            className: "!bg-vault-amber !text-black !font-black !px-12 !py-6 !rounded-[2rem] !text-xl !shadow-2xl !w-full"
                        }}
                    />
                  </ClientOnly>
               </div>
               <div className="flex justify-center gap-6 pt-4">
                  <button onClick={() => { setLang('id'); setMobileMenuOpen(false); }} className={`flex-1 py-5 rounded-3xl font-black text-lg transition-all ${lang === 'id' ? 'bg-white text-black shadow-xl' : 'bg-white/5 text-muted-foreground border border-white/10'}`}>ID</button>
                  <button onClick={() => { setLang('en'); setMobileMenuOpen(false); }} className={`flex-1 py-5 rounded-3xl font-black text-lg transition-all ${lang === 'en' ? 'bg-white text-black shadow-xl' : 'bg-white/5 text-muted-foreground border border-white/10'}`}>EN</button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
