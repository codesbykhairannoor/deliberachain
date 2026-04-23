"use client";

import { usePathname, useRouter } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";
import { useEffect, useState } from "react";
import { createThirdwebClient } from "thirdweb";
import Sidebar from "@/components/Sidebar";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const account = useActiveAccount();
  const router = useRouter();

  // Redirect & State Persistence Logic
  useEffect(() => {
    if (account) {
      // Simpan status di cache browser agar saat refresh tidak "kedip"
      localStorage.setItem("delib_login_status", "true");
      
      if (pathname === "/") {
        router.push("/dashboard");
      }
    } else {
      // Jika logout, hapus cache-nya
      localStorage.removeItem("delib_login_status");
    }
  }, [account, pathname, router]);

  // Cek apakah sebelumnya pernah login (untuk UX yang lebih mulus)
  const [hasPreviousSession, setHasPreviousSession] = useState(false);
  useEffect(() => {
    const status = localStorage.getItem("delib_login_status");
    if (status === "true") setHasPreviousSession(true);
  }, []);
  
  // 1. Jika SEDANG LOADING (Pernah login tapi data wallet belum dapet)
  // Menghindari Landing Page muncul sekilas saat refresh
  if (!account && hasPreviousSession && pathname === "/") {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-vault-amber animate-pulse">
                <div className="w-12 h-12 border-4 border-vault-amber/30 border-t-vault-amber rounded-full animate-spin"></div>
                <p className="text-xs font-black uppercase tracking-widest">Reconnecting Session...</p>
            </div>
        </div>
    );
  }

  // 2. Logged in ...
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

  // 3. Landing experience
  return (
    <div className="min-h-screen bg-[#050505]">
       <Navbar client={client} />
       <main>{children}</main>
       <Footer />
    </div>
  );
}
