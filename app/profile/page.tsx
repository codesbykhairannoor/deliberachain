"use client";

import { useActiveAccount } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import CivicBadge from "@/components/CivicBadge";
import { Wallet, Globe, ShieldCheck, History, Award } from "lucide-react";
import { motion } from "framer-motion";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

export default function ProfilePage() {
  const account = useActiveAccount();

  if (!account) return <div className="p-20 text-foreground">Please Connect Wallet</div>;

  return (
    <div className="animate-in fade-in duration-500">
        
        {/* PROFILE HEADER */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 pb-16 border-b border-white/5">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-vault-amber to-yellow-600 border-4 border-black ring-1 ring-white/10 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-black text-black">JD</span>
            </div>
            
            <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl font-black text-foreground mb-2 tracking-tight">Citizen #{account.address.substring(38)}</h1>
                <p className="text-muted-foreground font-mono text-sm bg-white/5 px-2 py-1 rounded inline-block">
                    {account.address}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                    <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                        Identity Verified
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                        Blockchain Native
                    </span>
                </div>
            </div>
        </div>

        {/* IMPACT DASHBOARD */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left: Score & Badges */}
            <div className="md:col-span-5 space-y-8">
                 <CivicBadge score={245} />
                 
                 <div className="bg-vault-card border border-white/5 p-8 rounded-3xl">
                    <h3 className="text-sm font-bold text-foreground mb-6 flex items-center gap-2">
                        <Award size={18} className="text-vault-amber" /> Achievements
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all">
                                <ShieldCheck size={20} />
                            </div>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Right: Activity Stats */}
            <div className="md:col-span-7 space-y-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                    <History size={20} className="text-muted-foreground" /> Recent Participation
                </h3>
                
                {[1, 2, 3].map(i => (
                    <motion.div 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="p-5 bg-white/5 border border-white/5 rounded-2xl flex justify-between items-center group transition-colors hover:bg-white/[0.08]"
                    >
                        <div>
                            <p className="text-sm font-bold text-foreground">Voted on: Perbaikan Aspal Jl. Sudirman</p>
                            <p className="text-[10px] text-muted-foreground uppercase mt-1">Transaction Hash: 0xef34...456</p>
                        </div>
                        <Globe size={16} className="text-muted-foreground group-hover:text-vault-amber" />
                    </motion.div>
                ))}
            </div>

        </div>
    </div>
  );
}
