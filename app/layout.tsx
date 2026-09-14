import type React from "react";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import "./mh.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

// Bump when the icons change: browsers cache favicons aggressively and ignore file updates at the same URL.
const ICON_VERSION = "2";

export const metadata: Metadata = {
  title: "Arav Bhardwaj",
  description: "Full-stack developer & Founder",
  icons: {
    icon: [
      { url: `/favicon.ico?v=${ICON_VERSION}`, sizes: "any" },
      { url: `/favicon.svg?v=${ICON_VERSION}`, type: "image/svg+xml" },
      { url: `/favicon-16x16.png?v=${ICON_VERSION}`, sizes: "16x16", type: "image/png" },
      { url: `/favicon-32x32.png?v=${ICON_VERSION}`, sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: `/apple-touch-icon.png?v=${ICON_VERSION}`, sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href={`/site.webmanifest?v=${ICON_VERSION}`} />
      </head>
      <body className={newsreader.variable}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
