"use client";

import { useState, useEffect } from "react";
import { createThirdwebClient, getContract, readContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useActiveAccount } from "thirdweb/react";
import { LayoutDashboard, FileText, BarChart3, Users, MessageSquare, Loader2, Sparkles, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import { generatePolicyBrief } from "@/lib/ai"; // Not a server action yet, let's fix that
import GovAnalytics from "@/components/GovAnalytics";

const client = createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "" });
const contract = getContract({ client, chain: sepolia, address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "" });

import { useRole } from "@/hooks/useRole";
import { useRouter } from "next/navigation";
import { generatePolicyBriefAction } from "@/app/actions/policy";

export default function GovernmentDashboard() {
  const { role, jurisdiction, isLoading } = useRole();
  const router = useRouter();
  const [aspirations, setAspirations] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [policyBrief, setPolicyBrief] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && role !== "GOVERNMENT" && role !== "ADMIN") {
        router.push("/dashboard");
    }
  }, [role, isLoading]);

  // Simulation of fetching all aspirations with Regional Filtering
  useEffect(() => {
    async function fetchData() {
        if (role === "CITIZEN" || isLoading) return;
        try {
            const data = await readContract({
                contract,
                method: "function getUserAssets(address _user) view returns ((string cid, string title, string assetType, uint256 timestamp, address owner)[])",
                params: ["0x801F15748D3a6dFc5A8D3a7Bc36821Cdb51d59bC"], 
            });

            // Filtering Logic:
            // compositeType = category | urgency | areaTag
            const filteredData = data.filter((item: any) => {
                if (jurisdiction === "GLOBAL") return true; // Super Admin sees all
                const parts = item.assetType.split("|").map((p: string) => p.trim());
                const itemArea = parts[2]; // areaTag
                return itemArea === jurisdiction;
            });

            setAspirations(filteredData);
        } catch (e) {
            console.error(e);
        }
    }
    fetchData();
  }, [role, isLoading, jurisdiction]);

  const handleGenerateBrief = async () => {
    if (aspirations.length === 0) {
        alert("Belum ada data aspirasi untuk dianalisis.");
        return;
    }
    setIsGenerating(true);
    try {
        const result = await generatePolicyBriefAction(aspirations);
        if (result.success) {
            setPolicyBrief(result.brief || "");
        } else {
            alert(result.error);
        }
    } finally {
        setIsGenerating(false);
    }
  };

  if (isLoading) return <div className="p-20 text-white">Verifying Authority...</div>;

  return (
    <div className="animate-in fade-in duration-500">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end border-b border-white/5 pb-8">
            <div>
                <h1 className="text-4xl font-black text-white mb-2 tracking-tight uppercase">Gov<span className="text-vault-amber">Portal</span></h1>
                <p className="text-slate-500 font-mono text-sm">
                    Jurisdiction Identifier: <span className="text-vault-amber font-bold">{jurisdiction || "UNAUTHORIZED"}</span>
                </p>
            </div>
            <div className="mt-4 md:mt-0 bg-vault-amber/10 border border-vault-amber/30 px-6 py-2 rounded-xl">
                <span className="text-xs font-bold text-vault-amber uppercase tracking-widest animate-pulse">Monitoring Active</span>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            <StatsCard icon={MessageSquare} label="Total Aspirasi" value={aspirations.length} color="amber" />
            <StatsCard icon={BarChart3} label="Sentiment Positif" value="78%" color="blue" />
            <StatsCard icon={Users} label="Partisipasi Aktif" value="1.2k" color="green" />
            <StatsCard icon={FileText} label="Policy Briefs" value="12" color="purple" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Sparkles size={20} className="text-vault-amber" /> System Analytics
                    </h2>
                    <button 
                        onClick={handleGenerateBrief}
                        disabled={isGenerating}
                        className="bg-vault-amber text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-all"
                    >
                        {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles size={16} />} 
                        Generate Policy Brief
                    </button>
                </div>

                <GovAnalytics />

                {policyBrief && (
                    <div className="mt-8 prose prose-invert max-w-none bg-black/40 p-6 rounded-2xl border border-white/10 animate-in fade-in">
                        <pre className="whitespace-pre-wrap font-sans text-slate-300 leading-relaxed">
                            {policyBrief}
                        </pre>
                        <button className="mt-6 flex items-center gap-2 text-vault-amber font-bold text-sm">
                            <Download size={16} /> Export as PDF
                        </button>
                    </div>
                )}
            </div>

            <div className="lg:col-span-4 space-y-6">
                <div className="bg-vault-card border border-white/5 rounded-3xl p-6">
                    <h3 className="font-bold text-white mb-4">Trending Categories</h3>
                    <div className="space-y-4">
                        <CategoryProgress label="Infrastruktur" value={80} color="amber" />
                        <CategoryProgress label="Kesehatan" value={45} color="blue" />
                        <CategoryProgress label="Keamanan" value={30} color="red" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

function StatsCard({ icon: Icon, label, value, color }: any) {
    return (
        <div className="bg-vault-card border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-all group">
            <div className={`p-3 rounded-xl bg-${color}-950/30 text-${color}-400 mb-4 w-fit group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
            </div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{label}</p>
            <p className="text-3xl font-black text-white mt-1">{value}</p>
        </div>
    );
}

function CategoryProgress({ label, value, color }: any) {
    const colorClasses = {
        amber: 'bg-vault-amber',
        blue: 'bg-blue-500',
        red: 'bg-red-500'
    };
    return (
        <div>
            <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5 uppercase">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div 
                    className={`h-full transition-all duration-1000 ${colorClasses[color as keyof typeof colorClasses]}`} 
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
}
