export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
    status?: "Live" | "Building" | "Private";
    category?: "AI" | "Automation" | "Web" | "Web+AI";

};



export const PROJECTS: Project[] = [
    {
        id: "ai-portfolio",
        title: "Portfolio — SumitXDev",
        description:
            "AI-first personal portfolio showcasing automation-driven systems, Web + AI projects, and a futuristic system-based design philosophy.",
        tech: ["Next.js", "React", "Tailwind CSS", "AI-assisted Development"],
        liveUrl: "https://sumit-x-dev.vercel.app/",
        githubUrl: "https://github.com/Sumitc0de/SumitXDev",
        status: "Live",
        category: "Web+AI",
    },
    {
        id: "ai-quiz-generator",
        title: "BrainBurst AI",
        description:
            "AI-powered web application that generates fully personalized quizzes in real time based on user-selected topics, difficulty levels, and learning goals. Designed for adaptive learning, interview prep, and smart assessments.",
        tech: [
            "React",
            "Tailwind CSS",
            "Frontend",
        ],
        liveUrl: "https://brainburstai.vercel.app/",
        githubUrl: "https://github.com/Sumitc0de/BrainBurst-AI",
        status: "Live",
        category: "AI",
    },
    {
        id: "skillbridge-platform",
        title: "Skillbridge Platform",
        description: "A smart skill monitoring and placement readiness platform that bridges the gap between college learning and industry requirements.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://skillbridge-seven-iota.vercel.app/",
        githubUrl: "https://github.com/Sumitc0de/skillbridge-platform",
        status: "Live",
        category: "Web",
    },
    {
        id: "challenger-classes",
        title: "Challenger Classes Platform",
        description: "A modern and responsive website for Challenger Classes, designed to showcase courses, faculty, achievements, and provide a seamless experience for students and parents.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        liveUrl: "https://challengerclasses-wheat.vercel.app/",
        githubUrl: "https://github.com/Sumitc0de/challenger-classes-web-app",
        status: "Live",
        category: "Web",
    },
    {
        id: "campuskart",
        title: "CampusKart",
        description: "CampusKart is an exclusive, safe, and dynamic university-based student marketplace.",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://campuskart-ten.vercel.app/",
        githubUrl: "https://github.com/Sumitc0de/campuskart",
        status: "Live",
        category: "Web",
    },
    {
        id: "writeora",
        title: "Writeora",
        description: "A modern writing platform designed to provide a seamless creating and reading experience.",
        tech: ["React", "Next.js", "Tailwind CSS"],
        liveUrl: "https://writeora-v1.vercel.app/",
        githubUrl: "https://github.com/Sumitc0de/Writeora",
        status: "Live",
        category: "Web",
    }
];

export const PROJECTS_BUILTS = PROJECTS.length;
