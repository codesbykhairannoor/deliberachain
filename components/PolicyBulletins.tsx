"use client";

import { useEffect, useState } from "react";
import { getBulletins, Bulletin } from "@/lib/bulletinData";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Clock, MapPin, Tag, Sparkles, TrendingUp, AlertCircle } from "lucide-react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function PolicyBulletins() {
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  useEffect(() => {
    setBulletins(getBulletins());
  }, []);

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tighter flex items-center gap-3">
                <Sparkles className="text-vault-amber" /> {t.bulletinTitle}
            </h2>
            <p className="text-muted-foreground text-sm font-medium mt-2">{t.bulletinSub}</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl border border-border">
            <TrendingUp size={16} className="text-green-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t.bulletinTrending}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <AnimatePresence mode="popLayout">
          {bulletins.map((item, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.id}
              className="bg-background border border-border p-8 rounded-[2.5rem] shadow-xl hover:border-vault-amber/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 -z-10 group-hover:scale-110 transition-transform">
                  <FileText size={100} className="text-vault-amber" />
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                    item.category === 'HOT-TOPIC' 
                    ? 'bg-red-500/10 border-red-500/20 text-red-500' 
                    : 'bg-vault-amber/10 border-vault-amber/20 text-vault-amber'
                }`}>
                    {item.category}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                    <MapPin size={14} /> {item.jurisdiction}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                    <Clock size={14} /> {new Date(item.timestamp).toLocaleDateString()}
                </div>
              </div>

              <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter group-hover:text-vault-amber transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground font-medium leading-relaxed mb-8 italic opacity-80">
                {item.content}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center border border-border shadow-inner">
                        <Tag size={14} className="text-muted-foreground" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{item.author}</span>
                </div>
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-vault-amber hover:underline transition-all">
                    {t.bulletinReadMore} →
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {bulletins.length === 0 && (
          <div className="py-20 text-center border-2 border-dashed border-border rounded-[3rem]">
              <AlertCircle size={48} className="text-muted-foreground opacity-20 mx-auto mb-4" />
              <p className="text-muted-foreground font-black uppercase text-xs tracking-widest">{t.bulletinEmpty}</p>
          </div>
      )}
    </div>
  );
}
