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
    <div className="bg-muted/30 border border-border p-6 md:p-16 rounded-[3.5rem] backdrop-blur-sm relative overflow-hidden w-full min-h-[700px]">
      <div className="absolute top-0 right-0 p-16 opacity-5 -z-10">
          <BrainCircuit size={300} className="text-vault-amber" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 px-4">
        <div className="flex items-center gap-8">
            <div className="w-16 h-16 bg-vault-amber/10 rounded-[1.5rem] flex items-center justify-center border border-vault-amber/20 shadow-inner">
                <Sparkles size={32} className="text-vault-amber" />
            </div>
            <div>
                <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">{t.uploadTitle}</h3>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mt-2 italic opacity-60">Immutable Protocol v4.0</p>
            </div>
        </div>
        <div className="flex items-center gap-4 px-6 py-3 bg-background/50 rounded-2xl border border-border shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status: Node Connected</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column: Essential Info */}
        <div className="xl:col-span-7 space-y-10">
            <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground ml-4">{t.formTitleLabel}</label>
                <input 
                className="w-full bg-background border border-border rounded-[2rem] p-8 text-foreground font-medium focus:ring-4 focus:ring-vault-amber/10 outline-none transition-all placeholder:text-muted-foreground/20 shadow-xl text-3xl md:text-4xl"
                placeholder={t.inputPlaceholder}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground ml-4">{t.formTargetLabel}</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-vault-amber transition-colors">
                            <Fingerprint size={24} />
                        </div>
                        <input 
                        className="w-full bg-background border border-border rounded-[2rem] p-6 pl-20 text-foreground font-medium focus:ring-4 focus:ring-vault-amber/10 outline-none transition-all placeholder:text-muted-foreground/20 shadow-xl text-xl"
                        placeholder={lang === 'id' ? "Contoh: KEMENKES" : "Ex: HEALTH_DEPT"}
                        value={areaTag}
                        onChange={(e) => setAreaTag(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground ml-4">{t.formCategoryLabel}</label>
                    <div className="relative">
                        <select 
                            className="w-full bg-background border border-border rounded-[2rem] p-6 text-foreground font-black outline-none focus:ring-4 focus:ring-vault-amber/10 cursor-pointer appearance-none shadow-xl text-xl uppercase tracking-widest"
                            value={assetType}
                            onChange={(e) => setAssetType(e.target.value)}
                        >
                            <option value="Aspirasi">{t.formCat1}</option>
                            <option value="Kritik">{t.formCat2}</option>
                            <option value="Informasi">{t.formCat3}</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-8 flex items-center pointer-events-none text-muted-foreground">
                            <AlertCircle size={20} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground ml-4">Encryption Preference</label>
                <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                        type="button"
                        onClick={() => setIsSecret(false)}
                        className={`flex-1 flex items-center justify-center gap-4 px-8 py-6 rounded-[1.5rem] border transition-all font-black uppercase text-xs tracking-widest ${
                        !isSecret 
                        ? 'bg-vault-amber text-black border-vault-amber shadow-2xl scale-[1.02]' 
                        : 'bg-background border-border text-muted-foreground hover:border-vault-amber/30 shadow-md'
                        }`}
                    >
                        <ShieldCheck size={20} /> {t.formPrivacyPublic}
                    </button>
                    <button 
                        type="button"
                        onClick={() => setIsSecret(true)}
                        className={`flex-1 flex items-center justify-center gap-4 px-8 py-6 rounded-[1.5rem] border transition-all font-black uppercase text-xs tracking-widest ${
                        isSecret 
                        ? 'bg-red-500 text-white border-red-500 shadow-2xl scale-[1.02]' 
                        : 'bg-background border-border text-muted-foreground hover:border-red-500/50 shadow-md'
                        }`}
                    >
                        <Lock size={20} /> {t.formPrivacySecret}
                    </button>
                </div>
                {isSecret && (
                    <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold text-red-500 mt-6 px-6 italic leading-relaxed opacity-80 uppercase tracking-tight"
                    >
                        {t.formSecretDisclaimer}
                    </motion.p>
                )}
            </div>
        </div>

        {/* Right Column: Evidence & Submission */}
        <div className="xl:col-span-5 flex flex-col h-full">
            <div className="bg-background/40 border border-border p-10 rounded-[3rem] flex-1 flex flex-col shadow-2xl relative overflow-hidden">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-8 block text-center italic opacity-40">{t.formEvidenceLabel}</label>
                
                <div className="flex-1 flex flex-col justify-center gap-10">
                    <label className="relative group cursor-pointer">
                        <div className="aspect-[16/10] bg-background border-2 border-dashed border-border rounded-[2.5rem] flex flex-col items-center justify-center transition-all group-hover:border-vault-amber group-hover:bg-vault-amber/5 overflow-hidden group-hover:scale-[0.98] shadow-inner">
                            {file ? (
                                <div className="p-10 text-center animate-in zoom-in-95">
                                    <div className="w-20 h-20 bg-vault-amber/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-vault-amber/20">
                                        <FileUp size={40} className="text-vault-amber" />
                                    </div>
                                    <p className="text-xl font-black text-foreground truncate max-w-[300px] mb-2">{file.name}</p>
                                    <p className="text-[10px] text-vault-amber uppercase font-black tracking-widest">{t.formReadyLedger}</p>
                                </div>
                            ) : (
                                <div className="text-center p-10 transition-transform group-hover:-translate-y-2">
                                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 border border-border group-hover:border-vault-amber/30 transition-colors">
                                        <Upload size={40} className="text-muted-foreground group-hover:text-vault-amber transition-colors" />
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

                    <div className="space-y-6">
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
                            className="w-full py-5 bg-muted border border-border text-foreground hover:bg-background rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-4 active:scale-95 shadow-md hover:border-vault-amber/30"
                        >
                            <BrainCircuit size={20} className="text-vault-amber" /> {t.formCheckAi}
                        </button>

                        <button 
                            onClick={handleUpload}
                            disabled={isPending}
                            className="w-full bg-vault-amber hover:bg-yellow-500 text-black font-black py-8 rounded-[2rem] transition-all disabled:opacity-50 flex flex-col justify-center items-center gap-2 shadow-2xl shadow-vault-amber/20 active:scale-95 overflow-hidden relative group/btn"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                            {isAiProcessing ? (
                                <div className="flex items-center gap-4 relative z-10">
                                    <Loader2 className="w-8 h-8 animate-spin" />
                                    <span className="text-xl uppercase tracking-tighter italic">{t.formAiAnalyzing}</span>
                                </div>
                            ) : isTxPending ? (
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-xl uppercase tracking-tighter italic">{t.formFinalizing}</span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center relative z-10">
                                    <div className="flex items-center gap-3 text-3xl uppercase tracking-tighter italic">
                                        <ShieldCheck size={32}/> {t.uploadBtn}
                                    </div>
                                    <span className="text-[8px] font-black opacity-60 uppercase tracking-[0.4em] mt-1">Immutable On-Chain Transaction</span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-6 opacity-20 pt-8 border-t border-border">
                    <ShieldCheck size={18} className="text-vault-amber" />
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground italic text-center leading-none">Secured by Base L2</span>
                    <ShieldCheck size={18} className="text-vault-amber" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
