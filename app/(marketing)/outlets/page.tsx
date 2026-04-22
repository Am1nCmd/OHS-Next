import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { outletsByRegion } from "@/lib/outlets";
import type { Outlet } from "@/lib/outlets";

export const metadata: Metadata = {
  title: "Outlets",
  description:
    "10 outlets islandwide — Central, East, North & West Singapore. Same trichologist-led diagnostics, same herbal protocols wherever you are.",
};

export default function OutletsPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit us"
        title="10 outlets across Singapore."
        intro="Same trichologist-led diagnostics, same herbal protocols, wherever you are on the island."
      />

      <section className="section">
        <div className="container-page space-y-16">
          {outletsByRegion.map(({ region, outlets }) => (
            <div key={region}>
              <Reveal>
                <h2 className="text-xs uppercase tracking-widest text-muted mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border" />
                  {region}
                  <span className="h-px flex-1 bg-border" />
                </h2>
              </Reveal>
              <Stagger className="grid gap-6 md:grid-cols-2">
                {outlets.map((o) => (
                  <StaggerItem key={o.slug}>
                    <OutletCard o={o} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}

function OutletCard({ o }: { o: Outlet }) {
  return (
    <article
      id={o.slug}
      className="scroll-mt-24 rounded-[1.75rem] overflow-hidden bg-surface border border-border shadow-soft"
    >
      <div className="relative aspect-[16/9] bg-primary-50">
        <iframe
          title={`${o.name} outlet map`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(o.mapsQuery)}&output=embed`}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="p-7 md:p-8">
        <h3 className="text-2xl font-display">{o.name}</h3>
        <div className="mt-4 space-y-2.5 text-sm">
          <div className="flex gap-3">
            <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
            <div>
              <div>{o.address}</div>
              <div className="text-muted">{o.postal}</div>
              <div className="text-xs text-muted mt-1">{o.nearest}</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="size-4 text-primary mt-0.5 shrink-0" />
            <a
              href={`tel:${o.phone.replace(/[\s-]/g, "")}`}
              className="hover:text-primary transition-colors"
            >
              {o.phone}
            </a>
          </div>
          <div className="flex gap-3">
            <Clock className="size-4 text-primary mt-0.5 shrink-0" />
            <div className="text-muted space-y-0.5">
              {o.hours.map((h) => (
                <div key={h.days}>
                  <span className="text-ink">{h.days}</span> · {h.time}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/hair-treatment-promotion"
            className="inline-flex items-center gap-2 px-5 h-10 rounded-full bg-primary text-bg text-sm font-medium hover:bg-primary-600 transition-colors"
          >
            Book at {o.name}
          </Link>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(o.mapsQuery)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 h-10 rounded-full border border-primary/20 text-primary text-sm font-medium hover:bg-primary-50 transition-colors"
          >
            Get directions <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
