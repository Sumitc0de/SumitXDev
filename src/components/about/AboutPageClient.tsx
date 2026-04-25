"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2, Server, Rocket, Brain, TrendingUp, Video, Sparkles,
  MapPin, GraduationCap, ExternalLink, ArrowRight, Train, Lightbulb,
  Zap, Target, Layout, Database, Wrench, Globe,
} from "lucide-react";
import { PROJECTS_BUILT } from "@/constants/system";

// ── Animation Variants ──
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatingAnimation = {
  y: ["-3%", "3%"],
  transition: { duration: 6, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const },
};

// ── Section Wrapper ──
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative w-full max-w-6xl mx-auto px-6 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="flex flex-col items-center text-center mb-12 md:mb-16">
      <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 mb-4">
        <Icon size={28} className="text-cyan-400" />
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-400 max-w-2xl text-lg">{subtitle}</p>}
    </motion.div>
  );
}

// ── Data ──
const frontendSkills = ["React.js", "React Native", "Next.js", "Tailwind CSS", "Framer Motion"];
const backendSkills = ["Node.js", "Express.js", "Auth Systems (JWT)"];

const techStack = [
  { label: "Core", icon: Layout, items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"] },
  { label: "Backend", icon: Server, items: ["Node.js", "Express.js"] },
  { label: "Languages", icon: Code2, items: ["JavaScript", "Python", "C++", "C"] },
  { label: "Databases", icon: Database, items: ["MongoDB", "MySQL"] },
  { label: "Tools", icon: Wrench, items: ["Git", "GitHub", "Vercel", "Render", "Postman", "Cloudinary", "ImageKit", "Neon"] },
];

const buildingProjects = [
  { title: "SkillBridge", desc: "Learning + opportunity platform connecting students with real projects." },
  { title: "SkillSynker", desc: "Skill connection ecosystem for developers to find collaborators." },
  { title: "AI Tools Website", desc: "Curated collection of useful AI-powered tools for productivity." },
  { title: "SnapPrompt", desc: "Prompt library & marketplace for AI creators and developers." },
  { title: "AI Assistant", desc: "Intelligent productivity system — currently in planning phase.", badge: "Planning" },
];

const currentFocus = [
  { text: "Backend & advanced architecture", icon: Server },
  { text: "Scalable APIs & systems", icon: Globe },
  { text: "DSA in C++", icon: Code2 },
  { text: "Python for Gen AI", icon: Brain },
  { text: "AI tools & integrations", icon: Zap },
];

const beyondCode = [
  { text: "Self-development & mindset growth", icon: Lightbulb },
  { text: "Exploring new tech & ideas", icon: Sparkles },
  { text: "Train enthusiast — built Indian train models", icon: Train },
  { text: "Passion for building startups", icon: Rocket },
];

export default function AboutPageClient() {
  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden pt-24 pb-20">
      {/* ── Background Effects ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[140px]" />
      </div>

      {/* ═══════════════ 1. HERO ═══════════════ */}
      <Section>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          {/* Floating badge */}
          <motion.div animate={floatingAnimation} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm font-semibold tracking-widest uppercase text-cyan-400">Developer & AI Builder</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            <span className="text-white">Hey, I&apos;m </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Sumit</span>
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white/90 mt-1">
            Vishwakarma
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6 text-gray-400 text-sm">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-cyan-400" /> Mumbai, India</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span className="flex items-center gap-1.5"><GraduationCap size={14} className="text-purple-400" /> B.E. Computer Engineering</span>
          </div>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building modern, scalable web apps and AI-powered tools with a strong focus on
            <span className="text-cyan-400"> performance</span>,
            <span className="text-purple-400"> UI/UX</span>, and
            <span className="text-blue-400"> real-world impact</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/projects" className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
              Contact Me
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════════ 2. WHAT I DO ═══════════════ */}
      <Section>
        <SectionTitle icon={Target} title="What I Do" subtitle="I build modern, scalable web apps and AI-powered tools with real-world impact." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {[
            { title: "Frontend", icon: Layout, color: "cyan", skills: frontendSkills },
            { title: "Backend", icon: Server, color: "purple", skills: backendSkills },
          ].map((card, idx) => (
            <motion.div key={card.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}
              className="group relative p-8 rounded-2xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 overflow-hidden">
              <div className="absolute -inset-full bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-${card.color}-500/20 border border-${card.color}-500/30 mb-4`}>
                  <card.icon size={24} className={`text-${card.color}-400`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">💻 {card.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {card.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ 3. TECH STACK ═══════════════ */}
      <Section>
        <SectionTitle icon={Wrench} title="Tech Stack" subtitle="The technologies and tools I use to build modern digital products." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
          {techStack.map((group, idx) => (
            <motion.div key={group.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}
              className="group p-6 rounded-2xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <group.icon size={20} className="text-cyan-400" />
                <h3 className="text-lg font-bold text-white">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ 4. WHAT I'M BUILDING ═══════════════ */}
      <Section>
        <SectionTitle icon={Rocket} title="What I'm Building" subtitle="I focus on building products, not just projects." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
          {buildingProjects.map((project, idx) => (
            <motion.div key={project.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
              <div className="absolute -inset-full bg-gradient-to-r from-purple-500/5 to-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  {project.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-yellow-500/15 rounded-full border border-yellow-500/30">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ 5. CURRENT FOCUS ═══════════════ */}
      <Section>
        <SectionTitle icon={TrendingUp} title="Current Focus" subtitle="What I'm actively working on and learning right now." />
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          {currentFocus.map((item, idx) => (
            <motion.div key={item.text} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#0B1120]/80 border border-white/10 hover:border-cyan-500/30 hover:bg-white/5 transition-all group">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all">
                <item.icon size={18} className="text-cyan-400" />
              </div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ 6. BUILDING IN PUBLIC ═══════════════ */}
      <Section>
        <SectionTitle icon={Video} title="Building in Public" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="relative max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#020617] border border-white/10 text-center overflow-hidden z-10">
          <div className="absolute -inset-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-3xl opacity-50" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              @AIHackWithSumit
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Sharing my journey through coding, AI tools, productivity, and real developer growth.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Coding Journey", "AI Tools", "Productivity", "Developer Growth"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">{tag}</span>
              ))}
            </div>
            <a href="https://instagram.com/aihackwithsumit" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 text-sm font-medium hover:bg-pink-500/30 transition-all">
              Follow the Journey <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════════ 7. BEYOND CODE ═══════════════ */}
      <Section>
        <SectionTitle icon={Sparkles} title="Beyond Code" subtitle="The things that fuel my creativity outside of development." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto relative z-10">
          {beyondCode.map((item, idx) => (
            <motion.div key={item.text} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}
              className="flex items-center gap-4 p-5 rounded-xl bg-[#0B1120]/80 border border-white/10 hover:border-purple-500/30 transition-all group">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
                <item.icon size={18} className="text-purple-400" />
              </div>
              <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ 8. STATS ═══════════════ */}
      <Section>
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto relative z-10">
          {[
            { label: "Projects Built", value: `${PROJECTS_BUILT}`, color: "cyan" },
            { label: "Tech Stack", value: "10+", color: "purple" },
            { label: "CGPA / SGPA", value: "8.9", color: "blue" },
          ].map((stat, idx) => (
            <motion.div key={stat.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}
              className="text-center p-6 md:p-8 rounded-2xl bg-[#0B1120]/80 border border-white/10 backdrop-blur-xl">
              <p className={`text-4xl md:text-5xl font-extrabold text-${stat.color}-400 mb-2`}>{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ 9. FINAL CTA ═══════════════ */}
      <Section>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="relative text-center py-12 z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">amazing</span>{" "}
            together.
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            I&apos;m always open to collaborations, internship opportunities, and building impactful products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all">
              Get In Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/projects" className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
              View My Work
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
