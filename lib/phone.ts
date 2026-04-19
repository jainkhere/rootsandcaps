import type { ClinicContent, HomeContent } from "./types";

/** Prefer hero CTA phone when set; otherwise clinic listing phone (single place to edit if you only use clinic.json). */
export function callPhoneNumber(home: HomeContent, clinic: ClinicContent): string {
  return (home.hero.ctaPhone?.trim() || clinic.phone).trim();
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
