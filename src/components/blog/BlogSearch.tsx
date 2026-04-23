"use client";

import { useState, useMemo } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { BlogPost, getAllTags } from "@/data/blogs";

type BlogSearchProps = {
    posts: BlogPost[];
};

export default function BlogSearch({ posts }: BlogSearchProps) {
    const [search, setSearch] = useState("");
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const allTags = useMemo(() => getAllTags(), []);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesSearch =
                search === "" ||
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.description.toLowerCase().includes(search.toLowerCase()) ||
                post.tags.some((tag) =>
                    tag.toLowerCase().includes(search.toLowerCase())
                );

            const matchesTag = !activeTag || post.tags.includes(activeTag);

            return matchesSearch && matchesTag;
        });
    }, [posts, search, activeTag]);

    return (
        <div>
            {/* Search & Filters */}
            <div className="mb-12 space-y-6">
                {/* Search Input */}
                <div className="relative max-w-xl">
                    <svg
                        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white placeholder-gray-500 backdrop-blur transition focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/20"
                    />
                </div>

                {/* Tag Filters */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveTag(null)}
                        className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200
                            ${
                                !activeTag
                                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md shadow-cyan-500/20"
                                    : "border border-white/10 bg-white/5 text-gray-400 hover:border-cyan-400/30 hover:text-cyan-400"
                            }`}
                    >
                        All
                    </button>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() =>
                                setActiveTag(activeTag === tag ? null : tag)
                            }
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200
                                ${
                                    activeTag === tag
                                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md shadow-cyan-500/20"
                                        : "border border-white/10 bg-white/5 text-gray-400 hover:border-cyan-400/30 hover:text-cyan-400"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results */}
            {filteredPosts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <svg
                        className="mb-4 h-16 w-16 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                        />
                    </svg>
                    <p className="text-lg font-medium text-gray-400">
                        No articles found
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                        Try a different search or filter
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {filteredPosts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            readingTime={post.readingTime}
                            tags={post.tags}
                            thumbnail={post.thumbnail}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
