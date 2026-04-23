"use client";

import { useEffect, useState } from "react";
import { ThirdwebClient, ThirdwebContract, readContract } from "thirdweb";
import { ShieldAlert, ThumbsDown, MessageCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface CriticismSectionProps {
  client: ThirdwebClient;
  contract: ThirdwebContract;
}

export default function CriticismSection({ client, contract }: CriticismSectionProps) {
  const [critiques, setCritiques] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCritiques() {
      try {
        const data = await readContract({
          contract,
          method: "function getUserAssets(address _user) view returns ((string cid, string title, string assetType, uint256 timestamp, address owner)[])",
          params: ["0x801F15748D3a6dFc5A8D3a7Bc36821Cdb51d59bC"], 
        });
        
        // Mock filter for "Kritik"
        setCritiques(data.slice(0, 4)); 
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCritiques();
  }, []);

  if (isLoading) return <div className="p-10 text-white animate-pulse">Loading Feedback...</div>;

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-2">
          <AlertCircle size={24} className="text-red-500" /> 
          Public <span className="text-red-600">Criticism</span>
        </h2>
        <p className="text-slate-500 text-sm">Suara kritis masyarakat untuk perbaikan kebijakan.</p>
      </div>

      <div className="space-y-4">
        {critiques.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-red-950/5 border border-red-900/10 rounded-2xl hover:bg-red-950/10 transition-all border-l-4 border-l-red-600"
          >
             <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-white text-lg">{item.title}</h4>
                <div className="bg-red-600/10 text-red-500 text-[10px] font-black px-2 py-1 rounded border border-red-500/20 uppercase">
                    Urgent Kritik
                </div>
             </div>
             
             <p className="text-slate-400 text-sm italic mb-4">
                "Kritik ini dikirim untuk transparansi publik dan perbaikan kinerja pemerintah di sektor terkait."
             </p>

             <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <button className="flex items-center gap-1 text-slate-500 hover:text-red-500 transition-colors text-xs font-bold">
                    <ThumbsDown size={14} /> Dukung Kritik ({10 + i * 5})
                </button>
                <button className="flex items-center gap-1 text-slate-500 hover:text-white transition-colors text-xs font-bold">
                    <MessageCircle size={14} /> Tanggapi
                </button>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
