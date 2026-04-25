"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { 
  Globe, 
  User, 
  Settings, 
  ShieldCheck, 
  BookOpen, 
  LayoutGrid,
  PlusSquare,
  Flame,
  AlertCircle,
  History,
  X
} from "lucide-react";
import { useRole } from "@/hooks/useRole";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "discovery";
  const { role } = useRole();

  const mainItems = [
    { name: "Profil Saya", href: "/profile", icon: User, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "Explore Room", href: "/explore", icon: Globe, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "Panduan", href: "/guide", icon: BookOpen, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
  ];

  const civicHeroItems = [
    { name: "Discovery", tab: "discovery", icon: Globe, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "My Feed", tab: "feed", icon: History, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "Deliberation", tab: "room", icon: Flame, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "Criticism", tab: "kritik", icon: AlertCircle, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
  ];

  const authItems = [
    { name: "Gov Analytics", href: "/government", icon: ShieldCheck, roles: ["ADMIN", "GOVERNMENT"] },
    { name: "System Admin", href: "/admin", icon: Settings, roles: ["ADMIN"] },
  ];

  const sidebarContent = (
    <div className="h-full bg-background border-r border-border flex flex-col w-64 lg:w-64">
      {/* Brand Logo */}
      <div className="p-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-vault-amber rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:rotate-12 transition-transform">
             <LayoutGrid size={18} className="text-black" />
          </div>
          <span className="text-lg font-black text-foreground tracking-tighter">Dlibration<span className="text-vault-amber">.</span></span>
        </Link>
        {onClose && (
          <button onClick={onClose} className="lg:hidden text-muted-foreground hover:text-foreground">
            <X size={20} />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar space-y-8">
        {/* ACTION: NEW POST (CTA) */}
        {role === "CITIZEN" && (
           <Link 
             href="/dashboard?tab=form"
             onClick={onClose}
             className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all shadow-lg font-black uppercase text-[10px] tracking-widest ${
               activeTab === "form" && pathname === "/dashboard"
               ? "bg-vault-amber text-black scale-[1.02]" 
               : "bg-muted text-vault-amber border border-vault-amber/20 hover:bg-vault-amber/10"
             }`}
           >
              <PlusSquare size={18} />
              <span>Sampaikan Aspirasi</span>
           </Link>
        )}

        {/* SECTION: CIVIC HUB */}
        <div className="space-y-1">
           <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Civic Hub</p>
           {civicHeroItems.map((item) => {
              const isActive = pathname === "/dashboard" && activeTab === item.tab;
              return (
                <Link 
                  key={item.tab} 
                  href={`/dashboard?tab=${item.tab}`}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all group ${
                    isActive 
                      ? "bg-muted border border-border text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={isActive ? "text-vault-amber" : "text-muted-foreground group-hover:text-vault-amber transition-colors"} />
                    <span className="text-sm font-bold">{item.name}</span>
                  </div>
                </Link>
              );
           })}
        </div>

        {/* SECTION: GENERAL */}
        <div className="space-y-1">
           <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">General</p>
           {mainItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all group ${
                    isActive 
                      ? "bg-muted border border-border text-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className="group-hover:text-vault-amber transition-colors" />
                    <span className="text-sm font-bold">{item.name}</span>
                  </div>
                </Link>
              );
           })}
        </div>

        {/* SECTION: AUTHORITY */}
        {(role === "ADMIN" || role === "GOVERNMENT") && (
           <div className="space-y-1">
              <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Authority</p>
              {authItems.map((item) => {
                 const isActive = pathname === item.href;
                 return (
                   <Link 
                     key={item.href} 
                     href={item.href}
                     onClick={onClose}
                     className={`flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all group ${
                       isActive 
                         ? "bg-red-500/10 border border-red-500/20 text-red-500" 
                         : "text-muted-foreground hover:text-foreground hover:bg-muted"
                     }`}
                   >
                     <div className="flex items-center gap-3">
                       <item.icon size={18} />
                       <span className="text-sm font-bold">{item.name}</span>
                     </div>
                   </Link>
                 );
              })}
           </div>
        )}
      </div>

      {/* Role Badge Footer */}
      <div className="p-6 border-t border-border mt-auto">
        <div className="bg-muted p-4 rounded-2xl border border-border">
           <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">Authenticated As</p>
           <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground tracking-wide">{role}</span>
              <ShieldCheck size={14} className={role === "ADMIN" ? "text-red-500" : role === "GOVERNMENT" ? "text-vault-amber" : "text-blue-500"} />
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 z-50">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-[100]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 h-full shadow-2xl"
            >
              {sidebarContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
