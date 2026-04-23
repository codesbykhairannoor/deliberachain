"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Landmark, Briefcase, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export default function PartnersPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
          {t.partnersTitle}
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          {t.partnersSub}
        </p>
      </section>

      {/* PARTNER BENEFITS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-4xl font-bold text-white mb-8">Solusi Digital untuk Instansi Pemerintah</h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      Kami menyediakan infrastruktur siap pakai untuk mengelola aspirasi publik secara cerdas, transparan, dan auditable. Tidak perlu membangun sistem dari nol.
                  </p>
                  <div className="space-y-6">
                      <Benefit icon={Zap} title="Integrasi Instan" desc="Gunakan API kami untuk menghubungkan portal daerah Anda dengan jaringan DeliberateChain." />
                      <Benefit icon={ShieldCheck} title="Kepatuhan Hukum" desc="Sistem kami dirancang sesuai dengan standar perlindungan data pribadi dan keterbukaan informasi publik." />
                  </div>
              </div>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">Ajukan Kemitraan</h3>
                  <form className="space-y-4">
                      <input type="text" placeholder="Nama Instansi" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-vault-amber outline-none transition-all" />
                      <input type="email" placeholder="Email Dinas / Resmi" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-vault-amber outline-none transition-all" />
                      <textarea placeholder="Pesan Singkat" rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-vault-amber outline-none transition-all"></textarea>
                      <button className="w-full bg-vault-amber text-black font-black py-4 rounded-xl hover:bg-yellow-400 transition-all">Kirim Permintaan <ArrowRight className="inline-block ml-2" size={18} /></button>
                  </form>
              </div>
          </div>
      </section>

      {/* PARTNER LOGOS MOCKUP */}
      <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-slate-600 text-sm font-bold uppercase tracking-widest mb-12">Instansi yang Sudah Bergabung</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
                <Landmark size={48} className="text-white" />
                <Landmark size={48} className="text-white" />
                <Landmark size={48} className="text-white" />
                <Landmark size={48} className="text-white" />
              </div>
          </div>
      </section>
    </div>
  );
}

function Benefit({ icon: Icon, title, desc }: any) {
    return (
        <div className="flex gap-4">
            <div className="mt-1"><Icon className="text-vault-amber" size={24} /></div>
            <div>
                <h4 className="text-white font-bold mb-1">{title}</h4>
                <p className="text-slate-500 text-sm">{desc}</p>
            </div>
        </div>
    );
}
