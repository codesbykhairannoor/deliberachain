"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { BarChart3, PieChart, Activity, CheckCircle2, AlertCircle } from "lucide-react";

export default function TransparencyPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
          {t.transparencyTitle}
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          {t.transparencySub}
        </p>
      </section>

      {/* LIVE STATS MOCKUP */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatItem label="Total Aspirasi" value="12,492" trend="+12%" icon={Activity} color="amber" />
        <StatItem label="Dukungan Warga" value="450k+" trend="+5%" icon={CheckCircle2} color="green" />
        <StatItem label="Kebijakan Terbit" value="84" trend="+2" icon={BarChart3} color="blue" />
        <StatItem label="Laporan Tak Pantas" value="1,203" trend="-15%" icon={AlertCircle} color="red" />
      </section>

      {/* DETAILED REPORT SECTIONS */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 bg-black border border-white/10 rounded-[2.5rem] p-10">
                <h3 className="text-2xl font-bold text-white mb-8">Distribusi Isu Nasional</h3>
                <div className="space-y-6">
                    <ProgressBar label="Infrastruktur" value={45} color="bg-vault-amber" />
                    <ProgressBar label="Kesehatan" value={25} color="bg-blue-500" />
                    <ProgressBar label="Pendidikan" value={20} color="bg-green-500" />
                    <ProgressBar label="Lainnya" value={10} color="bg-slate-500" />
                </div>
            </div>
            <div className="lg:col-span-4 bg-vault-amber/10 border border-vault-amber/20 rounded-[2.5rem] p-10 flex flex-col justify-center">
                <PieChart size={64} className="text-vault-amber mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Audit Akurasi AI</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Sistem Gemini AI kami mencapai tingkat akurasi moderasi sebesar <b>99.4%</b> berdasarkan hasil audit tim independen bulan Maret 2026.
                </p>
                <button className="text-vault-amber font-bold text-sm uppercase tracking-widest hover:underline">Download Full Report (PDF)</button>
            </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ label, value, trend, icon: Icon, color }: any) {
  const colorMap = {
    amber: 'text-vault-amber',
    green: 'text-green-500',
    blue: 'text-blue-500',
    red: 'text-red-500'
  };
  return (
    <div className="bg-black border border-white/5 p-8 rounded-3xl">
      <Icon size={24} className={`${colorMap[color as keyof typeof colorMap]} mb-4`} />
      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-black text-white font-mono">{value}</span>
        <span className="text-xs font-bold text-green-500">{trend}</span>
      </div>
    </div>
  );
}

function ProgressBar({ label, value, color }: any) {
    return (
        <div>
            <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${value}%` }}></div>
            </div>
        </div>
    );
}
