"use client";

import { 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Zap, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  TrendingUp, 
  Target,
  MessageSquare,
  Lock,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useLanguageStore } from "./../lib/store";
import { translations } from "./../lib/translations";
import { motion } from "framer-motion";

export default function HomePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <main className="min-h-screen bg-background text-slate-200 overflow-x-hidden">
      
      {/* 1. HERO SECTION - Left Aligned Text with Floating Objects */}
      <header className="relative pt-48 pb-32 lg:pt-64 lg:pb-52 overflow-hidden bg-background border-b border-white/5">
          <div className="absolute top-0 right-0 w-[800px] h-full bg-vault-amber/5 rounded-full blur-[150px] -z-10"></div>
          <div className="bg-pattern-grid absolute inset-0 -z-20 opacity-20"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="text-left">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
                  >
                      <span className="flex h-1.5 w-1.5 rounded-full bg-vault-amber animate-pulse"></span>
                      Next-Gen Digital Governance
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white mb-8"
                  >
                    {t.homeHeroTitle}
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed opacity-80 max-w-xl mb-12"
                  >
                    {t.homeHeroSub}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                  >
                      <Link href="/dashboard" className="w-full sm:w-auto bg-vault-amber hover:bg-yellow-500 text-black px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(245,158,11,0.2)] group">
                        {t.btnGetStarted} <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-all text-white flex items-center justify-center gap-3">
                        {t.btnRequestDemo}
                      </Link>
                  </motion.div>
              </div>

              {/* Interactive Visual Right Side */}
              <div className="relative hidden lg:block">
                  <div className="absolute -inset-10 bg-vault-amber/10 blur-[120px] rounded-full -z-10"></div>
                  <div className="bg-vault-card border border-white/10 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                      <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
                      <div className="relative z-10 flex flex-col items-center gap-8 py-12">
                          <motion.div 
                             animate={{ rotate: 360 }}
                             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                             className="w-32 h-32 border-4 border-dashed border-vault-amber/20 rounded-full flex items-center justify-center"
                          >
                             <div className="w-16 h-16 bg-vault-amber rounded-3xl flex items-center justify-center text-black shadow-2xl">
                                <Zap size={32} fill="currentColor" />
                             </div>
                          </motion.div>
                          <div className="text-center">
                              <div className="text-3xl font-black text-white mb-2">Immutable Proof</div>
                              <div className="text-xs font-black uppercase tracking-[0.5em] text-vault-amber">Verification active</div>
                          </div>
                          <div className="w-full grid grid-cols-2 gap-4">
                              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                                  <div className="text-xl font-bold text-white">0x...7a2</div>
                                  <div className="text-[10px] text-slate-500 font-bold uppercase">Latest Commit</div>
                              </div>
                              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                                  <div className="text-xl font-bold text-white">2.4s</div>
                                  <div className="text-[10px] text-slate-500 font-bold uppercase">Avg Response</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* Floating Icons */}
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 w-20 h-20 bg-vault-card border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">🛡️</motion.div>
                  <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-10 -left-10 w-24 h-24 bg-vault-card border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl text-2xl">⚖️</motion.div>
              </div>
          </div>
      </header>

      {/* 2. TRUST BAR - Clean Grid */}
      <section className="py-20 border-b border-white/5 bg-white/2">
          <div className="max-w-7xl mx-auto px-6">
              <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-12">{lang === 'id' ? "Segmen Pengguna Potensial" : "Potential User Segments"}</p>
              <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-20 grayscale group hover:opacity-100 transition-all duration-700">
                  <div className="text-2xl font-black text-white flex items-center gap-2 italic">INSTITUSI <span className="text-vault-amber">PENDIDIKAN</span></div>
                  <div className="text-2xl font-black text-white flex items-center gap-2 italic">PEMERINTAH <span className="text-vault-amber">DAERAH</span></div>
                  <div className="text-2xl font-black text-white flex items-center gap-2 italic">ORGANISASI <span className="text-vault-amber">SOSIAL</span></div>
                  <div className="text-2xl font-black text-white flex items-center gap-2 italic">KOMUNITAS <span className="text-vault-amber">WARGA</span></div>
              </div>
          </div>
      </section>

      {/* 3. PROBLEM VS SOLUTION - Grid Layout with Different Cards */}
      <section className="py-40 relative">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-32">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">{t.homeProblemTitle}</h2>
                  <p className="text-slate-500 font-medium max-w-2xl mx-auto">{t.homeProblemSub}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                  <div className="p-12 bg-white/2 border border-red-500/10 rounded-[3rem] relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-red-500/20 group-hover:scale-110 transition-transform">
                          <Lock size={120} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                          <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">01</span>
                          Sistem Konvensional
                      </h3>
                      <ul className="space-y-6 text-slate-400">
                          <li className="flex gap-4">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                              <span>Data aspirasi mudah dimanipulasi atau dihapus oleh oknum.</span>
                          </li>
                          <li className="flex gap-4">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                              <span>Kurangnya transparansi tindak lanjut kebijakan.</span>
                          </li>
                          <li className="flex gap-4">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                              <span>Birokrasi yang lambat merespon ribuan suara rakyat.</span>
                          </li>
                      </ul>
                  </div>

                  <div className="p-12 bg-vault-amber/5 border border-vault-amber/20 rounded-[3rem] relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-vault-amber/20 group-hover:scale-110 transition-transform">
                          <Zap size={120} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                          <span className="w-8 h-8 rounded-full bg-vault-amber/20 flex items-center justify-center text-vault-amber text-xs">02</span>
                          Protokol Dlibration
                      </h3>
                      <ul className="space-y-6 text-slate-200">
                          <li className="flex gap-4">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vault-amber shrink-0"></div>
                              <span>Immutable Blockchain Records: Data abadi & transparan.</span>
                          </li>
                          <li className="flex gap-4">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vault-amber shrink-0"></div>
                              <span>AI-Driven Analysis: Ringkasan kebijakan otomatis dalam hitungan detik.</span>
                          </li>
                          <li className="flex gap-4">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vault-amber shrink-0"></div>
                              <span>Real-time Public Audit: Setiap tindakan pemerintah terpantau.</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. HOW IT WORKS - Loop / Steps Layout */}
      <section className="py-40 bg-white/2 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-32 tracking-tighter text-center">{t.homeHowTitle}</h2>
              
              <div className="relative">
                  <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/10 hidden lg:block"></div>
                  
                  <div className="space-y-32 relative z-10">
                      {[
                        { title: t.step1Title, desc: t.step1Desc, icon: <MessageSquare size={32} />, side: "left" },
                        { title: t.step2Title, desc: t.step2Desc, icon: <Cpu size={32} />, side: "right" },
                        { title: t.step3Title, desc: t.step3Desc, icon: <Database size={32} />, side: "left" }
                      ].map((step, idx) => (
                        <div key={idx} className={`flex flex-col lg:flex-row items-center gap-20 ${step.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={`flex-1 ${step.side === 'left' ? 'lg:text-right' : 'lg:text-left'}`}>
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-2xl text-vault-amber mb-8 ${step.side === 'left' ? 'lg:ml-auto' : ''}`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed">{step.desc}</p>
                            </div>
                            <div className="w-20 h-20 bg-background border-4 border-vault-amber rounded-full flex items-center justify-center text-vault-amber font-black text-2xl relative z-10 shrink-0 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                                {idx + 1}
                            </div>
                            <div className="flex-1 hidden lg:block"></div>
                        </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 5. IMPACT PROJECTION (NO FAKE DATA) */}
      <section className="py-40">
          <div className="max-w-7xl mx-auto px-6">
              <div className="bg-vault-card border border-white/10 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden text-center">
                  <div className="absolute inset-0 bg-vault-amber/5 -z-10 blur-3xl"></div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">{t.impactProjectionTitle}</h2>
                  <p className="text-slate-500 font-medium max-w-2xl mx-auto mb-20">{lang === 'id' ? "Protokol kami dirancang untuk mencapai skala dampak berikut pada tahun pertama implementasi." : "Our protocol is designed to achieve the following impact scale in its first year of implementation."}</p>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="p-8">
                          <div className="text-5xl font-black text-vault-amber mb-4 italic">1M+</div>
                          <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{t.impactMetric1}</p>
                      </div>
                      <div className="p-8">
                          <div className="text-5xl font-black text-vault-amber mb-4 italic">50+</div>
                          <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{t.impactMetric2}</p>
                      </div>
                      <div className="p-8">
                          <div className="text-5xl font-black text-vault-amber mb-4 italic">85%</div>
                          <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{t.impactMetric3}</p>
                      </div>
                      <div className="p-8">
                          <div className="text-5xl font-black text-vault-amber mb-4 italic">99%</div>
                          <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{t.impactMetric4}</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-40 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-tight">
                  {lang === 'id' ? "Siap Membangun Masa Depan" : "Ready to Build the Future"} <br/> <span className="text-vault-amber">Demokrasi Digital?</span>
              </h2>
              <Link href="/dashboard" className="inline-flex items-center gap-4 bg-vault-amber text-black px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
                  {t.btnGetStarted} <ArrowRight size={24} />
              </Link>
          </div>
      </section>

    </main>
  );
}
