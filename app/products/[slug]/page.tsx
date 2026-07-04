"use client";
import React, { useState, useMemo } from "react";
import { notFound } from "next/navigation";
import { productsData } from "../../data/siteData";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight, Box, Sparkles } from "lucide-react";

// FIX: Changed from a named import to a default import to match your file setup
import Navbar from "../../../components/Navbar";

interface ProductSchema {
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  basePrice?: string;
  specs?: {
    sizes?: string[];
    papers?: string[];
    finishes?: string[];
    corners?: string[];
  };
  pricingMatrix?: {
    qty250?: string;
    qty500?: string;
    qty1000?: string;
    qty2000?: string;
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product: ProductSchema | undefined = productsData[slug];
  
  const [selectedQty, setSelectedQty] = useState<number>(250);
  const [activeTab, setActiveTab] = useState<"specs" | "pricing" | "categories">("specs");

  const displayProduct = useMemo(() => {
    if (product) return product;

    const cleanTitle = slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      title: cleanTitle,
      tagline: "Premium High-End Stationery System Assets",
      description: `Professional premium corporate custom components tailored and printed for enterprise brand infrastructure runs.`,
      features: ["Premium business stock baselines", "Precision accurate color calibration setups", "Bespoke customizable formatting setups"],
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800",
      specs: {
        sizes: ["Standard Production Format Sizes", "Bespoke Cut Dimensions Available"],
        papers: ["100gsm Fine Premium Laser stock", "Luxury Textured Board Stocks"],
        finishes: ["Uncoated Classic Executive Texture", "Spot High-Definition UV Accents"],
        corners: ["Precision Square Guillotine Edge Cuts"]
      }
    };
  }, [product, slug]);

  const dynamicPriceRange = useMemo(() => {
    if (product?.pricingMatrix) {
      if (selectedQty === 250) return product.pricingMatrix.qty250 || "PKR 3,000 - 5,000";
      if (selectedQty === 500) return product.pricingMatrix.qty500 || "PKR 5,000 - 8,000";
      if (selectedQty === 1000) return product.pricingMatrix.qty1000 || "PKR 8,000 - 12,000";
      if (selectedQty === 2000) return product.pricingMatrix.qty2000 || "PKR 14,000 - 20,000";
    }
    
    const scalarMap: Record<string, number> = {
      "letterheads": 1.2, "envelopes": 1.0, "presentation-folders": 2.2, "business-cards": 1.0
    };
    const multiplier = scalarMap[slug] || 1.5;

    switch(selectedQty) {
      case 500: return `PKR ${(5000 * multiplier).toLocaleString()} - ${(8000 * multiplier).toLocaleString()}`;
      case 1000: return `PKR ${(8000 * multiplier).toLocaleString()} - ${(12000 * multiplier).toLocaleString()}`;
      case 2000: return `PKR ${(14000 * multiplier).toLocaleString()} - ${(20000 * multiplier).toLocaleString()}`;
      default: return `PKR ${(3000 * multiplier).toLocaleString()} - ${(5000 * multiplier).toLocaleString()}`;
    }
  }, [selectedQty, product, slug]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white antialiased selection:bg-indigo-600 selection:text-white">
      
      {/* GLOBAL HEADER ROUTE INJECTION */}
      <Navbar />

      {/* DYNAMIC WORKSPACE BODY CONTAINER */}
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/products" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-indigo-600 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Catalog
          </Link>
        </motion.div>

        {/* SECTION 1: COMPONENT IDENTITY CONTROLLER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* VISUAL ENGINE ASSET PREVIEW WRAPPER */}
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center p-4 shadow-sm group">
            <div className="absolute top-4 left-4 bg-indigo-600 text-white font-black uppercase text-[9px] tracking-widest px-2.5 py-1 rounded shadow-sm flex items-center gap-1 z-10">
              <Sparkles className="w-3 h-3" /> Best Seller
            </div>
            {displayProduct.image ? (
              <img 
                src={displayProduct.image} 
                alt={displayProduct.title} 
                className="object-cover w-full h-full rounded-2xl transform scale-100 group-hover:scale-102 transition-transform duration-500"
              />
            ) : (
              <div className="text-center space-y-2">
                <Box className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mx-auto" />
                <span className="text-[10px] text-zinc-400 font-mono block">Asset Rendering Terminal</span>
              </div>
            )}
          </div>

          {/* DYNAMIC ENGINE CONTROLS TERMINAL */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                {displayProduct.title}
              </h1>
              <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-bold tracking-tight">
                {displayProduct.tagline}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                {displayProduct.description}
              </p>
            </div>

            {/* PRODUCT UNIQUE ATTRIBUTE MATRIX */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-4">
              {displayProduct.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* QUANTITY CONDUIT INTERACTIVE CONTROL PANEL */}
            <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-[9px] font-black uppercase tracking-widest text-zinc-400">Select Volume Tier</label>
                <div className="flex gap-1.5 flex-wrap">
                  {[250, 500, 1000, 2000].map((qty) => (
                    <button 
                      key={qty} onClick={() => setSelectedQty(qty)}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border transition-all ${
                        selectedQty === qty 
                          ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/10" 
                          : "bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800 text-zinc-500 hover:border-zinc-300"
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-400">Price Range ({selectedQty} units)</span>
                <span className="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400">{dynamicPriceRange}</span>
                <span className="text-[9px] text-zinc-400 font-medium block pt-0.5">* Prices may vary based on customization options</span>
              </div>
            </div>

            {/* FINISHING INTERACTIVE CONFIGURATION SUMMARY */}
            <div className="space-y-2">
              <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-400">Finishing Options Available</span>
              <div className="flex flex-wrap gap-1 text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-300">
                {(displayProduct.specs?.finishes || []).map((finish) => (
                  <span key={finish} className="bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md border border-zinc-200/60 dark:border-zinc-700/60">{finish}</span>
                ))}
              </div>
            </div>

            {/* ROUTING BUTTON TRIGGERS */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href={`/quote?product=${slug}`} className="flex-1 bg-indigo-600 border border-indigo-500 text-white text-xs font-black uppercase tracking-widest text-center py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/10 flex items-center justify-center gap-1.5">
                Get Custom Quote
              </Link>
              <Link href={`/samples?target=${slug}`} className="flex-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-black uppercase tracking-widest text-center py-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700/60 transition-all flex items-center justify-center gap-1.5">
                Request Samples
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 2: SPECIFICATION METRIC ENGINE TAB PANELS */}
        <div className="space-y-6">
          <div className="flex border-b border-zinc-200/60 dark:border-zinc-800 gap-4 overflow-x-auto">
            {(["specs", "pricing", "categories"] as const).map((tab) => (
              <button
                key={tab} onClick={() => setActiveTab(tab)}
                className={`pb-3 text-xs font-black uppercase tracking-widest border-b-2 transition-all shrink-0 ${
                  activeTab === tab ? "border-indigo-600 text-indigo-600 dark:text-indigo-400" : "border-transparent text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {tab === "specs" && "Product Specifications"}
                {tab === "pricing" && "Bulk Pricing Matrix"}
                {tab === "categories" && "System Customization Profiles"}
              </button>
            ))}
          </div>

          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                
                {activeTab === "specs" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <div className="space-y-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm">
                      <h4 className="font-black text-zinc-900 dark:text-white uppercase tracking-wider text-[11px]">Sizes & Outlines</h4>
                      <div className="space-y-1 text-zinc-500">
                        {(displayProduct.specs?.sizes || []).map((sz, idx) => (
                          <p key={idx}>• {sz}</p>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm">
                      <h4 className="font-black text-zinc-900 dark:text-white uppercase tracking-wider text-[11px]">Paper Stock Selection</h4>
                      <div className="space-y-1 text-zinc-500">
                        {(displayProduct.specs?.papers || []).map((paper, idx) => (
                          <p key={idx}>• {paper}</p>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm">
                      <h4 className="font-black text-zinc-900 dark:text-white uppercase tracking-wider text-[11px]">Finishing Options</h4>
                      <div className="space-y-1 text-zinc-500">
                        {(displayProduct.specs?.finishes || []).map((fn, idx) => (
                          <p key={idx}>• {fn}</p>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm">
                      <h4 className="font-black text-zinc-900 dark:text-white uppercase tracking-wider text-[11px]">Precision Geometry</h4>
                      <div className="space-y-1 text-zinc-500">
                        {(displayProduct.specs?.corners || []).map((cr, idx) => (
                          <p key={idx}>• {cr}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "pricing" && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    {[
                      { qty: "250 Units", key: "qty250", initialValue: "3,000 - 5,000" },
                      { qty: "500 Units", key: "qty500", initialValue: "5,000 - 8,000" },
                      { qty: "1000 Units", key: "qty1000", initialValue: "8,000 - 12,000" },
                      { qty: "2000 Units", key: "qty2000", initialValue: "14,000 - 20,000" }
                    ].map((tier) => {
                      const scalarMap: Record<string, number> = { "letterheads": 1.2, "envelopes": 1.0, "presentation-folders": 2.2, "business-cards": 1.0 };
                      const multiplier = scalarMap[slug] || 1.5;
                      
                      let displayPrice = `PKR ${tier.initialValue}`;
                      if (product?.pricingMatrix) {
                        displayPrice = (product.pricingMatrix as any)[tier.key] || displayPrice;
                      } else {
                        if (tier.key === "qty250") displayPrice = `PKR ${(3000 * multiplier).toLocaleString()} - ${(5000 * multiplier).toLocaleString()}`;
                        if (tier.key === "qty500") displayPrice = `PKR ${(5000 * multiplier).toLocaleString()} - ${(8000 * multiplier).toLocaleString()}`;
                        if (tier.key === "qty1000") displayPrice = `PKR ${(8000 * multiplier).toLocaleString()} - ${(12000 * multiplier).toLocaleString()}`;
                        if (tier.key === "qty2000") displayPrice = `PKR ${(14000 * multiplier).toLocaleString()} - ${(20000 * multiplier).toLocaleString()}`;
                      }

                      return (
                        <div key={tier.key} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col justify-between">
                          <span className="block font-mono font-bold text-xs text-zinc-400 uppercase tracking-widest">{tier.qty}</span>
                          <span className="block font-mono font-black text-base text-indigo-600 dark:text-indigo-400 mt-2">{displayPrice}</span>
                          <span className="text-[9px] text-zinc-400 block pt-1">* Prices variable on options</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {activeTab === "categories" && (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      { type: "BY FINISH", rate: "From PKR 4,000", items: "Matte / Gloss / Spot UV" },
                      { type: "BY PAPER", rate: "From PKR 3,500", items: "Kraft / Art Card / Premium" },
                      { type: "BY COLOUR", rate: "From PKR 3,800", items: "Full Color / B&W / Pantone" },
                      { type: "BY SHAPE", rate: "From PKR 4,200", items: "Standard / Custom / Die-Cut" },
                      { type: "GUIDE DOCUMENT", rate: "From PKR 3,000", items: "Design / Specs / Preflight Specs" }
                    ].map((cat, i) => (
                      <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 rounded-xl text-xs space-y-1 shadow-sm">
                        <span className="block font-black text-[10px] text-zinc-400 tracking-wider">{cat.type}</span>
                        <span className="block font-mono font-bold text-indigo-600 dark:text-indigo-400 text-[11px]">{cat.rate}</span>
                        <p className="text-zinc-500 font-medium text-[11px] pt-1">{cat.items}</p>
                      </div>
                    ))}
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* SECTION 3: SYSTEM CONGRUENT STATIONERY ITEMS */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-zinc-400 block">Complete Station Layout</span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Related Production Signatures</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { id: "letterheads", title: "Letterheads", desc: "Professional letterheads tailored for clean official corporate correspondence.", price: "From PKR 5,000" },
              { id: "envelopes", title: "Envelopes", desc: "Custom printed business envelopes optimized across various dimensions.", price: "From PKR 4,000" },
              { id: "presentation-folders", title: "Presentation Folders", desc: "Heavy architectural presentation folders built securely for asset proposals.", price: "From PKR 8,000" }
            ].map((related) => (
              <div key={related.id} className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="space-y-1.5">
                  <h4 className="font-black text-zinc-900 dark:text-white tracking-tight text-base">{related.title}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{related.desc}</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-3">
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">{related.price}</span>
                  <Link href={`/products/${related.id}`} className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1 hover:text-indigo-500 transition-colors">
                    Configure <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PRODUCTION TERMINAL SYSTEM CLOSURE (CALL TO ACTION) */}
        <section className="bg-zinc-900 text-white p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 max-w-xl relative z-10">
            <h2 className="text-2xl font-black tracking-tight">Ready to Get Started?</h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">Request an engineering run quote for {displayProduct.title} and we'll help you execute production flawlessly.</p>
          </div>
          <div className="flex gap-3 shrink-0 relative z-10">
            <Link href={`/quote?product=${slug}`} className="bg-indigo-600 border border-indigo-500 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-600/20">
              Get Custom Quote
            </Link>
            <Link href="/contact" className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-zinc-800 transition-all">
              Contact Us
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}