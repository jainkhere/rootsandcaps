/** `tel:` link for a human-entered phone string (spaces stripped). */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
