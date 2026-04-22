import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "12,400+", label: "scalps treated" },
  { value: "10", label: "Singapore outlets" },
  { value: "20 yrs", label: "trichology practice" },
  { value: "4.9★", label: "across 3,200 reviews" },
];

const awards = [
  { src: "/images/press/superbrands-2017.png",  alt: "Superbrands Singapore 2017" },
  { src: "/images/press/superbrands-2018.png",  alt: "Superbrands Singapore 2018" },
  { src: "/images/press/superbrands-2019.webp", alt: "Superbrands Singapore 2019" },
  { src: "/images/press/swas-2023.png",         alt: "Singapore Women's Action Spa Awards 2023/24" },
  { src: "/images/press/icon-2024.png",         alt: "Icon Award 2024" },
  { src: "/images/press/daily-vanity.webp",     alt: "Daily Vanity Spa & Salon Awards" },
  { src: "/images/press/beauty-insider.webp",   alt: "Beauty Insider Awards" },
];

export function TrustStrip() {
  return (
    <section className="section bg-ink text-bg">
      <div className="container-page">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-accent/90">
              Trusted across Singapore
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl text-bg">
              Quiet track record. Loud results.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl text-accent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-bg/70">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-14 pt-10 border-t border-bg/10">
            <p className="text-center text-xs uppercase tracking-widest text-bg/40 mb-8">
              Award &amp; media recognition
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {awards.map((a) => (
                <div key={a.alt} className="relative h-10 w-24 md:h-12 md:w-28 opacity-60 hover:opacity-90 transition-opacity">
                  <Image
                    src={a.src}
                    alt={a.alt}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
