import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function ProblemStatement() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="eyebrow">The mirror moment</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl md:text-5xl leading-tight">
              You notice hair everywhere{" "}
              <span className="text-muted">—</span>{" "}
              <em className="not-italic text-primary">except on your head.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Thinning happens quietly, then all at once. Pillowcases, shower drains, brushes — the signals stack up long before the mirror tells the full story. The good news: most scalp concerns respond well when caught early and treated at the root.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 relative w-full rounded-[1.75rem] overflow-hidden shadow-soft">
            <Image
              src="/images/sections/hair-loss-banner.webp"
              alt="The many signs of hair loss — Oriental Hair Solutions"
              width={1536}
              height={504}
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
