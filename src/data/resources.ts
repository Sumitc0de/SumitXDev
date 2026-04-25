export type ResourceCategory = "All" | "Cheatsheets" | "Roadmaps" | "AI Tools" | "Notes";

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  url: string;
  thumbnail: string;
  downloads: number;
  featured?: boolean;
  type: "image" | "pdf" | "link";
  slug: string;
  dateAdded: string;
};

export const CATEGORIES: ResourceCategory[] = [
  "All",
  "Cheatsheets",
  "Roadmaps",
  "AI Tools",
  "Notes",
];

export const ALL_TAGS: string[] = [
  "Next.js",
  "React",
  "Frontend",
  "Roadmap",
  "Career",
  "Full-Stack",
  "AI",
  "Prompt Engineering",
  "LLM",
  "CSS",
  "Tailwind",
  "Design",
  "API",
  "Backend",
  "DSA",
  "C++",
  "Interviews",
  "Performance",
  "Architecture",
  "Generative AI",
  "JavaScript",
  "HTML",
  "Git",
  "Beginner",
  "Projects",
];

export const RESOURCES: Resource[] = [
  // ──────────── REAL FILES (from public/resources/) ────────────
  {
    id: "r1",
    title: "React Cheatsheet — Complete Visual Guide",
    description:
      "A beautifully designed React cheatsheet covering hooks, components, event handling, list rendering, forms, and React Router. Visual quick-reference for React developers at any level.",
    category: "Cheatsheets",
    tags: ["React", "Frontend", "JavaScript"],
    url: "/resources/react cheatsheet.jpeg",
    thumbnail: "/resources/react cheatsheet.jpeg",
    downloads: 3200,
    featured: true,
    type: "image",
    slug: "react-cheatsheet-visual-guide",
    dateAdded: "2026-03-15",
  },
  {
    id: "r2",
    title: "60-Day Frontend Developer Roadmap Plan",
    description:
      "Step-by-step 60-day roadmap PDF to becoming a modern frontend developer. Covers HTML, CSS, JavaScript, React, Next.js, and deployment. Perfect for beginners starting their web development journey.",
    category: "Roadmaps",
    tags: ["Roadmap", "Career", "Frontend", "Beginner"],
    url: "/resources/60-Day Frontend Developer Roadmap Plan.pdf",
    thumbnail: "/resources/HTML_Cheat_Sheet.jpeg",
    downloads: 3400,
    featured: true,
    type: "pdf",
    slug: "60-day-frontend-developer-roadmap",
    dateAdded: "2026-02-20",
  },
  {
    id: "r3",
    title: "JavaScript Cheatsheet 2026",
    description:
      "Complete JavaScript cheatsheet covering ES2026+ features, closures, promises, async/await, array methods, destructuring, modules, and modern JavaScript patterns. Essential reference for frontend and full-stack developers.",
    category: "Cheatsheets",
    tags: ["JavaScript", "Frontend", "Beginner"],
    url: "/resources/js cheatsheet.png",
    thumbnail: "/resources/js cheatsheet.png",
    downloads: 2800,
    featured: true,
    type: "image",
    slug: "javascript-cheatsheet-2026",
    dateAdded: "2026-01-15",
  },
  {
    id: "r4",
    title: "HTML Cheat Sheet for Beginners",
    description:
      "Beginner-friendly HTML cheat sheet with all essential tags, attributes, semantic elements, forms, tables, and accessibility best practices. Ideal for students learning web development.",
    category: "Cheatsheets",
    tags: ["HTML", "Frontend", "Beginner"],
    url: "/resources/HTML_Cheat_Sheet.jpeg",
    thumbnail: "/resources/HTML_Cheat_Sheet.jpeg",
    downloads: 1850,
    type: "image",
    slug: "html-cheat-sheet-beginners",
    dateAdded: "2026-01-20",
  },
  {
    id: "r5",
    title: "Git Commands Cheat Sheet",
    description:
      "Visual Git commands cheat sheet covering branching, merging, rebasing, stashing, cherry-picking, and advanced Git workflows. Must-have reference for developers working with version control.",
    category: "Cheatsheets",
    tags: ["Git", "Backend", "Career"],
    url: "/resources/Git_Commands_Cheat_.jpeg",
    thumbnail: "/resources/Git_Commands_Cheat_.jpeg",
    downloads: 2200,
    type: "image",
    slug: "git-commands-cheat-sheet",
    dateAdded: "2026-02-05",
  },
  {
    id: "r6",
    title: "ReactJS Master Plan PDF",
    description:
      "Complete React.js learning master plan PDF covering components, hooks, state management, context API, React Router, performance optimization, and real-world project ideas. Perfect for beginners looking to master React.",
    category: "Roadmaps",
    tags: ["React", "Frontend", "JavaScript", "Beginner", "Projects"],
    url: "/resources/ReactJS Master Plan.pdf",
    thumbnail: "/resources/react cheatsheet.jpeg",
    downloads: 3100,
    featured: true,
    type: "pdf",
    slug: "reactjs-master-plan-pdf",
    dateAdded: "2026-02-15",
  },
  {
    id: "r7",
    title: "JS Master Plan 2025",
    description:
      "Comprehensive JavaScript mastery plan covering fundamentals to advanced topics including closures, prototypes, event loop, design patterns, and modern ES2025 features. Structured roadmap for JS developers at any level.",
    category: "Roadmaps",
    tags: ["JavaScript", "Frontend", "Roadmap", "Beginner"],
    url: "/resources/JS Master Plan 2025.pdf",
    thumbnail: "/resources/js cheatsheet.png",
    downloads: 2650,
    type: "pdf",
    slug: "js-master-plan-2025",
    dateAdded: "2026-01-30",
  },
  {
    id: "r8",
    title: "20 Beginner Projects to Build",
    description:
      "Curated list of 20 beginner-friendly projects to build your developer portfolio. Covers HTML/CSS, JavaScript, React, and API integration projects with increasing difficulty. Great for practical experience.",
    category: "Notes",
    tags: ["Beginner", "Projects", "Frontend", "JavaScript"],
    url: "/resources/20 Beginner-Project.pdf",
    thumbnail: "/resources/Git_Commands_Cheat_.jpeg",
    downloads: 1750,
    type: "pdf",
    slug: "20-beginner-projects-to-build",
    dateAdded: "2026-03-20",
  },

  // ──────────── EXTERNAL / LINK RESOURCES (no local files) ────────────
  {
    id: "r9",
    title: "Top 10 Free AI APIs for Developers",
    description:
      "A curated collection of free-tier AI APIs including Groq, Google Gemini, HuggingFace Inference, and OpenAI. Includes integration examples, rate limits, and code snippets for building AI-powered web applications.",
    category: "AI Tools",
    tags: ["AI", "API", "Backend", "LLM"],
    url: "https://github.com/public-apis/public-apis",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    downloads: 4120,
    featured: true,
    type: "link",
    slug: "top-10-free-ai-apis-developers",
    dateAdded: "2026-01-25",
  },
  {
    id: "r10",
    title: "Prompt Engineering Mastery Notes",
    description:
      "In-depth notes on writing effective AI prompts for GPT-4o, Claude, Gemini, and Groq LLMs. Learn chain-of-thought prompting, few-shot techniques, system prompt design, and advanced strategies for building AI apps.",
    category: "Notes",
    tags: ["AI", "Prompt Engineering", "LLM"],
    url: "https://www.promptingguide.ai/",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    downloads: 850,
    type: "link",
    slug: "prompt-engineering-mastery-notes",
    dateAdded: "2026-03-01",
  },
  {
    id: "r11",
    title: "DSA in C++ Interview Prep Guide",
    description:
      "Structured roadmap and notes for mastering Data Structures and Algorithms using C++. Covers arrays, linked lists, trees, graphs, dynamic programming, and coding interview patterns for placement prep.",
    category: "Roadmaps",
    tags: ["DSA", "C++", "Interviews", "Career"],
    url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=600&q=80",
    downloads: 1950,
    type: "link",
    slug: "dsa-cpp-interview-prep-guide",
    dateAdded: "2026-02-10",
  },
  {
    id: "r12",
    title: "React Server Components Deep Dive",
    description:
      "Deep-dive notes explaining how React Server Components work under the hood. Learn when to use Server vs Client Components, streaming SSR, selective hydration, and performance patterns for modern React apps.",
    category: "Notes",
    tags: ["React", "Performance", "Architecture", "Frontend"],
    url: "https://react.dev/reference/rsc/server-components",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    downloads: 720,
    type: "link",
    slug: "react-server-components-deep-dive",
    dateAdded: "2026-03-05",
  },
  {
    id: "r13",
    title: "AI Image Generation Prompt Vault",
    description:
      "Collection of tested Midjourney, DALL-E 3, and Stable Diffusion prompts for generating high-quality UI/UX assets, brand imagery, and product mockups. Includes negative prompt strategies and style modifiers.",
    category: "AI Tools",
    tags: ["Generative AI", "Design", "AI"],
    url: "https://prompthero.com/",
    thumbnail: "https://images.unsplash.com/photo-1686191128892-3b37add4a028?w=600&q=80",
    downloads: 1430,
    type: "link",
    slug: "ai-image-generation-prompt-vault",
    dateAdded: "2026-02-28",
  },
  {
    id: "r14",
    title: "Tailwind CSS v4 Quick Reference",
    description:
      "Quick reference guide for Tailwind CSS v4 featuring the new @theme directive, CSS-first configuration, automatic content detection, and modern utility classes. Essential for frontend developers building responsive UIs.",
    category: "Cheatsheets",
    tags: ["CSS", "Tailwind", "Design", "Frontend"],
    url: "https://tailwindcss.com/docs/installation",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    downloads: 2100,
    type: "link",
    slug: "tailwind-css-v4-quick-reference",
    dateAdded: "2026-03-10",
  },
];

/** Helper: find a resource by slug */
export function getResourceBySlug(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}

/** Helper: get related resources (same category or overlapping tags, excluding self) */
export function getRelatedResources(resource: Resource, limit = 3): Resource[] {
  return RESOURCES.filter((r) => r.id !== resource.id)
    .map((r) => {
      let score = 0;
      if (r.category === resource.category) score += 3;
      const sharedTags = r.tags.filter((t) => resource.tags.includes(t));
      score += sharedTags.length;
      return { ...r, _score: score };
    })
    .sort((a, b) => b._score - a._score)
    .slice(0, limit)
    .map(({ _score, ...r }) => r as Resource);
}
