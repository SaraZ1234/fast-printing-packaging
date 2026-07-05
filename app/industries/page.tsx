"use client";
import React, { useState, useId } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Building2, ShieldAlert, Utensils, Laptop,
  ShoppingBag, Briefcase, GraduationCap, Sparkles,
  Cpu, Layers, ShieldCheck, Truck
} from "lucide-react";

// Global navigation header component injection
import Navbar from "@/components/Navbar";

const industryItems = [
  { id: "schools-education", name: "Schools & Education", icon: GraduationCap, tier: "Institutional", desc: "Custom student handbooks, campus banners, academic journals, and promotional stationery kits." },
  { id: "healthcare-medicare", name: "Healthcare & Medicare", icon: ShieldAlert, tier: "Compliance-Grade", desc: "FDA-compliant medical packaging, sterile sample kits, instruction booklets, and dynamic labeling." },
  { id: "restaurants-food", name: "Restaurants & Food", icon: Utensils, tier: "Commercial", desc: "Grease-resistant food sleeves, takeout boxes, custom menus, and branded food-grade wraps." },
  { id: "retail-ecommerce", name: "Retail & E-commerce", icon: ShoppingBag, tier: "Enterprise-Scale", desc: "Crush-resistant custom corrugated mailers, luxury product display boxes, and customized tissue paper." },
  { id: "corporate-business", name: "Corporate & Business", icon: Briefcase, tier: "Institutional", desc: "High-end corporate stationery, premium business cards, foil-stamped presentation folders, and annual reports." },
  { id: "events-hospitality", name: "Events & Hospitality", icon: Sparkles, tier: "Commercial", desc: "Premium badges, event step-and-repeat backdrops, custom table tents, and artisanal invitation suites." },
  { id: "technology-startups", name: "Technology & Startups", icon: Laptop, tier: "Enterprise-Scale", desc: "Sleek, minimalist unboxing solutions for electronic hardware, subscription boxes, and software launch collateral." },
  { id: "fashion-apparel", name: "Fashion and Apparel", icon: Building2, tier: "Enterprise-Scale", desc: "Heavyweight branded hangtags, embossed rigid retail gift boxes, and eco-friendly shopping bags." }
];

const workflowSteps = [
  { step: "01", title: "Structural Blueprinting", icon: Cpu, desc: "We map physical dimensions, load vectors, and component spacing tolerances natively." },
  { step: "02", title: "Substrate Calibration", icon: Layers, desc: "Selecting custom paperboard, eco-friendly laminates, or synthetic fibers based on real-world use." },
  { step: "03", title: "Press Optimization", icon: ShieldCheck, desc: "High-definition offset engineering matching micro-calibrated color profiles flawlessly." },
  { step: "04", title: "Fulfillment Routing", icon: Truck, desc: "Staged mass batch processing and secure container dispatches direct to distribution centers." }
];

const FILTER_TIERS = ["ALL", "Enterprise-Scale", "Compliance-Grade", "Commercial", "Institutional"] as const;
type Tier = typeof FILTER_TIERS[number];

// Motion layout orchestrators
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } }
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const REVEAL: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const REVEAL_STAGGER: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function IndustriesPage() {
  const [activeFilter, setActiveFilter] = useState<Tier>("ALL");
  const prefersReducedMotion = useReducedMotion();
  const resultsId = useId();

  const filteredSectors = industryItems.filter(item =>
    activeFilter === "ALL" ? true : item.tier === activeFilter
  );

  const revealProps = prefersReducedMotion
    ? { initial: "visible" as const, animate: "visible" as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-80px" } };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white antialiased selection:bg-indigo-600 selection:text-white">

      {/* GLOBAL ENTERPRISE LAYER HEADER */}
      <Navbar />

      <main className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* SECTION 1: HERO DYNAMICS TITLE */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto space-y-6 pt-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-indigo-600 dark:text-indigo-400 text-xs font-black tracking-widest uppercase">
            Market Integration Matrix
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[0.95]">
            Tailored Industry Solutions
          </h1>
          <p className="text-base sm:text-xl text-zinc-500 dark:text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed">
            We engineer premium, high-performance print collateral and compliance-grade structural packaging tailored cleanly to match your operational scales.
          </p>

          {/* Interactive Filtering Tabs */}
          <div
            role="group"
            aria-label="Filter industries by tier"
            className="pt-6 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
          >
            {FILTER_TIERS.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeFilter === category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-950 ${
                  activeFilter === category
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* SECTION 2: DYNAMIC INDUSTRIAL GRID LAYOUT */}
        <div className="space-y-4">
          <p id={resultsId} aria-live="polite" className="text-center text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
            Showing {filteredSectors.length} of {industryItems.length} sector profiles
          </p>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            animate="show"
            layout={!prefersReducedMotion}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSectors.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={cardItemVariants}
                    layout={!prefersReducedMotion}
                    whileHover={prefersReducedMotion ? undefined : { y: -6, transition: { duration: 0.15 } }}
                    className="group bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-800/60 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                          <IconComponent className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 px-2.5 py-1 rounded uppercase">
                          {item.tier}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-black text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/60 mt-6 flex items-center justify-between">
                      <Link
                        href={`/industries/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900"
                      >
                        Case Studies
                      </Link>
                      <ArrowRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700 transform group-hover:translate-x-1 group-hover:text-indigo-500 transition-all" aria-hidden="true" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredSectors.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl space-y-4">
              <p className="text-zinc-400 font-mono text-xs sm:text-base font-bold uppercase tracking-wider">No sector profiles matched this tier.</p>
              <button
                type="button"
                onClick={() => setActiveFilter("ALL")}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm px-1"
              >
                Show all sectors
              </button>
            </div>
          )}
        </div>

        {/* SECTION 3: SYSTEM INTEGRITY / PERFORMANCE STATISTICS CONTAINER */}
        <motion.section
          {...revealProps}
          variants={REVEAL}
          className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-zinc-100 dark:divide-zinc-800"
        >
          {[
            { metric: "99.4%", title: "Color Match Calibration", desc: "Spectrophotometer verification vectors across system runs." },
            { metric: "24-48 HR", title: "Rapid Preflight Turnaround", desc: "Automated preflight file diagnostics and architectural softproofing." },
            { metric: "100% Eco", title: "Sustainable Substrates", desc: "FSC certified printing materials and soy-based non-toxic inks." },
            { metric: "Enterprise", title: "Scale Fluidity Platforms", desc: "Capable of handling single customized runs to 1,000,000+ output lots." }
          ].map((stat, i) => (
            <div key={i} className={`space-y-2.5 ${i > 0 ? "pt-6 sm:pt-0 lg:pl-8" : ""}`}>
              <span className="block font-mono text-4xl lg:text-5xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">{stat.metric}</span>
              <h4 className="font-black text-xs text-zinc-900 dark:text-white uppercase tracking-wider">{stat.title}</h4>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </motion.section>

        {/* SECTION 4: PRODUCTION WORKFLOW ENGINE PIPELINE */}
        <motion.section {...revealProps} variants={REVEAL_STAGGER} className="space-y-12">
          <motion.div variants={REVEAL} className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase block">Engine Deployment Pipeline</span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">Our Manufacturing Framework</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={idx}
                  variants={REVEAL}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80 p-6 sm:p-8 rounded-2xl relative space-y-4 shadow-inner hover:border-indigo-300 dark:hover:border-indigo-800/60 hover:shadow-md transition-[border-color,box-shadow]"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      <StepIcon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-sm font-black text-zinc-300 dark:text-zinc-700">{step.step}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-base sm:text-lg text-zinc-900 dark:text-white tracking-tight">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* SECTION 5: MASTER CLOSURE CALL TO ACTION (CTA) */}
        <motion.section
          {...revealProps}
          variants={REVEAL}
          className="bg-zinc-900 border border-zinc-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-4 max-w-2xl relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">Looking for a Dedicated Corporate Printing Framework?</h2>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              Connect with our solutions specialists to build centralized print deployment architectures tailored specifically for corporate branch systems.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full md:w-auto">
            <Link
              href="/quote"
              className="bg-indigo-600 border border-indigo-500 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 sm:py-4 rounded-xl hover:bg-indigo-700 text-center transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              Initialize Custom Setup
            </Link>
            <Link
              href="/contact"
              className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-black uppercase tracking-widest px-6 py-3.5 sm:py-4 rounded-xl hover:bg-zinc-800 text-center transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              Consult an Engineer
            </Link>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
