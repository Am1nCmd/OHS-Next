import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real stories from real clients across our Singapore outlets. Measured progress, honest timelines.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Real customers, real results"
        title="Hear it from the people who live with their hair."
        intro="We've put a few of our favourite stories below. Ask at your next visit — we can almost always introduce you to a client with a similar concern to yours."
      />
      <section className="section">
        <div className="container-page">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <article className="h-full rounded-2xl border border-border bg-surface p-7 md:p-8">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 font-display text-xl md:text-2xl leading-snug text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                    <div className="size-10 rounded-full bg-primary text-bg flex items-center justify-center font-semibold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-ink">{t.name}</div>
                      <div className="text-sm text-muted">
                        {t.concern} · {t.location}
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-primary-50/60">
        <div className="container-page">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow">The numbers</span>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Consistent results across outlets.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: "4.9★", l: "Average rating" },
              { n: "3,200+", l: "Published reviews" },
              { n: "94%", l: "Saw visible regrowth" },
              { n: "89%", l: "Referred a friend" },
            ].map((s) => (
              <StaggerItem key={s.l}>
                <div>
                  <div className="font-display text-4xl md:text-5xl text-primary">
                    {s.n}
                  </div>
                  <div className="mt-2 text-sm text-muted">{s.l}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
