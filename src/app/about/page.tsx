import Link from "next/link";
import { PRIMARY_MODE } from "@/constants/system";
import { PROJECTS_BUILT } from "@/constants/system";

export default function AboutPage() {
    return (
        <main className="bg-[#020617] text-white">

            {/* HERO */}
            <section className="relative overflow-hidden py-28">
                {/* Ambient glow */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-[-35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[170px]" />
                    <div className="absolute right-0 bottom-[-25%] h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[170px]" />
                </div>

                <div className="mx-auto max-w-6xl px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        About the{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            System
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg text-gray-400">
                        This is not a traditional “About Me”.
                        It’s the logic, intent, and architecture behind how I build AI-powered systems.
                    </p>
                </div>
            </section>

            {/* CORE GRID */}
            <section>
                <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* LEFT — ORIGIN + PHILOSOPHY */}
                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1220] via-[#0e1628] to-[#101a2e] p-8 backdrop-blur-xl">
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_60%)]" />

                        <h2 className="text-2xl font-semibold mb-6">
                            System Origin
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            I’m <span className="text-white font-medium">Sumit Vishwakarma</span> — an AI-focused
                            engineer who believes software should
                            <span className="text-cyan-400"> reduce human effort</span>,
                            not increase complexity.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            I design <span className="text-purple-400">AI-driven, automation-first systems </span>

                            built to scale by default — not isolated tools.
                        </p>

                        {/* NEW — PORTFOLIO FACTS */}
                        <div className="mt-6 space-y-2 text-sm text-gray-400">
                            <p>
                                🎓 <span className="text-white">B.E. Computer Engineering</span>{" "}
                                <span className="text-gray-500">(2024–2028 · Mumbai University)</span>
                            </p>
                            <p>
                                🧩 <span className="text-white">Focus:</span> Full-Stack Web · Web + AI · CS/DSA
                            </p>
                        </div>

                        <p className="mt-6 text-gray-400 leading-relaxed">
                            Every project follows one rule:
                            <br />
                            <span className="text-cyan-300">
                                If it doesn’t save time, scale impact, or create leverage — it doesn’t ship.
                            </span>
                        </p>
                    </div>

                    {/* RIGHT — SYSTEM STATS + MODES */}
                    <div className="flex flex-col gap-6">

                        {/* SYSTEM STATS */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <h3 className="text-lg font-semibold mb-4">
                                System Metrics
                            </h3>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <p className="text-xs text-gray-400">Projects Built</p>
                                    <p className="text-xl font-bold text-cyan-400">{PROJECTS_BUILT}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Response Time</p>
                                    <p className="text-xl font-bold text-purple-400">&lt;24h</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Primary Mode</p>
                                    <p className="text-xl font-bold text-blue-400">{PRIMARY_MODE}</p>
                                </div>
                            </div>
                        </div>

                        {/* OPERATION MODES */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <h3 className="text-lg font-semibold mb-4">
                                Operating Modes
                            </h3>

                            <div className="space-y-3 text-sm text-gray-400">
                                <p>🧠 <span className="text-white">AI Mode:</span> Prompt systems, intelligence layers</p>
                                <p>⚙️ <span className="text-white">Automation Mode:</span> APIs, workflows, logic</p>
                                <p>🕸️ <span className="text-white">Web Mode:</span> Next.js, performance, SEO</p>
                                <p>🚀 <span className="text-white">Scale Mode:</span> Build once, multiply impact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MANIFESTO */}
            <section className="border-t border-white/10 px-6 py-20 mt-10 sm:py-24 md:py-28">
                <div className="mx-auto max-w-4xl text-center">

                    <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-extrabold">
                        Build Manifesto
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                        I don’t chase trends. I design systems that outlast them.
                    </p>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                        AI is not a feature. It’s the foundation.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/projects"
                            className="rounded-xl border border-white/20 px-6 py-3 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            View Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
