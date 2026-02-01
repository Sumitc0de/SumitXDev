import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import SocialDock from "@/components/sections/SocialDock";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import VibeProjects from "@/components/sections/VibeProjects";

export default function HomePage() {
  return (
    <main className="bg-[#020617] text-white">
      {/* 🔥 ADVANCED SEO: Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sumit Vishwakarma",
            jobTitle: "Frontend Developer & AI Engineer",
            description:
              "Frontend Developer specializing in React, Next.js, AI-powered web applications, and SaaS products.",
            url: process.env.NEXT_PUBLIC_SITE_URL,
            image: `${process.env.NEXT_PUBLIC_SITE_URL}/og.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressCountry: "India",
            },
            sameAs: [
              "https://github.com/yourgithub",
              "https://www.linkedin.com/in/yourlinkedin",
              "https://twitter.com/yourtwitter",
            ],
            knowsAbout: [
              "React.js",
              "Next.js",
              "JavaScript",
              "AI Web Applications",
              "SaaS Development",
              "Frontend Engineering",
            ],
          }),
        }}
      />

      {/* 🔥 ADVANCED SEO: Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SumitXDev Portfolio",
            url: process.env.NEXT_PUBLIC_SITE_URL,
            description:
              "Portfolio website showcasing React, Next.js, AI projects, and SaaS products by Sumit Vishwakarma.",
            inLanguage: "en",
          }),
        }}
      />

      {/* ===== YOUR EXISTING UI (UNCHANGED) ===== */}
      <Hero />
      <FeaturedProjects />
      <VibeProjects />
      <CTA />

      {/* Floating Socials */}
      <SocialDock />
    </main>
  );
}
