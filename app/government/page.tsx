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
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function GovernmentPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. GOVERNMENT HERO - Text on Left, Dashboard on Right */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-48">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
                >
                    Government Solutions (B2G)
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-foreground mb-8"
                >
                  {t.govHeroTitle}
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground mb-12 opacity-80 leading-relaxed max-w-xl"
                >
                  {t.govHeroSub}
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/contact" className="bg-vault-amber hover:bg-yellow-500 text-black px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-2xl">
                        {t.btnRequestDemo} <ArrowRight size={22} />
                    </Link>
                    <Link href="/resources" className="px-10 py-5 rounded-2xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all text-foreground flex items-center justify-center">
                        Download Whitepaper
                    </Link>
                </motion.div>
            </div>
            
            <div className="relative">
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10"></div>
                <div className="bg-vault-card border border-white/10 p-4 rounded-[4rem] shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
                    <div className="bg-[#050505] rounded-[3rem] overflow-hidden border border-white/5 p-4">
                        <div className="flex items-center gap-2 mb-4 px-6 py-4 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=2070&auto=format&fit=crop" 
                            alt="Dashboard Preview" 
                            className="w-full h-[400px] object-cover rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* 2. GOVERNMENT FEATURES - Horizontal Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-48">
            {[
              { title: t.govFeature1, icon: <Layout className="text-vault-amber" size={40} />, desc: lang === 'id' ? "Analisis data real-time untuk memantau sentimen publik dan isu kritis di setiap wilayah administratif." : "Real-time data analysis to monitor public sentiment and critical issues in each administrative region." },
              { title: t.govFeature2, icon: <UserCheck className="text-vault-amber" size={40} />, desc: lang === 'id' ? "Sistem verifikasi identitas yang aman namun menjaga anonimitas pelapor, mencegah spam dan manipulasi." : "Secure identity verification system that maintains reporter anonymity, preventing spam and manipulation." },
              { title: t.govFeature3, icon: <FileText className="text-vault-amber" size={40} />, desc: lang === 'id' ? "Otomasi penyusunan laporan kebijakan yang merangkum ribuan aspirasi menjadi poin-poin strategis." : "Automation of policy report preparation that summarizes thousands of aspirations into strategic points." }
            ].map((f, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-12 bg-vault-card border border-white/5 rounded-[3rem] hover:border-vault-amber/30 transition-all group"
                >
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:border-vault-amber/30 transition-all">
                        {f.icon}
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-6 tracking-tight leading-tight">{f.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">{f.desc}</p>
                </motion.div>
            ))}
        </div>

        {/* 3. CASE STUDY PREVIEW - Wide Layout */}
        <div className="py-24 border-y border-white/5 grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
                <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter leading-tight">
                    {lang === 'id' ? "Efisiensi yang Terukur" : "Measured Efficiency"}
                </h2>
                <div className="space-y-10">
                    <div className="flex gap-8 items-start relative">
                        <div className="absolute -top-4 -left-2 px-2 py-0.5 bg-vault-amber/10 text-[8px] font-black uppercase text-vault-amber rounded-full">Target Efisiensi</div>
                        <div className="text-6xl font-black text-vault-amber italic leading-none">70%</div>
                        <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                            {lang === 'id' ? "Pengurangan waktu respons terhadap keluhan publik dibandingkan sistem manual." : "Reduction in response time to public complaints compared to manual systems."}
                        </p>
                    </div>
                    <div className="flex gap-8 items-start relative">
                        <div className="absolute -top-4 -left-2 px-2 py-0.5 bg-white/10 text-[8px] font-black uppercase text-muted-foreground rounded-full">Benchmark Industri</div>
                        <div className="text-6xl font-black text-vault-amber italic leading-none">100%</div>
                        <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                            {lang === 'id' ? "Transparansi data historis yang dapat diaudit secara publik kapan saja." : "Transparency of historical data that can be audited publicly at any time."}
                        </p>
                    </div>
                </div>
                <Link href="/impact" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-foreground border-b-2 border-vault-amber pb-1 hover:gap-6 transition-all">
                    Explore Impact Stories <ArrowRight size={16} />
                </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
                <div className="p-12 bg-white/2 border border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all">
                    <Monitor size={48} className="text-muted-foreground mb-6 group-hover:text-vault-amber transition-colors" />
                    <div className="text-xl font-black text-foreground">Cloud Native</div>
                </div>
                <div className="p-12 bg-white/2 border border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center translate-y-12 group hover:bg-white/5 transition-all">
                    <Lock size={48} className="text-muted-foreground mb-6 group-hover:text-vault-amber transition-colors" />
                    <div className="text-xl font-black text-foreground">Secure API</div>
                </div>
            </div>
        </div>

        {/* 4. FINAL GOVERNMENT CTA */}
        <div className="mt-48 p-12 lg:p-24 bg-vault-amber rounded-[4rem] text-black relative overflow-hidden group">
             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 text-center max-w-4xl mx-auto">
                 <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-tight">
                    {lang === 'id' ? "Jadikan Instansi Anda Pemimpin dalam Transparansi Digital." : "Make Your Agency a Leader in Digital Transparency."}
                 </h2>
                 <Link href="/contact" className="bg-black text-foreground px-16 py-8 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl inline-block">
                    {t.btnRequestDemo}
                 </Link>
             </div>
        </div>

      </div>
    </div>
  );
}
