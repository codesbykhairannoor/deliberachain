"use client";

import Link from "next/link";
import { ArrowLeft, Search, Sparkles, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { useTheme } from "next-themes";
import ClientOnly from "@/components/ClientOnly";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

export default function NotFound() {
  const { lang } = useLanguageStore();
  const { theme } = useTheme();

  const localT = {
    id: {
        title: "Halaman Tak Terdeteksi",
        subtitle: "Sepertinya aspirasi Anda tersesat di luar jaringan blockchain kami. Halaman yang Anda cari tidak ditemukan dalam ledger publik.",
        btnHome: "Kembali ke Beranda",
        connectMsg: "Butuh akses dashboard? Hubungkan wallet Anda di sini."
    },
    en: {
        title: "Page Undetected",
        subtitle: "It seems your aspiration got lost outside our blockchain network. The page you are looking for was not found in the public ledger.",
        btnHome: "Return to Home",
        connectMsg: "Need dashboard access? Connect your wallet here."
    }
  };

  const lt = localT[lang as keyof typeof localT];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 text-center overflow-hidden relative text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="max-w-3xl relative z-10">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-muted border border-border rounded-3xl flex items-center justify-center mx-auto mb-12 text-vault-amber shadow-2xl group hover:rotate-12 transition-transform duration-500"
        >
            <Search size={48} className="group-hover:scale-110 transition-transform" />
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8"
        >
            <span className="text-9xl font-black text-foreground/10 absolute -top-32 left-1/2 -translate-x-1/2 select-none pointer-events-none">404</span>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.4em] uppercase shadow-sm">
                <Globe size={14} /> Protocol Error
            </div>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none italic"
        >
            {lt.title}
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-16 font-medium leading-relaxed italic opacity-80 max-w-xl mx-auto"
        >
            {lt.subtitle}
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-12"
        >
            <div className="flex flex-wrap justify-center gap-6">
                <Link href="/" className="inline-flex items-center gap-3 bg-foreground text-background px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-vault-amber hover:text-black transition-all shadow-2xl active:scale-95 group">
                    <ArrowLeft size={22} className="group-hover:-translate-x-2 transition-transform" /> {lt.btnHome}
                </Link>
            </div>

            <div className="pt-12 border-t border-border w-full max-w-md">
                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-8 opacity-60 italic">{lt.connectMsg}</p>
                <div className="flex justify-center scale-90 md:scale-100">
                    <ClientOnly>
                        <ConnectButton 
                            client={client} 
                            theme={theme === "dark" ? "dark" : "light"}
                            accountAbstraction={{
                                chain: baseSepolia,
                                sponsorGas: true,
                            }}
                            connectButton={{
                                className: "!bg-vault-amber !text-black !font-black !px-10 !py-4 !rounded-xl !shadow-xl"
                            }}
                        />
                    </ClientOnly>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
