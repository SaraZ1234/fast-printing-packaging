"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2, Layers, Sparkles, Truck } from "lucide-react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    service: "digital-printing",
    product: "business-cards",
    quantity: 1000,
    paperStock: "32pt-silk",
    finishing: "spot-uv",
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(340);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate a premium algorithmic server calculation delay
    setTimeout(() => {
      const basePrice = formData.service === "offset-printing" ? 0.15 : 0.25;
      const finishingAddon = formData.finishing === "none" ? 0 : 0.08;
      const calculated = Math.round(formData.quantity * (basePrice + finishingAddon));
      
      setEstimatedCost(calculated);
      setIsCalculating(false);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Instant Cost Engine
          </span>
          <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Configure Production Run
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Select materials, structural finishes, and item volume metrics to instantly forecast your enterprise job costing parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Interactive Form Panel */}
          <form onSubmit={handleCalculate} className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800 space-y-6 shadow-sm">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Production Line</label>
                <select 
                  value={formData.service} 
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-indigo-600 text-zinc-900 dark:text-zinc-100"
                >
                  <option value="digital-printing">Digital Printing (Short Run)</option>
                  <option value="offset-printing">Commercial Offset Printing (Bulk)</option>
                  <option value="screen-printing">Screen Printing</option>
                  <option value="large-format">Large Format Signage</option>
                  <option value="flexography">Flexography Roll Processing</option>
                </select>
              </div>

              {/* Product Profile */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Product Catalog Target</label>
                <select 
                  value={formData.product} 
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-indigo-600 text-zinc-900 dark:text-zinc-100"
                >
                  <option value="business-cards">Premium Business Cards</option>
                  <option value="custom-boxes">Custom Packaging Boxes</option>
                  <option value="stickers-labels">Product Labels & Stickers</option>
                  <option value="shopping-bags">Shopping Bags & Pouches</option>
                  <option value="marketing-brochures">Brochures & Booklets</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Paper Substrates */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Material Substrate Weight</label>
                <select 
                  value={formData.paperStock} 
                  onChange={(e) => setFormData({...formData, paperStock: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-indigo-600 text-zinc-900 dark:text-zinc-100"
                >
                  <option value="14pt-matte">14pt Ultra-Matte Uncoated</option>
                  <option value="16pt-gloss">16pt High-Gloss Premium</option>
                  <option value="32pt-silk">32pt Premium Silk Layer Board</option>
                  <option value="kraft-eco">FSC Certified Eco-Kraft Board</option>
                </select>
              </div>

              {/* Specialized Finishing treatment */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Surface Treatment Treatment</label>
                <select 
                  value={formData.finishing} 
                  onChange={(e) => setFormData({...formData, finishing: e.target.value})}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 text-sm focus:outline-none focus:border-indigo-600 text-zinc-900 dark:text-zinc-100"
                >
                  <option value="none">Standard Clean Cut (No Treatment)</option>
                  <option value="spot-uv">Raised Spot UV Embellishment</option>
                  <option value="foil-stamp">Metallic Foil Stamping</option>
                  <option value="emboss">Structural Embossing / Debossing</option>
                </select>
              </div>
            </div>

            {/* Target Volume Quantity slider input */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Target Production Volume</label>
                <span className="text-lg font-black text-indigo-600 dark:text-indigo-400 font-mono">{formData.quantity.toLocaleString()} units</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="25000" 
                step="100"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
                className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 font-bold">
                <span>100 MIN</span>
                <span>5,000</span>
                <span>10,000</span>
                <span>25,000 MAX TIER</span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isCalculating}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/10 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Calculator className="w-4 h-4" /> {isCalculating ? "Calculating Spec Engine..." : "Analyze Production Configuration"}
            </button>
          </form>

          {/* Pricing Response Sidebar Panel */}
          <div className="bg-zinc-900 text-white p-8 rounded-3xl border border-zinc-800 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent pointer-events-none" />
            
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Live Configuration Invoice</h3>
            
            <div className="pt-4 pb-2 border-b border-zinc-800 space-y-4">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Substrate Run Volume</span>
                <span className="font-bold text-zinc-200">{formData.quantity.toLocaleString()} pcs</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Color/G7 Proofing</span>
                <span className="font-bold text-emerald-400">Included (Free)</span>
              </div>
            </div>

            <div className="py-2">
              <span className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Estimated Cost Framework</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black tracking-tight text-white">${estimatedCost ?? "---"}</span>
                <span className="text-xs font-bold text-zinc-500">USD</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-zinc-400 border-t border-zinc-800">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Dispatch estimated within 3–5 working days.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Bulk discounts automatically computed.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}