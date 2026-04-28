"use client";

import { useLanguageStore } from "../lib/store";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { Search, Bell, Sparkles, Menu } from "lucide-react";
import ClientOnly from "./ClientOnly";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

export default function AppHeader({ onMenuClick, isSidebarCollapsed }: { onMenuClick?: () => void, isSidebarCollapsed?: boolean }) {
  const { lang, setLang } = useLanguageStore();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`fixed top-0 right-0 left-0 transition-all duration-300 ${isSidebarCollapsed ? "lg:left-20" : "lg:left-64"} h-20 bg-background/80 backdrop-blur-md border-b border-border z-40 flex items-center justify-between px-6 lg:px-10`}>
      
      {/* Mobile Menu Trigger */}
      <div className="flex lg:hidden items-center gap-4">
         <button 
           onClick={onMenuClick}
           className="w-10 h-10 bg-vault-amber rounded-lg flex items-center justify-center text-black shadow-lg shadow-vault-amber/20"
         >
            <Menu size={20} />
         </button>
      </div>

      {/* Search Bar - Hidden on small mobile */}
      <div className="relative w-48 md:w-96 hidden sm:flex items-center">
         <Search className="absolute left-4 text-muted-foreground" size={18} />
         <input 
            type="text"
            placeholder={lang === 'id' ? "Cari aspirasi..." : "Search aspirations..."}
            className="w-full bg-muted border border-border rounded-xl py-2.5 pl-12 pr-4 text-sm text-foreground focus:outline-none focus:border-vault-amber/50 transition-all"
         />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 lg:gap-6">
        {/* Theme Toggle */}
        <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted border border-border text-foreground hover:text-vault-amber transition-all"
        >
            {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
        </button>

        {/* Language Switcher */}
        <div className="flex bg-muted border border-border rounded-lg p-1">
            <button 
                onClick={() => setLang('id')} 
                className={`px-3 py-1 text-[10px] md:text-xs rounded-md font-black transition-all ${lang === 'id' ? 'bg-vault-amber text-black' : 'text-muted-foreground hover:text-foreground'}`}
            >
                ID
            </button>
            <button 
                onClick={() => setLang('en')} 
                className={`px-3 py-1 text-[10px] md:text-xs rounded-md font-black transition-all ${lang === 'en' ? 'bg-vault-amber text-black' : 'text-muted-foreground hover:text-foreground'}`}
            >
                EN
            </button>
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse border-2 border-background"></span>
        </button>

        {/* Wallet Connector */}
        <div className="scale-90 md:scale-100 origin-right">
            <ClientOnly>
                <ConnectButton 
                    client={client} 
                    theme={theme === "dark" ? "dark" : "light"}
                    accountAbstraction={{
                        chain: baseSepolia,
                        sponsorGas: true,
                    }}
                    connectButton={{
                        className: "!bg-vault-amber !text-black !font-black !px-4 md:!px-6 !py-2 !md:py-2.5 !rounded-xl !text-xs md:!text-sm !shadow-lg transition-all"
                    }}
                />
            </ClientOnly>
        </div>
      </div>

    </header>
  );
}
