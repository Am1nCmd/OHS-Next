import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export function CtaStrip() {
  const wa = siteConfig.whatsapp.replace(/\D/g, "");
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-10 md:p-16 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="eyebrow">Ready when you are</span>
              <h2 className="mt-3 text-3xl md:text-4xl leading-tight">
                Start with the {siteConfig.trialPrice} diagnostic.
                <br />
                Decide after you've seen the results.
              </h2>
              <p className="mt-4 text-muted max-w-md leading-relaxed">
                No packages, no lock-in. One honest session and a written plan is all we ask for.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
              <Button asChild size="xl">
                <Link href="/hair-treatment-promotion">
                  Book trial <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a
                  href={`https://wa.me/${wa}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
