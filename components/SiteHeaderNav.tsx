"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

type Props = { siteName: string };

/** Works with `basePath` (e.g. `/rootsandcaps`) and without it (`/`). */
function isHomePath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return true;
  if (parts[0] === "blog") return false;
  return parts.length === 1;
}

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const header = document.getElementById("site-header");
  const headerOffset = header ? header.getBoundingClientRect().height : 0;
  const top = window.scrollY + target.getBoundingClientRect().top - headerOffset - 16;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

export function SiteHeaderNav({ siteName }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = isHomePath(pathname);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onSectionNav = useCallback(
    (e: React.MouseEvent, id: string) => {
      if (!isHome) return;
      e.preventDefault();
      setOpen(false);
      window.history.replaceState(null, "", `#${id}`);
      window.setTimeout(() => {
        window.requestAnimationFrame(() => scrollToSection(id));
      }, 20);
    },
    [isHome]
  );

  const linkClass =
    "rounded-full px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-300 md:px-3 md:py-1.5";

  return (
    <>
      <div className="mx-auto grid max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:flex">
        <button
          type="button"
          className="tap-highlight relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 transition hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span className="text-xl leading-none" aria-hidden>
              ×
            </span>
          ) : (
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          )}
        </button>

        <Link
          href="/"
          className="min-w-0 truncate text-center text-base font-semibold text-slate-900 transition-colors dark:text-white sm:text-lg md:flex-none md:text-left"
        >
          {siteName}
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex md:flex-1 md:justify-center"
          aria-label="Primary"
        >
          <Link
            href="/#services"
            scroll={false}
            className={linkClass}
            onClick={(e) => onSectionNav(e, "services")}
          >
            Services
          </Link>
          <Link
            href="/#about"
            scroll={false}
            className={linkClass}
            onClick={(e) => onSectionNav(e, "about")}
          >
            About
          </Link>
          <Link
            href="/#contact"
            scroll={false}
            className={linkClass}
            onClick={(e) => onSectionNav(e, "contact")}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={`${linkClass} text-blue-800 hover:text-blue-950 dark:text-sky-300 dark:hover:text-sky-200`}
          >
            Blog
          </Link>
        </nav>

        <div className="relative z-10 shrink-0">
          <ThemeToggle />
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`border-t border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950 md:hidden ${open ? "block" : "hidden"}`}
        aria-label="Mobile primary"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3">
          <Link
            href="/#services"
            scroll={false}
            className={linkClass}
            onClick={(e) => onSectionNav(e, "services")}
          >
            Services
          </Link>
          <Link
            href="/#about"
            scroll={false}
            className={linkClass}
            onClick={(e) => onSectionNav(e, "about")}
          >
            About
          </Link>
          <Link
            href="/#contact"
            scroll={false}
            className={linkClass}
            onClick={(e) => onSectionNav(e, "contact")}
          >
            Contact
          </Link>
          <Link href="/blog" className={linkClass} onClick={() => setOpen(false)}>
            Blog
          </Link>
        </div>
      </nav>
    </>
  );
}
