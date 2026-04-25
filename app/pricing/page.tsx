"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Check, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Building2, 
  Globe,
  Plus,
  Minus,
  HelpCircle,
  Shield,
  Layers,
  Cpu,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pageTranslations = {
    id: {
        heroTitle: "Investasi pada",
        heroTitleGold: "Kepercayaan.",
        heroSub: "Pilih paket yang sesuai dengan skala dampak yang ingin Anda ciptakan. Transparansi bukan biaya, melainkan investasi sosial untuk masa depan.",
        comparisonTitle: "Perbandingan Fitur",
        faqTitle: "Pertanyaan Populer",
        addOnsTitle: "Layanan Tambahan",
        featuresLabel: "Fitur & Kapabilitas",
        free: "Gratis",
        pro: "Pro / Kampus",
        gov: "Enterprise",
        perYear: "/ Tahun",
        q1: "Apakah ada biaya tersembunyi?",
        a1: "Tidak. Semua harga transparan. Biaya gas blockchain sudah termasuk dalam langganan Anda melalui sistem Sponsored Gas.",
        q2: "Bagaimana cara upgrade paket?",
        a2: "Anda dapat melakukan upgrade kapan saja melalui dashboard akun Anda dengan menghubungkan wallet yang sama.",
        q3: "Apakah ada diskon untuk NGO?",
        a3: "Ya, kami memiliki program khusus 'Patriot Grant' untuk organisasi non-profit dan komunitas lokal. Hubungi tim kami.",
        comparisonRows: [
            { label: "Batas Laporan Bulanan", free: "Tak Terbatas", pro: "Tak Terbatas", gov: "Tak Terbatas" },
            { label: "Analisis AI (Gemini 2.0)", free: "Dasar", pro: "Prioritas", gov: "Ultra-High Prioritas" },
            { label: "Dashboard Kustom", free: "-", pro: "1 Dashboard", gov: "Tak Terbatas" },
            { label: "Integrasi API", free: "Hanya Baca", pro: "Baca/Tulis", gov: "Full Enterprise" },
            { label: "Audit Log Blockchain", free: "Public Explorer", pro: "Private Node", gov: "Dedicated Infrastructure" },
            { label: "Dukungan Teknis", free: "Komunitas", pro: "Email (24 Jam)", gov: "Manager Khusus (1 Jam)" },
        ]
    },
    en: {
        heroTitle: "Investing in",
        heroTitleGold: "Truth.",
        heroSub: "Choose the plan that suits the scale of impact you want to create. Transparency is not a cost, but a social investment for the future.",
        comparisonTitle: "Feature Comparison",
        faqTitle: "Common Questions",
        addOnsTitle: "Additional Services",
        featuresLabel: "Features & Capabilities",
        free: "Free",
        pro: "Pro / Campus",
        gov: "Enterprise",
        perYear: "/ Year",
        q1: "Are there any hidden fees?",
        a1: "No. All pricing is transparent. Blockchain gas fees are included in your subscription via our Sponsored Gas system.",
        q2: "How do I upgrade my plan?",
        a2: "You can upgrade at any time through your account dashboard by connecting the same wallet.",
        q3: "Are there discounts for NGOs?",
        a3: "Yes, we have a special 'Patriot Grant' program for non-profit organizations and local communities. Contact our team.",
        comparisonRows: [
            { label: "Monthly Report Limit", free: "Unlimited", pro: "Unlimited", gov: "Unlimited" },
            { label: "AI Analysis (Gemini 2.0)", free: "Basic", pro: "Priority", gov: "Ultra-High Priority" },
            { label: "Custom Dashboards", free: "-", pro: "1 Dashboard", gov: "Unlimited" },
            { label: "API Integration", free: "Read Only", pro: "Read/Write", gov: "Full Enterprise" },
            { label: "Blockchain Audit Log", free: "Public Explorer", pro: "Private Node", gov: "Dedicated Infrastructure" },
            { label: "Technical Support", free: "Community", pro: "Email (24h)", gov: "Dedicated Manager (1h)" },
        ]
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  const plans = [
    {
      name: pt.free,
      price: "0",
      desc: lang === 'id' ? "Ideal untuk warga sipil yang ingin mulai bersuara secara on-chain." : "Ideal for citizens who want to start speaking out on-chain.",
      features: ["Unlimited Reports", "Blockchain Verification", "Basic AI Analysis", "Standard Community Support"],
      cta: lang === 'id' ? "Mulai Gratis" : "Start for Free",
      icon: <Globe size={24} />,
      popular: false,
      color: "border-border",
      accent: "vault-amber"
    },
    {
      name: pt.pro,
      price: "99",
      desc: lang === 'id' ? "Untuk aktivis, kampus, atau komunitas yang butuh analisis mendalam." : "For activists, campuses, or communities needing deep analysis.",
      features: ["Custom Dashboard", "Priority Gemini 2.0 Processing", "API Access (Read/Write)", "Email Support (24h)"],
      cta: lang === 'id' ? "Pilih Paket Pro" : "Get Pro Pack",
      icon: <ShieldCheck size={24} />,
      popular: true,
      color: "border-vault-amber",
      accent: "black"
    },
    {
      name: pt.gov,
      price: "Custom",
      desc: lang === 'id' ? "Solusi enterprise untuk Pemerintah Daerah & Instansi Negara." : "Enterprise solutions for Local Governments & State Agencies.",
      features: ["Dedicated Infrastructure", "White-label Support", "On-site Training", "Dedicated Success Manager"],
      cta: t.priceContact,
      icon: <Building2 size={24} />,
      popular: false,
      color: "border-blue-500",
      accent: "blue-500"
    }
  ];

  const faqs = [
    { q: pt.q1, a: pt.a1 },
    { q: pt.q2, a: pt.a2 },
    { q: pt.q3, a: pt.a3 }
  ];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO */}
        <div className="text-center mb-40 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none"
            >
              {pt.heroTitle} <br/> <span className="text-vault-amber">{pt.heroTitleGold}</span>
            </motion.h1>
            <div className="h-2 w-32 bg-vault-amber mx-auto rounded-full mb-10"></div>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed font-medium italic opacity-80">
              {pt.heroSub}
            </p>
        </div>

        {/* 2. PLANS GRID */}
        <div className="grid lg:grid-cols-3 gap-10 mb-48">
            {plans.map((plan, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-12 md:p-16 rounded-[4rem] border-4 ${plan.popular ? 'bg-vault-amber text-black border-vault-amber shadow-[0_40px_120px_rgba(245,158,11,0.2)]' : 'bg-muted border-border shadow-inner'} relative flex flex-col justify-between group h-full hover:scale-[1.02] transition-transform duration-500`}
                >
                    {plan.popular && (
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-black uppercase tracking-[0.4em] px-8 py-3 rounded-full shadow-2xl">
                            {lang === 'id' ? 'Paling Populer' : 'Most Popular'}
                         </div>
                    )}
                    
                    <div>
                        <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-12 shadow-xl ${plan.popular ? 'bg-black text-vault-amber' : 'bg-background text-vault-amber border border-border'}`}>
                            {plan.icon}
                        </div>
                        <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-none">{plan.name}</h3>
                        <div className="flex items-baseline gap-2 mb-12 border-b border-current pb-8 opacity-80">
                            <span className="text-6xl font-black italic tracking-tighter">{plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}</span>
                            {plan.price !== 'Custom' && <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${plan.popular ? 'text-black/60' : 'text-muted-foreground'}`}>{pt.perYear}</span>}
                        </div>
                        
                        <div className="space-y-6 mb-16">
                            {plan.features.map(f => (
                                <div key={f} className="flex items-start gap-4">
                                    <div className={`mt-1 w-6 h-6 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${plan.popular ? 'bg-black text-vault-amber' : 'bg-vault-amber/10 text-vault-amber border border-vault-amber/20'}`}>
                                        <Check size={14} strokeWidth={4} />
                                    </div>
                                    <span className="text-sm font-black leading-tight uppercase tracking-tight opacity-90 italic">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link 
                        href="/dashboard" 
                        className={`w-full py-8 rounded-[2.5rem] font-black text-center transition-all flex items-center justify-center gap-4 text-xl shadow-2xl uppercase tracking-widest active:scale-95 ${plan.popular ? 'bg-black text-white hover:bg-zinc-900' : 'bg-background text-foreground border border-border hover:bg-vault-amber hover:text-black hover:border-vault-amber'}`}
                    >
                        {plan.cta} <ArrowRight size={28} />
                    </Link>
                </motion.div>
            ))}
        </div>

        {/* 3. DETAILED COMPARISON TABLE */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none italic">{pt.comparisonTitle}</h2>
            <div className="bg-muted border border-border rounded-[4rem] overflow-hidden shadow-inner p-1">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-background rounded-[3.5rem] overflow-hidden">
                        <thead>
                            <tr className="bg-muted border-b border-border">
                                <th className="p-12 text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">{pt.featuresLabel}</th>
                                <th className="p-12 text-2xl font-black text-foreground text-center uppercase tracking-tighter">{pt.free}</th>
                                <th className="p-12 text-2xl font-black text-vault-amber text-center uppercase tracking-tighter">{pt.pro}</th>
                                <th className="p-12 text-2xl font-black text-blue-500 text-center uppercase tracking-tighter">{pt.gov}</th>
                            </tr>
                        </thead>
                        <tbody className="font-bold italic">
                            {pt.comparisonRows.map((row: any, i: number) => (
                                <tr key={i} className="border-t border-border/50 hover:bg-muted/50 transition-colors group">
                                    <td className="p-10 text-[11px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{row.label}</td>
                                    <td className="p-10 text-xs text-center text-muted-foreground font-black uppercase">{row.free}</td>
                                    <td className="p-10 text-xs text-center text-foreground font-black uppercase">{row.pro}</td>
                                    <td className="p-10 text-xs text-center text-foreground font-black uppercase">{row.gov}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* 4. ADD-ONS SECTION */}
        <section className="mb-48">
            <div className="text-center mb-20">
                <h2 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.6em] opacity-60 italic">{pt.addOnsTitle}</h2>
                <div className="h-1.5 w-16 bg-border mx-auto rounded-full mt-6"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: "Custom Node", icon: <Layers />, desc: lang === 'id' ? "Deploy node Anda sendiri di jaringan regional untuk kontrol data berdaulat." : "Deploy your own node on regional networks for sovereign data control.", color: "text-blue-500" },
                    { title: "White Labeling", icon: <Shield />, desc: lang === 'id' ? "Gunakan branding, tipografi, dan domain instansi Anda sendiri." : "Use your own agency's branding, typography, and domains.", color: "text-vault-amber" },
                    { title: "AI Fine-tuning", icon: <Cpu />, desc: lang === 'id' ? "Latih Gemini 2.0 pada dokumen kebijakan spesifik instansi Anda." : "Train Gemini 2.0 on your agency's specific policy documents.", color: "text-green-500" }
                ].map((item, i) => (
                    <div key={i} className="p-12 bg-muted border border-border rounded-[3.5rem] group hover:border-vault-amber/30 transition-all shadow-sm">
                        <div className={`${item.color} mb-8 bg-background w-16 h-16 flex items-center justify-center rounded-2xl border border-border shadow-inner group-hover:scale-110 transition-transform`}>{item.icon}</div>
                        <h4 className="text-xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">{item.title}</h4>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed italic opacity-80">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 5. FAQ SECTION */}
        <section className="max-w-4xl mx-auto mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none italic">{pt.faqTitle}</h2>
            <div className="space-y-6">
                {faqs.map((faq, i) => (
                    <div key={i} className="border border-border bg-muted/30 rounded-[2.5rem] overflow-hidden shadow-sm hover:border-vault-amber/20 transition-all">
                        <button 
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full p-12 flex items-center justify-between text-left transition-all group"
                        >
                            <span className="text-xl font-black uppercase tracking-tighter pr-8 group-hover:text-vault-amber transition-colors italic">{faq.q}</span>
                            <div className="p-2 bg-background border border-border rounded-xl">
                                {openFaq === i ? <Minus className="text-vault-amber shrink-0" size={20} /> : <Plus className="text-vault-amber shrink-0" size={20} />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {openFaq === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                >
                                    <div className="p-12 pt-0 text-muted-foreground font-medium leading-relaxed italic text-lg border-t border-border mt-4">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="p-20 md:p-32 bg-foreground border border-foreground rounded-[6rem] text-center relative overflow-hidden shadow-2xl group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-background rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Sparkles size={48} className="text-vault-amber animate-pulse" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-background mb-10 tracking-tighter leading-[0.85] uppercase italic">
                    Ready to <br/> Lead?
                </h2>
                <p className="text-2xl text-background/70 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight opacity-80">
                    {lang === 'id' ? 'Tim kami siap membantu Anda memilih paket terbaik untuk tujuan dampak komunitas Anda.' : 'Our team is ready to help you choose the best plan for your community impact goals.'}
                </p>
                <div className="flex justify-center">
                    <Link href="/contact" className="bg-vault-amber text-black px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                       <span className="relative z-10">{t.priceContact}</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                    </Link>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
