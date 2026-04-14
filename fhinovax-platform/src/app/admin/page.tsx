"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("leads");

  return (
    <div className="flex bg-slate-950 min-h-screen text-slate-200">
      {/* Admin Sidebar */}
      <aside className="w-72 glass border-r border-red-500/10 flex flex-col z-20 shrink-0 relative bg-slate-900/90 backdrop-blur-3xl shadow-[5px_0_30px_rgba(239,68,68,0.02)]">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
           <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-400 rounded-xl flex items-center justify-center text-white font-bold text-xl ring-1 ring-white/10 shadow-[0_0_15px_rgba(239,68,68,0.4)]">A</div>
           <div>
              <div className="font-bold text-white text-lg tracking-tight">Fhinovax <span className="text-brand-gold">Control</span></div>
              <div className="text-[10px] text-red-500 font-bold tracking-widest uppercase">Super Admin</div>
           </div>
        </div>
        
        <div className="overflow-y-auto flex-1">
          <nav className="p-4 flex flex-col gap-1">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-4 pb-2 pt-4">Oversight</div>
            
            <button onClick={() => setActiveTab("leads")} className={`px-4 py-2.5 rounded-xl font-semibold flex items-center justify-between transition ${activeTab === 'leads' ? 'bg-white/10 text-white border border-white/10 shadow-[inner_0_1px_rgba(255,255,255,0.1)]' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}>
              <span className="flex items-center gap-3"><span className={activeTab === 'leads' ? 'text-brand-blue' : ''}>🗂️</span> AI Lead Pipeline</span>
            </button>
            <button onClick={() => setActiveTab("verifications")} className={`px-4 py-2.5 rounded-xl font-medium flex items-center justify-between transition ${activeTab === 'verifications' ? 'bg-white/10 text-white border border-white/10' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}>
              <span className="flex items-center gap-3"><span>🧾</span> Pending Receipts</span>
              <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white font-bold animate-pulse">2</span>
            </button>

            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-4 pb-2 pt-6">CMS Controls</div>
            <button className="px-4 py-2.5 rounded-xl hover:bg-white/5 font-medium text-slate-400 hover:text-slate-200 transition flex items-center gap-3 w-full text-left">
              <span>👥</span> Client Permissions
            </button>
            <button className="px-4 py-2.5 rounded-xl hover:bg-white/5 font-medium text-slate-400 hover:text-slate-200 transition flex items-center gap-3 w-full text-left">
              <span>🛒</span> Services & Pricing
            </button>
          </nav>
        </div>
        
        <div className="p-6 border-t border-white/5">
           <Link href="/dashboard" className="flex items-center justify-center py-2.5 w-full rounded-lg bg-white/5 hover:bg-white/10 transition text-sm font-bold text-slate-300">
             Return to Client View
           </Link>
        </div>
      </aside>

      {/* Main Admin Workspace */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto z-10 relative">
        <header className="h-20 glass border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-20 backdrop-blur-2xl">
          <div className="flex items-center gap-4">
             <h1 className="text-xl font-bold text-white tracking-tight capitalize">{activeTab.replace('_', ' ')} Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-sm px-4 py-1.5 rounded bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-medium flex items-center gap-2">
              Next.js Native Server <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full flex flex-col gap-8 pb-20">
          
          {/* Dashboard Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-sm text-slate-400 font-medium mb-1">AI Jobs Captured</p>
                <h2 className="text-3xl font-bold text-white">1,492</h2>
                <p className="text-xs text-green-400 mt-2 flex items-center gap-1">↑ 12% this week</p>
             </div>
             <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-sm text-slate-400 font-medium mb-1">Pending Receipts</p>
                <h2 className="text-3xl font-bold text-white text-red-400 flex items-center gap-3">2 <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></span></h2>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">Awaiting admin review</p>
             </div>
             <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-sm text-slate-400 font-medium mb-1">Revenue (Current)</p>
                <h2 className="text-3xl font-bold text-white">₦42,500</h2>
                <p className="text-xs text-green-400 mt-2 flex items-center gap-1">↑ 4% this month</p>
             </div>
          </div>

          {activeTab === 'verifications' && (
             <div className="glass rounded-2xl border border-red-500/20 shadow-2xl overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.05)]">
               <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                  <div>
                     <h3 className="font-bold text-white flex items-center gap-2 text-lg">Action Required</h3>
                     <p className="text-xs text-slate-400 font-mono tracking-widest mt-1 uppercase">Bank Transfer Verifications</p>
                  </div>
               </div>
               <div className="p-6 flex flex-col gap-6">
                  {/* Mock Receipt */}
                  <div className="p-4 rounded-xl border border-white/10 bg-slate-900 flex flex-col md:flex-row gap-6">
                     <div className="w-full md:w-48 h-32 bg-slate-800 rounded-lg border border-white/5 overflow-hidden relative cursor-pointer flex items-center justify-center">
                        <span className="text-4xl">🧾</span>
                     </div>
                     <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                             <h4 className="font-bold text-white text-lg">Alex Johnsson</h4>
                             <span className="text-brand-gold font-bold font-mono">₦5,000</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1">Transaction Ref: <span className="text-white">FH-829A-X39</span></p>
                          <div className="mt-2 text-[10px] uppercase font-bold text-slate-500">Service: <span class="text-slate-300">CV & Cover Letter Writing</span></div>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                           <button className="flex-1 py-2 rounded-lg bg-green-500 hover:bg-green-400 font-bold text-slate-950 shadow-lg text-sm transition">Verify & Approve</button>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
          )}

          {activeTab === 'leads' && (
             <div className="glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
               <div className="p-6 border-b border-white/5 bg-white/5">
                  <h3 className="font-bold text-white text-lg">Latest AI Client Leads</h3>
                  <p className="text-xs text-slate-400 font-mono tracking-widest mt-1 uppercase">Jobs Handed off by Chatbot</p>
               </div>
               <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between p-4 bg-slate-900 border border-white/5 rounded-xl">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue text-sm shrink-0 border border-brand-blue/30"><span className="animate-pulse">📝</span></div>
                        <div>
                           <div className="text-sm font-bold text-white">NYSC Statement Document Formatting</div>
                           <div className="text-xs font-mono text-slate-500 mt-1">Client: david@fhinovax.com</div>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="text-xs bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded font-bold uppercase">Pending Assignment</div>
                        <button className="text-[10px] text-white underline mt-1">Assign to Staff</button>
                     </div>
                  </div>
               </div>
             </div>
          )}

        </div>
      </main>
    </div>
  );
}
