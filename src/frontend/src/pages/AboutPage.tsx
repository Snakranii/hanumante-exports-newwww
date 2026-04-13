import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, User } from "lucide-react";
import { useEffect } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/FadeIn";
import { CERTIFICATIONS, COMPANY, TRUST_STATS } from "../constants";

const MISSION_POINTS = [
  "Deliver world-class quality standards — APEDA, FSSAI, and GlobalG.A.P certified produce for every shipment.",
  "Partner directly with farmers — eliminating middlemen to ensure fair prices and fresher produce for global buyers.",
  "Champion sustainable agricultural exports — responsible sourcing, eco-conscious packaging, and reduced food miles.",
  "Build lasting global reach — expanding market access for Indian agricultural products across the UAE, Europe, USA, and Asia.",
];

const PILLARS = [
  {
    emoji: "🏅",
    title: "Quality Assurance",
    desc: "Every batch of produce we export is APEDA and FSSAI certified, undergoes multi-stage lab testing for pesticide residues and microbial safety, and meets EU/US maximum residue limits. Our rejection rate is among the lowest in the industry.",
  },
  {
    emoji: "🌾",
    title: "Ethical Sourcing",
    desc: "We source directly from verified farmers and certified agro-producer groups across Gujarat, Maharashtra, Punjab, and beyond. We pay fair prices, invest in farmer training, and build transparent, long-term sourcing relationships.",
  },
  {
    emoji: "🤝",
    title: "Sustainable Partnerships",
    desc: "Over 80% of our international buyers return season after season. We don't operate on transactions — we operate on trust. Our clients receive dedicated account support, proactive communication, and consistent delivery performance.",
  },
];

const TEAM_PLACEHOLDERS = [
  { name: "Founder & Director", dept: "Leadership" },
  { name: "Operations Head", dept: "Logistics & Export" },
  { name: "Quality Assurance Lead", dept: "Quality & Compliance" },
];

export default function AboutPage() {
  useEffect(() => {
    const prev = document.title;
    document.title =
      "About Us | Family Agricultural Exporter India | Hanumante Exports";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-24" aria-labelledby="about-h1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down" duration={0.5}>
            <Badge
              variant="outline"
              className="mb-4 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10"
            >
              About Us
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              id="about-h1"
              className="font-display font-bold text-3xl sm:text-5xl text-primary-foreground mb-6 leading-tight"
            >
              About Hanumante Exports –{" "}
              <span className="block sm:inline">
                Trusted Agricultural Export Company India
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="text-primary-foreground/80 text-lg font-body leading-relaxed max-w-2xl mx-auto">
              Since {COMPANY.founded}, we have been bridging India's
              agricultural abundance with international demand — one quality
              shipment, one lasting relationship at a time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Strip */}
      <section
        className="py-10 bg-muted/30 border-y border-border"
        aria-label="Company statistics"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Family Story */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="story-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <Badge
                variant="outline"
                className="mb-3 text-primary border-primary/30 bg-primary/5"
              >
                Our Story
              </Badge>
              <h2
                id="story-heading"
                className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6"
              >
                From the Fields of Gujarat to Global Markets
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Hanumante Exports was born from a profound love of the land.
                  Our founder, Shri Rameshbhai Hanumante, was raised in the
                  agricultural heartland of Anand, Gujarat — a region famous for
                  its milk cooperatives, fertile farmlands, and entrepreneurial
                  spirit. From childhood, he witnessed both the extraordinary
                  richness of India's harvests and the immense challenges
                  farmers faced in reaching international buyers.
                </p>
                <p>
                  In {COMPANY.founded}, with modest capital, an unwavering
                  belief in Indian produce, and a handshake culture of trust,
                  Rameshbhai dispatched his first export consignment — a
                  container of APEDA-certified fresh pomegranates to a wholesale
                  buyer in Dubai. The shipment arrived in perfect condition.
                  That single delivery, built entirely on quality and personal
                  accountability, sparked a journey that has since grown to
                  reach buyers across 20+ countries on five continents.
                </p>
                <p>
                  Today, Hanumante Exports is proudly a second-generation family
                  enterprise. Rameshbhai's son, Vikas Hanumante, has joined the
                  company, bringing modern logistics expertise and digital
                  marketing while preserving the core values instilled by his
                  father. Together, they manage everything from sourcing
                  partnerships with over 200 verified farmers to last-mile cold
                  chain logistics through Mundra Port and Nhava Sheva.
                </p>
                <p>
                  What sets us apart is simple: we treat every buyer as family.
                  When you partner with Hanumante Exports, you are not dealing
                  with an anonymous trading house — you are working directly
                  with the Hanumante family, who personally stand behind every
                  invoice, every certificate of analysis, and every shipment
                  that carries the Hanumante name across the world.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <img
                  src="/assets/generated/hero-agricultural-export.jpg"
                  alt="Hanumante Exports agricultural fields and operations in Gujarat, India"
                  className="rounded-2xl w-full object-cover shadow-elevated aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-elevated border border-border">
                  <div className="font-display font-bold text-2xl text-primary">
                    Since {COMPANY.founded}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    Trusted by International Buyers
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        className="py-16 sm:py-20 bg-muted/30"
        aria-labelledby="vision-mission-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2
              id="vision-mission-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground"
            >
              Vision &amp; Mission
            </h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Vision */}
            <StaggerItem direction="right">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground h-full">
                <div className="text-2xl mb-2">🌍</div>
                <h3 className="font-display font-bold text-xl mb-4">
                  Our Vision
                </h3>
                <p className="font-body leading-relaxed text-primary-foreground/90">
                  To become the most trusted agricultural export company from
                  India — recognized globally for premium quality, ethical trade
                  practices, and long-term partnerships that connect Indian
                  farmers directly to international markets, improving
                  livelihoods and elevating the global reputation of Indian
                  agriculture.
                </p>
              </div>
            </StaggerItem>
            {/* Mission */}
            <StaggerItem direction="left">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-xs h-full">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Our Mission
                </h3>
                <ul className="space-y-3">
                  {MISSION_POINTS.map((point) => (
                    <li key={point} className="flex gap-3 items-start">
                      <CheckCircle2
                        size={18}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-muted-foreground font-body leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3 Pillars */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="pillars-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              How We Work
            </Badge>
            <h2
              id="pillars-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground"
            >
              The Three Pillars of Hanumante Exports
            </h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {PILLARS.map((pillar, i) => (
              <StaggerItem key={pillar.title}>
                <div
                  className="bg-card rounded-xl p-8 border border-border shadow-xs hover:shadow-elevated transition-smooth text-center h-full"
                  data-ocid={`pillar-card-${i}`}
                >
                  <div className="text-4xl mb-4">{pillar.emoji}</div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="py-16 sm:py-20 bg-muted/30"
        aria-labelledby="certs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              Credentials
            </Badge>
            <h2
              id="certs-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4"
            >
              Certified &amp; Compliant
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Our certifications reflect our commitment to international quality
              standards, food safety, and regulatory compliance.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.id}>
                <div className="bg-card rounded-xl p-6 border border-border shadow-xs text-center hover:shadow-elevated transition-smooth h-full">
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <div className="font-display font-bold text-lg text-primary mb-1">
                    {cert.name}
                  </div>
                  <div className="text-xs font-body font-medium text-foreground mb-2">
                    {cert.fullName}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-labelledby="team-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-3 text-primary border-primary/30 bg-primary/5"
            >
              The People Behind Hanumante
            </Badge>
            <h2
              id="team-heading"
              className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4"
            >
              Our Team
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              A dedicated team of export professionals, agronomists, and
              logistics experts working together to deliver world-class service.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {TEAM_PLACEHOLDERS.map((member) => (
              <StaggerItem key={member.name}>
                <div
                  className="bg-card rounded-xl p-8 border border-border shadow-xs text-center hover:shadow-elevated transition-smooth"
                  data-ocid={`team-card-${member.dept.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 border-2 border-border">
                    <User size={36} className="text-muted-foreground" />
                  </div>
                  <div className="font-display font-semibold text-foreground mb-1">
                    {member.name}
                  </div>
                  <div className="text-xs text-primary font-body font-medium mb-3 uppercase tracking-wide">
                    {member.dept}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-muted-foreground border-border text-xs"
                  >
                    Coming Soon
                  </Badge>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary" aria-label="Partner with us">
        <FadeIn className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">
            Ready to Source Quality Agricultural Products?
          </h2>
          <p className="text-primary-foreground/80 font-body mb-8 text-lg">
            Join hundreds of international buyers who trust Hanumante Exports
            for consistent quality, fair pricing, and reliable delivery.
          </p>
          <Link to="/contact">
            <Button
              variant="secondary"
              size="lg"
              className="font-display font-bold gap-2"
              data-ocid="about-partner-cta"
            >
              Partner With Us <ArrowRight size={16} />
            </Button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
