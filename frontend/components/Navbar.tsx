"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguageStore } from "../lib/store";
import { translations } from "../lib/translations";
import { ConnectButton } from "thirdweb/react";
import { 
  Home, 
  LayoutDashboard, 
  Globe, 
  User, 
  BookOpen,
  ShieldCheck,
  Settings
} from "lucide-react"; 
import { useRole } from "@/hooks/useRole";
import { baseSepolia } from \"thirdweb/chains\";

interface NavbarProps {
  client: any;
}

export default function Navbar({ client }: NavbarProps) {
  const pathname = usePathname();
  const { lang, setLang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];
  const { role, address } = useRole();

  // Helper Component untuk Link Menu
  const NavLink = ({ href, icon: Icon, label }: any) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
          isActive 
            ? 'bg-vault-amber text-black shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105' 
            : 'text-slate-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <Icon size={16} /> 
        <span className="hidden md:inline">{label}</span>
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-white/10 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img 
              src="/favicon.ico?v=2" 
              alt="DeliberateChain Logo" 
              className="w-full h-full object-contain rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            />
          </div>
          <h1 className="text-xl font-black tracking-tighter text-white uppercase flex items-center">
            DLIBRA<span className="text-vault-amber">TION</span>
            <span className="w-1.5 h-1.5 bg-vault-amber ml-1 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]"></span>
          </h1>
        </Link>

        {/* MENU TENGAH */}
        <div className="flex items-center bg-white/5 border border-white/5 rounded-full p-1.5 gap-1 overflow-x-auto max-w-full no-scrollbar shadow-inner">
            <NavLink href="/" icon={Home} label={t.navHome} />
            <NavLink href="/guide" icon={BookOpen} label={t.navGuide} />
            <NavLink href="/explore" icon={Globe} label={t.navGlobal} />
            
            {(role === "ADMIN" || role === "GOVERNMENT") && (
                <NavLink href="/government" icon={ShieldCheck} label="Government" />
            )}
            {role === "ADMIN" && (
                <NavLink href="/admin" icon={Settings} label="Admin" />
            )}
            
            <NavLink href="/dashboard" icon={LayoutDashboard} label={t.navDashboard} />
            {address && <NavLink href="/profile" icon={User} label={t.navProfile} />}
            
            {/* DROPDOWN ECOSYSTEM */}
            <div className="relative group/drop ml-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                    <span>Ecosystem</span>
                    <svg className="w-4 h-4 group-hover/drop:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 hidden group-hover/drop:block animate-in fade-in slide-in-from-top-2 shadow-2xl backdrop-blur-xl">
                    <Link href="/about" className="block px-4 py-3 text-xs text-slate-400 hover:text-vault-amber hover:bg-white/5 rounded-xl transition-all font-bold">Visi & Misi</Link>
                    <Link href="/security" className="block px-4 py-3 text-xs text-slate-400 hover:text-vault-amber hover:bg-white/5 rounded-xl transition-all font-bold">Keamanan Teknis</Link>
                    <Link href="/transparency" className="block px-4 py-3 text-xs text-slate-400 hover:text-vault-amber hover:bg-white/5 rounded-xl transition-all font-bold">Laporan Transparansi</Link>
                    <Link href="/community" className="block px-4 py-3 text-xs text-slate-400 hover:text-vault-amber hover:bg-white/5 rounded-xl transition-all font-bold">Komunitas DAO</Link>
                    <Link href="/partners" className="block px-4 py-3 text-xs text-slate-400 hover:text-vault-amber hover:bg-white/5 rounded-xl transition-all font-bold">Layanan Instansi</Link>
                    <Link href="/legal" className="block px-4 py-3 text-xs text-slate-400 hover:text-vault-amber hover:bg-white/5 rounded-xl transition-all font-bold">Legal & Privasi</Link>
                    <Link href="/contact" className="block px-4 py-3 text-xs text-slate-400 hover:text-vault-amber hover:bg-white/5 rounded-xl transition-all font-bold">Hubungi Kami</Link>
                </div>
            </div>
        </div>

        {/* KANAN */}
        <div className="flex items-center gap-3">
          <div className="flex bg-black border border-white/10 rounded-lg p-1">
            <button onClick={() => setLang('id')} className={`px-2 py-1 text-xs rounded font-bold transition-colors ${lang === 'id' ? 'bg-vault-amber text-black' : 'text-slate-500 hover:text-white'}`}>ID</button>
            <button onClick={() => setLang('en')} className={`px-2 py-1 text-xs rounded font-bold transition-colors ${lang === 'en' ? 'bg-vault-amber text-black' : 'text-slate-500 hover:text-white'}`}>EN</button>
          </div>
          <ConnectButton 
            client={client} 
            theme="dark" 
            accountAbstraction={{
              chain: baseSepolia,
              sponsorGas: true,
            }}
            connectButton={{ className: "!bg-white/10 !hover:bg-white/20 !border !border-white/10 !text-sm !font-bold !px-4 !py-2 !rounded-lg" }} 
          />
        </div>
      </div>
    </nav>
  );
}