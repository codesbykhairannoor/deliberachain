"use client";

import { useReadContract, MediaRenderer, useSendTransaction } from "thirdweb/react";
import { ThirdwebContract, ThirdwebClient } from "thirdweb";
import { ExternalLink, Music, FileText, RefreshCw, FolderOpen, ThumbsUp, Sparkles, Fingerprint, Lock, ShieldCheck } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import CommentSection from "./CommentSection";
import ShareButton from "./ShareButton";

interface GalleryProps {
  contract: ThirdwebContract;
  address: string; // Alamat ini dinamis (bisa dari login atau dari URL)
  client: ThirdwebClient;
}

export default function Gallery({ contract, address, client }: GalleryProps) {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const { mutate: sendTransaction, isPending: isVoting } = useSendTransaction();

  // Helper untuk parsing Composite Type (Category | Urgency | AreaTag | SECRET)
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
          alert("Dukungan tercatat di Blockchain! (Gasless Protocol Active)");
          refetch();
        },
        onError: (err) => {
          alert("Gagal memberikan dukungan: " + err.message);
        }
      });
    });
  };

  // Ambil data dari Smart Contract (V2)
  const { data: rawAssets, isPending, refetch } = useReadContract({
    contract,
    method: "function getAllAspirations() view returns ((uint256 id, string cid, string title, string category, address owner, uint256 timestamp, uint8 status, uint256 upvotes)[])",
    params: [],
  });

  // Filter Active only
  const assets = rawAssets ? rawAssets.filter(a => a.status === 0 || a.status === 2) : [];

  // Helper untuk generate URL IPFS
  const getSafeUrl = (ipfsUri: string) => {
    if (!ipfsUri) return "#";
    const hash = ipfsUri.replace("ipfs://", "");
    return `https://${client.clientId}.ipfscdn.io/ipfs/${hash}`;
  };

  if (isPending) return (
    <div className="flex flex-col items-center justify-center py-20 text-vault-amber animate-pulse">
        <RefreshCw className="animate-spin mb-4" size={32} />
        <p className="font-medium tracking-widest uppercase text-xs">Fetching Deliberations...</p>
    </div>
  );

  return (
    <div className="bg-white/[0.02] border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-sm min-h-[500px]">
      
      <div className="flex justify-between items-center mb-10 px-2">
        <div>
              <h2 className="text-3xl font-black text-white flex items-center gap-3">
                 Deliberation <span className="text-vault-amber">Room</span>
              </h2>
              <p className="text-slate-400 text-sm mt-1">Aspirasi publik yang sedang diaudit secara transparan.</p>
        </div>
        
        <button onClick={() => refetch()} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-vault-amber/50 hover:bg-vault-amber/10 transition-all group">
          <RefreshCw size={18} className="text-slate-400 group-hover:text-vault-amber transition-transform duration-500" />
        </button>
      </div>

      {!assets || assets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-white/5 rounded-[2rem]">
          <FolderOpen size={32} className="text-slate-600 mb-4" />
          <p className="text-slate-500 text-sm">{t.noAssets}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12">
          {[...assets].reverse().map((asset, i) => {
            const { category, urgency, areaTag, isSecret } = parseType(asset.category);
            const publicUrl = getSafeUrl(asset.cid);
            const isTrending = i % 2 === 0;

            return (
              <div key={i} className={`bg-[#0a0a0a] border rounded-[3rem] overflow-hidden transition-all p-8 shadow-2xl relative ${isSecret ? 'border-red-900/30' : 'border-white/5 hover:border-white/10'}`}>
                
                {isSecret ? (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-red-600 border border-red-500 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.4)] z-20">
                        <ShieldCheck size={12} className="text-white" />
                        <span className="text-[10px] font-black text-white uppercase tracking-tighter">SECURE REPORT</span>
                    </div>
                ) : isTrending && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full flex items-center gap-2 animate-pulse">
                        <Sparkles size={12} className="text-red-500" />
                        <span className="text-[10px] font-black text-red-500 uppercase">Trending Now</span>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Left: Media */}
                    <div className="md:col-span-4">
                        <div className="aspect-square rounded-[2rem] bg-[#111] border border-white/5 overflow-hidden flex items-center justify-center relative group/media">
                            {isSecret ? (
                                <div className="flex flex-col items-center justify-center p-8 text-center">
                                    <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/30">
                                        <Lock size={40} className="text-red-500" />
                                    </div>
                                    <p className="text-sm font-black text-white uppercase tracking-widest">Encypted Data</p>
                                    <p className="text-[10px] text-slate-500 mt-2">Only authorized authorities can decrypt and view this document.</p>
                                </div>
                            ) : asset.category.includes("image") ? (
                                <MediaRenderer client={client} src={asset.cid} className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex flex-col items-center text-slate-700">
                                    <FileText size={60} strokeWidth={1} className="opacity-20" />
                                </div>
                            )}
                            
                            {!isSecret && (
                                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur rounded-xl border border-white/5 flex flex-col">
                                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Metadata Hash</span>
                                    <span className="text-[10px] text-vault-amber font-mono truncate">{asset.cid}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Content & Interactivity */}
                    <div className="md:col-span-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-vault-amber/10 border border-vault-amber/30 text-vault-amber text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {category}
                                </span>
                                <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {areaTag}
                                </span>
                                <span className="text-slate-700">/</span>
                                <span className="text-xs text-slate-500 font-mono italic">
                                    Authored by {asset.owner.substring(0, 6)}...{asset.owner.substring(38)}
                                </span>
                            </div>
                            
                            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                                {isSecret ? "CLASSIFIED REPORT" : asset.title}
                            </h3>
                            
                            <div className="flex gap-6 mb-8">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-600 font-black uppercase">Supporters</span>
                                    <span className="text-xl font-black text-white">{isSecret ? "PRIVATE" : asset.upvotes.toString()}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-600 font-black uppercase">Security Level</span>
                                    <span className={`text-xl font-black ${isSecret ? 'text-red-500' : 'text-green-500'}`}>
                                        {isSecret ? 'HIGH (AES-256)' : 'Public'}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-600 font-black uppercase">Verified ID</span>
                                    <Fingerprint size={20} className="text-blue-500 mt-1" />
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {!isSecret ? (
                                <>
                                    <button 
                                        onClick={() => handleVote(asset.id)}
                                        disabled={isVoting}
                                        className="flex-1 bg-vault-amber hover:bg-yellow-400 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                                    >
                                        <ThumbsUp size={20} /> Dukung Aspirasi
                                    </button>
                                    <ShareButton title={asset.title} url={publicUrl} />
                                    <a 
                                        href={publicUrl} target="_blank" rel="noopener noreferrer"
                                        className="px-6 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center rounded-2xl transition-all"
                                    >
                                        <ExternalLink size={20} className="text-slate-400" />
                                    </a>
                                </>
                            ) : (
                                <div className="flex-1 bg-red-500/5 border border-red-500/20 text-red-500 p-4 rounded-2xl flex items-center justify-center gap-3">
                                    <Lock size={18} /> Laporan ini dirahasiakan untuk keamanan pengirim.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Discussion Section Only for Public Posts */}
                {!isSecret && <CommentSection aspirationId={asset.cid} />}

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}