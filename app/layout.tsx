import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Arav's personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
          <div className="min-h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
