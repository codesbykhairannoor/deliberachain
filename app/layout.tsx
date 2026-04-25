import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const pjs = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Dlibration - Transparent Democracy & Immutable Governance",
  description: "Advanced AI + Blockchain platform for public deliberation and secure governance.",
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pjs.className} selection:bg-vault-amber/30 selection:text-vault-amber`}>
        <ThirdwebProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
          </ThemeProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
