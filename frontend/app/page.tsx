"use client";

import { createThirdwebClient } from "thirdweb";
import { ArrowRight, ShieldCheck, Database, Zap, Lock, Globe, UploadCloud, Cpu } from "lucide-react";
import Link from "next/link";
import { useLanguageStore } from "./../lib/store";
import { translations } from "./../lib/translations";

export default function HomePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-vault-amber selection:text-black overflow-x-hidden">

      {/* =========================================
          SECTION 1: HERO + CITY SILHOUETTE
      ========================================= */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        
        {/* Background Image: Kota Masa Depan */}
        <div className="absolute inset-0 z-0">
            {/* Gambar Kota Futuristik (Unsplash) */}
            <img 
              src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop" 
              alt="Future City"
              className="w-full h-full object-cover opacity-40"
            />
            {/* Overlay Gradient: Biar teks kebaca & blend ke section bawah */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]"></div>
        </div>

        {/* Content Hero */}
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-in fade-in zoom-in duration-700">
           {/* Badge */}
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-vault-amber/30 bg-vault-amber/10 text-vault-amber text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-vault-amber animate-pulse"></span>
              Dlibration V.1.0 Beta
           </div>

           <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
              Dlibra<span className="text-transparent bg-clip-text bg-gradient-to-r from-vault-amber to-yellow-600">tion</span>
           </h1>
           
           <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
             {t.heroDesc}
           </p>

           <div className="flex flex-col md:flex-row justify-center gap-4">
               <Link href="/dashboard" className="bg-vault-amber hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                  Suarakan Aspirasi <ArrowRight size={20} />
               </Link>
               <Link href="/explore" className="px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                  <Globe size={20} /> Pantau Demokrasi
               </Link>
           </div>
        </div>
      </section>


      {/* =========================================
          SECTION 2: HOW IT WORKS (PROTOCOL)
      ========================================= */}
      <section className="py-24 bg-[#050505] relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.howTitle}</h2>
               <div className="h-1 w-20 bg-vault-amber mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
               {/* Garis Penghubung (Hanya di Desktop) */}
               <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-vault-amber/50 to-transparent -z-10"></div>

               {/* Step 1 */}
               <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-vault-amber/30 transition-all group text-center">
                  <div className="w-20 h-20 bg-black border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,0,0,0.5)] relative z-10">
                     <UploadCloud size={32} className="text-vault-amber" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">1. {t.step1Title}</h3>
                  <p className="text-slate-400 text-sm">{t.step1Desc}</p>
               </div>

               {/* Step 2 */}
               <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-vault-amber/30 transition-all group text-center">
                  <div className="w-20 h-20 bg-black border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,0,0,0.5)] relative z-10">
                     <Cpu size={32} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">2. {t.step2Title}</h3>
                  <p className="text-slate-400 text-sm">{t.step2Desc}</p>
               </div>

               {/* Step 3 */}
               <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-vault-amber/30 transition-all group text-center">
                  <div className="w-20 h-20 bg-black border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,0,0,0.5)] relative z-10">
                     <Lock size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">3. {t.step3Title}</h3>
                  <p className="text-slate-400 text-sm">{t.step3Desc}</p>
               </div>
            </div>
         </div>
      </section>


      {/* =========================================
          SECTION 3: FEATURES GRID
      ========================================= */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Kiri: Teks */}
                <div>
                   <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                      {t.featTitle} <br/> 
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-vault-amber to-yellow-700">
                        Blockchain Native.
                      </span>
                   </h2>
                   <p className="text-slate-400 text-lg mb-8">
                     {t.sec1desc}
                   </p>
                   
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="mt-1"><ShieldCheck className="text-vault-amber" /></div>
                         <div>
                            <h4 className="font-bold text-white text-lg">{t.feat1Title}</h4>
                            <p className="text-slate-400 text-sm">{t.feat1Desc}</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="mt-1"><Globe className="text-blue-500" /></div>
                         <div>
                            <h4 className="font-bold text-white text-lg">{t.feat2Title}</h4>
                            <p className="text-slate-400 text-sm">{t.feat2Desc}</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="mt-1"><Zap className="text-yellow-400" /></div>
                         <div>
                            <h4 className="font-bold text-white text-lg">{t.feat3Title}</h4>
                            <p className="text-slate-400 text-sm">{t.feat3Desc}</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Kanan: Visual Abstrak */}
                 <div className="relative h-[400px] bg-gradient-to-br from-vault-amber/10 to-black rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Animasi Database */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <Database size={150} className="text-vault-amber/20 absolute animate-pulse" />
                    <div className="relative z-10 bg-black/80 backdrop-blur border border-vault-amber/30 p-8 rounded-2xl max-w-xs text-center shadow-2xl">
                       <span className="text-4xl font-black text-white">100%</span>
                       <p className="text-vault-amber uppercase tracking-widest text-xs font-bold mt-2">Verified Transparency</p>
                    </div>
                 </div>
             </div>
         </div>
      </section>

      {/* =========================================
          SECTION 3.5: BENEFITS (CITIZENS VS GOV)
      ========================================= */}
      <section className="py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Satu Platform, <span className="text-vault-amber">Dua Solusi</span></h2>
                  <p className="text-slate-400 max-w-2xl mx-auto text-lg">Dlibration dibangun untuk menjembatani kesenjangan antara suara rakyat dan meja pembuat kebijakan.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Citizen Card */}
                  <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 rounded-[2.5rem] p-10 hover:border-blue-500/50 transition-all">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                          <Globe className="text-blue-500" size={28} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">Untuk Warga</h3>
                      <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                              <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={20}/>
                              <span className="text-slate-300"><b>Aman & Anonim:</b> Laporan sensitif dienkripsi, identitas Anda terlindungi.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={20}/>
                              <span className="text-slate-300"><b>Tanpa Sensor:</b> Aspirasi yang sesuai aturan dicatat abadi di Blockchain.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={20}/>
                              <span className="text-slate-300"><b>Kawal Bersama:</b> Pantau status laporan dan dukung aspirasi warga lain secara transparan.</span>
                          </li>
                      </ul>
                  </div>

                  {/* Government Card */}
                  <div className="bg-gradient-to-br from-vault-amber/20 to-black border border-vault-amber/20 rounded-[2.5rem] p-10 hover:border-vault-amber/50 transition-all">
                      <div className="w-16 h-16 bg-vault-amber/10 rounded-2xl flex items-center justify-center mb-6 border border-vault-amber/30">
                          <Cpu className="text-vault-amber" size={28} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">Untuk Pemerintah</h3>
                      <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                              <ShieldCheck className="text-vault-amber shrink-0 mt-1" size={20}/>
                              <span className="text-slate-300"><b>Filter Anti-Spam (AI):</b> Hanya menerima laporan yang sudah divalidasi kualitasnya.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <ShieldCheck className="text-vault-amber shrink-0 mt-1" size={20}/>
                              <span className="text-slate-300"><b>Policy Brief Otomatis:</b> Dapatkan ringkasan tren aspirasi mingguan dari AI.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <ShieldCheck className="text-vault-amber shrink-0 mt-1" size={20}/>
                              <span className="text-slate-300"><b>Takedown Legal:</b> Sembunyikan konten fitnah/hoaks tanpa merusak integritas data historis.</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* =========================================
          SECTION 3.8: FAQ
      ========================================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                  {/* FAQ 1 */}
                  <div className="bg-black border border-white/10 p-6 rounded-2xl">
                      <h4 className="text-lg font-bold text-white mb-2">Apakah saya harus membayar biaya (Gas Fee) untuk mengirim aspirasi?</h4>
                      <p className="text-slate-400">Tidak. Platform kami menggunakan teknologi <b>Account Abstraction (Smart Wallets)</b>. Seluruh biaya transaksi (Gas Fee) ditanggung oleh protokol (Sponsored by Protocol). Anda hanya butuh koneksi internet.</p>
                  </div>
                  {/* FAQ 2 */}
                  <div className="bg-black border border-white/10 p-6 rounded-2xl">
                      <h4 className="text-lg font-bold text-white mb-2">Bagaimana jika ada laporan hoaks atau fitnah?</h4>
                      <p className="text-slate-400">Sistem AI kami akan memblokir sebagian besar kata-kata kasar dan spam sebelum masuk ke blockchain. Jika ada laporan lolos yang terbukti fitnah, Admin dapat melakukan <i>Takedown</i> agar tidak tampil di publik, namun bukti transaksinya tetap ada di blockchain untuk keperluan hukum.</p>
                  </div>
                  {/* FAQ 3 */}
                  <div className="bg-black border border-white/10 p-6 rounded-2xl">
                      <h4 className="text-lg font-bold text-white mb-2">Apakah identitas saya aman?</h4>
                      <p className="text-slate-400">Jika Anda memilih opsi <b>Secret Report</b>, data Anda akan dienkripsi dan hanya dapat dibuka oleh instansi terkait yang memiliki otoritas kunci dekripsi.</p>
                  </div>
              </div>
          </div>
      </section>


      {/* =========================================
          SECTION 4: CALL TO ACTION (CTA)
      ========================================= */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vault-amber/10 rounded-full blur-[100px] -z-10"></div>
         
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">{t.ctaTitle}</h2>
            <p className="text-slate-400 text-xl mb-10">{t.ctaDesc}</p>
            
            <Link href="/dashboard" className="inline-flex items-center gap-3 bg-white text-black hover:bg-vault-amber px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
               {t.ctaBtn} <ArrowRight />
            </Link>
         </div>

         {/* Footer Copyright Kecil */}
         <div className="mt-20 pt-10 border-t border-white/5 text-slate-600 text-sm">
            &copy; 2026 Dlibration Protocol. Open source democratic infrastructure.
         </div>
      </section>

    </main>
  );
}