import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Leaf,
  Package,
  Shield,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/FadeIn";
import {
  CERTIFICATIONS,
  COMPANY,
  EXPORT_MARKETS,
  PRODUCTS,
  TRUST_STATS,
} from "../constants";

const PRODUCT_HIGHLIGHTS = [
  {
    id: "fresh-fruits",
    icon: "🍎",
    title: "Fresh Fruits",
    subtitle: "Pomegranate, Banana & Mango",
    description:
      "GI-tagged Alphonso mangoes, premium Bhagwa pomegranates, and Cavendish bananas sourced from certified farms. EU GlobalG.A.P compliant with cold-chain logistics.",
    href: "/products",
  },
  {
    id: "rice",
    icon: "🌾",
    title: "Basmati & Non-Basmati Rice",
    subtitle: "1121 Extra Long, Sona Masoori, IR64",
    description:
      "Long-grain aromatic Basmati with 8mm+ grain length, and high-quality non-basmati varieties for bulk markets. APEDA, FSSAI & Agmark certified.",
    href: "/products",
  },
  {
    id: "spices-pulses",
    icon: "🌶️",
    title: "Spices & Pulses",
    subtitle: "Cumin, Turmeric, Chana Dal & More",
    description:
      "Authentic spices from Gujarat & Rajasthan — cleaned, sortex-graded, aflatoxin tested, and EU/US MRL compliant. Custom blends and private label available.",
    href: "/products",
  },
];

const WHY_PARTNER = [
  {
    icon: <Leaf size={22} />,
    title: "Direct Farm Sourcing",
    description:
      "We work directly with farmer cooperatives and certified farms across Gujarat, Maharashtra & Punjab — no middlemen, authentic quality.",
  },
  {
    icon: <Star size={22} />,
    title: "Competitive Pricing",
    description:
      "By cutting out intermediaries, we offer market-leading prices without compromising quality standards for any lot.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "International Quality Standards",
    description:
      "All products meet EU, US, GCC, and UK import norms. Multi-stage lab testing at farm, processing, and pre-shipment stages.",
  },
  {
    icon: <Truck size={22} />,
    title: "Reliable & Timely Delivery",
    description:
      "On-schedule shipments via Mundra and Nhava Sheva ports, with complete export documentation and a dedicated logistics manager.",
  },
];

const FEATURED_PRODUCTS = PRODUCTS.slice(0, 3);

export default function HomePage() {
  return (
    <div>
      {/* ── Hero Section ── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-agricultural-export.dim_1280x720.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Dark green gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/92 via-primary/80 to-primary/70"
          aria-hidden="true"
        />
        {/* Decorative bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          {/* Trust pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/25 rounded-full px-4 py-1.5 mb-8"
          >
            <span
              className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
              aria-hidden="true"
            />
            <span className="text-primary-foreground text-xs font-body font-semibold tracking-wide uppercase">
              APEDA & FSSAI Certified Exporter — Est. 2008
            </span>
          </motion.div>

          {/* SEO H1 — hidden visually but present for SEO */}
          <h1 id="hero-heading" className="sr-only">
            Fresh Fruit Exporter from India | Hanumante Exports – India
          </h1>

          {/* Visual hero headline */}
          <motion.p
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
            aria-hidden="true"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Exporting Quality
            <br className="hidden sm:block" />
            <span className="text-green-300"> from India</span> to the World
          </motion.p>

          <motion.p
            className="text-primary-foreground/85 text-lg sm:text-xl font-body max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Trusted Agricultural &amp; FMCG Exporter from Gujarat, India —
            Serving{" "}
            <strong className="text-primary-foreground">
              UAE, Saudi Arabia, Europe, UK, USA &amp; Singapore
            </strong>{" "}
            with premium Fresh Fruits, Basmati Rice, Spices &amp; Pulses.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.36,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-display font-bold text-base px-8 gap-2 shadow-elevated min-w-[180px]"
                data-ocid="hero-cta-request-quote"
              >
                Request a Quote <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="font-display font-bold text-base px-8 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/15 min-w-[180px]"
                data-ocid="hero-cta-explore-products"
              >
                Explore Products
              </Button>
            </Link>
          </motion.div>

          {/* Certification badges in hero */}
          <motion.div
            className="flex flex-wrap justify-center gap-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            {CERTIFICATIONS.map((cert, i) => (
              <motion.span
                key={cert.id}
                className="inline-flex items-center gap-1.5 bg-primary-foreground/10 border border-primary-foreground/25 rounded-full px-3.5 py-1.5 text-xs font-body font-semibold text-primary-foreground"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              >
                <Shield size={11} className="flex-shrink-0" />
                {cert.name} Certified
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Trust Stats Bar ── */}
      <section
        className="bg-card border-b border-border"
        aria-label="Company statistics"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {TRUST_STATS.map((stat) => (
              <StaggerItem key={stat.label} direction="up">
                <div className="py-7 px-4 text-center">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-primary leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-body leading-snug">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Company Introduction ── */}
      <section
        className="py-14 sm:py-16 bg-background"
        aria-label="About Hanumante Exports"
      >
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 text-primary border-primary/30 bg-primary/5"
          >
            About Us
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-5">
            A Family Legacy of Quality Exports
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-3xl mx-auto">
            Founded in 2008 in Anand, Gujarat, Hanumante Exports is a
            family-owned agricultural export company with deep roots in Indian
            farming communities. We partner directly with certified farms across
            Gujarat, Maharashtra, and Punjab to bring you the freshest fruits,
            finest rice, and most authentic spices — with the integrity,
            consistency, and personal service that only a family business can
            deliver.
          </p>
          <Link to="/about" className="inline-block mt-8">
            <Button
              variant="outline"
              className="font-display font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              data-ocid="home-about-link"
            >
              Our Story <ArrowRight size={16} />
            </Button>
          </Link>
        </FadeIn>
      </section>

      {/* ── Product Highlights ── */}
      <section
        className="py-16 sm:py-20 bg-muted/30"
        aria-labelledby="products-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Export Products
            </Badge>
            <h2
              id="products-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4"
            >
              Our Premium Export Range
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Every product sourced directly from India's best growing regions —
              quality-tested, certified, and ready for international shipment.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {PRODUCT_HIGHLIGHTS.map((product) => (
              <StaggerItem key={product.id}>
                <Link
                  to="/products"
                  data-ocid={`product-highlight-${product.id}`}
                >
                  <Card className="group overflow-hidden hover:shadow-elevated transition-smooth cursor-pointer h-full border-border bg-card">
                    <CardContent className="p-7">
                      <div className="text-5xl mb-5">{product.icon}</div>
                      <h3 className="font-display font-bold text-foreground text-xl mb-1 leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-primary text-sm font-body font-semibold mb-3">
                        {product.subtitle}
                      </p>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed mb-5">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-primary font-display font-semibold text-sm group-hover:gap-2.5 transition-smooth">
                        View Products <ArrowRight size={14} />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Featured product images */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {FEATURED_PRODUCTS.map((product) => (
              <StaggerItem key={product.id}>
                <Link to="/products" data-ocid={`product-card-${product.id}`}>
                  <Card className="group overflow-hidden hover:shadow-elevated transition-smooth cursor-pointer border-border">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-display font-semibold text-foreground text-sm mb-1 truncate">
                        {product.name}
                      </h4>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.certifications.slice(0, 2).map((c) => (
                          <Badge
                            key={c}
                            variant="outline"
                            className="text-[10px] text-primary border-primary/30 bg-primary/5"
                          >
                            {c}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center">
            <Link to="/products">
              <Button
                variant="outline"
                size="lg"
                className="font-display font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                data-ocid="home-view-all-products"
              >
                View All Products <ArrowRight size={16} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Why Partner With Us ── */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="why-partner-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Why Choose Us
            </Badge>
            <h2
              id="why-partner-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4"
            >
              Why Partner With Hanumante Exports?
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Built on trust, transparency, and decades of agricultural
              expertise — we deliver more than just products.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_PARTNER.map((benefit, i) => (
              <StaggerItem key={benefit.title}>
                <div
                  className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-smooth"
                  data-ocid={`why-partner-${i}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-10">
            <Link to="/why-choose-us">
              <Button
                variant="default"
                size="lg"
                className="font-display font-semibold gap-2"
                data-ocid="home-why-partner-cta"
              >
                Learn More <ArrowRight size={16} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Certifications Section ── */}
      <section
        className="py-16 sm:py-20 bg-muted/30"
        aria-labelledby="certifications-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Verified & Trusted
            </Badge>
            <h2
              id="certifications-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4"
            >
              Our Certifications &amp; Registrations
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              All export operations are backed by mandatory Indian government
              certifications and international food safety compliance.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.id}>
                <div
                  className="relative bg-card rounded-xl border-2 border-primary/25 p-6 text-center hover:border-primary/50 hover:shadow-elevated transition-smooth group"
                  data-ocid={`cert-card-${cert.id}`}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-smooth">
                    <Shield size={28} className="text-primary" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-3 py-0.5 text-xs font-display font-bold mb-3">
                    <CheckCircle2 size={10} />
                    {cert.name}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm mb-2 leading-snug">
                    {cert.fullName}
                  </h3>
                  <p className="text-muted-foreground text-xs font-body leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Export Markets ── */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="markets-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <Badge
                variant="outline"
                className="mb-3 text-primary border-primary/30 bg-primary/5"
              >
                Global Reach
              </Badge>
              <h2
                id="markets-heading"
                className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4"
              >
                Trusted by Buyers in 20+ Countries
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                From wholesale markets in Dubai and Riyadh to premium retail
                chains in Germany and the UK — Hanumante Exports delivers
                consistent quality with a personal touch.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Direct farm-to-port traceability on all shipments",
                  "Full documentation: Phytosanitary, COO, Fumigation Certificate",
                  "Cold-chain logistics for all fresh produce",
                  "Dedicated export manager assigned to every buyer",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground font-body"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/export-logistics">
                <Button
                  variant="default"
                  className="font-display font-semibold gap-2"
                  data-ocid="home-export-logistics-cta"
                >
                  <Package size={16} />
                  View Export Process <ArrowRight size={16} />
                </Button>
              </Link>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 gap-3">
              {EXPORT_MARKETS.map((market) => (
                <StaggerItem key={market.country} direction="left">
                  <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 hover:shadow-card transition-smooth flex items-center gap-3">
                    <span className="text-3xl flex-shrink-0">
                      {market.flag}
                    </span>
                    <div className="min-w-0">
                      <div className="font-display font-semibold text-sm text-foreground truncate">
                        {market.country}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {market.region}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Band ── */}
      <section
        className="py-16 sm:py-20 bg-primary"
        aria-labelledby="cta-band-heading"
      >
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
            <Users size={14} className="text-primary-foreground" />
            <span className="text-primary-foreground text-xs font-body font-semibold">
              Join 500+ International Buyers
            </span>
          </div>
          <h2
            id="cta-band-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-5 leading-tight"
          >
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free quote for your requirements. Our export team will respond
            within 24 hours with pricing, sample availability, and complete
            shipping details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="font-display font-bold text-base px-8 gap-2 min-w-[180px]"
                data-ocid="home-bottom-cta-get-in-touch"
              >
                Get in Touch <ArrowRight size={18} />
              </Button>
            </Link>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg font-display font-bold text-base hover:bg-green-700 transition-smooth shadow-elevated min-w-[180px]"
              data-ocid="home-bottom-cta-whatsapp"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
