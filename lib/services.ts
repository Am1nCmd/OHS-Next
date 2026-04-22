export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image?: string;
  problems: string[];
  solutions: { title: string; body: string }[];
  steps: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "hair-loss-treatments",
    name: "Hair Loss Treatments",
    eyebrow: "Signature Programme",
    headline: "Slow the shed. Strengthen every strand.",
    intro:
      "A trichologist-led protocol combining herbal cleansing, targeted scalp therapies, and follicle nutrition. Designed to calm excessive shedding and rebuild a healthier growth cycle over three to six months.",
    image: "/images/hero/hair-loss-treatments.webp",
    problems: [
      "Shedding more than 100 hairs a day",
      "Widening parting or visible scalp",
      "Receding hairline or temple thinning",
      "Oily, itchy, or flaky scalp",
    ],
    solutions: [
      {
        title: "Herbal scalp reset",
        body: "Warm decoctions lift excess sebum, flakes, and product build-up without stripping the acid mantle.",
      },
      {
        title: "Low-level light therapy",
        body: "Clinically-studied wavelengths that stimulate cellular activity in the follicle matrix.",
      },
      {
        title: "Custom tonic protocol",
        body: "A take-home routine matched to your scalp biome and shedding pattern for compounding results between visits.",
      },
    ],
    steps: [
      { title: "Consult", body: "15-minute trichoscope reading with a certified trichologist." },
      { title: "Diagnose", body: "We map your concern to one of eight scalp conditions and build your plan." },
      { title: "Treat", body: "In-outlet session, usually 60–90 minutes." },
      { title: "Sustain", body: "Home care and check-ins that keep the gains compounding." },
    ],
  },
  {
    slug: "hair-growth-therapy",
    name: "Hair Growth Therapy",
    eyebrow: "Regrowth Protocol",
    headline: "Wake dormant follicles. Rebuild density.",
    intro:
      "For scalps that have stabilised but want visible regrowth. We pair advanced energy-based stimulation with nutrient-dense botanicals to encourage follicles back into the anagen phase.",
    image: "/images/hero/hair-growth-therapy.jpg",
    problems: [
      "Thinning crown or vertex",
      "Fine, weak hair that won't grow past a length",
      "Postpartum or post-stress shedding",
      "Plateaued results from other treatments",
    ],
    solutions: [
      { title: "Follicle stimulation", body: "Targeted low-level therapy plus manual scalp release to improve microcirculation." },
      { title: "Nutrient infusion", body: "Peptide and botanical serums pressed into cleansed follicles for deeper absorption." },
      { title: "Strengthening masque", body: "A post-treatment wrap that seals hydration and reinforces the cuticle." },
    ],
    steps: [
      { title: "Baseline", body: "High-magnification imaging so we can measure progress objectively." },
      { title: "Stimulate", body: "Multi-modal therapy, 45–75 minutes per session." },
      { title: "Nourish", body: "Custom serum tailored to your deficit pattern." },
      { title: "Review", body: "Monthly progress check with side-by-side scope imagery." },
    ],
  },
  {
    slug: "platinum-hair-care",
    name: "Platinum Hair Care",
    eyebrow: "Premium Maintenance",
    headline: "Your long-term hair health, fully managed.",
    intro:
      "An unlimited-session programme for clients who want to keep their scalp and hair in peak condition year-round. Priority booking, dedicated trichologist, premium formulations.",
    image: "/images/hero/platinum-hair-care.webp",
    problems: [
      "You've restored your hair and want to protect the results",
      "You travel and want flexible, guaranteed slots",
      "You want a single trusted relationship for your scalp health",
    ],
    solutions: [
      { title: "Unlimited treatments", body: "Book as often as your scalp needs, with no per-visit cost anxiety." },
      { title: "Dedicated trichologist", body: "The same senior practitioner every visit — continuity that compounds results." },
      { title: "Premium phytoformulary", body: "Access to our most concentrated single-origin botanicals." },
    ],
    steps: [
      { title: "Onboarding", body: "A deep-dive scalp and lifestyle consult to set your yearly plan." },
      { title: "Monthly reviews", body: "We adjust the protocol as seasons and life change your hair." },
      { title: "Priority access", body: "Same-week booking across every outlet." },
    ],
  },
  {
    slug: "phytoformulary",
    name: "Phytoformulary",
    eyebrow: "Our Apothecary",
    headline: "Single-origin botanicals, precisely blended.",
    intro:
      "Every formula we use begins here. Sourced from verified growers, triple-tested for purity, and blended in small batches by our in-house formulators.",
    image: "/images/hero/phytoformulary.webp",
    problems: [
      "Off-the-shelf products that aggravate sensitivity",
      "Wanting traceability in what touches your scalp",
      "A need for routines that actually suit Singapore's climate",
    ],
    solutions: [
      { title: "Verified sourcing", body: "Every herb comes with a provenance certificate and potency report." },
      { title: "Climate-matched formulas", body: "Lightweight, non-occlusive blends designed for humid scalps." },
      { title: "Bespoke blending", body: "For Platinum members, we compound to your exact concern." },
    ],
    steps: [
      { title: "Identify", body: "A trichologist maps your concern to active constituents." },
      { title: "Blend", body: "We compound in 30-day batches for maximum freshness." },
      { title: "Deliver", body: "Collection at any outlet or islandwide delivery." },
    ],
  },
  {
    slug: "causes-of-hair-loss",
    name: "Causes of Hair Loss",
    eyebrow: "Understanding",
    headline: "Know the why, then choose the how.",
    intro:
      "Hair loss is a symptom, not a diagnosis. The right treatment depends entirely on what's driving it. Here are the patterns we see most often in our clinic.",
    image: "/images/hero/causes.webp",
    problems: [
      "Androgenetic (hereditary) thinning",
      "Telogen effluvium from stress, illness, or postpartum",
      "Seborrheic dermatitis and other scalp conditions",
      "Traction and chemical damage",
    ],
    solutions: [
      { title: "Pattern recognition", body: "We classify your hair loss using the Norwood or Ludwig scale plus trichoscope imagery." },
      { title: "Root-cause focus", body: "We treat the driver, not just the symptom — which is why our outcomes last." },
      { title: "Realistic timelines", body: "You'll leave your first visit with an honest projection of what we can achieve and when." },
    ],
    steps: [
      { title: "History", body: "Medical, lifestyle, and hair care history are all on the table." },
      { title: "Examination", body: "High-magnification scope plus pull and density testing." },
      { title: "Plan", body: "Every client leaves with a written, tailored protocol." },
    ],
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s])
) as Record<string, Service>;

export const problemCards = [
  { title: "Hair Shedding", icon: "droplets" },
  { title: "Hair Thinning", icon: "minimize-2" },
  { title: "Receding Hairline", icon: "chevron-up" },
  { title: "Oily Scalp", icon: "droplet" },
  { title: "Dandruff & Flaking", icon: "snowflake" },
  { title: "Sensitive Scalp", icon: "heart-pulse" },
  { title: "Slow Growth", icon: "leaf" },
  { title: "Postpartum Loss", icon: "baby" },
] as const;
