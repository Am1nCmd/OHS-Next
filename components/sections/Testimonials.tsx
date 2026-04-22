"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/lib/testimonials";
import { AnimatePresence, motion } from "framer-motion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Real customers</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Don't just hear it from us.{" "}
              <span className="text-muted">Hear it from them.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 relative rounded-[2rem] bg-primary-50 border border-primary/10 p-8 md:p-14 overflow-hidden">
            <Quote
              className="absolute top-6 right-6 md:top-10 md:right-10 size-14 md:size-20 text-primary/10"
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-ink max-w-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary text-bg flex items-center justify-center font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{t.name}</div>
                    <div className="text-sm text-muted">
                      {t.concern} · {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`size-2 rounded-full transition-all cursor-pointer ${
                      i === index ? "bg-primary w-6" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="inline-flex items-center justify-center size-10 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-bg transition-colors cursor-pointer"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="inline-flex items-center justify-center size-10 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-bg transition-colors cursor-pointer"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
