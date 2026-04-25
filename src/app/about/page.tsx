import type { Metadata } from "next";
import AboutPageClient from "@/components/about/AboutPageClient";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Sumit Vishwakarma | React & AI Developer Portfolio",
  description:
    "Portfolio of Sumit Vishwakarma – React, Next.js, and AI Developer from Mumbai building scalable web apps and AI tools. B.E. Computer Engineering student at VCET.",
  keywords: [
    "Sumit Vishwakarma",
    "React Developer",
    "Next.js Developer",
    "AI Developer",
    "Mumbai Developer",
    "Full Stack Developer Portfolio",
    "Web Developer India",
  ],
  openGraph: {
    title: "About Sumit Vishwakarma | React & AI Developer",
    description:
      "Explore the portfolio of Sumit Vishwakarma — a full-stack developer & AI builder from Mumbai, India.",
    url: "https://www.sumitxdev.online/about",
    type: "profile",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sumit Vishwakarma | Developer & AI Builder",
    description:
      "React, Next.js, and AI Developer building scalable web apps with real-world impact.",
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sumit Vishwakarma",
  url: "https://www.sumitxdev.online",
  image: "https://www.sumitxdev.online/og.png",
  jobTitle: "Full-Stack Developer & AI Engineer",
  description:
    "A passionate full-stack developer and AI builder from Mumbai, India. Specializes in React, Next.js, Node.js, and AI-powered solutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vidyavardhini's College of Engineering & Technology (VCET)",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "Artificial Intelligence",
    "Full-Stack Development",
    "Tailwind CSS",
    "MongoDB",
    "Python",
  ],
  sameAs: [
    "https://github.com/Sumitc0de",
    "https://www.linkedin.com/in/sumit-vishwakarma-b818b7268/",
    "https://x.com/DeveloperrSumit",
    "https://www.instagram.com/aihackwithsumit",
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <AboutPageClient />
    </>
  );
}
