import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  Anchor,
  ArrowRight,
  Award,
  Box,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Package,
  PackageCheck,
  ShieldCheck,
  Ship,
  Truck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type ReactElement, useEffect, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/FadeIn";
import { CERTIFICATIONS, COMPANY } from "../constants";

/* ─────────────────── Incoterms Data ─────────────────── */
const INCOTERMS_DATA = [
  {
    id: "fob",
    code: "FOB",
    fullName: "Free on Board",
    port: "Mundra / Nhava Sheva",
    icon: <Ship size={28} />,
    color: "bg-primary/10 text-primary border-primary/20",
    description:
      "Seller delivers goods on board the vessel at the named port of loading. Risk transfers from seller to buyer once the goods are on board.",
    sellerResponsibility:
      "Loading at port, export clearance, all costs to port",
    buyerResponsibility:
      "Freight, insurance, import duties, destination charges",
    whenToUse:
      "Best for buyers who have their own freight contracts or prefer to manage shipping themselves. Common for buyers in UAE, UK, and Europe arranging consolidated shipments.",
  },
  {
    id: "cif",
    code: "CIF",
    fullName: "Cost, Insurance & Freight",
    port: "Seller pays to destination port",
    icon: <PackageCheck size={28} />,
    color: "bg-accent/10 text-accent border-accent/20",
    description:
      "Seller pays all costs, freight, and insurance to bring goods to the destination port. Risk transfers to buyer once cargo is on board at the origin port.",
    sellerResponsibility: "Freight charges, marine insurance, export clearance",
    buyerResponsibility: "Import duties, customs clearance, inland delivery",
    whenToUse:
      "Popular with first-time importers and buyers in Saudi Arabia, Singapore, and GCC countries who want an all-inclusive landed cost at their port.",
  },
  {
    id: "cfr",
    code: "CFR",
    fullName: "Cost & Freight",
    port: "Seller pays freight to destination",
    icon: <Truck size={28} />,
    color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    description:
      "Seller pays freight charges to deliver goods to the destination port, but the buyer arranges and pays for marine insurance separately.",
    sellerResponsibility: "Freight charges, export clearance, loading costs",
    buyerResponsibility: "Marine insurance, import duties, customs clearance",
    whenToUse:
      "Suitable for buyers who have their own insurance arrangements or whose country mandates local insurance (e.g., certain buyers in Bangladesh, Iran).",
  },
];

/* ─────────────────── Process Steps ─────────────────── */
const PROCESS_STEPS = [
  { icon: <ClipboardCheck size={22} />, label: "Order Confirmed" },
  { icon: <CheckCircle2 size={22} />, label: "Source & Quality Check" },
  { icon: <Package size={22} />, label: "Packaging & Labeling" },
  { icon: <Anchor size={22} />, label: "Port Loading (Mundra/JNPT)" },
  { icon: <Ship size={22} />, label: "Freight" },
  { icon: <Truck size={22} />, label: "Buyer Port Delivery" },
];

/* ─────────────────── Packaging Options ─────────────────── */
const PACKAGING_OPTIONS = [
  "Food-grade corrugated cartons (2 kg, 4 kg, 5 kg, 10 kg, 13 kg, 18 kg)",
  "PP woven bags (25 kg, 50 kg) for rice and pulses",
  "Vacuum-sealed pouches (500g, 1 kg, 5 kg) for spices",
  "Wooden crates with ventilation for premium mango shipments",
  "Master cartons with inner retail units for supermarket-ready exports",
  "Custom private label / OEM packaging on request",
];

const LABELING_COMPLIANCE = [
  {
    market: "EU",
    flag: "🇪🇺",
    rules: "Minimum 14-point font, allergen declarations, country of origin",
  },
  {
    market: "USA / FDA",
    flag: "🇺🇸",
    rules: "Nutrition facts panel, facility registration, FDA compliant labels",
  },
  {
    market: "GCC / Halal",
    flag: "🇸🇦",
    rules: "Halal certification mark, Arabic labeling, MRL compliance",
  },
  {
    market: "UK Post-Brexit",
    flag: "🇬🇧",
    rules: "UKCA mark, UK importer address, separate from EU labeling",
  },
];

/* ─────────────────── Ports Data ─────────────────── */
const PORTS = [
  {
    name: "Mundra Port",
    subName: "Kutch, Gujarat",
    icon: <Anchor size={24} />,
    badge: "Largest Port in India",
    badgeColor: "bg-primary text-primary-foreground",
    highlights: [
      "Largest commercial port in India by cargo volume",
      "Direct access from Gujarat farms — minimal inland transit",
      "Container shipping to Middle East, Europe & Americas",
      "Regular weekly sailings to Dubai Jebel Ali, Rotterdam, Felixstowe",
      "Reefer container facilities for temperature-sensitive cargo",
    ],
    routes: [
      "UAE / Jebel Ali",
      "Saudi Arabia / Jeddah",
      "UK / Felixstowe",
      "Netherlands / Rotterdam",
    ],
  },
  {
    name: "Nhava Sheva (JNPT)",
    subName: "Navi Mumbai, Maharashtra",
    icon: <Ship size={24} />,
    badge: "Second Largest Port",
    badgeColor: "bg-accent text-accent-foreground",
    highlights: [
      "India's second largest and busiest container port",
      "Connects to all major global shipping lanes",
      "Ideal for Maharashtra & South India origin products",
      "Excellent multimodal connectivity via rail and road",
      "Multiple shipping lines with competitive freight rates",
    ],
    routes: [
      "Singapore / PSA",
      "USA / Los Angeles",
      "Germany / Hamburg",
      "Malaysia / Port Klang",
    ],
  },
];

/* ─────────────────── Cert Icon Map ─────────────────── */
const CERT_ICONS: Record<string, ReactElement> = {
  apeda: <Award size={28} />,
  fssai: <ShieldCheck size={28} />,
  iec: <FileText size={28} />,
  gst: <Box size={28} />,
};

/* ─────────────────── Component ─────────────────── */
export default function ExportLogisticsPage() {
  const [activeIncoterm, setActiveIncoterm] = useState("fob");

  useEffect(() => {
    const prev = document.title;
    document.title =
      "Export & Logistics | FOB CIF CFR Indian Exporter | Hanumante Exports";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="bg-primary py-16 sm:py-20"
        aria-labelledby="logistics-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down" duration={0.5}>
            <Badge
              variant="outline"
              className="mb-4 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10"
            >
              Export &amp; Logistics
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              id="logistics-heading"
              className="font-display font-bold text-4xl sm:text-5xl text-primary-foreground mb-6 leading-tight"
            >
              Export &amp; Logistics | <br className="hidden sm:block" />
              Hanumante Exports – Indian Exporter
            </h1>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto leading-relaxed">
              From farm to destination port — we manage every step of the export
              journey with precision, compliance, and transparency.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Process Flowchart ── */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Logistics Flow
            </Badge>
            <h2
              id="process-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground"
            >
              From Order to Delivery
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
              Our streamlined 6-step process ensures every shipment is
              traceable, compliant, and on schedule.
            </p>
          </FadeIn>

          {/* Stepper — horizontal on desktop, vertical on mobile */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-border z-0"
              style={{ left: "calc(100% / 12)", right: "calc(100% / 12)" }}
              aria-hidden="true"
            />

            <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-0 relative z-10">
              {PROCESS_STEPS.map((step, index) => (
                <motion.li
                  key={step.label}
                  className="flex flex-col items-center text-center px-2"
                  data-ocid={`process-step-${index + 1}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Icon circle */}
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary shadow-elevated mb-3 relative z-10">
                    {step.icon}
                  </div>
                  {/* Step number */}
                  <span className="text-xs font-display font-bold text-muted-foreground uppercase tracking-widest mb-1">
                    Step {index + 1}
                  </span>
                  <span className="font-display font-semibold text-sm text-foreground leading-snug">
                    {step.label}
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Incoterms ── */}
      <section
        className="py-16 sm:py-20 bg-muted/30"
        aria-labelledby="incoterms-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Incoterms 2020
            </Badge>
            <h2
              id="incoterms-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground"
            >
              Trade Terms We Support
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
              We are flexible with Incoterms to suit your procurement
              preferences. Our team will recommend the most cost-effective
              option for your region.
            </p>
          </FadeIn>

          <Tabs
            defaultValue="fob"
            value={activeIncoterm}
            onValueChange={setActiveIncoterm}
            className="w-full"
          >
            <FadeIn>
              <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8 h-12">
                {INCOTERMS_DATA.map((term) => (
                  <TabsTrigger
                    key={term.id}
                    value={term.id}
                    className="font-display font-bold text-base"
                    data-ocid={`incoterm-tab-${term.id}`}
                  >
                    {term.code}
                  </TabsTrigger>
                ))}
              </TabsList>
            </FadeIn>

            {INCOTERMS_DATA.map((term) => (
              <TabsContent key={term.id} value={term.id}>
                <AnimatePresence mode="wait">
                  {activeIncoterm === term.id && (
                    <motion.div
                      key={term.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-card rounded-2xl border border-border shadow-elevated p-6 sm:p-8"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border ${term.color}`}
                        >
                          {term.icon}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="font-display font-bold text-2xl text-foreground">
                              {term.code}
                            </h3>
                            <span className="text-muted-foreground font-body text-lg">
                              —
                            </span>
                            <span className="font-display font-semibold text-xl text-foreground">
                              {term.fullName}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground font-body">
                            {term.port}
                          </p>
                        </div>
                      </div>

                      <p className="font-body text-foreground leading-relaxed mb-6">
                        {term.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                          <div className="text-xs font-display font-bold text-primary uppercase tracking-widest mb-2">
                            Seller (Hanumante Exports)
                          </div>
                          <p className="text-sm font-body text-foreground leading-relaxed">
                            {term.sellerResponsibility}
                          </p>
                        </div>
                        <div className="bg-muted border border-border rounded-xl p-4">
                          <div className="text-xs font-display font-bold text-muted-foreground uppercase tracking-widest mb-2">
                            Buyer
                          </div>
                          <p className="text-sm font-body text-foreground leading-relaxed">
                            {term.buyerResponsibility}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 bg-accent/5 border border-accent/20 rounded-xl p-4">
                        <CheckCircle2
                          size={18}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <div>
                          <span className="text-xs font-display font-bold text-accent uppercase tracking-widest block mb-1">
                            When to Use
                          </span>
                          <p className="text-sm font-body text-foreground leading-relaxed">
                            {term.whenToUse}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* ── Packaging & Labeling ── */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="packaging-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Packaging & Labeling
            </Badge>
            <h2
              id="packaging-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground"
            >
              Export-Ready Packaging Standards
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
              Every consignment is packed to preserve quality in transit and
              meet destination country labeling regulations.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Packaging Options */}
            <FadeIn direction="right">
              <div className="bg-card rounded-2xl border border-border shadow-card p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                    <Package size={22} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Packaging Options
                  </h3>
                </div>
                <ul className="space-y-3">
                  {PACKAGING_OPTIONS.map((opt, i) => (
                    <motion.li
                      key={opt}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <CheckCircle2
                        size={16}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-foreground leading-relaxed">
                        {opt}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Labeling Compliance */}
            <FadeIn direction="left" delay={0.12}>
              <div className="bg-card rounded-2xl border border-border shadow-card p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <FileText size={22} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Labeling Compliance by Market
                  </h3>
                </div>
                <ul className="space-y-4">
                  {LABELING_COMPLIANCE.map((item, i) => (
                    <motion.li
                      key={item.market}
                      className="flex items-start gap-4 p-3 rounded-xl bg-muted/40 border border-border"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.09 }}
                    >
                      <span
                        className="text-2xl flex-shrink-0"
                        aria-hidden="true"
                      >
                        {item.flag}
                      </span>
                      <div>
                        <div className="font-display font-semibold text-sm text-foreground mb-1">
                          {item.market}
                        </div>
                        <p className="text-xs font-body text-muted-foreground leading-relaxed">
                          {item.rules}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground font-body pt-1 border-t border-border mt-2">
                  ✦ Custom branding &amp; private label available on all product
                  lines
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Ports of Loading ── */}
      <section
        className="py-16 sm:py-20 bg-muted/30"
        aria-labelledby="ports-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Ports of Loading
            </Badge>
            <h2
              id="ports-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground"
            >
              Strategic Port Locations
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
              We operate from two of India's most connected ports, offering
              competitive freight and reliable schedules to global destinations.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {PORTS.map((port) => (
              <StaggerItem key={port.name}>
                <div
                  className="bg-card rounded-2xl border border-border shadow-elevated p-6 sm:p-8 h-full"
                  data-ocid={`port-card-${port.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {port.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-xl text-foreground">
                          {port.name}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-display font-semibold ${port.badgeColor}`}
                        >
                          {port.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-body">
                        {port.subName}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {port.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm font-body text-foreground leading-relaxed">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-display font-bold text-muted-foreground uppercase tracking-widest mb-2">
                      Key Shipping Routes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {port.routes.map((r) => (
                        <span
                          key={r}
                          className="text-xs px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/20 font-body font-medium"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="certifications-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Our Certifications
            </Badge>
            <h2
              id="certifications-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground"
            >
              Government Certified &amp; Compliant
            </h2>
            <p className="text-muted-foreground font-body mt-3 max-w-xl mx-auto">
              All mandatory certifications for agricultural exports from India —
              ensuring compliance with your country's import regulations.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.id}>
                <div
                  className="bg-card rounded-2xl border border-border shadow-card p-6 flex flex-col items-center text-center hover:shadow-elevated transition-smooth h-full"
                  data-ocid={`cert-card-${cert.id}`}
                >
                  {/* Official certified badge */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      {CERT_ICONS[cert.id] ?? <Award size={28} />}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle2
                        size={14}
                        className="text-accent-foreground"
                      />
                    </div>
                  </div>

                  {/* Cert code */}
                  <div className="font-display font-bold text-2xl text-primary mb-1">
                    {cert.name}
                  </div>

                  {/* Full name */}
                  <div className="font-body text-xs text-muted-foreground mb-3 leading-snug">
                    {cert.fullName}
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Certified badge ribbon */}
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <ShieldCheck size={12} className="text-primary" />
                    <span className="text-xs font-display font-bold text-primary">
                      Certified
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-primary" aria-label="Request shipping quote">
        <FadeIn className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground mb-4">
            Ready to Ship with Hanumante Exports?
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Get a customized shipping quote with Incoterms options, freight
            rates, and a complete documentation checklist — within 24 hours.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="font-display font-bold text-base gap-2 px-8 py-4 h-auto"
              data-ocid="logistics-request-quote-cta"
            >
              Request Shipping Quote <ArrowRight size={18} />
            </Button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
