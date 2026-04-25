"use client";

import { getRank } from "@/lib/gamification";
import { Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface CivicBadgeProps {
  score: number;
}

export default function CivicBadge({ score }: CivicBadgeProps) {
  const rank = getRank(score);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 bg-vault-card border border-white/5 rounded-3xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
          <Award size={100} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{rank.icon}</span>
            <div>
                <h4 className="text-xs font-black text-muted-foreground uppercase tracking-widest leading-none">Civic Rank</h4>
                <p className={`text-xl font-black uppercase tracking-tighter ${
                  rank.name === 'Deliberator' ? 'text-vault-amber' : 
                  rank.name === 'Digital Patriot' ? 'text-blue-400' :
                  rank.name === 'Democracy Keeper' ? 'text-purple-400' : 'text-muted-foreground'
                }`}>{rank.name}</p>
            </div>
        </div>

        <div className="space-y-4">
            <div className="flex justify-between items-end">
                <div className="flex items-center gap-1.5">
                    <Zap size={16} className="text-vault-amber" />
                    <span className="text-2xl font-black text-foreground">{score}</span>
                    <span className="text-xs text-muted-foreground font-bold uppercase ml-1">Credits</span>
                </div>
                <div className="text-[10px] font-bold text-muted-foreground">
                    {score}/1000 XP
                </div>
            </div>

            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(score / 1000) * 100}%` }}
                    className="h-full bg-gradient-to-r from-vault-amber to-yellow-600 rounded-full"
                />
            </div>
            
            <p className="text-[10px] text-muted-foreground italic">
                *Raih lebih banyak partisipasi untuk membuka lencana Demokrasi berikutnya.
            </p>
        </div>
      </div>
    </motion.div>
  );
}
