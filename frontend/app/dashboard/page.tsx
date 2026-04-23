"use client";

import { createThirdwebClient, getContract } from "thirdweb";
import { useActiveAccount, ConnectButton, useReadContract } from "thirdweb/react";
import { baseSepolia } from "thirdweb/chains";
import { useState, useMemo } from "react";
import { useLanguageStore } from "@/lib/store";
import { translations } from "@/lib/translations";
import { 
  PlusSquare, 
  MessageSquare, 
  Flame, 
  AlertCircle, 
  History,
  Sparkles,
  LayoutGrid,
  Globe,
  Trophy,
  Target,
  Zap
} from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";

import UploadForm from "@/components/UploadForm"; 
import Gallery from "@/components/Gallery";
import DeliberationRoom from "@/components/DeliberationRoom";
import CriticismSection from "@/components/CriticismSection";
import { PUBLIC_ARCHIVE_ADDRESS } from "@/lib/access";
import CivicBadge from "@/components/CivicBadge";
import { calculateCivicScore } from "@/lib/gamification";

import { Suspense } from "react";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });
const contract = getContract({ client, chain: baseSepolia, address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "" });

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="p-20 text-white flex flex-col items-center animate-in fade-in">
        <LayoutGrid size={48} className="text-slate-700 mb-4 animate-pulse" />
        <p className="text-slate-500 font-mono italic">Initializing secure citizen session...</p>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardContent() {
  const account = useActiveAccount();
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("tab") || "discovery";
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  // REAL-TIME DATA FETCHING FOR STATS
  const { data: myAssets } = useReadContract({
    contract,
    method: "function getUserAssets(address _user) view returns ((string cid, string title, string assetType, uint256 timestamp, address owner)[])",
    params: [account?.address || ""],
  });

  // LOGIKA CIVIC POWER REAL-TIME
  const stats = useMemo(() => {
    const count = myAssets?.length || 0;
    let level = "Bronze";
    let color = "text-amber-700";
    
    if (count > 15) {
        level = "Platinum";
        color = "text-cyan-400";
    } else if (count > 10) {
        level = "Gold";
        color = "text-vault-amber";
    } else if (count > 5) {
        level = "Silver";
        color = "text-slate-300";
    }

    return { count, level, color, impact: count * 125 };
  }, [myAssets]);

  if (!account) return (
    <div className="p-20 text-white flex flex-col items-center animate-in fade-in">
        <LayoutGrid size={48} className="text-slate-700 mb-4" />
        <p className="text-slate-500 mb-8">{t.lockedMsg}</p>
        <ConnectButton 
          client={client} 
          theme="dark" 
          accountAbstraction={{
            chain: baseSepolia,
            sponsorGas: true,
          }}
        />
    </div>
  );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      {/* HEADER SECTION - NO TABS HERE ANYMORE */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-8 font-sans">
          <div>
              <div className="flex items-center gap-2 mb-2">
                 <span className="w-2 h-2 bg-vault-amber rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                 <span className="text-xs font-mono text-vault-amber uppercase tracking-widest font-black">Citizen Portal</span>
              </div>
              <h1 className="text-4xl font-black text-white flex items-center gap-3">
                 {activeTab.toUpperCase()} <Sparkles size={24} className="text-vault-amber" />
              </h1>
              <p className="text-slate-500 font-mono mt-1 text-sm">
                 Security Context: <span className="text-vault-amber">{account.address.substring(0, 10)}...{account.address.substring(account.address.length - 4)}</span>
              </p>
          </div>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="min-h-[60vh]">
          {activeTab === "discovery" && (
             <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="flex items-center gap-3 mb-8">
                   <div className="h-1 w-12 bg-vault-amber rounded-full"></div>
                   <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Global Deliberation Feed</h3>
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
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="lg:col-span-8">
                   <h3 className="text-xl font-bold text-white mb-6">Aspirasi Saya</h3>
                   <Gallery key={`myfeed-${refreshTrigger}`} contract={contract} address={account.address} client={client} />
                </div>
                <div className="lg:col-span-4 space-y-6">
                   <CivicBadge score={calculateCivicScore(stats.count, 0, 0)} />
                   
                   <div className="bg-vault-card border border-white/5 p-6 rounded-3xl">
                      <h4 className="font-bold text-white mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                        <Trophy size={16} className="text-vault-amber" /> Real-time Civic Power
                      </h4>
                      <div className="space-y-4">
                         <StatRow icon={Target} label="Misi Selesai" value={stats.count} />
                         <StatRow icon={Zap} label="Impact Score" value={stats.impact} />
                         <StatRow icon={Trophy} label="Level Civic" value={stats.level} specialColor={stats.color} />
                      </div>
                   </div>
                </div>
             </div>
          )}

          {activeTab === "room" && (
             <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
                <DeliberationRoom client={client} contract={contract} />
             </div>
          )}

          {activeTab === "kritik" && (
             <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CriticismSection client={client} contract={contract} />
             </div>
          )}

          {activeTab === "form" && (
             <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
                <div className="text-center mb-10">
                   <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Voice of the <span className="text-vault-amber">People</span></h2>
                   <p className="text-slate-500 italic">Sampaikan aspirasimu langsung ke Ledger Blockchain.</p>
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
        <div className="flex justify-between items-center bg-black/20 p-3 rounded-xl border border-white/5">
            <div className="flex items-center gap-3">
                {Icon && <Icon size={14} className="text-slate-600" />}
                <span className="text-xs text-slate-500 uppercase font-black tracking-tight">{label}</span>
            </div>
            <span className={`font-mono font-bold ${specialColor || "text-vault-amber"}`}>{value}</span>
        </div>
    );
}