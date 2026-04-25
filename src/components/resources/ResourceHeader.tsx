"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Tag, X } from "lucide-react";
import { ALL_TAGS } from "@/data/resources";

type ResourceHeaderProps = {
  onSearch: (query: string) => void;
  isSearching: boolean;
  activeTag?: string;
  onTagClick?: (tag: string) => void;
};

export default function ResourceHeader({
  onSearch,
  isSearching,
  activeTag,
  onTagClick,
}: ResourceHeaderProps) {
  const [query, setQuery] = useState("");
  const [showAllTags, setShowAllTags] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const displayedTags = showAllTags ? ALL_TAGS : ALL_TAGS.slice(0, 10);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-16 px-4 text-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
      >
        CodeMinded{" "}
        <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Vault 🚀
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
      >
        AI-powered resources to level up your coding journey. Search for roadmaps, cheatsheets, and
        tools using natural language.
      </motion.p>

      {/* AI Search Bar */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onSubmit={handleSearch}
        className="relative w-full max-w-2xl group mb-8"
      >
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
        <div className="relative flex items-center bg-[#0f172a] rounded-xl p-2 border border-white/10 shadow-2xl">
          <div className="pl-4 pr-2 text-cyan-400">
            {isSearching ? (
              <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search size={24} />
            )}
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Ask AI... (e.g. "best roadmap for React")'
            className="w-full bg-transparent border-none outline-none text-white px-4 py-3 text-lg placeholder:text-gray-500"
          />
          <button
            type="submit"
            disabled={isSearching || !query.trim()}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition disabled:opacity-50 disabled:hover:scale-100"
          >
            <Sparkles size={18} />
            Search
          </button>
        </div>
      </motion.form>

      {/* Tag Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center gap-4 w-full max-w-3xl"
      >

        {/* Tag pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {displayedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick?.(tag)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTag === tag
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                  : "bg-white/5 text-gray-500 border border-white/5 hover:bg-white/10 hover:text-gray-300"
              }`}
            >
              {activeTag === tag ? <X size={10} /> : <Tag size={10} />}
              {tag}
            </button>
          ))}
          {!showAllTags && ALL_TAGS.length > 10 && (
            <button
              onClick={() => setShowAllTags(true)}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-500 border border-white/5 hover:bg-white/10 hover:text-gray-300 transition-all"
            >
              +{ALL_TAGS.length - 10} more
            </button>
          )}
          {showAllTags && (
            <button
              onClick={() => setShowAllTags(false)}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-500 border border-white/5 hover:bg-white/10 hover:text-gray-300 transition-all"
            >
              Show less
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
