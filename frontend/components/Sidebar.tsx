"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Globe, 
  User, 
  Settings, 
  ShieldCheck, 
  BookOpen, 
  LogOut,
  ChevronRight,
  TrendingUp,
  LayoutGrid
} from "lucide-react";
import { useRole } from "@/hooks/useRole";
import { motion } from "framer-motion";

export default function Sidebar() {
  const pathname = usePathname();
  const { role } = useRole();

  const menuItems = [
    { name: "Feed Aspirasi", href: "/dashboard", icon: LayoutDashboard, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "Explore Room", href: "/explore", icon: Globe, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "Profil Saya", href: "/profile", icon: User, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "Panduan", href: "/guide", icon: BookOpen, roles: ["CITIZEN", "ADMIN", "GOVERNMENT"] },
    { name: "Gov Analytics", href: "/government", icon: ShieldCheck, roles: ["ADMIN", "GOVERNMENT"] },
    { name: "System Admin", href: "/admin", icon: Settings, roles: ["ADMIN"] },
  ];

  const filteredItems = menuItems.filter(item => item.roles.includes(role));

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#050505] border-r border-white/5 flex flex-col z-50">
      {/* Brand Logo */}
      <div className="p-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-vault-amber rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]">
             <LayoutGrid size={18} className="text-black" />
          </div>
          <span className="text-lg font-black text-white tracking-tighter uppercase italic">Delib<span className="text-vault-amber">Chain</span></span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 space-y-2">
        {filteredItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all group ${
                isActive 
                  ? "bg-vault-amber/10 border border-vault-amber/20 text-vault-amber" 
                  : "text-slate-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span className="text-sm font-bold">{item.name}</span>
              </div>
              {isActive && (
                <motion.div layoutId="sidebar-active" className="w-1.5 h-1.5 rounded-full bg-vault-amber shadow-[0_0_10px_rgba(245,158,11,1)]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Role Badge Footer */}
      <div className="p-6 border-t border-white/5 mt-auto">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
           <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Access Level</p>
           <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white tracking-wide">{role}</span>
              <ShieldCheck size={14} className={role === "ADMIN" ? "text-red-500" : role === "GOVERNMENT" ? "text-vault-amber" : "text-blue-500"} />
           </div>
        </div>
      </div>
    </aside>
  );
}
