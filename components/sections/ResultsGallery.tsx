"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const cases = [
  {
    before: "/images/results/case1-before.jpg",
    after: "/images/results/case1-after.jpg",
    concern: "Diffuse thinning",
    timeline: "16 weeks",
  },
  {
    before: "/images/results/case2-before.jpg",
    after: "/images/results/case2-after.jpg",
    concern: "Pattern baldness",
    timeline: "24 weeks",
  },
  {
    before: "/images/results/case3-before.jpg",
    after: "/images/results/case3-after.jpg",
    concern: "Postpartum shedding",
    timeline: "12 weeks",
  },
];

function BeforeAfterSlider({
  before,
  after,
  concern,
}: (typeof cases)[number]) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = Math.max(2, Math.min(98, ((clientX - left) / width) * 100));
    setPos(pct);
  }, []);

  // Mouse
  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) update(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };

  // Touch
  const onTouchMove = (e: React.TouchEvent) => { update(e.touches[0].clientX); };

  return (
    <article className="rounded-2xl overflow-hidden border border-border bg-surface shadow-soft">
      {/* Comparison area */}
      <div
        ref={containerRef}
        className="relative aspect-square overflow-hidden select-none cursor-col-resize"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
      >
        {/* BEFORE — full width base layer */}
        <Image
          src={before}
          alt={`${concern} — before`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover pointer-events-none"
          draggable={false}
        />

        {/* AFTER — clipped to the right of the handle */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <Image
            src={after}
            alt={`${concern} — after`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-ink/60 text-bg px-2 py-1 rounded pointer-events-none">
          Before
        </span>
        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest bg-primary text-bg px-2 py-1 rounded pointer-events-none">
          After
        </span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-bg shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-9 rounded-full bg-bg shadow-lift border border-border flex items-center justify-center pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <GripVertical className="size-4 text-muted" />
        </div>
      </div>

      {/* Caption */}
      <div className="px-5 py-4">
        <div className="font-semibold text-ink">{concern}</div>
      </div>
    </article>
  );
}

export function ResultsGallery() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
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
              weeks after. Drag the slider to compare — images below are
              representative of typical outcomes.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <StaggerItem key={i}>
              <BeforeAfterSlider {...c} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
