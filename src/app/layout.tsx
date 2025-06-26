import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Hen House Golf - Professional Golf Instruction",
  description: "Professional golf instruction and coaching services. Book your lesson today with our experienced golf teaching professional.",
  keywords: "golf lessons, golf instruction, golf coach, golf teaching professional, golf clinic",
  authors: [{ name: "Hen House Golf" }],
  openGraph: {
    title: "Hen House Golf - Professional Golf Instruction",
    description: "Professional golf instruction and coaching services. Book your lesson today.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hen House Golf - Professional Golf Instruction",
    description: "Professional golf instruction and coaching services.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#16a34a',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  );
}
