"use client";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  ArrowLeft, CheckCircle2, Gauge, Factory, Printer, Shirt, 
  Settings, ChevronRight, Compass, FileText, AlertTriangle,
  Scale, Box, Bookmark, ShoppingBag, Layers, FileCheck, Eye, Sparkles
} from "lucide-react";

// --- FULL EXTENSIVE HIGH-FIDELITY INDUSTRIAL CAPABILITIES MATRIX ---
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
      { label: "Substrate Gauge Tolerance", value: "60lb Text up to 28pt Solid Packaging Board" },
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
    tagline: "High-impact architectural and display scaling layouts up to 60 inches wide.",
    longDesc: "Tailored for industrial environmental design, long-term outdoor exhibits, and trade show structural systems. Our wide-format lines harness instant UV-LED curing drop-on-demand technology to drop dense ink droplets onto difficult flexible, rigid, or textured materials with superior scratch resistance and absolute UV stability.",
    hardwareStack: "Roland DG IU-1000F Flatbed UV Press & Mimaki EJ-640 High-Output Systems",
    icon: Compass,
    specs: [
      { label: "Maximum Dynamic Resolution", value: "1200 x 1200 DPI Native Multi-Drop Array" },
      { label: "Print Corridor Footprint", value: "Up to 60-inch flexible rolls or 4ft x 8ft solid flatbeds" },
      { label: "Curing Architecture Matrix", value: "Dual Integrated Cool-UV LED Exposure Rails" },
      { label: "Substrate Profile Scope", value: "Scrim Vinyl, Gatorboard, Canvas, Acrylics, Metals" }
    ],
    deepCapabilities: [
      { title: "Architectural UV Fusing", desc: "Polymerizes ink drops mid-air using safe UV lamps, causing them to cure instantly on solid sheets without bleeding or warping." },
      { title: "Heavy Opaque Base White", desc: "Lays down an intense solid white background beneath graphics to preserve color precision when working with clear acrylics or dark woods." },
      { title: "Multi-Layer Surface Texturing", desc: "Stacks clear gloss layers repeatedly onto specific target spots to create realistic wood grain effects or clear braille notation pathways." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Raster Profiling", details: "Specialized RIP engines upscale input images, adjusting dot distribution charts according to target surface coefficients." },
      { step: "02", phase: "Flatbed Placement", details: "Substrates lock flat using high-pressure vacuum zones to avoid edge shifts during multi-pass cycles." },
      { step: "03", phase: "Micro-Step Print Track", details: "Piezo heads release ink drops while UV lights instantly solidify the layer behind them." },
      { step: "04", phase: "Precision Finish Trim", details: "Automated digital knives trace dynamic cut markers to yield clean, exact borders." }
    ],
    engineeringChecklist: [
      "Ensure all large embedded raster images maintain a clean 150-300 DPI layout scale.",
      "Keep custom cutting vectors completely separate from printing layers.",
      "Define custom layout dimensions using precise absolute target millimeter calculations."
    ],
    calibrations: { method: "X-Rite i1Pro 3 Spectrophotometric Systems", standard: "ISO 12647-8 Validation Standard Certifications" }
  },
  "flexography": {
    name: "Flexography Web Packaging",
    group: "Core Print Infrastructure",
    tagline: "Continuous high-speed roll-fed web rotary systems for labels and packaging films.",
    longDesc: "The ultimate choice for high-speed continuous packaging runs. Our industrial web-fed flexographic arrays run long rolls of polymer materials at blazing speeds, making them perfect for shrink sleeves, flexible stand-up food pouches, and massive consumer product label requirements.",
    hardwareStack: "Mark Andy Performance Series P7 Advanced Web Rotary Array",
    icon: Layers,
    specs: [
      { label: "Web Operational Speed", value: "Continuous execution up to 500 feet per minute" },
      { label: "Anilox Roll Configuration", value: "Laser-engraved ceramic configurations up to 1200 LPI" },
      { label: "Material Profile Options", value: "BOPP Films, Clear Vinyls, PETG Shrink, Foil Laminations" },
      { label: "Drying Infrastructure Matrix", value: "Integrated High-Velocity Forced Air + Inline UV Modules" }
    ],
    deepCapabilities: [
      { title: "Continuous Roll Packaging", desc: "Maintains absolute tension across endless film arrays to enable direct high-speed downstream automated bottleneck labeling applications." },
      { title: "Advanced Anilox Metering", desc: "Laser-engraved cells meter consistent micro-volumes of low-viscosity ink onto rubber printing plates, delivering uniform coverage at high speeds." },
      { title: "Inline Secondary Conversion", desc: "Combines hot foil applying, rotary die cutting, and waste strip matrix removal inside one single pass." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Polymer Plate Mounting", details: "Flexible photopolymer plates are secured to steel printing cylinders using high-strength double-sided tape." },
      { step: "02", phase: "Web Path Tensioning", details: "Base material rolls feed through automated tensioning tracks to eliminate wrinkles and shifting." },
      { step: "03", phase: "Rotary Ink Application", details: "The anilox roller inks the raised plate details, which cleanly imprint onto the moving film web." },
      { step: "04", phase: "Dynamic Die Cutting", details: "Continuous rotary metal cylinders cut outer label profiles before rewinding the finished roll." }
    ],
    engineeringChecklist: [
      "Account for distortion factors when wrapping design assets around rotary plate plates.",
      "Keep all essential small text elements set above a minimum size of 4pt.",
      "Verify that backing opacity masks match clear transparent film regions."
    ],
    calibrations: { method: "Troika AniCAM Anilox Inspection Controls", standard: "FTA FIRST Flexographic Specifications Benchmarks" }
  },
  "custom-boxes": {
    name: "Custom Structural Packaging Boxes",
    group: "Structural Packaging & Identity",
    tagline: "CAD-designed protective parameters verified via edge-crush analysis.",
    longDesc: "Engineered to form high-strength physical armor shields for commercial items. We design and build custom corrugated mailers and luxury chipboard setups from scratch, using edge-crush structural tests to guarantee your items survive transit safely.",
    hardwareStack: "Bobst VisionCut 160 Die-Cutting Matrix & Multi-Point Folder-Gluers",
    icon: Box,
    specs: [
      { label: "Structural Performance Grade", value: "ECT-32 to ECT-44 Structural Certification Scale Pass" },
      { label: "Flute Thickness Profiles", value: "A, B, C, E, F Ultra-Low to Heavy Double-Wall Profiles" },
      { label: "Converting Velocity Metric", value: "Inline Automated Flatbed Cutting up to 4,500 units/hr" },
      { label: "Assembly Configuration", value: "Multi-Point Automatic Glue Systems (Crash-Lock / Straight)" }
    ],
    deepCapabilities: [
      { title: "Edge-Crush Strength Assurance", desc: "Rigorous testing guarantees box layers resist collapsing under extreme stacking forces during transport." },
      { title: "Flute Engineering Choices", desc: "Mix and match fine E/F flutes for sharp retail printing, or utilize heavy A/B options to support industrial equipment weight." },
      { title: "Premium Rigid Enclosures", desc: "Wraps heavy structural board in soft, luxury papers to create high-end presentation boxes for consumer goods." }
    ],
    productionWorkflow: [
      { step: "01", phase: "CAD Dieline Creation", details: "Engineers generate precise interlocking structural layout plans based on 3D product physical shapes." },
      { step: "02", phase: "Board Corrugation", details: "Heavy liners are bonded over fluted inner arches to create stable, rigid sheets." },
      { step: "03", phase: "Die-Plate Pressing", details: "Sharp steel blades punch out shape perimeters and press clean fold creases into the board." },
      { step: "04", phase: "Folding & Adhesion", details: "Automated arms fold sides inward, applying strong cold glue tracks to seal structural joints." }
    ],
    engineeringChecklist: [
      "Include dynamic creep allowance parameters to compensate for thick paper folds.",
      "Map structural cutting paths with solid lines and fold creases with dashed marks.",
      "Leave targeted adhesive tabs completely free of ink and vanish layers."
    ],
    calibrations: { method: "TAPPI T 811 Edge-Crush Verification Tests", standard: "ASTM D642 Package Compression Standards" }
  },
  "stickers-labels": {
    name: "Labels & Weatherproof Stickers",
    group: "Structural Packaging & Identity",
    tagline: "Roll-fed pressure-sensitive substrates with durable inline varnish seals.",
    longDesc: "Engineered to resist harsh environmental exposure. These label systems utilize specialized pressure-sensitive substrates paired with chemical barrier varnishes, keeping graphics safe from moisture, oils, and intense sunlight.",
    hardwareStack: "SEI Laser Label Die-Cutting Blocks & Gallus RCS Label Arrays",
    icon: Bookmark,
    specs: [
      { label: "Die Cutting Accuracy Metric", value: "Digital Laser Matrix Cutting down to +/- 0.05mm offsets" },
      { label: "Adhesive Chemistry Grade", value: "Permanent / Removable Acrylic Base Structural Grades" },
      { label: "Material Face Choices", value: "High-Gloss Paper, Matte Weatherproof Vinyl, Clear Polypropylene" },
      { label: "Finishing Barrier Layer", value: "Inline UV Matte/Gloss Over-Varnish & PET Lamination Seals" }
    ],
    deepCapabilities: [
      { title: "Laser Die Matrix Cutting", desc: "Uses software-guided laser beams to cut intricate sticker outlines, eliminating the need for expensive metal die plates." },
      { title: "True Clear Transparent Invis", desc: "Applies graphics to clear films so perfectly that they look like they are printed directly onto glass or plastic containers." },
      { title: "Harsh-Environment Shielding", desc: "Tough varnish coats block oils, chemicals, and outdoor elements to prevent graphics from smudging or fading over time." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Substrate Loading", details: "Rolls of raw vinyl or paper feed into multi-station printing lanes under tension." },
      { step: "02", phase: "Under-Print Coating", details: "A solid layer of dense white ink prints onto clear films to ensure colors stay vibrant." },
      { step: "03", phase: "Color Graphic Laydown", details: "High-definition ink arrays apply designs, following registration marks perfectly." },
      { step: "04", phase: "Laser Die Vaporization", details: "High-power lasers cut out the sticker shapes before excess material is pulled away." }
    ],
    engineeringChecklist: [
      "Provide a clean 0.0625-inch inner border safety margin around cutting vectors.",
      "Keep all fine cutting path nodes clean, smooth, and simple to avoid burning.",
      "Specify if labels require specific winding directions for automated application machinery."
    ],
    calibrations: { method: "FINAT FTM-1 Adhesive Peel Testing Systems", standard: "UL 969 Component Labeling Reliability Standards" }
  },
  "shopping-bags": {
    name: "Eco-Friendly Bags & Pouches",
    group: "Structural Packaging & Identity",
    tagline: "Recycled premium kraft carriers engineered for high dynamic load limits.",
    longDesc: "Sustainable structural retail packaging options built to perform. Our high-velocity bag lines shape recycled kraft stock into heavy carrier bags with reinforced bases and handles, combining eco-friendly targets with high weight capacities.",
    hardwareStack: "Newlong Shopping Bag Manufacturing Infrastructure Blocks",
    icon: ShoppingBag,
    specs: [
      { label: "Dynamic Load Limit Capacity", value: "Certified handling up to 15kg Dynamic Weight Limits" },
      { label: "Base Substrate Weights", value: "120GSM to 180GSM Recycled Virgin Kraft Stock Paper" },
      { label: "Handle Assembly Layout", value: "Inline Twisted Paper Cord or Hot-Melt Glued Flat Cotton Tapes" },
      { label: "Ink Formulation Profiling", value: "Water-Based Eco-Safe Non-Toxic Soy Ink Systems" }
    ],
    deepCapabilities: [
      { title: "Heavy Weight Capacity", desc: "Reinforced patch liners glued inside the upper rim ensure handles won't tear away under heavy contents." },
      { title: "Flexible Pouch Barrier Options", desc: "Adds multi-layer laminations to paper pouches, keeping snacks and fresh goods fresh and dry." },
      { title: "Soy Ink Color Profiling", desc: "Uses plant-based inks that deliver bright, crisp branding colors while keeping production fully compostable." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Web Feeding Layout", details: "Thick rolls of raw kraft paper roll into automated inline forming channels." },
      { step: "02", phase: "Branding Print Pass", details: "Soy-based flexographic stations apply branding designs along the flat paper web." },
      { step: "03", phase: "Tube Folding Path", details: "Forming plates fold the paper edges into a continuous tube, gluing the long seam tight." },
      { step: "04", phase: "Bottom Patch Gluing", details: "The machine cuts individual bags, folds the bottoms flat, and glues down heavy support patches." }
    ],
    engineeringChecklist: [
      "Avoid placing important design elements directly inside side or bottom fold creases.",
      "Adjust layout graphics to match the raw absorption qualities of unbleached brown paper.",
      "Confirm that text directions line up properly across all four folded panels."
    ],
    calibrations: { method: "Dillon Force Gauge Handle Tension Stresses", standard: "ISO 11058 Dynamic Drop Performance Benchmarks" }
  },
  "brand-identity": {
    name: "Brand Dieline & Structural Engineering",
    group: "Structural Packaging & Identity",
    tagline: "Vector engineering, dieline configurations, and physical proof validation sets.",
    longDesc: "The vital core design link between visual ideas and actual manufacturing. Our package engineering team creates detailed technical dielines from scratch, checking fit tolerances to ensure designs translate cleanly onto our machinery.",
    hardwareStack: "Kongsberg Precision XL Digital Prototyping Sample Tables",
    icon: FileCheck,
    specs: [
      { label: "Structural Clearance scale", value: "0.01mm Absolute Spatial Clearance Scale Precision" },
      { label: "Prototyping Turnaround Time", value: "24-48 Hours from initial digital vectors to unprinted mockups" },
      { label: "File Export Infrastructure", value: "Native Industry Standard ArtiosCAD, STEP, and PDF Layouts" },
      { label: "Volumetric Verification Analysis", value: "3D Digital Stress Models mapping structural compression curves" }
    ],
    deepCapabilities: [
      { title: "Exact Precision Tolerances", desc: "Micro-millimeter design accuracy ensures interlocking box flaps click shut perfectly without slipping loose." },
      { title: "Rapid Structural Prototypes", desc: "Cuts unprinted paper samples on precision digital tables to let you check fit and size properties instantly." },
      { title: "3D Stress Mockups", desc: "Simulates warehouse stacking pressures inside software to fix structural weaknesses before building physical tooling." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Product Dimensioning", details: "Calipers measure the target items to establish required internal box space." },
      { step: "02", phase: "Parametric Layout CAD", details: "Designers draw flat vector dieline shapes inside specialized engineering tools." },
      { step: "03", phase: "Sample Table Cutting", details: "Digital plotters cut and score single test board sheets using oscillating drag knives." },
      { step: "04", phase: "Physical Fit Review", details: "Engineers assemble the prototype manually, checking fold clearances and friction fits." }
    ],
    engineeringChecklist: [
      "Provide full three-dimensional outer item measurements (Length x Width x Depth).",
      "Specify your target paper material caliper weight to calculate accurate fold spacing.",
      "Keep text layers isolated from background cutting outlines."
    ],
    calibrations: { method: "SolidWorks FEA Structural Stress Analyses", standard: "ISO 16792 Technical Product Documentation Standards" }
  },
  "marketing-materials": {
    name: "Enterprise Marketing Collateral",
    group: "Specialty Commercial Printing",
    tagline: "Premium multi-page brochures, booklets, and presentation layout sheets.",
    longDesc: "High-end corporate publication collateral designed to drive user conversions. We manage complex booklet projects from start to finish, combining crisp offset imagery with automatic folding and binding for high consistency.",
    hardwareStack: "Horizon StitchLiner Mark III & Müller Martini Perfect Binding Lines",
    icon: Settings,
    specs: [
      { label: "Binding Options Scope", value: "Saddle-Stitch, Perfect-Bound Polyurethane, Wire-O Loops" },
      { label: "Stock Weight Selection", value: "80lb Gloss Text Sheets up to 130lb Premium Heavy Covers" },
      { label: "Finishing Specialty Accents", value: "Inline Flood Aqueous, Target Spot UV Coating, Matte Controls" },
      { label: "Trim Bleed Accuracy", value: "Perfect Trim tracking within 0.5mm edge tolerances" }
    ],
    deepCapabilities: [
      { title: "Flexible Binding Styles", desc: "Choose clean saddle stitching for slim user guides, or robust perfect binding for thick, luxury catalogs." },
      { title: "Crisp Inline Finishes", desc: "Applies high-gloss coatings or velvet soft-touch sealers directly over graphics to enrich final page colors." },
      { title: "Automated Page Gathering", desc: "Smart machinery gathers, folds, stitches, and trims pages in one single continuous quality-checked pass." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Imposition Setup", details: "Prepress software arranges pages in large grids so they line up sequentially after folding." },
      { step: "02", phase: "High-Speed Printing", details: "Multi-station sheet presses print pages out rapidly onto double-sided paper stocks." },
      { step: "03", phase: "Folding & Gathering", details: "Automated blades fold sheets down into multi-page signatures, stacking them in order." },
      { step: "04", phase: "Trimming & Binding", details: "The machine cuts three outer booklet edges clean before gluing or stapling the spine." }
    ],
    engineeringChecklist: [
      "Arrange page counts in multiples of 4 to match standard booklet signature layouts.",
      "Increase inner margin safety spacing on thick books to prevent text from vanishing into spines.",
      "Confirm all background color fills stretch completely across outer bleed borders."
    ],
    calibrations: { method: "Heidelberg Prinect Image Control Scanners", standard: "ISO 12647-7 Production Contract Proof Standards" }
  },
  "business-cards": {
    name: "Executive Stationery Systems",
    group: "Specialty Commercial Printing",
    tagline: "Premium corporate identity assets matching Spot Pantone setups.",
    longDesc: "High-quality corporate stationery assets built for modern leadership branding. We focus on absolute color consistency across all matching company items, from cards to envelopes, keeping corporate spot colors perfectly unified.",
    hardwareStack: "Polar N 92 Eco Precision Guillotine Systems & Kluge EHD Press Blocks",
    icon: Sparkles,
    specs: [
      { label: "Substrate Density Scope", value: "130lb Super-Cover up to 32pt Double-Laminated Boards" },
      { label: "Color Accuracy Target", value: "Corporate Spot Pantone Color Matching System Locking" },
      { label: "Cutting Edge Precision", value: "Hydraulic Guillotine Splitting within 0.1mm tolerances" },
      { label: "Scoring & Creasing Setup", value: "Frictionless Mechanical Scoring Lines preventing fiber cracks" }
    ],
    deepCapabilities: [
      { title: "Absolute Pantone Accuracy", desc: "Guarantees brand colors stay identical across business cards, letterheads, and corporate presentation folders." },
      { title: "Ultra-Thick Board Stocks", desc: "Bonds independent paper sheets together to build premium, rigid cards with colored edge profiles." },
      { title: "Clean Fiber Scoring", desc: "Pre-creases thick paper stocks under pressure to ensure folder flaps fold cleanly without surface splitting." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Color Mixing Station", details: "Technicians weigh out base colors to mix exact Pantone spot ink formulas." },
      { step: "02", phase: "Stationery Sheet Run", details: "Presses apply mixed inks onto premium textured papers, tracking color density." },
      { step: "03", phase: "Post-Coat Lamination", details: "Protective ultra-matte films bond to sheets using heat to block scuffs and dirt." },
      { step: "04", phase: "Guillotine Cutting", details: "Heavy hydraulic paper cutters slice large sheets down into finished clean card sizes." }
    ],
    engineeringChecklist: [
      "Build design files using real corporate Pantone color tags rather than CMYK mix models.",
      "Maintain a 0.125-inch external bleed layout boundary around stationery edges.",
      "Keep fine fine text details spaced safely away from final sheet crop lines."
    ],
    calibrations: { method: "Techkon SpectroDrive Ink Density Sensors", standard: "ISO 3664 Standard Visual Viewing Conditions" }
  },
  "wedding-cards": {
    name: "Specialty Embellishments & Invites",
    group: "Specialty Commercial Printing",
    tagline: "Metallic hot foil stamping, deep sculpting, and premium artisanal invites.",
    longDesc: "High-end bespoke print styling for premium events. We combine high mechanical stamping pressures with heated brass dies to press deep, textured foil layers into soft cotton papers, creating unmistakable visual and physical depth.",
    hardwareStack: "Heidelberg Windmill Letterpress Blocks & Steuer Foil Stamping Units",
    icon: Eye,
    specs: [
      { label: "Stamping Pressure Limit", value: "Heavy Platen System Stamping Pressures up to 40 Tons" },
      { label: "Substrate Stock Base", value: "100% Cotton-Rag Blend Artisanal Textured Stocks" },
      { label: "Embellishment Layer Scope", value: "Metallic Foil Stamping, Sculpted Embossing, Blind Debossing" },
      { label: "Compression Profile Scale", value: "Deep Compression Footprints with complete zero show-through" }
    ],
    deepCapabilities: [
      { title: "Heated Foil Transfer", desc: "Uses hot brass plates to fuse metallic gold, silver, or bronze foils permanently into paper textures." },
      { title: "Multi-Level Embossing", desc: "Squeezes paper between custom male and female metal dies to sculpt stunning, raised dimensional graphics." },
      { title: "Soft Cotton Debossing", desc: "Presses heavy design details deep into thick cotton stock without pushing patterns through the reverse side." }
    ],
    productionWorkflow: [
      { step: "01", phase: "Brass Die Etching", details: "High-speed computer mills carve artwork paths into thick plates of solid brass." },
      { step: "02", phase: "Letterpress MakeReady", details: "Operators lock metal plates into heavy presses, dialing in temperature and pressure settings." },
      { step: "03", phase: "Foil Feeding Pass", details: "Thin foil sheets roll across the paper as the heated die stamps down firmly." },
      { step: "04", phase: "Bespoke Interleaving", details: "Finished cards stack with soft protective tissues between pages to prevent foil friction marks." }
    ],
    engineeringChecklist: [
      "Provide vector paths for foil elements on a distinct, separate color layer.",
      "Keep separation gaps between foil vector paths wider than a minimum of 0.5pt.",
      "Select thick cotton papers to achieve deep, rich physical debossing textures."
    ],
    calibrations: { method: "Mechanical Dial Caliper Depth Checks", standard: "Artisanal Letterpress Guild Calibration Formats" }
  }
};

// Animation Configurations
const CONTAINER_VARIANTS: Variants = {  
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.02 } }
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 18 } }
};

export default function ServiceSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const data = SERVICES_DATA[slug];
  if (!data) return notFound();

  const IconComponent = data.icon;

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-16 pb-20 overflow-x-hidden antialiased">
      <motion.div 
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16"
      >
        
        {/* TOP METRIC NAVIGATION CONTEXT */}
        <motion.div variants={ITEM_VARIANTS} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/60 dark:border-zinc-900 pb-5 pt-4">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-mono font-black text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Plant Infrastructure
          </Link>
          <div className="flex items-center gap-4 text-xs font-mono font-bold text-zinc-400">
            <span className="bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-200/40 dark:border-zinc-800/40">{data.group}</span>
            <span className="text-indigo-600 dark:text-indigo-400">ID: {slug}</span>
          </div>
        </motion.div>

        {/* INDUSTRIAL HEADER HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 space-y-5">
            <motion.div 
              variants={ITEM_VARIANTS}
              whileHover={{ scale: 1.03 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/10"
            >
              <IconComponent className="w-6 h-6" />
            </motion.div>
            <motion.h1 
              variants={ITEM_VARIANTS} 
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-zinc-900 dark:text-white"
            >
              {data.name}
            </motion.h1>
            <motion.p 
              variants={ITEM_VARIANTS} 
              className="text-lg sm:text-xl lg:text-2xl text-indigo-600 dark:text-indigo-400 font-extrabold tracking-tight"
            >
              {data.tagline}
            </motion.p>
            <motion.p 
              variants={ITEM_VARIANTS} 
              className="text-sm sm:text-base lg:text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-4xl"
            >
              {data.longDesc}
            </motion.p>
            
            {/* Plant Machinery Designation Badge */}
            <motion.div variants={ITEM_VARIANTS} className="inline-flex items-center gap-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-4 rounded-xl text-xs sm:text-sm font-medium max-w-xl">
              <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300">
                <strong className="text-zinc-900 dark:text-white">Active Plant Allocation:</strong> {data.hardwareStack}
              </span>
            </motion.div>
          </div>

          {/* SIDEBAR: OPERATIONAL BLUEPRINT */}
          <motion.div 
            variants={ITEM_VARIANTS}
            className="w-full bg-zinc-900 text-white p-6 rounded-2xl border border-zinc-800 space-y-6 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
              <Gauge className="w-4 h-4 text-indigo-400" />
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-300">Operational Parameters</h3>
            </div>
            
            <div className="space-y-4 font-medium text-xs sm:text-sm">
              {data.specs.map((spec, i) => (
                <div key={i} className="space-y-1">
                  <span className="block text-zinc-500 uppercase tracking-widest text-[10px] font-bold">{spec.label}</span>
                  <span className="font-mono text-zinc-200 text-xs sm:text-sm leading-tight block">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-4 text-[11px] sm:text-xs font-mono text-zinc-400">
              <div className="space-y-0.5">
                <span className="block text-zinc-600 font-bold uppercase tracking-wider scale-95 origin-left">Spectral Target</span>
                <span className="text-emerald-400 font-bold block">Passed Target</span>
              </div>
              <div className="space-y-0.5">
                <span className="block text-zinc-600 font-bold uppercase tracking-wider scale-95 origin-left">Certification Track</span>
                <span className="text-indigo-400 font-bold block">Enterprise System</span>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.hr variants={ITEM_VARIANTS} className="border-zinc-200/60 dark:border-zinc-900" />

        {/* CORE CAPABILITIES STAGGER GRID */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5"><Compass className="w-4 h-4" /> Production Scope Detail</span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-zinc-900 dark:text-white">Technical Core Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {data.deepCapabilities.map((cap, i) => (
              <motion.div 
                key={i} 
                variants={ITEM_VARIANTS}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm space-y-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-black font-mono">
                  0{i+1}
                </div>
                <h3 className="font-bold text-sm sm:text-base tracking-tight text-zinc-900 dark:text-white">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE INTERLOCKING WORKFLOW PIPELINE */}
        <motion.section variants={ITEM_VARIANTS} className="bg-zinc-900 text-white p-6 sm:p-10 rounded-3xl relative overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 relative z-10">
            <div className="space-y-4 lg:pr-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">Step-by-Step Processing</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">The Plant Floor Pipeline</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                Interact with the workflow steps to track how raw design documents route, verify, transform, and deliver across our internal manufacturing modules.
              </p>
              
              {/* Vertical Tab Controls */}
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pt-2 pb-2 lg:py-0 scrollbar-none">
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
                    <ChevronRight className={`w-4 h-4 hidden lg:block transition-transform ${activeWorkflowStep === i ? "translate-x-0.5" : "opacity-0"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Container Display Panel */}
            <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800/80 rounded-2xl p-5 sm:p-7 flex flex-col justify-between min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkflowStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                      Current Focus Operations
                    </span>
                    <span className="text-xs font-black font-mono text-zinc-600">
                      Module Phase {data.productionWorkflow[activeWorkflowStep].step}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">
                    {data.productionWorkflow[activeWorkflowStep].phase}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                    {data.productionWorkflow[activeWorkflowStep].details}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-2 pt-4 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-zinc-600 mt-auto">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Automated Press System Synchronized
              </div>
            </div>
          </div>
        </motion.section>

        {/* COMPLIANCE CHECKLIST */}
        <motion.section variants={ITEM_VARIANTS} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 sm:p-10 rounded-3xl shadow-sm">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight text-zinc-900 dark:text-white">Preflight Validation</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
              To minimize production anomalies, incoming design files must strictly meet these alignment thresholds prior to formatting physical lines.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {data.engineeringChecklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-900 p-3.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-normal">{item}</span>
              </div>
            ))}
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-100 dark:border-zinc-950 mt-4 text-[10px] sm:text-xs text-zinc-400 font-mono w-full">
              <span className="flex items-center gap-1.5"><Scale className="w-4 h-4 text-indigo-500" /> Method: {data.calibrations.method}</span>
              <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-indigo-500" /> Standard: {data.calibrations.standard}</span>
            </div>
          </div>
        </motion.section>

        {/* CALL TO ACTION HUB BRIDGE */}
        <motion.section variants={ITEM_VARIANTS} className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-8 sm:p-10 rounded-3xl text-center space-y-5 max-w-5xl mx-auto shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-30 mix-blend-overlay pointer-events-none" />
          <h2 className="text-xl sm:text-3xl font-black tracking-tight max-w-xl mx-auto leading-tight">Ready to map this specific track to your next project?</h2>
          <p className="text-xs sm:text-sm text-indigo-100 font-medium max-w-2xl mx-auto leading-relaxed">
            Connect directly with our engineering coordinators. Submit your material profiles, custom dielines, and run matrices to receive an instant mechanical quote layout.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-zinc-950 text-white font-black px-6 py-3.5 rounded-xl shadow-lg hover:bg-zinc-900 transition-colors text-xs uppercase tracking-widest duration-200">
              Initiate Production Ticket <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}