import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  BlogFrontmatter,
  ClinicContent,
  DoctorContent,
  HomeContent,
  ServiceItem,
  TestimonialItem,
} from "./types";

const contentDir = path.join(process.cwd(), "content");

function readJson<T>(relativePath: string): T {
  const full = path.join(contentDir, relativePath);
  return JSON.parse(fs.readFileSync(full, "utf8")) as T;
}

export function getHome(): HomeContent {
  return readJson<HomeContent>("home.json");
}

export function getDoctor(): DoctorContent {
  return readJson<DoctorContent>("doctor.json");
}

export function getClinic(): ClinicContent {
  return readJson<ClinicContent>("clinic.json");
}

export function getServices(): ServiceItem[] {
  const dir = path.join(contentDir, "services");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".json"))
    .map((f: string) => readJson<ServiceItem>(path.join("services", f)))
    .sort((a: ServiceItem, b: ServiceItem) => a.title.localeCompare(b.title));
}

export function getTestimonials(): TestimonialItem[] {
  const dir = path.join(contentDir, "testimonials");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".json"))
    .map((f: string) => readJson<TestimonialItem>(path.join("testimonials", f)))
    .sort((a: TestimonialItem, b: TestimonialItem) =>
      a.name.localeCompare(b.name)
    );
}

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  body: string;
};

export function getBlogSlugs(): string[] {
  const dir = path.join(contentDir, "blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".md"))
    .map((f: string) => f.replace(/\.md$/, ""));
}

export function getBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getBlogPost(slug: string): BlogPost | null {
  const full = path.join(contentDir, "blog", `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    body: content,
  };
}
