import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getClinic } from "@/lib/content";
import { siteOrigin } from "@/lib/site";
import { HashScroll } from "@/components/HashScroll";
import { LocalBusinessJsonLd } from "./structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const themeScript = `
(() => {
  const storageKey = "rootsandcaps-theme";
  const root = document.documentElement;
  const savedTheme = window.localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : systemPrefersDark
      ? "dark"
      : "light";
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
})();
`;

export async function generateMetadata(): Promise<Metadata> {
  const clinic = getClinic();
  const base = siteOrigin();

  return {
    metadataBase: new URL(base.endsWith("/") ? base : `${base}/`),
    title: {
      default: clinic.siteName,
      template: `%s | ${clinic.siteName}`,
    },
    description: clinic.tagline,
    openGraph: {
      title: clinic.siteName,
      description: clinic.tagline,
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans transition-colors duration-300">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <HashScroll />
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
