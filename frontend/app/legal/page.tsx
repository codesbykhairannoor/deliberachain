"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Scale, FileText, ShieldCheck, Lock } from "lucide-react";

export default function LegalPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
          {t.legalTitle}
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          {t.legalSub}
        </p>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto space-y-16">
          <LegalItem 
            icon={FileText} 
            title="Ketentuan Penggunaan (Terms of Service)" 
            desc="Dengan menggunakan platform ini, Anda setuju untuk menyampaikan aspirasi yang jujur, tidak mengandung fitnah, kebencian, atau informasi palsu (hoaks). Kami berhak menyembunyikan konten yang melanggar aturan melalui sistem moderasi AI." 
          />
          <LegalItem 
            icon={ShieldCheck} 
            title="Kebijakan Privasi (Privacy Policy)" 
            desc="Kami berkomitmen melindungi privasi Anda. Laporan yang bersifat rahasia akan dienkripsi dengan standar AES-256. Alamat wallet Anda akan terlihat secara publik sebagai bagian dari audit blockchain, namun kami tidak menyimpan data pribadi di server pusat." 
          />
          <LegalItem 
            icon={Scale} 
            title="Kepatuhan Regulasi" 
            desc="DeliberateChain berupaya mematuhi regulasi keterbukaan informasi publik dan perlindungan data pribadi yang berlaku di wilayah yurisdiksi masing-masing mitra pemerintah." 
          />
      </section>

      {/* FOOTER INFO */}
      <section className="py-24 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <Lock size={32} className="text-slate-700 mx-auto mb-6" />
              <p className="text-slate-500 text-sm leading-relaxed">
                  Terakhir diperbarui: 23 April 2026. Protokol ini bersifat open-source dan didistribusikan di bawah Lisensi MIT. Segala bentuk pelanggaran hukum tetap menjadi tanggung jawab pengguna sesuai dengan regulasi negara masing-masing.
              </p>
          </div>
      </section>
    </div>
  );
}

function LegalItem({ icon: Icon, title, desc }: any) {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="p-4 bg-white/5 rounded-2xl shrink-0">
                <Icon size={32} className="text-vault-amber" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{desc}</p>
            </div>
        </div>
    );
}
