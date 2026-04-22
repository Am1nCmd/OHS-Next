import { Reveal } from "@/components/motion/Reveal";

export function ProblemStatement() {
  return (
    <section className="section">
      <div className="container-page text-center max-w-3xl mx-auto">
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
    </section>
  );
}
