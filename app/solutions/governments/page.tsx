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
  CheckCircle2,
  Sparkles
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
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-500 font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm">
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
                    <Link href="/contact" className="bg-foreground text-background px-12 py-6 rounded-2xl font-black flex items-center gap-3 hover:bg-vault-amber hover:text-black transition-all shadow-2xl uppercase text-sm tracking-widest active:scale-95">
                        {t.btnRequestDemo} <ArrowRight size={22} />
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
            >
                <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
                <div className="bg-muted border border-border p-4 rounded-[4rem] shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform duration-700">
                    <div className="bg-background rounded-[3.5rem] p-16 relative overflow-hidden flex flex-col items-center border border-border shadow-inner">
                        <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                        <div className="relative z-10 w-full">
                            <div className="flex items-center justify-between mb-12">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground opacity-60">Executive Sentiment Heatmap</span>
                                <Activity className="text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]" size={20} />
                            </div>
                            <div className="grid grid-cols-8 gap-4 h-48 items-end mb-12">
                                {[60, 40, 90, 70, 30, 100, 50, 80].map((h, i) => (
                                    <div key={i} className="bg-muted border border-border rounded-t-xl relative group/bar shadow-sm">
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            className="bg-vault-amber rounded-t-xl shadow-lg relative group-hover/bar:brightness-110 transition-all"
                                        >
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-[8px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity font-black">
                                                {h}%
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 bg-muted border border-border rounded-3xl flex items-center justify-between shadow-sm">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground italic">Target: Sector 7-Alpha</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-vault-amber animate-pulse">Active Focus</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* 2. EFFICIENCY METRICS SECTION */}
        <section className="mb-48">
            <h2 className="text-4xl md:text-7xl font-black text-foreground mb-24 tracking-tighter text-center uppercase leading-none">{pt.metricsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {[
                    { title: pt.met1Title, desc: pt.met1Desc, icon: <PieChart />, color: "text-blue-500" },
                    { title: pt.met2Title, desc: pt.met2Desc, icon: <Zap />, color: "text-vault-amber" },
                    { title: pt.met3Title, desc: pt.met3Desc, icon: <CheckCircle2 />, color: "text-green-500" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-16 bg-muted/50 border border-border rounded-[4rem] group shadow-sm hover:border-vault-amber/30 transition-all"
                    >
                        <div className={`${item.color} mb-10 transition-transform group-hover:scale-110 bg-background w-24 h-24 flex items-center justify-center rounded-[2rem] border border-border shadow-inner`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight leading-none">{item.title}</h3>
                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* 3. INTER-AGENCY BRIDGE SECTION */}
        <section className="mb-48 bg-muted/50 border border-border rounded-[5rem] p-16 lg:p-32 overflow-hidden relative shadow-inner">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] -z-10"></div>
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="flex flex-col items-center gap-12 relative">
                        <div className="w-32 h-32 bg-background border border-border rounded-[2.5rem] flex items-center justify-center text-blue-500 shadow-2xl group hover:border-blue-500 transition-colors relative z-10">
                            <Building2 size={48} />
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-black">L1</div>
                        </div>
                        <div className="h-40 w-[4px] bg-gradient-to-b from-blue-500 via-vault-amber to-green-500 animate-pulse opacity-30 rounded-full"></div>
                        <div className="w-32 h-32 bg-background border border-border rounded-[2.5rem] flex items-center justify-center text-vault-amber shadow-2xl group hover:border-vault-amber transition-colors relative z-10">
                            <Layout size={48} />
                            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-vault-amber rounded-full flex items-center justify-center text-black text-[10px] font-black">L2</div>
                        </div>
                        
                        {/* Connecting Lines Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-border rounded-full -z-10 animate-spin-slow opacity-20"></div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-12 tracking-tighter leading-none uppercase">{pt.bridgeTitle}</h2>
                    <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed italic">{pt.bridgeDesc}</p>
                    <div className="space-y-10">
                        {[pt.point1, pt.point2, pt.point3].map((point, i) => (
                            <div key={i} className="flex items-center gap-6 text-foreground font-black uppercase text-xs tracking-[0.2em]">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0 border border-blue-500/20 shadow-sm">
                                    <Globe size={28} />
                                </div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 4. SMART CITY INTEGRATION */}
        <section className="mb-48 text-center max-w-5xl mx-auto">
            <div className="w-28 h-28 bg-muted border border-border rounded-[2.5rem] flex items-center justify-center mx-auto mb-16 shadow-inner group hover:scale-110 transition-transform">
                <Sparkles className="text-vault-amber" size={56} />
            </div>
            <h2 className="text-4xl md:text-8xl font-black text-foreground mb-12 tracking-tighter uppercase leading-none">{pt.smartCityTitle}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-20 italic max-w-4xl mx-auto">
                {pt.smartCityDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
                {['IoT Infrastructure', 'Urban Sensors', 'Auto-Validation', 'Digital Twin Sync', 'Real-time Analytics'].map(tag => (
                    <div key={tag} className="px-12 py-5 bg-muted border border-border rounded-[2rem] text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:border-vault-amber hover:text-foreground transition-all cursor-default shadow-sm active:scale-95">
                        {tag}
                    </div>
                ))}
            </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="p-20 md:p-32 bg-blue-600 border border-blue-500/30 rounded-[6rem] text-center relative overflow-hidden group shadow-[0_0_120px_rgba(37,99,235,0.2)]">
             <div className="bg-pattern-diagonal absolute inset-0 opacity-20"></div>
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-16 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Building2 size={48} className="text-blue-600" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                    Lead with <br/> Certainty.
                </h2>
                <p className="text-2xl text-white/80 mb-16 font-black leading-relaxed max-w-4xl mx-auto uppercase italic tracking-tight">
                    Join the digital transformation of public service. Dlibration gives you the tools to be a truly responsive and data-driven leader.
                </p>
                <Link href="/contact" className="bg-white text-blue-600 px-20 py-10 rounded-[3rem] font-black text-3xl transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-6 active:scale-95 group/btn overflow-hidden relative">
                   <span className="relative z-10">Book Executive Demo</span> <ArrowRight size={36} className="relative z-10 group-hover/btn:translate-x-3 transition-transform" />
                   <div className="absolute inset-0 bg-blue-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </Link>
             </div>
        </section>

      </div>
    </div>
  );
}
