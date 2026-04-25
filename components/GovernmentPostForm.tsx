"use client";

import { useState } from "react";
import { addBulletin } from "@/lib/bulletinData";
import { Send, FileText, MapPin, Tag, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function GovernmentPostForm({ jurisdiction, author }: { jurisdiction: string, author: string }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<any>("UPDATE");
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setIsPending(true);
    // Simulate API delay
    await new Promise(r => setTimeout(r, 1500));

    addBulletin({
      title,
      content,
      category,
      jurisdiction,
      author
    });

    setIsPending(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-background border border-border p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-vault-amber/10 rounded-2xl border border-vault-amber/20">
            <Sparkles size={24} className="text-vault-amber" />
        </div>
        <div>
            <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter leading-none">{t.govPostTitle}</h3>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-1 italic">{t.govPostSub.split(' all ')[0]} {jurisdiction}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">{t.formTitleLabel}</label>
            <input 
              className="w-full bg-muted border border-border rounded-2xl p-5 text-foreground font-medium focus:ring-2 focus:ring-vault-amber/50 outline-none transition-all placeholder:text-muted-foreground/40 shadow-inner"
              placeholder={lang === 'id' ? "Contoh: Regulasi Lingkungan Baru 2026" : "e.g. New Environmental Regulation 2026"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">{lang === 'id' ? 'Yurisdiksi Target' : 'Target Jurisdiction'}</label>
                <div className="w-full bg-muted border border-border rounded-2xl p-5 text-muted-foreground font-bold flex items-center gap-3">
                    <MapPin size={18} /> {jurisdiction}
                </div>
            </div>

            <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">{t.formCategoryLabel}</label>
                <select 
                    className="w-full bg-muted border border-border rounded-2xl p-5 text-foreground font-bold outline-none focus:ring-2 focus:ring-vault-amber/50 cursor-pointer appearance-none shadow-inner"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="UPDATE">{lang === 'id' ? 'Update Umum' : 'General Update'}</option>
                    <option value="KEBIJAKAN">{t.formCat1}</option>
                    <option value="PENGUMUMAN">{lang === 'id' ? 'Pengumuman' : 'Announcement'}</option>
                    <option value="HOT-TOPIC">{t.bulletinTrending}</option>
                </select>
            </div>
        </div>

        <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">{lang === 'id' ? 'Detail Konten' : 'Content Details'}</label>
            <textarea 
              rows={5}
              className="w-full bg-muted border border-border rounded-2xl p-5 text-foreground font-medium focus:ring-2 focus:ring-vault-amber/50 outline-none transition-all placeholder:text-muted-foreground/40 shadow-inner resize-none"
              placeholder={lang === 'id' ? 'Jelaskan detail pembaruan kebijakan...' : 'Describe the policy update in detail...'}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
        </div>

        <button 
            type="submit"
            disabled={isPending}
            className="w-full bg-vault-amber hover:bg-yellow-500 text-black font-black py-6 rounded-2xl transition-all disabled:opacity-50 flex justify-center items-center gap-3 shadow-xl shadow-vault-amber/10 active:scale-95 group/btn relative overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {isPending ? (
                    <motion.div key="pending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                        <Loader2 className="animate-spin" /> {lang === 'id' ? 'MENYIARKAN...' : 'PUBLISHING...'}
                    </motion.div>
                ) : isSuccess ? (
                    <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-green-900">
                        <CheckCircle2 /> {t.govPostSuccess}
                    </motion.div>
                ) : (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                        <Send size={20} /> {t.govPostBtn}
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
      </form>
    </div>
  );
}
