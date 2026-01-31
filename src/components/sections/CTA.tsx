import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Ready to Build{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          Solutions?
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          Let’s create high-impact AI ads, intelligent automations, or modern web
          systems that actually move your business forward.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105"
          >
            Start a Project
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-purple-400 hover:text-purple-300"
          >
            View Services
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Fast response • Clear communication • Scalable solutions
        </p>
      </div>
    </section>
  );
}