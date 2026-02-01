"use client";

import { useEffect, useState, useRef } from "react";
import SkillLayer from "@/components/SkillLayer";
import { skillLayers } from "@/data/skillLayers";

type SkillType = "core" | "depth" | "explore";

const LAYERS: SkillType[] = ["core", "depth", "explore"];

export default function SkillsPage() {
  const [activeLayer, setActiveLayer] = useState<SkillType>("core");

  const autoRotateRef = useRef(true);
  const indexRef = useRef(0);

  /* 🔁 AUTO ROTATION (premium, subtle) */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoRotateRef.current) return;

      indexRef.current = (indexRef.current + 1) % LAYERS.length;
      setActiveLayer(LAYERS[indexRef.current]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  /* 🛑 PAUSE ON INTERACTION */
  const pauseRotation = () => {
    autoRotateRef.current = false;
  };

  const resumeRotation = () => {
    autoRotateRef.current = true;
  };

  return (
    <main
      className="bg-[#020617] text-white"
      aria-labelledby="skills-heading"
    >
      {/* HERO */}
      <section className="py-28 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h1
            id="skills-heading"
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Full-Stack <span className="text-cyan-400">Skill Stack</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            A structured view of my <strong>core full-stack skills</strong>,
            deeper technical expertise, and technologies I’m actively
            exploring—focused on building scalable web and AI-powered SaaS
            products.
          </p>
        </div>
      </section>

      {/* SKILL LAYERS */}
      <section
        className="relative py-24"
        onMouseEnter={pauseRotation}
        onMouseLeave={resumeRotation}
        aria-label="Skill layers"
      >
        <div className="mx-auto max-w-5xl px-6 space-y-10">
          {/* CORE SKILLS */}
          <SkillLayer
            {...skillLayers.core}
            color="border-cyan-400/40 text-cyan-300"
            active={activeLayer === "core"}
            onHover={() => {
              pauseRotation();
              setActiveLayer("core");
            }}
            onLeave={resumeRotation}
          />

          {/* DEPTH SKILLS */}
          <SkillLayer
            {...skillLayers.depth}
            color="border-yellow-400/30 text-yellow-300"
            active={activeLayer === "depth"}
            onHover={() => {
              pauseRotation();
              setActiveLayer("depth");
            }}
            onLeave={resumeRotation}
          />

          {/* EXPLORATION SKILLS */}
          <SkillLayer
            {...skillLayers.explore}
            color="border-purple-400/30 text-purple-300"
            active={activeLayer === "explore"}
            onHover={() => {
              pauseRotation();
              setActiveLayer("explore");
            }}
            onLeave={resumeRotation}
          />
        </div>
      </section>
    </main>
  );
}
