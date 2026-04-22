import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Oriental Hair Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`How ${siteConfig.name} collects, uses, and protects your personal information.`}
      />
      <section className="section">
        <div className="container-page prose-measure text-ink/90 space-y-6 leading-relaxed">
          <p className="text-sm text-muted">
            Last updated: {new Date().toLocaleDateString("en-SG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h2 className="text-2xl font-display">What we collect</h2>
          <p>
            When you book a consultation or contact us, we collect your name,
            email, phone number, and any scalp or lifestyle information you
            choose to share. During a visit, our trichologists may record
            high-magnification trichoscope images of your scalp as part of your
            clinical record.
          </p>
          <h2 className="text-2xl font-display">How we use it</h2>
          <p>
            Your information is used solely to deliver and improve your care —
            scheduling, clinical record-keeping, follow-up communications, and
            with your consent, progress imagery for your own reference. We do
            not sell your data.
          </p>
          <h2 className="text-2xl font-display">Retention</h2>
          <p>
            Clinical records are held for seven years per Singapore healthcare
            guidance. Marketing preferences are retained until you opt out.
          </p>
          <h2 className="text-2xl font-display">Your rights under PDPA</h2>
          <p>
            You may request access, correction, or withdrawal of your personal
            data at any time. Email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary hover:underline"
            >
              {siteConfig.email}
            </a>{" "}
            and we'll respond within thirty days.
          </p>
          <h2 className="text-2xl font-display">Cookies</h2>
          <p>
            Our website uses essential cookies to operate and anonymous
            analytics to understand how visitors use the site. No third-party
            advertising cookies are set without your consent.
          </p>
        </div>
      </section>
    </>
  );
}
