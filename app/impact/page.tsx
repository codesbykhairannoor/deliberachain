"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Globe, 
  Zap,
  ArrowRight,
  ShieldCheck,
  Cpu,
  MapPin,
  Heart,
  Briefcase,
  Layers
} from "lucide-react";
import Link from "next/link";
import { cloneElement } from "react";

export default function ImpactPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        networkTitle: "Jangkauan Dampak Global",
        networkSub: "Dlibration sedang bertransformasi menjadi tulang punggung demokrasi di berbagai wilayah.",
        storyTitle: "Kisah Perubahan Nyata",
        story1Title: "Kecamatan Cerdas",
        story1Desc: "Integrasi 100% aspirasi warga ke dalam alokasi dana pembangunan desa.",
        story2Title: "Kampus Inklusif",
        story2Desc: "Pemilihan raya mahasiswa pertama yang diaudit sepenuhnya secara on-chain.",
        story3Title: "Audit Publik Mandiri",
        story3Desc: "Masyarakat sipil dapat memverifikasi setiap rupiah yang dijanjikan pemerintah.",
        milestoneTitle: "Pencapaian Komunitas",
        mile1: "450k+ Suara Terverifikasi",
        mile2: "120+ Instansi Terhubung",
        mile3: "100% Keamanan Data",
        futureTitle: "Masa Depan Tanpa Batas",
        futureSub: "Kami percaya bahwa setiap bit data adalah langkah menuju dunia yang lebih adil."
    },
    en: {
        networkTitle: "Global Impact Reach",
        networkSub: "Dlibration is transforming into the backbone of democracy across various regions.",
        storyTitle: "Real Stories of Change",
        story1Title: "Smart Districts",
        story1Desc: "100% integration of citizen aspirations into village development fund allocation.",
        story2Title: "Inclusive Campus",
        story2Desc: "The first student general election fully audited on-chain.",
        story3Title: "Independent Public Audit",
        story3Desc: "Civil society can verify every dollar promised by the government.",
        milestoneTitle: "Community Milestones",
        mile1: "450k+ Verified Voices",
        mile2: "120+ Connected Agencies",
        mile3: "100% Data Security",
        futureTitle: "Limitless Future",
        futureSub: "We believe every bit of data is a step towards a fairer world."
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO - IMPACT VISUAL */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <TrendingUp size={14} /> Measurable Progress
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    Data for <br/> 
                    <span className="text-vault-amber">Humanity.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Kami tidak hanya menghitung angka. Kami menghitung harapan yang terealisasi. Dlibration mentransformasi suara yang hilang menjadi kebijakan publik yang berdampak nyata."
                      : "We don't just count numbers. We count realized hopes. Dlibration transforms lost voices into impactful public policies."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/dashboard" className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber transition-all shadow-2xl">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <div className="relative">
                <div className="bg-vault-card border border-white/10 p-2 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="bg-[#050505] rounded-[3.5rem] p-16 relative overflow-hidden flex flex-col items-center">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10 text-center">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                                        <div className="text-3xl font-black text-vault-amber mb-1">92%</div>
                                        <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Resolution Rate</div>
                                    </div>
                                    <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                                        <div className="text-3xl font-black text-blue-400 mb-1">24h</div>
                                        <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Avg Response</div>
                                    </div>
                                </div>
                                <div className="pt-12">
                                    <div className="p-10 bg-green-500/10 border border-green-500/20 rounded-3xl h-full flex flex-col justify-center">
                                        <div className="text-4xl font-black text-green-400 mb-2">100%</div>
                                        <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest italic">Immutable Proof</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 2. SUCCESS STORIES GRID */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.storyTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: pt.story1Title, desc: pt.story1Desc, icon: <MapPin />, color: "text-red-400" },
                    { title: pt.story2Title, desc: pt.story2Desc, icon: <Briefcase />, color: "text-vault-amber" },
                    { title: pt.story3Title, desc: pt.story3Desc, icon: <ShieldCheck />, color: "text-blue-400" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-12 bg-white/2 border border-white/10 rounded-[3rem] group text-center"
                    >
                        <div className={`${item.color} mb-8 transition-transform group-hover:rotate-12 flex justify-center`}>
                            {cloneElement(item.icon, { size: 48 })}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. MILESTONES SECTION */}
        <section className="mb-48 text-center">
            <h2 className="text-2xl font-black text-muted-foreground mb-16 uppercase tracking-[0.5em] opacity-40">{pt.milestoneTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[pt.mile1, pt.mile2, pt.mile3].map((mile, i) => (
                    <div key={i} className="p-12 bg-vault-card border border-white/5 rounded-[4rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-vault-amber/10 blur-[40px]"></div>
                        <div className="text-3xl font-black text-foreground uppercase tracking-tighter">{mile.split(' ')[0]}</div>
                        <div className="text-xs font-black text-muted-foreground uppercase mt-2 tracking-widest">{mile.split(' ').slice(1).join(' ')}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. NETWORK VISUALIZATION SECTION */}
        <section className="mb-48 bg-white/[0.02] border border-white/10 rounded-[5rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative">
                    <Globe size={300} className="text-white/10 animate-spin-slow mx-auto" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Layers size={80} className="text-vault-amber animate-pulse" />
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.networkTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">{pt.networkSub}</p>
                    <div className="flex flex-wrap gap-4">
                        {['SEA Region', 'LATAM Pilot', 'EU Standards', 'Global Node Network'].map(tag => (
                            <span key={tag} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="p-20 bg-gradient-to-br from-blue-600 to-vault-amber border border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Heart size={80} className="text-white mx-auto mb-12 animate-float" />
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                    Shape the <br/> future with us.
                </h2>
                <p className="text-xl text-white/80 mb-12 font-bold leading-relaxed">
                    {pt.futureSub}
                </p>
                <Link href="/dashboard" className="bg-white text-black px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   Join the Movement <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}

