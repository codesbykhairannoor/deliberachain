"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { MessageSquare, Github, Twitter, Send, Vote, Users } from "lucide-react";

export default function CommunityPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
          {t.communityTitle}
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          {t.communitySub}
        </p>
      </section>

      {/* JOIN CHANNELS */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <SocialCard icon={Twitter} label="Twitter / X" handle="@DeliberateChain" link="#" />
        <SocialCard icon={Send} label="Telegram" handle="Deliberate_Global" link="#" />
        <SocialCard icon={MessageSquare} label="Discord" handle="Join Deliberate" link="#" />
        <SocialCard icon={Github} label="GitHub" handle="deliberate-chain/core" link="#" />
      </section>
 
      {/* HOW TO CONTRIBUTE */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">{lang === 'id' ? "Jadilah Bagian dari Deliberasi" : "Be Part of the Deliberation"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <ContributionStep 
                    icon={Vote} 
                    title={lang === 'id' ? "Tata Kelola (DAO)" : "Governance (DAO)"} 
                    desc={t.commDAODesc} 
                />
                <ContributionStep 
                    icon={Users} 
                    title={lang === 'id' ? "Duta Daerah" : "Regional Ambassador"} 
                    desc={lang === 'id' ? "Daftarkan diri Anda sebagai koordinator wilayah untuk memverifikasi isu lokal secara offline." : "Register yourself as a regional coordinator to verify local issues offline."} 
                />
                <ContributionStep 
                    icon={MessageSquare} 
                    title={lang === 'id' ? "Moderator Komunitas" : "Community Moderator"} 
                    desc={lang === 'id' ? "Bantu kami memastikan diskusi di platform tetap sehat dan produktif bagi semua orang." : "Help us ensure that discussions on the platform remain healthy and productive for everyone."} 
                />
            </div>
        </div>
      </section>
    </div>
  );
}

function SocialCard({ icon: Icon, label, handle, link }: any) {
    return (
        <a href={link} className="bg-black border border-white/10 p-8 rounded-3xl flex flex-col items-center hover:bg-white/5 transition-all hover:scale-105 group">
            <Icon size={32} className="text-vault-amber mb-4 group-hover:text-white transition-colors" />
            <h4 className="text-white font-bold mb-1">{label}</h4>
            <p className="text-slate-500 text-xs">{handle}</p>
        </a>
    );
}

function ContributionStep({ icon: Icon, title, desc }: any) {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-vault-amber/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-vault-amber/30">
                <Icon size={28} className="text-vault-amber" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
