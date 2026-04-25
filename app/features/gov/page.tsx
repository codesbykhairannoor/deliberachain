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
  Bell
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
        compDesc: "Kami memenuhi standar keamanan data tertinggi untuk menjamin kedaulatan informasi negara.",
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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 font-black text-[10px] tracking-[0.2em] uppercase mb-8">
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
                    <Link href="/contact" className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber transition-all shadow-2xl">
                        {t.btnRequestDemo} <ArrowRight size={22} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-2 border border-white/10 rounded-2xl bg-white/5">
                        <Lock className="text-vault-amber" size={18} />
                        <span className="text-xs font-bold text-foreground italic">Enterprise-Grade Security</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="bg-vault-card border border-white/10 p-2 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="bg-[#050505] rounded-[3.5rem] p-12 relative overflow-hidden">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                                        <PieChart size={20} />
                                    </div>
                                    <span className="text-sm font-black text-foreground uppercase tracking-tight">Executive Dashboard</span>
                                </div>
                                <div className="flex gap-2">
                                    <Bell size={18} className="text-muted-foreground" />
                                    <Search size={18} className="text-muted-foreground" />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {[
                                    { label: "New Alerts", value: "24", color: "text-red-400" },
                                    { label: "Resolved", value: "89%", color: "text-green-400" },
                                    { label: "Sentiment", value: "Positive", color: "text-blue-400" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                        <div className={`text-xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                                        <div className="text-[7px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <div className="h-2 w-full bg-white/5 rounded-full"></div>
                                <div className="h-2 w-4/5 bg-white/5 rounded-full"></div>
                                <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
                            </div>

                            <div className="mt-10 p-6 bg-vault-amber/10 border border-vault-amber/20 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Zap className="text-vault-amber" size={16} />
                                    <span className="text-[10px] font-black text-vault-amber uppercase tracking-widest">AI Recommendation Ready</span>
                                </div>
                                <div className="px-3 py-1 bg-vault-amber text-black text-[8px] font-black rounded-full uppercase">View Brief</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. DASHBOARD FEATURES GRID */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.dashboardFeatures}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: pt.feat1Title, desc: pt.feat1Desc, icon: <BarChart3 />, color: "text-blue-400" },
                    { title: pt.feat2Title, desc: pt.feat2Desc, icon: <FileText />, color: "text-vault-amber" },
                    { title: pt.feat3Title, desc: pt.feat3Desc, icon: <Users />, color: "text-green-400" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-12 bg-white/2 border border-white/10 rounded-[3rem] group"
                    >
                        <div className={`${item.color} mb-8 transition-transform group-hover:scale-110`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. COMPLIANCE & SECURITY SECTION */}
        <section className="mb-48 bg-white/[0.02] border border-white/10 rounded-[4rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vault-amber/5 blur-[100px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.complianceTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">{pt.compDesc}</p>
                    <div className="space-y-6">
                        {[pt.point1, pt.point2, pt.point3].map((point, i) => (
                            <div key={i} className="flex items-center gap-4 text-foreground font-bold">
                                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-vault-card border border-white/10 rounded-[3rem] p-12 text-center">
                        <Lock size={100} className="text-vault-amber/20 mx-auto mb-8" />
                        <div className="text-2xl font-black text-foreground mb-2 italic">ISO 27001 Ready</div>
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Digital Evidence Standard</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. CALL TO ACTION */}
        <section className="p-20 bg-blue-600 border border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Layout size={80} className="text-white mx-auto mb-12 animate-float opacity-30" />
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                    Ready to lead <br/> the transition?
                </h2>
                <p className="text-xl text-white/80 mb-12 font-bold leading-relaxed">
                    Join the ranks of modern administrations using Dlibration to bridge the trust gap with their citizens.
                </p>
                <Link href="/contact" className="bg-white text-blue-600 px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   {t.btnRequestDemo} <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
