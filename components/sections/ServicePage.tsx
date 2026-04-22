import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { CtaStrip } from "@/components/sections/CtaStrip";
import type { Service } from "@/lib/services";

export function ServicePage({ service }: { service: Service }) {
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

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Who it's for</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Signs this programme fits you
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Stagger className="grid gap-3">
              {service.problems.map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-start gap-3 rounded-2xl bg-surface border border-border px-5 py-4">
                    <div className="size-6 rounded-full bg-primary-50 text-primary flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="size-3.5" />
                    </div>
                    <span className="text-ink">{p}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section bg-primary-50/60">
        <div className="container-page">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">What's included</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Every element earns its place.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
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
              <span className="eyebrow">How a session runs</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl md:text-4xl">A clear path, every time.</h2>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
            <div className="mt-14 flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link href="/hair-treatment-promotion">
                  Start with the trial <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact-us">Ask a question</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
