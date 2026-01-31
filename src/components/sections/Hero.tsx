import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[480px] w-[480px] rounded-full bg-purple-600/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

          {/* LEFT — IMPROVED PORTRAIT AREA */}
          <div className="relative flex justify-center md:justify-start">

            {/* Background system glow */}
            <div className="absolute -left-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

            {/* System frame */}
            <div className="relative">

              {/* Frame border */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-500/30 blur-xl" />

              {/* Image container */}
              <div className="relative h-[340px] w-[260px] overflow-hidden rounded-2xl border border-white/15 bg-black/40 backdrop-blur">
                <Image
                  src="/sumit.png"
                  alt="Sumit Vishwakarma"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="absolute -right-6 top-6 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-cyan-400 backdrop-blur">
                ● Online
              </div>
            </div>
          </div>


          {/* RIGHT — TEXT */}
          <div>
            {/* Badge */}
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur">
              👋 Hi, I’m Sumit Vishwakarma
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              Building{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Systems
              </span>{" "}
              & Modern Web Experiences
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg text-gray-400">
              I’m an AI-focused developer and system builder crafting intelligent
              automations, high-converting AI ads, and fast, scalable web apps using
              modern technologies.
            </p>

            {/* VIBE CODER LINE */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              <span className="animate-pulse">🎧</span>
              <span>
                Also a <span className="text-white font-medium">vibe coder</span> — I love building
                in flow, music on, ideas flying.
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105"
              >
                Let’s Work Together
              </Link>

              <Link
                href="/projects"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View My Work
              </Link>
            </div>

            {/* Micro trust */}
            <p className="mt-8 text-sm text-gray-500">
              AI · Web · Automation · Systems Thinking · Vibe Coding
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
