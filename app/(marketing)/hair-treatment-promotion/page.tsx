import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Shield, Clock, ClipboardCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/sections/Faq";
import { homeFaq } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.trialPrice} Trial`,
  description:
    "One session, one trichologist, one written plan — our signature trial for first-time clients.",
};

const included = [
  "15-minute consultation with a certified trichologist",
  "High-magnification trichoscope scalp reading",
  "One herbal cleansing and scalp therapy session",
  "Written diagnosis and custom home-care protocol",
  "No-obligation follow-up with pricing for next steps",
];

const assurances = [
  {
    icon: Shield,
    title: "No packages required",
    body: "Continue per-session or opt into a programme — only if you want to.",
  },
  {
    icon: Clock,
    title: "60–75 minutes",
    body: "Blocked out so nothing feels rushed. Bring your questions.",
  },
  {
    icon: ClipboardCheck,
    title: "Written plan you keep",
    body: "Every client leaves with a signed diagnosis and a protocol on paper.",
  },
];

export default function PromoPage() {
  return (
    <>
      <PageHero
        eyebrow="Signature trial"
        title={`Herbal hair loss treatment — ${siteConfig.trialPrice}.`}
        intro="The same diagnostic session our long-term clients start with. Whatever you decide afterwards, you leave with a clear picture of your scalp and a plan you own."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-[1.75rem] border border-border bg-surface p-8 md:p-10">
                <div className="font-display text-5xl md:text-6xl text-primary">
                  {siteConfig.trialPrice}
                </div>
                <div className="mt-2 text-muted">All-in, no add-ons at checkout.</div>
                <ul className="mt-8 space-y-3.5">
                  {included.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="size-5 rounded-full bg-primary-50 text-primary flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="size-3" />
                      </span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact-us">
                      Book my trial <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/outlets">Choose an outlet</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Stagger className="grid gap-4">
              {assurances.map((a) => (
                <StaggerItem key={a.title}>
                  <div className="rounded-2xl border border-border bg-bg p-6 flex gap-4">
                    <div className="size-11 rounded-full bg-primary-50 text-primary flex items-center justify-center shrink-0">
                      <a.icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{a.title}</div>
                      <div className="text-sm text-muted mt-1 leading-relaxed">
                        {a.body}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <Faq items={homeFaq} eyebrow="Common questions" />
    </>
  );
}
