"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, Image as ImageIcon, Tag, Sparkles } from "lucide-react";
import { Resource } from "@/data/resources";
import Image from "next/image";

type ResourcePreviewProps = {
  resource: Resource;
};

export default function ResourcePreview({ resource }: ResourcePreviewProps) {
  // Anti-gravity animation settings
  const floatingAnimation = {
    y: ["-2%", "2%"],
    rotate: [-1, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center p-4 min-h-[70vh]">
      
      {/* Title & Floating Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 z-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 text-cyan-400">
          <Sparkles size={16} />
          <span className="text-sm font-semibold tracking-widest uppercase">Preview Environment</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          {resource.title}
        </h1>
      </motion.div>

      {/* Main Preview Container with Anti-Gravity */}
      <motion.div
        animate={floatingAnimation}
        whileHover={{ scale: 1.02, y: -10, transition: { duration: 0.3 } }}
        className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl z-10 group"
      >
        {/* Glow behind the card */}
        <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Glassmorphism Card */}
        <div className="relative w-full h-full rounded-3xl border border-white/20 bg-[#0B1120]/60 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col">
          
          {/* Header Bar inside card */}
          <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 backdrop-blur-md">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            </div>
            <div className="mx-auto flex items-center gap-2 text-xs text-gray-400 font-mono bg-black/30 px-4 py-1 rounded-full border border-white/5">
              {resource.type === "pdf" ? <FileText size={12} /> : <ImageIcon size={12} />}
              {resource.type === "pdf" ? "document_viewer.exe" : "image_preview.exe"}
            </div>
          </div>

          {/* Content Area */}
          <div className="relative flex-1 w-full h-full bg-black/40 overflow-hidden flex items-center justify-center">
            {resource.type === "image" && resource.thumbnail ? (
              <Image 
                src={resource.thumbnail} 
                alt={resource.title} 
                fill 
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                priority
              />
            ) : resource.type === "pdf" ? (
              // Note: Using an iframe for PDF. This requires a real PDF URL to work nicely.
              // For demonstration, we use a placeholder text if URL is not a direct PDF.
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                 <FileText size={64} className="mb-4 text-cyan-500/50 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-pulse" />
                 <p className="text-lg font-mono">Loading PDF Stream...</p>
                 <a href={resource.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-cyan-400 hover:text-cyan-300 underline underline-offset-4 text-sm">
                   Open External Source
                 </a>
              </div>
            ) : (
              <div className="text-gray-400 flex flex-col items-center gap-3">
                <ExternalLink size={48} className="text-purple-500/50" />
                <span>External Resource Preview Not Available</span>
              </div>
            )}
            
            {/* Scanline overlay for futuristic effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
          </div>
        </div>

        {/* Floating Action Buttons */}
        <motion.div 
          className="absolute -right-6 bottom-10 flex flex-col gap-4 z-30"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            download={`${resource.title.replace(/\s+/g, "_")}.${resource.type === "pdf" ? "pdf" : "jpg"}`}
            className="group/btn relative flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/50 text-purple-400 backdrop-blur-xl hover:bg-purple-400 hover:text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-110"
          >
            <Download size={24} />
            <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 text-xs font-semibold text-white opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Extract Data
            </span>
          </a>
        </motion.div>

        {/* Floating Tags */}
        <div className="absolute -left-4 -bottom-6 flex flex-col gap-3 z-30">
          {resource.tags.slice(0, 3).map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f172a]/80 border border-white/10 backdrop-blur-xl text-sm font-medium text-gray-300 shadow-xl hover:border-cyan-500/50 transition-colors"
            >
              <Tag size={14} className="text-cyan-500" />
              {tag}
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}
