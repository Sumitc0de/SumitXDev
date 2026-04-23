"use client";

import { useState, useEffect } from "react";

export default function ReadingProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(scrollPercent, 100));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 z-[60] h-[3px] w-full"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Reading progress"
        >
            <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-[width] duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
