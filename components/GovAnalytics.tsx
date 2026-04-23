"use client";

import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell, BarChart, Bar 
} from "recharts";
import { TrendingUp, Users, MessageSquare, AlertCircle } from "lucide-react";

// Mock Data for Visualization
const CATEGORY_DATA = [
  { name: "Infrastruktur", value: 400 },
  { name: "Kesehatan", value: 300 },
  { name: "Pendidikan", value: 300 },
  { name: "Ekonomi", value: 200 },
  { name: "Lingkungan", value: 278 },
];

const TREND_DATA = [
  { name: "Mon", calls: 40, impact: 24 },
  { name: "Tue", calls: 30, impact: 13 },
  { name: "Wed", calls: 20, impact: 98 },
  { name: "Thu", calls: 27, impact: 39 },
  { name: "Fri", calls: 18, impact: 48 },
  { name: "Sat", calls: 23, impact: 38 },
  { name: "Sun", calls: 34, impact: 43 },
];

const COLORS = ["#F59E0B", "#3B82F6", "#10B981", "#EF4444", "#8B5CF6"];

export default function GovAnalytics() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* SECTION 1: TOP TRENDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Trend Line Chart */}
        <div className="bg-vault-card border border-white/5 p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
           <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                   <TrendingUp className="text-vault-amber" size={20} /> Aktivitas Partisipasi
                </h3>
                <p className="text-xs text-slate-500">Volume aspirasi dalam 7 hari terakhir</p>
              </div>
           </div>
           
           <div className="h-[250px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={TREND_DATA}>
                    <defs>
                      <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                        itemStyle={{ color: '#F59E0B' }}
                    />
                    <Area type="monotone" dataKey="calls" stroke="#F59E0B" fillOpacity={1} fill="url(#colorCalls)" strokeWidth={3} />
                  </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Category Distribution (Pie) */}
        <div className="bg-vault-card border border-white/5 p-6 rounded-3xl shadow-2xl">
           <h3 className="text-xl font-bold text-white mb-6">Distribusi Kategori Isu</h3>
           <div className="h-[250px] w-full flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={CATEGORY_DATA}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    cornerRadius={8}
                  >
                    {CATEGORY_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                     contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 pr-4">
                  {CATEGORY_DATA.map((cat, i) => (
                      <div key={cat.name} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{cat.name}</span>
                      </div>
                  ))}
              </div>
           </div>
        </div>

      </div>

      {/* SECTION 2: INTENSITY HEATMAP (BETA) */}
      <div className="bg-vault-card border border-white/5 p-8 rounded-3xl relative">
          <div className="flex items-center gap-2 text-white mb-4">
              <AlertCircle className="text-red-500" size={20} />
              <h3 className="text-xl font-bold">Analisis Urgensi Real-time</h3>
          </div>
          <p className="text-slate-400 text-sm mb-8">AI mengidentifikasi peningkatan ketegangan isu keamanan di wilayah pusat.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Pusat', 'Utara', 'Selatan', 'Barat'].map((loc) => (
                  <div key={loc} className="bg-black/40 border border-white/5 p-4 rounded-2xl flex flex-col items-center justify-center">
                      <span className="text-xs text-slate-500 uppercase font-black">{loc}</span>
                      <span className="text-2xl font-black text-white mt-1">
                          {Math.floor(Math.random() * 20) + 80}%
                      </span>
                      <div className="w-full h-1 bg-white/5 rounded-full mt-2">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}
