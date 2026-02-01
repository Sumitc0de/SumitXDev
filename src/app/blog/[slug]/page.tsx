import { notFound } from "next/navigation";
import { BLOGS } from "@/data/blogs";

export async function generateMetadata({ params }) {
  const blog = BLOGS.find((b) => b.slug === params.slug);

  if (!blog) return {};

  return {
    title: `${blog.title} | SumitX Dev`,
    description: blog.description,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
    },
  };
}

export default function BlogDetailPage({ params }) {
  const blog = BLOGS.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      {/* HEADER */}
      <header>
        <span className="text-sm text-cyan-400">
          {blog.category}
        </span>

        <h1 className="mt-4 text-4xl font-bold leading-tight">
          {blog.title}
        </h1>

        <div className="mt-4 flex gap-3 text-sm text-white/50">
          <span>{blog.date}</span>
          <span>•</span>
          <span>{blog.readTime}</span>
          <span>•</span>
          <span>NODE ACTIVE</span>
        </div>
      </header>

      {/* CONTENT */}
      <div className="prose prose-invert mt-12 max-w-none">
        {blog.content.split("\n").map((line, i) => {
          if (line.startsWith("##")) {
            return <h2 key={i}>{line.replace("##", "")}</h2>;
          }
          return <p key={i}>{line}</p>;
        })}
      </div>

      {/* SYSTEM INSIGHT */}
      <section className="mt-16 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-6">
        <h3 className="text-sm text-cyan-400">
          SYSTEM INSIGHT
        </h3>
        <p className="mt-2 text-white/70">
          This log focuses on leverage creation through AI-driven
          development workflows.
        </p>
      </section>
    </article>
  );
}
