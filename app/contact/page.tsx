"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Phone, Clock, MapPin, ShieldCheck, FileCheck2, Hammer, ArrowUpRight, UploadCloud, Send } from "lucide-react";
import CmykBar from "@/components/CmykBar";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  // Animation Variant Orchestrators
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.02 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 16 } 
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white antialiased selection:bg-indigo-600 selection:text-white">
      {/* GLOBAL NAVIGATION LAYER */}
      <Navbar />

      {/* HEADER SECTION: PRESS CALIBRATION HERO */}
      <header className="pt-28 border-b border-zinc-200/80 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <CmykBar />
        </div>
        <div className="absolute -top-24 right-0 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-mono font-black tracking-widest uppercase shadow-sm border border-indigo-100/30 dark:border-indigo-900/30"
          >
            <Hammer className="w-4 h-4 text-indigo-500" /> Job Entry Protocol
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black text-4xl tracking-tight sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white max-w-4xl leading-none"
          >
            Request a Production Quote
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="max-w-3xl text-sm sm:text-base lg:text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed"
          >
            Provide your exact dimensions, target substrates, and run parameters. A dedicated production estimator will evaluate file diagnostics and issue complete pricing layouts within one business day.
          </motion.p>
        </div>
      </header>

      {/* INTERACTIVE WORKSPACE LAYER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-8 lg:grid-cols-[1.6fr_1fr] items-start"
        >
          
          {/* LEFT AXIS: INLINE STYLED FORM COMPONENT */}
          <motion.div 
            variants={itemVariants} 
            className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 sm:p-10 rounded-3xl shadow-sm space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800/80 pb-5">
              <h2 className="text-lg sm:text-xl font-black tracking-tight flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100">
                <FileCheck2 className="w-6 h-6 text-indigo-500" /> Operational Parameters
              </h2>
              <span className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-3 py-1 rounded-lg font-bold border border-zinc-200/40 dark:border-zinc-700/40 w-fit">
                SYSTEM ID: DISPATCH_REV_3
              </span>
            </div>

            {/* FORM PIPELINE INPUT MATRIX */}
            <form className="space-y-6 text-sm sm:text-base font-medium" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-bold text-zinc-700 dark:text-zinc-300">Company Name</label>
                  <input type="text" placeholder="Enterprise Group" className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="block font-bold text-zinc-700 dark:text-zinc-300">Contact Email</label>
                  <input type="email" placeholder="procurement@domain.com" className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block font-bold text-zinc-700 dark:text-zinc-300">Run Quantity</label>
                  <input type="number" placeholder="5000" className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono" />
                </div>
                <div className="space-y-2">
                  <label className="block font-bold text-zinc-700 dark:text-zinc-300">Target Substrate</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-zinc-500 font-mono">
                    <option>Premium Kraft Board</option>
                    <option>Coated SBS Art Card</option>
                    <option>Corrugated Flute Array</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block font-bold text-zinc-700 dark:text-zinc-300">Finish Matrix</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-zinc-500 font-mono">
                    <option>Matte Soft-Touch Foil</option>
                    <option>High Gloss Selective Spot UV</option>
                    <option>Bespoke Blind Debossing</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-bold text-zinc-700 dark:text-zinc-300">Production Engineering Blueprint Notes</label>
                <textarea rows={4} placeholder="Specify architectural sizing matrices, internal corrugate lock configurations, or exact Pantone matching settings..." className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all leading-relaxed" />
              </div>

              {/* Vector File Intake Box */}
              <div className="border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-950/30 rounded-2xl p-6 text-center space-y-2 hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors group cursor-pointer">
                <UploadCloud className="w-8 h-8 mx-auto text-zinc-400 group-hover:text-indigo-500 transition-colors" />
                <span className="block font-bold text-zinc-700 dark:text-zinc-300">Drop engineering assets or vectors here</span>
                <span className="block text-xs font-mono text-zinc-400">Supported formats: PDF, AI, CAD, DXF (Max 45MB)</span>
              </div>

              {/* IMAGE-ACCURATE DESIGNED BUTTON */}
              <div className="pt-2">
                <button type="submit" className="w-full bg-[rgb(79,70,229)] text-white text-sm sm:text-base font-bold tracking-tight text-center py-4 px-6 rounded-2xl hover:bg-[rgb(67,56,202)] transition-all flex items-center justify-center gap-2 shadow-md shadow-indigo-600/10 group">
                  Transmit Spec Payload <span className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* RIGHT AXIS: TECHNICAL SPECIFICATION TICKET (CONTACT DETS) */}
          <motion.aside variants={itemVariants} className="space-y-6 lg:sticky lg:top-32">
            
            {/* Direct Comms Ticket Panel */}
            <div className="border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500" />
              
              <div className="border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-6">
                <span className="block text-xs font-mono font-black uppercase tracking-widest text-zinc-400 mb-1">Routing Node</span>
                <h3 className="text-base font-black text-zinc-900 dark:text-white uppercase tracking-tight flex items-center justify-between">
                  Direct Comms Routing <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
              </div>

              <ul className="space-y-5 font-medium">
                {[
                  { icon: Mail, label: "Digital File Desk", value: "hello@fastprintpack.com", href: "mailto:hello@fastprintpack.com" },
                  { icon: Phone, label: "Voice Operations", value: "+1 (555) 019-2044", href: "tel:+15550192044" },
                  { icon: Clock, label: "Press Windows", value: "Mon–Fri, 7am–6pm EST", href: null },
                  { icon: MapPin, label: "Physical Dock", value: "142 Corrugate Row, Unit 4\nSpringvale Industrial Park", href: null }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-4 border-b border-zinc-100 dark:border-zinc-800/40 pb-4 last:border-b-0 last:pb-0">
                      <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-500 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40 transition-all shrink-0 shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 flex-1 min-w-0 pt-0.5">
                        <span className="block text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="block font-mono font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate">
                            {item.value}
                          </a>
                        ) : (
                          <span className="block font-mono font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200 whitespace-pre-line leading-relaxed">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Sub-Card Reassurance Ecosystem */}
            <div className="bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden space-y-4 shadow-md group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="p-2 bg-zinc-800 rounded-xl border border-zinc-700 text-indigo-400 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-wider text-zinc-100">Preflight Reassurance</h4>
              </div>
              <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                Every print layout matrix parameter is automatically audited prior to press setup routines to ensure total structural compliance.
              </p>
            </div>

          </motion.aside>
        </motion.div>
      </main>
    </div>
  );
}