import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Package, Thermometer } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/FadeIn";
import type { ProductCategory } from "../types";

/* ──────────────────────────────────────────────
   Detailed product catalogue (requirements-driven)
─────────────────────────────────────────────── */
interface ProductDetail {
  id: string;
  emoji: string;
  name: string;
  category: ProductCategory;
  origin: string;
  originFlag: string;
  varieties: string[];
  season?: string;
  packagingSizes: string[];
  qualityBadge: string;
  qualityStandards: string[];
  exportSpecs: string[];
  certifications: string[];
  storageTemp?: string;
  shelfLife?: string;
  description: string;
}

const DETAILED_PRODUCTS: ProductDetail[] = [
  // ── Fresh Fruits ──────────────────────────────
  {
    id: "pomegranate",
    emoji: "🫐",
    name: "Fresh Pomegranate",
    category: "fresh-fruits",
    origin: "Gujarat, India",
    originFlag: "🇮🇳",
    varieties: ["Bhagwa", "Ganesh", "Mridula"],
    season: "Oct – Feb",
    packagingSizes: ["5 kg cartons", "10 kg cartons", "Custom packaging"],
    qualityBadge: "APEDA Super-A",
    qualityStandards: [
      "APEDA Super-A Grade",
      "Brix 16°+ (sweetness index)",
      "20–22% aril content",
      "EU GlobalG.A.P compliant",
    ],
    exportSpecs: [
      "20–22% aril content",
      "Brix: 16°+ minimum",
      "Shelf life: 60 days @ 5°C",
      "Min. order: 1 FCL (20 MT)",
    ],
    certifications: ["APEDA", "FSSAI", "GlobalG.A.P"],
    storageTemp: "5°C",
    shelfLife: "60 days",
    description:
      "Premium Bhagwa pomegranates from Gujarat — prized for deep-red arils, exceptional sweetness, and long shelf life. Ideal for fresh consumption and juice extraction in international markets.",
  },
  {
    id: "banana",
    emoji: "🍌",
    name: "Cavendish Banana",
    category: "fresh-fruits",
    origin: "Gujarat / Maharashtra, India",
    originFlag: "🇮🇳",
    varieties: ["Cavendish G9", "Grand Nain", "Robusta"],
    season: "Year-round",
    packagingSizes: [
      "13 kg cartons",
      "18 kg cartons",
      "Custom cluster packing",
    ],
    qualityBadge: "Grade A Premium",
    qualityStandards: [
      "Grade A Premium",
      "34–36 counts per carton",
      "95mm+ fruit length",
      "0–1% blemish tolerance",
    ],
    exportSpecs: [
      "34–36 counts per 13 kg carton",
      "Fruit length: 95mm minimum",
      "Green to half-ripe dispatch",
      "Min. order: 1 FCL",
    ],
    certifications: ["APEDA", "FSSAI"],
    storageTemp: "13–14°C",
    shelfLife: "25–30 days",
    description:
      "Uniform Cavendish bananas sourced from certified farms in Gujarat and Maharashtra. Consistent sizing, premium taste, and reliable year-round availability for global retail chains.",
  },
  {
    id: "mango",
    emoji: "🥭",
    name: "Alphonso / Kesar Mango",
    category: "fresh-fruits",
    origin: "Gujarat / Maharashtra, India",
    originFlag: "🇮🇳",
    varieties: ["Alphonso (Hapus)", "Kesar", "Totapuri"],
    season: "Apr – Jun",
    packagingSizes: ["5 kg cartons (20 pcs)", "10 kg cartons", "Gift boxes"],
    qualityBadge: "APEDA A Grade",
    qualityStandards: [
      "APEDA A Grade & GI Tagged",
      "Weight: 250–400g per fruit",
      "Brix: 18–22° (Alphonso)",
      "EU Pesticide MRL compliant",
    ],
    exportSpecs: [
      "Fruit weight: 250–400g",
      "Brix: 18–22° minimum",
      "Air & reefer sea shipments",
      "Min. order: 500 cartons",
    ],
    certifications: ["APEDA", "FSSAI", "GI Tag"],
    storageTemp: "10–13°C",
    shelfLife: "21 days (reefer)",
    description:
      "The King of Mangoes — GI-tagged Alphonso and prized Kesar variety from Gujarat. Unmatched sweetness, saffron-hued flesh, and rich aroma. Premium positioning for discerning international buyers.",
  },

  // ── Rice ──────────────────────────────────────
  {
    id: "basmati-rice",
    emoji: "🍚",
    name: "Premium Basmati Rice",
    category: "rice",
    origin: "Punjab / Haryana, India",
    originFlag: "🇮🇳",
    varieties: ["1121 Extra Long", "Pusa Basmati", "Traditional Basmati"],
    season: "Year-round",
    packagingSizes: [
      "5 kg retail bags",
      "25 kg PP bags",
      "50 kg jute bags",
      "Bulk containers",
    ],
    qualityBadge: "AGMARK Certified",
    qualityStandards: [
      "Avg grain length: 6.0mm+ (raw), 8.0mm+ (cooked)",
      "Moisture: <12%",
      "Purity: 99.5% — no broken grains",
      "Long grain, aged variant available",
    ],
    exportSpecs: [
      "Avg grain length: 6.0mm+ raw",
      "Moisture: <12% max",
      "Purity: 99.5% minimum",
      "Min. order: 25 MT",
    ],
    certifications: ["APEDA", "FSSAI", "Agmark"],
    description:
      "Long-grain, aged Basmati rice from the Himalayan foothills of Punjab and Haryana. Exceptional elongation ratio and fragrance. Perfect for premium retail and food service worldwide.",
  },
  {
    id: "non-basmati-rice",
    emoji: "🌾",
    name: "Non-Basmati Rice",
    category: "rice",
    origin: "Gujarat / West Bengal, India",
    originFlag: "🇮🇳",
    varieties: ["IR64 Parboiled", "Sona Masoori", "HMT", "Swarna"],
    season: "Year-round",
    packagingSizes: [
      "25 kg PP bags",
      "50 kg jute bags",
      "Custom OEM packaging",
    ],
    qualityBadge: "FSSAI Certified",
    qualityStandards: [
      "Moisture: <14% max",
      "Broken: <5%",
      "Sortex cleaned — no weevils",
      "Uniform grain size",
    ],
    exportSpecs: [
      "Moisture: <14% maximum",
      "Broken: <5% max",
      "Zero weevil tolerance",
      "Min. order: 50 MT",
    ],
    certifications: ["APEDA", "FSSAI"],
    description:
      "High-quality IR64, Sona Masoori, and parboiled rice for mass-market consumption. Competitive pricing, consistent quality, and high-volume availability for bulk importers globally.",
  },

  // ── Spices & Pulses ───────────────────────────
  {
    id: "turmeric",
    emoji: "🟡",
    name: "Turmeric (Haldi)",
    category: "spices-pulses",
    origin: "Rajasthan / Gujarat, India",
    originFlag: "🇮🇳",
    varieties: ["Salem", "Rajapuri", "Erode"],
    season: "Year-round",
    packagingSizes: ["1 kg retail packs", "5 kg bags", "25 kg PP bags"],
    qualityBadge: "Spices Board Certified",
    qualityStandards: [
      "Curcumin content: 3%+ minimum",
      "Moisture: <10%",
      "Heavy metals tested",
      "EU/US MRL compliant",
    ],
    exportSpecs: [
      "Curcumin: 3%+ minimum",
      "Moisture: <10%",
      "Aflatoxin: <10 ppb",
      "Min. order: 1 MT",
    ],
    certifications: ["APEDA", "FSSAI", "Spices Board India"],
    description:
      "Bold, aromatic turmeric from Rajasthan and Gujarat. High curcumin content, vibrant color, and clean processing. Available as whole fingers, powder, or custom blends.",
  },
  {
    id: "cumin",
    emoji: "🌿",
    name: "Cumin Seeds (Jeera)",
    category: "spices-pulses",
    origin: "Gujarat, India",
    originFlag: "🇮🇳",
    varieties: ["Gujarat Cumin", "Rajasthan Cumin"],
    season: "Feb – Apr",
    packagingSizes: ["1 kg packs", "5 kg bags", "25 kg PP bags"],
    qualityBadge: "98% Purity",
    qualityStandards: [
      "98% purity — machine cleaned",
      "Volatile oil: 2.5%+",
      "Moisture: <10%",
      "No foreign matter",
    ],
    exportSpecs: [
      "Purity: 98% minimum",
      "Volatile oil: 2.5%+",
      "Moisture: <10%",
      "Min. order: 500 kg",
    ],
    certifications: ["APEDA", "FSSAI", "Spices Board India"],
    description:
      "Premium Gujarat-origin cumin seeds with characteristic earthy aroma and high volatile oil content. Machine-cleaned and sortex-graded for top-quality export to the Middle East and Europe.",
  },
  {
    id: "red-chilli",
    emoji: "🌶️",
    name: "Red Chilli (Dried)",
    category: "spices-pulses",
    origin: "Gujarat / Andhra Pradesh, India",
    originFlag: "🇮🇳",
    varieties: ["S17 (Teja)", "Byadgi", "Guntur Sannam"],
    season: "Year-round",
    packagingSizes: ["5 kg bags", "10 kg bags", "25 kg PP bags"],
    qualityBadge: "ASTA 80+ Grade",
    qualityStandards: [
      "SHU: 20,000–50,000 (variety-based)",
      "Colour: ASTA 80+ minimum",
      "Moisture: <12%",
      "Aflatoxin compliant",
    ],
    exportSpecs: [
      "SHU: 20,000+ (Teja variety)",
      "ASTA colour: 80+ min",
      "Moisture: <12%",
      "Min. order: 500 kg",
    ],
    certifications: ["APEDA", "FSSAI", "Spices Board India"],
    description:
      "Fiery Indian red chillies — whole dried or powdered. Teja, Byadgi, and Guntur varieties available for different heat and colour requirements of global buyers.",
  },
  {
    id: "chickpeas",
    emoji: "🫘",
    name: "Chickpeas (Kabuli Chana)",
    category: "spices-pulses",
    origin: "Madhya Pradesh / Rajasthan, India",
    originFlag: "🇮🇳",
    varieties: ["Kabuli (large)", "Desi Chana", "Chana Dal"],
    season: "Year-round",
    packagingSizes: ["25 kg PP bags", "50 kg jute bags", "Custom OEM"],
    qualityBadge: "98% Purity",
    qualityStandards: [
      "Purity: 98% minimum",
      "Moisture: <12%",
      "Sortex cleaned — no stones",
      "FSSAI certified",
    ],
    exportSpecs: [
      "Purity: 98% minimum",
      "Moisture: <12%",
      "Calibration: 7mm, 8mm, 9mm",
      "Min. order: 25 MT",
    ],
    certifications: ["APEDA", "FSSAI"],
    description:
      "Large-seed Kabuli chickpeas from the finest growing belts of MP and Rajasthan. Fully cleaned, calibrated, and packed for international buyers across the Middle East, Europe, and Americas.",
  },
  {
    id: "toor-dal",
    emoji: "🟡",
    name: "Yellow Lentils (Toor Dal)",
    category: "spices-pulses",
    origin: "Maharashtra / Madhya Pradesh, India",
    originFlag: "🇮🇳",
    varieties: ["Split Toor Dal", "Whole Toor", "Polished Dal"],
    season: "Year-round",
    packagingSizes: ["1 kg retail packs", "5 kg bags", "25 kg PP bags"],
    qualityBadge: "FSSAI Certified",
    qualityStandards: [
      "Moisture: <12%",
      "Admixture: <1%",
      "Natural & oil-polished variants",
      "Sortex & gravity cleaned",
    ],
    exportSpecs: [
      "Moisture: <12% max",
      "Admixture: <1%",
      "Purity: 99%+",
      "Min. order: 10 MT",
    ],
    certifications: ["APEDA", "FSSAI"],
    description:
      "Split yellow lentils (Toor Dal) from Maharashtra and MP — India's most widely consumed pulse. Available in natural and polished variants, packed under hygienically controlled conditions.",
  },
];

const CATEGORIES: {
  value: ProductCategory | "all";
  label: string;
  emoji: string;
}[] = [
  { value: "all", label: "All Products", emoji: "🌾" },
  { value: "fresh-fruits", label: "Fresh Fruits", emoji: "🍎" },
  { value: "rice", label: "Rice", emoji: "🍚" },
  { value: "spices-pulses", label: "Spices & Pulses", emoji: "🌶️" },
];

const CATEGORY_LABEL: Record<ProductCategory, string> = {
  "fresh-fruits": "🍎 Fresh Fruit",
  rice: "🍚 Rice",
  "spices-pulses": "🌶️ Spices & Pulses",
};

/* ──────────────────────────────────────────────
   Product card component
─────────────────────────────────────────────── */
function ProductCard({ product }: { product: ProductDetail }) {
  return (
    <Card
      className="overflow-hidden border-border shadow-xs hover:shadow-elevated transition-smooth group flex flex-col h-full"
      data-ocid={`product-card-${product.id}`}
    >
      {/* Header band */}
      <div className="bg-primary/5 border-b border-border px-5 py-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-4xl leading-none" aria-hidden="true">
              {product.emoji}
            </span>
            <div>
              <h2 className="font-display font-bold text-lg text-foreground leading-tight">
                {product.name}
              </h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span aria-hidden="true">{product.originFlag}</span>
                <span className="text-xs text-muted-foreground font-body">
                  {product.origin}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <Badge className="bg-primary text-primary-foreground text-[10px] font-body font-semibold whitespace-nowrap">
              {CATEGORY_LABEL[product.category]}
            </Badge>
            <Badge
              variant="outline"
              className="text-[10px] border-primary/40 text-primary bg-primary/5 font-semibold whitespace-nowrap"
            >
              ⭐ {product.qualityBadge}
            </Badge>
          </div>
        </div>

        {/* Varieties */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {product.varieties.slice(0, 3).map((v) => (
            <Badge
              key={v}
              variant="secondary"
              className="text-[11px] font-body"
            >
              {v}
            </Badge>
          ))}
          {product.varieties.length > 3 && (
            <Badge variant="secondary" className="text-[11px] font-body">
              +{product.varieties.length - 3} more
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-5 flex flex-col gap-4 flex-1">
        <p className="text-muted-foreground text-sm font-body leading-relaxed">
          {product.description}
        </p>

        {/* Season & storage row */}
        {(product.season || product.storageTemp || product.shelfLife) && (
          <div className="flex flex-wrap gap-3">
            {product.season && (
              <div className="flex items-center gap-1.5 text-xs font-body">
                <span className="text-primary" aria-hidden="true">
                  📅
                </span>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Season:</span>{" "}
                  {product.season}
                </span>
              </div>
            )}
            {product.storageTemp && (
              <div className="flex items-center gap-1.5 text-xs font-body">
                <Thermometer size={12} className="text-primary" />
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Storage:
                  </span>{" "}
                  {product.storageTemp}
                </span>
              </div>
            )}
            {product.shelfLife && (
              <div className="flex items-center gap-1.5 text-xs font-body">
                <span className="text-primary" aria-hidden="true">
                  ⏱️
                </span>
                <span className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Shelf life:
                  </span>{" "}
                  {product.shelfLife}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Quality standards */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-display font-semibold text-foreground uppercase tracking-wide mb-2">
            <CheckCircle2 size={12} className="text-primary" />
            Quality Standards
          </div>
          <ul className="space-y-1.5">
            {product.qualityStandards.map((qs) => (
              <li
                key={qs}
                className="flex items-start gap-2 text-xs text-muted-foreground font-body"
              >
                <CheckCircle2
                  size={11}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                {qs}
              </li>
            ))}
          </ul>
        </div>

        {/* Packaging */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-display font-semibold text-foreground uppercase tracking-wide mb-2">
            <Package size={12} />
            Packaging Options
          </div>
          <ul className="space-y-1">
            {product.packagingSizes.map((size) => (
              <li
                key={size}
                className="flex items-center gap-2 text-xs text-muted-foreground font-body"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                  aria-hidden="true"
                />
                {size}
              </li>
            ))}
          </ul>
        </div>

        {/* Export specs */}
        <div className="bg-muted/50 rounded-lg p-3.5 border border-border">
          <div className="text-xs font-display font-semibold text-foreground uppercase tracking-wide mb-2">
            📦 Export Specifications
          </div>
          <ul className="space-y-1">
            {product.exportSpecs.map((spec) => (
              <li
                key={spec}
                className="flex items-start gap-2 text-xs text-muted-foreground font-body"
              >
                <span
                  className="text-primary mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  ›
                </span>
                {spec}
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5">
          {product.certifications.map((cert) => (
            <Badge
              key={cert}
              variant="outline"
              className="text-[10px] text-primary border-primary/30 bg-primary/5 font-semibold"
            >
              ✓ {cert}
            </Badge>
          ))}
        </div>

        {/* CTA — always at bottom */}
        <div className="mt-auto pt-1">
          <Link to="/contact" className="block">
            <Button
              variant="default"
              size="sm"
              className="w-full font-display font-semibold gap-1.5"
              data-ocid={`product-quote-${product.id}`}
            >
              Request Quote <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

/* ──────────────────────────────────────────────
   Animated product grid
─────────────────────────────────────────────── */
function AnimatedProductGrid({
  products,
  colClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  animationKey,
}: {
  products: ProductDetail[];
  colClass?: string;
  animationKey: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        className={`grid gap-6 ${colClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

/* ──────────────────────────────────────────────
   Category section header
─────────────────────────────────────────────── */
function CategoryHeading({
  emoji,
  title,
  subtitle,
}: {
  emoji: string;
  title: string;
  subtitle: string;
}) {
  return (
    <FadeIn className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl" aria-hidden="true">
          {emoji}
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
          {title}
        </h2>
      </div>
      <p className="text-muted-foreground font-body text-sm max-w-2xl">
        {subtitle}
      </p>
    </FadeIn>
  );
}

/* ──────────────────────────────────────────────
   Page
─────────────────────────────────────────────── */
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(
    "all",
  );

  const filtered =
    activeCategory === "all"
      ? DETAILED_PRODUCTS
      : DETAILED_PRODUCTS.filter((p) => p.category === activeCategory);

  // Group products by category for "all" view
  const fruitsProducts = filtered.filter((p) => p.category === "fresh-fruits");
  const riceProducts = filtered.filter((p) => p.category === "rice");
  const spicesPulsesProducts = filtered.filter(
    (p) => p.category === "spices-pulses",
  );

  // Update page meta
  useEffect(() => {
    const prev = document.title;
    document.title =
      "Fresh Fruit Exporter from India | Rice & Spices Exporter | Hanumante Exports";
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Hanumante Exports – Leading Indian Exporter of Fresh Fruits (Pomegranate, Banana, Mango), Premium Basmati & Non-Basmati Rice, Spices and Pulses. APEDA & FSSAI certified. Serving UAE, Saudi Arabia, Europe, UK, USA & Singapore.",
      );
    }
    return () => {
      document.title = prev;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
    };
  }, []);

  const showSections = activeCategory === "all";

  return (
    <div>
      {/* Hero */}
      <section
        className="bg-primary py-16 sm:py-20 relative overflow-hidden"
        aria-labelledby="products-page-heading"
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.95 0 0) 1px, transparent 1px), radial-gradient(circle at 80% 20%, oklch(0.95 0 0) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down" duration={0.5}>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
              <span
                className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                aria-hidden="true"
              />
              <span className="text-primary-foreground text-xs font-body font-medium">
                APEDA & FSSAI Certified Exporter
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              id="products-page-heading"
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-4 leading-tight"
            >
              Indian Exporter – Fresh Fruits, Rice, Spices &amp; Pulses
              <span className="block text-primary-foreground/70 text-2xl sm:text-3xl mt-1">
                Hanumante Exports
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Directly sourced from India's finest growing regions. Full export
              documentation, competitive pricing, and reliable cold-chain
              logistics to global markets.
            </p>
          </FadeIn>

          {/* Quick origin tags */}
          <StaggerContainer className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              "🇮🇳 Gujarat Origin",
              "🌿 Farm Direct",
              "📦 FCL Ready",
              "✅ APEDA Certified",
            ].map((tag) => (
              <StaggerItem key={tag} direction="up">
                <span className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full block">
                  {tag}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Filter tabs + product grid */}
      <section
        className="py-12 sm:py-16 bg-background"
        aria-label="Product catalog"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <Tabs
            value={activeCategory}
            onValueChange={(v) =>
              setActiveCategory(v as ProductCategory | "all")
            }
          >
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm pb-4 mb-8 -mx-4 px-4 border-b border-border">
              <TabsList
                className="flex-wrap h-auto gap-2 bg-muted/50 p-1.5 w-full sm:w-auto"
                data-ocid="products-category-filter"
              >
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.value}
                    value={cat.value}
                    className="font-body font-medium text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    data-ocid={`filter-${cat.value}`}
                  >
                    {cat.emoji} {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* All tab content */}
            <TabsContent value="all">
              {fruitsProducts.length > 0 && (
                <div className="mb-14">
                  <CategoryHeading
                    emoji="🍎"
                    title="Fresh Fruits"
                    subtitle="Farm-fresh pomegranates, bananas, and mangoes — sourced directly from Gujarat and Maharashtra. APEDA certified with cold-chain export capability."
                  />
                  <AnimatedProductGrid
                    products={fruitsProducts}
                    animationKey="fruits-all"
                  />
                </div>
              )}

              {riceProducts.length > 0 && (
                <div className="mb-14">
                  <div className="border-t border-border pt-10 mb-8">
                    <CategoryHeading
                      emoji="🍚"
                      title="Rice"
                      subtitle="Premium Basmati and Non-Basmati rice from Punjab, Haryana, Gujarat, and West Bengal. AGMARK, APEDA, and FSSAI certified. Competitive bulk pricing."
                    />
                  </div>
                  <AnimatedProductGrid
                    products={riceProducts}
                    colClass="grid-cols-1 md:grid-cols-2"
                    animationKey="rice-all"
                  />
                </div>
              )}

              {spicesPulsesProducts.length > 0 && (
                <div>
                  <div className="border-t border-border pt-10 mb-8">
                    <CategoryHeading
                      emoji="🌶️"
                      title="Spices & Pulses"
                      subtitle="Authentic Indian spices (turmeric, cumin, red chilli) and pulses (chickpeas, toor dal) from Gujarat, Rajasthan, and MP — cleaned, sorted, and export-packed."
                    />
                  </div>
                  <AnimatedProductGrid
                    products={spicesPulsesProducts}
                    animationKey="spices-all"
                  />
                </div>
              )}
            </TabsContent>

            {/* Category-specific tab content */}
            {(
              ["fresh-fruits", "rice", "spices-pulses"] as ProductCategory[]
            ).map((catVal) => (
              <TabsContent key={catVal} value={catVal}>
                {!showSections && (
                  <AnimatedProductGrid
                    products={filtered}
                    colClass={
                      catVal === "rice"
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }
                    animationKey={`${catVal}-filtered`}
                  />
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Certifications strip */}
      <section
        className="py-10 bg-muted/30 border-y border-border"
        aria-label="Certifications"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-6">
            <p className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground">
              Quality Certifications & Compliance
            </p>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { name: "APEDA", desc: "Registered Exporter" },
              { name: "FSSAI", desc: "Food Safety Certified" },
              { name: "IEC", desc: "Import Export Code" },
              { name: "GST", desc: "Tax Registered" },
              { name: "Spices Board", desc: "Spice Exporter" },
              { name: "Agmark", desc: "Rice Grading" },
            ].map((cert) => (
              <StaggerItem key={cert.name} direction="up">
                <div className="flex flex-col items-center gap-1 min-w-[80px]">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-primary font-display font-bold text-xs text-center leading-tight px-1">
                      {cert.name}
                    </span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-body text-center">
                    {cert.desc}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA section */}
      <section
        className="py-14 bg-primary"
        aria-labelledby="products-cta-heading"
      >
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="products-cta-heading"
            className="font-display font-bold text-2xl sm:text-3xl text-primary-foreground mb-4"
          >
            Need a Custom Grade, Private Label, or Mixed Container?
          </h2>
          <p className="text-primary-foreground/80 font-body mb-8 leading-relaxed max-w-2xl mx-auto">
            We offer private-label packaging, custom grading specifications, and
            mixed FCL loads. Talk to our export team about your exact
            requirements — we respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-display font-semibold gap-2 px-8"
                data-ocid="products-cta"
              >
                Discuss Your Requirements <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="font-display font-semibold gap-2 px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                data-ocid="products-get-quote"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
