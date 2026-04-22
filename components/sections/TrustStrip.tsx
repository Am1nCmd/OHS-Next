import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "12,400+", label: "scalps treated" },
  { value: "4", label: "Singapore outlets" },
  { value: "20 yrs", label: "trichology practice" },
  { value: "4.9★", label: "across 3,200 reviews" },
];

export function TrustStrip() {
  return (
    <section className="section bg-ink text-bg">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-accent/90">
              Trusted across Singapore
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl text-bg">
              Quiet track record. Loud results.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl text-accent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-bg/70">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
