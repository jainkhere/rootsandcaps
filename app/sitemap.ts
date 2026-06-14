import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();

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
  ];
}
