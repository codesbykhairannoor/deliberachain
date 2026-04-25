"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Scale, 
  FileText, 
  ShieldCheck, 
  Lock, 
  AlertCircle, 
  ChevronRight,
  ArrowRight,
  Globe,
  Gavel,
  Eye,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        legalHeroTitle: "Kepatuhan & Integritas",
        legalHeroSub: "Fondasi hukum yang menjamin keamanan data dan kedaulatan aspirasi Anda di ekosistem Dlibration.",
        docTitle: "Dokumen Kebijakan Utama",
        termsTitle: "Ketentuan Penggunaan (ToS)",
        termsDesc: "Aturan main dalam menggunakan platform, hak kekayaan intelektual, dan batasan tanggung jawab.",
        privacyTitle: "Kebijakan Privasi (Privacy)",
        privacyDesc: "Bagaimana kami memproses, mengenkripsi, dan melindungi data pribadi Anda sesuai UU PDP.",
        sovereigntyTitle: "Kedaulatan Data",
        sovereigntyDesc: "Pernyataan hak pengguna atas data aspirasi mereka sendiri yang tersimpan di blockchain.",
        complianceTitle: "Standar & Kepatuhan Global",
        comp1Title: "GDPR Compliant",
        comp1Desc: "Kami mengikuti standar perlindungan data tertinggi di dunia.",
        comp2Title: "MIT License",
        comp2Desc: "Kode sumber kami terbuka dan dapat diaudit secara publik.",
        comp3Title: "ISO 27001 Ready",
        comp3Desc: "Protokol keamanan informasi kami dirancang untuk skala institusional.",
        disclaimerTitle: "Sangkalan (Disclaimer)",
        disclaimerDesc: "Informasi yang disediakan oleh platform adalah hasil analisis AI dan harus digunakan sebagai referensi pendukung kebijakan, bukan sebagai satu-satunya dasar pengambilan keputusan hukum."
    },
    en: {
        legalHeroTitle: "Compliance & Integrity",
        legalHeroSub: "The legal foundation ensuring data security and the sovereignty of your aspirations in the Dlibration ecosystem.",
        docTitle: "Core Policy Documents",
        termsTitle: "Terms of Service (ToS)",
        termsDesc: "Rules for using the platform, intellectual property rights, and liability limits.",
        privacyTitle: "Privacy Policy",
        privacyDesc: "How we process, encrypt, and protect your personal data in accordance with PDP laws.",
        sovereigntyTitle: "Data Sovereignty",
        sovereigntyDesc: "Declaration of user rights over their own aspiration data stored on the blockchain.",
        complianceTitle: "Global Standards & Compliance",
        comp1Title: "GDPR Compliant",
        comp1Desc: "We follow the highest data protection standards in the world.",
        comp2Title: "MIT License",
        comp2Desc: "Our source code is open and publicly auditable.",
        comp3Title: "ISO 27001 Ready",
        comp3Desc: "Our information security protocols are designed for institutional scale.",
        disclaimerTitle: "Disclaimer",
        disclaimerDesc: "Information provided by the platform is the result of AI analysis and should be used as supporting policy references, not as the sole basis for legal decision-making."
    }
  };

  const pt = pageTranslations[lang as keyof typeof pageTranslations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="max-w-4xl mb-32">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
            >
                <Gavel size={14} /> Regulatory Framework
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase"
            >
              Trust in <br/> <span className="text-vault-amber">Governance.</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl"
            >
              {pt.legalHeroSub}
            </motion.p>
        </div>

        {/* 2. CORE DOCUMENTS GRID */}
        <section className="mb-48">
            <h2 className="text-2xl font-black text-muted-foreground mb-16 uppercase tracking-[0.5em] opacity-40">{pt.docTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: pt.termsTitle, desc: pt.termsDesc, icon: <FileText />, color: "text-blue-400" },
                    { title: pt.privacyTitle, desc: pt.privacyDesc, icon: <ShieldCheck />, color: "text-vault-amber" },
                    { title: pt.sovereigntyTitle, desc: pt.sovereigntyDesc, icon: <Scale />, color: "text-green-400" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-12 bg-white/2 border border-white/10 rounded-[3rem] group"
                    >
                        <div className={`${item.color} mb-8 transition-transform group-hover:scale-110`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed mb-10">{item.desc}</p>
                        <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-vault-amber hover:gap-4 transition-all">
                            View Full Document <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. COMPLIANCE SECTION */}
        <section className="mb-48 bg-white/[0.02] border border-white/10 rounded-[5rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vault-amber/5 blur-[120px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.complianceTitle}</h2>
                    <div className="space-y-10">
                        {[
                            { title: pt.comp1Title, desc: pt.comp1Desc, icon: <Globe /> },
                            { title: pt.comp2Title, desc: pt.comp2Desc, icon: <Eye /> },
                            { title: pt.comp3Title, desc: pt.comp3Desc, icon: <Lock /> }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="w-12 h-12 bg-vault-amber/10 rounded-2xl flex items-center justify-center text-vault-amber shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-vault-card border border-white/10 p-12 rounded-[4rem] text-center">
                        <CheckCircle2 size={80} className="text-green-500 mx-auto mb-8 animate-pulse" />
                        <div className="text-3xl font-black text-foreground uppercase tracking-tighter">Verified Audit</div>
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] mt-4 italic">Platform Integrity: 100%</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 4. DISCLAIMER */}
        <section className="mb-48 p-16 bg-red-500/5 border border-red-500/20 rounded-[4rem]">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <AlertCircle size={64} className="text-red-500 shrink-0" />
                <div>
                    <h2 className="text-3xl font-black text-foreground mb-6 uppercase tracking-tighter">{pt.disclaimerTitle}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                        {pt.disclaimerDesc}
                    </p>
                </div>
            </div>
        </section>

        {/* 5. FOOTER NOTICE */}
        <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground opacity-30 mb-8">
                Dlibration Protocol © 2024. ALL RIGHTS RESERVED.
            </p>
            <div className="flex justify-center gap-8">
                {['Security Hall', 'Compliance Team', 'Legal Help'].map(link => (
                    <Link key={link} href="#" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-vault-amber transition-colors">
                        {link}
                    </Link>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
