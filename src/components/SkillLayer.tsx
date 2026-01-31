"use client";

import { motion } from "framer-motion";

export default function SkillLayer({
  title,
  subtitle,
  skills,
  active,
  color,
  onHover,
  onLeave,
  onSkillClick,
}: any) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{
        y: active ? -20 : 0,
        scale: active ? 1 : 0.96,
        filter: active ? "blur(0px)" : "blur(2px)",
        opacity: active ? 1 : 0.6,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={`
        relative rounded-2xl border backdrop-blur-xl p-8
        ${color}
      `}
    >
      {/* glow */}
      {active && (
        <div className="absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-40 bg-current" />
      )}

      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-400">{subtitle}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill: string) => (
          <button
            key={skill}
            onClick={() => onSkillClick(skill)}
            className="
              rounded-full border border-white/20 px-4 py-1.5 text-sm
              transition hover:scale-105 hover:border-white/40
            "
          >
            {skill}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
