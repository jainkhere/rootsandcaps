/** Canonical site origin, including an optional deployment base path. */
export function siteOrigin(): string {
  const site = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
    /\/$/,
    ""
  );
  const basePath = process.env.BASE_PATH || "";
  return `${site}${basePath}`;
}
