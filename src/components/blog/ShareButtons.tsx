"use client";

import { useState } from "react";
import {
    FaWhatsapp,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiLink } from "react-icons/hi2";

type ShareButtonsProps = {
    title: string;
    slug: string;
};

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sumitxdev.online";

    const url = `${siteUrl}/blog/${slug}`;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: "WhatsApp",
            href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            icon: FaWhatsapp,
            color: "hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/5",
        },
        {
            name: "Twitter",
            href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            icon: FaXTwitter,
            color: "hover:text-white hover:border-white/30 hover:bg-white/5",
        },
        {
            name: "LinkedIn",
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            icon: FaLinkedinIn,
            color: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5",
        },
    ];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <span className="mr-1 text-sm text-gray-500">Share:</span>

            {shareLinks.map(({ name, href, icon: Icon, color }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${name}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 backdrop-blur transition-all duration-200 ${color}`}
                >
                    <Icon className="h-4 w-4" />
                </a>
            ))}

            {/* Copy Link Button */}
            <button
                onClick={handleCopy}
                aria-label="Copy link"
                className={`relative flex h-9 items-center gap-1.5 rounded-lg border px-3 text-sm backdrop-blur transition-all duration-200
                    ${
                        copied
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                            : "border-white/10 bg-white/5 text-gray-400 hover:border-cyan-400/30 hover:text-cyan-400"
                    }`}
            >
                <HiLink className="h-4 w-4" />
                <span className="text-xs">{copied ? "Copied!" : "Copy"}</span>
            </button>
        </div>
    );
}
