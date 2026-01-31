import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default function ProjectsPage() {
    return (
        <main className="bg-[#020617] text-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#020617] pt-28 pb-20">
                {/* Glow */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-[-35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />
                    <div className="absolute right-[-10%] bottom-[-30%] h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[160px]" />
                </div>

                <div className="mx-auto max-w-6xl px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Projects
                        </span>{" "}
                        & Case Studies
                    </h1>

                    <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-400">
                        A selection of AI-powered systems, automations, and modern web projects
                        built to solve real business problems.
                    </p>
                </div>
            </section>


            {/* Projects Grid */}
            <section className="bg-[#020617] pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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


            {/* CTA */}

            <section className="px-6 py-20 sm:py-24 md:py-28 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                    Want to Build Something{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Similar?
                    </span>
                </h2>

                <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-gray-400">
                    Let’s create AI-powered systems that actually deliver results.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105"
                    >
                        Start a Project
                    </Link>

                    {/* <Link
      href="/services"
      className="w-full sm:w-auto rounded-xl border border-white/20 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white backdrop-blur transition hover:border-purple-400"
    >
      View Services
    </Link> */}
                </div>
            </section>

        </main>
    );
}
