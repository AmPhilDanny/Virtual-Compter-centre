"use client";

import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  // Simulating Admin-controlled CMS Edit Locks
  const profileSettings = {
    emailEditable: false, // Locked by admin
    phoneEditable: true,
  };

  return (
    <div className="flex bg-slate-950 min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 glass border-r border-white/5 flex flex-col z-20 sticky top-0 h-screen bg-slate-900/80">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center text-white font-bold bg-gradient-to-br from-brand-blue to-brand-gold rounded-lg shadow-lg">
            F
          </div>
          <span className="font-bold text-white tracking-tight">Fhinovax <span className="text-brand-gold">Portal</span></span>
        </div>
        <nav className="p-4 flex flex-col gap-2 flex-1">
          <Link href="/dashboard" className="px-4 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition flex items-center gap-3">
            📊 My Jobs
          </Link>
          <Link href="/dashboard/wallet" className="px-4 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition flex items-center gap-3">
            💳 Wallet & Payments
          </Link>
          <Link href="/profile" className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-semibold flex items-center gap-3 border border-white/10">
            ⚙️ Profile Settings
          </Link>
        </nav>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 overflow-y-auto pb-20 relative">
        <header className="h-20 glass border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold text-white tracking-tight">Security & Profile</h1>
        </header>

        <div className="p-8 max-w-4xl mx-auto w-full flex flex-col gap-8">
          
          <div className="glass p-8 rounded-2xl border border-white/10">
             <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-brand-gold flex items-center justify-center text-3xl shrink-0">
                  👤
                </div>
                <div>
                   <h2 className="text-2xl font-bold text-white mb-1">Standard Client</h2>
                   <p className="text-slate-400 font-mono text-sm">Joined April 2026</p>
                </div>
             </div>

             <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col">
                      <label className="text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                      <input type="text" defaultValue="Alex Johnsson" className="px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-blue transition" />
                   </div>
                   <div className="flex flex-col relative">
                      <label className="text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue="alex@example.com" 
                        readOnly={!profileSettings.emailEditable}
                        className={`px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none transition ${!profileSettings.emailEditable ? 'opacity-50 cursor-not-allowed' : ''}`} 
                      />
                      {!profileSettings.emailEditable && (
                        <span className="absolute right-4 top-10 text-xs text-red-400 font-bold">Locked by Admin</span>
                      )}
                   </div>
                   <div className="flex flex-col bg-slate-900/50 p-4 border border-white/5 rounded-xl md:col-span-2">
                       <label className="text-sm font-semibold text-slate-300 mb-2">WhatsApp / Phone Number</label>
                       <p className="text-xs text-slate-500 mb-3">Couriers and our AI Concierge use this to notify you when jobs finish.</p>
                       <input 
                        type="tel" 
                        defaultValue="+234 812 345 6789" 
                        readOnly={!profileSettings.phoneEditable}
                        className="px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-blue transition w-full md:w-1/2" 
                      />
                   </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-end">
                  <button type="button" className="px-8 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold rounded-xl transition">
                    Save Changes
                  </button>
                </div>
             </form>
          </div>

        </div>
      </main>
    </div>
  );
}
