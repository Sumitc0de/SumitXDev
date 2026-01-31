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
    <div
      className={`group relative rounded-2xl border border-white/10 p-6 backdrop-blur transition
      ${
        vibe
          ? "bg-white/5 hover:-translate-y-2 hover:rotate-[0.3deg]"
          : "bg-white/5 hover:-translate-y-1"
      }`}
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100
        ${
          vibe
            ? "bg-gradient-to-r from-purple-500/30 to-pink-500/20"
            : "bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
        }`}
      />

      {/* Title */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        {description}
      </p>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
          >
            Live
          </Link>
        )}

        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
}
