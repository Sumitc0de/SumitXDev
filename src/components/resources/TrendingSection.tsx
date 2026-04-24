import { RESOURCES } from "@/data/resources";
import { Flame, TrendingUp, Download } from "lucide-react";

export default function TrendingSection() {
  // Sort by downloads
  const topDownloaded = [...RESOURCES].sort((a, b) => b.downloads - a.downloads).slice(0, 3);
  const trending = [...RESOURCES].filter(r => r.featured).slice(0, 3);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Most Downloaded */}
        <div className="bg-[#0B1120]/80 backdrop-blur-md rounded-3xl border border-white/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-orange-500/20 rounded-xl text-orange-500">
              <Download size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Most Downloaded</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {topDownloaded.map((resource, idx) => (
              <a href={resource.url} target="_blank" rel="noopener noreferrer" key={resource.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="font-mono text-2xl text-gray-600 font-bold group-hover:text-orange-500 transition-colors">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">{resource.title}</h3>
                  <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Download size={12} /> {(resource.downloads / 1000).toFixed(1)}k
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Trending Now */}
        <div className="bg-[#0B1120]/80 backdrop-blur-md rounded-3xl border border-white/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-cyan-500/20 rounded-xl text-cyan-400">
              <TrendingUp size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Trending Now</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {trending.map((resource) => (
              <a href={resource.url} target="_blank" rel="noopener noreferrer" key={resource.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group border border-transparent hover:border-cyan-500/30">
                <div>
                  <h3 className="text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">{resource.title}</h3>
                  <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-gray-300">{resource.category}</span>
                </div>
                <Flame className="text-orange-500/50 group-hover:text-orange-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
