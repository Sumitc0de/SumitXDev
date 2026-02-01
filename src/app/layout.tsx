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
    "Portfolio of Sumit Vishwakarma — Frontend Developer specializing in React, Next.js, AI-powered web apps.",
  authors: [{ name: "Sumit Vishwakarma" }],
  creator: "Sumit Vishwakarma",

  // ✅ FIXED: no empty URL (this caused your crash)
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  openGraph: {
    title: "Sumit Vishwakarma | FullStack Developer & AI Engineer",
    description:
      "React, Next.js, AI projects, SaaS products, and modern web development portfolio.",
    url: "/",
    siteName: "SumitXDev Portfolio",
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
      "Frontend Developer | React | Next.js | AI | SaaS Projects",
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
      <body className="bg-[#020617] text-white antialiased">
        <QuantumCursor />
        <Header />
        {/* 👇 unchanged layout wrapper */}
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
