import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  vibe?: boolean;
};

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  vibe = false,
}: ProjectCardProps) {
  return (
    <article
      className={`group relative rounded-2xl border border-white/10 p-6 backdrop-blur transition
      ${
        vibe
          ? "bg-white/5 hover:-translate-y-2 hover:rotate-[0.3deg]"
          : "bg-white/5 hover:-translate-y-1"
      }`}
      aria-labelledby={`project-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100
        ${
          vibe
            ? "bg-gradient-to-r from-purple-500/30 to-pink-500/20"
            : "bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
        }`}
      />

      {/* Title */}
      <h3
        id={`project-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="text-xl font-semibold"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-300/80 leading-relaxed">
        {description}
      </p>

      {/* Tech stack */}
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            aria-label={`View live demo of ${title}`}
            className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            Live
          </Link>
        )}

        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            aria-label={`View source code of ${title} on GitHub`}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            GitHub
          </Link>
        )}
      </div>
    </article>
  );
}
