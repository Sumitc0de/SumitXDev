"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ResourceHeader from "@/components/resources/ResourceHeader";
import ResourceGrid from "@/components/resources/ResourceGrid";
import TrendingSection from "@/components/resources/TrendingSection";
import { RESOURCES, Resource, ResourceCategory } from "@/data/resources";

export default function ResourcesPageClient() {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get("tag") || "";

  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState(initialTag);
  const [isSearching, setIsSearching] = useState(false);
  const [aiResults, setAiResults] = useState<(Resource & { aiDescription?: string })[] | null>(null);

  // Sync tag from URL params
  useEffect(() => {
    const tag = searchParams.get("tag");
    if (tag) {
      setActiveTag(tag);
      setActiveCategory("All");
    }
  }, [searchParams]);

  // Filtered resources based on category, search, tag, bookmarks
  const displayedResources = useMemo(() => {
    if (aiResults) return aiResults;

    let filtered = [...RESOURCES];

    // Category filter
    if (activeCategory !== "All") {
      filtered = filtered.filter((r) => r.category === activeCategory);
    }

    // Tag filter
    if (activeTag) {
      filtered = filtered.filter((r) => r.tags.includes(activeTag));
    }

    // Local search filter
    if (searchQuery && !aiResults) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery, activeTag, aiResults]);

  const handleCategoryChange = (category: ResourceCategory) => {
    setActiveCategory(category);
    setActiveTag("");
    setAiResults(null);
  };

  const handleTagClick = (tag: string) => {
    setActiveTag((prev) => (prev === tag ? "" : tag));
    setActiveCategory("All");
    setAiResults(null);
  };

  // AI Search via Groq API
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    setAiResults(null);

    try {
      const res = await fetch("/api/resources/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, category: activeCategory }),
      });

      const data = await res.json();

      if (data.results && data.results.length > 0) {
        setAiResults(data.results);
      }
    } catch (error) {
      console.error("AI Search failed, using local search:", error);
      // Falls through to local search via searchQuery state
    } finally {
      setIsSearching(false);
    }
  };

  const handleClearFilters = () => {
    setActiveCategory("All");
    setActiveTag("");
    setSearchQuery("");
    setAiResults(null);
  };

  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20 selection:bg-cyan-500/30">
      <ResourceHeader
        onSearch={handleSearch}
        isSearching={isSearching}
        activeTag={activeTag}
        onTagClick={handleTagClick}
      />

      <TrendingSection />

      <div id="resource-grid" className="scroll-mt-32">
        <ResourceGrid
          resources={displayedResources}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          isAiResult={!!aiResults}
          activeTag={activeTag}
          onTagClick={handleTagClick}
          onClearFilters={handleClearFilters}
        />
      </div>
    </main>
  );
}
