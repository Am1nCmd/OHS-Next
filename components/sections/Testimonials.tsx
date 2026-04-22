"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { testimonials } from "@/lib/testimonials";
import { AnimatePresence, motion } from "framer-motion";

const videos = [
  {
    id: "BV9Hw6owEcw",
    title: "Healthy Hair Growth",
    customer: "Yin Jean",
    points: [
      "Deep Scalp Cleanse",
      "Hair Growth Collagen Stimulated",
      "Elastin and Hair Follicles Promoted",
      "Rebalance Sebum Production",
      "Baby Hair Started Growing",
    ],
  },
  {
    id: "8OFLTnvphRo",
    title: "Nutritious Scalp Cleanse",
    customer: "Mei Chi",
    points: [
      "Customized, targeted solutions",
      "Use of 100% natural herbs",
      "Visible reduction in hair loss",
      "Healthier, cleaner scalp condition",
      "Regrowth of baby hairs",
    ],
  },
  {
    id: "rtE8u0PwK2I",
    title: "Reinforcing Fragile Strands",
    customer: "Crystal",
    points: [
      "Clear diagnosis and professional guidance",
      "Effective relief for sensitive and irritated scalp",
      "Noticeable reduction in hair fall",
      "Visible improvement in hair thickness and colour",
      "Results recognised by others",
    ],
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Real customers</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Don&apos;t just hear it from us.{" "}
              <span className="text-muted">Hear it from our customers.</span>
            </h2>
          </Reveal>
        </div>

        {/* 3 YouTube video testimonials */}
        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((v) => (
            <StaggerItem key={v.id}>
              <div className="flex flex-col gap-4 h-full">
                {/* Video embed */}
                <div className="rounded-2xl overflow-hidden aspect-video shadow-soft">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                    title={`${v.title} — ${v.customer}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                {/* Card */}
                <div className="flex-1 rounded-2xl border border-border bg-surface p-5">
                  <div className="font-display text-lg leading-snug">{v.title}</div>
                  <div className="text-sm text-primary font-medium mt-0.5">{v.customer}</div>
                  <ul className="mt-3 space-y-1.5">
                    {v.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-muted">
                        <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Written testimonials carousel */}
        <Reveal delay={0.1}>
          <div className="mt-10 relative rounded-[2rem] bg-primary-50 border border-primary/10 p-8 md:p-14 overflow-hidden">
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
