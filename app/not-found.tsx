"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 text-center overflow-hidden relative">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vault-amber/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-xl relative z-10">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-12 text-vault-amber shadow-2xl"
        >
            <Search size={40} />
        </motion.div>
        
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
        >
            404
        </motion.h1>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 mb-12 font-medium leading-relaxed"
        >
            Sepertinya aspirasi Anda tersesat di luar jaringan blockchain kami. Halaman yang Anda cari tidak ditemukan.
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <Link href="/" className="inline-flex items-center gap-3 bg-vault-amber text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all shadow-[0_20px_40px_rgba(245,158,11,0.2)]">
                <ArrowLeft size={22} /> Kembali ke Beranda
            </Link>
        </motion.div>
      </div>
    </div>
  );
}
