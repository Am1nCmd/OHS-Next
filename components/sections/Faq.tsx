"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export type FaqItem = { q: string; a: string };

export function Faq({ items, eyebrow, title }: { items: FaqItem[]; eyebrow?: string; title?: string }) {
  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl md:text-4xl">
              {title ?? "Frequently asked questions"}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted leading-relaxed">
              Can't find what you're looking for? Our team is happy to help — just reach out on WhatsApp or at any outlet.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <Accordion.Root type="single" collapsible className="border-t border-border">
              {items.map((item, i) => (
                <Accordion.Item
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-border"
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className={cn(
                        "group flex w-full items-center justify-between gap-4 py-5 md:py-6 text-left",
                        "font-display text-lg md:text-xl text-ink cursor-pointer",
                        "hover:text-primary transition-colors"
                      )}
                    >
                      <span>{item.q}</span>
                      <ChevronDown className="size-5 shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="pb-5 md:pb-6 pr-8 text-muted leading-relaxed">
                      {item.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
