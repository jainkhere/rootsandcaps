/**
 * Prefix an optional deployment base path for same-origin content URLs.
 * Absolute http(s) URLs are returned unchanged.
 */
export function resolveContentSrc(src?: string | null): string {
  if (!src) return "";

  const trimmed = src.trim();
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const base = process.env.BASE_PATH || "";
  if (trimmed.startsWith("/")) {
    return `${base}${trimmed}`;
  }
  return `${base}/${trimmed}`.replace(/\/{2,}/g, "/");
}
