"use client";

import { useState } from "react";
import { prepareContractCall, ThirdwebClient, ThirdwebContract } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { Upload, FileUp, ShieldCheck, CheckCircle2, AlertCircle, Sparkles, BrainCircuit, Loader2, Fingerprint, Lock } from "lucide-react";
import { upload } from "thirdweb/storage";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { processAspirationAction } from "@/app/actions/aspiration";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

interface UploadFormProps {
  client: ThirdwebClient;
  contract: ThirdwebContract;
  onSuccess: () => void;
}

export default function UploadForm({ client, contract, onSuccess }: UploadFormProps) {
  const [title, setTitle] = useState("");
  const [assetType, setAssetType] = useState("Aspirasi");
  const [file, setFile] = useState<File | null>(null);
  const { theme } = useTheme();
  
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [areaTag, setAreaTag] = useState("");
  const [isSecret, setIsSecret] = useState(false);
  
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const { mutate: sendTransaction, isPending: isTxPending } = useSendTransaction();

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
            className="bg-background border border-green-500/30 p-12 md:p-20 rounded-[3rem] flex flex-col items-center text-center shadow-2xl"
          >
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/30 shadow-inner">
                  <CheckCircle2 size={48} className="text-green-500" />
              </div>
              <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter">{t.successMsg}</h3>
              <p className="text-muted-foreground max-w-sm font-medium leading-relaxed">{t.msgSuccess}</p>
              
              <div className="mt-12 flex items-center gap-3 text-[10px] font-black text-green-500 uppercase tracking-[0.3em] animate-pulse">
                  <Loader2 size={16} className="animate-spin" /> Synchronizing Digital Ledger...
              </div>
          </motion.div>
      );
  }

  return (
    <div className="bg-background border border-border p-6 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-5 -z-10">
          <BrainCircuit size={120} className="text-vault-amber" />
      </div>

      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-vault-amber/10 rounded-2xl border border-vault-amber/20 shadow-inner">
            <Sparkles size={24} className="text-vault-amber" />
        </div>
        <div>
            <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter leading-none">{t.uploadTitle}</h3>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-1 italic">Secured by AES-256 & Blockchain</p>
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Judul Aspirasi / Isu</label>
            <input 
              className="w-full bg-muted border border-border rounded-2xl p-5 text-foreground font-medium focus:ring-2 focus:ring-vault-amber/50 outline-none transition-all placeholder:text-muted-foreground/40 shadow-inner"
              placeholder={t.inputPlaceholder}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Target Instansi / Wilayah</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-vault-amber transition-colors">
                        <Fingerprint size={22} />
                    </div>
                    <input 
                    className="w-full bg-muted border border-border rounded-2xl p-5 pl-14 text-foreground font-medium focus:ring-2 focus:ring-vault-amber/50 outline-none transition-all placeholder:text-muted-foreground/40 shadow-inner"
                    placeholder="Contoh: KEMENKES, BALI"
                    value={areaTag}
                    onChange={(e) => setAreaTag(e.target.value)}
                    />
                </div>
            </div>

            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Level Privasi</label>
                <button 
                    type="button"
                    onClick={() => setIsSecret(!isSecret)}
                    className={`w-full flex items-center justify-center gap-4 px-8 py-5 rounded-2xl border transition-all active:scale-95 font-black uppercase text-xs tracking-widest ${
                    isSecret 
                    ? 'bg-red-500 text-white border-red-500 shadow-xl' 
                    : 'bg-muted border-border text-muted-foreground hover:border-vault-amber/30'
                    }`}
                >
                    {isSecret ? <Lock size={20} /> : <ShieldCheck size={20} />}
                    <span>{isSecret ? "Secret Report" : "Public Post"}</span>
                </button>
                {isSecret && (
                    <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[9px] font-bold text-red-500 mt-2 px-2 italic leading-tight"
                    >
                        {lang === 'id' 
                          ? "*Laporan rahasia dienkripsi on-chain dan hanya dapat diakses oleh instansi pemerintah terkait (Segera hadir)." 
                          : "*Secret reports are encrypted on-chain and only accessible by relevant government agencies (Coming soon)."}
                    </motion.p>
                )}
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Kategori Laporan</label>
                <select 
                    className="w-full bg-muted border border-border rounded-2xl p-5 text-foreground font-bold outline-none focus:ring-2 focus:ring-vault-amber/50 cursor-pointer appearance-none shadow-inner"
                    value={assetType}
                    onChange={(e) => setAssetType(e.target.value)}
                >
                    <option value="Aspirasi">Aspirasi Publik</option>
                    <option value="Kritik">Kritik & Keluhan</option>
                    <option value="Informasi">Permohonan Informasi</option>
                </select>
            </div>

            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Bukti Pendukung</label>
                <label className="flex items-center justify-between bg-muted border border-dashed border-border rounded-2xl p-5 cursor-pointer hover:border-vault-amber transition-all group overflow-hidden shadow-inner">
                    <span className="text-sm text-muted-foreground/60 font-bold truncate max-w-[150px]">
                    {file ? file.name : "Pilih Dokumen..."}
                    </span>
                    <FileUp size={22} className="text-muted-foreground group-hover:text-vault-amber shrink-0 transition-transform group-hover:-translate-y-1" />
                    <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="hidden"
                    />
                </label>
            </div>
        </div>

        <div className="pt-6 space-y-6">
          <AnimatePresence>
            {status === "error" && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-red-500/10 border border-red-500/30 p-5 rounded-2xl flex items-start gap-4 text-red-500 text-sm font-bold shadow-sm"
                >
                    <AlertCircle size={20} className="shrink-0" />
                    <p>{errorMessage}</p>
                </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-6">
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
                className="flex-1 px-8 py-6 bg-background border border-border text-foreground hover:bg-muted rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm"
              >
                 <BrainCircuit size={20} className="text-vault-amber" /> Cek AI (Tes Audit)
              </button>

              <button 
                onClick={handleUpload}
                disabled={isPending}
                className="flex-[2] bg-vault-amber hover:bg-yellow-500 text-black font-black py-6 rounded-2xl transition-all disabled:opacity-50 flex flex-col justify-center items-center gap-1 shadow-xl shadow-vault-amber/10 active:scale-95 overflow-hidden relative group/btn"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                
                {isAiProcessing ? (
                  <div className="flex items-center gap-3 relative z-10">
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span className="text-lg uppercase tracking-tighter">Analisis AI...</span>
                  </div>
                ) : isTxPending ? (
                  <div className="flex items-center gap-3 relative z-10">
                      <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-lg uppercase tracking-tighter">Finalisasi Audit...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center relative z-10">
                    <div className="flex items-center gap-3 text-xl uppercase tracking-tighter">
                      <ShieldCheck size={24}/> Sign & Audit Aspirasi
                    </div>
                    <span className="text-[10px] font-black opacity-60 uppercase tracking-widest mt-1">Immutable Transaction • 0.00 GAS</span>
                  </div>
                )}
              </button>
          </div>

          <div className="flex items-center justify-center gap-6 py-4 opacity-30">
             <div className="h-px flex-1 bg-border"></div>
             <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-vault-amber" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Certified Digital Patriot Platform</span>
             </div>
             <div className="h-px flex-1 bg-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
