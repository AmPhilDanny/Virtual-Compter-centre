"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen pb-20">
      {/* Global Navigation Header */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 border-b border-white/5 py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between backdrop-blur-xl gap-4">
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-gold rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-1 ring-brand-blue/30">
               F
             </div>
             <span className="font-bold text-xl text-white tracking-tight">Fhinovax <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-gold">AI</span></span>
          </div>
        </div>
        
        {/* Core Portals Navigation */}
        <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition whitespace-nowrap">
            <span className="text-brand-blue">📊</span> Client Dashboard
          </Link>
          <Link href="/profile" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition whitespace-nowrap">
            <span className="text-brand-gold">👤</span> My Profile
          </Link>
          <div className="w-px h-4 bg-white/20 hidden md:block"></div>
          <Link href="/admin" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-sm font-bold text-red-400 transition whitespace-nowrap border border-white/5">
            Admin Panel 🔒
          </Link>
          <Link href="/login" className="px-5 py-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-gold hover:opacity-90 transition text-sm font-bold text-white shadow-[0_0_15px_rgba(26,75,156,0.2)] whitespace-nowrap ml-2">
             Sign In
          </Link>
        </div>
      </nav>

      <main className="pt-36 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto flex flex-col gap-6 items-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white mb-2">
            The Digital Computer Centre, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-gold">Automated by AI Integration.</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl px-4">
            Chat with our intelligent Virtual Assistant to instantly submit requirements, get a quote, and seamlessly route your task to our professional human experts.
          </p>
          <button onClick={() => setChatOpen(true)} className="mt-4 px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-200 transition font-bold text-lg flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <span className="text-xl">✨</span> Start a Job via AI Chat
          </button>
        </section>

        {/* The Comprehensive Services Catalog */}
        <section className="flex flex-col gap-12" id="services">
          <div className="text-center">
             <h2 className="text-3xl font-bold text-white mb-3">Our Professional Services</h2>
             <p className="text-brand-gold font-medium uppercase tracking-widest text-sm">Everything you need in one digital hub</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             
             {/* Core Included Services */}
             <div className="glass p-8 rounded-2xl border border-brand-blue/20 flex flex-col h-full bg-slate-900/40">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue text-2xl mb-6">📝</div>
                <h3 className="text-xl font-bold text-white mb-4 shadow-sm">Core Typing & Tasks</h3>
                <ul className="flex flex-col gap-3 text-slate-300 font-medium">
                  <li className="flex items-start gap-2"><span>•</span> Typing services</li>
                  <li className="flex items-start gap-2"><span>•</span> Virtual assistance</li>
                  <li className="flex items-start gap-2"><span>•</span> Assignment solver / academic assistance</li>
                  <li className="flex items-start gap-2"><span>•</span> NIN issue resolution support</li>
                  <li className="flex items-start gap-2"><span>•</span> Project writing & Surveys</li>
                  <li className="flex items-start gap-2"><span>•</span> General document typing</li>
                </ul>
             </div>

             {/* Academic & Professional */}
             <div className="glass p-8 rounded-2xl border border-brand-gold/20 flex flex-col h-full bg-slate-900/40">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold text-2xl mb-6">🎓</div>
                <h3 className="text-xl font-bold text-white mb-4">Academic & Professional</h3>
                <ul className="flex flex-col gap-3 text-slate-300 font-medium">
                  <li className="flex items-start gap-2"><span>•</span> CV & Resume writing</li>
                  <li className="flex items-start gap-2"><span>•</span> Cover letters & SOPs</li>
                  <li className="flex items-start gap-2"><span>•</span> Scholarship assistance</li>
                  <li className="flex items-start gap-2"><span>•</span> Thesis formatting (APA / MLA / Harvard)</li>
                  <li className="flex items-start gap-2"><span>•</span> PowerPoint & pitch deck creation</li>
                </ul>
             </div>

             {/* Government & Business */}
             <div className="glass p-8 rounded-2xl border border-white/10 flex flex-col h-full bg-slate-900/40">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white text-2xl mb-6">🏢</div>
                <h3 className="text-xl font-bold text-white mb-4">Government & Business</h3>
                <ul className="flex flex-col gap-3 text-slate-300 font-medium">
                  <li className="flex items-start gap-2"><span>•</span> Online form filling (NYSC, JAMB, Immigration, FRSC)</li>
                  <li className="flex items-start gap-2"><span>•</span> Business name registration assistance</li>
                  <li className="flex items-start gap-2"><span>•</span> TIN assistance</li>
                  <li className="flex items-start gap-2"><span>•</span> Grant & NGO application assistance</li>
                </ul>
             </div>

             {/* Digital & AI */}
             <div className="glass p-8 rounded-2xl border border-purple-500/20 flex flex-col h-full bg-slate-900/40 md:col-span-2 lg:col-span-3">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 text-3xl shrink-0">🤖</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">Digital & AI-Enhanced Services</h3>
                    <p className="text-slate-400 mb-4 text-sm">Boost your digital workflow with fast, AI-assisted results verified by humans.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-200 font-medium text-sm">
                       <span className="flex items-center gap-2"><span>✓</span> Data entry</span>
                       <span className="flex items-center gap-2"><span>✓</span> Lead generation</span>
                       <span className="flex items-center gap-2"><span>✓</span> Transcription (audio → text)</span>
                       <span className="flex items-center gap-2"><span>✓</span> Document summarization</span>
                       <span className="flex items-center gap-2"><span>✓</span> Translation</span>
                       <span className="flex items-center gap-2"><span>✓</span> Grammar & plagiarism</span>
                    </div>
                  </div>
                </div>
             </div>

          </div>
        </section>
      </main>

      {/* Embedded Full-Screen AI Intake Chat Mockup (Triggered by state) */}
      {chatOpen && (
         <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col animate-in fade-in zoom-in duration-300">
           <header className="p-4 border-b border-white/10 flex items-center justify-between bg-slate-900">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full border border-brand-gold bg-brand-gold/10 flex items-center justify-center text-brand-gold">✨</div>
                 <div>
                   <h2 className="font-bold text-white">Fhinovax AI Intake Agent</h2>
                   <p className="text-[10px] text-green-400 font-mono tracking-widest uppercase">Online & Ready</p>
                 </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">✕</button>
           </header>
           
           <div className="flex-1 overflow-y-auto p-4 md:p-8 max-w-3xl mx-auto w-full flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-brand-gold bg-brand-gold/10 shrink-0 flex items-center justify-center pt-1">✨</div>
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-sm text-slate-200 text-sm">
                  Hello! I am your Fhinovax Virtual Receptionist. I can help document exactly what you need and pass it instantly to our human experts. <br/><br/>
                  Are you looking for Academic assistance, Government forms, or General Digital work today?
                </div>
              </div>
              
              <div className="flex gap-4 justify-end">
                <div className="bg-brand-blue p-4 rounded-2xl rounded-tr-sm text-white text-sm shadow-md">
                  I need to write a CV and a Cover Letter for a bank job.
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-700 shrink-0 flex items-center justify-center pt-1">👤</div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-brand-gold bg-brand-gold/10 shrink-0 flex items-center justify-center pt-1">✨</div>
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-sm text-slate-200 text-sm flex flex-col gap-3 border border-brand-gold/20">
                  <p>Absolutely, I can help you set up an order for our **CV & Resume Writing** service!</p>
                  <p className="text-slate-400 italic">Please upload your current outdated CV, or type out a brief list of your employment history here, and I will attach it to the job file for our writers.</p>
                  <button className="flex items-center justify-center gap-2 w-full py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition mt-2">
                     <span className="text-lg">📎</span> Upload Current CV (PDF)
                  </button>
                </div>
              </div>
           </div>

           <div className="p-4 border-t border-white/10 bg-slate-900 max-w-4xl mx-auto w-full">
              <div className="relative">
                 <input type="text" placeholder="Type your response here..." className="w-full bg-slate-950 border border-white/10 rounded-full py-4 pl-6 pr-16 text-white focus:outline-none focus:border-brand-gold/50 transition" />
                 <button className="absolute right-2 top-2 bottom-2 aspect-square bg-brand-blue rounded-full text-white flex items-center justify-center hover:bg-brand-blue-dark transition">
                    ↑
                 </button>
              </div>
              <div className="text-center mt-2">
                 <p className="text-[10px] text-slate-500">AI collects information only. A human expert will complete your requested task.</p>
              </div>
           </div>
         </div>
      )}
    </div>
  );
}
