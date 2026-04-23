import ProjectCard from "@/components/ProjectCard";

export default function VibeProjects() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <section
      className="relative py-32 bg-[#020617] text-white overflow-hidden"
      aria-labelledby="vibe-projects-heading"
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-purple-300 backdrop-blur">
            <span aria-hidden="true">🎧</span> Vibe Mode
          </span>

          <h2
            id="vibe-projects-heading"
            className="mt-4 text-4xl md:text-5xl font-extrabold"
          >
            Vibe Coded Projects
          </h2>

          <p className="mt-6 max-w-2xl text-gray-300/80">
            Experimental builds created in flow — fast ideas, creative UI,
            and playful interactions.
          </p>
        </div>

        {/* ================= SEO: VIBE PROJECT STRUCTURED DATA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Vibe Coded Projects by Sumit Vishwakarma",
              itemListElement: [
                {
                  "@type": "SoftwareApplication",
                  name: "Snap Prompt",
                  description:
                    "A high-performance AI prompt management platform for creators to save and organize AI workflows.",
                  applicationCategory: "WebApplication",
                  operatingSystem: "Web",
                  url: "https://snap-prompt.vercel.app/",
                  author: {
                    "@type": "Person",
                    name: "Sumit Vishwakarma",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "CampusKart",
                  description:
                    "CampusKart is an exclusive, safe, and dynamic university-based student marketplace.",
                  applicationCategory: "WebApplication",
                  operatingSystem: "Web",
                  url: "https://campuskart-ten.vercel.app/",
                  author: {
                    "@type": "Person",
                    name: "Sumit Vishwakarma",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "SpiceKart",
                  description:
                    "A premium e-commerce marketplace for spices, built with a focus on high-end aesthetics.",
                  applicationCategory: "WebApplication",
                  operatingSystem: "Web",
                  url: "https://spicekart-six.vercel.app/",
                  author: {
                    "@type": "Person",
                    name: "Sumit Vishwakarma",
                  },
                },
              ],
            }),
          }}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="Snap Prompt"
            description="High-performance AI prompt management platform for creators."
            tech={["Next.js", "MongoDB", "AI"]}
            liveUrl="https://snap-prompt.vercel.app/"
            githubUrl="https://github.com/Sumitc0de/snap-prompt"
            vibe
          />

          <ProjectCard
            title="CampusKart"
            description="Exclusive, safe, and dynamic university-based student marketplace."
            tech={["React", "Node.js", "MongoDB"]}
            liveUrl="https://campuskart-ten.vercel.app/"
            githubUrl="https://github.com/Sumitc0de/campuskart"
            vibe
          />

          <ProjectCard
            title="SpiceKart"
            description="A premium e-commerce marketplace for spices, built with a focus on high-end aesthetics."
            tech={["Next.js", "Tailwind CSS", "Vibecoded"]}
            liveUrl="https://spicekart-six.vercel.app/"
            githubUrl="https://github.com/Sumitc0de/new_project_01"
            vibe
          />
        </div>
      </div>
    </section>
  );
}
