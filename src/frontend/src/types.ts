export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  origin: string;
  description: string;
  packagingSizes: string[];
  qualityStandards: string[];
  exportSpecs: string;
  certifications: string[];
  image: string;
  varieties?: string[];
}

export type ProductCategory = "fresh-fruits" | "rice" | "spices-pulses";

export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productInterest: string;
  message: string;
}

export interface Certification {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ExportMarket {
  country: string;
  flag: string;
  region: string;
}

export interface TrustStat {
  value: string;
  label: string;
  icon: string;
}
