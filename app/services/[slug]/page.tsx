"use client";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, CheckCircle2, Gauge, Minimize2, Layers, ShieldCheck, 
  Cpu, Factory, Printer, Shirt, Maximize, Tags, ShoppingBag, 
  PenTool, BookOpen, Contact2, Sparkles, Scale, Settings, 
  ChevronRight, Compass, HelpCircle, FileText, AlertTriangle
} from "lucide-react";

// --- EXPANDED HIGH-FIDELITY INDUSTRIAL CAPABILITIES MATRIX ---
const SERVICES_DATA: Record<string, {
  name: string;
  group: string;
  tagline: string;
  longDesc: string;
  hardwareStack: string;
  icon: any;
  specs: { label: string; value: string }[];
  deepCapabilities: { title: string; desc: string }[];
  productionWorkflow: { step: string; phase: string; details: string }[];
  engineeringChecklist: string[];
  calibrations: { method: string; standard: string };
}> = {
  "digital-printing": {
    name: "Digital Production Printing",
    group: "Core Print Infrastructure",
    tagline: "Short-run flexibility matched with variable data electrophotographic execution.",
    longDesc: "Engineered specifically for enterprise entities requiring rapid localization parameters, dynamic serialization matching, or high-fidelity variable data fields (VDF). Our digital production lines completely eliminate physical plate burn setups, leveraging advanced liquid electrophotographic transfer matrices that chemically bond directly to heavily coated or raw natural fibrous stocks up to 32pt calipers without surface fracturing.",
    hardwareStack: "HP Indigo 12K Digital Press Array & Xerox Iridesse Production Blocks",
    icon: Printer,
    specs: [
      { label: "Maximum Operational Velocity", value: "Up to 4,500 sheets per hour (Over-B2 format)" },
      { label: "Substrate Gauge Tolerance", value: "14pt – 32pt Heavy Caliper Cardboard & Synthetics" },
      { label: "Color Mapping Calibration Space", value: "7-Color Expanded Gamut (CMYK + Orange, Violet, Green)" },
      { label: "Registration Limit Accuracy", value: "Delta E 2000 < 1.2 Micro-Tracking Absolute" }
    ],
    deepCapabilities: [
      { title: "Dynamic Variable Data Matching", desc: "Inject programmatic serial structures, unique 2D localized barcodes, and targeted consumer demographics directly from raw database arrays on a sheet-by-sheet basis at full hardware velocity." },
      { title: "Liquid ElectroInk Tech", desc: "Super-thin ink layering profiles that preserve the organic texture and gloss properties of the underlying premium base stock, preventing the plastic sheen commonly associated with traditional dry toners." },
      { title: "Inline Spectrophotometry", desc: "Real-time continuous color scanning monitors ink densities at microsecond intervals, matching original target parameters perfectly throughout the course of a multi-thousand sheet production track." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Preflight Processing", details: "Automated extraction engines verify geometry, isolate structural transparency bounds, and map native color metrics directly into the digital front end." },
      { step: "02", phase: "Gamut Optimization", details: "Expanded color channels compute optimized custom separation layers to accurately recreate critical corporate spot codes without plates." },
      { step: "03", phase: "Static Charge Transfer", details: "Photo-imaging cylinders selectively accept charge patterns, pulling liquid ink layers cleanly onto specialized heated blankets." },
      { step: "04", phase: "Inline Thermal Bonding", details: "The liquid ink array instantly fuses into a completely dry, cross-linked structural layer as the stock passes through the output corridor." }
    ],
    engineeringChecklist: [
      "Embed all internal raster objects at a strict flat 300 DPI resolution.",
      "Flatten complex transparent structural layers prior to generating output.",
      "Maintain all critical textual content fields at least 0.1875 inches inside trim paths."
    ],
    calibrations: { method: "G7 Master Calibration Framework", standard: "ISO 12647-2 Digital Consistency Profiles" }
  },
  "offset-printing": {
    name: "Commercial Litho-Offset Printing",
    group: "Core Print Infrastructure",
    tagline: "High-volume structural precision plate processing using Heidelberg technology.",
    longDesc: "The undisputed global operational benchmark for heavy mass-replication scaling runs. Our multi-station heavy lithographic lines combine extreme physical plate pressure systems with precise oil-based ink mechanics. By running continuous, laser-imaged aluminum plates, this asset delivers unmatched unit economics and razor-sharp color tracking stability across expansive long-run production curves.",
    hardwareStack: "Heidelberg Speedmaster XL 106 10-Color Perfector",
    icon: Factory,
    specs: [
      { label: "Maximum Operational Velocity", value: "18,000 impressions per operational hour" },
      { label: "Substrate Gauge Tolerance", value: "60lb Ultra-Light Text up to 28pt Solid Packaging Board" },
      { label: "Color Mapping Calibration Space", value: "10-Station Inline Aligned (Custom Spot PMS Mapping)" },
      { label: "Registration Limit Accuracy", value: "Continuous Automated Autoplate Color Control Locking" }
    ],
    deepCapabilities: [
      { title: "Unmatched Long-Run Unit Economics", desc: "As structural print counts expand beyond critical balance points, initial aluminum plate cost overheads amortize to near zero, driving unit pricing down dramatically." },
      { title: "True Inline Coating Application", desc: "Applies protective Flood Aqueous (AQ) protective barriers, high-friction soft-touch films, or protective gloss coatings directly over wet ink layers inside a single unified machine pass." },
      { title: "Pure Pantone Separation", desc: "Utilizes raw premixed chemical ink compounds directly from the Pantone Matching System rather than approximating through typical four-color halftone screen layouts." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Laser CTP Exposure", details: "High-power thermal lasers etch fine microscopic image patterns onto solid anodized aluminum press plates inside a darkroom chamber." },
      { step: "02", phase: "Ink-Water Balance Setup", details: "Water dampening units isolate blank aluminum sections while chemical ink ducts accurately feed designated plate paths." },
      { step: "03", phase: "Blanket Image Transfer", details: "The inked image transitions cleanly off the plate surface and onto a pliable rubber blanket cylinder to shield underlying paper fibers." },
      { step: "04", phase: "High-Speed Impression", details: "Heavy mechanical back-pressure rollers force raw structural paper sheets across the blanket, completing full ink transfer at massive speed." }
    ],
    engineeringChecklist: [
      "Convert all target layout assets entirely into native CMYK color metrics.",
      "Clearly tag spot elements with authentic Pantone Coated (PMS C) formulas.",
      "Supply a full, uniform 0.125-inch external bleed perimeter boundary."
    ],
    calibrations: { method: "Prinect Axis Control Densitometry", standard: "Fogra51 / GRACoL Enterprise Profiles" }
  },
  "screen-printing": {
    name: "Screen Printing & Apparel Lines",
    group: "Core Print Infrastructure",
    tagline: "Heavy-deposit ink layering mapped cleanly onto textiles and rigid corporate materials.",
    longDesc: "Engineered for maximum substrate resilience. Our automated industrial carousel screen systems apply ultra-thick, high-opacity specialized ink films that bind natively to apparel matrices, hard merchandise, and tactile surfaces. This setup ensures long-term industrial wash resistance and high color vibrancy on dark materials.",
    hardwareStack: "M&R Challenger III Automatic Carousel Array & Fusion UV Dryer Tunnels",
    icon: Shirt,
    specs: [
      { label: "Operational Throughput", value: "1,200 finished garments per hour" },
      { label: "Mesh Matrix Density", value: "110 to 355 Monofilament Polyester Thread counts" },
      { label: "Ink Chemistry Selection", value: "Phthalate-Free Plastisols, Water-Based Acrylics, High-Discharge" },
      { label: "Color Station Configuration", value: "14-Station / 12-Color Precision Indexing System" }
    ],
    deepCapabilities: [
      { title: "High-Density Specialty Deposits", desc: "Easily execute tactile textures including dimensional puff inks, reflective glass beads, crystalline glitters, and pure metallic foil adhesive paths." },
      { title: "Discharge Base Stripping", desc: "Chemically extracts the native dye base out of dark natural cotton fibers, replacing it with soft-hand pigmented tones that feel completely textureless." },
      { title: "Precision Optical Tri-Loc", desc: "Mechanical micro-registration brackets lock screen frames to micro-inch tolerances, preventing separation gaps during rapid multi-color printing loops." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Emulsion Exposure", details: "CTS (Computer-to-Screen) solid lasers project high-resolution artwork vectors directly onto UV-sensitive polymer emulsions." },
      { step: "02", phase: "Pneumatic Clamping", details: "Screens are locked into calibrated print heads, then aligned using automatic registration targets." },
      { step: "03", phase: "Squeegee Execution", details: "Controlled hydraulic squeegees push high-viscosity ink through the open mesh fields directly onto the substrate." },
      { step: "04", phase: "Flash Drying Tunnel", details: "Garments exit on high-speed belts, entering continuous radiant heat chambers to instantly cross-link plastisols." }
    ],
    engineeringChecklist: [
      "Isolate every graphic element into clean, independent solid spot channels.",
      "Ensure all custom line-weights maintain a minimum thickness of 1pt.",
      "Convert all typography and font assets into clean vector outlines."
    ],
    calibrations: { method: "Easiway Screen Tension Densitometry", standard: "OEKO-TEX Standard 100 Eco Compliance" }
  },
  "large-format": {
    name: "Industrial Wide-Format Signage",
    group: "Core Print Infrastructure",
    tagline: "High-impact outdoor displays and fine-art presentation banners up to 60 inches wide.",
    longDesc: "Fitted with eco-solvent or UV-curable ink paths, our wide-format machinery rolls out expansive visual real estate without compromising crisp micro-details or color saturation metrics.",
    hardwareStack: "EFI VUTEk h5 & Roland DG TrueVIS VG3-640 Roll Systems",
    icon: Maximize,
    specs: [
      { label: "Native Resolution", value: "1200 DPI High-Density Printheads" },
      { label: "Material Clearance", value: "Up to 60 inches wide roll-to-roll" },
      { label: "Ink Framework", value: "UV-Stabilized Weatherproof Pigment" },
      { label: "Substrate Profiles", value: "Scrim Vinyl, Matte Canvas, Foam Corrugation" }
    ],
    deepCapabilities: [
      { title: "Weatherproof UV-Stabilization", desc: "Inks are instantly cross-linked using industrial LED curing arrays, ensuring long-term fade resistance against harsh outdoor sunlight." },
      { title: "Multi-Layer White Ink", desc: "Prints high-opacity white ink foundations beneath standard CMYK configurations, allowing vibrant graphics on clear films." },
      { title: "Inline Contour Ploting", desc: "Integrates ultra-precise cutting blades that track along complex vector contours, trimming decals smoothly." }
    ],
    productionWorkflow: [
      { step: "01", phase: "RIP Rasterization", details: "Industrial RIP engines slice incoming vector files into multi-channel high-density raster patterns." },
      { step: "02", phase: "Media Tracking Setup", details: "Vacuum beds secure rigid or rolling substrates to eliminate media skewing during printhead passes." },
      { step: "03", phase: "Piezoelectric Jetting", details: "Micro-piezo printheads fire billions of microscopic ink droplets per second across the material." },
      { step: "04", phase: "LED Solidification", details: "High-intensity UV lamps follow immediately behind the printheads, instantly solidifying the ink layer." }
    ],
    engineeringChecklist: [
      "Ensure asset scale is configured to exact 1:1 sizing parameters.",
      "Maintain a 150 DPI minimum resolution for high-resolution graphics.",
      "Specify your dynamic grommet layout coordinates on a separate guide layer."
    ],
    calibrations: { method: "X-Rite i1Pro Spectral Profiling", standard: "ISO 12647-7 Large Format Proofing" }
  },
  "flexography": {
    name: "Flexography Web Packaging",
    group: "Core Print Infrastructure",
    tagline: "Continuous roll-fed web rotary systems engineered for maximum scaling speed.",
    longDesc: "Designed around rapid consumer goods roll production. This high-speed flexographic platform channels flexible films, polymer plate layers, and fast-drying inks to supply packaging lines with labels or flexible pouches smoothly.",
    hardwareStack: "Mark Andy Performance Series P7 & Nilpeter FA-Line Multi-Substrate Presses",
    icon: Cpu,
    specs: [
      { label: "Web Velocity Limit", value: "Up to 500 linear feet/min" },
      { label: "Substrate Scope", value: "Clear BOPP, Metallized Films, Flexible Foil" },
      { label: "Ink Solid Base", value: "Fast-Curing UV & Fluid Water-Based Tones" },
      { label: "Registration Limit", value: "Automated Continuous Web Eye-Mark Tracking" }
    ],
    deepCapabilities: [
      { title: "High-Speed Roll-to-Roll Execution", desc: "Maintains optimal web tension across miles of material, providing perfect output for high-volume consumer product label lines." },
      { title: "Inline Surface Lamination", desc: "Applies clear protective films or matte varnishes directly over printed sections to resist scratching or moisture exposure." },
      { title: "Anilox Roll Measurement", desc: "Laser-engraved ceramic rollers transfer precise volumes of ink to the flexible plates, keeping print densities uniform." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Photopolymer Imaging", details: "Flexible printing plates are imaged with UV lasers and washed to expose raised geometric patterns." },
      { step: "02", phase: "Cylinder Mounting", details: "Plates are securely attached to high-precision rotating cylinders using double-sided mounting adhesives." },
      { step: "03", phase: "Continuous Ink Feed", details: "Anilox rollers pick up fluid ink from reservoirs, transferring a controlled film directly onto the plates." },
      { step: "04", phase: "Web Rotary Stamp", details: "The substrate web travels between the plate cylinder and impression roller, transferring ink instantly." }
    ],
    engineeringChecklist: [
      "Incorporate precise registration packaging tracking eye-marks.",
      "Account for fractional distortion adjustments on circular plate models.",
      "Verify minimum trailing trap thresholds cross 0.005 inches cleanly."
    ],
    calibrations: { method: "AVT Helios Inline Vision Inspections", standard: "FTA FIRST Flexographic Quality Standards" }
  },
  "custom-boxes": {
    name: "Custom Structural Packaging Boxes",
    group: "Structural Packaging & Identity",
    tagline: "CAD-designed protective parameters and secondary containment units.",
    longDesc: "Premium physical structures engineered to shield commercial products throughout intense automated delivery pathways while maximizing retail unboxing impacts. Our structural engineers create exact customized cutting paths using robust corrugation fibers that pass stringent edge-crush evaluation standards, keeping your logistics pipeline safe from damaged-goods return liabilities.",
    hardwareStack: "Bobst Novacut 106 ER & Kongsberg XP Auto Plotting Tables",
    icon: Layers,
    specs: [
      { label: "Maximum Operational Velocity", value: "Up to 8,000 structural sheets/hr mechanical blanking" },
      { label: "Substrate Gauge Tolerance", value: "A, B, C, E, F Flute Profiles & Rigid Chipboard Boxboard" },
      { label: "Color Mapping Calibration Space", value: "High-Build Flexographic Inline Inks or Litho-Lamination" },
      { label: "Registration Limit Accuracy", value: "ECT-32 to ECT-44 Structural Verification Rating Standards" }
    ],
    deepCapabilities: [
      { title: "Bespoke Dieline Geometric Layouts", desc: "Every structural layout gets calculated down to fractions of a millimeter around the explicit mass volume parameters of your physical product line." },
      { title: "Edge-Crush-Tested Materials", desc: "We utilize multi-layer corrugated liners that provide significant vertical structural resistance against crushing forces inside sorting facilities." },
      { title: "Flawless Post-Print Lamination", desc: "Optionally couples raw structural corrugation directly with ultra-high-resolution offset printed face sheets via specialized automated paperboard adhesive lines." }
    ],
    productionWorkflow: [
      { step: "01", phase: "CAD Structural Plan", details: "Package engineers map geometric crease points, compression limits, and interlocking structural flaps within structural CAD engines." },
      { step: "02", phase: "Steel-Rule Die Tooling", details: "Laser cutters cut solid wood bases before precision steel creasing bands are manually slotted into place." },
      { step: "03", phase: "High-Pressure Blanking", details: "Heavy mechanical press jaws clamp raw corrugated boards across the die, instantly cleanly separating your final flat layout shapes." },
      { step: "04", phase: "Automated Folder-Gluing", details: "High-speed continuous tracking belts route flat boards through glue applicators, folding manufacturing seams accurately." }
    ],
    engineeringChecklist: [
      "Isolate technical structural cutting geometries on an independent layer.",
      "Distinguish scoring, creasing, and exterior cutting steps with bright colors.",
      "Ensure overlapping closing tabs do not cross over critical graphic text lines."
    ],
    calibrations: { method: "TAPPI T811 Edge Crush Verification Testing", standard: "ASTM D5118 Distribution Box Guidelines" }
  },
  "stickers-labels": {
    name: "Labels & Weatherproof Stickers",
    group: "Structural Packaging & Identity",
    tagline: "Precision die-cut adhesive configurations built for extreme outdoor element survival.",
    longDesc: "Operating pressure-sensitive permanent acrylic adhesive compounds, our specialized label assemblies print and shape custom assets onto roll carriers or individual layout sheets effortlessly.",
    hardwareStack: "ABG Digicon Series 3 Digital Finishing System & Gallus EM 280 Press Matrix",
    icon: Tags,
    specs: [
      { label: "Finishing Process", value: "Inline Digital Semi-Rotary Die Cutting" },
      { label: "Base Stock Variety", value: "BOPP Film, White Vinyl, Semi-Gloss Paper" },
      { label: "Adhesive Strength", value: "High-Tack Industrial Acrylic Marine-Grade" },
      { label: "Top Coat Seal", value: "Digital Spot Gloss / Zero-Reflect Matte Varnish" }
    ],
    deepCapabilities: [
      { title: "Industrial Chemical Resistance", desc: "Equipped with specialized topcoats that resist degradation from moisture, oils, and harsh chemical cleaning solutions." },
      { title: "High-Speed Label Dispensation", desc: "Roll formatting matches precise machine tension levels, preventing tearing during high-velocity product packaging lines." },
      { title: "Custom Backing Slits", desc: "Features easy-peel liners with micro-scored crack lines to streamline manual product labeling applications." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Adhesive Priming", details: "Substrates receive thin uniform corona discharges to increase ink anchorage across poly films." },
      { step: "02", phase: "High-Definition Pass", details: "Graphics are laid down using high-density inks to capture crisp 4pt fonts and fine graphic vectors." },
      { step: "03", phase: "Protective Varnishing", details: "Clear lacquer seals are applied inline, followed by UV lamp exposure to cure the protective shield." },
      { step: "04", phase: "Semi-Rotary Die Cut", details: "Magnetic steel sheets kiss-cut through the top face material while leaving the carrier roll untouched." }
    ],
    engineeringChecklist: [
      "Apply a crisp 0.0625-inch inner text safe boundary from the cut path.",
      "Delineate vector cut strokes using 0.25pt bright magenta tracks.",
      "Group nested path assets securely into clean combined vector structures."
    ],
    calibrations: { method: "FINAT FTM-1 Peel Adhesion Metrics", standard: "UL 969 Industrial Label Certification Standards" }
  },
  "shopping-bags": {
    name: "Bags & Pouches",
    group: "Structural Packaging & Identity",
    tagline: "Eco-friendly premium retail carrying options crafted from heavy-duty fibers.",
    longDesc: "Constructed with reinforced turned tops, stable block-bottom foundations, and ergonomic handles, our luxury consumer carrier bags translate standard retail moments into premium marketing channels.",
    hardwareStack: "Newlong Shopping Bag Manufacturing Machineries & Holweg Pouch Assemblers",
    icon: ShoppingBag,
    specs: [
      { label: "Assembly Method", value: "Automated Mechanical Bottom-Folding Lines" },
      { label: "Paper Density", value: "120GSM to 210GSM Kraft / Bleached Art Stock" },
      { label: "Handle Integration", value: "Twisted Paper, Grossgrain Ribbon, Cotton Rope" },
      { label: "Load Capacity Limit", value: "Up to 15kg Dynamic Structural Pull Force" }
    ],
    deepCapabilities: [
      { title: "Reinforced Structural Points", desc: "Integrates heavy cardboard patches beneath turned-top rims and base panels to eliminate tearing at load points." },
      { title: "Soy-Based Ink Formulation", desc: "Uses non-toxic, plant-based ink configurations that meet rigorous corporate eco-responsibility initiatives." },
      { title: "Premium Embossed Foil", desc: "Applies high-temperature metallic foil coatings across branded paths, producing deep luxury reflectivity." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Web Feed & Print", details: "High-strength kraft paper rolls enter multi-color flexo stations to receive full-bleed graphics." },
      { step: "02", phase: "Tube Gusset Formation", details: "Continuous paper tracks pass over folding plates, creating clean side gussets and forming tubes." },
      { step: "03", phase: "Bottom Paste Clamping", details: "Tubes are trimmed to length, and the bases are folded and hot-glued under heavy mechanical pressure." },
      { step: "04", phase: "Handle Punch Assembly", details: "Automated modules punch alignment holes or attach twisted cord components securely." }
    ],
    engineeringChecklist: [
      "Account for layout distortion inside the structural fold panels.",
      "Leave base panel overlap zones clean of heavy primary copy blocks.",
      "Submit fully expanded flat bag templates including all layout tabs."
    ],
    calibrations: { method: "ISO 11058 Tensile Strength Verification", standard: "BPI Certified Compostable Material Standards" }
  },
  "brand-identity": {
    name: "Brand Identity & Design",
    group: "Structural Packaging & Identity",
    tagline: "Strategic visual architecture mapping and premium prepress optimization.",
    longDesc: "Our structural layout department aligns abstract branding concepts directly into realistic, high-efficiency production blueprints, modifying parameters to reduce structural waste metrics cleanly.",
    hardwareStack: "Esko ArtiosCAD Studio Suites & SolidWorks Enterprise Modeling Desks",
    icon: PenTool,
    specs: [
      { label: "Engineering Engine", value: "High-Fidelity CAD SolidWorks / Esko Engine" },
      { label: "Deliverable Outcome", value: "Production-Ready 3D PDF & Flat Dieline Specs" },
      { label: "Prototyping Table", value: "Kongsberg Precision Flatbed Sample Plotter" },
      { label: "Validation System", value: "Full-Scale Visual Render Match Testing" }
    ],
    deepCapabilities: [
      { title: "3D Volumetric Analysis", desc: "Simulates product weight and center of gravity within CAD software to optimize interior box cushioning shapes." },
      { title: "Preflight Sheet Nesting", desc: "Calculates nested patterns across standard manufacturing sheet profiles to reduce material waste." },
      { title: "Physical Sample Generation", desc: "Cuts unprinted structural samples on precision plotter tables for real-world fit testing before full runs." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Asset Intake Analysis", details: "Design files undergo vector node analysis to check line integrity and isolate potential trim flaws." },
      { step: "02", phase: "Volumetric Modeling", details: "Component coordinates generate dynamic 3D dieline mockups to check fit tolerances." },
      { step: "03", phase: "Color Profile Mapping", details: "Visual targets convert into device-independent color spaces using ICC profiling rules." },
      { step: "04", phase: "Blueprinted Approval", details: "Finalized production proofs lock down spot codes and trim paths before launching full runs." }
    ],
    engineeringChecklist: [
      "Provide complete reference assets inside open vector formats (.AI / .EPS).",
      "Enclose corporate branding guidelines and exact color hex codes.",
      "Detail exact functional volume specifications for contents early."
    ],
    calibrations: { method: "ICC Color Profile Device Alignment", standard: "ISO 12642-2 Color Characterization Standards" }
  },
  "marketing-materials": {
    name: "Marketing Materials",
    group: "Specialty Commercial Printing",
    tagline: "Premium catalog tracking, saddle-stitched product profiles, and corporate multi-folds.",
    longDesc: "Designed to secure audience eyes across trade venues and business boardrooms. Our collateral lines aggregate sharp high-density toner arrays with high-precision folding tools to turn flat sheets into compact booklets instantly.",
    hardwareStack: "Horizon StitchLiner Mark III & Heidelberg Stahlfolder Fold Systems",
    icon: BookOpen,
    specs: [
      { label: "Binding Formats", value: "Saddle-Stitch, Perfect-Bound, Wire-O Matrix" },
      { label: "Sheet Calibration", value: "Automated Inline Suction Pile Insertion" },
      { label: "Paper Range", value: "70lb Text to 120lb Premium Cover Stock" },
      { label: "Coating Coverage", value: "Flood Aqueous (AQ) / Digital Velvet Finish" }
    ],
    deepCapabilities: [
      { title: "Zero-Fracture Scoring", desc: "Applies localized moisture and scoring tracks before folding to prevent fiber cracking along dense ink fields." },
      { title: "Automated Collation Verification", desc: "Integrates optical sensor arrays that inspect signatures inline to prevent page omission or ordering errors." },
      { title: "Lay-Flat Signature Design", desc: "Adjusts outer margins automatically to compensate for outer page creep inside thick booklets." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Signature Imposition", details: "Software sequences individual pages onto multi-up forms to ensure correct ordering post-fold." },
      { step: "02", phase: "High-Definition Press", details: "Forms pass through high-capacity digital or litho presses for fine text reproduction." },
      { step: "03", phase: "Buckle Folder Routing", details: "Printed sheets enter automated folder tracks to form signature packets." },
      { step: "04", phase: "Three-Knife Trimming", details: "Bound signature edges are trimmed simultaneously with heavy blades for square, flush page edges." }
    ],
    engineeringChecklist: [
      "Supply multipage layout pages as single, sequential document sheets.",
      "Verify the internal total page counts divide evenly by 4 for stitches.",
      "Extend design bleeds into the spine crease zones uniformly."
    ],
    calibrations: { method: "Pneumatic Thickness Creep Checking", standard: "ISO 16759 Booklet Binding Regulations" }
  },
  "business-cards": {
    name: "Business Stationery",
    group: "Specialty Commercial Printing",
    tagline: "Executive communication suites maintaining continuous color matching accuracy.",
    longDesc: "Establish absolute authority across commercial markets. Our business card and stationery processes mix artisan boardweights with modern digital surface treatments to project premium stability.",
    hardwareStack: "Duplo DC-646 Slitter/Cutter/Creaser & Sakurai Cylinder UV Coaters",
    icon: Contact2,
    specs: [
      { label: "Cutter Framework", value: "Micro-Channeled Hydraulic Pile Choppers" },
      { label: "Thickness Metrics", value: "Super-Heavy 16pt up to 32pt Luxury Duplex" },
      { label: "Matching Bounds", value: "Strict Envelope Letterhead Coordination" },
      { label: "Edge Finishing", value: "Custom Foil Edging / Solid Matte Pigment Tinting" }
    ],
    deepCapabilities: [
      { title: "Raised Tactile Spot UV", desc: "Utilizes high-build polymer printheads to deposit clear, dimensional textures exactly over logo lines." },
      { title: "Duplex Board Interlocking", desc: "Bonds two distinct premium cardboards together under hydraulic pressure to create multi-colored edges." },
      { title: "Hydraulic Clean Trimming", desc: "Cuts card arrays using computer-guided blades to eliminate paper burrs or micro-tears." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Duplex Adhesion", details: "Contrasting premium card sheets are bonded with structural adhesive film when producing thick stocks." },
      { step: "02", phase: "Graphic Imprinting", details: "High-resolution text arrays and solid backgrounds are laid down using fine density tracking." },
      { step: "03", phase: "Polymer Texture Pass", details: "Cards enter inkjet modules to receive dimensional spot UV coatings over targeted logo paths." },
      { step: "04", phase: "CCD Cutter Splitting", details: "Optical cameras track print marks on the sheets, adjusting blade paths dynamically for centered borders." }
    ],
    engineeringChecklist: [
      "Convert all vector element profiles into solid 100% true channels.",
      "Avoid ultra-fine thin serifs on multi-layered thick card items.",
      "Keep text placements safe from precise hydraulic cutter paths."
    ],
    calibrations: { method: "Optical Mark Camera Verification", standard: "ISO 216 Stationery Aspect Formats" }
  },
  "wedding-cards": {
    name: "Specialty Finishes & Invitations",
    group: "Specialty Commercial Printing",
    tagline: "Artisanal compression treatments, deep hot foil sheets, and rich textured events.",
    longDesc: "Perfect for event coordinators and premium lifestyle branding systems. This dedicated studio section blends ancestral platen compression methods with bright metallic materials to etch artwork deep inside soft cotton boards.",
    hardwareStack: "Kluge EHD Series Foil Stamping Press & Heidelberg Windmill Letterpress Units",
    icon: Sparkles,
    specs: [
      { label: "Pressure Matrix", value: "Heavy-Duty Platen Mechanical Clamping Plates" },
      { label: "Foil Core Layer", value: "Premium Metallic Foil Matrices (Gold, Copper, Chrome)" },
      { label: "Debossing Target", value: "Deep Dual-Level Dimensional Inset Footprints" },
      { label: "Stock Calibration", value: "100% Recycled Soft Cotton-Rag Fibers" }
    ],
    deepCapabilities: [
      { title: "Deep Dimensional Debossing", desc: "Forces custom magnesium dies directly into thick, soft cotton stocks, creating elegant recesses you can feel." },
      { title: "High-Temperature Foil Stamps", desc: "Fuses brilliant metallic foils onto paper stocks using heated brass dies, creating clean edges and reflective surfaces." },
      { title: "Intricate Die Die-Cutting", desc: "Trims complex lace-like patterns and custom shapes into event cards using sharp custom-bent steel dies." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Magnesium Die Etch", details: "Chemical milling processes etch custom graphic paths onto solid magnesium plates." },
      { step: "02", phase: "Thermal Lock Setup", details: "Dies lock into heated press beds, adjusting to target temperatures to activate foil adhesives." },
      { step: "03", phase: "Foil Ribbon Advance", details: "Automated rollers advance fresh metallic foil ribbons across the substrate before each impression cycle." },
      { step: "04", phase: "Mechanical Platen Stamp", details: "Heavy platen jaws close under tons of pressure, transferring the foil cleanly into the paper fibers." }
    ],
    engineeringChecklist: [
      "Isolate hot foil path structures onto an independent vector group.",
      "Set overlapping deep stamping plates with a minimum 2pt shift space.",
      "Use heavy, highly porous un-calendered cotton card bases."
    ],
    calibrations: { method: "Pyrometric Heat Target Calibration", standard: "PNE-ISO Letterpress Dimensional Tracking" }
  }
};

// --- ANIMATION STYLES CONFIGURATION ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function ServiceSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  // Data matrix lookup or 404 fallback
  const data = SERVICES_DATA[slug];
  if (!data) return notFound();

  const IconComponent = data.icon;

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-32 pb-24 antialiased">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
      >
        
        {/* TOP METRIC NAVIGATION CONTEXT */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/60 dark:border-zinc-900 pb-6">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-black text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Plant Infrastructure
          </Link>
          <div className="flex items-center gap-4 text-xs font-mono font-bold text-zinc-400">
            <span className="bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-md border border-zinc-200/40 dark:border-zinc-800/40">{data.group}</span>
            <span className="text-indigo-600 dark:text-indigo-400">ID: {slug}</span>
          </div>
        </motion.div>

        {/* INDUSTRIAL HEADER HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-xl shadow-indigo-600/10"
            >
              <IconComponent className="w-7 h-7" />
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-zinc-900 dark:text-white">
              {data.name}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg sm:text-2xl text-indigo-600 dark:text-indigo-400 font-extrabold tracking-tight">
              {data.tagline}
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-4xl">
              {data.longDesc}
            </motion.p>
            
            {/* Plant Machinery Designation Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-3.5 rounded-xl text-xs font-medium max-w-xl">
              <Settings className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 animate-spin-slow" />
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong className="text-zinc-900 dark:text-white">Active Plant Allocation:</strong> {data.hardwareStack}
              </span>
            </motion.div>
          </div>

          {/* SIDEBAR: OPERATIONAL BLUEPRINT */}
          <motion.div 
            variants={itemVariants}
            className="bg-zinc-900 text-white p-6 rounded-2xl border border-zinc-800 space-y-6 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Gauge className="w-4 h-4 text-indigo-400" />
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-300">Operational Parameters</h3>
            </div>
            
            <div className="space-y-4 font-medium text-xs">
              {data.specs.map((spec, i) => (
                <div key={i} className="space-y-1">
                  <span className="block text-zinc-500 uppercase tracking-widest text-[9px] font-bold">{spec.label}</span>
                  <span className="font-mono text-zinc-200 text-sm leading-tight block">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-3 text-[10px] font-mono text-zinc-400">
              <div>
                <span className="block text-zinc-600 font-bold uppercase tracking-wider scale-90 origin-left">Spectral Target</span>
                <span className="text-emerald-400 font-bold">Passed Target</span>
              </div>
              <div>
                <span className="block text-zinc-600 font-bold uppercase tracking-wider scale-90 origin-left">Certification Track</span>
                <span className="text-indigo-400 font-bold">Enterprise System</span>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.hr variants={itemVariants} className="border-zinc-200/60 dark:border-zinc-900" />

        {/* CORE CAPABILITIES STAGGER GRID */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5"><Compass className="w-4 h-4" /> Production Scope Detail</span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">Technical Core Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.deepCapabilities.map((cap, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm space-y-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-black font-mono">
                  0{i+1}
                </div>
                <h3 className="font-bold text-base tracking-tight text-zinc-900 dark:text-white">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE INTERLOCKING WORKFLOW PIPELINE */}
        <motion.section variants={itemVariants} className="bg-zinc-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-4 lg:pr-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Step-by-Step Production Processing</span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">The Plant Floor Pipeline</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                Interact with the workflow steps to track how raw design documents route, verify, transform, and deliver across our internal manufacturing modules.
              </p>
              
              {/* Vertical Tab Controls */}
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pt-4 pb-2 lg:py-0 scrollbar-none">
                {data.productionWorkflow.map((flow, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveWorkflowStep(i)}
                    className={`px-4 py-2.5 rounded-xl text-left text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center justify-between border ${
                      activeWorkflowStep === i 
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg" 
                        : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <span>Phase {flow.step}</span>
                    <ChevronRight className={`w-3.5 h-3.5 hidden lg:block transition-transform ${activeWorkflowStep === i ? "translate-x-0.5" : "opacity-0"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Container Display Panel */}
            <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkflowStep}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded">
                      Current Focus Operations
                    </span>
                    <span className="text-xs font-black font-mono text-zinc-600">
                      Module Phase {data.productionWorkflow[activeWorkflowStep].step}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    {data.productionWorkflow[activeWorkflowStep].phase}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                    {data.productionWorkflow[activeWorkflowStep].details}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-1 pt-6 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 mt-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Automated Press System Synchronized
              </div>
            </div>
          </div>
        </motion.section>

        {/* COMPLIANCE CHECKLIST */}
        <motion.section variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-8 sm:p-12 rounded-3xl shadow-sm">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 dark:text-white">Preflight Validation Checklist</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
              To minimize production anomalies, incoming design files must strictly meet these alignment thresholds prior to formatting physical lines.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {data.engineeringChecklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-900 p-4 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-normal">{item}</span>
              </div>
            ))}
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-100 dark:border-zinc-950 mt-4 text-[11px] text-zinc-400 font-mono w-full">
              <span className="flex items-center gap-1.5"><Scale className="w-3.5 h-3.5 text-indigo-500" /> Method: {data.calibrations.method}</span>
              <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-indigo-500" /> Standard: {data.calibrations.standard}</span>
            </div>
          </div>
        </motion.section>

        {/* CALL TO ACTION HUB BRIDGE */}
        <motion.section variants={itemVariants} className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 max-w-5xl mx-auto shadow-2xl shadow-indigo-600/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-30 mix-blend-overlay pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight max-w-xl mx-auto leading-tight">Ready to map this specific track to your next project?</h2>
          <p className="text-xs sm:text-sm text-indigo-100 font-medium max-w-2xl mx-auto leading-relaxed">
            Connect directly with our engineering coordinators. Submit your material profiles, custom dielines, and run matrices to receive an instant mechanical quote layout.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-zinc-950 text-white font-black px-8 py-4 rounded-xl shadow-xl hover:bg-zinc-900 transition-colors text-xs uppercase tracking-widest">
              Initiate Production Ticket <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}