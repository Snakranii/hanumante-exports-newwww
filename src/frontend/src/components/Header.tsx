import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { COMPANY, NAV_LINKS } from "../constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;
  const prevPath = useRef(currentPath);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prevPath.current !== currentPath) {
      setMobileOpen(false);
      prevPath.current = currentPath;
    }
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-card border-b border-border transition-smooth ${scrolled ? "shadow-elevated" : "shadow-xs"}`}
      data-ocid="site-header"
    >
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <span className="flex items-center gap-1.5">
            <Phone size={11} />
            <a href={`tel:${COMPANY.phone}`} className="hover:underline">
              {COMPANY.phone}
            </a>
            <span className="mx-2">|</span>
            <a href={`mailto:${COMPANY.email}`} className="hover:underline">
              {COMPANY.email}
            </a>
          </span>
          <span className="flex items-center gap-3">
            <span>APEDA Certified</span>
            <span>•</span>
            <span>FSSAI Certified</span>
            <span>•</span>
            <span>IEC Registered</span>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 min-w-0"
            aria-label="Hanumante Exports home"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <Leaf size={20} className="text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-foreground text-base leading-tight truncate">
                Hanumante Exports
              </div>
              <div className="text-muted-foreground text-[10px] font-body leading-none hidden sm:block">
                India's Agricultural Exporter
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-body font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    currentPath === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  data-ocid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button
                variant="default"
                size="sm"
                className="font-display font-semibold"
                data-ocid="nav-cta-request-quote"
              >
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="nav-hamburger"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-card border-t border-border shadow-elevated"
          data-ocid="mobile-menu"
        >
          <ul className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`flex items-center px-3 py-3 rounded-lg text-sm font-body font-medium transition-smooth ${
                    currentPath === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  data-ocid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <Link to="/contact" className="block">
              <Button
                variant="default"
                className="w-full font-display font-semibold"
                data-ocid="mobile-nav-cta"
              >
                Request Quote
              </Button>
            </Link>
          </div>
          <div className="px-4 pb-4 pt-2 border-t border-border text-xs text-muted-foreground flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1 hover:text-primary transition-smooth"
            >
              <Phone size={11} />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
