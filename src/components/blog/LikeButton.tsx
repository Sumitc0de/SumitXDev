"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LikeButtonProps = {
    slug: string;
};

export default function LikeButton({ slug }: LikeButtonProps) {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedLikes = localStorage.getItem(`blog-likes-${slug}`);
        const storedLiked = localStorage.getItem(`blog-liked-${slug}`);
        if (storedLikes) setCount(parseInt(storedLikes, 10));
        if (storedLiked === "true") setLiked(true);
    }, [slug]);

    const handleLike = () => {
        const newLiked = !liked;
        const newCount = newLiked ? count + 1 : Math.max(0, count - 1);

        setLiked(newLiked);
        setCount(newCount);

        localStorage.setItem(`blog-likes-${slug}`, String(newCount));
        localStorage.setItem(`blog-liked-${slug}`, String(newLiked));
    };

    if (!mounted) {
        return (
            <button
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 backdrop-blur transition"
                disabled
            >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
                <span>0</span>
            </button>
        );
    }

    return (
        <motion.button
            onClick={handleLike}
            whileTap={{ scale: 0.9 }}
            className={`group/like flex items-center gap-2 rounded-xl border px-4 py-2 text-sm backdrop-blur transition-all duration-300
                ${
                    liked
                        ? "border-red-400/30 bg-red-500/10 text-red-400"
                        : "border-white/10 bg-white/5 text-gray-400 hover:border-red-400/20 hover:text-red-300"
                }`}
        >
            <AnimatePresence mode="wait">
                <motion.svg
                    key={liked ? "filled" : "outline"}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="h-5 w-5"
                    fill={liked ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={liked ? 0 : 1.5}
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </motion.svg>
            </AnimatePresence>

            {/* Burst particles on like */}
            {liked && (
                <motion.span
                    className="absolute -inset-1 rounded-xl"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background:
                            "radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)",
                    }}
                />
            )}

            <span className="min-w-[1ch] tabular-nums">{count}</span>
        </motion.button>
    );
}
