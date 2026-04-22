import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Hair Care Tips",
  description:
    "Field notes from our trichologists — evidence-based writing on scalp health, hair growth, and the science of herbal care.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Hair care tips"
        title="Field notes from our trichologists."
        intro="Evidence-based writing on scalp health, hair growth, and the quieter science of getting your hair back."
      />

      {featured && (
        <section className="section">
          <div className="container-page">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid gap-8 lg:grid-cols-12 items-center"
              >
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] rounded-[1.75rem] overflow-hidden bg-primary-50">
                    {featured.cover && (
                      <Image
                        src={featured.cover}
                        alt={featured.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    )}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="text-xs uppercase tracking-widest text-accent">
                    Featured
                  </div>
                  <h2 className="mt-3 text-3xl md:text-4xl leading-tight group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">
                    {featured.description}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted">
                    <span>{formatDate(featured.date)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" /> {featured.readingTime}
                    </span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium">
                    Read the article <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="section pt-0">
          <div className="container-page">
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <StaggerItem key={p.slug}>
                  <PostCard post={p} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section className="section">
          <div className="container-page text-center text-muted">
            Posts are on the way — check back soon.
          </div>
        </section>
      )}
    </>
  );
}

function PostCard({ post }: { post: ReturnType<typeof getAllPosts>[number] }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full rounded-2xl border border-border bg-surface overflow-hidden hover:-translate-y-0.5 hover:shadow-soft transition-all"
    >
      {post.cover && (
        <div className="relative aspect-[16/10] bg-primary-50 overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-xs text-muted flex items-center gap-3">
          <span>{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" /> {post.readingTime}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-display leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">
          {post.description}
        </p>
      </div>
    </Link>
  );
}

function formatDate(d: string) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-SG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return d;
  }
}
