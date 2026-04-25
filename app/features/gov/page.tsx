"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Building2, 
  ArrowRight, 
  BarChart3, 
  Layout, 
  Users, 
  ShieldCheck, 
  FileText, 
  Zap, 
  PieChart, 
  Lock,
  Search,
  Bell,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function GovFeaturePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        adminTitle: "Pusat Kendali Birokrasi Modern",
        adminSub: "Transformasi layanan publik menjadi ekosistem berbasis data yang responsif dan terpercaya.",
        dashboardFeatures: "Fitur Dashboard Utama",
        feat1Title: "Analisis Sentimen Wilayah",
        feat1Desc: "Pahami apa yang dirasakan warga di tiap kecamatan secara real-time.",
        feat2Title: "Otomasi Policy Brief",
        feat2Desc: "AI menghasilkan draf kebijakan berdasarkan ribuan laporan yang serupa.",
        feat3Title: "Manajemen Respon Cepat",
        feat3Desc: "Tugaskan laporan ke departemen terkait hanya dengan satu klik.",
        complianceTitle: "Keamanan & Kepatuhan",
        compDesc: "Kami memenuhi standar keamanan data tertinggi untuk menjamin kedaulalan informasi negara.",
        point1: "Enkripsi End-to-End (AES-256)",
        point2: "Kepatuhan UU PDP & GDPR",
        point3: "Audit Log Tak Terbantahkan",
        ctaTitle: "Mulai Transformasi Digital Anda",
        ctaSub: "Jadwalkan demo eksklusif untuk melihat bagaimana Dlibration dapat meningkatkan efisiensi instansi Anda."
    },
    en: {
        adminTitle: "Modern Bureaucracy Command Center",
        adminSub: "Transform public services into a responsive and trusted data-driven ecosystem.",
        dashboardFeatures: "Core Dashboard Features",
        feat1Title: "Regional Sentiment Analysis",
        feat1Desc: "Understand what citizens feel in each district in real-time.",
        feat2Title: "Automated Policy Briefs",
        feat2Desc: "AI generates policy drafts based on thousands of similar reports.",
        feat3Title: "Rapid Response Management",
        feat3Desc: "Assign reports to relevant departments with just one click.",
        complianceTitle: "Security & Compliance",
        compDesc: "We meet the highest data security standards to guarantee national information sovereignty.",
        point1: "End-to-End Encryption (AES-256)",
        point2: "PDP & GDPR Compliance",
        point3: "Incontrovertible Audit Logs",
        ctaTitle: "Begin Your Digital Transformation",
        ctaSub: "Schedule an exclusive demo to see how Dlibration can increase your agency's efficiency."
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <Building2 size={14} /> Institutional Intelligence
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    {lang === 'id' ? "Birokrasi" : "Smart"} <br/> 
                    <span className="text-vault-amber">{lang === 'id' ? "Cerdas." : "Agency."}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Berdayakan instansi Anda dengan alat deliberasi berbasis AI. Dlibration membantu pemerintah daerah memahami kebutuhan rakyat secara presisi tanpa tumpukan kertas."
                      : "Empower your agency with AI-driven deliberation tools. Dlibration helps local governments understand citizen needs precisely without piles of paper."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/contact" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnRequestDemo} <ArrowRight size={22} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-3 border border-border rounded-2xl bg-muted shadow-inner">
                        <Lock className="text-vault-amber" size={18} />
                        <span className="text-[10px] font-black text-foreground uppercase tracking-widest italic">Enterprise-Grade Security</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-12 relative overflow-hidden border border-border shadow-inner">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-sm">
                                        <PieChart size={24} />
                                    </div>
                                    <span className="text-xs font-black text-foreground uppercase tracking-tighter">Executive Dashboard</span>
                                </div>
                                <div className="flex gap-3">
                                    <Bell size={20} className="text-muted-foreground opacity-50" />
                                    <Search size={20} className="text-muted-foreground opacity-50" />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-6 mb-10">
                                {[
                                    { label: "New Alerts", value: "24", color: "text-red-500" },
                                    { label: "Resolved", value: "89%", color: "text-green-500" },
                                    { label: "Sentiment", value: "Positive", color: "text-blue-500" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-muted border border-border rounded-2xl shadow-sm hover:border-vault-amber/30 transition-colors">
                                        <div className={`text-2xl font-black mb-1 ${stat.color} leading-none`}>{stat.value}</div>
                                        <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-5">
                                <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-4/5 bg-blue-500/40"></div>
                                </div>
                                <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-2/3 bg-vault-amber/40"></div>
                                </div>
                                <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-3/4 bg-green-500/40"></div>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-vault-amber/10 border border-vault-amber/20 rounded-3xl flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-4">
                                    <Sparkles className="text-vault-amber" size={20} />
                                    <span className="text-[10px] font-black text-vault-amber uppercase tracking-[0.2em]">AI Recommendation Ready</span>
                                </div>
                                <div className="px-5 py-2 bg-vault-amber text-black text-[10px] font-black rounded-full uppercase tracking-tighter cursor-pointer hover:scale-105 transition-transform">View Brief</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. DASHBOARD FEATURES GRID */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none">{pt.dashboardFeatures}</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: pt.feat1Title, desc: pt.feat1Desc, icon: <BarChart3 />, color: "text-blue-500" },
                    { title: pt.feat2Title, desc: pt.feat2Desc, icon: <FileText />, color: "text-vault-amber" },
                    { title: pt.feat3Title, desc: pt.feat3Desc, icon: <Users />, color: "text-green-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] group shadow-sm hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-10 transition-transform group-hover:scale-110 bg-background w-20 h-20 flex items-center justify-center rounded-3xl border border-border shadow-inner`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. COMPLIANCE & SECURITY SECTION */}
        <section className="mb-48 bg-muted/50 border border-border rounded-[5rem] p-16 lg:p-32 overflow-hidden relative shadow-inner">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vault-amber/5 blur-[150px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div>
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.complianceTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">{pt.compDesc}</p>
                    <div className="space-y-8">
                        {[pt.point1, pt.point2, pt.point3].map((point, i) => (
                            <div key={i} className="flex items-center gap-6 text-foreground font-black uppercase text-xs tracking-widest">
                                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 shrink-0 border border-green-500/20">
                                    <ShieldCheck size={24} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-background border border-border rounded-[4rem] p-16 text-center shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-pattern-diagonal opacity-5"></div>
                        <Lock size={120} className="text-vault-amber/10 mx-auto mb-10 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-black text-foreground mb-3 uppercase tracking-tighter italic">ISO 27001 Ready</div>
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em]">Institutional Grade Standard</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-blue-600 border border-blue-500/30 rounded-[6rem] text-center relative overflow-hidden group shadow-[0_0_100px_rgba(37,99,235,0.2)]">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Layout size={48} className="text-blue-600" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                    Ready to lead <br/> the transition?
                </h2>
                <p className="text-2xl text-white/80 mb-16 font-black leading-relaxed max-w-3xl mx-auto uppercase italic tracking-tight">
                    Join the ranks of modern administrations using Dlibration to bridge the trust gap with their citizens.
                </p>
                <Link href="/contact" className="bg-white text-blue-600 px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                   <span className="relative z-10">{t.btnRequestDemo}</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                   <div className="absolute inset-0 bg-blue-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
