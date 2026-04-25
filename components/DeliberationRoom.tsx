"use client";

import { useEffect, useState } from "react";
import { ThirdwebClient, ThirdwebContract, readContract } from "thirdweb";
import { Sparkles, MessageSquare, Flame, ArrowUpCircle } from "lucide-react";
import { motion } from "framer-motion";

interface DeliberationRoomProps {
  client: ThirdwebClient;
  contract: ThirdwebContract;
}

export default function DeliberationRoom({ client, contract }: DeliberationRoomProps) {
  const [trending, setTrending] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTrending() {
      try {
        // simulation of global trending data
        const data = await readContract({
          contract,
          method: "function getUserAssets(address _user) view returns ((string cid, string title, string assetType, uint256 timestamp, address owner)[])",
          params: ["0x801F15748D3a6dFc5A8D3a7Bc36821Cdb51d59bC"], 
        });
        // We simulate popularity by taking the first few items
        setTrending(data.slice(0, 3));
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrending();
  }, []);

  if (isLoading) return <div className="p-10 text-foreground animate-pulse">Loading Room...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-foreground flex items-center gap-2">
            <Flame size={24} className="text-orange-500 fill-orange-500" /> 
            Deliberation <span className="text-vault-amber">Room</span>
          </h2>
          <p className="text-muted-foreground text-sm">Topik yang sedang hangat dibahas masyarakat.</p>
        </div>
        <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest rounded-full animate-pulse">
          Live Now
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {trending.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-black/40 border border-white/5 p-5 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 bg-vault-amber/10 rounded-xl flex flex-col items-center justify-center border border-vault-amber/20">
               <ArrowUpCircle size={20} className="text-vault-amber" />
               <span className="text-[10px] font-bold text-vault-amber mt-1">{120 + i * 15}</span>
            </div>

            <div className="flex-1">
               <h4 className="font-bold text-foreground group-hover:text-vault-amber transition-colors line-clamp-1">{item.title}</h4>
               <div className="flex items-center gap-4 mt-2">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-mono uppercase bg-white/5 px-2 py-0.5 rounded">
                     {item.assetType.split('|')[0] || "General"}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                     <MessageSquare size={12} /> {8 + i * 3} comments
                  </span>
               </div>
            </div>

            <div className="hidden md:block">
               <div className="flex -space-x-2">
                  {[1,2,3].map(j => (
                    <div key={j} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] text-foreground">
                      {String.fromCharCode(65 + j + i)}
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
