import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { ArrowLeft, Clock } from "lucide-react";
import { getAllSlugs, getPost } from "@/lib/blog";
import { CtaStrip } from "@/components/sections/CtaStrip";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-12 md:pt-20">
        <div className="container-page max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary"
          >
            <ArrowLeft className="size-4" /> All articles
          </Link>
          <div className="mt-8 text-xs uppercase tracking-widest text-accent">
            {post.tags?.[0] ?? "Article"}
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl leading-[1.1]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            {post.description}
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted">
            <span>{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" /> {post.readingTime}
            </span>
            {post.author && <span>By {post.author}</span>}
          </div>
        </div>

        {post.cover && (
          <div className="container-page max-w-5xl mt-12">
            <div className="relative aspect-[16/9] rounded-[1.75rem] overflow-hidden bg-primary-50">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="container-page max-w-3xl mt-12 md:mt-16 pb-16 md:pb-24">
          <div className="prose-ohs">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      { behavior: "wrap", properties: { className: ["heading-link"] } },
                    ],
                  ],
                },
              }}
            />
          </div>
        </div>
      </article>
      <CtaStrip />
    </>
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
