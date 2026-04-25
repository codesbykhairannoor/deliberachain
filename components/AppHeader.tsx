"use client";

import { useLanguageStore } from "../lib/store";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { Search, Bell, Sparkles } from "lucide-react";
import ClientOnly from "./ClientOnly";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

export default function AppHeader() {
  const { lang, setLang } = useLanguageStore();

  return (
    <header className="fixed top-0 right-0 left-64 h-20 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 z-40 flex items-center justify-between px-10">
      
      {/* Search Bar */}
      <div className="relative w-96 flex items-center">
         <Search className="absolute left-4 text-muted-foreground" size={18} />
         <input 
            type="text"
            placeholder="Cari aspirasi atau kebijakan..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm text-foreground focus:outline-none focus:border-vault-amber/50 transition-all"
         />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Language Switcher */}
        <div className="flex bg-black border border-white/10 rounded-lg p-1">
            <button 
                onClick={() => setLang('id')} 
                className={`px-3 py-1 text-xs rounded-md font-bold transition-all ${lang === 'id' ? 'bg-vault-amber text-black' : 'text-muted-foreground hover:text-foreground'}`}
            >
                ID
            </button>
            <button 
                onClick={() => setLang('en')} 
                className={`px-3 py-1 text-xs rounded-md font-bold transition-all ${lang === 'en' ? 'bg-vault-amber text-black' : 'text-muted-foreground hover:text-foreground'}`}
            >
                EN
            </button>
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse border-2 border-black"></span>
        </button>

        {/* Wallet Connector */}
        <ClientOnly>
            <ConnectButton 
                client={client} 
                theme="dark"
                accountAbstraction={{
                    chain: baseSepolia,
                    sponsorGas: true,
                }}
                connectButton={{
                    className: "!bg-vault-amber !text-black !font-bold !px-6 !py-2.5 !rounded-xl !text-sm !shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:!shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all"
                }}
            />
        </ClientOnly>
      </div>

    </header>
  );
}
