import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const steps = [
  {
    n: "01",
    title: "Consult",
    body:
      "A 15-minute trichoscope reading with a certified trichologist. No rush, no upsell.",
  },
  {
    n: "02",
    title: "Diagnose",
    body:
      "We map your concern to one of eight scalp conditions and explain what's driving it.",
  },
  {
    n: "03",
    title: "Treat",
    body:
      "A personalised in-outlet session using herbal decoctions and targeted technology.",
  },
  {
    n: "04",
    title: "Sustain",
    body:
      "Home care and monthly reviews — with side-by-side scope images that prove progress.",
  },
];

export function TreatmentSteps() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">How your programme runs</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Your customised treatment, start to measurable finish.
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <article className="relative h-full bg-surface rounded-2xl border border-border p-6 md:p-7">
                <div className="font-display text-5xl text-accent/80 leading-none">
                  {s.n}
                </div>
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {s.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
