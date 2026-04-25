"use client";

import { useReadContract, MediaRenderer, useSendTransaction } from "thirdweb/react";
import { ThirdwebContract, ThirdwebClient } from "thirdweb";
import { ExternalLink, FileText, RefreshCw, FolderOpen, ThumbsUp, ThumbsDown, Sparkles, Fingerprint, Lock, ShieldCheck, Share2 } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import CommentSection from "./CommentSection";
import ShareButton from "./ShareButton";
import { motion, AnimatePresence } from "framer-motion";
import { PUBLIC_ARCHIVE_ADDRESS } from "@/lib/access";
import { useState } from "react";
import { useTheme } from "next-themes";

interface GalleryProps {
  contract: ThirdwebContract;
  address: string;
  client: ThirdwebClient;
}

export default function Gallery({ contract, address, client }: GalleryProps) {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const [dislikedIds, setDislikedIds] = useState<number[]>([]);
  const { theme } = useTheme();

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
    <div className="flex flex-col items-center justify-center py-24 text-vault-amber animate-pulse">
        <RefreshCw className="animate-spin mb-6" size={40} />
        <p className="font-black tracking-[0.3em] uppercase text-xs">{t.fetchingDelib}</p>
    </div>
  );

  return (
    <div className="bg-muted/30 border border-border p-4 md:p-10 rounded-[3rem] backdrop-blur-sm min-h-[600px]">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 px-2">
        <div>
              <h2 className="text-3xl font-black text-foreground flex items-center gap-3 tracking-tighter uppercase leading-none">
                 {t.roomTitle.split(' ')[0]} <span className="text-vault-amber">{t.roomTitle.split(' ')[1]}</span>
              </h2>
              <p className="text-muted-foreground text-sm font-medium mt-2 max-w-xl">{t.roomSub}</p>
        </div>
        
        <button onClick={() => refetch()} className="p-4 bg-background border border-border rounded-2xl hover:border-vault-amber/50 hover:bg-vault-amber/10 transition-all group shadow-sm active:scale-95">
          <RefreshCw size={20} className="text-muted-foreground group-hover:text-vault-amber transition-transform duration-700" />
        </button>
      </div>

      {!assets || assets.length === 0 ? (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-40 border-2 border-dashed border-border rounded-[2.5rem]"
        >
          <FolderOpen size={48} className="text-muted-foreground opacity-20 mb-6" />
          <p className="text-muted-foreground font-black uppercase text-xs tracking-widest">{t.noAssets}</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-10 md:gap-16">
          <AnimatePresence mode="popLayout">
            {[...assets].reverse().map((asset, i) => {
                const { category, urgency, areaTag, isSecret } = parseType(asset.category);
                const publicUrl = getSafeUrl(asset.cid);
                const isTrending = i % 2 === 0;
                const isDisliked = dislikedIds.includes(Number(asset.id));

                return (
                <motion.div 
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    key={asset.id.toString()} 
                    className={`bg-background border rounded-[3.5rem] overflow-hidden transition-all p-6 md:p-12 shadow-xl relative group ${isSecret ? 'border-red-500/20 shadow-red-500/5' : 'border-border hover:border-vault-amber/30'} ${isDisliked ? 'opacity-40 grayscale' : ''}`}
                >
                    
                    {isSecret ? (
                        <div className="absolute top-8 right-8 px-4 py-1.5 bg-red-600 border border-red-500 rounded-full flex items-center gap-2 shadow-lg z-20">
                            <ShieldCheck size={14} className="text-white" />
                            <span className="text-[10px] font-black text-white uppercase tracking-tighter">{t.secureReport}</span>
                        </div>
                    ) : isTrending && (
                        <div className="absolute top-8 right-8 px-4 py-1.5 bg-vault-amber/20 border border-vault-amber/30 rounded-full flex items-center gap-2 animate-pulse">
                            <Sparkles size={14} className="text-vault-amber" />
                            <span className="text-[10px] font-black text-vault-amber uppercase tracking-widest">{t.trendingNow}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
                        {/* Left: Media */}
                        <div className="lg:col-span-4">
                            <div className="aspect-square rounded-[2.5rem] bg-muted border border-border overflow-hidden flex items-center justify-center relative group/media shadow-inner">
                                {isSecret ? (
                                    <div className="flex flex-col items-center justify-center p-10 text-center">
                                        <div className="w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center mb-6 border border-red-500/20 shadow-inner">
                                            <Lock size={40} className="text-red-500" />
                                        </div>
                                        <p className="text-sm font-black text-foreground uppercase tracking-widest">{t.encryptedData}</p>
                                        <p className="text-[10px] text-muted-foreground font-medium mt-3 leading-relaxed">{t.encryptedSub}</p>
                                    </div>
                                ) : (
                                    <MediaRenderer 
                                        client={client} 
                                        src={asset.cid} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-110"
                                        poster={getSafeUrl(asset.cid)}
                                    />
                                )}
                                
                                {!isSecret && (
                                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-md rounded-2xl border border-border flex flex-col shadow-lg transform translate-y-2 group-hover/media:translate-y-0 transition-transform">
                                        <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1">{t.metadataHash}</span>
                                        <span className="text-[10px] text-vault-amber font-mono font-bold truncate">{asset.cid}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: Content & Interactivity */}
                        <div className="lg:col-span-8 flex flex-col justify-between py-2">
                            <div>
                                <div className="flex flex-wrap items-center gap-4 mb-8">
                                    <span className="px-4 py-1.5 bg-vault-amber/10 border border-vault-amber/20 text-vault-amber text-[10px] font-black uppercase tracking-widest rounded-full">
                                        {category}
                                    </span>
                                    <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest rounded-full">
                                        {areaTag}
                                    </span>
                                    <span className="hidden md:inline text-border">|</span>
                                    <span className="text-[10px] md:text-xs text-muted-foreground font-bold tracking-tight">
                                        {t.authoredBy} <span className="text-foreground font-mono">{asset.owner.substring(0, 8)}...</span>
                                    </span>
                                </div>
                                
                                <h3 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tighter uppercase leading-[0.95]">
                                    {isSecret ? t.classifiedReport : asset.title}
                                </h3>
                                
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                                    <div className="flex flex-col bg-muted/50 p-4 rounded-2xl border border-border">
                                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-1">{t.supporters}</span>
                                        <span className="text-2xl font-black text-foreground">{isSecret ? "???" : asset.upvotes.toString()}</span>
                                    </div>
                                    <div className="flex flex-col bg-muted/50 p-4 rounded-2xl border border-border">
                                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-1">{t.securityLevel}</span>
                                        <span className={`text-2xl font-black ${isSecret ? 'text-red-500' : 'text-green-500'}`}>
                                            {isSecret ? 'ULTRA' : 'Verified'}
                                        </span>
                                    </div>
                                    <div className="hidden sm:flex flex-col bg-muted/50 p-4 rounded-2xl border border-border">
                                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-1">{t.verifiedId}</span>
                                        <Fingerprint size={28} className="text-vault-amber mt-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {!isSecret ? (
                                    <>
                                        <button 
                                            onClick={() => handleVote(asset.id)}
                                            disabled={isVoting || isDisliked}
                                            className="flex-[2] bg-vault-amber hover:bg-yellow-500 text-black font-black py-5 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all disabled:opacity-50 active:scale-95 shadow-lg shadow-vault-amber/10"
                                        >
                                            <ThumbsUp size={24} /> <span className="text-lg uppercase tracking-tighter">{t.dukungAspirasi}</span>
                                        </button>
                                        
                                        <div className="flex-1 flex gap-4">
                                            <button 
                                                onClick={() => setDislikedIds(prev => isDisliked ? prev.filter(id => id !== Number(asset.id)) : [...prev, Number(asset.id)])}
                                                className={`flex-1 rounded-[1.5rem] border transition-all active:scale-95 flex items-center justify-center gap-2 ${isDisliked ? 'bg-red-500 text-white border-red-500 shadow-lg' : 'bg-background border-border text-muted-foreground hover:border-red-500/50 hover:text-red-500'}`}
                                                title="Flag as Irrelevant"
                                            >
                                                <ThumbsDown size={24} />
                                            </button>

                                            <ShareButton title={asset.title} url={publicUrl} />
                                            
                                            <a 
                                                href={`https://sepolia.basescan.org/address/${contract.address}`} 
                                                target="_blank" rel="noopener noreferrer"
                                                className="flex-1 bg-background hover:bg-muted border border-border flex items-center justify-center rounded-[1.5rem] transition-all group"
                                                title="Blockchain Audit Trail"
                                            >
                                                <ExternalLink size={24} className="text-muted-foreground group-hover:text-vault-amber" />
                                            </a>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex-1 bg-red-500/10 border border-red-500/20 text-red-500 p-6 rounded-[2rem] flex items-center justify-center gap-4 text-center">
                                        <Lock size={24} /> <span className="font-black uppercase tracking-widest text-xs">{t.lockedMsg}</span>
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
