"use client";

import { createThirdwebClient } from "thirdweb";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { 
  UserCircle, 
  Copy, 
  ExternalLink, 
  DownloadCloud, 
  FileCheck, 
  Eye,
  ArrowRight,
  FolderOpen,
  Sparkles
} from "lucide-react";

const client = createThirdwebClient({ 
  clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || "d17d0b2cc4f3f5690026476c819e02e9" 
});

export default function GuidePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <main className="min-h-screen bg-background text-foreground font-sans pb-32 pt-24">
      <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-24">
           <div className="w-16 h-16 bg-vault-amber/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-vault-amber/20 shadow-sm">
              <Sparkles size={32} className="text-vault-amber" />
           </div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none">
            {t.guideTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
            {t.guideSub}
          </p>
        </div>

        {/* CONTAINER LANGKAH-LANGKAH */}
        <div className="space-y-20 relative border-l-2 border-border ml-4 md:ml-0 pl-8 md:pl-0">

          {/* STEP 1: AMBIL ALAMAT */}
          <div className="md:flex gap-12 group">
             <div className="hidden md:flex flex-col items-end w-1/3 pt-2 pr-12 border-r-2 border-border relative">
                <div className="absolute -right-[11px] top-3 w-5 h-5 bg-blue-500 rounded-full ring-4 ring-background shadow-lg" />
                <h3 className="text-xl font-black text-blue-500 uppercase tracking-tighter">{t.step111Title}</h3>
             </div>
             <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-black text-white shadow-lg">1</div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">{t.step11Title}</h3>
                </div>
                <h3 className="hidden md:block text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{t.step11Title}</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{t.step11Desc}</p>
                
                {/* Visual Aid: Simulasi Tombol Copy */}
                <div className="bg-muted p-6 rounded-2xl border border-border shadow-inner">
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">{t.simulasip}</div>
                    <div className="flex items-center justify-between bg-background p-4 rounded-xl border border-border shadow-sm">
                        <span className="font-mono text-sm text-foreground font-bold">0x71C...9A2</span>
                        <Copy size={18} className="text-blue-500 animate-pulse" />
                    </div>
                </div>
             </div>
          </div>

          {/* STEP 2 & 3: FAUCET */}
          <div className="md:flex gap-12 group">
             <div className="hidden md:flex flex-col items-end w-1/3 pt-2 pr-12 border-r-2 border-border relative">
                <div className="absolute -right-[11px] top-3 w-5 h-5 bg-green-500 rounded-full ring-4 ring-background shadow-lg" />
                <h3 className="text-xl font-black text-green-500 uppercase tracking-tighter">{t.step222Title}</h3>
             </div>
             <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-black text-white shadow-lg">2</div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">{t.isiSaldo3}</h3>
                </div>
                <h3 className="hidden md:block text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{t.step22Title}</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{t.step22Desc}</p>
                <p className="text-muted-foreground font-medium mb-8 leading-relaxed">{t.step33Desc}</p>

                <a 
                  href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia" 
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl active:scale-95 uppercase text-xs tracking-widest"
                >
                  {t.step22Btn} <ExternalLink size={20} />
                </a>
             </div>
          </div>

          {/* STEP 4: UPLOAD */}
          <div className="md:flex gap-12 group">
             <div className="hidden md:flex flex-col items-end w-1/3 pt-2 pr-12 border-r-2 border-border relative">
                <div className="absolute -right-[11px] top-3 w-5 h-5 bg-amber-500 rounded-full ring-4 ring-background shadow-lg" />
                <h3 className="text-xl font-black text-amber-500 uppercase tracking-tighter">{t.step444Title}</h3>
             </div>
             <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-black text-white shadow-lg">4</div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">{t.step4Title}</h3>
                </div>
                <h3 className="hidden md:block text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{t.step4Title}</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{t.step4Desc}</p>
                <div className="flex items-center gap-3 text-amber-600 text-xs font-black uppercase tracking-widest bg-amber-500/10 px-4 py-2 rounded-full w-fit border border-amber-500/20">
                    <DownloadCloud size={16} />
                    <span>{t.statusReady}</span>
                </div>
             </div>
          </div>

          {/* STEP 5: VERIFIKASI */}
          <div className="md:flex gap-12 group">
             <div className="hidden md:flex flex-col items-end w-1/3 pt-2 pr-12 border-r-2 border-border relative">
                <div className="absolute -right-[11px] top-3 w-5 h-5 bg-purple-500 rounded-full ring-4 ring-background shadow-lg" />
                <h3 className="text-xl font-black text-purple-500 uppercase tracking-tighter">{t.step555Title}</h3>
             </div>
             <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-black text-white shadow-lg">5</div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">{t.step5Title}</h3>
                </div>
                <h3 className="hidden md:block text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{t.step5Title}</h3>
                <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
                    {t.step5Desc}
                </p>

                {/* Visual Aid: Simulasi Link Transaksi */}
                <div className="bg-muted p-8 rounded-[2rem] border border-purple-500/20 shadow-inner">
                    <div className="text-[10px] font-black text-muted-foreground mb-6 uppercase tracking-[0.2em]">{t.simulasip}</div>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm border-b border-border pb-3">
                            <span className="text-muted-foreground font-bold">Transaction Hash:</span>
                            <span className="text-blue-500 font-mono font-bold">0x39a...8b2</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-border pb-3">
                            <span className="text-muted-foreground font-bold">Status:</span>
                            <span className="text-green-500 font-black flex items-center gap-2 uppercase text-[10px] tracking-widest"><FileCheck size={16}/> Success</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground font-bold">View on Explorer:</span>
                            <div className="flex items-center gap-2 text-purple-500 font-black uppercase text-[10px] tracking-widest cursor-pointer hover:text-purple-400 transition-colors">
                                <Eye size={16} /> <span>Etherscan</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* STEP 6: PORTOFOLIO LINK */}
          <div className="md:flex gap-12 group pb-8">
             <div className="hidden md:flex flex-col items-end w-1/3 pt-2 pr-12 border-r-2 border-border border-dashed relative">
                <div className="absolute -right-[11px] top-3 w-5 h-5 bg-cyan-500 rounded-full ring-4 ring-background shadow-lg shadow-cyan-500/20" />
                <h3 className="text-xl font-black text-cyan-500 uppercase tracking-tighter">{t.step6Label}</h3>
             </div>
             <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4 md:hidden">
                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center font-black text-white shadow-lg">6</div>
                    <h3 className="text-xl font-black text-foreground uppercase tracking-tight">{t.step6Title}</h3>
                </div>
                <h3 className="hidden md:block text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{t.step6Title}</h3>
                <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
                    {t.step6Desc}
                </p>

                {/* Visual Aid: Simulasi URL Bar */}
                <div className="bg-muted p-8 rounded-[2rem] border border-cyan-500/20 relative overflow-hidden group-hover:border-cyan-500/50 transition-all shadow-inner">
                    <div className="flex items-center gap-3 text-[10px] font-black text-muted-foreground mb-6 uppercase tracking-[0.2em]">
                        <FolderOpen size={16} className="text-cyan-500" />
                        {t.rumusLink}
                    </div>
                    
                    <div className="bg-background p-5 rounded-2xl border border-border font-mono text-sm md:text-lg break-all flex flex-wrap items-center shadow-sm">
                        <span className="text-muted-foreground select-none opacity-60">https://dlibration.com/</span>
                        <span className="bg-cyan-500/10 text-cyan-600 px-2 py-0.5 rounded-lg border border-cyan-500/20 mx-1 font-black">
                             {t.alamatKamu}
                        </span>
                    </div>

                    <div className="mt-4 text-[10px] text-muted-foreground italic font-medium tracking-wide">
                        dlibration.com/<span className="text-foreground font-bold">0x71C...9A2</span>
                    </div>
                </div>
             </div>
          </div>

        </div>
        
        {/* CTA BUTTON */}
        <div className="mt-32 text-center">
            <Link href="/dashboard">
                <button className="group relative inline-flex items-center justify-center px-12 py-5 font-black text-white transition-all duration-300 bg-blue-600 rounded-2xl hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95 uppercase text-sm tracking-[0.2em]">
                    <span>{t.guideCta}</span>
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
            </Link>
        </div>

      </div>
    </main>
  );
}
