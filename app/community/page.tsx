"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  MessageSquare, 
  Github, 
  Twitter, 
  Send, 
  Vote, 
  Users,
  Sparkles,
  ArrowRight,
  Globe,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function CommunityPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Community Hero */}
        <section className="text-center max-w-5xl mx-auto mb-40 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.4em] uppercase mb-10 shadow-sm"
            >
                <Users size={16} /> Global Network
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-foreground mb-10 tracking-tighter leading-none uppercase">
                {t.communityTitle}
            </h1>
            <div className="h-2 w-32 bg-vault-amber mx-auto rounded-full mb-12"></div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium italic opacity-80 max-w-3xl mx-auto">
                {t.communitySub}
            </p>
        </section>

        {/* JOIN CHANNELS */}
        <section className="mb-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SocialCard icon={Twitter} label="Twitter / X" handle="@DlibrationHQ" link="#" />
            <SocialCard icon={Send} label="Telegram" handle="Dlibration_Global" link="#" />
            <SocialCard icon={MessageSquare} label="Discord" handle="Join Deliberate" link="#" />
            <SocialCard icon={Github} label="GitHub" handle="dlibration/core" link="#" />
        </section>

        {/* HOW TO CONTRIBUTE */}
        <section className="mb-48 bg-muted/50 border border-border rounded-[5rem] p-16 lg:p-32 relative overflow-hidden shadow-inner">
            <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-10 tracking-tighter uppercase leading-none">
                        {lang === 'id' ? "Jadilah Bagian dari Deliberasi" : "Be Part of the Deliberation"}
                    </h2>
                    <p className="text-xl text-muted-foreground font-black uppercase tracking-[0.4em] italic opacity-60">Impact beyond borders</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    <ContributionStep 
                        icon={Vote} 
                        title={lang === 'id' ? "Tata Kelola (DAO)" : "Governance (DAO)"} 
                        desc={t.commDAODesc} 
                        color="text-blue-500"
                    />
                    <ContributionStep 
                        icon={Users} 
                        title={lang === 'id' ? "Duta Daerah" : "Regional Ambassador"} 
                        desc={lang === 'id' ? "Daftarkan diri Anda sebagai koordinator wilayah untuk memverifikasi isu lokal secara offline." : "Register yourself as a regional coordinator to verify local issues offline."} 
                        color="text-vault-amber"
                    />
                    <ContributionStep 
                        icon={Sparkles} 
                        title={lang === 'id' ? "Moderator Komunitas" : "Community Moderator"} 
                        desc={lang === 'id' ? "Bantu kami memastikan diskusi di platform tetap sehat dan produktif bagi semua orang." : "Help us ensure that discussions on the platform remain healthy and productive for everyone."} 
                        color="text-green-500"
                    />
                </div>
            </div>
        </section>

        {/* ECOSYSTEM VALUES */}
        <section className="mb-48 text-center">
            <div className="grid md:grid-cols-3 gap-16">
                {[
                    { label: "Trustless", icon: <ShieldCheck />, desc: "No intermediaries, only code and consensus." },
                    { label: "Transparent", icon: <Globe />, desc: "Every action is verifiable on the public ledger." },
                    { label: "Sovereign", icon: <Zap />, desc: "Citizens own their data and their collective future." }
                ].map((val, i) => (
                    <div key={i} className="group">
                        <div className="w-16 h-16 bg-muted border border-border rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                            <div className="text-vault-amber">{val.icon}</div>
                        </div>
                        <h4 className="text-xl font-black text-foreground mb-4 uppercase tracking-tighter">{val.label}</h4>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed italic">{val.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-foreground border border-foreground rounded-[6rem] text-center relative overflow-hidden group shadow-2xl">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-background rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Send size={48} className="text-vault-amber animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-background mb-10 tracking-tighter leading-[0.85] uppercase">
                    Shape the <br/> Future.
                </h2>
                <p className="text-2xl text-background/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight opacity-80">
                    Don't just watch history happen. Build it with us. Join the Dlibration community and start making an impact today.
                </p>
                <div className="flex justify-center">
                    <Link href="/contact" className="bg-vault-amber text-black px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">Join Discord Now</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}

function SocialCard({ icon: Icon, label, handle, link }: any) {
    return (
        <motion.a 
            href={link} 
            whileHover={{ y: -10 }}
            className="bg-muted border border-border p-12 rounded-[3.5rem] flex flex-col items-center hover:border-vault-amber/30 transition-all shadow-inner group relative overflow-hidden"
        >
            <div className="bg-background w-20 h-20 rounded-[2rem] border border-border flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Icon size={40} className="text-vault-amber group-hover:text-foreground transition-colors" />
            </div>
            <h4 className="text-foreground font-black mb-2 uppercase tracking-tighter text-lg">{label}</h4>
            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em] opacity-60 italic">{handle}</p>
        </motion.a>
    );
}

function ContributionStep({ icon: Icon, title, desc, color }: any) {
    return (
        <div className="text-center group">
            <div className={`w-24 h-24 bg-background rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-border shadow-2xl group-hover:scale-110 transition-transform ${color}`}>
                <Icon size={48} />
            </div>
            <h4 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none">{title}</h4>
            <p className="text-muted-foreground font-medium leading-relaxed italic text-lg opacity-80">{desc}</p>
        </div>
    );
}
