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
        id: "smart-automation-system",
        title: "Smart Automation System",
        description:
            "End-to-end automation platform for lead capture, email workflows, and CRM synchronization using event-based architecture.",
        tech: ["Node.js", "Express", "Webhooks", "APIs"],
        liveUrl: "https://automation-demo.vercel.app",
        githubUrl: "https://github.com/sumitxdev/smart-automation-system",
        status: "Live",
        category: "Automation",
    },
    {
        id: "ai-prompt-library",
        title: "AI Prompt Library",
        description:
            "Centralized system to store, version, and reuse high-performing AI prompts with tagging and search capabilities.",
        tech: ["Next.js", "Local Storage", "AI APIs"],
        liveUrl: "https://prompt-library-demo.vercel.app",
        githubUrl: "https://github.com/sumitxdev/ai-prompt-library",
        status: "Private",
        category: "AI",
    },
    {
        id: "media-analytics-dashboard",
        title: "Media Analytics Dashboard",
        description:
            "Data-driven dashboard to analyze content performance, engagement metrics, and growth trends across platforms.",
        tech: ["React", "Chart.js", "REST APIs"],
        liveUrl: "https://media-analytics-demo.vercel.app",
        githubUrl: "https://github.com/sumitxdev/media-analytics-dashboard",
        status: "Building",
        category: "Web",
    },
    {
        id: "ai-task-orchestrator",
        title: "AI Task Orchestrator",
        description:
            "Automation-first task management system that prioritizes, schedules, and executes workflows using AI logic.",
        tech: ["Node.js", "Queue Systems", "AI Logic"],
        githubUrl: "https://github.com/sumitxdev/ai-task-orchestrator",
        status: "Private",
        category: "Web+AI",
    },
];
