import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeliberateChain - Aspirasi & Transparansi Masa Depan",
  description: "Platform deliberasi demokrasi berbasis AI + Blockchain yang transparan dan inklusif.",
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