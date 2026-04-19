import { getClinic } from "@/lib/content";
import { SiteHeaderNav } from "@/components/SiteHeaderNav";

export function SiteHeader() {
  const clinic = getClinic();

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-colors duration-300 supports-[backdrop-filter]:bg-white/90 dark:border-slate-800 dark:bg-slate-950/90 dark:supports-[backdrop-filter]:bg-slate-950/75"
    >
      <SiteHeaderNav siteName={clinic.siteName} />
    </header>
  );
}
