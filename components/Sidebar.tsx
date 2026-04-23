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
  History
} from "lucide-react";
import { useRole } from "@/hooks/useRole";

export default function Sidebar() {
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

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#050505] border-r border-white/5 flex flex-col z-50">
      {/* Brand Logo */}
      <div className="p-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-vault-amber rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]">
             <LayoutGrid size={18} className="text-black" />
          </div>
          <span className="text-lg font-black text-white tracking-tighter uppercase italic">Dlibra<span className="text-vault-amber">tion</span></span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar space-y-8">
        {/* ACTION: NEW POST (CTA) */}
        {role === "CITIZEN" && (
           <Link 
             href="/dashboard?tab=form"
             className={`flex items-center gap-3 px-4 py-4 rounded-2xl transition-all shadow-lg font-black uppercase text-xs tracking-widest ${
               activeTab === "form" && pathname === "/dashboard"
               ? "bg-vault-amber text-black scale-[1.02]" 
               : "bg-white/5 text-vault-amber border border-vault-amber/20 hover:bg-vault-amber/10"
             }`}
           >
              <PlusSquare size={18} />
              <span>Sampaikan Aspirasi</span>
           </Link>
        )}

        {/* SECTION: CIVIC HUB */}
        <div className="space-y-1">
           <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-2">Civic Hub</p>
           {civicHeroItems.map((item) => {
              const isActive = pathname === "/dashboard" && activeTab === item.tab;
              return (
                <Link 
                  key={item.tab} 
                  href={`/dashboard?tab=${item.tab}`}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all group ${
                    isActive 
                      ? "bg-white/5 border border-white/10 text-white" 
                      : "text-slate-500 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={isActive ? "text-vault-amber" : "text-slate-600"} />
                    <span className="text-sm font-bold">{item.name}</span>
                  </div>
                </Link>
              );
           })}
        </div>

        {/* SECTION: GENERAL */}
        <div className="space-y-1">
           <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-2">General</p>
           {mainItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all group ${
                    isActive 
                      ? "bg-white/5 border border-white/10 text-white" 
                      : "text-slate-500 hover:text-white hover:bg-white/5"
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

        {/* SECTION: AUTHORITY */}
        {(role === "ADMIN" || role === "GOVERNMENT") && (
           <div className="space-y-1">
              <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-2">Authority</p>
              {authItems.map((item) => {
                 const isActive = pathname === item.href;
                 return (
                   <Link 
                     key={item.href} 
                     href={item.href}
                     className={`flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all group ${
                       isActive 
                         ? "bg-red-500/10 border border-red-500/20 text-red-500" 
                         : "text-slate-500 hover:text-white hover:bg-white/5"
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
      <div className="p-6 border-t border-white/5 mt-auto">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
           <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Authenticated As</p>
           <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white tracking-wide">{role}</span>
              <ShieldCheck size={14} className={role === "ADMIN" ? "text-red-500" : role === "GOVERNMENT" ? "text-vault-amber" : "text-blue-500"} />
           </div>
        </div>
      </div>
    </aside>
  );
}
