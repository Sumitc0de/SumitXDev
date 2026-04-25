"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Resource, ResourceCategory, CATEGORIES } from "@/data/resources";
import {
  Download,
  ExternalLink,
  Sparkles,
  Tag,
  Share2,
  Check,
  X,
  FileText,
  Image as ImageIcon,
  Link2,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type ResourceGridProps = {
  resources: (Resource & { aiDescription?: string })[];
  activeCategory: string;
  onCategoryChange: (category: ResourceCategory) => void;
  isAiResult?: boolean;
  activeTag?: string;
  onTagClick?: (tag: string) => void;
  onClearFilters?: () => void;
};

const TYPE_CONFIG = {
  pdf: {
    icon: FileText,
    label: "PDF",
    gradient: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400",
    borderColor: "border-red-500/20",
  },
  image: {
    icon: ImageIcon,
    label: "Image",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  link: {
    icon: Link2,
    label: "Link",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20",
  },
};

export default function ResourceGrid({
  resources,
  activeCategory,
  onCategoryChange,
  isAiResult,
  activeTag,
  onTagClick,
  onClearFilters,
}: ResourceGridProps) {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleShare = async (resource: Resource) => {
    const shareUrl = `${window.location.origin}/resources/${resource.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: resource.title,
          text: resource.description,
          url: shareUrl,
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus(resource.id);
      setTimeout(() => setCopyStatus(null), 2000);
    }
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

      {/* Active Filter Indicators */}
      {(isAiResult || activeTag) && (
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {isAiResult && (
            <div className="flex items-center gap-2 text-cyan-400 font-medium">
              <Sparkles size={20} />
              <span>AI Search Results</span>
            </div>
          )}
          {activeTag && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-sm text-cyan-400">
              <Tag size={14} />
              <span>{activeTag}</span>
              <button
                onClick={() => onTagClick?.(activeTag)}
                className="ml-1 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          )}
          {onClearFilters && (
            <button
              onClick={onClearFilters}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {resources.map((resource, idx) => {
            const typeConfig = TYPE_CONFIG[resource.type];
            const TypeIcon = typeConfig.icon;

            return (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between bg-[#0B1120] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-6 flex flex-col flex-1">
                  {/* Top row: type icon + category + actions */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Type icon */}
                      <div
                        className={`p-2.5 rounded-xl bg-gradient-to-br ${typeConfig.gradient} border ${typeConfig.borderColor}`}
                      >
                        <TypeIcon size={18} className={typeConfig.iconColor} />
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
                        {resource.category}
                      </span>
                      {resource.featured && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/15 rounded-full border border-cyan-400/30">
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Share */}
                      <button
                        onClick={() => handleShare(resource)}
                        className={`p-1.5 rounded-full transition-all duration-300 ${
                          copyStatus === resource.id
                            ? "bg-green-500/20 text-green-400"
                            : "bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white"
                        }`}
                        title={copyStatus === resource.id ? "Copied!" : "Share"}
                      >
                        {copyStatus === resource.id ? (
                          <Check size={14} />
                        ) : (
                          <Share2 size={14} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/resources/${resource.slug}`}>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                  </Link>

                  {/* AI Custom Description */}
                  {resource.aiDescription ? (
                    <div className="mb-4 p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-sm text-cyan-100/90 leading-relaxed">
                      <span className="flex items-center gap-1.5 font-medium text-cyan-400 mb-1">
                        <Sparkles size={14} /> AI Insight
                      </span>
                      {resource.aiDescription}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {resource.description}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {resource.tags.slice(0, 4).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => onTagClick?.(tag)}
                        className={`flex items-center gap-1 text-xs px-2 py-1 rounded-md transition-all ${
                          activeTag === tag
                            ? "text-cyan-400 bg-cyan-500/20 border border-cyan-500/30"
                            : "text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white border border-transparent"
                        }`}
                      >
                        <Tag size={9} />
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <div className="text-sm text-gray-500 flex items-center gap-1.5">
                      <Download size={14} />
                      {(resource.downloads / 1000).toFixed(1)}k
                    </div>
                    <Link
                      href={`/resources/${resource.slug}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white hover:bg-cyan-500 hover:text-black transition-colors"
                      title="View Resource"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {resources.length === 0 && (
          <div className="col-span-full py-16 text-center">
            <div className="text-gray-500 text-lg mb-4">No resources found</div>
            <p className="text-gray-600 text-sm mb-6">
              Try another search, category, or tag filter.
            </p>
            {onClearFilters && (
              <button
                onClick={onClearFilters}
                className="px-6 py-2.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-sm font-medium hover:bg-cyan-500/30 transition-all"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
