import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="py-32 bg-[#020617] text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="text-sm text-cyan-400 tracking-wide">
            Selected Work
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Featured Projects
          </h2>
          <p className="mt-6 max-w-2xl text-gray-400">
            Production-ready projects focused on architecture, performance,
            and real-world impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="AI SaaS Platform"
            description="An AI-powered SaaS platform for automation, analytics, and business workflows."
            tech={["Next.js", "Node.js", "MongoDB", "AI APIs"]}
            liveUrl="https://example.com"
            githubUrl="https://github.com/yourname/ai-saas"
          />

          <ProjectCard
            title="Smart Automation System"
            description="End-to-end automation system for lead capture, email workflows, and CRM syncing."
            tech={["Node.js", "Express", "Webhooks", "APIs"]}
            liveUrl="https://example.com"
            githubUrl="https://github.com/yourname/automation-system"
          />
        </div>
      </div>
    </section>
  );
}
