import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-edge">
      <div className="container-page pt-14 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28 max-w-3xl">
        {eyebrow && (
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted leading-relaxed">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
