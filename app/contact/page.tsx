"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Globe
} from "lucide-react";

export default function ContactPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[800px] h-full bg-vault-amber/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. CONTACT HERO - Left Aligned Text */}
        <div className="max-w-4xl mb-32">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8"
            >
                Get in Touch
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-foreground mb-8"
            >
              {t.contactHeroTitle} <br/> <span className="text-vault-amber">{t.contactHeroTitleGold}</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-80 leading-relaxed"
            >
              {t.contactSub}
            </motion.p>
        </div>

        {/* 2. CONTACT GRID - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information (Left) */}
            <div className="space-y-12">
                <div className="grid sm:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem] group hover:bg-white/5 transition-all">
                        <Mail className="text-vault-amber mb-6 group-hover:scale-110 transition-transform" size={32} />
                        <h4 className="text-foreground font-black mb-2 tracking-tight">{t.contactGeneralInquiry}</h4>
                        <p className="text-muted-foreground text-sm font-bold">hello@deliberatechain.com</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem] group hover:bg-white/5 transition-all">
                        <Phone className="text-vault-amber mb-6 group-hover:scale-110 transition-transform" size={32} />
                        <h4 className="text-foreground font-black mb-2 tracking-tight">{t.contactGovSupport}</h4>
                        <p className="text-muted-foreground text-sm font-bold">+62 (21) 500-1234</p>
                    </motion.div>
                </div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-12 bg-white/2 border border-white/5 rounded-[3.5rem] relative overflow-hidden group">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                    <MapPin className="text-vault-amber mb-8 group-hover:scale-110 transition-transform" size={48} />
                    <h3 className="text-3xl font-black text-foreground mb-6 tracking-tighter">{t.contactOurBase}</h3>
                    <p className="text-muted-foreground mb-12 leading-relaxed text-lg font-medium">
                        Digital Democracy Hub, 10th Floor <br/>
                        Sudirman Central Business District <br/>
                        Jakarta, Indonesia 12190
                    </p>
                    <div className="h-72 bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                            alt="Map Mockup" 
                            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-vault-amber rounded-full flex items-center justify-center text-black shadow-[0_0_40px_rgba(245,158,11,0.5)] animate-bounce">
                                <MapPin size={32} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground mt-6 bg-black/80 px-6 py-2 rounded-full border border-white/10">Base Hub</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Contact Form (Right) */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-vault-card border border-white/10 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl"
            >
                <div className="absolute top-0 right-0 p-12 opacity-5 text-vault-amber">
                    <Send size={150} />
                </div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-black text-foreground mb-12 tracking-tighter">{t.contactSendMessage}</h2>
                    <form className="space-y-10">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-4">{t.contactFullName}</label>
                            <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl text-foreground focus:border-vault-amber outline-none transition-all font-bold" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-4">{t.contactEmail}</label>
                            <input type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl text-foreground focus:border-vault-amber outline-none transition-all font-bold" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-4">{t.contactSubject}</label>
                            <select className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl text-foreground focus:border-vault-amber outline-none transition-all font-bold appearance-none">
                                <option>General Inquiry</option>
                                <option>Government Demo</option>
                                <option>Technical Support</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-4">{t.contactMessage}</label>
                            <textarea placeholder="Tell us how we can help..." rows={4} className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl text-foreground focus:border-vault-amber outline-none transition-all font-bold resize-none"></textarea>
                        </div>
                        <button className="w-full bg-vault-amber hover:bg-yellow-500 text-black py-6 rounded-2xl font-black text-xl transition-all shadow-[0_20px_40px_rgba(245,158,11,0.2)] flex items-center justify-center gap-4 group">
                            {t.contactSendBtn} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>

        {/* 3. FOOTER INFO - Icons Grid */}
        <div className="mt-48 pt-32 border-t border-white/5 grid md:grid-cols-3 gap-12 text-center">
            <div>
                <Globe size={40} className="mx-auto text-vault-amber mb-6" />
                <h4 className="text-foreground font-black mb-2 uppercase tracking-widest text-sm">{t.contactGlobalReach}</h4>
                <p className="text-muted-foreground text-sm font-medium">100% Digital & Distributed</p>
            </div>
            <div>
                <ShieldCheck size={40} className="mx-auto text-vault-amber mb-6" />
                <h4 className="text-foreground font-black mb-2 uppercase tracking-widest text-sm">Security First</h4>
                <p className="text-muted-foreground text-sm font-medium">End-to-End Encryption</p>
            </div>
            <div>
                <MessageSquare size={40} className="mx-auto text-vault-amber mb-6" />
                <h4 className="text-foreground font-black mb-2 uppercase tracking-widest text-sm">24/7 Support</h4>
                <p className="text-muted-foreground text-sm font-medium">Fast Human Response</p>
            </div>
        </div>

      </div>
    </div>
  );
}
