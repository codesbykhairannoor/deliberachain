"use client";

import { motion } from "framer-motion";
import { Shield, Lock, ArrowRight, Activity } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { useTheme } from "next-themes";
import ClientOnly from "./ClientOnly";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

export default function AccessRestricted() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const { theme } = useTheme();

  const localT = {
    id: {
        title: "Akses Dibatasi",
        subtitle: "Area ini membutuhkan autentikasi blockchain untuk memastikan integritas dan keamanan partisipasi publik.",
        btnConnect: "Hubungkan Wallet Patriot",
    },
    en: {
        title: "Access Restricted",
        subtitle: "This area requires blockchain authentication to ensure the integrity and security of public participation.",
        btnConnect: "Connect Patriot Wallet",
    }
  };

  const lt = localT[lang as keyof typeof localT];

  return (
    <div className="min-h-screen bg-background pt-48 pb-40 flex items-center justify-center p-6 text-center relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-muted border border-border p-16 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group shadow-vault-amber/5"
      >
        <div className="bg-pattern-diagonal absolute inset-0 opacity-10"></div>
        
        <div className="relative z-10">
            <div className="w-24 h-24 bg-background border border-border rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Lock className="text-vault-amber animate-pulse" size={48} />
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="text-xs font-black text-red-500 uppercase tracking-[0.4em] italic">{lt.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none italic">
                Gateway <br/> <span className="text-vault-amber">Locked.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground font-medium mb-16 leading-relaxed italic opacity-80 max-w-md mx-auto">
                {lt.subtitle}
            </p>
            
            <div className="flex justify-center scale-110">
                <ClientOnly>
                    <ConnectButton 
                        client={client} 
                        theme={theme === "dark" ? "dark" : "light"}
                        accountAbstraction={{
                            chain: baseSepolia,
                            sponsorGas: true,
                        }}
                        connectModal={{ size: "wide" }}
                        connectButton={{
                            className: "!bg-vault-amber !text-black !font-black !px-12 !py-5 !rounded-2xl !text-lg !shadow-2xl hover:!scale-105 transition-transform uppercase !tracking-widest"
                        }}
                    />
                </ClientOnly>
            </div>
            
            <div className="mt-16 pt-10 border-t border-border flex items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2">
                    <Shield size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">On-chain Auth</span>
                </div>
                <div className="flex items-center gap-2">
                    <Activity size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Real-time Sync</span>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}


