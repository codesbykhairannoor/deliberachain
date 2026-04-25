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
  Cpu
} from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pageTranslations = {
    id: {
        comparisonTitle: "Perbandingan Lengkap",
        faqTitle: "Pertanyaan Populer",
        addOnsTitle: "Layanan Tambahan",
        featuresLabel: "Fitur & Kapabilitas",
        free: "Gratis",
        pro: "Pro",
        gov: "Government",
        q1: "Apakah ada biaya tersembunyi?",
        a1: "Tidak. Semua harga transparan. Biaya gas blockchain sudah termasuk dalam langganan Anda.",
        q2: "Bagaimana cara upgrade paket?",
        a2: "Anda dapat melakukan upgrade kapan saja melalui dashboard akun Anda.",
        q3: "Apakah ada diskon untuk NGO?",
        a3: "Ya, kami memiliki program khusus untuk organisasi non-profit. Hubungi tim kami.",
        comparisonRows: [
            { label: "Batas Laporan Bulanan", free: "Tak Terbatas", pro: "Tak Terbatas", gov: "Tak Terbatas" },
            { label: "Analisis AI (Generative AI Pro)", free: "Dasar", pro: "Prioritas", gov: "Ultra-High Prioritas" },
            { label: "Dashboard Kustom", free: "-", pro: "1 Dashboard", gov: "Tak Terbatas" },
            { label: "Integrasi API", free: "View Only", pro: "Read/Write", gov: "Full Enterprise" },
            { label: "Audit Log Blockchain", free: "Public Explorer", pro: "Private Node", gov: "Dedicated Infrastructure" },
            { label: "Dukungan Teknis", free: "Community", pro: "Email (24h)", gov: "Dedicated Manager (1h)" },
        ]
    },
    en: {
        comparisonTitle: "Detailed Comparison",
        faqTitle: "Common Questions",
        addOnsTitle: "Additional Services",
        featuresLabel: "Features & Capabilities",
        free: "Free",
        pro: "Pro",
        gov: "Government",
        q1: "Are there any hidden fees?",
        a1: "No. All pricing is transparent. Blockchain gas fees are included in your subscription.",
        q2: "How do I upgrade my plan?",
        a2: "You can upgrade at any time through your account dashboard.",
        q3: "Are there discounts for NGOs?",
        a3: "Yes, we have special programs for non-profit organizations. Contact our team.",
        comparisonRows: [
            { label: "Monthly Report Limit", free: "Unlimited", pro: "Unlimited", gov: "Unlimited" },
            { label: "AI Analysis (Generative AI Pro)", free: "Basic", pro: "Priority", gov: "Ultra-High Priority" },
            { label: "Custom Dashboards", free: "-", pro: "1 Dashboard", gov: "Unlimited" },
            { label: "API Integration", free: "View Only", pro: "Read/Write", gov: "Full Enterprise" },
            { label: "Blockchain Audit Log", free: "Public Explorer", pro: "Private Node", gov: "Dedicated Infrastructure" },
            { label: "Technical Support", free: "Community", pro: "Email (24h)", gov: "Dedicated Manager (1h)" },
        ]
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  const plans = [
    {
      name: t.priceFree,
      price: "0",
      desc: lang === 'id' ? "Ideal untuk warga sipil yang ingin mulai bersuara." : "Ideal for citizens who want to start speaking out.",
      features: ["Unlimited Reports", "Blockchain Verification", "Basic AI Analysis", "Standard Support"],
      cta: t.priceStartFree,
      icon: <Globe size={24} />,
      popular: false,
      color: "border-white/10"
    },
    {
      name: t.pricePro,
      price: "499",
      desc: lang === 'id' ? "Untuk aktivis, kampus, atau komunitas skala menengah." : "For activists, campuses, or medium-sized communities.",
      features: ["Custom Dashboard", "Priority AI Processing", "API Access (Read/Write)", "Email Support (24h)"],
      cta: t.priceOrderCampus,
      icon: <ShieldCheck size={24} />,
      popular: true,
      color: "border-vault-amber"
    },
    {
      name: t.priceGov,
      price: "Custom",
      desc: lang === 'id' ? "Solusi enterprise untuk Pemda & Instansi Negara." : "Enterprise solutions for Local Governments & State Agencies.",
      features: ["Dedicated Infrastructure", "Unlimited Dashboards", "On-site Training", "Dedicated Support Manager"],
      cta: t.priceContact,
      icon: <Building2 size={24} />,
      popular: false,
      color: "border-blue-500/50"
    }
  ];

  const faqs = [
    { q: pt.q1, a: pt.a1 },
    { q: pt.q2, a: pt.a2 },
    { q: pt.q3, a: pt.a3 }
  ];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO */}
        <div className="text-center mb-32 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vault-amber/10 rounded-full blur-[150px] -z-10"></div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase"
            >
              Investing in <br/> <span className="text-vault-amber">Truth.</span>
            </motion.h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              {lang === 'id' ? "Pilih paket yang sesuai dengan skala dampak yang ingin Anda ciptakan. Transparansi bukan biaya, melainkan investasi sosial." : "Choose the plan that suits the scale of impact you want to create. Transparency is not a cost, but a social investment."}
            </p>
        </div>

        {/* 2. PLANS GRID */}
        <div className="grid lg:grid-cols-3 gap-8 mb-48">
            {plans.map((plan, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-12 rounded-[4rem] border-2 ${plan.popular ? 'bg-vault-amber text-black border-vault-amber shadow-[0_30px_100px_rgba(245,158,11,0.2)]' : 'bg-vault-card text-foreground border-white/5'} relative flex flex-col justify-between group h-full`}
                >
                    {plan.popular && (
                         <div className="absolute top-12 right-12 bg-black text-white text-[9px] font-black uppercase tracking-widest px-6 py-2 rounded-full">
                            Preferred
                         </div>
                    )}
                    
                    <div>
                        <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-12 ${plan.popular ? 'bg-black text-vault-amber' : 'bg-white/5 text-vault-amber'}`}>
                            {plan.icon}
                        </div>
                        <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{plan.name}</h3>
                        <div className="flex items-baseline gap-2 mb-10">
                            <span className="text-6xl font-black italic tracking-tighter">{plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}</span>
                            {plan.price !== 'Custom' && <span className={`text-sm font-black uppercase tracking-widest ${plan.popular ? 'text-black/60' : 'text-muted-foreground'}`}>/ Year</span>}
                        </div>
                        
                        <div className="space-y-6 mb-12">
                            {plan.features.map(f => (
                                <div key={f} className="flex items-start gap-4">
                                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-black text-vault-amber' : 'bg-vault-amber/20 text-vault-amber'}`}>
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="text-sm font-bold leading-tight">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Link 
                        href="/dashboard" 
                        className={`w-full py-7 rounded-3xl font-black text-center transition-all flex items-center justify-center gap-3 text-lg ${plan.popular ? 'bg-black text-white hover:scale-105' : 'bg-white/5 border border-white/10 hover:bg-vault-amber hover:text-black hover:border-vault-amber hover:scale-105'}`}
                    >
                        {plan.cta} <ArrowRight size={24} />
                    </Link>
                </motion.div>
            ))}
        </div>

        {/* 3. DETAILED COMPARISON TABLE */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-20 tracking-tighter text-center uppercase">{pt.comparisonTitle}</h2>
            <div className="bg-vault-card border border-white/10 rounded-[3rem] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5">
                                <th className="p-10 text-sm font-black uppercase tracking-widest text-muted-foreground">{pt.featuresLabel}</th>
                                <th className="p-10 text-xl font-black text-foreground text-center">{pt.free}</th>
                                <th className="p-10 text-xl font-black text-vault-amber text-center">{pt.pro}</th>
                                <th className="p-10 text-xl font-black text-blue-400 text-center">{pt.gov}</th>
                            </tr>
                        </thead>
                        <tbody className="font-bold">
                            {pt.comparisonRows.map((row: any, i: number) => (
                                <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="p-10 text-sm text-foreground">{row.label}</td>
                                    <td className="p-10 text-sm text-center text-muted-foreground">{row.free}</td>
                                    <td className="p-10 text-sm text-center text-foreground">{row.pro}</td>
                                    <td className="p-10 text-sm text-center text-foreground">{row.gov}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* 4. ADD-ONS SECTION */}
        <section className="mb-48">
            <h2 className="text-2xl font-black text-muted-foreground mb-16 uppercase tracking-[0.5em] text-center opacity-40">{pt.addOnsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Custom Deployment", icon: <Layers />, desc: "Deploy your own node on any regional network." },
                    { title: "White Labeling", icon: <Shield />, desc: "Use your own branding and domains for the portal." },
                    { title: "AI Fine-tuning", icon: <Cpu />, desc: "Train the model on your specific policy domain." }
                ].map((item, i) => (
                    <div key={i} className="p-12 bg-white/2 border border-white/10 rounded-[3rem] group hover:border-vault-amber/30 transition-all">
                        <div className="text-vault-amber mb-6">{item.icon}</div>
                        <h4 className="text-xl font-black text-foreground mb-4 uppercase">{item.title}</h4>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 5. FAQ SECTION */}
        <section className="max-w-4xl mx-auto mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-20 tracking-tighter text-center uppercase">{pt.faqTitle}</h2>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border border-white/5 bg-vault-card rounded-3xl overflow-hidden">
                        <button 
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full p-10 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                        >
                            <span className="text-lg font-black pr-8">{faq.q}</span>
                            {openFaq === i ? <Minus className="text-vault-amber shrink-0" /> : <Plus className="text-vault-amber shrink-0" />}
                        </button>
                        <AnimatePresence>
                            {openFaq === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                >
                                    <div className="p-10 pt-0 text-muted-foreground font-medium leading-relaxed">
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
        <section className="p-20 bg-vault-card border-2 border-vault-amber rounded-[5rem] text-center relative overflow-hidden shadow-[0_50px_150px_rgba(245,158,11,0.15)]">
             <div className="absolute inset-0 bg-pattern-diagonal opacity-5"></div>
             <div className="relative z-10 max-w-3xl mx-auto">
                <HelpCircle size={64} className="text-vault-amber mx-auto mb-10 animate-float" />
                <h2 className="text-4xl md:text-7xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    Still have <br/> questions?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 font-bold leading-relaxed">
                    Our team is ready to help you choose the best plan for your organization or community impact goals.
                </p>
                <Link href="/contact" className="bg-vault-amber text-black px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   Contact Sales <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
