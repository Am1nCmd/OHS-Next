import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const problems = [
  { title: "Excessive shedding",    body: "Losing more than a handful a day.",          image: "/images/conditions/hair-loss.webp" },
  { title: "Visible thinning",      body: "A parting that keeps widening.",              image: "/images/conditions/hair-thinning.webp" },
  { title: "Female pattern loss",   body: "Diffuse thinning at the crown.",              image: "/images/conditions/female-pattern-baldness.webp" },
  { title: "Male pattern baldness", body: "Temples and crown receding over time.",       image: "/images/conditions/male-pattern-baldness.webp" },
  { title: "Premature greying",     body: "Pigment loss appearing earlier than expected.", image: "/images/conditions/grey-hair.webp" },
  { title: "Dandruff & flakes",     body: "Itchiness that no shampoo solves.",           image: "/images/conditions/dandruff.webp" },
  { title: "Dry & tight scalp",     body: "Flaking, tightness, sensitivity.",            image: "/images/conditions/dry-scalp.webp" },
  { title: "Oily scalp",           body: "Greasy by afternoon, flat by evening.",       image: "/images/conditions/oily-scalp.webp" },
];

export function ProblemsGrid() {
  return (
    <section className="section bg-primary-50/60">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Customised solutions</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Eight patterns of scalp trouble. One diagnostic approach.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted leading-relaxed">
              Every first visit begins the same way: a high-magnification trichoscope reading, a written diagnosis, and a protocol tailored to what we actually see.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group h-full bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-square overflow-hidden bg-primary-50">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <div className="font-semibold text-ink text-sm md:text-base">{p.title}</div>
                  <div className="mt-1 text-xs md:text-sm text-muted leading-snug">
                    {p.body}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
