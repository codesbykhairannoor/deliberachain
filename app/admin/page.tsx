"use client";

import { useState, useEffect } from "react";
import { createThirdwebClient, getContract, prepareContractCall } from "thirdweb";
import { useReadContract, useSendTransaction, useBlockNumber, useActiveAccount } from "thirdweb/react";
import AccessRestricted from "@/components/AccessRestricted";
import { baseSepolia } from "thirdweb/chains";
import { useRole } from "@/hooks/useRole";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldAlert, Database, EyeOff, Loader2, Sparkles, ShieldCheck, Activity, Terminal } from "lucide-react";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });
const contract = getContract({ client, chain: baseSepolia, address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "" });

export default function AdminPortal() {
  const { role, isLoading: roleLoading } = useRole();
  const account = useActiveAccount();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  const { mutate: sendTransaction, isPending: isTxPending } = useSendTransaction();

  useEffect(() => {
    if (!roleLoading && role !== "ADMIN") {
        router.push("/dashboard");
    }
  }, [role, roleLoading]);

  const handleLogin = () => {
    // Basic frontend gate - in a real app, use wallet signature verification
    if (password === "admin123") setIsAdmin(true);
    else alert("Invalid Authorization Key");
  };

  const blockNumber = useBlockNumber({ client, chain: baseSepolia });
  
  // Fetch all aspirations
  const { data: allAspirations, isLoading: isAspLoading, refetch } = useReadContract({
    contract,
    method: "function getAllAspirations() view returns ((uint256 id, string cid, string title, string category, address owner, uint256 timestamp, uint8 status, uint256 upvotes)[])",
    params: [],
  });

  const handleTakedown = async (id: bigint) => {
    if (!confirm("Takedown / Hide aspirasi ini? Rekam jejak akan tetap ada di blockchain, tapi tidak akan muncul di publik.")) return;
    
    try {
      const transaction = prepareContractCall({
        contract,
        method: "function setStatus(uint256 _id, uint8 _status)",
        params: [id, 1], // 1 = Hidden status
      });

      sendTransaction(transaction, {
        onSuccess: () => {
          alert("Aspirasi berhasil di-takedown.");
          refetch();
        },
        onError: (err) => {
          alert("Gagal takedown: Pastikan dompet anda adalah Admin Smart Contract.");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!account) return <AccessRestricted />;

  if (roleLoading) return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground p-6">
        <Loader2 className="animate-spin text-vault-amber mb-6" size={48} />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Verifying Cryptographic Access...</p>
    </div>
  );

  if (!isAdmin) {
    return (
        <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-foreground relative overflow-hidden">
            <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[150px] -z-10"></div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-muted border border-border p-12 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group shadow-red-900/10"
            >
                <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                <div className="relative z-10">
                    <div className="w-24 h-24 bg-background border border-border rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-inner group-hover:scale-110 transition-transform">
                        <Lock className="text-red-600" size={48} />
                    </div>
                    <h1 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">Content Control</h1>
                    <p className="text-muted-foreground text-sm font-medium mb-12 italic">Masukkan kode otorisasi internal untuk mengakses kontrol moderasi on-chain.</p>
                    
                    <div className="space-y-6">
                        <div className="relative">
                            <input 
                                type="password"
                                placeholder="Enter Key (admin123)"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-background border-2 border-border p-6 rounded-2xl text-center text-foreground focus:border-red-600 outline-none transition-all font-black uppercase tracking-widest text-xs shadow-inner"
                            />
                        </div>
                        <button 
                            onClick={handleLogin}
                            className="w-full bg-red-600/10 border border-red-600/20 hover:bg-red-600 hover:text-white text-red-600 font-black py-6 rounded-2xl transition-all shadow-xl uppercase tracking-widest text-xs active:scale-95"
                        >
                            Unlock Protocol
                        </button>
                    </div>
                </div>
            </motion.div>
        </main>
    );
  }

  const activeAspirations = allAspirations ? [...allAspirations].reverse() : [];

  return (
    <div className="bg-background min-h-screen pt-40 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div>
               <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-red-600/30 bg-red-600/5 text-red-600 font-black text-[10px] tracking-[0.2em] uppercase mb-4 shadow-sm">
                   <ShieldAlert size={14} /> Restricted Area
               </div>
               <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none italic">
                    Platform <span className="text-red-600">Moderation</span>
               </h1>
            </div>
            <div className="flex items-center gap-4 bg-muted border border-border px-8 py-4 rounded-2xl shadow-inner group">
                <ShieldCheck size={24} className="text-red-600 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                    <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Admin Status</div>
                    <div className="text-xs font-black uppercase text-foreground">Active Session</div>
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT: STATUS */}
            <div className="lg:col-span-4 space-y-8">
                <div className="bg-muted/50 border border-border p-12 rounded-[3.5rem] shadow-inner relative overflow-hidden group">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                    <h3 className="text-xs font-black text-foreground mb-10 flex items-center gap-4 uppercase tracking-[0.3em] italic">
                        <Terminal size={20} className="text-blue-500" /> Protocol Node
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-background p-4 rounded-xl border border-border shadow-sm">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Network</span>
                            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Base Sepolia</span>
                        </div>
                        <div className="flex justify-between items-center bg-background p-4 rounded-xl border border-border shadow-sm">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Height</span>
                            <span className="text-[10px] font-black text-vault-amber uppercase tracking-widest">#{blockNumber?.toString() || "Syncing..."}</span>
                        </div>
                        <div className="flex justify-between items-center bg-background p-4 rounded-xl border border-border shadow-sm">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Database</span>
                            <span className="text-[10px] font-black text-foreground uppercase tracking-widest">{allAspirations?.length || 0} Records</span>
                        </div>
                    </div>
                </div>
                
                <div className="p-10 bg-red-600/5 border border-red-600/10 rounded-[3rem] group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                            <ShieldAlert size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 italic">Security Protocol</span>
                    </div>
                    <p className="text-sm font-black uppercase tracking-tight text-red-600/70 leading-relaxed italic">
                        Takedown action will change on-chain status to "Hidden". Record remains immutable on the ledger for auditability.
                    </p>
                </div>
            </div>

            {/* RIGHT: MODERATION QUEUE */}
            <div className="lg:col-span-8 bg-muted/30 border border-border p-12 rounded-[4rem] shadow-inner">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-black text-foreground flex items-center gap-4 uppercase tracking-tighter italic">
                        <Activity className="text-vault-amber" /> Moderation Queue
                    </h3>
                    <div className="h-1.5 w-24 bg-border rounded-full"></div>
                </div>

                <div className="max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
                    {isAspLoading ? (
                      <div className="flex flex-col items-center justify-center p-20 gap-6">
                          <Loader2 className="animate-spin text-vault-amber" size={40} />
                          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Syncing Queue...</p>
                      </div>
                    ) : activeAspirations.length === 0 ? (
                      <div className="text-center p-20 border-4 border-dashed border-border rounded-[3rem] group hover:border-vault-amber/30 transition-colors">
                          <EyeOff className="mx-auto mb-6 opacity-10 group-hover:opacity-40 transition-opacity" size={64} />
                          <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">No records found on-chain.</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                         {activeAspirations.map((asp, i) => (
                             <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex justify-between items-center p-8 bg-background border border-border rounded-[2.5rem] shadow-xl hover:border-red-600/30 transition-all group"
                             >
                                 <div className="flex-1 pr-10">
                                     <div className="flex items-center gap-4 mb-3">
                                        <div className="px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border border-border bg-muted shadow-sm italic text-muted-foreground">ID: {asp.id.toString()}</div>
                                        {asp.status === 1 ? (
                                            <span className="px-4 py-1.5 rounded-full text-[8px] font-black tracking-[0.2em] bg-red-600 text-white shadow-xl uppercase">HIDDEN</span>
                                        ) : asp.status === 2 ? (
                                            <span className="px-4 py-1.5 rounded-full text-[8px] font-black tracking-[0.2em] bg-green-600 text-white shadow-xl uppercase">RESOLVED</span>
                                        ) : (
                                            <span className="px-4 py-1.5 rounded-full text-[8px] font-black tracking-[0.2em] bg-blue-600 text-white shadow-xl uppercase">ACTIVE</span>
                                        )}
                                     </div>
                                     <h4 className="text-xl font-black text-foreground uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">{asp.title}</h4>
                                     <p className="text-[10px] font-black text-muted-foreground mt-4 uppercase tracking-[0.3em] opacity-60 italic">{asp.category}</p>
                                 </div>
                                 
                                 {asp.status === 0 && (
                                    <button 
                                      onClick={() => handleTakedown(asp.id)}
                                      disabled={isTxPending}
                                      className="p-5 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white rounded-2xl transition-all border border-red-600/20 shadow-xl disabled:opacity-50 active:scale-90 group/btn"
                                      title="Hide from public"
                                    >
                                      {isTxPending ? <Loader2 size={24} className="animate-spin" /> : <EyeOff size={24} className="group-hover/btn:scale-110 transition-transform" />}
                                    </button>
                                 )}
                             </motion.div>
                         ))}
                      </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
