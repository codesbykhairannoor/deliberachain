"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Check, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Building2, 
  Globe,
  Plus
} from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const plans = [
    {
      name: t.priceFree,
      price: "0",
      desc: lang === 'id' ? "Ideal untuk warga sipil yang ingin mulai bersuara." : "Ideal for citizens who want to start speaking out.",
      features: ["Sampaikan Aspirasi (Unlimited)", "Cek Status Blockchain", "Reward Partisipasi Dasar", "Enkripsi Laporan"],
      cta: t.priceStartFree,
      icon: <Globe size={24} />,
      popular: false
    },
    {
      name: t.pricePro,
      price: "499",
      desc: lang === 'id' ? "Untuk aktivis, kampus, atau komunitas skala menengah." : "For activists, campuses, or medium-sized communities.",
      features: ["Semua fitur Free", "Custom Transparency Hub", "Dashboard Analitik Dasar", "API Access (Limited)", "Prioritas Analisis AI"],
      cta: t.priceOrderCampus,
      icon: <ShieldCheck size={24} />,
      popular: true
    },
    {
      name: t.priceGov,
      price: "Custom",
      desc: lang === 'id' ? "Solusi enterprise untuk Pemda & Instansi Negara." : "Enterprise solutions for Local Governments & State Agencies.",
      features: ["Semua fitur Pro", "Dashboard Analitik Enterprise", "SLA Dukungan 24/7", "Integrasi Database Internal", "Auto Policy Brief Pro"],
      cta: t.priceContact,
      icon: <Building2 size={24} />,
      popular: false
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. PRICING HERO - Centered with background glow */}
        <div className="text-center mb-32 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vault-amber/10 rounded-full blur-[150px] -z-10"></div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tighter"
            >
              Plans for <br/> Every <span className="text-vault-amber">Impact.</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {lang === 'id' ? "Pilih paket yang sesuai dengan skala partisipasi Anda. Kami memastikan setiap rupiah yang Anda investasikan kembali dalam bentuk transparansi total." : "Choose the plan that suits your scale of participation. We ensure every dollar you invest returns in the form of total transparency."}
            </p>
        </div>

        {/* 2. PRICING GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mb-40">
            {plans.map((plan, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-12 rounded-[3.5rem] border ${plan.popular ? 'bg-vault-amber text-black border-vault-amber' : 'bg-vault-card text-foreground border-white/5'} relative flex flex-col justify-between group overflow-hidden`}
                >
                    {plan.popular && (
                         <div className="absolute top-10 right-10 bg-black text-foreground text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                            Most Popular
                         </div>
                    )}
                    
                    <div>
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${plan.popular ? 'bg-black text-vault-amber' : 'bg-white/5 text-vault-amber'}`}>
                            {plan.icon}
                        </div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight">{plan.name}</h3>
                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-5xl font-black italic">{plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}</span>
                            {plan.price !== 'Custom' && <span className={`text-sm font-bold ${plan.popular ? 'text-black/60' : 'text-muted-foreground'}`}>/{t.priceAnnual}</span>}
                        </div>
                        <p className={`text-sm font-medium leading-relaxed mb-10 ${plan.popular ? 'text-black/70' : 'text-muted-foreground'}`}>
                            {plan.desc}
                        </p>
                        
                        <div className="space-y-4 mb-12">
                            {plan.features.map(f => (
                                <div key={f} className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-black text-vault-amber' : 'bg-vault-amber/20 text-vault-amber'}`}>
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="text-sm font-bold">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link 
                        href="/dashboard" 
                        className={`w-full py-5 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-3 group/btn ${plan.popular ? 'bg-black text-foreground hover:bg-zinc-800' : 'bg-white/5 border border-white/10 hover:bg-vault-amber hover:text-black hover:border-vault-amber'}`}
                    >
                        {plan.cta} <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            ))}
        </div>

        {/* 3. FEATURE COMPARISON MOCKUP */}
        <div className="py-24 border-t border-white/5">
             <div className="max-w-4xl mx-auto bg-white/2 border border-white/5 rounded-[3rem] p-12 overflow-hidden relative">
                  <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                  <h3 className="text-2xl font-black text-foreground mb-12 text-center">Detail Perbandingan Fitur</h3>
                  <div className="space-y-4 font-bold text-sm">
                       <div className="flex justify-between py-4 border-b border-white/5">
                           <span className="text-muted-foreground">Uptime Guarantee</span>
                           <span className="text-foreground">99.9% SLA</span>
                       </div>
                       <div className="flex justify-between py-4 border-b border-white/5">
                           <span className="text-muted-foreground">Security Audit</span>
                           <span className="text-foreground">Real-time On-chain</span>
                       </div>
                       <div className="flex justify-between py-4 border-b border-white/5">
                           <span className="text-muted-foreground">AI Model</span>
                           <span className="text-foreground">Gemini 1.5 Pro</span>
                       </div>
                  </div>
             </div>
        </div>

      </div>
    </div>
  );
}
