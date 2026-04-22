import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export function PromoBanner() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary text-bg">
            {/* Herbal banner image — right side, blended */}
            <div className="absolute inset-y-0 right-0 w-1/2 lg:w-2/5 pointer-events-none select-none">
              <Image
                src="/images/sections/bnr-herbal-hair-loss.webp"
                alt=""
                fill
                sizes="40vw"
                className="object-cover object-center opacity-30 lg:opacity-50"
                aria-hidden
              />
              {/* Fade to left so text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            </div>

            {/* Decorative rings */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
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

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-end p-10 md:p-16 lg:p-20">
              <div className="lg:col-span-8">
                <span className="eyebrow !text-accent">Signature trial</span>
                <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl text-bg leading-[1.05]">
                  Herbal hair loss treatment.{" "}
                  <span className="text-accent">Only {siteConfig.trialPrice}.</span>
                </h2>
                <p className="mt-5 text-bg/80 max-w-lg leading-relaxed">
                  Get a full trichologist consultation, detailed scalp scan, and a customised herbal scalp treatment — all at a special first-trial price. See and feel the difference after just one session.
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
