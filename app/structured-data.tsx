import { getClinic, getHome } from "@/lib/content";
import { callPhoneNumber } from "@/lib/phone";
import { siteOrigin } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const c = getClinic();
  const home = getHome();
  const phone = callPhoneNumber(home, c);
  const base = siteOrigin();
  const url = `${base.endsWith("/") ? base : `${base}/`}`;

  const json = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: c.siteName,
    description: c.tagline,
    url,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address.replace(/\n/g, ", "),
    },
    sameAs: [c.facebookUrl, c.instagramUrl].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
