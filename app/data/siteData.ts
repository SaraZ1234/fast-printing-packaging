// app/data/siteData.ts

export interface PageContent {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
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

export const servicesData: Record<string, PageContent> = {
  // --- Core Print Infrastructure ---
  "digital-printing": {
    title: "High-Speed Digital Printing",
    tagline: "Sharp, vibrant prints with ultra-fast turnaround.",
    description: "Perfect for short-run jobs, variable data printing, and crisp multi-color business collateral.",
    features: ["No minimum order quantity", "Variable data matching", "Same-day dispatch available"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    specs: {
      sizes: ["Maximum Sheet: 13\" x 19\"", "Custom Variable Dimensions"],
      papers: ["80lb Text to 18pt Cover stock", "Synthetic Polypropylene"],
      finishes: ["Inline Gloss/Matte Coating", "Variable Data Varnish Coating"],
      corners: ["Square Guillotine Cut", "Precision Rounded Cornering Matrix"]
    },
    pricingMatrix: {
      qty250: "PKR 4,500 - 7,500",
      qty500: "PKR 8,000 - 12,000",
      qty1000: "PKR 14,500 - 22,000",
      qty2000: "PKR 26,000 - 38,000"
    }
  },
  "offset-printing": {
    title: "Commercial Offset Printing",
    tagline: "Cost-effective, unmatched color precision for massive volumes.",
    description: "Utilizing state-of-the-art Heidelberg presses to deliver impeccable CMYK and Pantone accuracy.",
    features: ["Massive bulk discount structures", "Pantone color matching (PMS)", "Premium paper stock options"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800",
    specs: {
      sizes: ["Standard Sheet: 20\" x 29\"", "Large Signature Formats"],
      papers: ["60lb Offset Uncoated", "80lb/100lb Gloss & Dull Coated Text"],
      finishes: ["Overall Aqueous Finish (AQ)", "Spot Varnish Accent Overlays"],
      corners: ["Standard Square Grid Slitting", "Bespoke Post-Press Die Cutting"]
    },
    pricingMatrix: {
      qty250: "PKR 15,000 - 22,000",
      qty500: "PKR 18,000 - 25,000",
      qty1000: "PKR 22,000 - 32,000",
      qty2000: "PKR 30,000 - 45,000"
    }
  },
  "screen-printing": {
    title: "Industrial Screen Printing",
    tagline: "Thick, ultra-durable ink layers for apparel and specialized substrates.",
    description: "Perfect for apparel, custom tote bags, and rigid surfaces requiring vibrant, long-lasting finishes.",
    features: ["Highly vibrant premium inks", "Unmatched wash durability", "Excellent on dark materials"],
    image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=800",
    specs: {
      sizes: ["Standard Print Area: 16\" x 20\"", "Over-sized Maximum Layouts"],
      papers: ["Cotton Textiles / Canvas Bags", "Rigid Plastic, Wood & Sheet Metal Panels"],
      finishes: ["Plastisol High-Density Ink Surface", "Water-based Soft Hand Surface"],
      corners: ["Flexible Substrate Borders", "N/A - Material Dependent Profile"]
    },
    pricingMatrix: {
      qty250: "PKR 25,000 - 35,000",
      qty500: "PKR 45,000 - 60,000",
      qty1000: "PKR 80,000 - 110,000",
      qty2000: "PKR 140,000 - 190,000"
    }
  },
  "large-format": {
    title: "Large Format Printing Systems",
    tagline: "High-definition visual scaling that demands immediate attention.",
    description: "Banners, posters, backdrops, and exhibition graphics engineered to stand out elegantly.",
    features: ["UV-resistant fade-proof inks", "Seamless wide-width prints", "Durable outdoor grade materials"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800",
    specs: {
      sizes: ["Roll Widths up to 60 inches", "Bespoke Infinite Length Matrix"],
      papers: ["15oz Blockout Banner Vinyl", "Satin Photo Base Paper / Canvas"],
      finishes: ["Anti-Glare Matte Defense Layer", "Gloss Weather Shield Lamination"],
      corners: ["Standard Hemmed & Grommet Borders", "Flush Edge Trimming Formats"]
    },
    pricingMatrix: {
      qty250: "PKR 55,000 - 75,000",
      qty500: "PKR 105,000 - 140,000",
      qty1000: "PKR 195,000 - 260,000",
      qty2000: "Custom Engineering Quote"
    }
  },
  "flexography": {
    title: "High-Volume Flexography Packaging",
    tagline: "Industrial-scale continuous printing for modern dynamic flexible packaging.",
    description: "The gold standard for high-speed roll labels, custom pouches, and high-volume grocery bags.",
    features: ["Ultra-low per-unit cost", "High-speed rotary press efficiency", "Food-safe water-based inks"],
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800",
    specs: {
      sizes: ["Continuous Web Roll feeds", "Custom Repeat Length Cylinders"],
      papers: ["BOPP Polymer / Clear Poly", "Foil Laminates & Kraft Stock Web"],
      finishes: ["Inline UV Overprint Protective Varnish", "Matte Coated Barrier Films"],
      corners: ["Automated Rotary Inline Die-Slitting", "Custom Radiused Corner Units"]
    },
    pricingMatrix: {
      qty250: "PKR 60,000 - 90,000",
      qty500: "PKR 95,000 - 130,000",
      qty1000: "PKR 150,000 - 210,000",
      qty2000: "PKR 240,000 - 320,000"
    }
  },

  // --- Structural Packaging & Identity ---
  "custom-boxes": {
    title: "Bespoke Custom Packaging Boxes",
    tagline: "Tailor-made structural packaging that elevates your unboxing experience.",
    description: "From corrugated mailers to luxury rigid cosmetic boxes, we build packages tailored to your exact product dimensions.",
    features: ["Custom structural dielines", "Matte, gloss, and soft-touch laminations", "Eco-friendly soy inks"],
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800",
    specs: {
      sizes: ["Custom Built to Scale", "A, B, C, E, F Flute Matrices"],
      papers: ["Corrugated Board / Bleached Kraft", "Rigid Chipboard Luxury Enclosures"],
      finishes: ["Soft-Touch Lamination Film", "Spot High-Build UV Elements"],
      corners: ["Flawless Machine Scored Folding", "Die-Cut Radiused Structural Flaps"]
    },
    pricingMatrix: {
      qty250: "PKR 35,000 - 55,000",
      qty500: "PKR 60,000 - 90,000",
      qty1000: "PKR 110,000 - 160,000",
      qty2000: "PKR 190,000 - 280,000"
    }
  },
  "stickers-labels": {
    title: "Labels & Weatherproof Stickers",
    tagline: "Roll-fed high-speed pressure-sensitive labels.",
    description: "Industrial continuous roll production delivering durable adhesive performance and complete chemical inertness for product labeling.",
    features: ["Digital Laser Matrix Cutting", "Waterproof and smudge resistant", "Custom die-cut shapes"],
    image: "https://images.unsplash.com/photo-1572205335301-df3f799aee4b?q=80&w=800",
    specs: {
      sizes: ["Custom Dimensions Matrix", "Circle / Oval / Square Frameworks"],
      papers: ["Gloss Paper White Base", "Weatherproof Matte Vinyl / Clear Poly"],
      finishes: ["Waterproof Varnish Guard", "UV-Resistant Heavy Lamination Layer"],
      corners: ["Standard Crisp Corner Slits", "Rounded Corner Matrix Options"]
    },
    pricingMatrix: {
      qty250: "PKR 4,500 - 8,000",
      qty500: "PKR 7,500 - 12,000",
      qty1000: "PKR 12,000 - 18,000",
      qty2000: "PKR 20,000 - 32,000"
    }
  },
  "shopping-bags": {
    title: "Eco-Friendly Bags & Pouches",
    tagline: "Premium retail presentation bags with reinforced bases.",
    description: "Recycled premium kraft shopping carriers with reinforced twisted handles, gusseted bases, and high-barrier flexible structures.",
    features: ["Automated Bottom-Folding", "Soy-Based Non-Toxic Inks", "High structural weight capacity"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
    specs: {
      sizes: ["Small/Medium/Large Retail Templates", "Custom Dynamic Gusset Matrices"],
      papers: ["120GSM Pure Recycled Kraft Paper", "Artistic Heavy Cardboard Enclosures"],
      finishes: ["Classic Organic Uncoated Feel", "Spot UV Promotional Logo Overlay"],
      corners: ["Reinforced Flat Fold Corners", "Square Block-Bottom Structural Bases"]
    },
    pricingMatrix: {
      qty250: "PKR 22,000 - 32,000",
      qty500: "PKR 38,000 - 52,000",
      qty1000: "PKR 65,000 - 88,000",
      qty2000: "PKR 115,000 - 150,000"
    }
  },
  "brand-identity": {
    title: "Brand Dieline & Structural Engineering",
    tagline: "Comprehensive CAD vector engineering and blueprint mapping.",
    description: "Custom operational dieline configurations, volumetric stress tests, and unprinted structural physical proof sets before mass production.",
    features: ["CAD Preflight Execution", "Volumetric stress testing", "Digital multi-angle rendering"],
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=800",
    specs: {
      sizes: ["All Material Profiles Adaptable", "0.01mm Calibration Tolerances"],
      papers: ["Prototyping Unprinted Material Blocks", "Digital CAD Vector Blueprints"],
      finishes: ["3D Volumetric Digital Renderings", "Physically Scored Mockup Proofs"],
      corners: ["Laser-Scribed Edge Profiles", "Bespoke Interlocking Geometry Tests"]
    },
    pricingMatrix: {
      qty250: "PKR 10,000 Flat Scale",
      qty500: "PKR 10,000 Flat Scale",
      qty1000: "Waived on Order Setup",
      qty2000: "Included Free of Cost"
    }
  },

  // --- Specialty Commercial Printing ---
  "marketing-materials": {
    title: "Enterprise Marketing Collateral",
    tagline: "Premium booklets, multi-page brochures, and corporate lookbooks.",
    description: "Vibrant multi-panel sales collateral engineered with inline computerized machine-scoring to yield flawless, fiber-crack-free folds.",
    features: ["Inline folding and gathering", "80lb - 100lb gloss paper selections", "Aqueous coating layers"],
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800",
    specs: {
      sizes: ["Standard Tri-Fold Layout Panels", "A4 / A5 Multi-page Configurations"],
      papers: ["100lb Premium Gloss Art Paper", "80lb Matte Finish Text Stocks"],
      finishes: ["Protective Aqueous Seal Coat", "Spot UV Graphic Accent Elements"],
      corners: ["Machine-Squared Bleed Trimming", "Bespoke Rounded Panel Formats"]
    },
    pricingMatrix: {
      qty250: "PKR 18,000 - 28,000",
      qty500: "PKR 28,000 - 42,000",
      qty1000: "PKR 48,000 - 68,000",
      qty2000: "PKR 85,000 - 115,000"
    }
  },
  "business-cards": {
    title: "Executive Stationery Systems",
    tagline: "Premium business cards, letterheads, and corporate presentation assets.",
    description: "Flawlessly calibrated stationery lines built using high-end, premium stocks to ensure immediate corporate brand prestige.",
    features: ["Precision layout cut margins", "Spot Pantone color accuracy", "Thick luxury canvas base"],
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800",
    specs: {
      sizes: ["Standard Matrix: 3.5\" x 2\"", "Bespoke European Layout Templates"],
      papers: ["16pt Cardstock Foundation", "32pt Extreme Silk Cover Block"],
      finishes: ["Anti-Scuff Matte Film Layout", "Metallic Hot Foil Stamp Highlights"],
      corners: ["Precision Straight Borders", "Custom 3mm/5mm Radiused Corners"]
    },
    pricingMatrix: {
      qty250: "PKR 3,000 - 5,000",
      qty500: "PKR 5,000 - 8,000",
      qty1000: "PKR 8,000 - 12,000",
      qty2000: "PKR 14,000 - 20,000"
    }
  },
  "wedding-cards": {
    title: "Specialty Embellishments & Invites",
    tagline: "Bespoke high-pressure stamping, foil overlays, and artisanal details.",
    description: "High-pressure platen letterpress suites and bespoke invitations crafted carefully to ensure distinct, premium fine-art tactile depth profiles.",
    features: ["Deep platen debossing", "Genuine hot metallic foil", "Artisanal custom paper selection"],
    image: "https://images.unsplash.com/photo-1546812808-922aa1a719ee?q=80&w=800",
    specs: {
      sizes: ["5\" x 7\" Classic Presentation", "Bespoke Enclosure Envelope Sets"],
      papers: ["100% Cotton-Rag Artisanal Sheet", "Heavyweight Premium Textured Card"],
      finishes: ["Metallic Foil (Gold/Silver Oxide)", "Deep Dimensional Blind Debossing"],
      corners: ["Artisanal Hand-Deckled Framework", "Square Cut Heavy Bevel Edges"]
    },
    pricingMatrix: {
      qty250: "PKR 45,000 - 75,000",
      qty500: "PKR 80,000 - 125,000",
      qty1000: "PKR 140,000 - 210,000",
      qty2000: "PKR 250,000 - 360,000"
    }
  }
};

export const productsData: Record<string, PageContent> = {
  "business-cards": {
    title: "Premium Business Cards",
    tagline: "Make your first impression unforgettable.",
    description: "Choose from painted edges, raised spot UV, foil stamping, or ultra-thick 32pt silk stocks. Professional business cards printed on high-quality cardstock with various finishing options.",
    features: ["Premium cardstock options", "Matte/Glossy/Soft-touch finish", "Spot UV & Foil stamping", "Custom sizes available", "Full-color both sides", "Fast 2-3 day turnaround"],
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800",
    specs: {
      sizes: ["Standard: 3.5\" x 2\" (89mm x 51mm)", "European: 85mm x 55mm", "Square: 2.5\" x 2.5\"", "Custom sizes available"],
      papers: ["14pt Cardstock (Standard)", "16pt Cardstock (Premium)", "18pt Cardstock (Luxury)", "24pt Silk Laminated / Textured Linen"],
      finishes: ["Matte / Gloss Lamination", "Soft-touch Lamination", "Spot UV Coating", "Foil Stamping (Gold/Silver)", "Embossing / Debossing"],
      corners: ["Square Corners", "Rounded Corners (3mm)", "Rounded Corners (5mm)", "Custom corner choices"]
    },
    pricingMatrix: {
      qty250: "PKR 3,000 - 5,000",
      qty500: "PKR 5,000 - 8,000",
      qty1000: "PKR 8,000 - 12,000",
      qty2000: "PKR 14,000 - 20,000"
    }
  },
  "custom-boxes": {
    title: "Bespoke Custom Packaging Boxes",
    tagline: "Tailor-made structural packaging that elevates your unboxing experience.",
    description: "From corrugated mailers to luxury rigid cosmetic boxes, we build packages tailored to your exact product dimensions.",
    features: ["Custom structural dielines", "Matte, gloss, and soft-touch laminations", "Eco-friendly soy inks"],
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800",
    specs: {
      sizes: ["Tailored to Product Formats", "Mailer Box Architecture", "Rigid Presentation Cases"],
      papers: ["Single Wall Corrugated E-Flute", "Double-Face Solid Chipboard Blocks"],
      finishes: ["Matte Scuff-Proof Film Barrier", "Bespoke Spot Foil Enhancements"],
      corners: ["Auto-Lock Safety Glued Seams", "Classic Sharp Structural Edge Cuts"]
    },
    pricingMatrix: {
      qty250: "PKR 35,000 - 55,000",
      qty500: "PKR 60,000 - 90,000",
      qty1000: "PKR 110,000 - 160,000",
      qty2000: "PKR 190,000 - 280,000"
    }
  },
  "large-format-posters": {
    title: "Large Format Posters",
    tagline: "High-Impact Architectural & Promotional Displays",
    description: "Make a massive statement with ultra-vibrant, high-resolution large format printing. Perfect for retail windows, presentations, events, and outdoor announcements.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800",
    features: [
      "High-density archival inks",
      "Matte, satin, or high-gloss photographic paper",
      "Custom sizing up to 60 inches wide",
      "Weather-resistant UV laminations available",
      "Same-day processing configuration layout"
    ],
    specs: {
      sizes: ["Standard A0, A1, A2, A3 Matrices", "Custom Dimensions Setup", "Architectural Blueprints"],
      papers: ["180gsm Premium Matte", "240gsm High-Gloss Photo Stock", "Tear-Resistant Polypropylene Vinyl"],
      finishes: ["Uncoated Classic", "Anti-Glare Matte Lamination", "Crystal Clear UV Gloss Shield"],
      corners: ["Square Precision Cuts", "Mounted on 5mm Foam Board", "Grommet Insertion Framework"]
    },
    pricingMatrix: {
      qty250: "PKR 45,000 - 65,000",
      qty500: "PKR 85,000 - 110,000",
      qty1000: "PKR 160,000 - 200,000",
      qty2000: "Custom Quote Basis"
    }
  },
  "stickers-labels": {
    title: "Labels & Weatherproof Stickers",
    tagline: "Roll-fed high-speed pressure-sensitive labels.",
    description: "Industrial continuous roll production delivering durable adhesive performance and complete chemical inertness for product labeling.",
    features: ["Digital Laser Matrix Cutting", "Waterproof and smudge resistant", "Custom die-cut shapes"],
    image: "https://images.unsplash.com/photo-1572205335301-df3f799aee4b?q=80&w=800",
    specs: {
      sizes: ["Custom Geometric Paths", "Standard Circles & Rectangles"],
      papers: ["Premium Permanent Gloss Poly", "Removable Grade Matte Labels"],
      finishes: ["Clear Acrylic Topcoat Coating", "Satin UV Blocking Protective Foil"],
      corners: ["Clean 90-Degree Split Points", "Bespoke Contour Laser Die Trims"]
    },
    pricingMatrix: {
      qty250: "PKR 4,500 - 8,000",
      qty500: "PKR 7,500 - 12,000",
      qty1000: "PKR 12,000 - 18,000",
      qty2000: "PKR 20,000 - 32,000"
    }
  },
  "shopping-bags": {
    title: "Eco-Friendly Bags & Pouches",
    tagline: "Premium retail presentation bags with reinforced bases.",
    description: "Recycled premium kraft shopping carriers with reinforced twisted handles, gusseted bases, and high-barrier flexible structures.",
    features: ["Automated Bottom-Folding", "Soy-Based Non-Toxic Inks", "High structural weight capacity"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800",
    specs: {
      sizes: ["Bespoke Boutiques Scaling", "Standard Grocery Dimensions"],
      papers: ["120GSM Unbleached Eco-Kraft", "Artistic Heavy Cardboard Enclosures"],
      finishes: ["Natural Textured Pulp Surface", "Selective Metallic Branding Foil"],
      corners: ["Reinforced Double Fold Corners", "Clean Flat Folding Architecture"]
    },
    pricingMatrix: {
      qty250: "PKR 22,000 - 32,000",
      qty500: "PKR 38,000 - 52,000",
      qty1000: "PKR 65,000 - 88,000",
      qty2000: "PKR 115,000 - 150,000"
    }
  },
  "brand-identity": {
    title: "Brand Dieline & Structural Engineering",
    tagline: "Comprehensive CAD vector engineering and blueprint mapping.",
    description: "Custom operational dieline configurations, volumetric stress tests, and unprinted structural physical proof sets before mass production.",
    features: ["CAD Preflight Execution", "Volumetric stress testing", "Digital multi-angle rendering"],
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=800",
    specs: {
      sizes: ["Universal Material Applications", "High Resolution Coordinate Grids"],
      papers: ["Structural Assessment Blank Blocks", "Digital Vector CAD Layout Schemes"],
      finishes: ["3D Parametric Digital Renderings", "Physical Machine Scored Proofing Sets"],
      corners: ["Laser Cleared Trim Boundaries", "Geometric Lock Interface Evaluation"]
    },
    pricingMatrix: {
      qty250: "PKR 10,000 Flat Scale",
      qty500: "PKR 10,000 Flat Scale",
      qty1000: "Waived on Order Setup",
      qty2000: "Included Free of Cost"
    }
  },
  "marketing-materials": {
    title: "Enterprise Marketing Collateral",
    tagline: "Premium booklets, multi-page brochures, and corporate lookbooks.",
    description: "Vibrant multi-panel sales collateral engineered with inline computerized machine-scoring to yield flawless, fiber-crack-free folds.",
    features: ["Inline folding and gathering", "80lb - 100lb gloss paper selections", "Aqueous coating layers"],
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800",
    specs: {
      sizes: ["Multi-Page Letter Booklets", "Bespoke Multi-Gatefold Layout Sheets"],
      papers: ["100lb Coated Cover Base Sheets", "80lb Semi-Gloss Text Formats"],
      finishes: ["Overall Semi-Gloss AQ Layer", "High Precision Spot Gloss Finishes"],
      corners: ["Automated Sharp Edge Splitting", "Custom Rounded Die Trimming Corners"]
    },
    pricingMatrix: {
      qty250: "PKR 18,000 - 28,000",
      qty500: "PKR 28,000 - 42,000",
      qty1000: "PKR 48,000 - 68,000",
      qty2000: "PKR 85,000 - 115,000"
    }
  },
  "wedding-cards": {
    title: "Specialty Embellishments & Invites",
    tagline: "Bespoke high-pressure stamping, foil overlays, and artisanal details.",
    description: "High-pressure platen letterpress suites and bespoke invitations crafted carefully to ensure distinct, premium fine-art tactile depth profiles.",
    features: ["Deep platen debossing", "Genuine hot metallic foil", "Artisanal custom paper selection"],
    image: "https://images.unsplash.com/photo-1546812808-922aa1a719ee?q=80&w=800",
    specs: {
      sizes: [" B0-B3 Bespoke Envelope Enclosures", "Classic Custom Card Proportions"],
      papers: ["Artisanal Heavy Cotton Card Base", "Handcrafted Raw Edge Foundations"],
      finishes: ["Gleaming Foil Stamp Layers", "Heavy Impression Blind Compression Profiles"],
      corners: ["Torn Deckle Edge Treatments", "Chiseled Diamond Border Angles"]
    },
    pricingMatrix: {
      qty250: "PKR 45,000 - 75,000",
      qty500: "PKR 80,000 - 125,000",
      qty1000: "PKR 140,000 - 210,000",
      qty2000: "PKR 250,000 - 360,000"
    }
  }
};

export const industriesData: Record<string, PageContent> = {
  "retail-ecommerce": {
    title: "Retail & E-commerce Packaging Solutions",
    tagline: "Built to survive transit. Designed to stand out on shelves.",
    description: "Custom mailer boxes, product sleeves, and shipping supplies designed for high-throughput fulfillment centers.",
    features: ["Durable crush-resistant structures", "Sustainable FSC-certified materials", "High shelf-appeal finishes"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
    specs: {
      sizes: ["Standard Variable Mailer Configurations", "Fulfillment Pack Slips Templates"],
      papers: ["Recyclable Kraft Flute Core", "High Grade Bleached White Structural Linerboard"],
      finishes: ["Water Resistant Varnish Guard", "Eco-Friendly Soy-Based Pigmentation Matrices"],
      corners: ["Friction-Locked Secure Tabs", "Crush-Proof Dynamic Corner Reinforcement"]
    },
    pricingMatrix: {
      qty250: "PKR 40,000 - 60,000",
      qty500: "PKR 75,000 - 105,000",
      qty1000: "PKR 135,000 - 185,000",
      qty2000: "PKR 240,000 - 330,000"
    }
  }
};