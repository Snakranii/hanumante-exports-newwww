import type {
  Certification,
  ExportMarket,
  NavLink,
  Product,
  TrustStat,
} from "./types";

export const COMPANY = {
  name: "Hanumante Exports",
  nameWithSuffix: "Hanumante Exports – India",
  tagline: "Exporting Quality from India to the World",
  subTagline: "Premium Agricultural Products for International Markets",
  email: "info@hanumante-exports.com",
  phone: "+91-9876543210",
  whatsapp: "919876543210",
  whatsappMessage:
    "Hello, I'm interested in your agricultural export products. Please provide more details.",
  address: "Anand, Gujarat – 388001, India",
  portOfLoading: ["Mundra Port, Gujarat", "Nhava Sheva (JNPT), Mumbai"],
  gst: "24XXXXXXXXXXXZX",
  iec: "XXXXXXXXXX",
  founded: "2008",
  website: "https://hanumante-exports.com",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Export & Logistics", href: "/export-logistics" },
  { label: "Contact", href: "/contact" },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "apeda",
    name: "APEDA",
    fullName:
      "Agricultural & Processed Food Products Export Development Authority",
    description:
      "Registered exporter under APEDA for fresh fruits, vegetables & processed foods",
    icon: "🏛️",
  },
  {
    id: "fssai",
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
    description:
      "Certified for food safety standards compliance in all exported products",
    icon: "✅",
  },
  {
    id: "iec",
    name: "IEC",
    fullName: "Import Export Code",
    description:
      "Authorized by DGFT with a valid Import Export Code for international trade",
    icon: "📋",
  },
  {
    id: "gst",
    name: "GST",
    fullName: "Goods & Services Tax Registration",
    description: "GST registered entity compliant with Indian tax regulations",
    icon: "🧾",
  },
];

export const EXPORT_MARKETS: ExportMarket[] = [
  { country: "UAE", flag: "🇦🇪", region: "Middle East" },
  { country: "Saudi Arabia", flag: "🇸🇦", region: "Middle East" },
  { country: "United Kingdom", flag: "🇬🇧", region: "Europe" },
  { country: "Germany", flag: "🇩🇪", region: "Europe" },
  { country: "Netherlands", flag: "🇳🇱", region: "Europe" },
  { country: "USA", flag: "🇺🇸", region: "Americas" },
  { country: "Singapore", flag: "🇸🇬", region: "Asia-Pacific" },
  { country: "Malaysia", flag: "🇲🇾", region: "Asia-Pacific" },
];

export const TRUST_STATS: TrustStat[] = [
  { value: "15+", label: "Years of Export Experience", icon: "📅" },
  { value: "20+", label: "Countries Served", icon: "🌍" },
  { value: "500+", label: "Satisfied International Clients", icon: "🤝" },
  { value: "4", label: "Industry Certifications", icon: "🏅" },
];

export const INCOTERMS = [
  "FOB (Free on Board)",
  "CIF (Cost, Insurance & Freight)",
  "CFR (Cost & Freight)",
  "EXW (Ex Works)",
  "DAP (Delivered at Place)",
];

export const PRODUCTS: Product[] = [
  {
    id: "pomegranate",
    name: "Fresh Pomegranate",
    category: "fresh-fruits",
    origin: "Nashik & Solapur, Maharashtra, India",
    description:
      "Premium Bhagwa and Ganesh variety pomegranates, known for their deep red arils, sweet-tart flavor, and extended shelf life. Ideal for fresh consumption and juice extraction.",
    packagingSizes: [
      "2 kg cartons",
      "4 kg cartons",
      "5 kg cartons",
      "Custom packaging available",
    ],
    qualityStandards: [
      "EU GlobalG.A.P",
      "APEDA Grade A",
      "No pesticide residues",
      "Brix: 14–17°",
    ],
    exportSpecs:
      "Minimum order: 1 FCL (20 MT). Shelf life: 60 days at 5°C. Available October–March.",
    certifications: ["APEDA", "FSSAI", "GlobalG.A.P"],
    image: "/assets/generated/hero-agricultural-export.dim_1280x720.jpg",
    varieties: ["Bhagwa", "Ganesh", "Mridula"],
  },
  {
    id: "banana",
    name: "Fresh Banana (Cavendish)",
    category: "fresh-fruits",
    origin: "Jalgaon, Maharashtra & Anand, Gujarat, India",
    description:
      "Premium Cavendish and G9 variety bananas, uniformly sized with superior taste. Sourced directly from certified farms in Gujarat and Maharashtra.",
    packagingSizes: [
      "13 kg cartons",
      "18 kg cartons",
      "Custom cluster packing",
    ],
    qualityStandards: [
      "APEDA Grade A",
      "Uniform sizing",
      "0–1% blemish tolerance",
    ],
    exportSpecs:
      "Minimum order: 1 FCL. Available year-round. Cold chain logistics provided.",
    certifications: ["APEDA", "FSSAI"],
    image: "/assets/generated/hero-agricultural-export.dim_1280x720.jpg",
    varieties: ["Cavendish G9", "Robusta"],
  },
  {
    id: "mango",
    name: "Alphonso Mango",
    category: "fresh-fruits",
    origin: "Ratnagiri & Devgad, Maharashtra, India",
    description:
      "The King of Mangoes — GI-tagged Alphonso mangoes with unmatched sweetness, rich aroma, and saffron-hued flesh. Premium export quality for discerning international buyers.",
    packagingSizes: [
      "3 kg cartons (12 pcs)",
      "5 kg cartons (20 pcs)",
      "Custom gift packaging",
    ],
    qualityStandards: [
      "GI Tagged",
      "APEDA Certified",
      "EU Pesticide MRL Compliant",
      "Brix: 18–22°",
    ],
    exportSpecs:
      "Minimum order: 500 cartons. Season: April–June. Air & sea shipments available.",
    certifications: ["APEDA", "FSSAI", "GI Tag"],
    image: "/assets/generated/hero-agricultural-export.dim_1280x720.jpg",
    varieties: ["Alphonso (Hapus)", "Kesar", "Totapuri"],
  },
  {
    id: "basmati-rice",
    name: "Premium Basmati Rice",
    category: "rice",
    origin: "Punjab, Haryana & Uttarakhand, India",
    description:
      "Long-grain, aromatic Basmati rice with exceptional elongation ratio. Available in aged and non-aged variants. Perfect for premium retail and food service markets globally.",
    packagingSizes: [
      "1 kg pouches",
      "5 kg bags",
      "25 kg PP bags",
      "50 kg jute bags",
      "Bulk containers",
    ],
    qualityStandards: [
      "Average grain length: 8.0+ mm",
      "Moisture: <12%",
      "Purity: 99.5%",
      "No broken grains",
    ],
    exportSpecs:
      "Minimum order: 25 MT. Available year-round. Custom private label packaging offered.",
    certifications: ["APEDA", "FSSAI", "Agmark"],
    image: "/assets/generated/hero-agricultural-export.dim_1280x720.jpg",
    varieties: ["1121 Extra Long", "Pusa Basmati", "Traditional Basmati"],
  },
  {
    id: "non-basmati-rice",
    name: "Non-Basmati Rice",
    category: "rice",
    origin: "Andhra Pradesh, Telangana & West Bengal, India",
    description:
      "High-quality IR64, Sona Masoori, and Parboiled rice for mass market consumption. Competitive pricing with consistent quality for bulk buyers.",
    packagingSizes: [
      "25 kg PP bags",
      "50 kg jute bags",
      "Bulk containers",
      "Custom OEM packaging",
    ],
    qualityStandards: [
      "Moisture: <13%",
      "Broken: <5%",
      "Sortex cleaned",
      "Uniform grain size",
    ],
    exportSpecs:
      "Minimum order: 50 MT. High-volume orders welcome. Year-round availability.",
    certifications: ["APEDA", "FSSAI"],
    image: "/assets/generated/hero-agricultural-export.dim_1280x720.jpg",
    varieties: ["IR64 Parboiled", "Sona Masoori", "HMT", "Swarna"],
  },
  {
    id: "spices-pulses",
    name: "Indian Spices & Pulses",
    category: "spices-pulses",
    origin: "Gujarat, Rajasthan & Andhra Pradesh, India",
    description:
      "Authentic Indian spices and pulses sourced from premium growing regions. Cumin, turmeric, coriander, red chilli, chana dal, moong dal and more — cleaned, sorted, and packaged for export.",
    packagingSizes: [
      "100g to 1 kg retail packs",
      "5 kg to 25 kg bags",
      "50 kg bulk sacks",
    ],
    qualityStandards: [
      "Cleaned & sortex graded",
      "Heavy metals tested",
      "Aflatoxin compliant",
      "EU/US MRL compliant",
    ],
    exportSpecs:
      "Minimum order varies by product (100 kg–5 MT). Custom blends available.",
    certifications: ["APEDA", "FSSAI", "Spices Board India"],
    image: "/assets/generated/hero-agricultural-export.dim_1280x720.jpg",
    varieties: [
      "Cumin (Jeera)",
      "Turmeric",
      "Coriander",
      "Red Chilli",
      "Chana Dal",
      "Moong Dal",
    ],
  },
];
