import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arav Bhardwaj",
  description: "Arav Bhardwaj - Developer Portfolio",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Frontend Development",
    "Backend Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Database Design",
    "API Development",
    "Cloud Solutions",
    "DevOps",
    "System Architecture",
    "Web Development",
    "AI",
    "Machine Learning",
    "Data Science",
    "Data Engineering",
    "Data Analysis",
    "Data Visualization",
    "Data Modeling",
    "Arav Bhardwaj",
  ],
  authors: [{ name: "Arav Bhardwaj" }],
  creator: "Arav Bhardwaj",
  icons: {
    icon: "/ab.svg",
    shortcut: "/ab.svg",
    apple: "/ab.svg",
  },
  openGraph: {
    title: "Arav Bhardwaj - Full-Stack Developer Portfolio",
    description:
      "Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.",
    url: "https://aravbhardwaj.com",
    siteName: "Arav Bhardwaj - Portfolio",
    images: [
      {
        url: "/ab.svg",
        width: 1200,
        height: 630,
        alt: "Arav Bhardwaj - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
