"use client";

import { useState } from "react";
import { prepareContractCall, ThirdwebClient, ThirdwebContract } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { Upload, FileUp, ShieldCheck } from "lucide-react";
import { upload } from "thirdweb/storage";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { processAspirationAction } from "@/app/actions/aspiration";
import { BrainCircuit, Loader2 } from "lucide-react";

interface UploadFormProps {
  client: ThirdwebClient;
  contract: ThirdwebContract;
  onSuccess: () => void;
}

export default function UploadForm({ client, contract, onSuccess }: UploadFormProps) {
  const [title, setTitle] = useState("");
  const [assetType, setAssetType] = useState("image");
  const [file, setFile] = useState<File | null>(null);
  
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);
  const [areaTag, setAreaTag] = useState("");
  const [isSecret, setIsSecret] = useState(false);
  
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const { mutate: sendTransaction, isPending: isTxPending, error: txError } = useSendTransaction();

  const isPending = isAiProcessing || isTxPending;

  const handleUpload = async () => {
    if (!title || !file || !areaTag) return alert("Harap isi Judul, File, dan Wilayah Tujuan.");

    setIsAiProcessing(true);
    try {
      // 1. AI Analysis
      const aiData = await processAspirationAction(title + " " + (file.name || ""));
      setAiResult(aiData);
      
      // 2. Upload to IPFS
      const uri = await upload({ client, files: [file] });
      
      // 3. Prepare Blockchain Transaction
      const cleanTag = areaTag.trim().toUpperCase();
      const compositeType = `${aiData.category} | ${aiData.urgency} | ${cleanTag} ${isSecret ? "| SECRET" : ""}`;
      
      // If Secret: Post to USER address. If Public: Post to GLOBAL ARCHIVE.
      const targetAddress = isSecret 
        ? (window as any).thirdwebAccountAddress // Fallback mechanism for demo
        : "0x801F15748D3a6dFc5A8D3a7Bc36821Cdb51d59bC";

      const transaction = prepareContractCall({
        contract,
        method: "function uploadAsset(string _cid, string _title, string _assetType)",
        params: [uri, title, compositeType],
      });

      sendTransaction(transaction, {
        onSuccess: (txHash) => {
          alert("Aspirasi berhasil tercatat di Blockchain & dianalisis AI!");
          setTitle("");
          setFile(null);
          setAiResult(null);
          onSuccess();
        },
        onError: (error) => {
          alert("Gagal mencatat ke Blockchain: " + error.message);
        },
        onSettled: () => setIsAiProcessing(false)
      });
    } catch (err: any) {
      alert("System Error: " + (err.message || err));
      setIsAiProcessing(false);
    }
  };

  return (
    /* Menggunakan bg-vault-card dan border-white/10 agar sinkron dengan globals.css */
    <div className="bg-vault-card border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Upload size={20} className="text-vault-amber" /> {t.uploadTitle}
      </h3>
      
      <div className="space-y-4">
        <input 
          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-vault-amber outline-none transition-all"
          placeholder={t.inputPlaceholder}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative group flex-1">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-vault-amber transition-colors">
                <ShieldCheck size={20} />
             </div>
             <input 
               className="w-full bg-black/40 border border-white/10 rounded-xl p-4 pl-12 text-white focus:ring-2 focus:ring-vault-amber outline-none transition-all"
               placeholder="Tujuan Instansi (Misal: UNPAD)"
               value={areaTag}
               onChange={(e) => setAreaTag(e.target.value)}
             />
          </div>

          <button 
            type="button"
            onClick={() => setIsSecret(!isSecret)}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all ${
              isSecret 
              ? 'bg-red-500/10 border-red-500 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
              : 'bg-black/40 border-white/10 text-slate-500'
            }`}
          >
             {isSecret ? <ShieldCheck size={20} className="fill-red-500/20" /> : <Upload size={20} />}
             <span className="text-xs font-black uppercase tracking-widest">{isSecret ? "Secret Report" : "Public Post"}</span>
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <select 
  className="flex-1 bg-black/40 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-vault-amber cursor-pointer"
  value={assetType}
  onChange={(e) => setAssetType(e.target.value)}
>
  <option value="Aspirasi" className="bg-zinc-900">Aspirasi Publik</option>
  <option value="Kritik" className="bg-zinc-900 text-red-400">Kritik & Keluhan</option>
  <option value="Informasi" className="bg-zinc-900">Permohonan Informasi</option>
</select>

          <label className="flex-1 flex items-center justify-between bg-black/40 border border-dashed border-white/20 rounded-xl p-4 cursor-pointer hover:border-vault-amber transition-all group">
            <span className="text-sm text-zinc-400 truncate w-40">
              {file ? file.name : "Pilih File..."}
            </span>
            <FileUp size={18} className="text-zinc-500 group-hover:text-vault-amber" />
            <input 
              type="file" 
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        </div>

        <button 
          onClick={handleUpload}
          disabled={isPending}
          className="w-full bg-vault-amber hover:bg-yellow-500 text-black font-extrabold py-4 rounded-xl transition-all disabled:opacity-50 flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
        >
          {isAiProcessing ? (
            <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Dianalisis AI...
            </div>
          ) : isTxPending ? (
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Mencatat di Blockchain...
            </div>
          ) : (
            <><BrainCircuit size={20}/> Kirim ke Deliberation Room</>
          )}
        </button>
        
        {txError && (
            <p className="text-red-400 text-xs text-center bg-red-950/30 p-3 rounded-xl border border-red-900/50">
               ⚠️ {txError.message}
            </p>
        )}
      </div>
    </div>
  );
}