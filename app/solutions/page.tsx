"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Users, 
  Building2, 
  GraduationCap, 
  Heart, 
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
  Target
} from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        heroTitle: "Target Strategis",
        heroTitleGold: "Implementasi.",
        heroSub: "Dlibration dirancang untuk diaplikasikan pada berbagai sektor kunci guna menciptakan ekosistem tata kelola yang transparan dan akuntabel.",
        targetTitle: "Area Fokus Masa Depan",
        ctaLabel: "Hubungi Tim Ahli Kami"
    },
    en: {
        heroTitle: "Strategic Implementation",
        heroTitleGold: "Targets.",
        heroSub: "Dlibration is designed for application across key sectors to create a transparent and accountable governance ecosystem.",
        targetTitle: "Future Focus Areas",
        ctaLabel: "Contact Our Expert Team"
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  const segments = [
    {
      id: "citizens",
      title: lang === 'id' ? "Komunitas Warga" : "Citizen Communities",
      desc: lang === 'id' ? "Memberdayakan individu untuk berkontribusi langsung dalam pembangunan daerah dengan keamanan total berbasis blockchain." : "Empowering individuals to contribute directly to regional development with total blockchain-based security.",
      icon: <Users className="text-blue-500" size={40} />,
      features: ["Laporan Anonim", "Bukti On-chain", "Reward Partisipasi"],
      color: "blue",
      href: "/solutions/citizens"
    },
    {
      id: "gov",
      title: lang === 'id' ? "Pemerintah Daerah" : "Local Governments",
      desc: lang === 'id' ? "Transformasi birokrasi menjadi lebih responsif, transparan, dan berbasis data aspirasi yang valid secara publik." : "Transforming bureaucracy to be more responsive, transparent, and based on publicly valid aspiration data.",
      icon: <Building2 className="text-vault-amber" size={40} />,
      features: ["Auto Policy Brief", "Analytics Dashboard", "Voter Verification"],
      color: "amber",
      href: "/solutions/governments"
    },
    {
      id: "campus",
      title: lang === 'id' ? "Institusi Pendidikan" : "Educational Institutions",
      desc: lang === 'id' ? "Menciptakan ekosistem kampus yang lebih demokratis untuk pemilihan raya mahasiswa dan kebijakan akademik." : "Creating a more democratic campus ecosystem for student general elections and academic policies.",
      icon: <GraduationCap className="text-purple-500" size={40} />,
      features: ["Voting Kampus", "Transparency Hub", "Academic Integrity"],
      color: "purple",
      href: "/solutions/universities"
    },
    {
      id: "ngo",
      title: lang === 'id' ? "Organisasi Sosial" : "Social Organizations",
      desc: lang === 'id' ? "Membantu NGO mengumpulkan data isu publik yang akurat dan tak terbantahkan untuk advokasi kebijakan." : "Helping NGOs collect accurate and indisputable public issue data for policy advocacy.",
      icon: <Heart className="text-red-500" size={40} />,
      features: ["Data Advocacy", "Public Polling", "Impact Reports"],
      color: "red",
      href: "/solutions/ngos"
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. SOLUTIONS HERO */}
        <div className="text-center mb-48 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.4em] uppercase mb-10 shadow-sm"
            >
                <Target size={16} /> Targeted Ecosystems
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-foreground mb-10 tracking-tighter uppercase leading-none italic"
            >
              {pt.heroTitle} <br/> <span className="text-vault-amber">{pt.heroTitleGold}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium italic opacity-80 mb-12"
            >
              {pt.heroSub}
            </motion.p>
        </div>

        {/* 2. BIG SEGMENT GRID */}
        <div className="grid md:grid-cols-2 gap-10 mb-48">
          {segments.map((seg, idx) => (
            <motion.div 
              key={seg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-muted border border-border rounded-[4rem] p-16 overflow-hidden hover:border-vault-amber/30 transition-all flex flex-col justify-between shadow-inner"
            >
                <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                
                <div>
                    <div className="w-24 h-24 bg-background rounded-[2.5rem] flex items-center justify-center border border-border mb-12 group-hover:scale-110 transition-transform shadow-2xl">
                      {seg.icon}
                    </div>
                    <h2 className="text-4xl font-black text-foreground mb-8 uppercase tracking-tighter italic leading-none">{seg.title}</h2>
                    <p className="text-lg text-muted-foreground mb-12 leading-relaxed italic font-medium opacity-80">
                      {seg.desc}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-16">
                        {seg.features.map(f => (
                           <span key={f} className="px-6 py-2 rounded-full bg-background border border-border text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors italic">{f}</span>
                        ))}
                    </div>
                </div>

                <Link href={seg.href} className="inline-flex items-center gap-4 text-vault-amber font-black uppercase tracking-[0.4em] text-xs hover:gap-8 transition-all active:scale-95">
                    Explore Implementation <ArrowRight size={20} />
                </Link>
            </motion.div>
          ))}
        </div>

        {/* 3. FINAL CTA */}
        <section className="p-20 md:p-32 bg-foreground border border-foreground rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-background rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles size={48} className="text-vault-amber animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-background mb-10 tracking-tighter leading-[0.85] uppercase italic">
                    Ready to <br/> Deploy?
                </h2>
                <p className="text-2xl text-background/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight opacity-80">
                    Belum menemukan yang Anda cari? Our expert team can help customize the protocol for your specific institutional needs.
                </p>
                <div className="flex justify-center">
                    <Link href="/contact" className="bg-vault-amber text-black px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">{pt.ctaLabel}</span> <ArrowUpRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
