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

  // Paths that should use the Dashboard/App layout
  const appPaths = [
    "/dashboard",
    "/profile",
    "/explore",
    "/admin",
    "/view",
    "/community", // If community is internal
  ];

  const isAppPath = appPaths.some(path => pathname === path || pathname.startsWith(path + "/"));

  // 1. App Layout (Logged In + App Path)
  if (account && isAppPath) {
    return (
      <div className="min-h-screen bg-background flex">
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

  // 2. Marketing / Pre-login Layout
  return (
    <div className="min-h-screen bg-background">
       <Navbar />
       <main className="min-h-screen">{children}</main>
       <Footer />
    </div>
  );
}
