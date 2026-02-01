import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden bg-[#020617] py-32 text-white"
      aria-labelledby="cta-heading"
    >
      {/* Decorative background glows (hidden from assistive tech) */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* ✅ SEO + CONVERSION OPTIMIZED HEADING */}
        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          Hire a{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            FullStack & AI Developer
          </span>{" "}
          to Build Scalable Solutions
        </h2>

        {/* ✅ INTENT-RICH DESCRIPTION */}
        <p className="mt-6 text-lg text-gray-300/80">
          I help startups and businesses build high-impact AI automations,
          conversion-focused web applications, and scalable systems using
          <strong> React</strong>, <strong>Next.js</strong>, and modern
          <strong> AI technologies</strong>.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            href="/contact"
            aria-label="Start a project with Sumit Vishwakarma"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            Start a Project
          </Link>

          <Link
            href="/services"
            aria-label="View services offered by Sumit Vishwakarma"
            className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-purple-400 hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"
          >
            View Services
          </Link>
        </div>

        {/* ✅ Contrast fixed */}
        <p className="mt-8 text-sm text-gray-300/70">
          Fast response • Clear communication • Scalable solutions
        </p>
      </div>
    </section>
  );
}
