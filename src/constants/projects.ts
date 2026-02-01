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

   
];

export const PROJECTS_BUILTS = PROJECTS.length;