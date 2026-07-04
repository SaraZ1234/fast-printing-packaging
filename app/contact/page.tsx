"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin, ShieldCheck, FileCheck2, Hammer, HelpCircle } from "lucide-react";
import CmykBar from "@/components/CmykBar";
import QuoteForm from "@/components/QuoteForm";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  // Animation Variant Orchestrators
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white antialiased selection:bg-indigo-600 selection:text-white">
      {/* GLOBAL NAVIGATION LAYER */}
      <Navbar />

      {/* HEADER SECTION: PRESS CALIBRATION HERO */}
      <header className="pt-36 border-b border-zinc-200/80 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0">
          <CmykBar />
        </div>
        <div className="absolute -top-24 right-0 w-96 h-96 bg-indigo-600/5 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-16 space-y-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase"
          >
            <Hammer className="w-3 h-3" /> Job Entry Protocol
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-black text-4xl tracking-tight sm:text-6xl text-zinc-900 dark:text-white max-w-3xl leading-none"
          >
            Request a Production Quote
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed"
          >
            Provide your exact dimensions, target substrates, and run parameters. A dedicated production estimator will evaluate file diagnostics and issue complete pricing layouts within one business day.
          </motion.p>
        </div>
      </header>

      {/* INTERACTIVE WORKSPACE LAYER */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-start"
        >
          
          {/* LEFT AXIS: PREMIUM TICKET MANIFEST (FORM INPUT) */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10 rounded-3xl shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
              <h2 className="text-lg font-black tracking-tight flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-indigo-500" /> Operational Parameters
              </h2>
              <span className="text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded font-bold">
                SYSTEM ID: DISPATCH_REV_3
              </span>
            </div>
            <QuoteForm />
          </motion.div>

          {/* RIGHT AXIS: TECHNICAL SPECIFICATION TICKET (CONTACT DETS) */}
          <motion.aside variants={itemVariants} className="space-y-6 lg:sticky lg:top-32">
            
            {/* The Job Ticket Panel */}
            <div className="crop-marks border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500" />
              
              <div className="border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-5">
                <span className="block text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400">Routing Node</span>
                <h3 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-tight">Direct Comms Routing</h3>
              </div>

              <ul className="space-y-4 font-medium">
                {[
                  { icon: Mail, label: "Digital File Desk", value: "hello@fastprintpack.com", href: "mailto:hello@fastprintpack.com" },
                  { icon: Phone, label: "Voice Operations", value: "+1 (555) 019-2044", href: "tel:+15550192044" },
                  { icon: Clock, label: "Press Windows", value: "Mon–Fri, 7am–6pm EST", href: null },
                  { icon: MapPin, label: "Physical Dock", value: "142 Corrugate Row, Unit 4\nSpringvale Industrial Park", href: null }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-4 text-xs border-b border-zinc-100 dark:border-zinc-800/40 pb-3 last:border-b-0 last:pb-0">
                      <div className="w-7 h-7 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-500 transition-colors shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <span className="block text-[9px] font-mono font-bold tracking-wider text-zinc-400 uppercase">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="block font-mono font-bold text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate">
                            {item.value}
                          </a>
                        ) : (
                          <span className="block font-mono font-bold text-zinc-800 dark:text-zinc-200 whitespace-pre-line leading-relaxed">
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
            <div className="bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 text-white p-6 rounded-3xl relative overflow-hidden space-y-4 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-zinc-800 rounded-lg border border-zinc-700 text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider">Preflight Reassurance</h4>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
                Every print layout matrix parameters are automatically audited prior to press setup routines to ensure total structural compliance.
              </p>
            </div>

          </motion.aside>
        </motion.div>
      </main>
    </div>
  );
}