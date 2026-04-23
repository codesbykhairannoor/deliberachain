"use client";

import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
          {t.contactTitle}
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          {t.contactSub}
        </p>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: INFO */}
          <div className="lg:col-span-5 space-y-12">
              <h2 className="text-3xl font-bold text-white">{lang === 'id' ? "Hubungi Tim Kami" : "Contact Our Team"}</h2>
              <p className="text-slate-400 leading-relaxed">
                  {t.contactSupportDesc}
              </p>
              
              <div className="space-y-6">
                  <ContactRow icon={Mail} label="Email Support" value="support@deliberatechain.org" />
                  <ContactRow icon={MessageCircle} label="WhatsApp Bot" value="+62 812 3456 7890" />
                  <ContactRow icon={MapPin} label="Office (HQ)" value="Jl. Blockchain No. 1, Jakarta, Indonesia" />
              </div>
          </div>
 
          {/* RIGHT: FORM */}
          <div className="lg:col-span-7">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-10 md:p-12">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{lang === 'id' ? "Nama Lengkap" : "Full Name"}</label>
                          <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-vault-amber outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{lang === 'id' ? "Alamat Email" : "Email Address"}</label>
                          <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-vault-amber outline-none transition-all" />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{lang === 'id' ? "Subjek Bantuan" : "Support Subject"}</label>
                          <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-vault-amber outline-none transition-all">
                              <option>{lang === 'id' ? "Masalah Teknis Wallet" : "Wallet Technical Issues"}</option>
                              <option>{lang === 'id' ? "Laporan Konten Tidak Pantas" : "Inappropriate Content Report"}</option>
                              <option>{lang === 'id' ? "Pertanyaan Kemitraan" : "Partnership Inquiry"}</option>
                              <option>{lang === 'id' ? "Lainnya" : "Others"}</option>
                          </select>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{lang === 'id' ? "Detail Pesan" : "Message Detail"}</label>
                          <textarea rows={6} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-vault-amber outline-none transition-all"></textarea>
                      </div>
                      <button className="md:col-span-2 bg-white text-black font-black py-5 rounded-2xl hover:bg-vault-amber transition-all flex items-center justify-center gap-3">
                          <Send size={20} /> {t.contactFormTitle}
                      </button>
                  </form>
              </div>
          </div>
      </section>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: any) {
    return (
        <div className="flex gap-6 items-center">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                <Icon size={20} className="text-vault-amber" />
            </div>
            <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</p>
                <p className="text-white font-bold">{value}</p>
            </div>
        </div>
    );
}
