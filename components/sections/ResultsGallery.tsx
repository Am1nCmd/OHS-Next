import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const cases = [
  {
    before: "/images/results/case1-before.jpg",
    after: "/images/results/case1-after.jpg",
    concern: "Diffuse thinning",
    timeline: "16 weeks",
  },
  {
    before: "/images/results/case2-before.jpg",
    after: "/images/results/case2-after.jpg",
    concern: "Pattern baldness",
    timeline: "24 weeks",
  },
  {
    before: "/images/results/case3-before.jpg",
    after: "/images/results/case3-after.jpg",
    concern: "Postpartum shedding",
    timeline: "12 weeks",
  },
];

export function ResultsGallery() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Real results</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Measured in months, not marketing.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted leading-relaxed">
              Every client's scalp is scoped at baseline and every four weeks after. The images below are representative of typical outcomes — yours will be documented the same way.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <StaggerItem key={i}>
              <article className="rounded-2xl overflow-hidden border border-border bg-surface">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square bg-primary-50">
                    <Image
                      src={c.before}
                      alt={`${c.concern} — before`}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-bg/85 text-ink px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square bg-primary-50">
                    <Image
                      src={c.after}
                      alt={`${c.concern} — after`}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover"
                    />
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest bg-primary text-bg px-2 py-1 rounded">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-semibold">{c.concern}</div>
                  <div className="text-sm text-muted mt-1">
                    Visible result at {c.timeline}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
