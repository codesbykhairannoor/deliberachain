"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Users, 
  Library, 
  Microscope, 
  Share2,
  Lock,
  Cpu,
  Globe,
  Award,
  Check
} from "lucide-react";
import Link from "next/link";

export default function UniversitiesSolutionPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        campusTitle: "Transformasi Kampus Digital",
        campusSub: "Membangun laboratorium demokrasi yang sesungguhnya di lingkungan akademis.",
        useCasesTitle: "Skenario Implementasi",
        case1Title: "Pemilihan Raya (Pemira)",
        case1Desc: "Voting transparan tanpa risiko manipulasi suara untuk ketua organisasi mahasiswa.",
        case2Title: "Debat Kebijakan Kampus",
        case2Desc: "Ruang deliberasi mahasiswa untuk memberikan masukan langsung ke rektorat.",
        case3Title: "Survei Kepuasan Berbasis Bukti",
        case3Desc: "Data aspirasi yang tidak bisa diubah untuk perbaikan fasilitas kampus.",
        researchTitle: "Infrastruktur Riset",
        resDesc: "Kami menyediakan akses API terenkripsi untuk dosen dan peneliti guna mempelajari dinamika sosial dan politik digital.",
        resPoint1: "Dataset On-chain Anonymized",
        resPoint2: "Visualisasi Sentimen Real-time",
        resPoint3: "Integrasi Identitas Akademik (SSO)",
        ctaTitle: "Modernkan Kampus Anda Sekarang",
        ctaSub: "Jadilah bagian dari jaringan universitas yang mengadopsi standar transparansi tertinggi."
    },
    en: {
        campusTitle: "Digital Campus Transformation",
        campusSub: "Building a true laboratory for democracy within academic environments.",
        useCasesTitle: "Implementation Scenarios",
        case1Title: "General Elections (Pemira)",
        case1Desc: "Transparent voting without the risk of vote manipulation for student union leaders.",
        case2Title: "Campus Policy Debates",
        case2Desc: "Deliberation space for students to provide direct feedback to the rectorate.",
        case3Title: "Evidence-Based Satisfaction Surveys",
        case3Desc: "Immutable aspiration data for the improvement of campus facilities.",
        researchTitle: "Research Infrastructure",
        resDesc: "We provide encrypted API access for faculty and researchers to study social and digital political dynamics.",
        resPoint1: "Anonymized On-chain Datasets",
        resPoint2: "Real-time Sentiment Visualization",
        resPoint3: "Academic Identity Integration (SSO)",
        ctaTitle: "Modernize Your Campus Now",
        ctaSub: "Be part of the network of universities adopting the highest transparency standards."
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      {/* Background Elements */}
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
                    <GraduationCap size={14} /> Academic Excellence
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    {lang === 'id' ? "Inovasi" : "Academic"} <br/> 
                    <span className="text-vault-amber">Demokrasi.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Universitas adalah tempat lahirnya ide. Kami memberikan alat untuk memastikan setiap ide mahasiswa tercatat secara adil, transparan, dan abadi di blockchain."
                      : "Universities are the birthplace of ideas. We provide the tools to ensure every student idea is recorded fairly, transparently, and eternally on the blockchain."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/contact" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {lang === 'id' ? "Daftar Paket Kampus" : "Get Campus Pack"} <ArrowRight size={22} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-3 border border-border rounded-2xl bg-muted shadow-inner">
                        <Award className="text-vault-amber" size={18} />
                        <span className="text-[10px] font-black text-foreground uppercase tracking-widest italic">Verified for Institutions</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-16 relative overflow-hidden flex flex-col items-center border border-border shadow-inner text-center">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10 w-full">
                            <div className="w-24 h-24 bg-muted border border-border rounded-[2rem] flex items-center justify-center text-vault-amber mb-10 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                                <Library size={56} />
                            </div>
                            <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">Academic Node</h3>
                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.4em] mb-12 italic opacity-60">Institutional Validator v4.2</p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-muted border border-border rounded-3xl shadow-sm hover:border-vault-amber/30 transition-colors">
                                    <div className="text-3xl font-black text-vault-amber leading-none mb-2">12k+</div>
                                    <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Active Students</div>
                                </div>
                                <div className="p-8 bg-muted border border-border rounded-3xl shadow-sm hover:border-blue-500/30 transition-colors">
                                    <div className="text-3xl font-black text-blue-500 leading-none mb-2">100%</div>
                                    <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Audit Score</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. USE CASES SECTION */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none">{pt.useCasesTitle}</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: pt.case1Title, desc: pt.case1Desc, icon: <Users />, color: "text-blue-500" },
                    { title: pt.case2Title, desc: pt.case2Desc, icon: <Share2 />, color: "text-vault-amber" },
                    { title: pt.case3Title, desc: pt.case3Desc, icon: <Lock />, color: "text-green-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] group shadow-sm hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-10 bg-background w-24 h-24 flex items-center justify-center rounded-[2rem] border border-border shadow-inner transition-transform group-hover:scale-110`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. RESEARCH INFRASTRUCTURE SECTION */}
        <section className="mb-48 bg-muted/50 border border-border rounded-[5rem] p-16 lg:p-32 overflow-hidden relative shadow-inner">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div className="p-10 bg-background border border-border rounded-[3rem] shadow-xl hover:border-vault-amber/30 transition-colors group">
                                <Microscope className="text-vault-amber mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-3">Dataset Control</div>
                                <div className="text-lg font-black uppercase tracking-tight">Anonymized CSV/JSON</div>
                            </div>
                            <div className="p-10 bg-background border border-border rounded-[3rem] shadow-xl hover:border-blue-500/30 transition-colors group">
                                <Cpu className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-3">Analysis Engine</div>
                                <div className="text-lg font-black uppercase tracking-tight">v2.0-research API</div>
                            </div>
                        </div>
                        <div className="pt-16">
                            <div className="p-12 bg-background border-4 border-dashed border-border rounded-[4rem] h-full flex flex-col justify-center text-center group hover:border-vault-amber/30 transition-colors">
                                <Globe className="mx-auto mb-10 opacity-10 group-hover:opacity-40 transition-opacity animate-spin-slow" size={80} />
                                <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">Global Network Node</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.researchTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed italic">{pt.resDesc}</p>
                    <ul className="space-y-10">
                        {[pt.resPoint1, pt.resPoint2, pt.resPoint3].map((point, i) => (
                            <li key={i} className="flex items-center gap-6 text-foreground font-black uppercase text-xs tracking-[0.2em]">
                                <div className="w-14 h-14 bg-vault-amber/10 rounded-2xl flex items-center justify-center text-vault-amber shrink-0 border border-vault-amber/20 shadow-sm">
                                    <Check size={28} strokeWidth={4} />
                                </div>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* 4. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-vault-amber border border-vault-amber/30 rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <GraduationCap size={48} className="text-white opacity-40" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.85] uppercase">
                    Empower your <br/> Students today.
                </h2>
                <p className="text-2xl text-black/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight">
                    Dlibration offers special pricing for accredited universities and research institutions. Let's build the future of campus governance together.
                </p>
                <div className="flex justify-center">
                    <Link href="/contact" className="bg-black text-white px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">Apply for Academic License</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                       <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
