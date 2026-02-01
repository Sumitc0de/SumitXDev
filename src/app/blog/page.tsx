import { BLOGS } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <section className="relative mx-auto min-h-[calc(100vh-8rem)] max-w-6xl px-6 py-24">
      {/* Header */}
      <header className="mb-12">
        <span className="text-sm text-cyan-400">
          ● SYSTEM ONLINE — KNOWLEDGE MODE
        </span>

        <h1 className="mt-4 text-5xl font-bold">
          Knowledge <span className="text-cyan-400">Logs</span>
        </h1>

        <p className="mt-4 max-w-xl text-white/60">
          System-level thinking on AI, Web Engineering, Automation & Scale.
        </p>
      </header>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOGS.map((blog, index) => (
          <BlogCard key={blog.slug} blog={blog} index={index} />
        ))}
      </div>
    </section>
  );
}
