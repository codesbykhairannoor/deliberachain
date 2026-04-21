"use client";

import { usePathname } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import Sidebar from "@/components/Sidebar";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/Navbar";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const account = useActiveAccount();
  
  // 1. Jika SUDAH LOGIN -> Gunakan Sidebar + Header
  if (account) {
    return (
      <div className="min-h-screen bg-[#050505] flex">
        <Sidebar />
        <div className="flex-1 ml-64 min-h-screen relative">
          <AppHeader />
          <main className="mt-20 p-8 min-h-[calc(100vh-80px)]">
            {children}
          </main>
        </div>
      </div>
    );
  }

  // 3. Jika BELUM LOGIN -> Gunakan Navbar Standar + Content
  return (
    <div className="min-h-screen bg-[#050505]">
       <Navbar client={client} />
       <main>{children}</main>
    </div>
  );
}
