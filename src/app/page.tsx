import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import VibeProjects from "@/components/sections/VibeProjects";
import CTA from "@/components/sections/CTA";
import SocialDock from "@/components/sections/SocialDock";

export default function HomePage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <main className="bg-[#020617] text-white">
      {/* ================= SEO: STRUCTURED DATA ================= */}

      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sumit Vishwakarma",
            jobTitle: "FullStack Developer, MERN Developer, Frontend Developer & AI Engineer",
            description:
              "Full-Stack Developer building end-to-end web & AI-powered SaaS products using React, Next.js, Node.js, and modern APIs.",
            url: siteUrl,
            image: `${siteUrl}/og.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressCountry: "India",
            },
            sameAs: [
              "https://github.com/Sumitc0de",
              "https://www.linkedin.com/in/sumit-vishwakarma",
            ],
            knowsAbout: [
              "React.js",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "AI Web Applications",
              "SaaS Development",
              "Frontend Engineering",
            ],
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SumitXDev Portfolio",
            url: siteUrl,
            description:
              "Portfolio website of Sumit Vishwakarma showcasing React, Next.js, AI projects, and modern web development work.",
            inLanguage: "en",
          }),
        }}
      />

      {/* ================= EXISTING UI (UNCHANGED) ================= */}

      <Hero />
      <FeaturedProjects />
      <VibeProjects />
      <CTA />
      <SocialDock />
    </main>
  );
}
