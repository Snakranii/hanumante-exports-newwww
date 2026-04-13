import { Link } from "@tanstack/react-router";
import { ExternalLink, Leaf, Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import {
  CERTIFICATIONS,
  COMPANY,
  EXPORT_MARKETS,
  NAV_LINKS,
} from "../constants";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

  return (
    <footer className="bg-card border-t border-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2.5 mb-4"
              aria-label="Hanumante Exports home"
            >
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Leaf size={20} className="text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold text-foreground text-sm leading-tight">
                  Hanumante Exports
                </div>
                <div className="text-muted-foreground text-[10px]">
                  India's Agricultural Exporter
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A family-owned agricultural export company from Gujarat, India.
              Trusted by buyers in 20+ countries for premium quality and
              reliable delivery.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[oklch(0.55_0.18_145)] text-white rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-smooth"
              data-ocid="footer-whatsapp"
              aria-label="Chat on WhatsApp"
            >
              <SiWhatsapp size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail size={15} className="mt-0.5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-primary transition-smooth break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Phone
                  size={15}
                  className="mt-0.5 text-primary flex-shrink-0"
                />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="hover:text-primary transition-smooth"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin
                  size={15}
                  className="mt-0.5 text-primary flex-shrink-0"
                />
                <span>{COMPANY.address}</span>
              </li>
            </ul>

            {/* Export markets */}
            <h3 className="font-display font-semibold text-foreground mt-6 mb-3 text-sm uppercase tracking-wide">
              We Export To
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {EXPORT_MARKETS.slice(0, 6).map((market) => (
                <span
                  key={market.country}
                  className="inline-flex items-center gap-1 text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                >
                  <span>{market.flag}</span>
                  <span>{market.country}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Certifications
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-start gap-2.5">
                  <span className="text-base leading-none mt-0.5">
                    {cert.icon}
                  </span>
                  <div>
                    <div className="font-display font-semibold text-sm text-foreground">
                      {cert.name}
                    </div>
                    <div className="text-xs text-muted-foreground leading-snug">
                      {cert.description.substring(0, 50)}…
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © {year} {COMPANY.nameWithSuffix}. All rights reserved.
          </span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-smooth"
          >
            Built with love using caffeine.ai <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
}
