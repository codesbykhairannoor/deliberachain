"use client";

import Link from "next/link";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { Github, Twitter, Send, Globe } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
        
        {/* BRAND */}
        <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
                <h1 className="text-2xl font-black tracking-tighter text-white uppercase">
                    DLIBRA<span className="text-vault-amber">TION</span>
                </h1>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
                Infrastruktur demokrasi digital berbasis blockchain dan kecerdasan buatan untuk masa depan birokrasi yang lebih transparan dan inklusif.
            </p>
            <div className="flex gap-4">
                <SocialIcon icon={Twitter} />
                <SocialIcon icon={Github} />
                <SocialIcon icon={Send} />
            </div>
        </div>

        {/* LINKS 1 */}
        <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
                <li><Link href="/explore" className="hover:text-vault-amber transition-colors">Discovery Room</Link></li>
                <li><Link href="/dashboard" className="hover:text-vault-amber transition-colors">Voice Out</Link></li>
                <li><Link href="/transparency" className="hover:text-vault-amber transition-colors">Transparency Report</Link></li>
                <li><Link href="/community" className="hover:text-vault-amber transition-colors">Community DAO</Link></li>
            </ul>
        </div>

        {/* LINKS 2 */}
        <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
                <li><Link href="/guide" className="hover:text-vault-amber transition-colors">User Guide</Link></li>
                <li><Link href="/security" className="hover:text-vault-amber transition-colors">Security Architecture</Link></li>
                <li><Link href="/about" className="hover:text-vault-amber transition-colors">Our Vision</Link></li>
                <li><Link href="/partners" className="hover:text-vault-amber transition-colors">Gov Partners</Link></li>
            </ul>
        </div>

        {/* LINKS 3 */}
        <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
                <li><Link href="/contact" className="hover:text-vault-amber transition-colors">Contact Us</Link></li>
                <li><Link href="/legal" className="hover:text-vault-amber transition-colors">Privacy Policy</Link></li>
                <li><Link href="/legal" className="hover:text-vault-amber transition-colors">Terms of Service</Link></li>
            </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs">
              &copy; 2026 Dlibration Protocol. Built on Base Sepolia.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
              <Globe size={14} />
              <span>Global Decentralized Network</span>
          </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: any) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-vault-amber hover:text-black transition-all">
            <Icon size={18} />
        </a>
    );
}
