"use client";

import { createThirdwebClient } from "thirdweb";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Globe, Search, Database, Cpu, FileDigit, ScanLine, Box } from "lucide-react";

const client = createThirdwebClient({ clientId: "d17d0b2cc4f3f5690026476c819e02e9" });

export default function ExplorePage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="animate-in fade-in duration-500 min-h-screen pt-24 bg-background">
      
      {/* =========================================
          SECTION 1: HERO & GLOBAL SEARCH
      ========================================= */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Grid Animation */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
           <div className="w-20 h-20 bg-vault-amber/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-vault-amber/30 shadow-[0_0_40px_rgba(245,158,11,0.2)] animate-pulse">
              <Globe size={40} className="text-vault-amber" />
           </div>

           <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase leading-[0.9]">
             {t.exploreHero}
           </h1>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
             {t.exploreSub}
           </p>

           {/* Dummy Search Bar (Visual Only) */}
           <div className="relative max-w-2xl mx-auto group">
              <div className="absolute inset-0 bg-vault-amber/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-muted/80 border border-border rounded-full px-6 py-5 backdrop-blur-md focus-within:border-vault-amber/50 transition-colors shadow-inner">
                 <Search className="text-muted-foreground mr-4" />
                 <input 
                   type="text" 
                   disabled
                   placeholder="0x71C... (Hash Search Coming Soon)" 
                   className="bg-transparent border-none outline-none text-foreground w-full placeholder:text-muted-foreground cursor-not-allowed font-bold"
                 />
                 <span className="text-[10px] font-black text-vault-amber bg-vault-amber/10 px-3 py-1.5 rounded-full border border-vault-amber/20 tracking-widest">
                    BETA
                 </span>
              </div>
           </div>
        </div>
      </section>


      {/* =========================================
          SECTION 2: NETWORK STATS (MOCKUP)
      ========================================= */}
      <section className="py-12 border-y border-border bg-muted/30">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {/* Stat 1 */}
               <div className="flex items-center gap-6">
                  <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 border border-blue-500/20 shadow-sm"><Box size={28}/></div>
                  <div>
                     <h4 className="text-3xl font-black text-foreground font-mono leading-none mb-1">5,291,092</h4>
                     <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{t.stat1}</p>
                  </div>
               </div>
               {/* Stat 2 */}
               <div className="flex items-center gap-6">
                  <div className="p-4 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20 shadow-sm"><Cpu size={28}/></div>
                  <div>
                     <h4 className="text-3xl font-black text-foreground font-mono leading-none mb-1">1,024+</h4>
                     <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{t.stat2}</p>
                  </div>
               </div>
               {/* Stat 3 */}
               <div className="flex items-center gap-6">
                  <div className="p-4 bg-vault-amber/10 rounded-2xl text-vault-amber border border-vault-amber/20 shadow-sm"><Database size={28}/></div>
                  <div>
                     <h4 className="text-3xl font-black text-foreground font-mono leading-none mb-1">UNLIMITED</h4>
                     <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{t.stat3}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>


      {/* =========================================
          SECTION 3: CATEGORIES / USE CASES
      ========================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">{t.catTitle}</h2>
            <div className="h-1.5 w-16 bg-vault-amber mx-auto rounded-full"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="bg-muted/50 border border-border p-12 rounded-[2.5rem] hover:bg-muted transition-colors group shadow-sm">
                <ScanLine size={40} className="text-purple-500 mb-8 group-hover:scale-110 transition-transform"/>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{t.cat1Title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{t.cat1Desc}</p>
             </div>
             
             {/* Card 2 */}
             <div className="bg-muted/50 border border-border p-12 rounded-[2.5rem] hover:bg-muted transition-colors group shadow-sm">
                <FileDigit size={40} className="text-blue-500 mb-8 group-hover:scale-110 transition-transform"/>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{t.cat2Title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{t.cat2Desc}</p>
             </div>

             {/* Card 3 */}
             <div className="bg-muted/50 border border-border p-12 rounded-[2.5rem] hover:bg-muted transition-colors group shadow-sm">
                <Database size={40} className="text-vault-amber mb-8 group-hover:scale-110 transition-transform"/>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{t.cat3Title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{t.cat3Desc}</p>
             </div>
         </div>
      </section>


      {/* =========================================
          SECTION 4: VISION / CONSTRUCTION STATUS
      ========================================= */}
      <section className="py-20 px-6">
         <div className="max-w-4xl mx-auto bg-gradient-to-br from-background to-muted border border-border rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-vault-amber/10 rounded-full blur-[100px] -z-10"></div>
            
            <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 uppercase tracking-tighter leading-none">{t.visionTitle}</h2>
               <p className="text-muted-foreground text-lg mb-12 leading-relaxed font-medium">
                  {t.visionDesc}
               </p>
               
               <div className="inline-flex items-center gap-4 bg-background/50 border border-vault-amber/30 px-8 py-4 rounded-2xl shadow-inner">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vault-amber opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-vault-amber"></span>
                  </span>
                  <span className="font-black text-vault-amber text-xs uppercase tracking-[0.3em]">
                     {t.visionStatus}
                  </span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
