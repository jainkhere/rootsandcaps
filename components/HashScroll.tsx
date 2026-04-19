"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToHash(hash: string) {
  const target = document.getElementById(hash);
  if (!target) return;

  const header = document.getElementById("site-header");
  const headerOffset = header ? header.getBoundingClientRect().height : 0;
  const top = window.scrollY + target.getBoundingClientRect().top - headerOffset - 16;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

/** After client navigations (e.g. /blog → /#contact), scroll to the hash target smoothly. */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (!hash) return;
    const run = () => scrollToHash(hash);
    const t = window.setTimeout(() => {
      window.requestAnimationFrame(run);
    }, 50);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
