import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/FadeIn";
import { COMPANY } from "../constants";
import { useSubmitContactForm } from "../hooks/useQueries";
import type { ContactFormData } from "../types";

const COUNTRIES = [
  "UAE",
  "Saudi Arabia",
  "United Kingdom",
  "United States",
  "Germany",
  "Singapore",
  "Other",
];

const PRODUCT_OPTIONS = [
  "Fresh Fruits",
  "Basmati Rice",
  "Non-Basmati Rice",
  "Spices",
  "Pulses",
  "Other",
];

const EMPTY_FORM: ContactFormData = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  productInterest: "",
  message: "",
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  "Hello, I am interested in your export products",
)}`;

function WhatsAppButton({ size = "default" }: { size?: "default" | "large" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2.5 w-full rounded-xl font-display font-bold transition-smooth focus:outline-none focus:ring-2 focus:ring-ring shadow-card hover:opacity-90 active:scale-[0.98]
        ${
          size === "large"
            ? "px-6 py-4 text-base bg-[oklch(0.42_0.17_145)] text-white"
            : "px-4 py-3 text-sm bg-[oklch(0.42_0.17_145)] text-white"
        }`}
      data-ocid="contact-whatsapp-cta"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp size={size === "large" ? 22 : 18} />
      {size === "large" ? "Chat on WhatsApp Now" : "WhatsApp Us Now"}
    </a>
  );
}

function ContactInfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider mb-1">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

const TRUST_ITEMS = [
  "Response within 24 hours guaranteed",
  "Free product samples on request",
  "Custom packaging & labeling available",
  "APEDA & FSSAI certified exporter",
  "15+ years of export experience",
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const submitMutation = useSubmitContactForm();

  useEffect(() => {
    document.title = "Contact Us | Indian Exporter Gujarat | Hanumante Exports";
    return () => {
      document.title = "Hanumante Exports – India";
    };
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-().]{7,20}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number with country code";
    if (!form.country) newErrors.country = "Please select your country";
    if (!form.productInterest)
      newErrors.productInterest = "Please select a product of interest";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field: keyof ContactFormData) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    if (!validate()) return;
    try {
      await submitMutation.mutateAsync({ ...form });
      setSubmitted(true);
      setForm(EMPTY_FORM);
      setErrors({});
    } catch {
      setSubmitError(true);
    }
  };

  // Form field stagger delays
  const fieldGroups = [0, 1, 2, 3, 4];

  return (
    <>
      {/* Hero Banner */}
      <section
        className="bg-primary py-16 sm:py-20"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down" duration={0.5}>
            <Badge
              variant="outline"
              className="mb-4 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 font-display text-xs uppercase tracking-wider"
            >
              Contact Us
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              id="contact-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4 leading-tight"
            >
              Contact Hanumante Exports – Indian Agricultural Exporter
            </h1>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Send us your requirements and our export team will respond with a
              detailed quote within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="py-16 sm:py-20 bg-background"
        aria-label="Contact information and inquiry form"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-14">
            {/* LEFT: Form */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              {/* WhatsApp CTA above form */}
              <FadeIn delay={0.1}>
                <div className="mb-6 bg-[oklch(0.42_0.17_145_/_0.08)] border border-[oklch(0.42_0.17_145_/_0.25)] rounded-2xl p-5">
                  <p className="text-sm font-body text-foreground mb-3 leading-relaxed">
                    <strong className="font-display font-semibold">
                      Prefer instant response?
                    </strong>{" "}
                    Chat directly with our export manager on WhatsApp for fast
                    answers and product samples.
                  </p>
                  <WhatsAppButton size="large" />
                </div>
              </FadeIn>

              {/* Form card */}
              <FadeIn delay={0.18}>
                <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-card">
                  <div className="mb-6">
                    <h2 className="font-display font-bold text-xl text-foreground mb-1">
                      Request a Quote
                    </h2>
                    <p className="text-muted-foreground text-sm font-body">
                      Fill in your details and our export team will respond with
                      a comprehensive offer.
                    </p>
                  </div>

                  {/* Success State */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 mb-6 bg-primary/10 border border-primary/30 rounded-xl"
                      role="alert"
                      aria-live="polite"
                      data-ocid="contact-success-message"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="font-display font-semibold text-sm text-foreground">
                          Thank you! We will contact you within 24 hours.
                        </p>
                        <p className="text-xs text-muted-foreground font-body mt-0.5">
                          Your inquiry has been submitted successfully. Our
                          export team will review it and get back to you
                          shortly.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Error State */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 mb-6 bg-destructive/10 border border-destructive/30 rounded-xl"
                      role="alert"
                      aria-live="polite"
                      data-ocid="contact-error-message"
                    >
                      <div className="text-destructive flex-shrink-0 mt-0.5">
                        ✕
                      </div>
                      <div>
                        <p className="font-display font-semibold text-sm text-foreground">
                          Submission failed. Please try again.
                        </p>
                        <p className="text-xs text-muted-foreground font-body mt-0.5">
                          Or reach us directly via WhatsApp or email below.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                    data-ocid="contact-form"
                  >
                    {fieldGroups.map((groupIdx) => {
                      if (groupIdx === 0) {
                        return (
                          <motion.div
                            key="group-0"
                            className="grid sm:grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.45,
                              delay: groupIdx * 0.08,
                            }}
                          >
                            {/* Full Name */}
                            <div className="space-y-1.5">
                              <Label
                                htmlFor="name"
                                className="font-body font-medium text-sm"
                              >
                                Full Name{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id="name"
                                value={form.name}
                                onChange={(e) =>
                                  setForm({ ...form, name: e.target.value })
                                }
                                onBlur={() => clearError("name")}
                                placeholder="John Smith"
                                aria-invalid={!!errors.name}
                                aria-describedby={
                                  errors.name ? "err-name" : undefined
                                }
                                data-ocid="contact-input-name"
                              />
                              {errors.name && (
                                <p
                                  id="err-name"
                                  className="text-destructive text-xs font-body"
                                  role="alert"
                                >
                                  {errors.name}
                                </p>
                              )}
                            </div>

                            {/* Company Name (optional) */}
                            <div className="space-y-1.5">
                              <Label
                                htmlFor="companyName"
                                className="font-body font-medium text-sm"
                              >
                                Company Name{" "}
                                <span className="text-muted-foreground text-xs font-normal">
                                  (optional)
                                </span>
                              </Label>
                              <Input
                                id="companyName"
                                value={form.companyName}
                                onChange={(e) =>
                                  setForm({
                                    ...form,
                                    companyName: e.target.value,
                                  })
                                }
                                placeholder="ABC Trading LLC"
                                data-ocid="contact-input-company"
                              />
                            </div>
                          </motion.div>
                        );
                      }
                      if (groupIdx === 1) {
                        return (
                          <motion.div
                            key="group-1"
                            className="grid sm:grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.08 }}
                          >
                            {/* Email */}
                            <div className="space-y-1.5">
                              <Label
                                htmlFor="email"
                                className="font-body font-medium text-sm"
                              >
                                Email Address{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                  setForm({ ...form, email: e.target.value })
                                }
                                onBlur={() => clearError("email")}
                                placeholder="john@company.com"
                                aria-invalid={!!errors.email}
                                aria-describedby={
                                  errors.email ? "err-email" : undefined
                                }
                                data-ocid="contact-input-email"
                              />
                              {errors.email && (
                                <p
                                  id="err-email"
                                  className="text-destructive text-xs font-body"
                                  role="alert"
                                >
                                  {errors.email}
                                </p>
                              )}
                            </div>

                            {/* Phone */}
                            <div className="space-y-1.5">
                              <Label
                                htmlFor="phone"
                                className="font-body font-medium text-sm"
                              >
                                Phone with Country Code{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={form.phone}
                                onChange={(e) =>
                                  setForm({ ...form, phone: e.target.value })
                                }
                                onBlur={() => clearError("phone")}
                                placeholder="+971 50 123 4567"
                                aria-invalid={!!errors.phone}
                                aria-describedby={
                                  errors.phone ? "err-phone" : undefined
                                }
                                data-ocid="contact-input-phone"
                              />
                              {errors.phone && (
                                <p
                                  id="err-phone"
                                  className="text-destructive text-xs font-body"
                                  role="alert"
                                >
                                  {errors.phone}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        );
                      }
                      if (groupIdx === 2) {
                        return (
                          <motion.div
                            key="group-2"
                            className="grid sm:grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.16 }}
                          >
                            {/* Country Dropdown */}
                            <div className="space-y-1.5">
                              <Label
                                htmlFor="country"
                                className="font-body font-medium text-sm"
                              >
                                Country{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Select
                                value={form.country}
                                onValueChange={(v) => {
                                  setForm({ ...form, country: v });
                                  clearError("country");
                                }}
                              >
                                <SelectTrigger
                                  id="country"
                                  aria-invalid={!!errors.country}
                                  aria-describedby={
                                    errors.country ? "err-country" : undefined
                                  }
                                  data-ocid="contact-select-country"
                                >
                                  <SelectValue placeholder="Select your country" />
                                </SelectTrigger>
                                <SelectContent>
                                  {COUNTRIES.map((c) => (
                                    <SelectItem key={c} value={c}>
                                      {c}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {errors.country && (
                                <p
                                  id="err-country"
                                  className="text-destructive text-xs font-body"
                                  role="alert"
                                >
                                  {errors.country}
                                </p>
                              )}
                            </div>

                            {/* Product Interest Dropdown */}
                            <div className="space-y-1.5">
                              <Label
                                htmlFor="productInterest"
                                className="font-body font-medium text-sm"
                              >
                                Product Interest{" "}
                                <span className="text-destructive">*</span>
                              </Label>
                              <Select
                                value={form.productInterest}
                                onValueChange={(v) => {
                                  setForm({ ...form, productInterest: v });
                                  clearError("productInterest");
                                }}
                              >
                                <SelectTrigger
                                  id="productInterest"
                                  aria-invalid={!!errors.productInterest}
                                  aria-describedby={
                                    errors.productInterest
                                      ? "err-product"
                                      : undefined
                                  }
                                  data-ocid="contact-select-product"
                                >
                                  <SelectValue placeholder="Select a product" />
                                </SelectTrigger>
                                <SelectContent>
                                  {PRODUCT_OPTIONS.map((opt) => (
                                    <SelectItem key={opt} value={opt}>
                                      {opt}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {errors.productInterest && (
                                <p
                                  id="err-product"
                                  className="text-destructive text-xs font-body"
                                  role="alert"
                                >
                                  {errors.productInterest}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        );
                      }
                      if (groupIdx === 3) {
                        return (
                          <motion.div
                            key="group-3"
                            className="space-y-1.5"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.24 }}
                          >
                            {/* Message */}
                            <Label
                              htmlFor="message"
                              className="font-body font-medium text-sm"
                            >
                              Message / Requirements{" "}
                              <span className="text-destructive">*</span>
                            </Label>
                            <Textarea
                              id="message"
                              value={form.message}
                              onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                              }
                              onBlur={() => clearError("message")}
                              placeholder="Please describe your requirements: quantity, packaging, delivery port, target price…"
                              rows={4}
                              aria-invalid={!!errors.message}
                              aria-describedby={
                                errors.message ? "err-message" : undefined
                              }
                              data-ocid="contact-textarea-message"
                              className="resize-y min-h-[100px]"
                            />
                            {errors.message && (
                              <p
                                id="err-message"
                                className="text-destructive text-xs font-body"
                                role="alert"
                              >
                                {errors.message}
                              </p>
                            )}
                          </motion.div>
                        );
                      }
                      if (groupIdx === 4) {
                        return (
                          <motion.div
                            key="group-4"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.32 }}
                          >
                            <Button
                              type="submit"
                              size="lg"
                              className="w-full font-display font-bold gap-2 text-base py-6"
                              disabled={submitMutation.isPending}
                              data-ocid="contact-submit-button"
                            >
                              {submitMutation.isPending ? (
                                <span className="flex items-center gap-2">
                                  <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                                  Submitting…
                                </span>
                              ) : (
                                <>
                                  <Send size={16} /> Send Inquiry
                                </>
                              )}
                            </Button>

                            <p className="text-xs text-muted-foreground font-body text-center mt-3">
                              By submitting, you agree to be contacted by our
                              export team. We respect your privacy.
                            </p>
                          </motion.div>
                        );
                      }
                      return null;
                    })}
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT: Contact Info */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
              {/* Direct contact card */}
              <FadeIn direction="left">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                  <h2 className="font-display font-bold text-lg text-foreground mb-5">
                    Get in Touch Directly
                  </h2>
                  <StaggerContainer className="space-y-5">
                    <StaggerItem>
                      <ContactInfoItem
                        icon={<Mail size={16} className="text-primary" />}
                        label="Email"
                      >
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="text-sm text-foreground font-body hover:text-primary transition-smooth break-all"
                        >
                          {COMPANY.email}
                        </a>
                      </ContactInfoItem>
                    </StaggerItem>

                    <StaggerItem>
                      <ContactInfoItem
                        icon={<Phone size={16} className="text-primary" />}
                        label="Phone"
                      >
                        <a
                          href={`tel:${COMPANY.phone}`}
                          className="text-sm text-foreground font-body hover:text-primary transition-smooth"
                        >
                          {COMPANY.phone}
                        </a>
                      </ContactInfoItem>
                    </StaggerItem>

                    <StaggerItem>
                      <ContactInfoItem
                        icon={
                          <SiWhatsapp
                            size={16}
                            className="text-[oklch(0.42_0.17_145)]"
                          />
                        }
                        label="WhatsApp"
                      >
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-foreground font-body hover:text-primary transition-smooth"
                        >
                          +91-98765-43210
                        </a>
                      </ContactInfoItem>
                    </StaggerItem>

                    <StaggerItem>
                      <ContactInfoItem
                        icon={<Clock size={16} className="text-primary" />}
                        label="Business Hours"
                      >
                        <div className="text-sm text-foreground font-body">
                          Mon–Sat, 9:00 AM to 6:00 PM IST
                        </div>
                      </ContactInfoItem>
                    </StaggerItem>
                  </StaggerContainer>

                  {/* WhatsApp CTA in contact info section */}
                  <div className="mt-5 pt-5 border-t border-border">
                    <WhatsAppButton />
                  </div>
                </div>
              </FadeIn>

              {/* Location card */}
              <FadeIn direction="left" delay={0.1}>
                <div className="bg-muted/40 rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground uppercase tracking-wide">
                        Our Location
                      </h3>
                      <p className="text-sm text-muted-foreground font-body mt-0.5">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border mt-3">
                    <p className="text-sm font-body text-foreground leading-relaxed">
                      <span className="font-display font-semibold text-primary">
                        Based in Gujarat, India
                      </span>{" "}
                      — Exporting from Mundra Port & Nhava Sheva (JNPT)
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {COMPANY.portOfLoading.map((port) => (
                        <span
                          key={port}
                          className="inline-flex items-center gap-1 text-xs font-display font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                        >
                          🚢 {port}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Trust signals */}
              <FadeIn direction="left" delay={0.2}>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                  <h3 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wide">
                    Why International Buyers Trust Us
                  </h3>
                  <StaggerContainer className="space-y-0">
                    {TRUST_ITEMS.map((item, i) => (
                      <StaggerItem key={item}>
                        <div
                          className="flex items-center gap-2.5 text-sm text-foreground font-body py-2 border-b border-border last:border-0"
                          data-ocid={`trust-item-${i}`}
                        >
                          <CheckCircle2
                            size={14}
                            className="text-primary flex-shrink-0"
                          />
                          {item}
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
