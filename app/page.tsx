"use client";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Package, 
  Layers, 
  CheckCircle2, 
  Award,
  Factory,
  ChevronRight,
  Printer,
  Building2,
  Cpu,
  HelpCircle,
  Maximize2,
  Scale,
  Settings,
  Truck
} from "lucide-react";

// --- MASTER DATA MATRIX ---

const CORE_SERVICES = [
  { id: "digital-printing", title: "Digital Production Printing", desc: "Short-run agile execution, dynamic variable data matching (VDM), and liquid electrophotographic imaging perfect for testing target market demographics.", icon: Printer },
  { id: "offset-printing", title: "Commercial Litho-Offset", desc: "High-volume Heidelberg speedmaster operations engineered for massive long-run structural efficiencies and unmatched cost-per-unit metrics.", icon: Factory },
  { id: "large-format", title: "Industrial Wide-Format Signage", desc: "UV-curable ink setups outputting high-impact outdoor banners, architectural point-of-purchase backdrops, and gallery-grade exhibition graphics up to 60 inches wide.", icon: Layers },
  { id: "flexography", title: "Flexographic Web Packaging", desc: "High-speed continuous web rotary lines mapped cleanly for continuous roll-fed consumer labels, high-barrier dynamic pouches, and variable flexible packaging.", icon: Cpu }
];

const EXTENDED_PRODUCTS = [
  { id: "custom-boxes", category: "Structural Packaging", title: "Bespoke Structural Packaging Boxes", detail: "FSC-certified corrugated mailers, luxury double-wall rigid setup gift boxes, custom retail display counter trays, and structural product paperboard sleeves.", img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600" },
  { id: "business-cards", category: "Corporate Identity", title: "Enterprise Identity Suites", detail: "Premium ultra-heavy 14pt to 32pt paper stocks featuring edge-painting accents, precision multi-colored foil stamping, raised digital spot UV layerings, and soft-touch lamination.", img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=600" },
  { id: "stickers-labels", category: "Product Trimming", title: "Industrial High-Speed Product Labels", detail: "Roll-fed pressure-sensitive adhesive labels, weatherproof vinyl stocks, precise digital custom die-cut pathways, custom geometric shapes, and pristine scratch-resistant varnishes.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600" },
  { id: "marketing-materials", category: "Print Collateral", title: "High-End Marketing Collateral", detail: "Multi-page saddle-stitched catalogs, luxury perfect-bound annual enterprise profiles, custom engineered architectural map folds, and corporate presentation folders.", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800" }
];

const INDUSTRIES = [
  { id: "retail-ecommerce", name: "D2C Retail & E-Commerce", desc: "Crush-resistant structural corrugated setups optimized directly for automated fulfillment corridors and unboxing aesthetics." },
  { id: "healthcare-medicare", name: "Healthcare & Pharmaceuticals", desc: "FDA-compliant barrier folding cartons, micro-text secondary information leaflets, and precise sequential batch numbering codes." },
  { id: "restaurants-food", name: "Food-Safe Food & Beverage", desc: "Grease-resistant bio-polymer coatings, certified non-toxic soy inks, and temperature-stable custom food product structural containers." },
  { id: "corporate-business", name: "Corporate Financial & Legal", desc: "High-security watermarked document stocks, embossed validation seals, custom presentation binders, and matching legal envelope configurations." }
];

const MACHINERY_INVENTORY = [
  { name: "Heidelberg Speedmaster XL 106", origin: "Germany", line: "Offset Lithography", spec: "18,000 sheets/hour maximum velocity, automated spectrophotometric ink density adjustments." },
  { name: "HP Indigo 12K Digital Press", origin: "United States", line: "High-Fidelity Digital", spec: "7-color ElectroInk ultra-sharp tracking, real-time variable data serialization processing layout lines." },
  { name: "Bobst Novacut 106 ER", origin: "Switzerland", line: "Die-Cutting & Stripping", spec: "Precision mechanical inline blanking handling up to 8,000 thick structural cardstock sheets per operational cycle." },
  { name: "Mark Andy Performance Series P7", origin: "United States", line: "Flexographic Labels", spec: "Continuous servo-driven web platform designed for rapid high-volume roll label manufacturing setups." }
];

const SUBSTRATE_MATRIX = [
  { type: "Premium Solid Bleached Sulfate (SBS)", weight: "16pt – 28pt Caliper", bestFor: "Luxury cosmetics and high-end retail display packaging blocks." },
  { type: "FSC Certified Uncoated Kraft Board", weight: "100% Recycled Fibers", bestFor: "Eco-conscious direct-to-consumer brand mailers and shipping modules." },
  { type: "Ultra-Heavy Multi-Layer Board", weight: "32pt Total Thickness", bestFor: "Artisanal executive corporate stationery and premium laser-etched business cards." },
  { type: "Biaxially-Oriented Polypropylene (BOPP)", weight: "Clear / White / Metallized", bestFor: "Weatherproof high-speed automated product labels and flexible product bags." }
];

const FAQS = [
  { q: "What are your standard turnaround time parameters for enterprise runs?", a: "Standard commercial digital jobs complete within 3–5 operational cycles. High-volume custom structural packaging offset and flexographic runs requiring bespoke dieline generation adjust to a 7–12 day pipeline, with expedited priority corridors accessible." },
  { q: "What formatting file profiles do your automated prepress engines require?", a: "We require production-ready PDF files formatted natively to PDF/X-4 guidelines. Ensure all interior structural text geometries are converted cleanly to vectors, dynamic text paths are flattened, spot colors indicate explicit PMS color mapping, and a 0.125-inch bleed boundary surrounds all document trim paths." },
  { q: "Can we request structural unprinted physical CAD samples before running?", a: "Yes, our engineering department produces high-fidelity unprinted CAD material sample blocks on structural plotting tables so you can verify custom volumetric dimensional fits before burning aluminum press plates." }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-24 overflow-x-hidden antialiased">
      
      {/* Structural Top Scroll Progress Element */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-[100] origin-left" style={{ scaleX }} />

      {/* SECTION 1: ENTERPRISE CINEMATIC HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden border-b border-zinc-200/60 dark:border-zinc-900">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-fuchsia-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/5 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-bold tracking-wide border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-600 fill-indigo-600/10" /> Global Print Manufacturing & Packaging Engineering Hub
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-zinc-900 dark:text-white">
              We manufacture <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500">packaging</span> that scales brands.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
              From automated subscription box dielines to complex corporate paper architecture systems, we synchronize your physical touchpoints seamlessly using strict G7 Master calibration standards.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/quote" className="w-full sm:w-auto bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl shadow-2xl shadow-indigo-600/30 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base">
                Initialize Production Spec Form <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link href="/services" className="w-full sm:w-auto bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold px-8 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 shadow-sm transition-all text-sm sm:text-base">
                Explore Plant Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCTION CHANNELS / SERVICES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200/60 dark:border-zinc-900">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">Manufacturing Infrastructure</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">Our Commercial Production Tracks</h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            Four specialized high-speed production pathways operating concurrently inside our facility to execute demanding modern industrial requirements flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                className="group bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg sm:text-xl text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{srv.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{srv.desc}</p>
                  </div>
                </div>
                <div className="pt-6">
                  <Link href={`/services/${srv.id}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                    View Run Specs <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: EXPANDED PRODUCT CATALOG CONFIGURATOR */}
      <section className="py-24 bg-white dark:bg-zinc-900/20 border-b border-zinc-200/60 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Physical Deliverables</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">Configurable Brand Essentials</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity group">
              View Complete Catalog Matrix <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXTENDED_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-zinc-200 dark:bg-zinc-800 border-b border-zinc-200/40 dark:border-zinc-800/40">
                  <img src={prod.img} alt={prod.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-black uppercase tracking-widest text-zinc-400">{prod.category}</span>
                    <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white tracking-tight">{prod.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{prod.detail}</p>
                  </div>
                  <Link href={`/products/${prod.id}`} className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-3 rounded-xl text-center text-sm font-bold text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-1.5 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors duration-200">
                    Configure Substrates <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: REVEALING HEAVY PLANT INVENTORY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200/60 dark:border-zinc-900">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 space-y-4 lg:sticky lg:top-32">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Settings className="w-4 h-4" /> Heavy Hardware Capital
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-zinc-900 dark:text-white">The Plant Machinery Stack</h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              We own and operate our primary hardware arrays directly. No middle brokers, no outsourced tracking breakdowns—just raw structural performance components.
            </p>
          </div>

          <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MACHINERY_INVENTORY.map((mach, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 shadow-sm space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base sm:text-lg tracking-tight">{mach.name}</h3>
                  <span className="text-xs font-mono font-bold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-500 dark:text-zinc-400 shrink-0">{mach.origin}</span>
                </div>
                <div className="text-sm sm:text-base space-y-1">
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs font-mono uppercase tracking-wider">{mach.line}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{mach.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPLEX MATERIALS SUBSTRATE MATRIX */}
      <section className="py-24 bg-zinc-900 text-white border-b border-zinc-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Material Inventories</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">The Substrate Stock Matrix</h2>
            <p className="text-sm sm:text-base text-zinc-400 font-medium">We warehouse an exhaustive suite of precise base sheets calibrated for extreme press stability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUBSTRATE_MATRIX.map((sub, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-800 p-6 rounded-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-100 tracking-tight">{sub.type}</h3>
                  <span className="inline-block text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded border border-indigo-500/20">{sub.weight}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-3 border-t border-zinc-800/60">
                  <strong className="text-zinc-300 font-bold">Optimal Target:</strong> {sub.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TARGET SOLUTIONS (INDUSTRIES) SECTOR */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200/60 dark:border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="space-y-4 lg:sticky lg:top-32">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" /> Sector Management Mappings
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-zinc-900 dark:text-white">Industry Solutions</h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              We translate regulatory parameters directly into production paths. From luxury consumer retail parameters to sterile healthcare security tracks, your products are handled perfectly.
            </p>
            <div className="pt-2">
              <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity">
                Explore All Verticals <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-200">
                <div className="space-y-2">
                  <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white tracking-tight">{ind.name}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{ind.desc}</p>
                </div>
                <div className="pt-6">
                  <Link href={`/industries/${ind.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                    View Core Alignment Protocols <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ENTERPRISE FAQ PROFILE ACCORDION */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200/60 dark:border-zinc-900">
        <div className="text-center space-y-2 mb-16">
          <span className="text-xs font-mono font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> Technical Preflight Support
          </span>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-white">Frequently Answered Parameters</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-5 font-bold text-sm sm:text-base flex justify-between items-center gap-4 text-zinc-900 dark:text-white transition-colors duration-200 focus:outline-none focus:bg-zinc-50 dark:focus:bg-zinc-800/40"
              >
                <span>{faq.q}</span>
                <ChevronRight className={`w-5 h-5 transition-transform shrink-0 ${openFaq === i ? "rotate-90 text-indigo-600" : "text-zinc-400"}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: LOGISTICS & TRUST BADGE GRID */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900/30 border-b border-zinc-200/40 dark:border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0"><Truck className="w-5 h-5" /></div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white mb-1.5">Freight Integration</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">LTL freight or localized daily carrier route setups directly handling regional fulfillment tracks seamlessly.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0"><Scale className="w-5 h-5" /></div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white mb-1.5">Spectral Tolerances</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">Strict delta-E verification testing metrics ensure exact reproduction fidelity across multiple shifts.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0"><Maximize2 className="w-5 h-5" /></div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white mb-1.5">Variable Scale Options</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">Dynamic job layout optimization allows seamless routing from low-volume digital up to extreme offset runs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: THE INDUSTRIAL FINAL BRIDGE CTA */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-indigo-600 to-indigo-700 text-white p-12 rounded-3xl shadow-2xl shadow-indigo-600/20 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight max-w-xl mx-auto leading-tight text-white">Have an intricate, high-volume project ready to build?</h2>
          <p className="text-sm sm:text-base text-indigo-100/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect directly with our structural engineering and prepress production specialists to design custom dielines, sample prototypes, or draft high-volume corporate logistics matrices.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-zinc-950 font-black px-8 py-4 rounded-xl text-sm sm:text-base shadow-xl hover:bg-zinc-50 transition-colors group duration-200">
              Consult Production Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}