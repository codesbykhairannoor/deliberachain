"use client";

import { createThirdwebClient, getContract } from "thirdweb";
import { useActiveAccount, ConnectButton, useReadContract } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { useState, useMemo, Suspense } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import ClientOnly from "@/components/ClientOnly";
import { 
  MessageSquare, 
  Flame, 
  AlertCircle, 
  History,
  Sparkles,
  LayoutGrid,
  Trophy,
  Target,
  Zap,
  ArrowRight,
  Shield,
  TrendingUp,
  Activity
} from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";
import UploadForm from "@/components/UploadForm"; 
import Gallery from "@/components/Gallery";
import DeliberationRoom from "@/components/DeliberationRoom";
import CriticismSection from "@/components/CriticismSection";
import { PUBLIC_ARCHIVE_ADDRESS } from "@/lib/access";
import CivicBadge from "@/components/CivicBadge";
import { calculateCivicScore } from "@/lib/gamification";
import { useTheme } from "next-themes";
import AccessRestricted from "@/components/AccessRestricted";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });
const contract = getContract({ client, chain: baseSepolia, address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "" });

export default function DashboardPage() {
  const { lang } = useLanguageStore();
  
  // PARTIAL LANG: Local translations for the dashboard
  const dashboardT = {
    id: {
        loading: "Menginisialisasi sesi patriot digital...",
        portalTitle: "Portal Patriot",
        discoveryTitle: "Public Feed",
        feedTitle: "Aktivitas Saya",
        roomTitle: "Debate Hub",
        kritikTitle: "Civic Reports",
        formTitle: "Suara Rakyat",
        globalFeed: "Global Public Feed",
        impactScore: "Skor Dampak",
        civicLevel: "Level Civic",
        missionsCompleted: "Misi Selesai",
        civicPower: "Kekuatan Civic Real-time",
        uploadSub: "Sampaikan aspirasimu langsung ke Ledger Blockchain.",
        statsHeader: "Metrik Kontribusi",
        emptyAspiration: "Belum ada aspirasi yang tercatat.",
        readyToLead: "Siap memimpin perubahan?",
    },
    en: {
        loading: "Initializing secure citizen session...",
        portalTitle: "Citizen Portal",
        discoveryTitle: "Public Feed",
        feedTitle: "My Activity",
        roomTitle: "Debate Hub",
        kritikTitle: "Civic Reports",
        formTitle: "Voice of the People",
        globalFeed: "Global Public Feed",
        impactScore: "Impact Score",
        civicLevel: "Civic Level",
        missionsCompleted: "Missions Completed",
        civicPower: "Real-time Civic Power",
        uploadSub: "Speak your aspiration directly to the Blockchain Ledger.",
        statsHeader: "Contribution Metrics",
        emptyAspiration: "No aspirations recorded yet.",
        readyToLead: "Ready to lead the change?",
    }
  };

  const dt = dashboardT[lang as keyof typeof dashboardT];

  return (
    <Suspense fallback={
      <div className="p-20 text-foreground flex flex-col items-center animate-in fade-in">
        <Activity size={48} className="text-vault-amber mb-4 animate-pulse" />
        <p className="text-muted-foreground font-mono italic">{dt.loading}</p>
      </div>
    }>
      <DashboardContent dt={dt} />
    </Suspense>
  );
}

function DashboardContent({ dt }: { dt: any }) {
  const account = useActiveAccount();
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("tab") || "discovery";
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const { theme } = useTheme();
  
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  // REAL-TIME DATA FETCHING FOR STATS
  const { data: myAssets } = useReadContract({
    contract,
    method: "function getUserAssets(address _user) view returns ((string cid, string title, string assetType, uint256 timestamp, address owner)[])",
    params: [account?.address || ""],
  });

  const stats = useMemo(() => {
    const count = myAssets?.length || 0;
    let level = "Bronze";
    let color = "text-amber-700";
    
    if (count > 15) {
        level = "Platinum";
        color = "text-cyan-500";
    } else if (count > 10) {
        level = "Gold";
        color = "text-vault-amber";
    } else if (count > 5) {
        level = "Silver";
        color = "text-slate-400";
    }

    return { count, level, color, impact: count * 125 };
  }, [myAssets]);

  if (!account) return <AccessRestricted />;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. WELCOME HEADER */}
      <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="w-3 h-3 bg-vault-amber rounded-full animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]"></span>
                 <span className="text-xs font-black text-vault-amber uppercase tracking-[0.3em]">{dt.portalTitle}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-[0.9]">
                 {activeTab === "discovery" && dt.discoveryTitle}
                 {activeTab === "feed" && dt.feedTitle}
                 {activeTab === "room" && dt.roomTitle}
                 {activeTab === "kritik" && dt.kritikTitle}
                 {activeTab === "form" && dt.formTitle}
              </h1>
          </div>
          <div className="flex lg:justify-end gap-3">
              <div className="bg-muted px-6 py-3 rounded-2xl border border-border flex flex-col">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Citizen Hash</span>
                  <span className="text-sm font-mono font-bold text-vault-amber">{account.address.substring(0, 10)}...</span>
              </div>
          </div>
      </div>

      {/* 2. DYNAMIC CONTENT AREA */}
      <div className="min-h-[60vh]">
          {activeTab === "discovery" && (
             <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-4">
                        <div className="h-1.5 w-12 bg-vault-amber rounded-full"></div>
                        <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter">{dt.globalFeed}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-black text-muted-foreground uppercase tracking-widest bg-muted px-4 py-2 rounded-xl border border-border">
                        <TrendingUp size={14} className="text-green-500" /> Live Updates
                    </div>
                </div>
                <Gallery 
                   key={`discovery-${refreshTrigger}`} 
                   contract={contract} 
                   address={PUBLIC_ARCHIVE_ADDRESS} 
                   client={client} 
                />
             </div>
          )}

          {activeTab === "feed" && (
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="lg:col-span-8 space-y-8">
                   <div className="flex items-center gap-4 mb-2">
                        <div className="h-1.5 w-12 bg-vault-amber rounded-full"></div>
                        <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter">{dt.feedTitle}</h3>
                   </div>
                   <Gallery key={`myfeed-${refreshTrigger}`} contract={contract} address={account.address} client={client} />
                </div>
                
                <div className="lg:col-span-4 space-y-8">
                   {/* Civic Profile Card */}
                   <div className="bg-muted border border-border p-8 rounded-[2.5rem] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                          <Trophy size={80} className="text-vault-amber" />
                      </div>
                      
                      <h4 className="font-black text-foreground mb-8 flex items-center gap-3 uppercase text-xs tracking-[0.2em]">
                        <Activity size={18} className="text-vault-amber" /> {dt.civicPower}
                      </h4>
                      
                      <div className="space-y-4 relative z-10">
                         <StatRow icon={Target} label={dt.missionsCompleted} value={stats.count} />
                         <StatRow icon={Zap} label={dt.impactScore} value={stats.impact} />
                         <StatRow icon={Trophy} label={dt.civicLevel} value={stats.level} specialColor={stats.color} />
                      </div>

                      <div className="mt-10">
                        <CivicBadge score={calculateCivicScore(stats.count, 0, 0)} />
                      </div>
                   </div>

                   {/* Ready to Lead Card */}
                   <div className="bg-vault-amber p-8 rounded-[2.5rem] text-black">
                        <Sparkles size={32} className="mb-6" />
                        <h4 className="text-2xl font-black tracking-tighter uppercase mb-4 leading-none">{dt.readyToLead}</h4>
                        <p className="text-sm font-bold opacity-80 mb-8 leading-relaxed">
                            {lang === 'id' ? 'Tingkatkan level patriotmu dengan berpartisipasi dalam setiap debat publik.' : 'Increase your patriot level by participating in every public debate.'}
                        </p>
                        <button 
                            onClick={() => router.push("/dashboard?tab=form")}
                            className="w-full bg-black text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                        >
                            Sampaikan Aspirasi <ArrowRight size={20} />
                        </button>
                   </div>
                </div>
             </div>
          )}

          {activeTab === "room" && (
             <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
                <DeliberationRoom client={client} contract={contract} />
             </div>
          )}

          {activeTab === "kritik" && (
             <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CriticismSection client={client} contract={contract} />
             </div>
          )}

          {activeTab === "form" && (
             <div className="max-w-3xl mx-auto animate-in zoom-in-95 duration-500 bg-muted/50 border border-border p-8 md:p-16 rounded-[3.5rem]">
                <div className="text-center mb-16">
                   <div className="w-20 h-20 bg-vault-amber rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl text-black">
                        <MessageSquare size={40} />
                   </div>
                   <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 uppercase tracking-tighter leading-none">Voice of the <span className="text-vault-amber">People.</span></h2>
                   <p className="text-muted-foreground font-medium text-lg max-w-md mx-auto leading-relaxed">{dt.uploadSub}</p>
                </div>
                <UploadForm client={client} contract={contract} onSuccess={() => {
                   router.push("/dashboard?tab=feed");
                   setRefreshTrigger(p => p + 1);
                }} />
             </div>
          )}
      </div>
    </div>
  );
}

function StatRow({ label, value, icon: Icon, specialColor }: any) {
    return (
        <div className="flex justify-between items-center bg-background/40 backdrop-blur-sm p-5 rounded-2xl border border-border group-hover:border-vault-amber/30 transition-all">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-muted-foreground group-hover:text-vault-amber transition-colors">
                    {Icon && <Icon size={20} />}
                </div>
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase font-black tracking-widest">{label}</span>
            </div>
            <span className={`text-sm md:text-lg font-mono font-black ${specialColor || "text-vault-amber"}`}>{value}</span>
        </div>
    );
}
