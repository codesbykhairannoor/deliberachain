"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Building2, 
  ArrowRight, 
  BarChart3, 
  PieChart, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe,
  Lock,
  Search,
  Layout,
  Activity,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function GovernmentsSolutionPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const pageTranslations = {
    id: {
        govTitle: "Kepemimpinan Berbasis Bukti",
        govSub: "Dlibration mentransformasi instansi pemerintah menjadi organisasi yang responsif, efisien, dan dicintai oleh warga.",
        metricsTitle: "Metrik Efisiensi Birokrasi",
        met1Title: "Pengurangan Biaya",
        met1Desc: "Otomasi analisis AI mengurangi biaya operasional riset publik hingga 60%.",
        met2Title: "Kecepatan Respon",
        met2Desc: "Waktu dari aspirasi ke draf kebijakan berkurang dari bulan ke hitungan hari.",
        met3Title: "Akurasi Data",
        met3Desc: "Data on-chain memastikan tidak ada laporan yang hilang atau terduplikasi.",
        bridgeTitle: "Jembatan Data Antar Lembaga",
        bridgeDesc: "Kami memungkinkan sinkronisasi data yang aman antar departemen tanpa risiko kebocoran data pribadi warga.",
        point1: "Sinkronisasi Real-time",
        point2: "Kontrol Akses Granular",
        point3: "Audit Log Institusional",
        smartCityTitle: "Integritas Kota Cerdas",
        smartCityDesc: "Dlibration dirancang untuk berintegrasi dengan infrastruktur IoT dan sensor urban untuk validasi masalah lapangan secara otomatis.",
    },
    en: {
        govTitle: "Evidence-Based Leadership",
        govSub: "Dlibration transforms government agencies into responsive, efficient organizations loved by their citizens.",
        metricsTitle: "Bureaucratic Efficiency Metrics",
        met1Title: "Cost Reduction",
        met1Desc: "AI analysis automation reduces operational public research costs by up to 60%.",
        met2Title: "Response Speed",
        met2Desc: "Time from aspiration to policy draft reduced from months to days.",
        met3Title: "Data Accuracy",
        met3Desc: "On-chain data ensures no lost or duplicated reports.",
        bridgeTitle: "Inter-Agency Data Bridge",
        bridgeDesc: "We enable secure data synchronization between departments without the risk of citizen personal data leaks.",
        point1: "Real-time Synchronization",
        point2: "Granular Access Control",
        point3: "Institutional Audit Logs",
        smartCityTitle: "Smart City Integrity",
        smartCityDesc: "Dlibration is designed to integrate with IoT infrastructure and urban sensors for automatic field issue validation.",
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
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 font-black text-[10px] tracking-[0.2em] uppercase mb-8">
                    <Building2 size={14} /> Agency Empowerment
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] uppercase">
                    Data-Driven <br/> 
                    <span className="text-vault-amber">Governance.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl font-medium">
                    {lang === 'id' 
                      ? "Birokrasi tidak harus lambat. Dlibration memberikan instrumen bagi pemimpin untuk mengambil keputusan yang tepat sasaran berdasarkan data aspirasi yang sudah terverifikasi secara on-chain."
                      : "Bureaucracy doesn't have to be slow. Dlibration provides instruments for leaders to make targeted decisions based on on-chain verified aspiration data."}
                </p>
                <div className="flex flex-wrap gap-6">
                    <Link href="/contact" className="bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber transition-all shadow-2xl">
                        {t.btnRequestDemo} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="bg-vault-card border border-white/10 p-2 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="bg-[#050505] rounded-[3.5rem] p-16 relative overflow-hidden flex flex-col items-center">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10 w-full">
                            <div className="flex items-center justify-between mb-10">
                                <span className="text-xs font-black uppercase text-foreground">Global Sentiment Heatmap</span>
                                <Activity className="text-green-500" size={18} />
                            </div>
                            <div className="grid grid-cols-4 gap-4 h-40 items-end mb-8">
                                {[60, 40, 90, 70, 30, 100, 50, 80].map((h, i) => (
                                    <div key={i} className="bg-vault-amber/20 border border-vault-amber/30 rounded-t-lg relative group/bar">
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            className="bg-vault-amber rounded-t-lg"
                                        ></motion.div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Regional Focus</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-vault-amber">Sector 7-A</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. EFFICIENCY METRICS SECTION */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-24 tracking-tighter text-center uppercase">{pt.metricsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: pt.met1Title, desc: pt.met1Desc, icon: <PieChart />, color: "text-blue-400" },
                    { title: pt.met2Title, desc: pt.met2Desc, icon: <Zap />, color: "text-vault-amber" },
                    { title: pt.met3Title, desc: pt.met3Desc, icon: <CheckCircle2 />, color: "text-green-400" }
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
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. INTER-AGENCY BRIDGE SECTION */}
        <section className="mb-48 bg-white/[0.02] border border-white/10 rounded-[4rem] p-16 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-20 h-20 bg-vault-card border border-white/10 rounded-2xl flex items-center justify-center text-blue-400">
                            <Building2 />
                        </div>
                        <div className="h-20 w-[2px] bg-gradient-to-b from-blue-400 to-vault-amber animate-pulse"></div>
                        <div className="w-20 h-20 bg-vault-card border border-white/10 rounded-2xl flex items-center justify-center text-vault-amber">
                            <Layout />
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.bridgeTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">{pt.bridgeDesc}</p>
                    <div className="space-y-6">
                        {[pt.point1, pt.point2, pt.point3].map((point, i) => (
                            <div key={i} className="flex items-center gap-4 text-foreground font-bold">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                                    <Globe size={20} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 4. SMART CITY INTEGRATION */}
        <section className="mb-48 text-center max-w-4xl mx-auto">
            <Layout className="text-vault-amber mx-auto mb-10" size={80} />
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter uppercase">{pt.smartCityTitle}</h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-12">
                {pt.smartCityDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                {['IoT Nodes', 'Urban Sensors', 'Auto-Verification', 'Digital Twin Sync'].map(tag => (
                    <div key={tag} className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-muted-foreground">
                        {tag}
                    </div>
                ))}
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 bg-blue-600 border border-white/10 rounded-[5rem] text-center relative overflow-hidden group">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                <Building2 size={80} className="text-white mx-auto mb-12 animate-float opacity-30" />
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                    Lead with <br/> Certainty.
                </h2>
                <p className="text-xl text-white/80 mb-12 font-bold leading-relaxed">
                    Join the digital transformation of public service. Dlibration gives you the tools to be a truly responsive and data-driven leader.
                </p>
                <Link href="/contact" className="bg-white text-blue-600 px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-4">
                   Book Executive Demo <ArrowRight size={28} />
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
