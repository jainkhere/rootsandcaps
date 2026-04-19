import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getClinic } from "@/lib/content";
import { siteOrigin } from "@/lib/site";
import { LocalBusinessJsonLd } from "./structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
