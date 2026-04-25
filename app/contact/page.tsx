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
  Globe,
  Sparkles
} from "lucide-react";

export default function ContactPage() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background min-h-screen pt-48 pb-40 relative overflow-hidden text-foreground">
      <div className="bg-pattern-grid absolute inset-0 opacity-10 -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[800px] h-full bg-vault-amber/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. CONTACT HERO - Left Aligned Text */}
        <div className="max-w-4xl mb-40">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vault-amber/30 bg-vault-amber/5 text-vault-amber font-black text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm"
            >
                <Sparkles size={14} /> Get in Touch
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black tracking-[-0.05em] leading-[0.9] text-foreground mb-10 uppercase"
            >
              {t.contactHeroTitle} <br/> <span className="text-vault-amber">{t.contactHeroTitleGold}</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed italic opacity-80"
            >
              {t.contactSub}
            </motion.p>
        </div>

        {/* 2. CONTACT GRID - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-24">
            {/* Contact Information (Left) */}
            <div className="space-y-16">
                <div className="grid sm:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="p-12 bg-muted border border-border rounded-[3rem] group hover:border-vault-amber/30 transition-all shadow-inner">
                        <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-border group-hover:scale-110 transition-transform">
                            <Mail className="text-vault-amber" size={32} />
                        </div>
                        <h4 className="text-foreground font-black mb-3 tracking-tighter uppercase text-sm">{t.contactGeneralInquiry}</h4>
                        <p className="text-muted-foreground text-lg font-black break-all">hello@deliberatechain.com</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="p-12 bg-muted border border-border rounded-[3rem] group hover:border-blue-500/30 transition-all shadow-inner">
                        <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-border group-hover:scale-110 transition-transform">
                            <Phone className="text-blue-500" size={32} />
                        </div>
                        <h4 className="text-foreground font-black mb-3 tracking-tighter uppercase text-sm">{t.contactGovSupport}</h4>
                        <p className="text-muted-foreground text-lg font-black">+62 (21) 500-1234</p>
                    </motion.div>
                </div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-16 bg-muted border border-border rounded-[4rem] relative overflow-hidden group shadow-inner">
                    <div className="bg-pattern-diagonal absolute inset-0 opacity-5"></div>
                    <div className="w-20 h-20 bg-background rounded-3xl flex items-center justify-center mb-10 shadow-xl border border-border group-hover:scale-110 transition-transform">
                        <MapPin className="text-vault-amber" size={48} />
                    </div>
                    <h3 className="text-4xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">{t.contactOurBase}</h3>
                    <p className="text-muted-foreground mb-16 leading-relaxed text-2xl font-black uppercase tracking-tight italic opacity-70">
                        Digital Democracy Hub, 10th Floor <br/>
                        Sudirman Central Business District <br/>
                        Jakarta, Indonesia 12190
                    </p>
                    <div className="h-96 bg-background rounded-[3rem] border border-border flex items-center justify-center relative overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                            alt="Map Mockup" 
                            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-vault-amber rounded-[2rem] flex items-center justify-center text-black shadow-[0_0_60px_rgba(245,158,11,0.5)] animate-bounce border-4 border-white/20">
                                <MapPin size={48} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-background mt-10 bg-foreground px-10 py-3 rounded-full shadow-2xl">Base Hub Alpha</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Contact Form (Right) */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-muted border border-border rounded-[5rem] p-16 lg:p-24 relative overflow-hidden shadow-2xl"
            >
                <div className="absolute top-0 right-0 p-16 opacity-5 text-vault-amber -z-0">
                    <Send size={250} />
                </div>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-16 tracking-tighter uppercase leading-none">{t.contactSendMessage}</h2>
                    <form className="space-y-12">
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground ml-6 italic">{t.contactFullName}</label>
                            <input type="text" placeholder="Your Name" className="w-full bg-background border border-border p-8 rounded-[2rem] text-foreground focus:border-vault-amber outline-none transition-all font-black uppercase tracking-widest text-sm shadow-inner" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground ml-6 italic">{t.contactEmail}</label>
                            <input type="email" placeholder="email@example.com" className="w-full bg-background border border-border p-8 rounded-[2rem] text-foreground focus:border-vault-amber outline-none transition-all font-black uppercase tracking-widest text-sm shadow-inner" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground ml-6 italic">{t.contactSubject}</label>
                            <div className="relative">
                                <select className="w-full bg-background border border-border p-8 rounded-[2rem] text-foreground focus:border-vault-amber outline-none transition-all font-black uppercase tracking-widest text-sm shadow-inner appearance-none cursor-pointer">
                                    <option>General Inquiry</option>
                                    <option>Government Demo</option>
                                    <option>Technical Support</option>
                                    <option>Partnership</option>
                                </select>
                                <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                    <ArrowRight className="rotate-90" size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground ml-6 italic">{t.contactMessage}</label>
                            <textarea placeholder="Tell us how we can help..." rows={5} className="w-full bg-background border border-border p-8 rounded-[2rem] text-foreground focus:border-vault-amber outline-none transition-all font-black uppercase tracking-widest text-sm shadow-inner resize-none"></textarea>
                        </div>
                        <button className="w-full bg-vault-amber hover:bg-yellow-500 text-black py-10 rounded-[2.5rem] font-black text-2xl transition-all shadow-[0_30px_60px_rgba(245,158,11,0.2)] flex items-center justify-center gap-6 group overflow-hidden relative">
                            <span className="relative z-10">{t.contactSendBtn}</span> <ArrowRight size={32} className="relative z-10 group-hover:translate-x-3 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>

        {/* 3. FOOTER INFO - Icons Grid */}
        <div className="mt-48 pt-40 border-t border-border grid md:grid-cols-3 gap-16 text-center">
            <div className="group">
                <div className="w-20 h-20 bg-muted border border-border rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-inner group-hover:scale-110 transition-transform">
                    <Globe size={40} className="text-vault-amber" />
                </div>
                <h4 className="text-foreground font-black mb-4 uppercase tracking-[0.3em] text-sm">{t.contactGlobalReach}</h4>
                <p className="text-muted-foreground text-sm font-black uppercase tracking-widest opacity-60">100% Digital & Distributed</p>
            </div>
            <div className="group">
                <div className="w-20 h-20 bg-muted border border-border rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-inner group-hover:scale-110 transition-transform">
                    <ShieldCheck size={40} className="text-blue-500" />
                </div>
                <h4 className="text-foreground font-black mb-4 uppercase tracking-[0.3em] text-sm">Security First</h4>
                <p className="text-muted-foreground text-sm font-black uppercase tracking-widest opacity-60">End-to-End Encryption</p>
            </div>
            <div className="group">
                <div className="w-20 h-20 bg-muted border border-border rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-inner group-hover:scale-110 transition-transform">
                    <MessageSquare size={40} className="text-green-500" />
                </div>
                <h4 className="text-foreground font-black mb-4 uppercase tracking-[0.3em] text-sm">24/7 Support</h4>
                <p className="text-muted-foreground text-sm font-black uppercase tracking-widest opacity-60">AI + Human Intelligence</p>
            </div>
        </div>

      </div>
    </div>
  );
}
