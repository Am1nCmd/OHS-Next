"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg md:text-xl tracking-tight"
          aria-label={siteConfig.name}
        >
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden sm:inline">Oriental Hair Solutions</span>
          <span className="sm:hidden">OHS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) =>
            "children" in item && item.children ? (
              <DropdownNav key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.label}
                href={item.href}
                external={"external" in item ? item.external : false}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            <Link href="/hair-treatment-promotion">
              Book {siteConfig.trialPrice} Trial
            </Link>
          </Button>
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-ink hover:text-primary cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-bg"
          >
            <nav className="container-page py-4 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
              <Button asChild variant="primary" className="mt-4">
                <Link href="/hair-treatment-promotion">
                  Book {siteConfig.trialPrice} Trial
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-ink/80 hover:text-primary hover:bg-primary-50 transition-colors"
    >
      {children}
      {external && <ExternalLink className="size-3.5" />}
    </Link>
  );
}

function DropdownNav({
  item,
}: {
  item: (typeof primaryNav)[number] & { children: readonly { label: string; href: string; blurb: string }[] };
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-ink/80 hover:text-primary hover:bg-primary-50 transition-colors cursor-pointer"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 pt-2 w-80"
          >
            <div className="bg-surface border border-border rounded-2xl shadow-lift p-2">
              {item.children.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block px-4 py-3 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  <div className="text-sm font-semibold text-ink">
                    {c.label}
                  </div>
                  <div className="text-xs text-muted mt-0.5 leading-snug">
                    {c.blurb}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ item }: { item: (typeof primaryNav)[number] }) {
  const [expand, setExpand] = useState(false);
  const hasChildren = "children" in item && item.children;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        target={"external" in item && item.external ? "_blank" : undefined}
        rel={"external" in item && item.external ? "noreferrer" : undefined}
        className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-ink hover:bg-primary-50"
      >
        <span>{item.label}</span>
        {"external" in item && item.external && (
          <ExternalLink className="size-4 text-muted" />
        )}
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-ink hover:bg-primary-50 cursor-pointer"
        onClick={() => setExpand((e) => !e)}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn("size-4 transition-transform", expand && "rotate-180")}
        />
      </button>
      {expand && (
        <div className="ml-3 pl-3 border-l border-border flex flex-col gap-0.5 py-1">
          {item.children!.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="px-3 py-2 rounded-lg text-sm text-ink/80 hover:bg-primary-50"
            >
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 5c-3 4-3 8 0 11s3 7 0 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 10c2 2 2 6 0 8M22 14c-2 2-2 6 0 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
