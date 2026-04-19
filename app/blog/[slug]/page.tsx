import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getBlogPost, getBlogSlugs } from "@/lib/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/blog"
          className="text-sm font-medium text-blue-800 hover:underline"
        >
          ← Back to blog
        </Link>
        <p className="mt-6 text-sm text-slate-500">{post.frontmatter.date}</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {post.frontmatter.title}
        </h1>
        <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-blue-800">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
