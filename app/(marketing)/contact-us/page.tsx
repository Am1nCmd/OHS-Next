import type { Metadata } from "next";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our team — book a trial, ask a question, or drop by any of our Singapore outlets.",
};

export default function ContactPage() {
  const wa = siteConfig.whatsapp.replace(/\D/g, "");
  return (
    <>
      <PageHero
        eyebrow="We'd love to hear from you"
        title="Say hi."
        intro="Questions about your scalp? Scheduling? Wholesale or partnerships? Drop us a line — we usually reply within a working day."
      />
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-2xl bg-primary text-bg p-6 md:p-8">
                <h2 className="text-xl font-display text-bg">Fastest channels</h2>
                <p className="mt-2 text-bg/80 text-sm leading-relaxed">
                  For bookings and urgent queries, WhatsApp is quickest.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href={`https://wa.me/${wa}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-bg/10 hover:bg-bg/20 rounded-xl px-4 py-3 transition-colors"
                  >
                    <MessageCircle className="size-5" />
                    <span>WhatsApp us</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 bg-bg/10 hover:bg-bg/20 rounded-xl px-4 py-3 transition-colors"
                  >
                    <Phone className="size-5" />
                    <span>{siteConfig.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 bg-bg/10 hover:bg-bg/20 rounded-xl px-4 py-3 transition-colors"
                  >
                    <Mail className="size-5" />
                    <span>{siteConfig.email}</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                <h3 className="text-lg font-display">Media & partnerships</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Press enquiries and collaborations are best sent to{" "}
                  <a
                    href="mailto:press@orientalhairsolutions.com"
                    className="text-primary hover:underline"
                  >
                    press@orientalhairsolutions.com
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-[1.75rem] border border-border bg-surface p-6 md:p-10">
                <h2 className="text-2xl font-display">Send a message</h2>
                <p className="mt-2 text-muted text-sm">
                  We'll reply within one working day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
