// src/app/industries/[slug]/page.tsx
import { notFound } from "next/navigation";
import { industriesData } from "../../data/siteData";
import Link from "next/link";
import { 
  ArrowLeft, Building2, CheckCircle2, Factory, ShieldCheck, 
  Layers, Gauge, ShieldAlert, Cpu, ArrowUpRight, HelpCircle, 
  PackageCheck, Sparkles, FileText, ChevronRight
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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white antialiased selection:bg-indigo-600 selection:text-white">
      <Navbar />

      <main className="pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* BACK NAVIGATION */}
        <div>
          <Link href="/industries" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Sectors
          </Link>
        </div>

        {/* SECTION 1: MASTER IDENTITY SECTOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT CONTAINER: DYNAMIC IMAGERY & HARDWARE PROFILE */}
          <div className="lg:col-span-5 space-y-6">
            <ClientAnimationWrapper type="fade-up" delay={0.1}>
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent z-10 opacity-70" />
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="object-cover w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
              </div>
            </ClientAnimationWrapper>

            {/* Quick Metrics Matrix */}
            <ClientAnimationWrapper type="fade-up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Layers, label: "Substrate Vector", value: "Premium Board" },
                  { icon: Gauge, label: "Throughput", value: "High Volume" },
                  { icon: ShieldAlert, label: "Defect Limit", value: "Near Zero" }
                ].map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 space-y-2 shadow-sm">
                      <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <StatIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[9px] font-mono font-bold tracking-wider text-zinc-400 uppercase">{stat.label}</span>
                        <span className="block text-xs font-black text-zinc-800 dark:text-zinc-200">{stat.value}</span>
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
              <div className="space-y-8 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0" />
                
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 w-fit shadow-sm">
                    <Building2 className="w-3.5 h-3.5" /> Sector Execution Blueprint
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-none">
                    {industry.title} Matrix
                  </h1>
                  <p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-bold tracking-tight leading-relaxed">
                    {industry.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Capabilities Grid */}
                <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Sector-Specific Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-bold text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deep Machine Settings parameters list */}
                <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Machine Blueprint Controls</h3>
                  <div className="space-y-2.5">
                    {(industry.extendedSpecs || []).map((spec, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-800/60 text-xs gap-1">
                        <span className="font-bold text-zinc-500 dark:text-zinc-400">{spec.label}</span>
                        <span className="font-mono font-black text-zinc-800 dark:text-zinc-200">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA System */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link href="/quote" className="flex-1 bg-indigo-600 border border-indigo-500 text-white text-xs font-black uppercase tracking-widest text-center py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/10 flex items-center justify-center gap-2 group">
                    <Factory className="w-4 h-4" /> Request Sector Price Sheet
                  </Link>
                  <Link href="/contact" className="sm:w-48 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-black uppercase tracking-widest text-center py-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700/60 transition-all flex items-center justify-center gap-1.5">
                    Consult Account Manager
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
          <section className="bg-zinc-900 text-white p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-lg relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="lg:col-span-5 space-y-2 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-indigo-400 border border-zinc-700">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">Compliance Tracking Framework</h2>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                Every customized run processed under this dynamic market matrix inherits total validation logs meeting structural target profiles cleanly.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-2.5 relative z-10">
              {(industry.complianceRequirements || []).map((requirement, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/80 text-xs font-medium text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>{requirement}</span>
                </div>
              ))}
            </div>
          </section>
        </ClientAnimationWrapper>

        {/* SECTION 3: INTERACTIVE CORPORATE SAMPLE KIT OFFERING */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3" /> Tactile Validation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
              Request a Sector Sample Kit
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
              Review real physical swatches, finishings, and engineering structures before committing capital. Our bespoke sector kits contain complete texture booklets, custom foil matrices, and weight configurations specific to **{industry.title}**.
            </p>
          </div>

          <div className="lg:col-span-5 w-full sm:w-auto lg:justify-self-end">
            <Link 
              href="/samples" 
              className="w-full sm:w-fit inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 border border-zinc-800 text-white text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl transition-all shadow-md group"
            >
              <PackageCheck className="w-4 h-4 text-emerald-400" /> Dispatch Free Sample Case <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* SECTION 4: TECHNICAL AUDIT FAQ ACCORDION SECTION */}
        <section className="space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-zinc-400 block">Production Intelligence</span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Deployment FAQs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {genericFAQs.map((faq, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/80 p-6 rounded-2xl space-y-3 relative shadow-inner">
                <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h4 className="font-black text-sm text-zinc-900 dark:text-white tracking-tight leading-snug">{faq.q}</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: CROSS-SECTORSupport INJECTIONS */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-zinc-400 block">Cross-Sector Support</span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Explore Other Industry Configurations</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "corporate-business", title: "Corporate & Business", desc: "Foil-stamped presentation folders, annual reports, and premium customized business stock systems." },
              { id: "retail-ecommerce", title: "Retail & E-Commerce", desc: "Crush-resistant rigid box layouts, dynamic custom shipping sleeves, and custom tissue paper." },
              { id: "healthcare-medicare", title: "Healthcare & Medicare", desc: "FDA-compliant batch labelling, instructions mapping booklets, and highly sterile custom kit packing." }
            ].filter(x => x.id !== params.slug).slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-all group">
                <div className="space-y-2">
                  <h4 className="font-black text-zinc-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60 pt-3">
                  <span className="text-[9px] font-mono font-bold tracking-widest bg-zinc-100 dark:bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">ECO AUDITED</span>
                  <Link href={`/industries/${item.id}`} className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    Deploy <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}