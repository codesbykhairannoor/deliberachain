"use client";

import { useState, useEffect } from "react";
import { createThirdwebClient, getContract, prepareContractCall } from "thirdweb";
import { useReadContract, useSendTransaction, useBlockNumber } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { useRole } from "@/hooks/useRole";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ShieldAlert, Database, EyeOff, Loader2 } from "lucide-react";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });
const contract = getContract({ client, chain: baseSepolia, address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "" });

export default function AdminPortal() {
  const { role, isLoading: roleLoading } = useRole();
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

  if (roleLoading) return <div className="p-20 text-foreground">Verifying Access...</div>;

  if (!isAdmin) {
    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-vault-card border border-white/5 p-10 rounded-[2.5rem] text-center shadow-2xl"
            >
                <div className="w-16 h-16 bg-red-950/20 border border-red-900/40 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="text-red-500" size={30} />
                </div>
                <h1 className="text-2xl font-black text-foreground mb-2 uppercase tracking-tighter">Content Moderation</h1>
                <p className="text-muted-foreground text-sm mb-8">Masukkan kode otorisasi untuk mengakses kontrol Takedown.</p>
                
                <input 
                    type="password"
                    placeholder="Enter Key (admin123)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 p-4 rounded-xl text-center text-foreground focus:border-red-500 outline-none mb-4"
                />
                <button 
                    onClick={handleLogin}
                    className="w-full bg-red-600/20 border border-red-600/50 hover:bg-red-600 hover:text-foreground text-red-500 font-bold py-4 rounded-xl transition-all"
                >
                    Unlock System
                </button>
            </motion.div>
        </main>
    );
  }

  const activeAspirations = allAspirations ? [...allAspirations].reverse() : [];

  return (
    <div className="animate-in fade-in duration-500">
      <header className="flex justify-between items-center mb-12">
           <div>
              <h1 className="text-4xl font-black text-foreground tracking-tight uppercase">Platform <span className="text-red-600">Moderation</span></h1>
              <p className="text-muted-foreground text-sm">Hide & Takedown Control Panel</p>
           </div>
             <div className="flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-lg text-red-500 text-xs font-bold uppercase">
                <ShieldAlert size={16} /> Admin Active
             </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT: STATUS */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-vault-card border border-white/5 p-8 rounded-3xl">
                    <h3 className="text-sm font-bold text-foreground mb-6 flex items-center gap-2">
                        <Database size={18} className="text-blue-500" /> Blockchain Sync
                    </h3>
                    <div className="flex justify-between items-center text-xs text-muted-foreground font-mono">
                        <span>Base Sepolia RPC</span>
                        <span className="text-green-500">Connected</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground font-mono mt-2">
                        <span>Block Height</span>
                        <span className="text-vault-amber">#{blockNumber?.toString() || "Syncing..."}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground font-mono mt-2 pt-2 border-t border-white/5">
                        <span>Total Records</span>
                        <span className="text-foreground">{allAspirations?.length || 0}</span>
                    </div>
                </div>
                <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-2xl text-xs text-red-400">
                    <p className="font-bold mb-1">WARNING:</p>
                    Takedown action will change the on-chain status to "Hidden" (1). The original CID and record cannot be physically deleted from the blockchain, ensuring auditability and compliance.
                </div>
            </div>

            {/* RIGHT: MODERATION QUEUE */}
            <div className="lg:col-span-8 bg-vault-card border border-white/5 p-8 rounded-3xl">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
                    Moderation Queue
                </h3>

                {isAspLoading ? (
                  <div className="flex justify-center p-10"><Loader2 className="animate-spin text-muted-foreground" /></div>
                ) : activeAspirations.length === 0 ? (
                  <div className="text-center p-10 text-muted-foreground">No aspirations found on-chain.</div>
                ) : (
                  <div className="space-y-4">
                     {activeAspirations.map((asp, i) => (
                         <div key={i} className="flex justify-between items-center p-4 bg-black/40 border border-white/5 rounded-2xl">
                             <div>
                                 <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-muted-foreground font-mono">ID: {asp.id.toString()}</span>
                                    {asp.status === 1 ? (
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-500">HIDDEN</span>
                                    ) : asp.status === 2 ? (
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-500">RESOLVED</span>
                                    ) : (
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-500">ACTIVE</span>
                                    )}
                                 </div>
                                 <h4 className="text-foreground font-bold">{asp.title}</h4>
                                 <p className="text-xs text-muted-foreground mt-1">{asp.category}</p>
                             </div>
                             
                             {asp.status === 0 && (
                                <button 
                                  onClick={() => handleTakedown(asp.id)}
                                  disabled={isTxPending}
                                  className="p-3 bg-red-950/30 hover:bg-red-900/50 text-red-500 rounded-xl transition-all border border-red-900/50 disabled:opacity-50"
                                  title="Hide from public"
                                >
                                  {isTxPending ? <Loader2 size={18} className="animate-spin" /> : <EyeOff size={18} />}
                                </button>
                             )}
                         </div>
                     ))}
                  </div>
                )}
            </div>
        </div>
    </div>
  );
}
