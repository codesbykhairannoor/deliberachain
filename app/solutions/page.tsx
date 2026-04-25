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
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const segments = [
    {
      id: "citizens",
      title: t.solForCitizens,
      desc: lang === 'id' ? "Memberdayakan setiap individu untuk berkontribusi langsung dalam pembangunan daerah mereka dengan keamanan total." : "Empowering every individual to contribute directly to their regional development with total security.",
      icon: <Users className="text-blue-500" size={40} />,
      features: ["Laporan Anonim", "Bukti On-chain", "Reward Partisipasi"],
      color: "blue",
      href: "/solutions/citizens"
    },
    {
      id: "gov",
      title: t.solForGov,
      desc: lang === 'id' ? "Transformasi birokrasi menjadi lebih responsif, transparan, dan berbasis data aspirasi yang valid." : "Transforming bureaucracy to be more responsive, transparent, and based on valid aspiration data.",
      icon: <Building2 className="text-vault-amber" size={40} />,
      features: ["Auto Policy Brief", "Analytics Dashboard", "Voter Verification"],
      color: "amber",
      href: "/solutions/governments"
    },
    {
      id: "campus",
      title: t.solForUni,
      desc: lang === 'id' ? "Menciptakan ekosistem kampus yang lebih demokratis untuk pemilihan raya dan aspirasi akademik." : "Creating a more democratic campus ecosystem for general elections and academic aspirations.",
      icon: <GraduationCap className="text-purple-500" size={40} />,
      features: ["Voting Kampus", "Transparency Hub", "Academic Integrity"],
      color: "purple",
      href: "/solutions/universities"
    },
    {
      id: "ngo",
      title: t.solForNgo,
      desc: lang === 'id' ? "Membantu organisasi sosial mengumpulkan data isu publik yang akurat untuk advokasi kebijakan." : "Helping social organizations collect accurate public issue data for policy advocacy.",
      icon: <Heart className="text-red-500" size={40} />,
      features: ["Data Advocacy", "Public Polling", "Impact Reports"],
      color: "red",
      href: "/solutions/ngos"
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-diagonal absolute inset-0 opacity-5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. SOLUTIONS HERO - Centered Text with Floating Background Particles */}
        <div className="text-center mb-48 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vault-amber/5 rounded-full blur-[120px] -z-10"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
            >
                Tailored Ecosystems
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-8"
            >
              {t.solHeroTitle} <br/> <span className="text-vault-amber">{t.solHeroTitleGold}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto opacity-80 mb-12"
            >
              {t.solSub}
            </motion.p>
        </div>

        {/* 2. BIG SEGMENT GRID - Layout Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-40">
          {segments.map((seg, idx) => (
            <motion.div 
              key={seg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-vault-card border border-white/5 rounded-[3rem] p-12 overflow-hidden hover:border-white/20 transition-all flex flex-col justify-between"
            >
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-${seg.color}-500/5 blur-[80px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2`}></div>
                
                <div>
                    <div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center border border-white/10 mb-10 group-hover:scale-110 transition-transform">
                      {seg.icon}
                    </div>
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tight">{seg.title}</h2>
                    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                      {seg.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-12">
                        {seg.features.map(f => (
                           <span key={f} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">{f}</span>
                        ))}
                    </div>
                </div>

                <Link href={seg.href} className="inline-flex items-center gap-2 text-vault-amber font-black uppercase tracking-[0.2em] text-[10px] hover:gap-4 transition-all">
                    View Solution <ArrowRight size={14} />
                </Link>
            </motion.div>
          ))}
        </div>

        {/* 3. FINAL CTA - Loop/Flow style */}
        <div className="py-24 border-t border-white/5 text-center">
            <h2 className="text-3xl font-black text-white mb-12">{lang === 'id' ? "Belum menemukan yang Anda cari?" : "Didn't find what you were looking for?"}</h2>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-vault-amber transition-all">
               Hubungi Tim Ahli Kami <ArrowUpRight size={22} />
            </Link>
        </div>

      </div>
    </div>
  );
}
