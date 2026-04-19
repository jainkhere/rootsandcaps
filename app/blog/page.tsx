import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getBlogPosts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and updates from the clinic.",
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Our blog</h1>
        <p className="mt-2 text-slate-600">
          Markdown posts in <code className="text-sm">content/blog</code>, editable via Pages CMS.
        </p>
        <ul className="mt-10 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <span className="text-xs text-slate-500">
                  {post.frontmatter.date}
                </span>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">
                  {post.frontmatter.title}
                </h2>
                {post.frontmatter.description ? (
                  <p className="mt-2 text-sm text-slate-600">
                    {post.frontmatter.description}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
