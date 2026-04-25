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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vault-amber/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
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
                    <Link href="/contact" className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber transition-all shadow-2xl">
                        {lang === 'id' ? "Daftar Paket Kampus" : "Get Campus Pack"} <ArrowRight size={22} />
                    </Link>
                    <div className="flex items-center gap-4 px-6 py-2 border border-white/10 rounded-2xl bg-white/5">
                        <Award className="text-vault-amber" size={18} />
                        <span className="text-xs font-bold text-foreground">Verified for Institutions</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="bg-vault-card border border-white/10 p-2 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="bg-[#0a0a0a] rounded-[3.5rem] p-16 relative overflow-hidden flex flex-col items-center">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-24 h-24 bg-vault-amber/10 border border-vault-amber/20 rounded-[2rem] flex items-center justify-center text-vault-amber mb-8 mx-auto">
                                <Library size={48} />
                            </div>
                            <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">Academic Node</h3>
                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] mb-10">Institutional Validator v4.2</p>
                            
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="text-vault-amber font-black text-lg">12k+</div>
                                    <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Active Students</div>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <div className="text-blue-400 font-black text-lg">100%</div>
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
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.useCasesTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: pt.case1Title, desc: pt.case1Desc, icon: <Users />, color: "bg-blue-500/10 text-blue-400" },
                    { title: pt.case2Title, desc: pt.case2Desc, icon: <Share2 />, color: "bg-vault-amber/10 text-vault-amber" },
                    { title: pt.case3Title, desc: pt.case3Desc, icon: <Lock />, color: "bg-green-500/10 text-green-400" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-12 bg-white/2 border border-white/10 rounded-[3rem] group"
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${item.color}`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. RESEARCH INFRASTRUCTURE SECTION */}
        <section className="mb-48 bg-white/[0.02] border border-white/10 rounded-[4rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="p-8 bg-vault-card border border-white/10 rounded-3xl">
                                <Microscope className="text-vault-amber mb-4" size={32} />
                                <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Dataset</div>
                                <div className="text-sm font-bold">Anonymized CSV/JSON</div>
                            </div>
                            <div className="p-8 bg-white/5 border border-white/5 rounded-3xl">
                                <Cpu className="text-blue-400 mb-4" size={32} />
                                <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">API</div>
                                <div className="text-sm font-bold">v1.0-research</div>
                            </div>
                        </div>
                        <div className="pt-12">
                            <div className="p-10 bg-white/10 border border-white/20 rounded-[2.5rem] h-full flex flex-col justify-center text-center">
                                <Globe className="mx-auto mb-6 opacity-30" size={64} />
                                <div className="text-sm font-black uppercase tracking-[0.2em]">Global Network</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.researchTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">{pt.resDesc}</p>
                    <ul className="space-y-6">
                        {[pt.resPoint1, pt.resPoint2, pt.resPoint3].map((point, i) => (
                            <li key={i} className="flex items-center gap-4 text-foreground font-bold">
                                <div className="w-10 h-10 bg-vault-amber rounded-xl flex items-center justify-center text-black shrink-0">
                                    <Check size={18} strokeWidth={4} />
                                </div>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* 4. CALL TO ACTION */}
        <section className="p-20 bg-vault-amber border border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <BookOpen size={80} className="text-black mx-auto mb-12 animate-float" />
                <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-[0.9] uppercase">
                    Empower your <br/> Students today.
                </h2>
                <p className="text-xl text-black/70 mb-12 font-bold leading-relaxed">
                    Dlibration offers special pricing for accredited universities and research institutions. Let's build the future of campus governance together.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/contact" className="bg-black text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                       Apply for License <ArrowRight size={28} />
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
