"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Printer, 
  Sparkles, 
  LayoutGrid, 
  ShieldAlert, 
  CheckCircle2, 
  Settings2, 
  Layers, 
  Gauge, 
  Minimize2,
  FileCheck,
  Eye
} from "lucide-react";

// Master Industrial Data Stack with granular technical spec matrix arrays
const CATALOG = [
  {
    group: "Core Print Infrastructure",
    description: "High-velocity modern transfer systems optimized for chromatic accuracy, dot gain minimization, and rapid plate configuration cycles.",
    items: [
      { 
        id: "digital-printing", 
        name: "Digital Production Printing", 
        detail: "Fast turnarounds, variable data fields, liquid electrophotographic imaging, and micro-serialization properties.",
        specs: { speed: "Up to 4,500 sheets/hr", stock: "14pt – 32pt Caliper Board", color: "7-Color Indigo ElectroInk", tolerance: "Delta E < 1.2" }
      },
      { 
        id: "offset-printing", 
        name: "Commercial Litho-Offset Printing", 
        detail: "High-volume precision plate processing using real Heidelberg CMYK ink fountains and accurate Pantone Matching System setups.",
        specs: { speed: "18,000 impressions/hr", stock: "60lb Text to 28pt Board", color: "10-Station Inline Aligned", tolerance: "Spectrophotometric Lock" }
      },
      { 
        id: "screen-printing", 
        name: "Screen Printing & Apparel Lines", 
        detail: "Thick, highly durable ink deposits mapped cleanly over heavy-weave fabrics, promotional merchandise, and rigid gift boxes.",
        specs: { speed: "Automated Carousel Lines", stock: "Textiles, Plastics, Wood, Metal", color: "High-Opacity Plastisol/Water-Based", tolerance: "High Profile Textures" }
      },
      { 
        id: "large-format", 
        name: "Industrial Wide-Format Signage", 
        detail: "High-impact outdoor banners, fine-art posters, trade show backdrops, and flexible vinyl banners up to 60 inches wide.",
        specs: { speed: "UV-Curable Inline Dryers", stock: "Scrim Vinyl, Gatorboard, Canvas", color: "High-Density Pigment Arrays", tolerance: "1200 DPI Native resolution" }
      },
      { 
        id: "flexography", 
        name: "Flexography Web Packaging", 
        detail: "Continuous roll-fed web rotary line systems engineered for high-throughput consumer labels, stand-up pouches, and wrap rollups.",
        specs: { speed: "Up to 500 feet/min", stock: "BOPP Films, Clear Vinyl, Foil Laminates", color: "UV & Water-Based Rotogravure Tones", tolerance: "Continuous Web Registration" }
      }
    ]
  },
  {
    group: "Structural Packaging & Identity",
    description: "CAD-designed protective parameters and secondary containment units verified via edge-crush structural analysis models.",
    items: [
      { 
        id: "custom-boxes", 
        name: "Custom Structural Packaging Boxes", 
        detail: "Single and double-wall corrugated shipping boxes, mailers, and premium double-faced rigid chipboard luxury gift enclosures.",
        specs: { speed: "Inline Die-Cutting Matrix", stock: "A, B, C, E, F Flute Profiles", color: "Flexo-Folder-Gluer Configured", tolerance: "ECT-32 to ECT-44 Structural Pass" }
      },
      { 
        id: "stickers-labels", 
        name: "Labels & Weatherproof Stickers", 
        detail: "Roll-fed high-speed pressure-sensitive substrates engineered to precise custom geometric shapes with inline varnish seals.",
        specs: { speed: "Digital Laser Matrix Cutting", stock: "Gloss Paper, Matte Vinyl, Clear Poly", color: "CMYK + Heavy Opaque White Base", tolerance: "Permanent / Removable Acrylic Grade" }
      },
      { 
        id: "shopping-bags", 
        name: "Eco-Friendly Bags & Pouches", 
        detail: "Recycled premium kraft shopping carriers with reinforced twisted handles, gusseted bases, and high-barrier flexible pouches.",
        specs: { speed: "Automated Bottom-Folding Assemblies", stock: "120GSM Recycled Kraft Paper", color: "Soy-Based Non-Toxic Inks", tolerance: "Up to 15kg Dynamic Load Limit" }
      },
      { 
        id: "brand-identity", 
        name: "Brand Dieline & Structural Engineering", 
        detail: "Comprehensive vector engineering, custom operational dieline configurations, volumetric stress tests, and unprinted physical proof sets.",
        specs: { speed: "Structural CAD Preflight Execution", stock: "All Material Profiles Accessible", color: "Digital Structural Proof Renderings", tolerance: "0.01mm Structural Clearance Scale" }
      }
    ]
  },
  {
    group: "Specialty Commercial Printing",
    description: "Cosmetic enhancement layers and structural post-press applications engineered to separate premium branding profiles.",
    items: [
      { 
        id: "marketing-materials", 
        name: "Enterprise Marketing Collateral", 
        detail: "Premium multi-page brochures, saddle-stitched product profiles, perfect-bound lookbooks, and tri-fold presentation layout sheets.",
        specs: { speed: "Inline Folding & Gathering Sheets", stock: "80lb – 100lb Gloss Book Coating", color: "Aqueous Coating (AQ) Over-All Layer", tolerance: "Perfect Trim Bleed Tracking" }
      },
      { 
        id: "business-cards", 
        name: "Executive Stationery Systems", 
        detail: "Premium business cards, executive letterheads, legal matching envelopes, and matching presentation binder portfolios.",
        specs: { speed: "Precision Pile Cutting Stations", stock: "130lb Super-Cover to 32pt Board", color: "Corporate Spot Pantone Matching", tolerance: "Frictionless Mechanical Scoring Lines" }
      },
      { 
        id: "wedding-cards", 
        name: "Specialty Embellishments & Invites", 
        detail: "Metallic hot foil stamping, deep sculptural embossing, dual-level blind debossing, and premium artisanal card invitations.",
        specs: { speed: "Platen Press Heavy Pressure Stamping", stock: "Cotton-Rag Blend Artisanal Stock", color: "Metallic Foils (Gold, Silver, Bronze)", tolerance: "Deep Compression Footprint Profiles" }
      }
    ]
  }
];

// Animation Configurations
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", damping: 22, stiffness: 90 } }
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCatalog = activeCategory === "all" 
    ? CATALOG 
    : CATALOG.filter(cat => cat.group.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-20 overflow-x-hidden antialiased">
      
      {/* SECTION 1: HERO OVERLAY BLOCK */}
      <section className="relative overflow-hidden border-b border-zinc-200/60 dark:border-zinc-900 bg-white dark:bg-zinc-950 pt-32 pb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" /> Production Capabilities Center
          </div>
          <h1 className="max-w-4xl font-black text-5xl sm:text-7xl text-zinc-900 dark:text-white tracking-tight leading-[0.95]">
            Everything that runs through our shop floor.
          </h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            Three independent commercial printing tracks executed concurrently under a single roof. Our hardware infrastructure spans digital, offset, packaging conversion, and chemical embellishment arrays to transform vectors into physical distribution pallets safely.
          </p>

          {/* Interactive Live Segment Filtering Controls */}
          <div className="mt-12 flex flex-wrap gap-3 border-t border-zinc-100 dark:border-zinc-900 pt-8">
            {[
              { id: "all", label: "Complete Infrastructure Matrix" },
              { id: "print", label: "Press Lines" },
              { id: "packaging", label: "Structural Packaging" },
              { id: "specialty", label: "Tactile Finishes" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === tab.id 
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10" 
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/70 dark:hover:bg-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: GRANULAR SYSTEM DATA LOOP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        <AnimatePresence mode="wait">
          {filteredCatalog.map((cat) => (
            <motion.div 
              key={cat.group}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Category Header Module */}
              <div className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="font-black text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight flex items-center gap-2.5">
                    <LayoutGrid className="w-6 h-6 text-indigo-600" /> {cat.group}
                  </h2>
                  <span className="self-start sm:self-auto text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 px-3 py-1.5 rounded-lg">
                    {cat.items.length} Active Production Lines
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed">{cat.description}</p>
              </div>

              {/* Sub-item Grid Layout Container */}
              <motion.div 
                variants={CONTAINER_VARIANTS}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              >
                {cat.items.map((item) => (
                  <motion.div 
                    key={item.name}
                    variants={ITEM_VARIANTS}
                    whileHover={{ y: -5 }}
                    className="group bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-indigo-500/20 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <h3 className="font-black text-xl text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight">
                          {item.name}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                          {item.detail}
                        </p>
                      </div>

                      {/* Micro Mechanical Specification Matrix Grid */}
                      <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 grid grid-cols-2 gap-y-4 gap-x-3 text-xs sm:text-sm">
                        <div className="space-y-0.5">
                          <span className="block text-zinc-400 font-bold uppercase tracking-wider scale-95 origin-left">Operational Velocity</span>
                          <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200 block">{item.specs.speed}</span>
                        </div>
                        <div className="space-y-0.5">
                          <span className="block text-zinc-400 font-bold uppercase tracking-wider scale-95 origin-left">Substrate Gauge</span>
                          <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200 truncate block">{item.specs.stock}</span>
                        </div>
                        <div className="space-y-0.5">
                          <span className="block text-zinc-400 font-bold uppercase tracking-wider scale-95 origin-left">Color Mapping</span>
                          <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200 truncate block">{item.specs.color}</span>
                        </div>
                        <div className="space-y-0.5">
                          <span className="block text-zinc-400 font-bold uppercase tracking-wider scale-95 origin-left">Registration Limit</span>
                          <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 block">{item.specs.tolerance}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-100 dark:border-zinc-950 mt-6 flex items-center justify-between">
                      <Link
                        href={`/services/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-black text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform"
                      >
                        Technical Requirements Matrix <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* SECTION 3: COMPLIANCE PREFLIGHT SPECIFICATION PROTOCOLS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-zinc-900 border border-zinc-800 p-8 sm:p-12 rounded-3xl text-white grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/10 to-transparent pointer-events-none" />
          
          <div className="lg:col-span-1 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center"><ShieldAlert className="w-6 h-6" /></div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight pt-2">Prepress Validation Requirements</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-medium">To maintain our high operational efficiency, ensure all incoming digital graphic layouts strictly follow our shop floor file profile system parameters.</p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-medium">
            <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800 space-y-2">
              <h4 className="font-bold text-zinc-200 text-base flex items-center gap-2"><FileCheck className="w-5 h-5 text-indigo-400" /> Native Color Space Profiles</h4>
              <p className="text-zinc-400 leading-relaxed">Supply all file objects natively inside the CMYK color space. Explicitly tag vector spot elements with genuine Pantone Coated (PMS C) naming parameters.</p>
            </div>
            <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800 space-y-2">
              <h4 className="font-bold text-zinc-200 text-base flex items-center gap-2"><Gauge className="w-5 h-5 text-indigo-400" /> Bleed & Safe Trim Margins</h4>
              <p className="text-zinc-400 leading-relaxed">A minimum boundary perimeter bleed of 0.125 inches (3.175mm) is required. Maintain text fields at least 0.1875 inches inside structural trim pathways.</p>
            </div>
            <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800 space-y-2">
              <h4 className="font-bold text-zinc-200 text-base flex items-center gap-2"><Minimize2 className="w-5 h-5 text-indigo-400" /> Vector Paths & Font Preservation</h4>
              <p className="text-zinc-400 leading-relaxed">Convert all font geometries into outlines. Supply vector dielines for die-cut packaging elements on an independent, non-printing design layer marked as spot color.</p>
            </div>
            <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800 space-y-2">
              <h4 className="font-bold text-zinc-200 text-base flex items-center gap-2"><Eye className="w-5 h-5 text-indigo-400" /> Image Resolution Matrix</h4>
              <p className="text-zinc-400 leading-relaxed">Raster images embedded within print documents must carry a resolution profile of 300 DPI at 100% placement dimension scale to eliminate artifact compression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HIGH-VOLUME HIGH-THROUGHPUT CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-12">
        <div className="relative overflow-hidden bg-gradient-to-b from-indigo-600 to-indigo-700 text-white p-12 rounded-3xl shadow-xl shadow-indigo-600/10 text-center">
          <div className="absolute inset-0 bg-white/5 opacity-40 mix-blend-overlay pointer-events-none" />
          
          <h2 className="font-black text-3xl sm:text-4xl tracking-tight text-white max-w-2xl mx-auto leading-none">
            Need an item profile engineered that isn't listed here?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-indigo-100 font-medium text-base sm:text-lg leading-relaxed">
            Our structural package engineers develop bespoke configuration profiles, custom multi-layered substrates, and specialized box designs tailored directly for enterprise volume deployments.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white font-black px-8 py-4 rounded-xl shadow-lg hover:bg-zinc-900 transition-colors text-base"
            >
              Consult Production Engineering <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}