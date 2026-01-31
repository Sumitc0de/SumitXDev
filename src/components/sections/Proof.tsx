
export default function Proof() {
  const proofs = [
    {
      title: "AI Ads for D2C Brand",
      metric: "+3.4x ROAS",
      description:
        "Created AI-generated ad creatives that significantly improved click-through rates and conversions.",
    },
    {
      title: "AI Automation for Lead Handling",
      metric: "80% Time Saved",
      description:
        "Built automated workflows for lead capture, qualification, and CRM updates using AI tools.",
    },
    {
      title: "AI Video Reels for Creators",
      metric: "5x Engagement",
      description:
        "Produced AI-powered reels with scripts, voiceovers, and subtitles that boosted reach.",
    },
    {
      title: "Next.js Website for Startup",
      metric: "95+ Lighthouse Score",
      description:
        "Developed a fast, SEO-optimized website using Next.js with modern UI and clean architecture.",
    },
  ];

  return (
    <section className="bg-[#020617] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Proof
          </span>{" "}
          of Work & Impact
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Real-world results delivered using AI, automation, and modern web technologies.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {proofs.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40"
            >
              {/* Glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-2 text-3xl font-extrabold text-cyan-400">
                {item.metric}
              </p>

              <p className="mt-4 text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}