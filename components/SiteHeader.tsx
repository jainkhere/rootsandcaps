import Link from "next/link";
import { getClinic } from "@/lib/content";

export function SiteHeader() {
  const clinic = getClinic();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          {clinic.siteName}
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
          <Link href="/#services" className="hover:text-blue-800">
            Services
          </Link>
          <Link href="/#about" className="hover:text-blue-800">
            About
          </Link>
          <Link href="/#contact" className="hover:text-blue-800">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-blue-800">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
