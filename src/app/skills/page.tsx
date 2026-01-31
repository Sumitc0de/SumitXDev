"use client";

import { useEffect, useState, useRef } from "react";
import SkillLayer from "@/components/SkillLayer";
import { skillLayers } from "@/data/skillLayers";


const LAYERS: ("core" | "depth" | "explore")[] = ["core", "depth", "explore"];

export default function SkillsPage() {
  const [activeLayer, setActiveLayer] =
    useState<"core" | "depth" | "explore">("core");



  const autoRotateRef = useRef(true);
  const indexRef = useRef(0);

  /* 🔁 AUTO ROTATION */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoRotateRef.current) return;

      indexRef.current = (indexRef.current + 1) % LAYERS.length;
      setActiveLayer(LAYERS[indexRef.current]);
    }, 4500); // slow & premium

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
    <main className="bg-[#020617] text-white">

      {/* HERO */}
      <section className="py-28">
        <div className="mx-auto flex-col flex items-center max-w-6xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Skill <span className="text-cyan-400">Stack</span>
          </h1>
          <p className="mt-6 max-w-3xl text-gray-400 text-lg">
            A layered system view of my production skills, mastery in progress,
            and future explorations.
          </p>
        </div>
      </section>

      {/* STACK */}
      <section
        className="relative py-24"
        onMouseEnter={pauseRotation}
        onMouseLeave={resumeRotation}
      >
        <div className="mx-auto max-w-5xl px-6 space-y-8">

            {/* CORE */}
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

            {/* DEPTH */}
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

          {/* EXPLORATION */}
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
