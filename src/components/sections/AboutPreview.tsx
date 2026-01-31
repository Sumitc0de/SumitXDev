export default function AboutPreview() {
  return (
    <section className="bg-[#020617] py-28 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About
            </span>{" "}
            Me
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I’m an AI-focused freelancer who builds intelligent systems, high-converting
            ad creatives, automated workflows, and modern web experiences.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            My approach blends <span className="text-cyan-400">AI tools</span>,
            <span className="text-cyan-400"> automation</span>, and
            <span className="text-cyan-400"> scalable web development</span> to solve
            real business problems — not just build software.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I focus on speed, clarity, and measurable impact for startups, creators,
            and growing teams.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: "AI-First Thinking",
              desc: "Every solution is designed with automation and intelligence at the core.",
            },
            {
              title: "Business-Driven Results",
              desc: "I focus on outcomes like growth, efficiency, and conversions.",
            },
            {
              title: "Modern Tech Stack",
              desc: "Next.js, AI APIs, automation tools, and scalable architectures.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-400/40"
            >
              {/* Glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}