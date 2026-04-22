"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

const cases = [
  {
    before: "/images/results/case1-before.jpg",
    after: "/images/results/case1-after.jpg",
    concern: "Diffuse thinning",
    timeline: "16 weeks",
    detail: "Significant regrowth visible at crown and parting line.",
  },
  {
    before: "/images/results/case2-before.jpg",
    after: "/images/results/case2-after.jpg",
    concern: "Pattern baldness",
    timeline: "24 weeks",
    detail: "Hairline restoration with measurable density increase.",
  },
  {
    before: "/images/results/case3-before.jpg",
    after: "/images/results/case3-after.jpg",
    concern: "Postpartum shedding",
    timeline: "12 weeks",
    detail: "Reduced shedding and uniform regrowth along temporal area.",
  },
];

export function ResultsGallery() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number) => {
      const clamped = (next + cases.length) % cases.length;
      setDirection(next > active ? 1 : -1);
      setActive(clamped);
    },
    [active]
  );

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => go(active + 1), 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, go]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0 }),
  };

  return (
    <section className="section overflow-hidden">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Real results</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Measured in months, not marketing.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted leading-relaxed">
                Every client&apos;s scalp is scoped at baseline and every four
                weeks after. Images below are representative of typical outcomes.
              </p>
            </Reveal>
          </div>

          {/* Arrows */}
          <Reveal delay={0.1}>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous result"
                className="size-11 rounded-full border border-border bg-surface flex items-center justify-center text-ink hover:bg-primary hover:text-bg hover:border-primary transition-colors"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Next result"
                className="size-11 rounded-full border border-border bg-surface flex items-center justify-center text-ink hover:bg-primary hover:text-bg hover:border-primary transition-colors"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Slider */}
        <div
          className="mt-10 relative overflow-hidden rounded-[1.75rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(active + 1);
                else if (info.offset.x > 60) go(active - 1);
              }}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              <div className="grid md:grid-cols-2 gap-0.5 rounded-[1.75rem] overflow-hidden bg-border">
                {/* Before */}
                <div className="relative aspect-[4/3] bg-primary-50 select-none">
                  <Image
                    src={cases[active].before}
                    alt={`${cases[active].concern} — before`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    draggable={false}
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/60 to-transparent">
                    <span className="text-xs uppercase tracking-widest text-bg/90 font-medium">
                      Before
                    </span>
                  </div>
                </div>
                {/* After */}
                <div className="relative aspect-[4/3] bg-primary-50 select-none">
                  <Image
                    src={cases[active].after}
                    alt={`${cases[active].concern} — after`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    draggable={false}
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-primary/70 to-transparent">
                    <span className="text-xs uppercase tracking-widest text-bg/90 font-medium">
                      After
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Info bar */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="font-semibold text-ink">
                {cases[active].concern}
              </div>
              <div className="text-sm text-muted mt-0.5">
                {cases[active].detail} · Visible at{" "}
                <span className="text-primary font-medium">
                  {cases[active].timeline}
                </span>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5 shrink-0">
              {cases.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to result ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-border hover:bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
