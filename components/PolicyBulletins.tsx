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
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-10">
        <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vault-amber/10 border border-vault-amber/20 text-vault-amber text-[10px] font-black uppercase tracking-widest mb-2">
                <Sparkles size={12} /> Institutional Intelligence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none italic">
                {t.bulletinTitle.split(' & ')[0]}<br/>
                <span className="text-vault-amber">& {t.bulletinTitle.split(' & ')[1]}</span>
            </h2>
            <p className="text-muted-foreground font-medium italic opacity-70 max-w-xl">{t.bulletinSub}</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">{t.bulletinTrending}</span>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl border border-border shadow-inner">
                    <TrendingUp size={16} className="text-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">Live Network</span>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {bulletins.map((item, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              key={item.id}
              className="bg-muted/30 border border-border p-8 rounded-[3rem] shadow-xl hover:border-vault-amber/40 transition-all group relative overflow-hidden flex flex-col"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-vault-amber/5 rounded-full blur-3xl group-hover:bg-vault-amber/10 transition-colors"></div>
              
              <div className="flex items-start justify-between mb-8">
                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border shadow-sm ${
                    item.category === 'HOT-TOPIC' 
                    ? 'bg-red-500/10 border-red-500/30 text-red-500' 
                    : 'bg-vault-amber/10 border-vault-amber/30 text-vault-amber'
                }`}>
                    {item.category}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-60">
                    <Clock size={14} /> {new Date(item.timestamp).toLocaleDateString()}
                </div>
              </div>

              <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter leading-tight group-hover:text-vault-amber transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground font-medium leading-relaxed mb-10 italic opacity-80 text-sm line-clamp-3">
                {item.content}
              </p>

              <div className="mt-auto space-y-6">
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-2xl border border-border/50">
                    <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center border border-border shadow-inner">
                        <MapPin size={16} className="text-vault-amber" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Jurisdiction</span>
                        <span className="text-xs font-bold text-foreground uppercase tracking-tight">{item.jurisdiction}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background">
                            <Tag size={14} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{item.author}</span>
                    </div>
                    <button className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-vault-amber hover:text-black transition-all group/btn">
                        <Sparkles size={16} className="group-hover/btn:scale-125 transition-transform" />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {bulletins.length === 0 && (
          <div className="py-32 text-center border-2 border-dashed border-border/50 rounded-[4rem] bg-muted/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
              <div className="relative z-10">
                  <div className="w-20 h-20 bg-muted rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-border">
                    <AlertCircle size={40} className="text-muted-foreground opacity-30" />
                  </div>
                  <h4 className="text-2xl font-black text-foreground uppercase tracking-tighter mb-4 italic">No Active Intelligence</h4>
                  <p className="text-muted-foreground font-medium text-sm italic max-w-xs mx-auto opacity-70">
                    {t.bulletinEmpty} System is waiting for government broadcast signals.
                  </p>
              </div>
          </div>
      )}
    </div>
  );
}
