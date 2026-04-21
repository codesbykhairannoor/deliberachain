"use client";

import { useState } from "react";
import { createThirdwebClient } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";
import { useRole } from "@/hooks/useRole";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPortal() {
  const { role, isLoading } = useRole();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!isLoading && role !== "ADMIN") {
        router.push("/dashboard");
    }
  }, [role, isLoading]);

  const handleLogin = () => {
    if (password === "founder123") setIsAdmin(true);
    else alert("Invalid Secret Key");
  };

  if (isLoading) return <div className="p-20 text-white">Verifying Access...</div>;

  if (!isAdmin) {
    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-vault-card border border-white/5 p-10 rounded-[2.5rem] text-center"
            >
                <div className="w-16 h-16 bg-red-950/20 border border-red-900/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="text-red-500" size={30} />
                </div>
                <h1 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Founder Access</h1>
                <p className="text-slate-500 text-sm mb-8">Masukkan kode otorisasi sistem untuk membuka dashboard kontrol global.</p>
                
                <input 
                    type="password"
                    placeholder="Secret Authorization Key"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black border border-white/10 p-4 rounded-xl text-center text-white focus:border-red-500 outline-none mb-4"
                />
                <button 
                    onClick={handleLogin}
                    className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-all"
                >
                    Unlock Super Admin
                </button>
            </motion.div>
        </main>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      <header className="flex justify-between items-center mb-12">
           <div>
              <h1 className="text-4xl font-black text-white tracking-tight uppercase">Super<span className="text-red-600">Admin</span></h1>
              <p className="text-slate-500 text-sm">Kontrol sistem terpusat — DeliberateChain Protocol V.1.0</p>
           </div>
             <div className="flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-lg text-red-500 text-xs font-bold uppercase">
                <ShieldAlert size={16} /> Operational Layer: 01
             </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT: AI CONTROLS */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-vault-card border border-white/5 p-8 rounded-3xl">
                    <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                        <Cpu size={18} className="text-red-500" /> AI Prompt Tuning
                    </h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                            <label className="text-[10px] text-slate-500 uppercase font-black">Summarizer Logic</label>
                            <p className="text-xs text-slate-400 mt-1">Status: Optimized for Indonesian Civic Context</p>
                        </div>
                        <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold transition-all">
                            Refresh Global Models
                        </button>
                    </div>
                </div>

                <div className="bg-vault-card border border-white/5 p-8 rounded-3xl">
                    <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                        <Database size={18} className="text-blue-500" /> Blockchain Health
                    </h3>
                    <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                        <span>Sepolia RPC</span>
                        <span className="text-green-500">Connected</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-400 font-mono mt-2">
                        <span>Block Height</span>
                        <span>#5,234,124</span>
                    </div>
                </div>
            </div>

            {/* RIGHT: SYSTEM LOGS */}
            <div className="lg:col-span-8 bg-vault-card border border-white/5 p-8 rounded-3xl">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-lg font-bold text-white flex items-center gap-2">
                       <Sparkles size={20} className="text-vault-amber" /> Real-time System Logs
                   </h3>
                   <span className="text-[10px] text-slate-600 font-mono animate-pulse">Monitoring Active...</span>
                </div>

                <div className="space-y-3">
                   {[1, 2, 3, 4, 5].map(i => (
                       <div key={i} className="font-mono text-[11px] text-slate-500 border-b border-white/[0.02] pb-2">
                           <span className="text-slate-700">[19:45:22]</span> 
                           <span className="text-blue-900 ml-2">INFO:</span> 
                           <span className="ml-2">Citizen_#{i+100} just voted on chain (Transaction Verified)</span>
                       </div>
                   ))}
                </div>
            </div>

        </div>
    </div>
  );
}
