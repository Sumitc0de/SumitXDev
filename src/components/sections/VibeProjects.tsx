import ProjectCard from "@/components/ProjectCard";

export default function VibeProjects() {
  return (
    <section className="relative py-32 bg-[#020617] text-white overflow-hidden">

      {/* Vibe glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-purple-300 backdrop-blur">
            🎧 Vibe Mode
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Vibe Coded Projects
          </h2>

          <p className="mt-6 max-w-2xl text-gray-400">
            Experimental builds created in flow — fast ideas, creative UI,
            and playful interactions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ProjectCard
            title="Quantum Cursor"
            description="A futuristic cursor system with particle physics and magnetic hover."
            tech={["Canvas", "JS", "UX"]}
            liveUrl="https://example.com"
            githubUrl="https://github.com/yourname/quantum-cursor"
            vibe
          />

          <ProjectCard
            title="AI Prompt Playground"
            description="Interactive prompt experimentation UI built for fun and learning."
            tech={["React", "AI", "UI"]}
            liveUrl="https://example.com"
            githubUrl="https://github.com/yourname/prompt-playground"
            vibe
          />

          <ProjectCard
            title="Skill OS UI"
            description="An OS-style skill visualization interface with animations and interactions."
            tech={["Next.js", "Framer Motion", "Design"]}
            liveUrl="https://example.com"
            githubUrl="https://github.com/yourname/skill-os"
            vibe
          />
        </div>
      </div>
    </section>
  );
}
