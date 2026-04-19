import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/content";
import { siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();

  const posts = getBlogPosts().map((p) => ({
    url: `${origin}/blog/${p.slug}`,
    lastModified: new Date(p.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: `${origin}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${origin}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts,
  ];
}
