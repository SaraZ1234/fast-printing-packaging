"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, Sparkles, Layers, Search, Calculator, HelpCircle
} from "lucide-react";

// --- EXPANDED INDUSTRIAL DATA MATRIX ---
const productItems = [
  { id: "business-cards", name: "Premium Business Cards", desc: "Ultra-thick 32pt stocks, painted edges, raised spot UV, or silk finishes.", category: "Corporate Stationery", throughput: "12,000 units/hr", thickness: "16pt - 32pt Duplex", assetKey: "PR-BC", chemicalResistance: "High", optimalPress: "Heidelberg XL 106" },
  { id: "letterheads", name: "Executive Letterheads", desc: "Premium laser-safe textures engineered beautifully for corporate prestige.", category: "Corporate Stationery", throughput: "45,000 sheets/hr", thickness: "70lb - 24lb Bond", assetKey: "PR-LH", chemicalResistance: "Standard", optimalPress: "HP Indigo 12K" },
  { id: "envelopes", name: "Custom Envelopes", desc: "Peel-and-seal custom branded enclosures across standard and custom dimensions.", category: "Corporate Stationery", throughput: "25,000 units/hr", thickness: "60lb - 80lb Text", assetKey: "PR-ENV", chemicalResistance: "Standard", optimalPress: "Halm Jet Envelope" },
  { id: "marketing-brochures", name: "Marketing Brochures", desc: "Tri-fold, bi-fold, and multi-page roll fold architectural marketing assets.", category: "Marketing Materials", throughput: "8,500 signatures/hr", thickness: "80lb - 100lb Gloss", assetKey: "PR-BRC", chemicalResistance: "High (UV Coated)", optimalPress: "Heidelberg XL 106" },
  { id: "marketing-flyers", name: "High-Gloss Flyers", desc: "Vibrant high-speed flyers tailored accurately for heavy local outreach metrics.", category: "Marketing Materials", throughput: "18,000 runs/hr", thickness: "100lb Text Base", assetKey: "PR-FLY", chemicalResistance: "Standard", optimalPress: "Komori Lithrone" },
  { id: "large-format-posters", name: "High-Definition Posters", desc: "Photographic grade large format elements capturing deep color gamuts safely.", category: "Large Format", throughput: "1,200 sq ft/hr", thickness: "8mil - 12mil Photo Film", assetKey: "PR-PST", chemicalResistance: "Archival Safe", optimalPress: "EFI VUTEk h5" },
  { id: "large-format-banners", name: "Outdoor Durable Banners", desc: "Heavy-duty grommeted vinyl built safely to withstand seasonal outdoor variables.", category: "Large Format", throughput: "800 sq ft/hr", thickness: "13oz - 18oz Scrim Vinyl", assetKey: "PR-BNR", chemicalResistance: "Waterproof / UV Stable", optimalPress: "Roland TrueVIS" },
  { id: "custom-boxes", name: "Bespoke Structural Packaging", desc: "Corrugated mailers, rigid presentation structures, and retail product boxes.", category: "Packaging", throughput: "3,500 blanks/hr", thickness: "E-Flute to 40pt Rigid", assetKey: "PR-BOX", chemicalResistance: "High Crush Threshold", optimalPress: "Bobst Novacut" },
  { id: "stickers-labels", name: "Product Labels & Stickers", desc: "Die-cut roll labels, weatherproof vinyl formulations, and product seals.", category: "Packaging", throughput: "500 linear ft/min", thickness: "2.4mil BOPP Clear/White", assetKey: "PR-LBL", chemicalResistance: "Marine Grade (BS5609)", optimalPress: "Mark Andy P7" },
  { id: "shopping-bags", name: "Luxury Shopping Bags", desc: "Twisted-rope craft handles or elegant woven ribbons with reinforced bases.", category: "Packaging", throughput: "6,000 bags/hr", thickness: "150GSM - 210GSM Kraft", assetKey: "PR-BAG", chemicalResistance: "Standard", optimalPress: "Newlong Tube Assembler" },
  { id: "wedding-cards", name: "Artisanal Wedding Cards", desc: "Intricate laser-cut, foil stamped, or deeply debossed letterpress suites.", category: "Specialty Printing", throughput: "900 impressions/hr", thickness: "110lb - 220lb Cotton", assetKey: "PR-WTC", chemicalResistance: "Archival Premium", optimalPress: "Kluge / Letterpress" },
  { id: "custom-calendars", name: "Corporate Calendars", desc: "Saddle-stitched or twin-loop wire-o wall and desktop organizational items.", category: "Specialty Printing", throughput: "4,000 books/hr", thickness: "100lb Text / 12pt Cover", assetKey: "PR-CAL", chemicalResistance: "Standard", optimalPress: "Horizon StitchLiner" },
];

const CATEGORIES = ["All Systems", "Corporate Stationery", "Marketing Materials", "Large Format", "Packaging", "Specialty Printing"];

const TECHNICAL_FAQS = [
  { q: "What color management space profiles are required for submission?", a: "We require all print assets to be compiled natively within the CMYK color space matching GRACoL 2013 or Fogra 51 profiles. Vector-based spot colors should be called out utilizing explicit Pantone Matching System (PMS Coated) alphanumeric formulas." },
  { q: "How do your automated volume scale breaks function?", a: "Our platform features variable infrastructure routing. Smaller volumes are directed into digital electrophotographic lines (liquid toner arrays) to eliminate initial setup costs. Bulk runs are routed to multi-station lithographic presses, where unit economies scale down linearly as impressions expand." },
  { q: "Can we request structural custom CAD engineering dielines?", a: "Yes. Our brand identity and packaging architecture segments generate custom 3D parametric layouts in solid ArtiosCAD. Physical sample plotters can output an unprinted structural match mockup within 48 production hours." }
];

const SUBSTRATE_LIBRARY = [
  { name: "Sulfate Bleached Board (SBS)", gauge: "up to 24pt Caliper", application: "Premium Retail Cartons", environmental: "100% Recyclable / FSC Certified" },
  { name: "Biaxially-Oriented Polypropylene (BOPP)", gauge: "2.4 mil thickness", application: "Chemical Resistant Bottle Labels", environmental: "Water-inert Plastic Compound" },
  { name: "Uncalendered Virgin Cotton Rag", gauge: "110lb - 220lb Heavy Text", application: "Deep Platen Letterpress Debossing", environmental: "Tree-Free Bio Fiber Waste Recycled" },
  { name: "Coated One-Side (C1S) Litho Liner", gauge: "80lb - 100lb Cover Stock", application: "High-Gloss Corrugated Box Outer Wraps", environmental: "Sustainably Managed Forest Sourced" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Dynamic Quote Estimator Variables
  const [calcItem, setCalcItem] = useState("business-cards");
  const [calcVolume, setCalcVolume] = useState(1000);

  // Advanced Multi-Stage Filtering (Category + Live Text Search)
  const filteredProducts = useMemo(() => {
    return productItems.filter(item => {
      const matchesCategory = selectedCategory === "All Systems" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.assetKey.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Algorithmic Mock Price Calculation Component
  const calculatedEstimate = useMemo(() => {
    const baselineRates: Record<string, number> = {
      "business-cards": 0.18, "letterheads": 0.09, "envelopes": 0.12, 
      "marketing-brochures": 0.35, "marketing-flyers": 0.07, "large-format-posters": 4.50,
      "large-format-banners": 12.00, "custom-boxes": 1.45, "stickers-labels": 0.04,
      "shopping-bags": 1.10, "wedding-cards": 2.25, "custom-calendars": 3.40
    };
    const rate = baselineRates[calcItem] || 0.10;
    const volumeFactor = calcVolume > 5000 ? 0.65 : calcVolume > 2500 ? 0.80 : calcVolume > 1000 ? 0.90 : 1.0;
    return (calcVolume * rate * volumeFactor).toFixed(2);
  }, [calcItem, calcVolume]);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-24 pb-24 antialiased selection:bg-indigo-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* SECTION 1: MASTER COMMAND HERO */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Enterprise Fleet Deployment
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-zinc-900 dark:text-white">
            Industrial Printing & Packaging Inventory
          </h1>
          <p className="text-base sm:text-xl text-zinc-500 dark:text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed">
            Deploy workflows, verify dynamic material calibrations, filter across physical system groups, or process instantaneous automated run-rate estimations down to mill-inch variables.
          </p>

          {/* Realtime Multifunctional Search Bar */}
          <div className="max-w-xl mx-auto relative pt-4">
            <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-8" />
            <input 
              type="text" 
              placeholder="Search across asset signatures, machines, names, or categories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl py-3.5 pl-12 pr-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow shadow-sm text-zinc-900 dark:text-white"
            />
          </div>
        </div>

        {/* SECTION 2: INTERACTIVE CATEGORY DIRECTORY */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-200/60 dark:border-zinc-900 pb-6 max-w-5xl mx-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-zinc-900 border-zinc-200/60 dark:border-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* COMPACT CARD INVENTORY MATRIX */}
          <motion.div 
            layout
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.15 } }}
                  className="group bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/60 pb-3 text-sm">
                      <span className="font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950 px-2.5 py-1 rounded text-xs">
                        {product.category}
                      </span>
                      <span className="font-mono font-bold text-indigo-500 text-base">{product.assetKey}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                        {product.desc}
                      </p>
                    </div>

                    {/* Extended Technical Meta Block */}
                    <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 border border-zinc-100 dark:border-zinc-900 text-sm font-medium">
                      <div className="space-y-0.5">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">Velocity Rate</span>
                        <span className="font-mono text-zinc-800 dark:text-zinc-200 font-bold text-sm">{product.throughput}</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">Substrate Caliper</span>
                        <span className="font-mono text-zinc-800 dark:text-zinc-200 font-bold text-sm truncate block">{product.thickness}</span>
                      </div>
                      <div className="sm:col-span-2 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-3 flex flex-row justify-between items-center text-sm">
                        <span className="text-zinc-400 font-bold uppercase tracking-wider text-xs">Press Core</span>
                        <span className="font-mono text-zinc-700 dark:text-zinc-300 font-bold bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-xs">{product.optimalPress}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex flex-row items-center justify-between mt-4 border-t border-zinc-100 dark:border-zinc-800/40">
                    <Link 
                      href={`/services/${product.id}`}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 transition-all group-hover:gap-3"
                    >
                      Configure Specs <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded">
                      {product.chemicalResistance}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
              <p className="text-zinc-400 font-mono text-xs sm:text-base font-bold uppercase tracking-wider">No manufacturing assets matched your target coordinates.</p>
            </div>
          )}
        </div>

        {/* SECTION 3: LIVE PLANT RUN-RATE ESTIMATOR MOCK */}
        <section className="bg-zinc-900 text-white p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
            
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                <Calculator className="w-4 h-4" /> Parametric Quote Simulation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Run-Rate Budget Calculator</h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-medium">
                Adjust baseline sheet volumes to preview real-time automated infrastructure routing offsets and dynamic scale balancing.
              </p>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800">
              <div className="space-y-6 text-base font-medium">
                <div className="space-y-2">
                  <label className="text-zinc-400 font-bold uppercase tracking-wider text-xs">Select Catalog Profile</label>
                  <select 
                    value={calcItem} 
                    onChange={(e) => setCalcItem(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono text-zinc-200 text-sm"
                  >
                    {productItems.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-zinc-400 font-bold uppercase tracking-wider text-xs">
                    <label>Impression Volume</label>
                    <span className="font-mono text-indigo-400 text-sm">{calcVolume.toLocaleString()} units</span>
                  </div>
                  <input 
                    type="range" min="250" max="25000" step="250"
                    value={calcVolume}
                    onChange={(e) => setCalcVolume(Number(e.target.value))}
                    className="w-full accent-indigo-500 bg-zinc-800 rounded-lg appearance-none h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-zinc-600 font-mono">
                    <span>250 min</span>
                    <span>25k max</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between space-y-6 text-base">
                <div className="space-y-2">
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest block">Calculated Fleet Routing</span>
                  <span className="font-mono text-zinc-200 font-bold bg-zinc-950 px-3 py-2 rounded border border-zinc-800 text-xs block text-center">
                    {calcVolume >= 5000 ? "High-Speed Industrial Litho Offset" : "Variable Data Electrophotographic Digital"}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest block">Estimated Cost Frame</span>
                  <div className="text-3xl font-black font-mono tracking-tight text-emerald-400">${calculatedEstimate}</div>
                  <span className="text-[10px] text-zinc-500 font-medium block pt-0.5">*Excludes localized variables</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: DEEP INDUSTRIAL SUBSTRATE INVENTORY */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Structural Engineering Materials
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white">Active Substrate Vault</h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium">
              We warehouse and calibrate thousands of distinct material configurations to ensure ink adhesion, environmental durability, and shear threshold values remain consistent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUBSTRATE_LIBRARY.map((sub, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-3">
                  <h3 className="font-black text-base tracking-tight text-zinc-900 dark:text-white">{sub.name}</h3>
                  <div className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    <p><span className="text-zinc-400 font-bold">Gauge:</span> {sub.gauge}</p>
                    <p><span className="text-zinc-400 font-bold">Primary Core:</span> {sub.application}</p>
                  </div>
                </div>
                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3 text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {sub.environmental}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: TECHNICAL DEPLOYMENT FAQ */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-indigo-600" /> Preflight Engineering FAQ
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium">
              Critical operational reference directives to minimize data drop conflicts and physical calibration delays on the manufacturing floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TECHNICAL_FAQS.map((faq, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-black text-zinc-900 dark:text-white tracking-tight flex items-start gap-2 leading-snug text-base">
                  <span className="text-indigo-600 font-mono font-black">Q:</span>{faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium pl-4 border-l border-zinc-200 dark:border-zinc-800">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}