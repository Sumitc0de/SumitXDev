import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogBySlug, getRelatedPosts } from "@/data/blogs";
import BlogCard from "@/components/blog/BlogCard";
import LikeButton from "@/components/blog/LikeButton";
import ShareButtons from "@/components/blog/ShareButtons";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://sumit-x-dev.vercel.app";

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            url: `/blog/${post.slug}`,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [post.thumbnail],
        },
        alternates: {
            canonical: `${siteUrl}/blog/${post.slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug, 2);
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <>
            <ReadingProgressBar />

            <main className="bg-[#020617] text-white">
                {/* JSON-LD Article structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            headline: post.title,
                            description: post.description,
                            datePublished: post.date,
                            dateModified: post.date,
                            author: {
                                "@type": "Person",
                                name: post.author,
                                url: siteUrl,
                            },
                            publisher: {
                                "@type": "Person",
                                name: post.author,
                            },
                            mainEntityOfPage: {
                                "@type": "WebPage",
                                "@id": `${siteUrl}/blog/${post.slug}`,
                            },
                            image: post.thumbnail.startsWith("http")
                                ? post.thumbnail
                                : `${siteUrl}${post.thumbnail}`,
                            wordCount: post.content.split(/\s+/).length,
                            timeRequired: `PT${post.readingTime}M`,
                            keywords: post.tags.join(", "),
                        }),
                    }}
                />

                {/* Hero */}
                <section className="relative overflow-hidden pt-28 pb-16">
                    {/* Glow */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-[-25%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
                        <div className="absolute right-[-15%] bottom-[-20%] h-[350px] w-[350px] rounded-full bg-purple-600/15 blur-[140px]" />
                    </div>

                    <div className="mx-auto max-w-3xl px-6">
                        {/* Back link */}
                        <Link
                            href="/blog"
                            className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-400"
                        >
                            <svg
                                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to Blog
                        </Link>

                        {/* Tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta row */}
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            {/* Author */}
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-xs font-bold text-black">
                                    SV
                                </div>
                                <span>{post.author}</span>
                            </div>

                            <span className="text-gray-600">·</span>
                            <span>{formattedDate}</span>
                            <span className="text-gray-600">·</span>
                            <span>{post.readingTime} min read</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="pb-16">
                    <div className="mx-auto max-w-3xl px-6">
                        <article
                            className="prose prose-invert prose-lg max-w-none
                                prose-headings:font-bold prose-headings:tracking-tight
                                prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h2:text-white
                                prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-h3:text-gray-200
                                prose-p:text-gray-300 prose-p:leading-relaxed
                                prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-white
                                prose-code:rounded-md prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-cyan-300 prose-code:before:content-none prose-code:after:content-none
                                prose-pre:rounded-xl prose-pre:border prose-pre:border-white/10 prose-pre:bg-[#0a0f1e] prose-pre:shadow-xl
                                prose-ul:text-gray-300 prose-ol:text-gray-300
                                prose-li:marker:text-cyan-400"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </section>

                {/* Like & Share */}
                <section className="border-t border-white/10 py-8">
                    <div className="mx-auto max-w-3xl px-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <LikeButton slug={post.slug} />
                            <ShareButtons
                                title={post.title}
                                slug={post.slug}
                            />
                        </div>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="border-t border-white/10 py-20">
                        <div className="mx-auto max-w-6xl px-6">
                            <h2 className="mb-10 text-2xl font-bold">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                {relatedPosts.map((related) => (
                                    <BlogCard
                                        key={related.slug}
                                        slug={related.slug}
                                        title={related.title}
                                        description={related.description}
                                        date={related.date}
                                        readingTime={related.readingTime}
                                        tags={related.tags}
                                        thumbnail={related.thumbnail}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}
