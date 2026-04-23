"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { ShieldAlert, Database, Lock, Cpu, Globe, Search } from "lucide-react";

export default function SecurityPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="animate-in fade-in duration-700">
      {/* HERO */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
          <ShieldAlert size={40} className="text-green-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
          {t.securityTitle}
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          {t.securitySub}
        </p>
      </section>

      {/* TECH STACK GRID */}
      <section className="py-24 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechCard 
            icon={Database} 
            title="Base L2 Blockchain" 
            desc={t.secBlockchainDesc}
          />
          <TechCard 
            icon={Cpu} 
            title="Gemini AI Moderation" 
            desc={t.secAIDesc}
          />
          <TechCard 
            icon={Lock} 
            title="AES-256 Encryption" 
            desc={t.secPrivacyDesc}
          />
        </div>
      </section>
 
      {/* DETAILED ARCHITECTURE */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.securityTitle}</h2>
        <div className="space-y-12">
          <SecurityRow 
            num="01" 
            title="On-Chain Integrity" 
            desc={t.feat1Desc} 
          />
          <SecurityRow 
            num="02" 
            title="Decentralized Storage" 
            desc={t.step3Desc} 
          />
          <SecurityRow 
            num="03" 
            title="Account Abstraction" 
            desc={t.step6Desc} 
          />
        </div>
      </section>
    </div>
  );
}

function TechCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="p-8 bg-black border border-white/10 rounded-3xl hover:border-green-500/30 transition-all group">
      <div className="p-4 bg-white/5 w-fit rounded-2xl mb-6 group-hover:scale-110 transition-transform">
        <Icon size={32} className="text-green-500" />
      </div>
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function SecurityRow({ num, title, desc }: any) {
  return (
    <div className="flex gap-8 items-start border-b border-white/5 pb-12 last:border-0">
      <span className="text-4xl font-black text-white/10 font-mono">{num}</span>
      <div>
        <h4 className="text-2xl font-bold text-white mb-3">{title}</h4>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
