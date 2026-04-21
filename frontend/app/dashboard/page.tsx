"use client";

import { createThirdwebClient, getContract } from "thirdweb";
import { useActiveAccount, ConnectButton } from "thirdweb/react";
import { sepolia } from "thirdweb/chains";
import { useState } from "react";
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
  Globe
} from "lucide-react";

import UploadForm from "@/components/UploadForm"; 
import Gallery from "@/components/Gallery";
import DeliberationRoom from "@/components/DeliberationRoom";
import CriticismSection from "@/components/CriticismSection";
import { PUBLIC_ARCHIVE_ADDRESS } from "@/lib/access";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });
const contract = getContract({ client, chain: sepolia, address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "" });

export default function DashboardPage() {
  const account = useActiveAccount();
  const [activeTab, setActiveTab] = useState("discovery"); // Default to discovery for social hub feel
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const { lang } = useLanguageStore();
  const t = translations[lang as keyof typeof translations];

  if (!account) return (
    <div className="p-20 text-white flex flex-col items-center animate-in fade-in">
        <LayoutGrid size={48} className="text-slate-700 mb-4" />
        <p className="text-slate-500 mb-8">{t.lockedMsg}</p>
        <ConnectButton client={client} theme="dark" />
    </div>
  );

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-8">
          <div>
              <div className="flex items-center gap-2 mb-2">
                 <span className="w-2 h-2 bg-vault-amber rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                 <span className="text-xs font-mono text-vault-amber uppercase tracking-widest font-black">Citizen Portal</span>
              </div>
              <h1 className="text-4xl font-black text-white flex items-center gap-3">
                 Welcome Back <Sparkles size={24} className="text-vault-amber" />
              </h1>
              <p className="text-slate-500 font-mono mt-1 text-sm">
                 {account.address.substring(0, 16)}...{account.address.substring(account.address.length - 4)}
              </p>
          </div>
          
          {/* TAB NAVIGATION */}
          <div className="flex bg-white/5 border border-white/5 p-1 rounded-2xl mt-8 md:mt-0">
             <TabButton 
                active={activeTab === "discovery"} 
                onClick={() => setActiveTab("discovery")} 
                icon={Globe} 
                label="Discovery" 
             />
             <TabButton 
                active={activeTab === "feed"} 
                onClick={() => setActiveTab("feed")} 
                icon={History} 
                label="My Feed" 
             />
             <TabButton 
                active={activeTab === "room"} 
                onClick={() => setActiveTab("room")} 
                icon={Flame} 
                label="Deliberation" 
             />
             <TabButton 
                active={activeTab === "kritik"} 
                onClick={() => setActiveTab("kritik")} 
                icon={AlertCircle} 
                label="Criticism" 
             />
             <TabButton 
                active={activeTab === "form"} 
                onClick={() => setActiveTab("form")} 
                icon={PlusSquare} 
                label="New Post" 
                highlight
             />
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
                   <div className="bg-vault-card border border-white/5 p-6 rounded-3xl">
                      <h4 className="font-bold text-white mb-4">Quick Stats</h4>
                      <div className="space-y-4">
                         <StatRow label="Misi Selesai" value="12" />
                         <StatRow label="Votes Diberikan" value="45" />
                         <StatRow label="Level Civic" value="Gold" />
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
                   setActiveTab("feed");
                   setRefreshTrigger(p => p + 1);
                }} />
             </div>
          )}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon: Icon, label, highlight }: any) {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-bold text-xs uppercase tracking-wider ${
                active 
                ? (highlight ? 'bg-vault-amber text-black' : 'bg-white/10 text-white') 
                : 'text-slate-500 hover:text-slate-300'
            }`}
        >
            <Icon size={16} />
            <span className="hidden sm:inline">{label}</span>
        </button>
    );
}

function StatRow({ label, value }: any) {
    return (
        <div className="flex justify-between items-center bg-black/20 p-3 rounded-xl border border-white/5">
            <span className="text-xs text-slate-500 uppercase font-black tracking-tight">{label}</span>
            <span className="text-vault-amber font-mono font-bold">{value}</span>
        </div>
    );
}