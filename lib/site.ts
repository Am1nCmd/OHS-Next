export const siteConfig = {
  name: "Oriental Hair Solutions",
  title: "Oriental Hair Solutions — Herbal Hair Loss Treatment Singapore",
  description:
    "Singapore's trusted herbal hair regrowth specialist. Trichologist-led TCM and advanced scalp therapies with visible, lasting results. Book your trial today.",
  url: "https://orientalhairsolutions.com",
  shopUrl: "https://orientalhairsolutions.com/shop",
  phone: "+65 6100 0000",
  whatsapp: "+6581234567",
  email: "hello@orientalhairsolutions.com",
  trialPrice: "$19.90",
  socials: {
    instagram: "https://instagram.com/orientalhairsolutions",
    facebook: "https://facebook.com/orientalhairsolutions",
    tiktok: "https://tiktok.com/@orientalhairsolutions",
  },
} as const;

export const primaryNav = [
  { label: "About", href: "/about-us" },
  {
    label: "Treatments",
    href: "/hair-loss-treatments",
    children: [
      { label: "Hair Loss Treatments", href: "/hair-loss-treatments", blurb: "Targeted therapy for thinning and shedding." },
      { label: "Hair Growth Therapy", href: "/hair-growth-therapy", blurb: "Activate dormant follicles and restore density." },
      { label: "Platinum Hair Care", href: "/platinum-hair-care", blurb: "Our premium maintenance programme." },
      { label: "Phytoformulary", href: "/phytoformulary", blurb: "Single-origin herbal formulas from our apothecary." },
      { label: "Causes of Hair Loss", href: "/causes-of-hair-loss", blurb: "Understand the root of your concern." },
    ],
  },
  { label: "Trial Promo", href: "/hair-treatment-promotion" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Outlets", href: "/outlets" },
  { label: "Blog", href: "/blog" },
  { label: "Shop", href: "https://orientalhairsolutions.com/shop", external: true },
] as const;

export const secondaryNav = [
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
  { label: "Privacy", href: "/privacy-policy" },
] as const;
