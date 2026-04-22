import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-edge">
      <div className="container-page pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 xl:col-span-5">
          <Reveal>
            <span className="eyebrow">Singapore's Trichologist-Led Clinic</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
              Herbal care that <em className="not-italic text-primary">restores</em> what modern life wears down.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
              Twenty years of trichology, tens of thousands of healthier scalps. We pair traditional herbal medicine with clinical-grade diagnostics so you see measured progress, not promises.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/hair-treatment-promotion">
                  Book {siteConfig.trialPrice} Trial
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/hair-loss-treatments">See how it works</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted">
              <div className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-accent" />
                Certified trichologists
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-accent" />
                Measured monthly progress
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-accent" />
                10 Singapore outlets
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 xl:col-span-7">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lift bg-primary-50">
                <Image
                  src="/images/hero/home-hero-portrait.png"
                  alt="Client receiving herbal scalp treatment"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/5 rounded-[2rem]" />
              </div>
              <FloatingStat />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatingStat() {
  return (
    <div className="hidden md:flex absolute -left-4 bottom-8 lg:left-6 lg:bottom-16 bg-surface rounded-2xl shadow-lift border border-border p-5 gap-4 items-center max-w-xs">
      <div className="flex -space-x-2">
        {[
          "#C7D5CB",
          "#D8CBB4",
          "#E9D9BE",
          "#B6C9BD",
        ].map((c, i) => (
          <div
            key={i}
            className="size-9 rounded-full border-2 border-surface"
            style={{ background: c }}
            aria-hidden
          />
        ))}
      </div>
      <div>
        <div className="font-display text-2xl leading-none">
          12,400<span className="text-accent">+</span>
        </div>
        <div className="text-xs text-muted mt-1 leading-snug">
          scalps treated since 2008
        </div>
      </div>
    </div>
  );
}
