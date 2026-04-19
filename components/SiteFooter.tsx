import { getClinic } from "@/lib/content";

export function SiteFooter() {
  const clinic = getClinic();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <p>
        © {year} {clinic.siteName}
      </p>
    </footer>
  );
}
