import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export function PromoBanner() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary text-bg p-10 md:p-16 lg:p-20">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <svg
                className="absolute -top-20 -right-20 size-[420px] text-accent/40"
                viewBox="0 0 200 200"
                fill="none"
                aria-hidden
              >
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="relative grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <span className="eyebrow !text-accent">Signature trial</span>
                <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl text-bg leading-[1.05]">
                  Herbal hair loss treatment.{" "}
                  <span className="text-accent">Only {siteConfig.trialPrice}.</span>
                </h2>
                <p className="mt-5 text-bg/80 max-w-lg leading-relaxed">
                  One session, one trichologist, one written plan. No packages, no pressure — just the same honest diagnosis every long-term client starts with.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Button asChild variant="accent" size="xl">
                  <Link href="/hair-treatment-promotion">
                    Claim the trial
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
