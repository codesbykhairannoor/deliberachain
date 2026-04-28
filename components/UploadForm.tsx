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
                  <Loader2 size={16} className="animate-spin" /> {t.formSyncLedger}
              </div>
          </motion.div>
      );
  }

  return (
    <div className="bg-muted/30 border border-border p-8 md:p-12 rounded-[3rem] backdrop-blur-sm relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 p-16 opacity-5 -z-10">
          <BrainCircuit size={200} className="text-vault-amber" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 px-2">
        <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-vault-amber/10 rounded-2xl flex items-center justify-center border border-vault-amber/20">
                <Sparkles size={28} className="text-vault-amber" />
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter leading-none">{t.uploadTitle}</h3>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1.5 opacity-60">Verified Ledger Protocol</p>
            </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left Column: Essential Info */}
        <div className="space-y-8">
            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">{t.formTitleLabel}</label>
                <input 
                className="w-full bg-background border border-border rounded-2xl p-6 text-foreground font-medium focus:ring-4 focus:ring-vault-amber/10 outline-none transition-all placeholder:text-muted-foreground/30 text-lg md:text-xl shadow-sm"
                placeholder={t.inputPlaceholder}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">{t.formTargetLabel}</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-vault-amber transition-colors">
                            <Fingerprint size={20} />
                        </div>
                        <input 
                        className="w-full bg-background border border-border rounded-2xl p-5 pl-14 text-foreground font-medium focus:ring-4 focus:ring-vault-amber/10 outline-none transition-all placeholder:text-muted-foreground/30 text-base shadow-sm"
                        placeholder={lang === 'id' ? "Contoh: KEMENKES" : "Ex: HEALTH_DEPT"}
                        value={areaTag}
                        onChange={(e) => setAreaTag(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">{t.formCategoryLabel}</label>
                    <div className="relative">
                        <select 
                            className="w-full bg-background border border-border rounded-2xl p-5 text-foreground font-bold outline-none focus:ring-4 focus:ring-vault-amber/10 cursor-pointer appearance-none text-sm shadow-sm"
                            value={assetType}
                            onChange={(e) => setAssetType(e.target.value)}
                        >
                            <option value="Aspirasi">{t.formCat1}</option>
                            <option value="Kritik">{t.formCat2}</option>
                            <option value="Informasi">{t.formCat3}</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none text-muted-foreground">
                            <AlertCircle size={18} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Privacy Level</label>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                        type="button"
                        onClick={() => setIsSecret(false)}
                        className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border transition-all font-bold text-xs ${
                        !isSecret 
                        ? 'bg-vault-amber text-black border-vault-amber shadow-lg scale-[1.02]' 
                        : 'bg-background border-border text-muted-foreground hover:border-vault-amber/30'
                        }`}
                    >
                        <ShieldCheck size={18} /> {t.formPrivacyPublic}
                    </button>
                    <button 
                        type="button"
                        onClick={() => setIsSecret(true)}
                        className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl border transition-all font-bold text-xs ${
                        isSecret 
                        ? 'bg-red-500 text-white border-red-500 shadow-lg scale-[1.02]' 
                        : 'bg-background border-border text-muted-foreground hover:border-red-500/50'
                        }`}
                    >
                        <Lock size={18} /> {t.formPrivacySecret}
                    </button>
                </div>
                {isSecret && (
                    <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-medium text-red-500 mt-3 px-2 italic opacity-80"
                    >
                        {t.formSecretDisclaimer}
                    </motion.p>
                )}
            </div>
        </div>

        {/* Right Column: Evidence & Submission */}
        <div className="flex flex-col h-full">
            <div className="bg-background/40 border border-border p-8 rounded-[2.5rem] flex-1 flex flex-col relative overflow-hidden">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6 block text-center opacity-40">{t.formEvidenceLabel}</label>
                
                <div className="flex-1 flex flex-col justify-center gap-8">
                    <label className="relative group cursor-pointer">
                        <div className="aspect-[16/9] bg-background border-2 border-dashed border-border rounded-[2rem] flex flex-col items-center justify-center transition-all group-hover:border-vault-amber group-hover:bg-vault-amber/5 overflow-hidden group-hover:scale-[0.99]">
                            {file ? (
                                <div className="p-8 text-center animate-in zoom-in-95">
                                    <div className="w-16 h-16 bg-vault-amber/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-vault-amber/20">
                                        <FileUp size={32} className="text-vault-amber" />
                                    </div>
                                    <p className="text-lg font-bold text-foreground truncate max-w-[250px] mb-1">{file.name}</p>
                                    <p className="text-[10px] text-vault-amber font-black tracking-widest uppercase">{t.formReadyLedger}</p>
                                </div>
                            ) : (
                                <div className="text-center p-8 transition-transform group-hover:-translate-y-1">
                                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 border border-border group-hover:border-vault-amber/30 transition-colors">
                                        <Upload size={32} className="text-muted-foreground group-hover:text-vault-amber transition-colors" />
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest group-hover:text-foreground transition-colors">{t.formClickUpload}</p>
                                </div>
                            )}
                        </div>
                        <input 
                            type="file" 
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            className="hidden"
                        />
                    </label>

                    <div className="space-y-4">
                        <button 
                            type="button"
                            onClick={async () => {
                                if (!title) return;
                                setIsAiProcessing(true);
                                setStatus("idle");
                                try {
                                    const data = await processAspirationAction(title);
                                    alert(`✅ AI AUDIT: ${data.category}\nUrgensi: ${data.urgency}\nRingkasan: ${data.summary}`);
                                } catch (e) {
                                    alert("Gagal melakukan audit AI.");
                                } finally {
                                    setIsAiProcessing(false);
                                }
                            }}
                            disabled={isPending}
                            className="w-full py-4 bg-muted border border-border text-foreground hover:bg-background rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-95 hover:border-vault-amber/30 shadow-sm"
                        >
                            <BrainCircuit size={18} className="text-vault-amber" /> {t.formCheckAi}
                        </button>

                        <button 
                            onClick={handleUpload}
                            disabled={isPending}
                            className="w-full bg-vault-amber hover:bg-yellow-500 text-black font-black py-6 rounded-2xl transition-all disabled:opacity-50 flex flex-col justify-center items-center gap-1 shadow-xl shadow-vault-amber/10 active:scale-95 overflow-hidden relative group/btn"
                        >
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                            {isAiProcessing ? (
                                <div className="flex items-center gap-3 relative z-10">
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    <span className="text-lg font-bold tracking-tight">{t.formAiAnalyzing}</span>
                                </div>
                            ) : isTxPending ? (
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-lg font-bold tracking-tight">{t.formFinalizing}</span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center relative z-10">
                                    <div className="flex items-center gap-3 text-xl font-black tracking-tight italic">
                                        <ShieldCheck size={24}/> {t.uploadBtn}
                                    </div>
                                    <span className="text-[8px] font-bold opacity-60 uppercase tracking-widest mt-1">Secured On-Chain Transaction</span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-4 opacity-30 pt-6 border-t border-border">
                    <ShieldCheck size={14} className="text-vault-amber" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground text-center leading-none italic">Protected by Base L2 Architecture</span>
                    <ShieldCheck size={14} className="text-vault-amber" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
