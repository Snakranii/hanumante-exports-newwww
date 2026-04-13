import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Sprout,
  Star,
  TrendingDown,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

interface ValueSection {
  id: string;
  icon: React.ReactNode;
  badge: string;
  sectionNumber: string;
  heading: string;
  subheading: string;
  bullets: string[];
  stat: { value: string; label: string };
  reverse: boolean;
  bgClass: string;
}

const VALUE_SECTIONS: ValueSection[] = [
  {
    id: "direct-sourcing",
    icon: <Sprout className="w-10 h-10 text-primary" />,
    badge: "Farm-to-Port",
    sectionNumber: "01",
    heading: "Direct Sourcing from Farmers",
    subheading:
      "No middlemen. Maximum freshness. Better prices for global buyers.",
    bullets: [
      "Direct partnerships with 200+ farmers across Gujarat & Maharashtra",
      "Farm-to-port supply chain with no middlemen",
      "Consistent quality at competitive prices",
    ],
    stat: { value: "200+", label: "Farmer Partners" },
    reverse: false,
    bgClass: "bg-background",
  },
  {
    id: "competitive-pricing",
    icon: <TrendingDown className="w-10 h-10 text-primary" />,
    badge: "Best Value",
    sectionNumber: "02",
    heading: "Competitive Pricing",
    subheading:
      "Transparent, fair pricing with flexible international trade terms.",
    bullets: [
      "Volume discounts available for bulk orders",
      "Flexible payment terms: TT, LC, DP",
      "Regular market pricing updates — no hidden costs",
    ],
    stat: { value: "3+", label: "Payment Modes" },
    reverse: true,
    bgClass: "bg-muted/30",
  },
  {
    id: "quality-standards",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    badge: "Certified Quality",
    sectionNumber: "03",
    heading: "International Quality Standards",
    subheading: "Certified, lab-tested, and compliant — every single shipment.",
    bullets: [
      "APEDA, FSSAI, IEC & GST certified",
      "Third-party lab tested before every shipment",
      "Compliance with EU, US, and GCC food safety regulations",
    ],
    stat: { value: "4+", label: "Certifications Held" },
    reverse: false,
    bgClass: "bg-background",
  },
  {
    id: "logistics",
    icon: <Truck className="w-10 h-10 text-primary" />,
    badge: "Reliable Logistics",
    sectionNumber: "04",
    heading: "Reliable Logistics & Timely Delivery",
    subheading: "End-to-end logistics management with full buyer transparency.",
    bullets: [
      "Export from Mundra Port & Nhava Sheva (JNPT)",
      "Partnerships with top freight forwarders",
      "Real-time shipment tracking shared with buyers",
    ],
    stat: { value: "2", label: "Major Ports" },
    reverse: true,
    bgClass: "bg-muted/30",
  },
];

const TRACK_RECORD = [
  {
    value: "10+",
    label: "Countries Served",
    sublabel: "Active export markets across UAE, EU, USA & Asia",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    value: "500+",
    label: "Tons Exported Annually",
    sublabel: "Consistent high-volume delivery year-round",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    value: "15+",
    label: "Years of Agricultural Expertise",
    sublabel: "Deep domain knowledge and trade relationships since 2008",
    icon: <Award className="w-6 h-6" />,
  },
];

const CERTIFICATIONS_TRUST = [
  {
    name: "APEDA",
    fullName:
      "Agricultural & Processed Food Products Export Development Authority",
  },
  {
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
  },
  {
    name: "IEC",
    fullName: "Import Export Code — Authorized by DGFT",
  },
  {
    name: "GST",
    fullName: "GST Registered — Fully Compliant with Indian Tax Laws",
  },
];

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
      <span className="text-foreground/80 leading-relaxed">{text}</span>
    </li>
  );
}

function ValueSectionBlock({
  section,
}: {
  section: ValueSection;
}) {
  return (
    <section
      id={section.id}
      className={`py-16 md:py-20 ${section.bgClass}`}
      aria-labelledby={`${section.id}-heading`}
      data-ocid={`why-section-${section.id}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            section.reverse ? "lg:[&>*:first-child]:order-last" : ""
          }`}
        >
          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl bg-card border border-border p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[260px] shadow-elevated overflow-hidden">
              {/* Decorative blob */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 rounded-full bg-primary/5" />
              </div>

              <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20">
                {section.icon}
              </div>

              <div className="relative z-10">
                <p className="text-5xl font-display font-bold text-primary">
                  {section.stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1 font-medium">
                  {section.stat.label}
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-display font-bold text-primary/50 tracking-widest">
                {section.sectionNumber}
              </span>
              <Badge
                variant="secondary"
                className="font-medium text-primary bg-primary/10 border-primary/20"
              >
                {section.badge}
              </Badge>
            </div>

            <h2
              id={`${section.id}-heading`}
              className="text-2xl md:text-3xl font-display font-bold text-foreground leading-tight"
            >
              {section.heading}
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              {section.subheading}
            </p>

            <ul className="space-y-3 pt-1">
              {section.bullets.map((bullet) => (
                <BulletItem key={bullet} text={bullet} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function WhyChooseUsPage() {
  useEffect(() => {
    const prev = document.title;
    document.title =
      "Why Choose Us | Trusted Indian Exporter | Hanumante Exports";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16 md:py-20 relative overflow-hidden"
        aria-labelledby="why-choose-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 font-medium text-primary bg-primary/10 border-primary/20"
            >
              <Star className="w-3.5 h-3.5 mr-1.5 fill-primary" />
              Trusted by Buyers in 10+ Countries
            </Badge>

            <h1
              id="why-choose-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4"
            >
              Why Choose Hanumante Exports –{" "}
              <span className="text-primary">
                Agricultural Export Company India
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are more than an exporter — we are your long-term trade
              partner. Here's why global buyers trust us for consistent quality,
              fair pricing, and reliable delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alternating value sections */}
      {VALUE_SECTIONS.map((section) => (
        <ValueSectionBlock key={section.id} section={section} />
      ))}

      {/* Section 5 – Export Track Record */}
      <section
        id="track-record"
        className="py-16 md:py-20 bg-primary relative overflow-hidden"
        aria-labelledby="track-record-heading"
      >
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-primary-foreground/40 text-xs font-display font-bold tracking-widest">
                05
              </span>
              <Badge
                variant="secondary"
                className="bg-white/15 text-primary-foreground border-white/20"
              >
                <Award className="w-3.5 h-3.5 mr-1.5" />
                Export Track Record
              </Badge>
            </div>

            <h2
              id="track-record-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground"
            >
              A Proven Track Record in Global Agricultural Trade
            </h2>
            <p className="text-primary-foreground/70 mt-3 max-w-xl mx-auto leading-relaxed">
              Numbers that speak for our commitment to excellence and
              international partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TRACK_RECORD.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center backdrop-blur-sm"
                data-ocid={`track-record-stat-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {stat.icon}
                </div>
                <p className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground font-semibold font-display text-base mb-2">
                  {stat.label}
                </p>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {stat.sublabel}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications strip */}
      <section
        className="py-12 bg-muted/30 border-y border-border"
        aria-label="Our certifications"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8"
          >
            Internationally Recognized Certifications
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CERTIFICATIONS_TRUST.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-5 text-center shadow-card hover:shadow-elevated transition-smooth"
                data-ocid={`cert-badge-${cert.name.toLowerCase()}`}
              >
                <p className="text-xl font-display font-bold text-primary mb-1">
                  {cert.name}
                </p>
                <p className="text-xs text-muted-foreground leading-snug">
                  {cert.fullName}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-20 bg-card border-t border-border relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
              <Globe className="w-8 h-8 text-primary" />
            </div>

            <h2
              id="cta-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground"
            >
              Ready to Start Your Export Journey?
            </h2>

            <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
              Join 500+ international buyers who trust Hanumante Exports for
              premium Indian agricultural products. Let's build a long-term
              partnership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="font-display font-semibold px-8 transition-smooth"
                data-ocid="cta-partner-with-us"
              >
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-display font-semibold px-8 transition-smooth border-primary/40 text-primary hover:bg-primary/5"
                data-ocid="cta-view-products"
              >
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Average response time: within 24 hours · All inquiries treated
              confidentially
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
