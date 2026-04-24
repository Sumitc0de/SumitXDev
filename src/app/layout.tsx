import React, { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuantumCursor from "@/components/ui/QuantumCursor";
import SocialDock from "@/components/sections/SocialDock";
import type { Metadata } from "next";
import AntiGravityLoader from "@/components/ui/AntiGravityLoader";
import SumitAIAssistant from "@/components/chatbot/SumitAIAssistant";
import JsonLd from "@/components/seo/JsonLd";

// Semantic SEO - JSON-LD Structured Data
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sumit Vishwakarma",
  "url": "https://www.sumitxdev.online",
  "image": "https://www.sumitxdev.online/og.png",
  "jobTitle": "Full-Stack Developer & AI Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "SumitXDev"
  },
  "sameAs": [
    "https://github.com/Sumitc0de",
    "https://www.linkedin.com/in/sumit-vishwakarma-54a7b7264/",
    "https://twitter.com/aihackwithsumit"
  ]
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SumitXDev | Sumit Vishwakarma",
  "url": "https://www.sumitxdev.online",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.sumitxdev.online/resources?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
export const metadata: Metadata = {
  verification: {
    google: "p0K0c4tPfxdE1WExZ54l6Q8pabblz8R5GDmdePkDm0U",
  },
  title: {
    default: "Sumit Vishwakarma | Advanced Full-Stack & AI Developer (2026)",
    template: "%s | Sumit Vishwakarma",
  },
  description:
    "Hire Sumit Vishwakarma, an expert Full-Stack Developer & AI Engineer. I build modern, high-performance, SEO-optimized web apps using React, Next.js, and AI.",
  keywords: [
    "Sumit Vishwakarma",
    "AI Developer Portfolio",
    "React Developer Portfolio",
    "Web Developer India",
    "Next.js Developer",
    "FullStack Developer",
    "Software Engineer",
    "Freelance Web Developer"
  ],
  authors: [{ name: "Sumit Vishwakarma" }],
  creator: "Sumit Vishwakarma",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
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
    title: "Sumit Vishwakarma | Advanced Full-Stack & AI Developer",
    description:
      "Explore modern projects, AI-powered web apps, and case studies built by Sumit Vishwakarma using Next.js and React.",
    url: "https://www.sumitxdev.online/",
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
    title: "Sumit Vishwakarma | Advanced Developer Portfolio",
    description:
      "Full-Stack Developer | AI Integration | React | Next.js | High-Performance SaaS Projects",
    images: ["/og.png"],
  },
  icons: {
    icon: "/sumit-favicon.png",
    shortcut: "/sumit-favicon.png",
    apple: "/sumit-favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href="/hero-image.webp" fetchPriority="high" />
      </head>
      <body className="bg-[#020617] min-h-screen text-white antialiased">
        <JsonLd data={personStructuredData} />
        <JsonLd data={websiteStructuredData} />
        <AntiGravityLoader>
          <QuantumCursor />
          <Header />
          <div>{children}</div>
          <SocialDock />
          <Footer />
          <SumitAIAssistant />
        </AntiGravityLoader>
      </body>
    </html>
  );
}
