import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blogs";
import BlogSearch from "@/components/blog/BlogSearch";

export const metadata: Metadata = {
    title: "Blog & Insights",
    description:
        "Articles on AI, web development, React, Next.js, and modern software engineering by Sumit Vishwakarma.",
    openGraph: {
        title: "Blog & Insights | Sumit Vishwakarma",
        description:
            "Explore technical articles on AI, React, Next.js, and full-stack development.",
        url: "/blog",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog & Insights | Sumit Vishwakarma",
        description:
            "Explore technical articles on AI, React, Next.js, and full-stack development.",
    },
};

export default function BlogPage() {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    return (
        <main className="bg-[#020617] text-white">
            {/* Hero */}
            <section className="relative overflow-hidden pt-28 pb-20">
                {/* Glow */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-[-35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />
                    <div className="absolute right-[-10%] bottom-[-30%] h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[160px]" />
                </div>

                <div className="mx-auto max-w-6xl px-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-cyan-300 backdrop-blur">
                        <span aria-hidden="true">✍️</span> Developer Blog
                    </span>

                    <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Blog
                        </span>{" "}
                        & Insights
                    </h1>

                    <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-400">
                        Deep dives into AI, web development, architecture
                        patterns, and lessons from building production
                        applications.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-32">
                <div className="mx-auto max-w-6xl px-6">
                    {/* JSON-LD structured data */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "Blog",
                                name: "SumitXDev Blog",
                                description:
                                    "Technical articles on AI, React, Next.js, and modern web development.",
                                url: `${siteUrl}/blog`,
                                author: {
                                    "@type": "Person",
                                    name: "Sumit Vishwakarma",
                                },
                                blogPost: BLOG_POSTS.map((post) => ({
                                    "@type": "BlogPosting",
                                    headline: post.title,
                                    description: post.description,
                                    datePublished: post.date,
                                    author: {
                                        "@type": "Person",
                                        name: post.author,
                                    },
                                    url: `${siteUrl}/blog/${post.slug}`,
                                })),
                            }),
                        }}
                    />

                    <BlogSearch posts={BLOG_POSTS} />
                </div>
            </section>
        </main>
    );
}
