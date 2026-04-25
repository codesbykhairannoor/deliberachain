"use client";

import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { useParams } from "next/navigation"; 
import Gallery from "@/components/Gallery";
import { ShieldCheck, Share2, Copy, Sparkles, ArrowLeft } from "lucide-react"; 
import Link from "next/link";
import { useState } from "react";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });
const contract = getContract({ client, chain: baseSepolia, address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "" });

export default function PublicProfilePage() {
  const params = useParams();
  const address = decodeURIComponent(params.address as string); 
  
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-24 pb-32">
      <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* --- HEADER PROFIL PUBLIK --- */}
        <div className="bg-muted border border-border rounded-[3rem] p-8 md:p-12 mb-16 relative overflow-hidden group shadow-2xl">
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-vault-amber/5 rounded-full blur-[100px] group-hover:bg-vault-amber/10 transition-all duration-700 -z-10"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            
            {/* Kiri: Info Address */}
            <div className="text-left w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-vault-amber/10 rounded-xl border border-vault-amber/20">
                    <ShieldCheck className="text-vault-amber" size={24} />
                </div>
                <span className="text-[10px] font-black text-vault-amber uppercase tracking-[0.3em]">
                  {t.publicTitle || "PATRIOT ARCHIVE"}
                </span>
              </div>
              
              <h1 className="text-2xl md:text-5xl font-mono font-black text-foreground break-all tracking-tighter leading-none mb-6">
                {address}
              </h1>
              
              <p className="text-muted-foreground font-medium text-lg max-w-2xl leading-relaxed opacity-80">
                {t.publicDesc || "Arsip abadi yang tersimpan di jaringan terdesentralisasi Dlibration. Setiap aspirasi di sini telah diaudit secara on-chain."}
              </p>
            </div>

            {/* Kanan: Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-6 lg:mt-0">
               <button 
                onClick={handleCopy}
                className="bg-background hover:bg-muted border border-border active:scale-95 text-foreground px-8 py-5 rounded-2xl transition-all flex items-center justify-center gap-3 font-black uppercase text-[10px] tracking-widest shadow-sm group/btn"
               >
                 {copied ? <ShieldCheck size={20} className="text-green-500"/> : <Share2 size={20} className="group-hover/btn:text-vault-amber transition-colors"/>}
                 <span>{copied ? "Tersalin!" : "Share Archive"}</span>
               </button>
               
               <Link href="/" className="bg-vault-amber text-black hover:bg-yellow-500 px-10 py-5 rounded-2xl font-black text-center transition-all shadow-xl shadow-vault-amber/10 flex items-center justify-center gap-3 active:scale-95 uppercase text-[10px] tracking-widest">
                 <ArrowLeft size={20} /> {t.backHome || "Back Home"}
               </Link>
            </div>
          </div>
        </div>

        {/* --- LIST FILE (GALLERY) --- */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Gallery 
                contract={contract} 
                address={address} 
                client={client} 
            />
        </div>
        
      </div>
    </main>
  );
}
