import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { primaryNav, secondaryNav, siteConfig } from "@/lib/site";
import { outlets } from "@/lib/outlets";

const IgIcon = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={p.className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const FbIcon = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden>
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.6-1.5h1.4V4.4c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H8.4v3h2.5V21h2.6z" />
  </svg>
);
const TkIcon = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={p.className} aria-hidden>
    <path d="M14 4h2.7c.2 1.9 1.4 3.3 3.3 3.5v2.7c-1.3 0-2.5-.4-3.6-1v5.9a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.8a2.5 2.5 0 1 0 1.7 2.4V4z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-bg/90">
      <div className="container-page py-16 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="relative h-10 w-48">
            <Image
              src="/images/logo-ohs-white.png"
              alt="Oriental Hair Solutions"
              fill
              sizes="192px"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-3 text-sm text-bg/70 max-w-xs leading-relaxed">
            Trichologist-led herbal hair care. Rooted in traditional wisdom,
            refined with modern science.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={siteConfig.socials.instagram} icon={IgIcon} label="Instagram" />
            <SocialLink href={siteConfig.socials.facebook} icon={FbIcon} label="Facebook" />
            <SocialLink href={siteConfig.socials.tiktok} icon={TkIcon} label="TikTok" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-accent/80 mb-4">
            Navigate
          </div>
          <ul className="space-y-2.5 text-sm">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-bg/80 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {secondaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-bg/80 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-widest text-accent/80 mb-4">
            Outlets
          </div>
          <ul className="grid grid-cols-2 gap-4 text-sm">
            {outlets.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/outlets#${o.slug}`}
                  className="block group"
                >
                  <div className="font-semibold text-bg group-hover:text-accent transition-colors">
                    {o.name}
                  </div>
                  <div className="text-bg/60 text-xs mt-0.5 leading-snug">
                    {o.nearest}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 text-sm text-bg/70">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              <Phone className="size-4" /> {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 hover:text-accent"
            >
              <Mail className="size-4" /> {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-bg/10">
        <div className="container-page py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-bg/50">
          <div>
            © {new Date().getFullYear()} Oriental Hair Solutions. All rights
            reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/contact-us" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center size-9 rounded-full border border-bg/15 text-bg/80 hover:text-accent hover:border-accent/60 transition-colors"
    >
      <Icon className="size-4" />
    </a>
  );
}
