import { BlogComingSoon } from "@/components/BlogComingSoon";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Coming Soon",
  description: "Dental care articles and clinic updates are coming soon.",
};

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader />
      <BlogComingSoon />
      <SiteFooter />
    </>
  );
}
