export type ResourceCategory = "All" | "Cheatsheets" | "Roadmaps" | "AI Tools" | "Notes";

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  url: string;
  downloads: number;
  featured?: boolean;
};

export const RESOURCES: Resource[] = [
  {
    id: "r1",
    title: "Next.js 15 App Router Cheatsheet",
    description: "A comprehensive guide to the new App Router, Server Components, and Server Actions in Next.js 15.",
    category: "Cheatsheets",
    tags: ["Next.js", "React", "Frontend"],
    url: "https://nextjs.org/docs",
    downloads: 1250,
    featured: true,
  },
  {
    id: "r2",
    title: "Full-Stack Developer Roadmap 2026",
    description: "Step-by-step path to becoming a modern full-stack developer, focusing on MERN, Next.js, and AI integration.",
    category: "Roadmaps",
    tags: ["Roadmap", "Career", "Full-Stack"],
    url: "https://roadmap.sh/full-stack",
    downloads: 3400,
    featured: true,
  },
  {
    id: "r3",
    title: "Prompt Engineering Mastery Notes",
    description: "My personal notes on how to write effective prompts for GPT-4o, Claude 3.5 Sonnet, and Groq LLMs.",
    category: "Notes",
    tags: ["AI", "Prompt Engineering", "LLM"],
    url: "#",
    downloads: 850,
  },
  {
    id: "r4",
    title: "Tailwind CSS v4 Quick Reference",
    description: "Quick reference guide for the new utility classes and features introduced in Tailwind CSS v4.",
    category: "Cheatsheets",
    tags: ["CSS", "Tailwind", "Design"],
    url: "https://tailwindcss.com/docs",
    downloads: 2100,
  },
  {
    id: "r5",
    title: "Top 10 Free AI APIs for Developers",
    description: "A curated list of free-tier AI APIs (Groq, Gemini, HuggingFace) you can use to build AI apps today.",
    category: "AI Tools",
    tags: ["AI", "API", "Backend"],
    url: "https://groq.com",
    downloads: 4120,
    featured: true,
  },
  {
    id: "r6",
    title: "DSA in C++: Interview Prep Guide",
    description: "My structured roadmap and notes for mastering Data Structures and Algorithms using C++.",
    category: "Roadmaps",
    tags: ["DSA", "C++", "Interviews"],
    url: "#",
    downloads: 1950,
  },
  {
    id: "r7",
    title: "React Server Components Explained",
    description: "Deep dive notes explaining how RSCs actually work under the hood and when to use them vs Client Components.",
    category: "Notes",
    tags: ["React", "Performance", "Architecture"],
    url: "#",
    downloads: 720,
  },
  {
    id: "r8",
    title: "AI Image Generation Vault",
    description: "Collection of Midjourney and DALL-E prompts for generating high-quality UI/UX assets and brand imagery.",
    category: "AI Tools",
    tags: ["Generative AI", "Design", "Prompts"],
    url: "#",
    downloads: 1430,
  },
];
