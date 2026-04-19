import { getClinic } from "@/lib/content";

export function SiteFooter() {
  const clinic = getClinic();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 text-center text-sm text-slate-600">
      <p>
        © {year} {clinic.siteName}
      </p>
    </footer>
  );
}
