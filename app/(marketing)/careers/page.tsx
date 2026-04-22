import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a trichologist-led team committed to measured results and honest care. Current openings across our four Singapore outlets.",
};

const roles = [
  {
    title: "Senior Trichologist",
    type: "Full-time",
    location: "Novena / Orchard",
    body:
      "Lead complex cases and mentor junior practitioners. Diploma in Trichology or equivalent required.",
  },
  {
    title: "Scalp Therapist",
    type: "Full-time",
    location: "Tampines / Jurong East",
    body:
      "Deliver our herbal protocols under trichologist supervision. Full training provided — hair & beauty background welcome.",
  },
  {
    title: "Client Experience Associate",
    type: "Full-time",
    location: "Rotating across outlets",
    body:
      "Own the front of house — bookings, onboarding, the moment a new client walks in. Warmth and organisation in equal measure.",
  },
  {
    title: "Marketing Manager",
    type: "Full-time",
    location: "Novena HQ",
    body:
      "Build our content engine and grow the brand across SG. Experience in beauty, wellness, or healthcare preferred.",
  },
];

const values = [
  "Honest work beats loud claims.",
  "Evidence is the quiet kind of confidence.",
  "Care compounds — so do careers.",
  "Senior, with room to grow.",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Good people. Real results. Long careers."
        intro="We've been in trichology for twenty years because the team has. If you care about measured outcomes and honest conversations, we'd love to meet you."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Why here</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl md:text-4xl">
                What our team says about working here.
              </h2>
            </Reveal>
            <Stagger className="mt-8 space-y-4">
              {values.map((v) => (
                <StaggerItem key={v}>
                  <div className="border-l-2 border-accent/60 pl-5 py-1 text-ink/90">
                    {v}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Open roles</span>
            </Reveal>
            <Stagger className="mt-5 grid gap-4">
              {roles.map((r) => (
                <StaggerItem key={r.title}>
                  <article className="group rounded-2xl border border-border bg-surface p-6 md:p-7 hover:-translate-y-0.5 hover:shadow-soft transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-display">
                          {r.title}
                        </h3>
                        <div className="mt-1.5 text-xs text-muted flex items-center gap-3">
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase className="size-3.5" />
                            {r.type}
                          </span>
                          <span>{r.location}</span>
                        </div>
                      </div>
                      <ArrowRight className="size-5 text-muted group-hover:text-primary transition-colors" />
                    </div>
                    <p className="mt-4 text-muted text-sm leading-relaxed">
                      {r.body}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/contact-us">
                  Send us your CV <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
