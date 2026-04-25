"use client";

import { useState } from "react";
import { prepareContractCall, ThirdwebClient, ThirdwebContract } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { Upload, FileUp, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { upload } from "thirdweb/storage";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { processAspirationAction } from "@/app/actions/aspiration";
import { BrainCircuit, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [areaTag, setAreaTag] = useState("");
  const [isSecret, setIsSecret] = useState(false);
  
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const { mutate: sendTransaction, isPending: isTxPending, error: txError } = useSendTransaction();

  const isPending = isAiProcessing || isTxPending;

  const handleUpload = async () => {
    if (!title || !file || !areaTag) {
        setStatus("error");
        setErrorMessage(t.errorFill || "Harap isi semua field.");
        return;
    }

    setIsAiProcessing(true);
    setStatus("idle");
    
    try {
      const aiData = await processAspirationAction(title + " " + (file.name || ""));
      const uri = await upload({ client, files: [file] });
      
      const cleanTag = areaTag.trim().toUpperCase();
      const compositeType = `${aiData.category} | ${aiData.urgency} | ${cleanTag} ${isSecret ? "| SECRET" : ""}`;
      
      const transaction = prepareContractCall({
        contract,
        method: "function submitAspiration(string _cid, string _title, string _category)",
        params: [uri, title, compositeType],
      });

      sendTransaction(transaction, {
        onSuccess: () => {
          setStatus("success");
          setTitle("");
          setFile(null);
          setAreaTag("");
          // Delay redirect to show success state
          setTimeout(() => {
            onSuccess();
          }, 3000);
        },
        onError: (error) => {
          setStatus("error");
          setErrorMessage(error.message);
        },
        onSettled: () => setIsAiProcessing(false)
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setStatus("error");
      setErrorMessage(message);
      setIsAiProcessing(false);
    }
  };

  if (status === "success") {
      return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-vault-card border border-green-500/30 p-12 rounded-[2.5rem] flex flex-col items-center text-center shadow-[0_0_50px_rgba(34,197,94,0.1)]"
          >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/50">
                  <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{t.successMsg}</h3>
              <p className="text-slate-400 max-w-xs">{t.msgSuccess}</p>
              
              <div className="mt-8 flex items-center gap-2 text-[10px] font-mono text-green-500 uppercase tracking-widest animate-pulse">
                  <Loader2 size={12} className="animate-spin" /> Synchronizing Ledger...
              </div>
          </motion.div>
      );
  }

  return (
    <div className="bg-vault-card border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        <div className="p-2 bg-vault-amber/10 rounded-lg">
            <Upload size={20} className="text-vault-amber" />
        </div>
        {t.uploadTitle}
      </h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Judul Aspirasi</label>
            <input 
              className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:ring-2 focus:ring-vault-amber outline-none transition-all placeholder:text-slate-700"
              placeholder={t.inputPlaceholder}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-2 flex-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Instansi / Wilayah</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-vault-amber transition-colors">
                        <ShieldCheck size={20} />
                    </div>
                    <input 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 pl-12 text-white focus:ring-2 focus:ring-vault-amber outline-none transition-all placeholder:text-slate-700"
                    placeholder="Contoh: KEMENKES, BALI, UNPAD"
                    value={areaTag}
                    onChange={(e) => setAreaTag(e.target.value)}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Visibilitas</label>
                <button 
                    type="button"
                    onClick={() => setIsSecret(!isSecret)}
                    className={`w-full md:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border transition-all active:scale-95 ${
                    isSecret 
                    ? 'bg-red-500/10 border-red-500 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
                    : 'bg-black/40 border-white/10 text-slate-500'
                    }`}
                >
                    {isSecret ? <ShieldCheck size={20} className="fill-red-500/20" /> : <Upload size={20} />}
                    <span className="text-[10px] font-black uppercase tracking-widest">{isSecret ? "Secret Report" : "Public Post"}</span>
                </button>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-2 flex-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Jenis Laporan</label>
                <select 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-vault-amber cursor-pointer appearance-none"
                    value={assetType}
                    onChange={(e) => setAssetType(e.target.value)}
                >
                    <option value="Aspirasi" className="bg-zinc-900">Aspirasi Publik</option>
                    <option value="Kritik" className="bg-zinc-900 text-red-400">Kritik & Keluhan</option>
                    <option value="Informasi" className="bg-zinc-900">Permohonan Informasi</option>
                </select>
            </div>

            <div className="space-y-2 flex-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Bukti / Dokumen</label>
                <label className="flex items-center justify-between bg-black/40 border border-dashed border-white/20 rounded-2xl p-4 cursor-pointer hover:border-vault-amber transition-all group overflow-hidden">
                    <span className="text-sm text-zinc-400 truncate w-32">
                    {file ? file.name : "Pilih File..."}
                    </span>
                    <FileUp size={18} className="text-zinc-500 group-hover:text-vault-amber shrink-0" />
                    <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="hidden"
                    />
                </label>
            </div>
        </div>

        <div className="pt-4 space-y-4">
          <AnimatePresence>
            {status === "error" && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl flex items-start gap-3 text-red-500 text-xs"
                >
                    <AlertCircle size={16} className="shrink-0" />
                    <p>{errorMessage}</p>
                </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col md:flex-row gap-4">
              <button 
                type="button"
                onClick={async () => {
                    if (!title) return;
                    setIsAiProcessing(true);
                    setStatus("idle");
                    try {
                        const data = await processAspirationAction(title);
                        if (data.category === "Spam/Irrelevant") {
                            alert(`❌ AI AUDIT: GAGAL\nKategori: ${data.category}\nAlasan: Konten terdeteksi sebagai spam atau tidak relevan.`);
                        } else {
                            alert(`✅ AI AUDIT: BERHASIL\nKategori: ${data.category}\nUrgensi: ${data.urgency}\nRingkasan: ${data.summary}`);
                        }
                    } catch (e) {
                        alert("Gagal melakukan audit AI.");
                    } finally {
                        setIsAiProcessing(false);
                    }
                }}
                disabled={isPending}
                className="flex-1 px-6 py-5 border border-white/10 text-white hover:bg-white/5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                 <ShieldCheck size={20} className="text-vault-amber" /> Cek AI (Tes Audit)
              </button>

              <button 
                onClick={handleUpload}
                disabled={isPending}
                className="flex-[2] bg-vault-amber hover:bg-yellow-500 text-black font-black py-5 rounded-2xl transition-all disabled:opacity-50 flex flex-col justify-center items-center gap-1 shadow-[0_0_30px_rgba(245,158,11,0.2)] active:scale-95"
              >
                {isAiProcessing ? (
                  <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Dianalisis AI...
                  </div>
                ) : isTxPending ? (
                  <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Finalisasi Audit Digital...
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 text-lg">
                      <BrainCircuit size={22}/> Sign & Audit Aspirasi
                    </div>
                    <span className="text-[10px] font-black opacity-60 uppercase tracking-tighter">Zero Fee • Secured by Smart Account</span>
                  </div>
                )}
              </button>
          </div>

          <div className="flex items-center justify-center gap-4 py-2 opacity-40">
             <div className="h-px flex-1 bg-white/5"></div>
             <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-vault-amber" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Gas Sponsored by Protocol</span>
             </div>
             <div className="h-px flex-1 bg-white/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
