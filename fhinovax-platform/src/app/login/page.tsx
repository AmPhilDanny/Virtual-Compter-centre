"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-brand-blue-dark rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-brand-gold/10 rounded-full filter blur-[100px] opacity-30"></div>
      </div>

      <Link href="/" className="absolute top-8 left-8 text-white font-bold flex items-center gap-2 z-10 hover:text-brand-gold transition">
         <span className="text-xl">←</span> Back Home
      </Link>

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
           <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-gold rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-[0_0_30px_rgba(26,75,156,0.5)]">
             F
           </div>
           <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
           <p className="text-slate-400">Sign in to track your Fhinovax jobs</p>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl">
           <form className="flex flex-col gap-5">
              
              <div className="flex flex-col">
                 <label className="text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                 <input type="email" placeholder="you@example.com" className="px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-blue transition" />
              </div>

              <div className="flex flex-col">
                 <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-300">Password</label>
                    <a href="#" className="text-xs text-brand-blue hover:text-brand-gold transition">Forgot Password?</a>
                 </div>
                 <input type="password" placeholder="••••••••" className="px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-blue transition" />
              </div>

              <Link href="/dashboard" className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-gold text-white font-bold text-center hover:opacity-90 transition shadow-lg">
                 Sign In Securely
              </Link>
           </form>

           <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-widest">Or continue with</span>
              <div className="flex-1 h-px bg-white/10"></div>
           </div>

           <div className="flex flex-col gap-3">
              <button className="w-full py-3 rounded-xl bg-white text-slate-900 font-bold flex items-center justify-center gap-3 hover:bg-slate-200 transition">
                 <img src="https://ucarecdn.com/f951eec7-aeea-41ad-b103-ba4d6a6c4293/googlelogohistory.png" alt="Google" className="w-5 h-5" />
                 Sign in with Google
              </button>
           </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
           Don't have an account? <a href="#" className="text-brand-gold font-bold hover:underline">Create one</a>
        </p>
      </div>

    </div>
  );
}
