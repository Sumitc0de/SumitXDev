import Link from "next/link";

type BlogCardProps = {
    slug: string;
    title: string;
    description: string;
    date: string;
    readingTime: number;
    tags: string[];
    thumbnail: string;
};

export default function BlogCard({
    slug,
    title,
    description,
    date,
    readingTime,
    tags,
    thumbnail,
}: BlogCardProps) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <article className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden transition hover:-translate-y-2 hover:border-cyan-400/30">
            {/* Decorative glow */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100 bg-linear-to-r from-cyan-500/20 to-purple-500/20"
            />

            {/* Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-cyan-500/10 to-purple-500/10">
                <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                />
                {/* Fallback gradient pattern when no image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <svg
                        className="h-16 w-16 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-0.5 text-xs text-cyan-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold leading-tight text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {description}
                </p>

                {/* Meta */}
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span>{formattedDate}</span>
                    <span>{readingTime} min read</span>
                </div>

                {/* Read More */}
                <Link
                    href={`/blog/${slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 hover:gap-2.5"
                >
                    Read More
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </article>
    );
}
