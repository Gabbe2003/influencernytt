import type { Metadata } from "next";
import "@/styles/globals.css";
import { HeaderWrapper } from "@/components/Header/HeaderWrapper";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "TrendRadar - Teknik, AI & Trender",
    template: "%s | TrendRadar",
  },
  description:
    "Din k\u00e4lla f\u00f6r de senaste trenderna inom teknik, AI och innovation. Vi bevakar framtiden s\u00e5 att du kan ligga steget f\u00f6re.",
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_HOSTNAME || "trendradar.se"}`
  ),
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "TrendRadar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <HeaderWrapper />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
