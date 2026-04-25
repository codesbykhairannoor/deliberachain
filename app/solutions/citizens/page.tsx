"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Zap, 
  MessageSquare,
  Award,
  Globe,
  Lock,
  Eye,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function CitizensSolutionPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        citizenTitle: "Suara Anda, Sejarah Anda",
        citizenSub: "Dlibration memberikan kekuatan demokrasi langsung ke tangan Anda, tanpa perantara, tanpa sensor, dan tanpa ketakutan.",
        pathTitle: "Perjalanan Suara Anda",
        path1Title: "Bicara Bebas",
        path1Desc: "Tulis aspirasi Anda dengan enkripsi tingkat tinggi.",
        path2Title: "Abadikan di Rantai",
        path2Desc: "Suara Anda dicatat di blockchain sebagai bukti permanen.",
        path3Title: "Dengar & Respon",
        path3Desc: "AI memastikan pesan Anda sampai ke pembuat kebijakan.",
        rewardsTitle: "Sistem Penghargaan Partisipasi",
        rewardsDesc: "Setiap kontribusi Anda membangun 'Skor Reputasi Digital' yang membuka akses ke badge eksklusif dan voting prioritas.",
        point1: "Badge On-Chain Eksklusif",
        point2: "Akses Awal Laporan Publik",
        point3: "Governance Voting Rights",
        privacyTitle: "Kedaulatan Privasi Total",
        privacyDesc: "Identitas Anda adalah milik Anda. Kami menggunakan protokol anonimitas canggih untuk melindungi keamanan pribadi Anda.",
    },
    en: {
        citizenTitle: "Your Voice, Your History",
        citizenSub: "Dlibration puts the power of direct democracy in your hands, without intermediaries, without censorship, and without fear.",
        pathTitle: "Your Voice's Journey",
        path1Title: "Speak Freely",
        path1Desc: "Write your aspirations with high-level encryption.",
        path2Title: "Indelible on Chain",
        path2Desc: "Your voice is recorded on the blockchain as permanent proof.",
        path3Title: "Hear & Respond",
        path3Desc: "AI ensures your message reaches the policymakers.",
        rewardsTitle: "Participation Reward System",
        rewardsDesc: "Every contribution builds your 'Digital Reputation Score' which unlocks exclusive badges and priority voting access.",
        point1: "Exclusive On-Chain Badges",
        point2: "Early Access to Public Reports",
        point3: "Governance Voting Rights",
        privacyTitle: "Total Privacy Sovereignty",
        privacyDesc: "Your identity belongs to you. We use advanced anonymity protocols to protect your personal safety.",
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <Heart size={14} /> Power to the People
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    Beyond <br/> 
                    <span className="text-vault-amber">Statistics.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Anda bukan sekadar angka di kertas suara. Anda adalah pemegang kedaulatan. Dlibration memastikan suara Anda terdengar, tercatat, dan ditindaklanjuti secara objektif."
                      : "You are not just a number on a ballot. You are the holder of sovereignty. Dlibration ensures your voice is heard, recorded, and acted upon objectively."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/dashboard" className="bg-vault-amber text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-all shadow-2xl">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="bg-vault-card border border-white/10 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group flex flex-col items-center">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                    <div className="relative z-10 text-center">
                        <Users size={120} className="text-vault-amber/20 mb-8 mx-auto animate-float" />
                        <div className="text-3xl font-black text-foreground uppercase tracking-tighter">Verified Citizen</div>
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] mt-4 italic">Algorithmic Reputation v1</p>
                        
                        <div className="mt-12 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-xl font-black text-vault-amber">24</div>
                                <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Reports</div>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-xl font-black text-blue-400">99+</div>
                                <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Trust Score</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. JOURNEY PATHWAY SECTION */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.pathTitle}</h2>
            <div className="grid md:grid-cols-3 gap-12 relative">
                <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-vault-amber/20 to-transparent"></div>
                {[
                    { title: pt.path1Title, desc: pt.path1Desc, icon: <MessageSquare /> },
                    { title: pt.path2Title, desc: pt.path2Desc, icon: <Lock /> },
                    { title: pt.path3Title, desc: pt.path3Desc, icon: <Zap /> }
                ].map((step, i) => (
                    <div key={i} className="relative z-10 text-center flex flex-col items-center group">
                        <div className="w-24 h-24 bg-vault-card border border-white/10 rounded-3xl flex items-center justify-center text-vault-amber mb-8 group-hover:scale-110 group-hover:border-vault-amber transition-all shadow-2xl">
                            {step.icon}
                        </div>
                        <h4 className="text-2xl font-black text-foreground mb-4 uppercase">{step.title}</h4>
                        <p className="text-muted-foreground font-medium max-w-xs">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 3. REWARD SYSTEM SECTION */}
        <section className="mb-48 bg-white/[0.02] border border-white/10 rounded-[4rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vault-amber/10 blur-[100px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.rewardsTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">{pt.rewardsDesc}</p>
                    <div className="space-y-6">
                        {[pt.point1, pt.point2, pt.point3].map((point, i) => (
                            <div key={i} className="flex items-center gap-4 text-foreground font-bold">
                                <div className="w-10 h-10 bg-vault-amber/10 rounded-xl flex items-center justify-center text-vault-amber shrink-0">
                                    <Award size={20} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="aspect-square bg-vault-card border border-white/5 rounded-3xl flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                                <Sparkles className="text-vault-amber/30 group-hover:text-vault-amber" size={48} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 4. PRIVACY PROTECTION */}
        <section className="mb-48 text-center max-w-4xl mx-auto">
            <ShieldCheck className="text-vault-amber mx-auto mb-10" size={80} />
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter uppercase">{pt.privacyTitle}</h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-12">
                {pt.privacyDesc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Zero Knowledge Proofs', 'Differential Privacy', 'AES-256 Storage', 'No KYC Required'].map(tag => (
                    <div key={tag} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        {tag}
                    </div>
                ))}
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 bg-vault-amber border border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Globe size={80} className="text-black mx-auto mb-12 animate-spin-slow opacity-20" />
                <h2 className="text-4xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-[0.9] uppercase">
                    Your voice <br/> is your power.
                </h2>
                <p className="text-xl text-black/80 mb-12 font-bold leading-relaxed">
                    Don't let your aspirations be lost in a filing cabinet. Secure them on the blockchain today and join the movement.
                </p>
                <Link href="/dashboard" className="bg-black text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   Start Speaking Out <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
