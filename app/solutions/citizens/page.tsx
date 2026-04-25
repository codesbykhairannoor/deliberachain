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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
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
                    <Link href="/dashboard" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnGetStarted} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-16 relative overflow-hidden border border-border shadow-inner text-center">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10">
                            <Users size={140} className="text-vault-amber/10 mb-10 mx-auto animate-float" />
                            <div className="text-4xl font-black text-foreground uppercase tracking-tighter leading-none mb-3">Verified Citizen</div>
                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.4em] mb-12 italic opacity-60">Algorithmic Reputation v2.0</p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-muted border border-border rounded-3xl shadow-sm hover:border-vault-amber/30 transition-colors">
                                    <div className="text-3xl font-black text-vault-amber leading-none mb-2">24</div>
                                    <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Global Reports</div>
                                </div>
                                <div className="p-8 bg-muted border border-border rounded-3xl shadow-sm hover:border-blue-500/30 transition-colors">
                                    <div className="text-3xl font-black text-blue-500 leading-none mb-2">99+</div>
                                    <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest">Trust Index</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. JOURNEY PATHWAY SECTION */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none">{pt.pathTitle}</h2>
            <div className="grid md:grid-cols-3 gap-16 relative">
                <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
                {[
                    { title: pt.path1Title, desc: pt.path1Desc, icon: <MessageSquare />, color: "text-blue-500" },
                    { title: pt.path2Title, desc: pt.path2Desc, icon: <Lock />, color: "text-vault-amber" },
                    { title: pt.path3Title, desc: pt.path3Desc, icon: <Zap />, color: "text-green-500" }
                ].map((step, i) => (
                    <div key={i} className="relative z-10 text-center flex flex-col items-center group">
                        <div className={`w-28 h-28 bg-background border border-border rounded-[2.5rem] flex items-center justify-center ${step.color} mb-10 group-hover:scale-110 group-hover:border-vault-amber transition-all shadow-xl shadow-black/5`}>
                            {step.icon}
                        </div>
                        <h4 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">{step.title}</h4>
                        <p className="text-muted-foreground font-medium max-w-xs leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 3. REWARD SYSTEM SECTION */}
        <section className="mb-48 bg-muted/50 border border-border rounded-[5rem] p-16 lg:p-32 overflow-hidden relative shadow-inner">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vault-amber/5 blur-[150px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div>
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.rewardsTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed italic">{pt.rewardsDesc}</p>
                    <div className="space-y-8">
                        {[pt.point1, pt.point2, pt.point3].map((point, i) => (
                            <div key={i} className="flex items-center gap-6 text-foreground font-black uppercase text-xs tracking-widest">
                                <div className="w-12 h-12 bg-vault-amber/10 rounded-2xl flex items-center justify-center text-vault-amber shrink-0 border border-vault-amber/20 shadow-sm">
                                    <Award size={24} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="grid grid-cols-2 gap-8">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="aspect-square bg-background border border-border rounded-[3rem] flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95 group/badge">
                                <Sparkles className="text-vault-amber/20 group-hover:text-vault-amber transition-colors" size={64} />
                            </div>
                        ))}
                    </div>
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-vault-amber rounded-full blur-[100px] opacity-20"></div>
                </div>
            </div>
        </section>

        {/* 4. PRIVACY PROTECTION */}
        <section className="mb-48 text-center max-w-5xl mx-auto">
            <div className="w-32 h-32 bg-muted border border-border rounded-[3rem] flex items-center justify-center mx-auto mb-16 shadow-inner">
                <ShieldCheck className="text-vault-amber" size={64} />
            </div>
            <h2 className="text-4xl md:text-8xl font-black text-foreground mb-10 tracking-tighter uppercase leading-none">{pt.privacyTitle}</h2>
            <p className="text-2xl text-muted-foreground font-medium leading-relaxed mb-20 max-w-3xl mx-auto italic">
                {pt.privacyDesc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {['Zero Knowledge Proofs', 'Differential Privacy', 'AES-256 Storage', 'No KYC Required'].map(tag => (
                    <div key={tag} className="p-8 bg-muted border border-border rounded-3xl text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground shadow-sm hover:border-vault-amber/30 transition-colors">
                        {tag}
                    </div>
                ))}
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-vault-amber border border-vault-amber/30 rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Globe size={48} className="text-white opacity-40 animate-spin-slow" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.85] uppercase">
                    Your voice <br/> is your power.
                </h2>
                <p className="text-2xl text-black/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight">
                    Don't let your aspirations be lost in a filing cabinet. Secure them on the blockchain today and join the movement.
                </p>
                <Link href="/dashboard" className="bg-black text-white px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                   <span className="relative z-10">Start Speaking Out</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                   <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
