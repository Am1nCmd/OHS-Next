import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const steps = [
  {
    n: "01",
    gif: "/images/treatments/01-scalp-assessment.gif",
    title: "Consultation & Scalp Diagnosis",
    body: "Identify scalp condition and root cause with a high-magnification trichoscope scan.",
  },
  {
    n: "02",
    gif: "/images/treatments/02-plasma-therapy.gif",
    title: "High-Frequency Therapy",
    body: "Boost micro-circulation and prepare the scalp for deeper ingredient absorption.",
  },
  {
    n: "03",
    gif: "/images/treatments/03-cleansing-wash.gif",
    title: "Deep Scalp Cleansing",
    body: "Detoxify the scalp, remove buildup, and nourish dormant follicles.",
  },
  {
    n: "04",
    gif: "/images/treatments/04-formula-application.gif",
    title: "100% Natural Formula Application",
    body: "Custom TCM-based herbal blend applied directly to stimulate regrowth and strengthen roots.",
  },
  {
    n: "05",
    gif: "/images/treatments/05-steam-infusion.gif",
    title: "Herbal Essence Steam Infusion",
    body: "Deep heat opens follicles and drives the herbal essence to the root to reactivate dormant growth.",
  },
];

export function TreatmentSteps() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Your customised treatment</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Each treatment begins with a professional scalp scan, followed by a TCM-based herbal infusion that restores scalp health and reactivates dormant follicles.
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <article className="group h-full bg-surface rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-soft transition-all duration-200">
                {/* GIF — use img to preserve animation */}
                <div className="relative aspect-[3/4] bg-primary-50 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.gif}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display text-3xl text-accent/70 leading-none">
                    {s.n}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-ink leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
