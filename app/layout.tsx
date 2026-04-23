import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dlibration - Aspirasi & Transparansi Masa Depan",
  description: "Platform deliberasi publik berbasis blockchain dan AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </ThirdwebProvider>
      </body>
    </html>
  );
}