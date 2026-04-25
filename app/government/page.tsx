"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Clock, 
  UserCheck, 
  Search,
  ChevronRight,
  Monitor,
  Layout,
  Lock,
  ArrowRight,
  Sparkles,
  Database,
  Cpu,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { useRole } from "@/hooks/useRole";
import GovernmentPostForm from "@/components/GovernmentPostForm";
import AccessRestricted from "@/components/AccessRestricted";

export default function GovernmentPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const { role, jurisdiction, isLoading } = useRole();

  if (isLoading) return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground p-6">
        <Loader2 className="animate-spin text-vault-amber mb-6" size={48} />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 italic">{t.verifyingInstitutional}</p>
    </div>
  );

  // If the user is logged in as GOVERNMENT or ADMIN, show the actual POSTING DASHBOARD
  if (role === "GOVERNMENT" || role === "ADMIN") {
      return (
        <div className="bg-background min-h-screen pt-40 pb-40 relative overflow-hidden text-foreground">
            <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
                        <ShieldCheck size={14} /> {t.authorityDashboard}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none italic mb-4">
                        Policy <span className="text-vault-amber">{lang === 'id' ? 'Kontrol.' : 'Control.'}</span>
                    </h1>
                    <p className="text-muted-foreground font-medium text-lg italic opacity-80">
                        {t.broadcastSub} <span className="text-foreground font-black underline">{jurisdiction || t.globalTerritory}</span>.
                    </p>
                </div>

                <GovernmentPostForm jurisdiction={jurisdiction || "GLOBAL"} author={role} />
            </div>
        </div>
      );
  }

  // ELSE: SHOW THE LANDING PAGE CONTENT (B2G MARKETING)
  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. GOVERNMENT HERO */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
                    <Sparkles size={14} /> Institutional Excellence (B2G)
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase italic">
                    Public <br/> 
                    <span className="text-vault-amber">Governance.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium italic opacity-80">
                  {t.govHeroSub}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/contact" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnRequestDemo} <ArrowRight size={22} />
                    </Link>
                    <Link href="/resources/whitepaper" className="px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-border hover:bg-muted transition-all text-foreground flex items-center justify-center">
                        Read Whitepaper
                    </Link>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-2 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-4 relative overflow-hidden border border-border shadow-inner">
                        <div className="bg-muted px-10 py-6 border-b border-border flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Monitor size={18} className="text-vault-amber" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground italic">Admin Intelligence v4.0</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                            </div>
                        </div>
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=2070&auto=format&fit=crop" 
                            alt="Dashboard Preview" 
                            className="w-full h-[400px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-80"
                        />
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. GOVERNMENT FEATURES */}
        <section className="mb-48">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-10 tracking-tighter uppercase leading-none italic">Sovereign Control</h2>
                <div className="h-2 w-32 bg-vault-amber mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                  { title: t.govFeature1, icon: <Layout className="text-blue-500" size={40} />, desc: lang === 'id' ? "Analisis data real-time untuk memantau sentimen publik dan isu kritis di setiap wilayah administratif." : "Real-time data analysis to monitor public sentiment and critical issues in each administrative region." },
                  { title: t.govFeature2, icon: <UserCheck className="text-vault-amber" size={40} />, desc: lang === 'id' ? "Sistem verifikasi identitas yang aman namun menjaga anonimitas pelapor, mencegah spam dan manipulasi." : "Secure identity verification system that maintains reporter anonymity, preventing spam and manipulation." },
                  { title: t.govFeature3, icon: <FileText className="text-green-500" size={40} />, desc: lang === 'id' ? "Otomasi penyusunan laporan kebijakan yang merangkum ribuan aspirasi menjadi poin-poin strategis." : "Automation of policy report preparation that summarizes thousands of aspirations into strategic points." }
                ].map((f, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] group shadow-inner hover:border-vault-amber/30 transition-all"
                    >
                        <div className="w-24 h-24 bg-background rounded-3xl flex items-center justify-center mb-10 border border-border shadow-xl group-hover:scale-110 transition-transform">
                            {f.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tighter leading-tight">{f.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed italic">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. CASE STUDY PREVIEW */}
        <section className="mb-48 bg-muted/30 border border-border rounded-[5rem] p-16 lg:p-32 overflow-hidden relative shadow-inner">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div className="space-y-16">
                    <h2 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter leading-none uppercase italic">
                        {lang === 'id' ? "Efisiensi Terukur" : "Measured Efficiency"}
                    </h2>
                    <div className="space-y-12">
                        <div className="flex gap-10 items-start group">
                            <div className="text-7xl font-black text-vault-amber italic leading-none group-hover:scale-110 transition-transform">70%</div>
                            <div className="pt-2">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-3 italic">Response Velocity</div>
                                <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                                    {lang === 'id' ? "Pengurangan waktu respons terhadap keluhan publik dibandingkan sistem birokrasi manual." : "Reduction in response time to public complaints compared to manual bureaucratic systems."}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-10 items-start group">
                            <div className="text-7xl font-black text-blue-500 italic leading-none group-hover:scale-110 transition-transform">100%</div>
                            <div className="pt-2">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-3 italic">Audit Compliance</div>
                                <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                                    {lang === 'id' ? "Transparansi data historis yang dapat diaudit secara publik melalui Blockchain Explorer." : "Transparency of historical data that can be audited publicly via Blockchain Explorer."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 relative">
                    <div className="p-12 bg-background border border-border rounded-[3.5rem] flex flex-col items-center justify-center text-center group hover:border-vault-amber/30 transition-all shadow-2xl">
                        <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                            <Database size={40} className="text-muted-foreground group-hover:text-vault-amber transition-colors" />
                        </div>
                        <div className="text-sm font-black uppercase tracking-widest text-foreground">Sovereign Data</div>
                    </div>
                    <div className="p-12 bg-background border border-border rounded-[3.5rem] flex flex-col items-center justify-center text-center translate-y-12 group hover:border-blue-500/30 transition-all shadow-2xl">
                        <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                            <Cpu size={40} className="text-muted-foreground group-hover:text-blue-500 transition-colors" />
                        </div>
                        <div className="text-sm font-black uppercase tracking-widest text-foreground">AI Policy Engine</div>
                    </div>
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-vault-amber/5 blur-[80px] -z-10"></div>
                </div>
            </div>
        </section>

        {/* 4. FINAL GOVERNMENT CTA */}
        <section className="p-20 md:p-32 bg-foreground border border-foreground rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-background rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <ShieldCheck size={48} className="text-vault-amber" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-background mb-10 tracking-tighter leading-[0.85] uppercase">
                    Modernize <br/> Authority.
                </h2>
                <p className="text-2xl text-background/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight opacity-80">
                    Jadikan Instansi Anda Pemimpin dalam Transparansi Digital. Build a trust-based relationship with your citizens through Dlibration.
                </p>
                <div className="flex justify-center">
                    <Link href="/contact" className="bg-vault-amber text-black px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">{t.btnRequestDemo}</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
