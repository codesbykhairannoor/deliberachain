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
  X,
  Megaphone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useRole } from "@/hooks/useRole";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export default function Sidebar({ isOpen, onClose, isCollapsed, onToggleCollapse }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "discovery";
  const { role } = useRole();
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  const mainItems = [
    { name: t.navProfile, href: "/profile", icon: User, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: t.navGlobal, href: "/explore", icon: Globe, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: t.navGuide, href: "/dashboard?tab=guide", icon: BookOpen, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
  ];

  const civicHeroItems = [
    { name: t.navPublicFeed, tab: "discovery", icon: Globe, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: t.navMyActivity, tab: "feed", icon: History, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: t.navDebateHub, tab: "room", icon: Flame, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: t.navCivicReports, tab: "kritik", icon: AlertCircle, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: t.navPolicyUpdates, tab: "updates", icon: Megaphone, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
  ];

  const authItems = [
    { name: t.navGovAnalytics, href: "/government", icon: ShieldCheck, roles: ["ADMIN", "GOVERNMENT"] },
    { name: t.navSystemAdmin, href: "/admin", icon: Settings, roles: ["ADMIN"] },
  ];

  const sidebarContent = (
    <div className={`h-full bg-background border-r border-border flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      {/* Brand Logo */}
      <div className={`p-6 flex items-center ${isCollapsed ? "justify-center" : "justify-between"} mb-4`}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-vault-amber rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:rotate-12 transition-transform shrink-0">
             <LayoutGrid size={18} className="text-black" />
          </div>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg font-black text-foreground tracking-tighter"
            >
              Dlibration<span className="text-vault-amber">.</span>
            </motion.span>
          )}
        </Link>
        {onClose && (
          <button onClick={onClose} className="lg:hidden text-muted-foreground hover:text-foreground">
            <X size={20} />
          </button>
        )}
      </div>

      <div className={`flex-1 overflow-y-auto ${isCollapsed ? "px-2" : "px-4"} custom-scrollbar space-y-8`}>
        {/* ACTION: NEW POST (CTA) */}
        {role === "CITIZEN" && (
           <Link 
             href="/dashboard?tab=form"
             onClick={onClose}
             title={t.uploadTitle}
             className={`flex items-center gap-3 rounded-2xl transition-all shadow-lg font-black uppercase text-[10px] tracking-widest ${
               isCollapsed ? "p-4 justify-center" : "px-5 py-4"
             } ${
               activeTab === "form" && pathname === "/dashboard"
               ? "bg-vault-amber text-black scale-[1.02]" 
               : "bg-muted text-vault-amber border border-vault-amber/20 hover:bg-vault-amber/10"
             }`}
           >
              <PlusSquare size={18} />
              {!isCollapsed && <span>{t.uploadTitle}</span>}
           </Link>
        )}

        {/* SECTION: CIVIC HUB */}
        <div className="space-y-1">
           {!isCollapsed && <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">{lang === 'id' ? 'Pusat Warga' : 'Civic Hub'}</p>}
           {civicHeroItems.map((item) => {
              const isActive = pathname === "/dashboard" && activeTab === item.tab;
              return (
                <Link 
                  key={item.tab} 
                  href={`/dashboard?tab=${item.tab}`}
                  onClick={onClose}
                  title={item.name}
                  className={`flex items-center justify-between rounded-2xl transition-all group ${
                    isCollapsed ? "p-4 justify-center" : "px-4 py-3"
                  } ${
                    isActive 
                      ? "bg-muted border border-border text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={isActive ? "text-vault-amber" : "text-muted-foreground group-hover:text-vault-amber transition-colors"} />
                    {!isCollapsed && <span className="text-sm font-bold">{item.name}</span>}
                  </div>
                </Link>
              );
           })}
        </div>

        {/* SECTION: GENERAL */}
        <div className="space-y-1">
           {!isCollapsed && <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">{lang === 'id' ? 'Umum' : 'General'}</p>}
           {mainItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={onClose}
                  title={item.name}
                  className={`flex items-center justify-between rounded-2xl transition-all group ${
                    isCollapsed ? "p-4 justify-center" : "px-4 py-2.5"
                  } ${
                    isActive 
                      ? "bg-muted border border-border text-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className="group-hover:text-vault-amber transition-colors" />
                    {!isCollapsed && <span className="text-sm font-bold">{item.name}</span>}
                  </div>
                </Link>
              );
           })}
        </div>

        {/* SECTION: AUTHORITY */}
        {(role === "ADMIN" || role === "GOVERNMENT") && (
           <div className="space-y-1">
              {!isCollapsed && <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">{lang === 'id' ? 'Otoritas' : 'Authority'}</p>}
              {authItems.map((item) => {
                 const isActive = pathname === item.href;
                 return (
                   <Link 
                     key={item.href} 
                     href={item.href}
                     onClick={onClose}
                     title={item.name}
                     className={`flex items-center justify-between rounded-2xl transition-all group ${
                       isCollapsed ? "p-4 justify-center" : "px-4 py-2.5"
                     } ${
                       isActive 
                         ? "bg-red-500/10 border border-red-500/20 text-red-500" 
                         : "text-muted-foreground hover:text-foreground hover:bg-muted"
                     }`}
                   >
                     <div className="flex items-center gap-3">
                       <item.icon size={18} />
                       {!isCollapsed && <span className="text-sm font-bold">{item.name}</span>}
                     </div>
                   </Link>
                 );
              })}
           </div>
        )}
      </div>

      {/* Collapse Toggle (Desktop only) */}
      <div className="hidden lg:flex p-4 border-t border-border">
          <button 
            onClick={onToggleCollapse}
            className="w-full py-2 flex items-center justify-center rounded-xl bg-muted border border-border text-muted-foreground hover:text-vault-amber transition-all"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
      </div>

      {/* Role Badge Footer */}
      <div className={`${isCollapsed ? "p-2" : "p-6"} border-t border-border`}>
        <div className={`bg-muted rounded-2xl border border-border ${isCollapsed ? "p-2 flex justify-center" : "p-4"}`}>
           {!isCollapsed && <p className="text-[10px] text-muted-foreground uppercase font-black mb-1">{t.navAuthenticatedAs}</p>}
           <div className="flex items-center justify-between w-full">
              {!isCollapsed && <span className="text-xs font-bold text-foreground tracking-wide">{role}</span>}
              <ShieldCheck size={14} className={role === "ADMIN" ? "text-red-500" : role === "GOVERNMENT" ? "text-vault-amber" : "text-blue-500"} />
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex fixed left-0 top-0 h-screen z-50 transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
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
