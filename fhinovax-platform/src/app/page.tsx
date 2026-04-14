import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-gold rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-1 ring-white/20">
            F
          </div>
          <span className="font-bold text-xl text-white tracking-tight">Fhinovax <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-gold">AI</span></span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm font-medium border border-white/10">
            Sign In
          </Link>
          <Link href="/dashboard" className="px-5 py-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-gold hover:opacity-90 transition text-sm font-bold text-white shadow-[0_0_20px_rgba(26,75,156,0.3)]">
            Go to Platform
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-32">
        <section className="flex flex-col lg:flex-row items-center gap-16 relative">
          <div className="flex-1 flex flex-col gap-8 z-10">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              The Next-Gen <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-gold">AI Computer Hub</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Powered by advanced Next.js architecture. Submit your typing jobs, assignments, document processing, and compliance issues directly into our automated AI workflow.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/dashboard" className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-gold hover:opacity-90 transition font-bold text-white shadow-lg text-lg">
                Enter Dashboard
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full glass rounded-2xl p-6 border border-white/10 shadow-2xl skew-x-[-2deg] skew-y-[2deg] rotate-[-2deg]">
             <h3 className="font-semibold text-lg text-white flex items-center gap-2 mb-6">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> App Router Online
             </h3>
             <div className="flex flex-col gap-4">
               <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-brand-gold font-mono text-sm">
                 <span className="opacity-50">&gt; Initialize</span> Prisma Schema... OK
               </div>
               <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-green-400 font-mono text-sm">
                 <span className="opacity-50">&gt; Auth System</span> NextAuth Enabled
               </div>
               <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-brand-blue text-sm font-semibold">
                 Ready to receive internal API requests ✅
               </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
