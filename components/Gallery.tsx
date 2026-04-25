"use client";

import { useReadContract, MediaRenderer, useSendTransaction } from "thirdweb/react";
import { ThirdwebContract, ThirdwebClient } from "thirdweb";
import { ExternalLink, FileText, RefreshCw, FolderOpen, ThumbsUp, ThumbsDown, Sparkles, Fingerprint, Lock, ShieldCheck } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import CommentSection from "./CommentSection";
import ShareButton from "./ShareButton";
import { motion, AnimatePresence } from "framer-motion";
import { PUBLIC_ARCHIVE_ADDRESS } from "@/lib/access";
import { useState } from "react";

interface GalleryProps {
  contract: ThirdwebContract;
  address: string;
  client: ThirdwebClient;
}

export default function Gallery({ contract, address, client }: GalleryProps) {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const [dislikedIds, setDislikedIds] = useState<number[]>([]);

  const { mutate: sendTransaction, isPending: isVoting } = useSendTransaction();

  const parseType = (typeStr: string) => {
    const parts = typeStr ? typeStr.split(" | ").map(p => p.trim()) : [];
    return {
      category: parts[0] || "Lainnya",
      urgency: parts[1] || "medium",
      areaTag: parts[2] || "GLOBAL",
      isSecret: parts[3] === "SECRET"
    };
  };

  const handleVote = (id: bigint) => {
    import("thirdweb").then(({ prepareContractCall }) => {
      const transaction = prepareContractCall({
        contract,
        method: "function upvote(uint256 _id)",
        params: [id],
      });

      sendTransaction(transaction, {
        onSuccess: () => {
          refetch();
        },
      });
    });
  };

  const { data: rawAssets, isPending, refetch } = useReadContract({
    contract,
    method: "function getAllAspirations() view returns ((uint256 id, string cid, string title, string category, address owner, uint256 timestamp, uint8 status, uint256 upvotes)[])",
    params: [],
  });

  // FILTERING LOGIC: Fix the 'My Feed' leak
  const assets = rawAssets 
    ? rawAssets.filter(a => {
        const isActive = a.status === 0 || a.status === 2;
        if (address === PUBLIC_ARCHIVE_ADDRESS) return isActive;
        return isActive && a.owner.toLowerCase() === address.toLowerCase();
      }) 
    : [];

  const getSafeUrl = (ipfsUri: string) => {
    if (!ipfsUri) return "#";
    const hash = ipfsUri.replace("ipfs://", "");
    return `https://${client.clientId}.ipfscdn.io/ipfs/${hash}`;
  };

  if (isPending) return (
    <div className="flex flex-col items-center justify-center py-20 text-vault-amber animate-pulse">
        <RefreshCw className="animate-spin mb-4" size={32} />
        <p className="font-medium tracking-widest uppercase text-[10px]">{t.fetchingDelib}</p>
    </div>
  );

  return (
    <div className="bg-white/[0.02] border border-white/10 p-4 md:p-8 rounded-[2rem] md:rounded-[3rem] backdrop-blur-sm min-h-[500px]">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 px-2">
        <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground flex items-center gap-3">
                 {t.roomTitle.split(' ')[0]} <span className="text-vault-amber">{t.roomTitle.split(' ')[1]}</span>
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">{t.roomSub}</p>
        </div>
        
        <button onClick={() => refetch()} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-vault-amber/50 hover:bg-vault-amber/10 transition-all group self-end md:self-auto">
          <RefreshCw size={18} className="text-muted-foreground group-hover:text-vault-amber transition-transform duration-500" />
        </button>
      </div>

      {!assets || assets.length === 0 ? (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-white/5 rounded-[2rem]"
        >
          <FolderOpen size={32} className="text-muted-foreground mb-4" />
          <p className="text-muted-foreground text-sm">{t.noAssets}</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {[...assets].reverse().map((asset, i) => {
                const { category, urgency, areaTag, isSecret } = parseType(asset.category);
                const publicUrl = getSafeUrl(asset.cid);
                const isTrending = i % 2 === 0;
                const isDisliked = dislikedIds.includes(Number(asset.id));

                return (
                <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    key={asset.id.toString()} 
                    className={`bg-[#0a0a0a] border rounded-[2rem] md:rounded-[3rem] overflow-hidden transition-all p-6 md:p-10 shadow-2xl relative ${isSecret ? 'border-red-900/30' : 'border-white/5 hover:border-white/10'} ${isDisliked ? 'opacity-40 grayscale' : ''}`}
                >
                    
                    {isSecret ? (
                        <div className="absolute top-6 right-6 px-3 py-1 bg-red-600 border border-red-500 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.4)] z-20">
                            <ShieldCheck size={12} className="text-foreground" />
                            <span className="text-[10px] font-black text-foreground uppercase tracking-tighter">{t.secureReport}</span>
                        </div>
                    ) : isTrending && (
                        <div className="absolute top-6 right-6 px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full flex items-center gap-2 animate-pulse">
                            <Sparkles size={12} className="text-red-500" />
                            <span className="text-[10px] font-black text-red-500 uppercase">{t.trendingNow}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                        {/* Left: Media */}
                        <div className="lg:col-span-4">
                            <div className="aspect-square rounded-[1.5rem] md:rounded-[2rem] bg-[#111] border border-white/5 overflow-hidden flex items-center justify-center relative group/media">
                                {isSecret ? (
                                    <div className="flex flex-col items-center justify-center p-8 text-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/30">
                                            <Lock size={32} className="text-red-500" />
                                        </div>
                                        <p className="text-xs font-black text-foreground uppercase tracking-widest">{t.encryptedData}</p>
                                        <p className="text-[10px] text-muted-foreground mt-2">{t.encryptedSub}</p>
                                    </div>
                                ) : (
                                    <MediaRenderer 
                                        client={client} 
                                        src={asset.cid} 
                                        className="w-full h-full object-cover"
                                        poster={getSafeUrl(asset.cid)}
                                    />
                                )}
                                
                                {!isSecret && (
                                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur rounded-xl border border-white/5 flex flex-col">
                                        <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{t.metadataHash}</span>
                                        <span className="text-[10px] text-vault-amber font-mono truncate">{asset.cid}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: Content & Interactivity */}
                        <div className="lg:col-span-8 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="px-3 py-1 bg-vault-amber/10 border border-vault-amber/30 text-vault-amber text-[10px] font-black uppercase tracking-widest rounded-full">
                                        {category}
                                    </span>
                                    <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                                        {areaTag}
                                    </span>
                                    <span className="hidden md:inline text-slate-700">/</span>
                                    <span className="text-[10px] md:text-xs text-muted-foreground font-mono italic">
                                        {t.authoredBy} {asset.owner.substring(0, 6)}...{asset.owner.substring(38)}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl md:text-4xl font-black text-foreground mb-6 tracking-tighter uppercase leading-tight">
                                    {isSecret ? t.classifiedReport : asset.title}
                                </h3>
                                
                                <div className="flex gap-4 md:gap-8 mb-8">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-muted-foreground font-black uppercase">{t.supporters}</span>
                                        <span className="text-lg md:text-2xl font-black text-foreground">{isSecret ? "PRIVATE" : asset.upvotes.toString()}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-muted-foreground font-black uppercase">{t.securityLevel}</span>
                                        <span className={`text-lg md:text-2xl font-black ${isSecret ? 'text-red-500' : 'text-green-500'}`}>
                                            {isSecret ? 'HIGH' : 'Public'}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-muted-foreground font-black uppercase">{t.verifiedId}</span>
                                        <Fingerprint size={24} className="text-blue-500 mt-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap md:flex-nowrap gap-4">
                                {!isSecret ? (
                                    <>
                                        <button 
                                            onClick={() => handleVote(asset.id)}
                                            disabled={isVoting || isDisliked}
                                            className="flex-1 bg-vault-amber hover:bg-yellow-400 text-black font-black py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 active:scale-95"
                                        >
                                            <ThumbsUp size={20} /> <span className="hidden sm:inline">{t.dukungAspirasi}</span>
                                        </button>
                                        
                                        <button 
                                            onClick={() => setDislikedIds(prev => isDisliked ? prev.filter(id => id !== Number(asset.id)) : [...prev, Number(asset.id)])}
                                            className={`px-6 py-4 md:py-5 rounded-2xl border transition-all active:scale-95 flex items-center justify-center gap-2 ${isDisliked ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-white/5 border-white/10 text-muted-foreground hover:border-red-500/50 hover:text-red-400'}`}
                                        >
                                            <ThumbsDown size={20} />
                                        </button>

                                        <ShareButton title={asset.title} url={publicUrl} />
                                        
                                        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                                            <a 
                                                href={`https://ipfs.io/ipfs/${asset.cid.replace('ipfs://', '')}`} 
                                                target="_blank" rel="noopener noreferrer"
                                                className="px-4 py-4 md:py-5 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center rounded-2xl transition-all group"
                                                title="Verify Metadata on IPFS"
                                            >
                                                <ShieldCheck size={20} className="text-muted-foreground group-hover:text-vault-amber" />
                                                <span className="ml-2 text-[10px] font-black uppercase text-muted-foreground group-hover:text-foreground hidden lg:inline">{t.verifyHash}</span>
                                            </a>
                                            
                                            <a 
                                                href={`https://sepolia.basescan.org/address/${contract.address}`} 
                                                target="_blank" rel="noopener noreferrer"
                                                className="px-6 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center rounded-2xl transition-all group"
                                                title="View Contract on Explorer"
                                            >
                                                <ExternalLink size={20} className="text-muted-foreground group-hover:text-blue-400" />
                                            </a>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex-1 bg-red-500/5 border border-red-500/20 text-red-500 p-4 md:p-6 rounded-2xl flex items-center justify-center gap-3 text-center">
                                        <Lock size={18} /> <span className="text-xs md:text-sm">{t.lockedMsg}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Discussion Section Only for Public Posts */}
                    {!isSecret && !isDisliked && <CommentSection aspirationId={asset.cid} />}

                </motion.div>
                );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
