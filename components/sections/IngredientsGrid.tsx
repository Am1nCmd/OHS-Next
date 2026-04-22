import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const ingredients = [
  { name: "Ginseng", latin: "Panax ginseng", image: "/images/ingredients/ginseng.webp", note: "Follicular vitality." },
  { name: "Angelica", latin: "Angelica sinensis", image: "/images/ingredients/angelica.webp", note: "Microcirculation." },
  { name: "Mulberry", latin: "Morus alba", image: "/images/ingredients/mulberry.webp", note: "Antioxidant shield." },
  { name: "He Shou Wu", latin: "Polygonum multiflorum", image: "/images/ingredients/polygonum.webp", note: "Melanin support." },
  { name: "Ligustrum", latin: "Ligustrum lucidum", image: "/images/ingredients/ligustrum.webp", note: "Tonic for dry scalp." },
  { name: "Ginger", latin: "Zingiber officinale", image: "/images/ingredients/ginger.webp", note: "Warming stimulant." },
  { name: "Dandelion", latin: "Taraxacum officinale", image: "/images/ingredients/dandelion.webp", note: "Gentle detoxifier." },
  { name: "Danshen", latin: "Salvia miltiorrhiza", image: "/images/ingredients/salvia.webp", note: "Scalp calming." },
];

export function IngredientsGrid() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">From our apothecary</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Eight botanicals we reach for most.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted leading-relaxed">
              Every ingredient we use is single-origin, traceable, and tested for potency. These eight anchor most of our formulas — for good reason.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ingredients.map((i) => (
            <StaggerItem key={i.name}>
              <article className="group h-full rounded-2xl overflow-hidden border border-border bg-surface hover:-translate-y-0.5 hover:shadow-soft transition-all">
                <div className="relative aspect-square bg-primary-50 overflow-hidden">
                  <Image
                    src={i.image}
                    alt={i.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <div className="font-display text-lg">{i.name}</div>
                  <div className="text-xs text-muted italic mt-0.5">
                    {i.latin}
                  </div>
                  <div className="mt-2 text-sm text-ink/80">{i.note}</div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
