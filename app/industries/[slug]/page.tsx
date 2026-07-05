import { notFound } from "next/navigation";
import { industriesData } from "../../data/siteData";
import Link from "next/link";
import { 
  ArrowLeft, Building2, CheckCircle2, ShieldCheck, 
  Layers, Gauge, ShieldAlert, Cpu, ArrowUpRight, HelpCircle, 
  PackageCheck, Sparkles, ChevronRight
} from "lucide-react";

import Navbar from "@/components/Navbar";
import ClientAnimationWrapper from "./ClientAnimationWrapper";

export async function generateStaticParams() {
  return [
    { slug: "schools-education" },
    { slug: "healthcare-medicare" },
    { slug: "restaurants-food" },
    { slug: "retail-ecommerce" },
    { slug: "corporate-business" },
    { slug: "events-hospitality" },
    { slug: "technology-startups" },
    { slug: "fashion-apparel" }
  ];
}

interface IndustrySchema {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  extendedSpecs?: { label: string; value: string }[];
  complianceRequirements?: string[];
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry: IndustrySchema = industriesData[params.slug] || {
    title: params.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tagline: "Enterprise compliance standards paired with luxury commercial finishings.",
    description: "Industrial printing pipelines designed to match high-volume infrastructure demands, rigid corporate scaling protocols, and precise chemical safety tolerances seamlessly.",
    features: ["Sector-Specific Compliance Mapping", "High-Throughput Volume Delivery Lots", "Dedicated Technical Account Management Solutions"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
    extendedSpecs: [
      { label: "Substrate Precision", value: "Micro-calibrated thickness arrays up to 450gsm" },
      { label: "Color Space Delta-E", value: "Strict variance tolerance threshold < 1.0" },
      { label: "Production Speed", value: "Scalable configurations parsing up to 15,000 units/hr" }
    ],
    complianceRequirements: [
      "FSC Environmental Chain of Custody certification standards",
      "Non-toxic soy-based hardware ink matrices",
      "Structural impact tolerance tracking thresholds"
    ]
  };

  const genericFAQs = [
    { q: "What are the standard Minimum Order Quantities (MOQs) for this sector?", a: "To optimize press calibration and delivery overhead, our production runs typically initiate at 1,000 units for specialized structural packaging and 250 units for ultra-premium corporate stationery systems." },
    { q: "Can we request physical prototyping before structural mass production begins?", a: "Absolutely. We supply both 3D digital structural renders and physical CAD unprinted sample proofs to confirm paperboard weight tolerances and custom sizing parameters." },
    { q: "How are G7 Master Color consistency protocols strictly managed?", a: "Every batch run undergoes direct spectrophotometer checking against continuous closed-loop systems, ensuring Delta-E variance is locked below 1.0 across independent global manufacturing distributions." }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white antialiased selection:bg-indigo-600 selection:text-white relative overflow-x-hidden">
      {/* GLOBAL MOTION + SIGNATURE SHEEN DEFINITIONS */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-16px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-16px) translateX(8px); }
        }
        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(14px) translateX(-10px); }
        }
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(250%) skewX(-20deg); }
        }
        @keyframes imgSheen {
          0% { transform: translateX(-120%) rotate(8deg); }
          100% { transform: translateX(220%) rotate(8deg); }
        }
        .animate-fade-up { animation: fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-fade-right { animation: fadeSlideRight 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-fade-left { animation: fadeSlideLeft 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-gradient-x { background-size: 200% 100%; animation: gradientShift 3.5s ease infinite; }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-float-slow-reverse { animation: floatSlowReverse 9s ease-in-out infinite; }
        .btn-shine { position: relative; overflow: hidden; isolation: isolate; }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: translateX(-150%) skewX(-20deg);
          pointer-events: none;
        }
        .btn-shine:hover::after { animation: shine 0.85s ease forwards; }
        .card-glow { position: relative; }
        .card-glow::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(99,102,241,0), rgba(99,102,241,0.55), rgba(16,185,129,0.15));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }
        .card-glow:hover::before { opacity: 1; }
        .image-sheen { position: relative; overflow: hidden; }
        .image-sheen::after {
          content: '';
          position: absolute;
          top: -50%; left: -20%;
          width: 30%; height: 200%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.18), transparent);
          pointer-events: none;
        }
        .image-sheen:hover::after { animation: imgSheen 1.1s ease forwards; }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up, .animate-fade-right, .animate-fade-left,
          .animate-gradient-x, .animate-float-slow, .animate-float-slow-reverse,
          .btn-shine::after, .image-sheen::after { animation: none !important; }
        }
      `}</style>

      {/* AMBIENT BACKGROUND FIELD */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -left-32 w-[28rem] h-[28rem] bg-indigo-500/[0.06] dark:bg-indigo-500/[0.08] rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-24 w-[24rem] h-[24rem] bg-emerald-500/[0.05] dark:bg-emerald-500/[0.06] rounded-full blur-3xl animate-float-slow-reverse" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)"
          }}
        />
      </div>

      <div className="relative z-10">
      <Navbar />

      <main className="pt-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* BACK NAVIGATION WITH LINK ARROW INCLUDED */}
        <div className="animate-fade-up">
          <Link 
            href="/industries" 
            className="relative inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" /> Back to Sectors
            <span className="absolute -bottom-1 left-6 right-0 h-px bg-indigo-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </div>

        {/* SECTION 1: MASTER IDENTITY SECTOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT CONTAINER: DYNAMIC IMAGERY & HARDWARE PROFILE */}
          <div className="lg:col-span-5 space-y-6">
            <ClientAnimationWrapper type="fade-up" delay={0.1}>
              <div className="relative">
                <div className="image-sheen relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 group transition-shadow duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent z-10 opacity-70" />
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="object-cover w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                {/* Floating verified glass chip */}
                <div className="absolute -bottom-4 left-4 z-20 flex items-center gap-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/70 dark:border-zinc-800 px-3.5 py-2 rounded-xl shadow-lg animate-fade-up" style={{ animationDelay: "300ms" }}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-700 dark:text-zinc-300">Spec Verified</span>
                </div>
              </div>
            </ClientAnimationWrapper>

            {/* Quick Metrics Matrix */}
            <ClientAnimationWrapper type="fade-up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { icon: Layers, label: "Substrate Vector", value: "Premium Board" },
                  { icon: Gauge, label: "Throughput", value: "High Volume" },
                  { icon: ShieldAlert, label: "Defect Limit", value: "Near Zero" }
                ].map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <div 
                      key={i} 
                      className="card-glow animate-fade-up bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200/60 dark:border-zinc-800 space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                      style={{ animationDelay: `${150 + i * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner transition-transform duration-300 group-hover:scale-110">
                        <StatIcon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase">{stat.label}</span>
                        <span className="block text-sm font-black text-zinc-800 dark:text-zinc-200">{stat.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ClientAnimationWrapper>
          </div>

          {/* RIGHT CONTAINER: CORE TECHNICAL SPECIFICATION TERMINAL */}
          <div className="lg:col-span-7">
            <ClientAnimationWrapper type="fade-up" delay={0.15}>
              <div className="space-y-8 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden transition-shadow duration-500 hover:shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 animate-gradient-x" />
                
                <div className="space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 w-fit border border-indigo-100/30 dark:border-indigo-900/40">
                    <Building2 className="w-4 h-4" /> Sector Execution Blueprint
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-[0.95] animate-fade-up" style={{ animationDelay: "100ms" }}>
                    {industry.title} Matrix
                  </h1>
                  <p className="text-base sm:text-lg text-indigo-600 dark:text-indigo-400 font-bold tracking-tight leading-relaxed animate-fade-up" style={{ animationDelay: "180ms" }}>
                    {industry.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed animate-fade-up" style={{ animationDelay: "240ms" }}>
                    {industry.description}
                  </p>
                </div>

                {/* Capabilities Grid */}
                <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Sector-Specific Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {industry.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="animate-fade-left flex items-start gap-2.5 text-xs sm:text-sm font-bold text-zinc-600 dark:text-zinc-300 leading-relaxed group/feat"
                        style={{ animationDelay: `${idx * 90}ms` }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover/feat:scale-125" />
                        <span className="group-hover/feat:text-zinc-900 dark:group-hover/feat:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deep Machine Settings parameters list */}
                <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Machine Blueprint Controls</h3>
                  <div className="space-y-3">
                    {(industry.extendedSpecs || []).map((spec, index) => (
                      <div 
                        key={index} 
                        className="animate-fade-up relative overflow-hidden flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-800/60 text-xs sm:text-sm gap-2 group/spec transition-colors duration-300 hover:border-indigo-200 dark:hover:border-indigo-900/60"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500 scale-y-0 group-hover/spec:scale-y-100 origin-center transition-transform duration-300" />
                        <span className="font-bold text-zinc-500 dark:text-zinc-400 pl-1.5">{spec.label}</span>
                        <span className="font-mono font-black text-zinc-800 dark:text-zinc-200 group-hover/spec:text-indigo-600 dark:group-hover/spec:text-indigo-400 transition-colors duration-300 text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA System */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/quote" 
                    className="btn-shine flex-1 bg-indigo-600 border border-indigo-500 text-white text-xs font-black uppercase tracking-widest text-center py-4 px-6 rounded-xl hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/10 group"
                  >
                    Initialize Production Spec Form <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="sm:w-52 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-black uppercase tracking-widest text-center py-4 px-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/70 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center shadow-sm"
                  >
                    Explore Plant Capabilities
                  </Link>
                </div>

                {/* Verified standard token */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                  <span className="text-[10px] font-black tracking-wider uppercase font-mono">G7 Master Compliance Ecosystem Verified</span>
                </div>

              </div>
            </ClientAnimationWrapper>
          </div>
        </div>

        {/* SECTION 2: COMPLIANCE TRACKING LOGS BLOCK */}
        <ClientAnimationWrapper type="fade-up" delay={0.2}>
          <section className="bg-zinc-900 border border-zinc-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none animate-float-slow-reverse" />
            
            <div className="lg:col-span-5 space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-indigo-400 border border-zinc-700 shadow-inner">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Compliance Tracking Framework</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                Every customized run processed under this dynamic market matrix inherits total validation logs meeting structural target profiles cleanly.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3 relative z-10">
              {(industry.complianceRequirements || []).map((requirement, idx) => (
                <div 
                  key={idx} 
                  className="animate-fade-right flex items-center gap-4 bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/80 text-xs sm:text-sm font-medium text-zinc-300 leading-relaxed hover:border-indigo-900/60 hover:bg-zinc-950/80 transition-colors duration-300"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <span className="relative flex w-1.5 h-1.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-60 animate-ping" style={{ animationDuration: "2.5s" }} />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  </span>
                  <span>{requirement}</span>
                </div>
              ))}
            </div>
          </section>
        </ClientAnimationWrapper>

        {/* SECTION 3: INTERACTIVE CORPORATE SAMPLE KIT OFFERING */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Tactile Validation
            </span>
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
              Request a Sector Sample Kit
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
              Review real physical swatches, finishings, and engineering structures before committing capital. Our bespoke sector kits contain complete texture booklets, custom foil matrices, and weight configurations specific to **{industry.title}**.
            </p>
            {/* Decorative swatch strip */}
            <div className="flex items-center gap-2 pt-2">
              {["bg-indigo-600", "bg-indigo-300", "bg-emerald-500", "bg-zinc-800 dark:bg-zinc-300", "bg-zinc-300 dark:bg-zinc-700"].map((c, i) => (
                <span 
                  key={i} 
                  className={`w-6 h-6 rounded-full border border-white/60 dark:border-zinc-900 shadow-sm ${c} transition-transform duration-300 hover:scale-125 hover:z-10`}
                  style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                />
              ))}
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider pl-2">Finish Options</span>
            </div>
          </div>

          <div className="lg:col-span-5 w-full sm:w-auto lg:justify-self-end">
            <Link 
              href="/samples" 
              className="btn-shine w-full sm:w-fit inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 border border-zinc-800 text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md group"
            >
              <PackageCheck className="w-4 h-4 text-emerald-400" /> Dispatch Free Sample Case <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* SECTION 4: TECHNICAL AUDIT FAQ ACCORDION SECTION */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-zinc-400 block">Production Intelligence</span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">Deployment FAQs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {genericFAQs.map((faq, i) => (
              <div 
                key={i} 
                className="card-glow animate-fade-up bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 p-6 sm:p-8 rounded-2xl space-y-4 relative shadow-inner hover:shadow-lg flex flex-col justify-start transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 130}ms` }}
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-transform duration-300 group-hover:rotate-12">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-base sm:text-lg text-zinc-900 dark:text-white tracking-tight leading-snug">{faq.q}</h4>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: CROSS-SECTOR SUPPORT INJECTIONS */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-zinc-400 block">Cross-Sector Support</span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">Explore Other Industry Configurations</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "corporate-business", title: "Corporate & Business", desc: "Foil-stamped presentation folders, annual reports, and premium customized business stock systems." },
              { id: "retail-ecommerce", title: "Retail & E-Commerce", desc: "Crush-resistant rigid box layouts, dynamic custom shipping sleeves, and custom tissue paper." },
              { id: "healthcare-medicare", title: "Healthcare & Medicare", desc: "FDA-compliant batch labelling, instructions mapping booklets, and highly sterile custom kit packing." }
            ].filter(x => x.id !== params.slug).slice(0, 3).map((item, i) => (
              <div 
                key={item.id} 
                className="card-glow animate-fade-up bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <div className="space-y-3">
                  <h4 className="font-black text-xl text-zinc-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60 pt-4 mt-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded">ECO AUDITED</span>
                  <Link href={`/industries/${item.id}`} className="text-xs font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    Deploy <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      </div>
    </div>
  );
}
