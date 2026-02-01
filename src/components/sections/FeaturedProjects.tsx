import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default function FeaturedProjects() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <section
      className="py-32 bg-[#020617] text-white"
      aria-labelledby="featured-projects-heading"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="text-sm text-cyan-400 tracking-wide">
            Selected Work
          </span>

          <h2
            id="featured-projects-heading"
            className="mt-3 text-4xl md:text-5xl font-extrabold"
          >
            Featured Projects
          </h2>

          <p className="mt-6 max-w-2xl text-gray-300/80">
            Production-ready projects focused on architecture, performance,
            and real-world impact.
          </p>
        </div>

        {/* ================= SEO: PROJECT STRUCTURED DATA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Featured Projects by Sumit Vishwakarma",
              itemListElement: [
                {
                  "@type": "SoftwareApplication",
                  name: "AI SaaS Platform",
                  description:
                    "An AI-powered SaaS platform for automation, analytics, and business workflows.",
                  applicationCategory: "WebApplication",
                  operatingSystem: "Web",
                  url: siteUrl,
                  author: {
                    "@type": "Person",
                    name: "Sumit Vishwakarma",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Smart Automation System",
                  description:
                    "End-to-end automation system for lead capture, email workflows, and CRM syncing.",
                  applicationCategory: "WebApplication",
                  operatingSystem: "Web",
                  url: siteUrl,
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
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
