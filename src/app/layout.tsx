import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuantumCursor from "@/components/ui/QuantumCursor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Sumit Vishwakarma | FullStack Developer & AI Engineer",
    template: "%s | Sumit Vishwakarma",
  },
  description:
    "Sumit Vishwakarma is a FullStack Developer & AI Engineer building high-performance, SEO-optimized web applications using React, Next.js, and modern AI tools.",
  keywords: [
    "Sumit Vishwakarma",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "AI Engineer",
    "Web Developer India",
    "Portfolio",
    "FullStack Developer"
  ],
  authors: [{ name: "Sumit Vishwakarma" }],
  creator: "Sumit Vishwakarma",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Sumit Vishwakarma | FullStack Developer & AI Engineer",
    description:
      "Explore projects, case studies, and AI-powered web apps built by Sumit Vishwakarma using React and Next.js.",
    url: "/",
    siteName: "SumitXDev",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sumit Vishwakarma Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sumit Vishwakarma | Developer Portfolio",
    description:
      "FullStack Developer | Frontend Developer | React | Next.js | AI | SaaS Projects",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] min-h-screen  text-white antialiased">
        <QuantumCursor />
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
