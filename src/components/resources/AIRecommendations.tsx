"use client";

import { useEffect, useState } from "react";
import { Resource } from "@/data/resources";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function AIRecommendations() {
  const [recommendations, setRecommendations] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await fetch("/api/resources/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ context: "General web development and AI integration" }),
        });
        const data = await res.json();
        if (data.results) {
          setRecommendations(data.results);
        }
      } catch (error) {
        console.error("Failed to load recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-6 text-purple-400">
          <Sparkles className="animate-pulse" />
          <h2 className="text-2xl font-bold text-white">🤖 Analyzing your profile...</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 bg-white/5 animate-pulse rounded-2xl border border-white/10" />
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) return null;

  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 py-16 mt-8 border-t border-white/10">
      {/* Decorative bg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
            <Sparkles size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Recommended for You
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((resource, idx) => (
          <motion.a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            key={resource.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group block p-6 rounded-2xl bg-linear-to-br from-[#0f172a] to-[#020617] border border-purple-500/20 hover:border-purple-400/60 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-full bg-white/5 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <BookOpen size={20} />
              </div>
              <ArrowRight size={20} className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {resource.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2">
              {resource.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
