"use client";

import { motion } from "framer-motion";
import { Resource, ResourceCategory } from "@/data/resources";
import { Download, ExternalLink, Sparkles, Tag, Heart, Share2 } from "lucide-react";
import { useState } from "react";

type ResourceGridProps = {
  resources: (Resource & { aiDescription?: string })[];
  activeCategory: string;
  onCategoryChange: (category: ResourceCategory) => void;
  isAiResult?: boolean;
};

const CATEGORIES: ResourceCategory[] = ["All", "Cheatsheets", "Roadmaps", "AI Tools", "Notes"];

export default function ResourceGrid({ resources, activeCategory, onCategoryChange, isAiResult }: ResourceGridProps) {
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      {/* Category Filter */}
      {!isAiResult && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat as ResourceCategory)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {isAiResult && (
        <div className="flex items-center gap-2 mb-8 text-cyan-400 font-medium">
          <Sparkles size={20} />
          <span>AI Search Results</span>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, idx) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative flex flex-col justify-between bg-[#0B1120] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute -inset-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
                  {resource.category}
                </span>
                <div className="flex gap-2">
                  <button onClick={() => toggleLike(resource.id)} className={`p-2 rounded-full bg-white/5 transition hover:bg-white/10 ${liked[resource.id] ? "text-pink-500" : "text-gray-400"}`}>
                    <Heart size={16} fill={liked[resource.id] ? "currentColor" : "none"} />
                  </button>
                  <button className="p-2 rounded-full bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {resource.title}
              </h3>

              {/* AI Custom Description Injection */}
              {resource.aiDescription ? (
                <div className="mb-4 p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-sm text-cyan-100/90 leading-relaxed">
                  <span className="flex items-center gap-1.5 font-medium text-cyan-400 mb-1">
                    <Sparkles size={14} /> AI Insight
                  </span>
                  {resource.aiDescription}
                </div>
              ) : (
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {resource.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {resource.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-md">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
              <div className="text-sm text-gray-500 flex items-center gap-1.5">
                <Download size={14} />
                {(resource.downloads / 1000).toFixed(1)}k
              </div>
              <div className="flex gap-3">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white hover:bg-cyan-500 hover:text-black transition-colors"
                  title="View Resource"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {resources.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500">
            No resources found. Try another search or category.
          </div>
        )}
      </div>
    </div>
  );
}
