import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllSlugs } from "@/lib/blog";

const staticRoutes = [
  "",
  "/about-us",
  "/hair-loss-treatments",
  "/hair-growth-therapy",
  "/platinum-hair-care",
  "/phytoformulary",
  "/causes-of-hair-loss",
  "/testimonials",
  "/outlets",
  "/contact-us",
  "/hair-treatment-promotion",
  "/careers",
  "/privacy-policy",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = staticRoutes.map((p) => ({
    url: `${siteConfig.url}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
  for (const slug of getAllSlugs()) {
    entries.push({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  return entries;
}
