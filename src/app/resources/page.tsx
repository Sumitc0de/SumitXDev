"use client";

import { useState } from "react";
import ResourceHeader from "@/components/resources/ResourceHeader";
import ResourceGrid from "@/components/resources/ResourceGrid";
import AIRecommendations from "@/components/resources/AIRecommendations";
import TrendingSection from "@/components/resources/TrendingSection";
import { RESOURCES, Resource, ResourceCategory } from "@/data/resources";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>("All");
  const [displayedResources, setDisplayedResources] = useState<(Resource & { aiDescription?: string })[]>(RESOURCES);
  const [isSearching, setIsSearching] = useState(false);
  const [isAiResult, setIsAiResult] = useState(false);

  // Handle traditional category filtering
  const handleCategoryChange = (category: ResourceCategory) => {
    setActiveCategory(category);
    setIsAiResult(false);
    
    if (category === "All") {
      setDisplayedResources(RESOURCES);
    } else {
      setDisplayedResources(RESOURCES.filter((r) => r.category === category));
    }
  };

  // Handle AI Search via Groq API
  const handleSearch = async (query: string) => {
    setIsSearching(true);
    setIsAiResult(true);

    try {
      const res = await fetch("/api/resources/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, category: activeCategory }),
      });

      const data = await res.json();
      
      if (data.results) {
        setDisplayedResources(data.results);
      }
    } catch (error) {
      console.error("Search failed:", error);
      // Fallback: simple text search if API fails
      setDisplayedResources(
        RESOURCES.filter(r => 
          r.title.toLowerCase().includes(query.toLowerCase()) || 
          r.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20 selection:bg-cyan-500/30">
      <ResourceHeader onSearch={handleSearch} isSearching={isSearching} />
      
      <TrendingSection />

      <div id="resource-grid" className="scroll-mt-32">
        <ResourceGrid 
          resources={displayedResources} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange}
          isAiResult={isAiResult}
        />
      </div>

      <AIRecommendations />

      {/* Footer text specific to resources */}
      <div className="w-full text-center py-12 text-sm text-gray-500 border-t border-white/5 mt-12">
        Powered by Groq AI ⚡ | Made by aihackwithsumit 🚀
      </div>
    </main>
  );
}
