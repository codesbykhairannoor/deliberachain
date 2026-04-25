"use client";

import { usePathname, useRouter } from "next/navigation";
import { useActiveAccount } from "thirdweb/react";
import { useEffect, useState } from "react";
import { createThirdwebClient } from "thirdweb";
import Sidebar from "@/components/Sidebar";
import AppHeader from "@/components/AppHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Menu } from "lucide-react";
import { useRole } from "@/hooks/useRole";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const account = useActiveAccount();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Paths that should use the Dashboard/App layout
  const appPaths = [
    "/dashboard",
    "/profile",
    "/explore",
    "/admin",
    "/view",
    "/community",
    "/government"
  ];
  const { role, isLoading: roleLoading } = useRole();

  const isAppPath = appPaths.some(path => pathname === path || pathname.startsWith(path + "/"));

  // Redirect on Login
  useEffect(() => {
    if (account && !isAppPath && !roleLoading) {
      if (role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    }
  }, [account, isAppPath, role, roleLoading, router]);

  // 1. App Layout (Logged In + App Path)
  if (account && isAppPath) {
    return (
      <div className="min-h-screen bg-background flex text-foreground">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="flex-1 lg:ml-64 min-h-screen relative flex flex-col">
          <AppHeader onMenuClick={() => setSidebarOpen(true)} />
          

          <main className="mt-20 p-4 md:p-8 flex-1">
            <div className="max-w-[1600px] mx-auto">
                {children}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // 2. Marketing / Pre-login Layout
  return (
    <div className="min-h-screen bg-background text-foreground">
       <Navbar />
       <main className="min-h-screen">{children}</main>
       <Footer />
    </div>
  );
}
