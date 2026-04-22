import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Leaf, Waves, Shield } from "lucide-react";

const pillars = [
  {
    title: "Healthy Hair Growth",
    body: "Encourage follicles back into the anagen phase with peptide-infused botanicals and targeted stimulation.",
    icon: Leaf,
  },
  {
    title: "Nutritious Scalp Cleanse",
    body: "Warm herbal decoctions lift build-up and balance the scalp microbiome without stripping natural oils.",
    icon: Waves,
  },
  {
    title: "Reinforcing Fragile Strands",
    body: "A strengthening masque seals the cuticle and rebuilds tensile strength between visits.",
    icon: Shield,
  },
];

export function ResultsPillars() {
  return (
    <section className="section bg-surface border-y border-border/60">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow">Real, visible, lasting</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Three pillars behind every protocol.
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <article className="h-full rounded-2xl bg-bg border border-border p-7 md:p-8">
                <div className="size-12 rounded-full bg-primary text-bg flex items-center justify-center">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {p.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
