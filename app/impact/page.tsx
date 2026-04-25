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
  Layers,
  Sparkles
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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
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
                    <Link href="/dashboard" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <div className="relative">
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-2 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-16 relative overflow-hidden flex flex-col items-center border border-border shadow-inner">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10 text-center">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <div className="p-8 bg-muted border border-border rounded-3xl shadow-sm group-hover:border-vault-amber/30 transition-colors">
                                        <div className="text-4xl font-black text-vault-amber mb-2">92%</div>
                                        <div className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em]">Resolution Rate</div>
                                    </div>
                                    <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-3xl shadow-sm group-hover:border-blue-500/30 transition-colors">
                                        <div className="text-4xl font-black text-blue-500 mb-2">24h</div>
                                        <div className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em]">Avg Response</div>
                                    </div>
                                </div>
                                <div className="pt-12">
                                    <div className="p-12 bg-green-500/5 border border-green-500/10 rounded-[3rem] h-full flex flex-col justify-center shadow-sm group-hover:border-green-500/30 transition-colors">
                                        <div className="text-5xl font-black text-green-500 mb-3">100%</div>
                                        <div className="text-[9px] font-black uppercase text-muted-foreground tracking-[0.2em] italic">Immutable Proof</div>
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
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none">{pt.storyTitle}</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: pt.story1Title, desc: pt.story1Desc, icon: <MapPin />, color: "text-red-500" },
                    { title: pt.story2Title, desc: pt.story2Desc, icon: <Briefcase />, color: "text-vault-amber" },
                    { title: pt.story3Title, desc: pt.story3Desc, icon: <ShieldCheck />, color: "text-blue-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] group text-center shadow-sm hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-10 transition-transform group-hover:rotate-12 flex justify-center bg-background w-20 h-20 items-center rounded-3xl mx-auto border border-border shadow-inner`}>
                            {cloneElement(item.icon, { size: 40 })}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. MILESTONES SECTION */}
        <section className="mb-48 text-center">
            <h2 className="text-[10px] font-black text-muted-foreground mb-20 uppercase tracking-[0.6em] opacity-60 italic">{pt.milestoneTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[pt.mile1, pt.mile2, pt.mile3].map((mile, i) => (
                    <div key={i} className="p-16 bg-background border border-border rounded-[4rem] relative overflow-hidden shadow-2xl group hover:border-vault-amber/20 transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-vault-amber/5 blur-[60px] group-hover:opacity-100 transition-opacity"></div>
                        <div className="text-4xl font-black text-foreground uppercase tracking-tighter leading-none">{mile.split(' ')[0]}</div>
                        <div className="text-[10px] font-black text-muted-foreground uppercase mt-3 tracking-widest opacity-60">{mile.split(' ').slice(1).join(' ')}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. NETWORK VISUALIZATION SECTION */}
        <section className="mb-48 bg-muted/50 border border-border rounded-[6rem] p-16 lg:p-32 overflow-hidden relative shadow-inner">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[180px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div className="relative">
                    <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto border-2 border-dashed border-border rounded-full flex items-center justify-center animate-spin-slow">
                         <Globe size={100} className="text-muted-foreground opacity-20" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-vault-amber rounded-3xl shadow-2xl shadow-vault-amber/40 flex items-center justify-center animate-pulse">
                            <Layers size={48} className="text-black" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.networkTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">{pt.networkSub}</p>
                    <div className="flex flex-wrap gap-4">
                        {['SEA Region', 'LATAM Pilot', 'EU Standards', 'Global Node Network'].map(tag => (
                            <span key={tag} className="px-8 py-3 bg-background border border-border rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground shadow-sm hover:border-vault-amber transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="p-20 md:p-32 bg-vault-amber border border-vault-amber/30 rounded-[6rem] text-center relative overflow-hidden group shadow-[0_0_100px_rgba(245,158,11,0.2)]">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Heart size={48} className="text-white animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.85] uppercase">
                    Shape the <br/> future with us.
                </h2>
                <p className="text-2xl text-black/70 mb-16 font-black leading-relaxed max-w-2xl mx-auto uppercase italic tracking-tight">
                    {pt.futureSub}
                </p>
                <Link href="/dashboard" className="bg-black text-white px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                   <span className="relative z-10">Join the Movement</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
