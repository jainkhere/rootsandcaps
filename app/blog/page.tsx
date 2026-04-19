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
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Our blog</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Markdown posts in <code className="text-sm">content/blog</code>, editable via Pages CMS.
        </p>
        <ul className="mt-10 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/40 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-sky-500 dark:hover:bg-slate-900"
              >
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {post.frontmatter.date}
                </span>
                <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {post.frontmatter.title}
                </h2>
                {post.frontmatter.description ? (
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
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
