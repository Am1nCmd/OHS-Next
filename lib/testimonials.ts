export type Testimonial = {
  name: string;
  location: string;
  concern: string;
  quote: string;
  rating: 5;
};

export const testimonials: Testimonial[] = [
  {
    name: "Serena L.",
    location: "Novena outlet",
    concern: "Postpartum shedding",
    quote:
      "After six weeks my parting looked fuller than it had in two years. The team never over-promised — they just kept delivering.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    location: "Tampines outlet",
    concern: "Receding hairline",
    quote:
      "I was sceptical about herbal treatments. The scope imagery every month convinced me. Real density, not wishful thinking.",
    rating: 5,
  },
  {
    name: "Priya R.",
    location: "Jurong East outlet",
    concern: "Oily, flaky scalp",
    quote:
      "My scalp felt calmer after the first session. By week four I'd stopped reaching for my anti-dandruff shampoo entirely.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    location: "Orchard outlet",
    concern: "Stress-induced thinning",
    quote:
      "Honest consult, no upselling. They explained exactly what was realistic for my timeline and then outperformed it.",
    rating: 5,
  },
  {
    name: "Aisha M.",
    location: "Novena outlet",
    concern: "Seborrheic scalp",
    quote:
      "The herbal decoctions are genuinely soothing. I look forward to every appointment — it's the rare treatment that feels good and works.",
    rating: 5,
  },
  {
    name: "Wei Jie C.",
    location: "Tampines outlet",
    concern: "Crown thinning",
    quote:
      "Six months in, my crown is visibly denser. Friends noticed before I did. That's the best kind of proof.",
    rating: 5,
  },
];
