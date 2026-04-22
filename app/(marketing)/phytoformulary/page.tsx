import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { IngredientsGrid } from "@/components/sections/IngredientsGrid";
import { servicesBySlug } from "@/lib/services";

const service = servicesBySlug["phytoformulary"];

export const metadata: Metadata = {
  title: service.name,
  description: service.intro,
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.intro}
      />

      {service.image && (
        <section className="pb-8 md:pb-12">
          <div className="container-page">
            <Reveal>
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[1.75rem] overflow-hidden bg-primary-50 shadow-soft">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <IngredientsGrid />

      <section className="section bg-primary-50/60">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Why this matters</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl md:text-4xl">
                What single-origin actually gets you.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid md:grid-cols-3 gap-6">
            {service.solutions.map((s) => (
              <StaggerItem key={s.title}>
                <article className="h-full rounded-2xl bg-surface border border-border p-7">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {s.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">From bench to bottle</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Our small-batch process.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <article className="h-full rounded-2xl bg-surface border border-border p-6">
                  <div className="font-display text-4xl text-accent/80 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {s.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-wrap gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2">
                  {service.problems.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-border bg-bg text-ink/80"
                    >
                      <Check className="size-3.5 text-primary" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="/contact-us">
                  Ask about a custom blend <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
