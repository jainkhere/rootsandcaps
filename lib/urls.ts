/**
 * Prefix repo basePath for same-origin paths stored in content (e.g. `/media/...`
 * from Pages CMS). Absolute http(s) URLs are returned unchanged.
 */
export function resolveContentSrc(src: string): string {
  const trimmed = src.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const base = process.env.BASE_PATH || "";
  if (trimmed.startsWith("/")) {
    return `${base}${trimmed}`;
  }
  return `${base}/${trimmed}`.replace(/\/{2,}/g, "/");
}
