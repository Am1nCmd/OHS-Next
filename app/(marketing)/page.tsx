import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { ProblemsGrid } from "@/components/sections/ProblemsGrid";
import { TreatmentSteps } from "@/components/sections/TreatmentSteps";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { ResultsPillars } from "@/components/sections/ResultsPillars";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Faq } from "@/components/sections/Faq";
import { CtaStrip } from "@/components/sections/CtaStrip";
import { homeFaq } from "@/lib/faq";
import { siteConfig } from "@/lib/site";
import { outlets } from "@/lib/outlets";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    image: `${siteConfig.url}/images/hero/home-hero-desktop.webp`,
    priceRange: "$$",
    address: outlets.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.address,
      postalCode: o.postal.replace(/\D/g, ""),
      addressCountry: "SG",
    })),
    areaServed: "Singapore",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProblemStatement />
      <ProblemsGrid />
      <TreatmentSteps />
      <PromoBanner />
      <ResultsGallery />
      <ResultsPillars />
      <Testimonials />
      <TrustStrip />
      <Faq items={homeFaq} eyebrow="FAQ" />
      <CtaStrip />
    </>
  );
}
