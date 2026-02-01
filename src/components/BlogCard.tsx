"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCard({ blog, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="group relative block overflow-hidden rounded-2xl
        border border-white/10 bg-white/[0.04] p-6
        backdrop-blur-xl transition-all duration-300
        hover:-translate-y-1 hover:border-cyan-400/40"
      >
        {/* Glow layer */}
        <div className="pointer-events-none absolute inset-0 
          opacity-0 transition group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br 
            from-cyan-400/10 via-transparent to-purple-400/10" />
        </div>

        {/* Meta */}
        <div className="relative z-10 flex justify-between text-xs text-white/50">
          <span>{blog.category}</span>
          <span>{blog.readTime}</span>
        </div>

        {/* Title */}
        <h2 className="relative z-10 mt-4 text-xl font-semibold leading-snug
          transition-colors group-hover:text-cyan-400">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="relative z-10 mt-3 text-sm text-white/60 line-clamp-2">
          {blog.description}
        </p>

        {/* Footer */}
        <div className="relative z-10 mt-6 flex items-center justify-between text-xs">
          <span className="text-white/40">
            NODE • {blog.date}
          </span>

          <span className="flex items-center gap-1 text-cyan-400
            opacity-0 transition group-hover:opacity-100">
            ACCESS LOG
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
