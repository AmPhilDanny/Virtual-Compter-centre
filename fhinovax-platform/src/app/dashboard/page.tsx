"use client";

import Link from "next/link";

export default function Dashboard() {
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
          <Link href="/dashboard" className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-semibold flex items-center gap-3 border border-white/10">
            📊 My Jobs
          </Link>
          <Link href="/dashboard/wallet" className="px-4 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition flex items-center gap-3">
            💳 Wallet & Payments
          </Link>
          <Link href="/profile" className="px-4 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition flex items-center gap-3">
            ⚙️ Profile Settings
          </Link>
          <Link href="/admin" className="px-4 py-2.5 rounded-xl hover:bg-white/5 text-red-500/80 hover:text-red-400 transition flex items-center gap-3 border border-transparent hover:border-red-500/20 mt-4">
            🔒 Go to Admin
          </Link>
        </nav>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 overflow-y-auto pb-20 relative">
        <header className="h-20 glass border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold text-white tracking-tight">Client Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-400">Balance: <span className="text-brand-gold font-mono">₦2,500</span></span>
            <Link href="/" className="text-sm px-4 py-1.5 rounded bg-brand-blue hover:bg-brand-blue-dark text-white font-bold transition">
              + New Job
            </Link>
          </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto w-full flex flex-col gap-8">
          
          <section>
            <h2 className="text-lg font-bold text-white mb-4">Active & Pending Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Job Card 1 */}
              <div className="glass p-6 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-brand-gold/20 rounded-xl flex items-center justify-center text-brand-gold">🎓</div>
                     <div>
                       <h3 className="font-bold text-white">CV & Pitch Deck Creation</h3>
                       <p className="text-[10px] text-slate-500 font-mono tracking-widest mt-1">REF: FH-921-A</p>
                     </div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold text-[10px] uppercase rounded-full">Executing by Staff</span>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-300">
                  <div className="flex justify-between"><span>Submitted:</span> <span className="text-white">2 hours ago</span></div>
                  <div className="flex justify-between"><span>Est. Delivery:</span> <span className="text-brand-gold">Tommorow, 2 PM</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="w-full bg-slate-900 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-brand-blue to-brand-gold h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="glass p-6 rounded-2xl border border-white/10 opacity-70">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400">🏢</div>
                     <div>
                       <h3 className="font-bold text-white">CAC Registration Lead</h3>
                       <p className="text-[10px] text-slate-500 font-mono tracking-widest mt-1">REF: FH-114-B</p>
                     </div>
                  </div>
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-[10px] uppercase rounded-full">Completed</span>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-300">
                  <p className="line-clamp-2 italic text-slate-400">"Attached are my business name details and director IDs for filing..."</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-white font-mono text-sm font-bold">₦15,000 paid</span>
                  <button className="text-brand-blue text-xs font-bold uppercase hover:underline">Download Receipt</button>
                </div>
              </div>

            </div>
          </section>

          <section className="glass rounded-2xl border border-white/10 p-1 flex items-center overflow-hidden w-full max-w-lg mb-10">
             <div className="bg-slate-900/50 p-4 shrink-0 flex items-center justify-center text-xl border-r border-white/10"><span className="animate-pulse">✨</span></div>
             <div className="p-4 flex-1">
               <p className="text-sm font-medium text-slate-300">Need another service? Our AI Virtual Assistant is ready to take your job.</p>
             </div>
             <Link href="/" className="px-6 py-4 bg-white/5 hover:bg-white/10 font-bold text-white border-l border-white/10 transition h-full text-sm">Open Chat</Link>
          </section>

        </div>
      </main>
    </div>
  );
}
