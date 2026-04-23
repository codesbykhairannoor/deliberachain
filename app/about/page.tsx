"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Target, Users, Landmark, Award } from "lucide-react";

export default function AboutPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="animate-in fade-in duration-700">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#f59e0b15,transparent_50%)]"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
            {t.aboutTitle}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.aboutSub}
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[3rem] hover:border-vault-amber/30 transition-all group">
            <Target size={40} className="text-vault-amber mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-bold text-white mb-4">Visi Kami</h2>
            <p className="text-slate-400 leading-relaxed">
              Mewujudkan ekosistem demokrasi digital dunia yang paling transparan, di mana setiap suara rakyat dihargai dan tidak dapat dimanipulasi oleh kepentingan manapun.
            </p>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-10 rounded-[3rem] hover:border-vault-amber/30 transition-all group">
            <Users size={40} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-bold text-white mb-4">Misi Kami</h2>
            <p className="text-slate-400 leading-relaxed">
              Mengintegrasikan teknologi Blockchain dan Kecerdasan Buatan (AI) ke dalam sistem birokrasi publik untuk mempercepat respon pemerintah terhadap aspirasi warga secara adil.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nilai Inti Protokol</h2>
          <div className="h-1 w-20 bg-vault-amber mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Landmark, title: "Integritas Data", desc: "Data aspirasi disimpan di Ledger publik yang tidak bisa diubah." },
            { icon: Award, title: "Kualitas Berbasis AI", desc: "Setiap laporan divalidasi oleh AI untuk memastikan standar kualitas." },
            { icon: Users, title: "Inklusivitas", desc: "Tanpa batasan jarak dan waktu, semua warga punya hak akses yang sama." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-white/5 rounded-3xl hover:bg-white/5 transition-colors">
              <item.icon size={32} className="text-vault-amber mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
