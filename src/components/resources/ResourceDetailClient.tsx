"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Tag,
  Sparkles,
  Share2,
  Check,
  BookOpen,
  ArrowRight,
  Link2,
} from "lucide-react";
import { Resource, getRelatedResources } from "@/data/resources";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  resource: Resource;
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

export default function ResourceDetailClient({ resource }: Props) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const relatedResources = getRelatedResources(resource, 3);

  const handleShare = async () => {
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
          console.error("Share failed:", err);
        }
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Anti-gravity floating animation
  const floatingAnimation = {
    y: ["-2%", "2%"],
    rotate: [-0.5, 0.5],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden flex flex-col pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-120 h-120 bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen" />

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_10px_#67e8f9]"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [null, Math.random() * -500],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="relative z-20 container mx-auto px-6 mb-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
              <ArrowLeft size={18} />
            </div>
            <span className="font-medium tracking-wide uppercase text-sm">Return to Vault</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Share */}
            <button
              onClick={handleShare}
              className={`p-3 rounded-full border transition-all duration-300 ${
                copied
                  ? "bg-green-500/20 border-green-500/50 text-green-400"
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30"
              }`}
              title={copied ? "Copied!" : "Share"}
            >
              {copied ? <Check size={18} /> : <Share2 size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 flex-1 flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 text-cyan-400">
            <Sparkles size={16} />
            <span className="text-sm font-semibold tracking-widest uppercase">
              {resource.type === "pdf" ? "Document" : "Visual"} Resource
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-4">
            {resource.title}
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {resource.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {resource.tags.map((tag) => (
              <Link
                key={tag}
                href={`/resources?tag=${encodeURIComponent(tag)}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                <Tag size={11} />
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Preview Container with Anti-Gravity */}
        <motion.div
          animate={floatingAnimation}
          whileHover={{ scale: 1.01, y: -5, transition: { duration: 0.3 } }}
          className="relative w-full max-w-5xl mx-auto aspect-3/4 sm:aspect-4/3 md:aspect-video rounded-2xl md:rounded-3xl z-10 group"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Glassmorphism Card */}
          <div className="relative w-full h-full rounded-3xl border border-white/20 bg-[#0B1120]/60 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col">
            {/* Header Bar */}
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
              {resource.type === "image" ? (
                <Image
                  src={resource.thumbnail}
                  alt={resource.title}
                  fill
                  className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
              ) : resource.type === "pdf" ? (
                <iframe
                  src={resource.url}
                  title={`${resource.title} preview`}
                  className="w-full h-full border-none"
                  loading="lazy"
                />
              ) : (
                <div className="text-gray-400 flex flex-col items-center gap-3">
                  <ExternalLink size={48} className="text-purple-500/50" />
                  <span>External Resource Preview</span>
                </div>
              )}

              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px] pointer-events-none opacity-20" />
            </div>
          </div>

          {/* Floating Action Buttons */}
          <motion.div
            className="absolute -right-2 md:-right-6 bottom-4 md:bottom-10 flex flex-col gap-3 md:gap-4 z-30"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Download */}
            <a
              href={resource.url}
              download
              className="group/btn relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-purple-500/20 border border-purple-400/50 text-purple-400 backdrop-blur-xl hover:bg-purple-400 hover:text-white transition-all shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-110"
            >
              <Download className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 text-xs font-semibold text-white opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Download
              </span>
            </a>

            {/* Open in new tab */}
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 backdrop-blur-xl hover:bg-cyan-400 hover:text-white transition-all shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-110"
            >
              <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 text-xs font-semibold text-white opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Open in Tab
              </span>
            </a>
          </motion.div>

          {/* Floating Tags - Hidden on small mobile, visible on tablet+ */}
          <div className="hidden sm:flex absolute -left-2 md:-left-4 -bottom-6 flex-col gap-3 z-30">
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

        {/* Resource Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16 mb-12 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
              {resource.category}
            </span>
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-1.5">
            <Download size={14} />
            {(resource.downloads / 1000).toFixed(1)}k downloads
          </div>
          <div className="text-sm text-gray-500">
            {resource.type === "pdf" ? "📄 PDF Document" : "🖼️ Image Resource"}
          </div>
        </motion.div>

        {/* Related Resources Section */}
        {relatedResources.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-6xl mx-auto mt-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Related Resources</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedResources.map((related, idx) => (
                <Link
                  href={`/resources/${related.slug}`}
                  key={related.id}
                  className="group block"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                    className="relative p-6 rounded-2xl bg-linear-to-br from-[#0f172a] to-[#020617] border border-white/10 hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute -inset-full bg-linear-to-r from-cyan-500/5 to-purple-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Type Icon Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`p-2 rounded-xl bg-linear-to-br ${TYPE_CONFIG[related.type].gradient} border ${TYPE_CONFIG[related.type].borderColor}`}
                        >
                          {(() => {
                            const Icon = TYPE_CONFIG[related.type].icon;
                            return <Icon size={16} className={TYPE_CONFIG[related.type].iconColor} />;
                          })()}
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                        />
                      </div>

                      <div className="flex items-start justify-between mb-3">
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
                          {related.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2">{related.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
