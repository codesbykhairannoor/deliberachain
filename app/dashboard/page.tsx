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
  Activity,
  Megaphone,
  BookOpen
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
import PolicyBulletins from "@/components/PolicyBulletins";
import GuidePage from "@/app/guide/page";

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
        updatesTitle: "Kebijakan Terbaru",
        guideTitle: "Panduan Penggunaan",
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
        updatesTitle: "Policy Updates",
        guideTitle: "Platform Guide",
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
  const { role, jurisdiction } = useRole();
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
                 {activeTab === "updates" && dt.updatesTitle}
                 {activeTab === "guide" && dt.guideTitle}
              </h1>
          </div>
          <div className="flex lg:justify-end gap-3">
              {(role === "GOVERNMENT" || role === "ADMIN") && (
                <div className="bg-vault-amber/10 px-6 py-3 rounded-2xl border border-vault-amber/30 flex flex-col items-end">
                    <span className="text-[10px] font-black text-vault-amber uppercase tracking-widest mb-1">Authenticated {role}</span>
                    <span className="text-sm font-black text-foreground uppercase italic">{jurisdiction || "GLOBAL"}</span>
                </div>
              )}
              <div className="bg-muted px-6 py-3 rounded-2xl border border-border flex flex-col">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{t.citizenHash}</span>
                  <span className="text-sm font-mono font-bold text-vault-amber">{account.address.substring(0, 10)}...</span>
              </div>
          </div>
      </div>

      {/* GOVERNMENT ANNOUNCEMENT BANNER */}
      {(role === "GOVERNMENT" || role === "ADMIN") && (
         <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-8 bg-foreground text-background rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-vault-amber/20 relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 p-10 opacity-10 -z-0">
                <Shield size={120} className="text-vault-amber" />
            </div>
            <div className="relative z-10">
                <h4 className="text-2xl font-black uppercase tracking-tighter italic mb-2">Government Control Center Active</h4>
                <p className="text-sm font-medium opacity-80 max-w-xl">You are currently viewing the Citizen Portal. As an authorized official, you can broadcast policies and manage public discourse from your dedicated dashboard.</p>
            </div>
            <Link 
                href="/government" 
                className="relative z-10 px-10 py-5 bg-vault-amber text-black rounded-2xl font-black uppercase text-xs tracking-widest flex items-center gap-3 hover:scale-105 transition-transform active:scale-95 shadow-xl"
            >
                Enter Control Room <ArrowRight size={18} />
            </Link>
         </motion.div>
      )}

      {/* 2. DYNAMIC CONTENT AREA */}
      <div className="min-h-[60vh] w-full">
          {activeTab === "discovery" && (
             <div className="animate-in fade-in slide-in-from-left-4 duration-500 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="h-1.5 w-16 bg-vault-amber rounded-full"></div>
                        <h3 className="text-3xl font-black text-foreground uppercase tracking-tighter italic">{dt.globalFeed}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-black text-muted-foreground uppercase tracking-widest bg-muted/50 border border-border px-6 py-3 rounded-2xl shadow-inner">
                        <TrendingUp size={16} className="text-green-500 animate-pulse" /> {t.liveUpdates}
                    </div>
                </div>
                <div className="w-full">
                    <Gallery 
                       key={`discovery-${refreshTrigger}`} 
                       contract={contract} 
                       address={PUBLIC_ARCHIVE_ADDRESS} 
                       client={client} 
                    />
                </div>
             </div>
          )}

          {activeTab === "feed" && (
             <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 animate-in fade-in slide-in-from-left-4 duration-500 w-full">
                <div className="xl:col-span-8 space-y-10">
                   <div className="flex items-center gap-4 mb-4">
                        <div className="h-1.5 w-16 bg-vault-amber rounded-full"></div>
                        <h3 className="text-3xl font-black text-foreground uppercase tracking-tighter italic">{dt.feedTitle}</h3>
                   </div>
                   <Gallery key={`myfeed-${refreshTrigger}`} contract={contract} address={account.address} client={client} />
                </div>
                
                <div className="xl:col-span-4 space-y-10">
                   {/* Civic Profile Card */}
                   <div className="bg-muted/30 border border-border p-10 rounded-[3.5rem] relative overflow-hidden group shadow-2xl backdrop-blur-sm">
                      <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform -z-10">
                          <Trophy size={120} className="text-vault-amber" />
                      </div>
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vault-amber/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                      
                      <h4 className="font-black text-foreground mb-10 flex items-center gap-4 uppercase text-xs tracking-[0.3em] italic">
                        <Activity size={20} className="text-vault-amber" /> {dt.civicPower}
                      </h4>
                      
                      <div className="space-y-6 relative z-10">
                         <StatRow icon={Target} label={dt.missionsCompleted} value={stats.count} />
                         <StatRow icon={Zap} label={dt.impactScore} value={stats.impact} />
                         <StatRow icon={Trophy} label={dt.civicLevel} value={stats.level} specialColor={stats.color} />
                      </div>

                      <div className="mt-12 bg-background/50 p-6 rounded-[2.5rem] border border-border shadow-inner">
                        <CivicBadge score={calculateCivicScore(stats.count, 0, 0)} />
                      </div>
                   </div>

                   {/* Ready to Lead Card */}
                   <div className="bg-vault-amber p-10 rounded-[3.5rem] text-black shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:rotate-12 transition-transform">
                            <Sparkles size={80} />
                        </div>
                        <Sparkles size={40} className="mb-8" />
                        <h4 className="text-3xl font-black tracking-tighter uppercase mb-6 leading-none italic">{dt.readyToLead}</h4>
                        <p className="text-md font-bold opacity-80 mb-10 leading-relaxed italic">
                            {t.patriotLevelTip}
                        </p>
                        <button 
                            onClick={() => router.push("/dashboard?tab=form")}
                            className="w-full bg-black text-white py-6 rounded-[2rem] font-black flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-xl uppercase text-xs tracking-widest active:scale-95"
                        >
                            {t.navDashboard} <ArrowRight size={22} />
                        </button>
                   </div>
                </div>
             </div>
          )}

          {activeTab === "room" && (
             <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
                <DeliberationRoom client={client} contract={contract} />
             </div>
          )}

          {activeTab === "kritik" && (
             <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CriticismSection client={client} contract={contract} />
             </div>
          )}

          {activeTab === "form" && (
             <div className="w-full animate-in zoom-in-95 duration-500 bg-muted/20 border border-border p-10 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern-grid opacity-5 -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vault-amber/5 rounded-full blur-[150px] -z-10"></div>
                
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
                        <div className="lg:w-1/3 text-center lg:text-left">
                            <div className="w-24 h-24 bg-vault-amber rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-10 shadow-2xl text-black hover:rotate-12 transition-transform group">
                                    <MessageSquare size={48} className="group-hover:scale-110 transition-transform" />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 uppercase tracking-tighter leading-none italic">{t.voiceOfThePeople.split(' People.')[0]} People<span className="text-vault-amber">.</span></h2>
                            <p className="text-muted-foreground font-black text-lg leading-relaxed italic opacity-80 uppercase tracking-tight mb-12">{dt.uploadSub}</p>
                            
                            <div className="hidden lg:grid grid-cols-1 gap-6">
                                <div className="p-8 bg-background/40 border border-border rounded-[2.5rem] backdrop-blur-sm shadow-sm hover:border-vault-amber/30 transition-all group/info">
                                    <div className="w-12 h-12 bg-vault-amber/10 rounded-2xl flex items-center justify-center text-vault-amber mb-6 group-hover/info:scale-110 transition-transform">
                                        <Shield size={24} />
                                    </div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-3 italic">Vault-Grade Security</h4>
                                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">Your data is secured with AES-256 before being committed to the Base Sepolia ledger.</p>
                                </div>
                                <div className="p-8 bg-background/40 border border-border rounded-[2.5rem] backdrop-blur-sm shadow-sm hover:border-blue-500/30 transition-all group/info">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover/info:scale-110 transition-transform">
                                        <Sparkles size={24} />
                                    </div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground mb-3 italic">AI-Powered Audit</h4>
                                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">Every submission undergoes an automated AI audit to ensure quality and relevance.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:w-2/3 w-full">
                            <UploadForm client={client} contract={contract} onSuccess={() => {
                                router.push("/dashboard?tab=feed");
                                setRefreshTrigger(p => p + 1);
                            }} />
                        </div>
                    </div>
                </div>
             </div>
          )}

          {activeTab === "updates" && (
             <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
                <PolicyBulletins />
             </div>
          )}

          {activeTab === "guide" && (
             <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background/50 border border-border rounded-[4rem] overflow-hidden shadow-2xl backdrop-blur-sm">
                <div className="p-10 md:p-20">
                   <GuidePage />
                </div>
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
