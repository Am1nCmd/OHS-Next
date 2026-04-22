import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  Droplets,
  Minimize2,
  ChevronUp,
  Droplet,
  Snowflake,
  HeartPulse,
  Leaf,
  Baby,
} from "lucide-react";

const icons = {
  droplets: Droplets,
  "minimize-2": Minimize2,
  "chevron-up": ChevronUp,
  droplet: Droplet,
  snowflake: Snowflake,
  "heart-pulse": HeartPulse,
  leaf: Leaf,
  baby: Baby,
} as const;

const problems: {
  title: string;
  body: string;
  icon: keyof typeof icons;
}[] = [
  { title: "Excessive shedding", body: "Losing more than a handful a day.", icon: "droplets" },
  { title: "Visible thinning", body: "A parting that keeps widening.", icon: "minimize-2" },
  { title: "Receding hairline", body: "Temples and forehead creeping back.", icon: "chevron-up" },
  { title: "Oily scalp", body: "Greasy by afternoon, flat by evening.", icon: "droplet" },
  { title: "Dandruff & flakes", body: "Itchiness that no shampoo solves.", icon: "snowflake" },
  { title: "Sensitive scalp", body: "Redness, tightness, reactions.", icon: "heart-pulse" },
  { title: "Stalled growth", body: "Hair that refuses to grow past a length.", icon: "leaf" },
  { title: "Postpartum loss", body: "Shedding that lingered well past month six.", icon: "baby" },
];

export function ProblemsGrid() {
  return (
    <section className="section bg-primary-50/60">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Customised solutions</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Eight patterns of scalp trouble. One diagnostic approach.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted leading-relaxed">
              Every first visit begins the same way: a high-magnification trichoscope reading, a written diagnosis, and a protocol tailored to what we actually see.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {problems.map((p) => {
            const Icon = icons[p.icon];
            return (
              <StaggerItem key={p.title}>
                <div className="group h-full bg-surface border border-border rounded-2xl p-5 md:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-soft">
                  <div className="size-10 rounded-full bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-bg transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <div className="mt-4 font-semibold text-ink">{p.title}</div>
                  <div className="mt-1 text-sm text-muted leading-snug">
                    {p.body}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
