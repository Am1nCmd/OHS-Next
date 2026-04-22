import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaStrip } from "@/components/sections/CtaStrip";

export const metadata: Metadata = {
  title: "About",
  description:
    "Two decades of trichology-led hair care. Herbal roots, clinical discipline, measurable results.",
};

const values = [
  {
    title: "Root-cause first",
    body:
      "We treat the driver, not just the symptom. It's why our results last past the programme.",
  },
  {
    title: "Measure everything",
    body:
      "High-magnification scope imagery at every review. Progress you can see, not feel your way through.",
  },
  {
    title: "Honest timelines",
    body:
      "You'll leave the first visit knowing exactly what we can achieve — and what we can't.",
  },
  {
    title: "No pressure selling",
    body:
      "Per-session pricing available after every trial. Commit only when the results commit to you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Traditional wisdom, refined with clinical discipline."
        intro="We've spent twenty years proving that herbal hair care can stand up to any scalp diagnostic on the market. The result is a practice that treats roots, literally and figuratively."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-primary-50 shadow-lift">
                <Image
                  src="/images/hero/home-hero-desktop.webp"
                  alt="Inside an Oriental Hair Solutions outlet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">What guides us</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Four principles that shape every protocol.
              </h2>
            </Reveal>
            <Stagger className="mt-10 grid gap-5">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="border-l-2 border-accent/60 pl-5">
                    <h3 className="text-lg font-display">{v.title}</h3>
                    <p className="mt-1 text-muted leading-relaxed">{v.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50/60">
        <div className="container-page grid gap-10 md:grid-cols-3 text-center">
          {[
            { n: "2005", l: "First outlet opened" },
            { n: "12,400+", l: "Clients served" },
            { n: "4", l: "Outlets across Singapore" },
          ].map((s) => (
            <div key={s.n}>
              <div className="font-display text-5xl md:text-6xl text-primary">
                {s.n}
              </div>
              <div className="mt-3 text-sm text-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
