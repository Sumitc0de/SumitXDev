"use client";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";

const socials = [
  {
    href: "https://github.com/Sumitc0de/",
    label: "GitHub profile of Sumit Vishwakarma",
    icon: FaGithub,
    hover: "hover:border-cyan-400 group-hover:text-white",
  },
  {
    href: "https://linkedin.com/in/sumit-vishwakarma-b818b7268/",
    label: "LinkedIn profile of Sumit Vishwakarma",
    icon: FaLinkedin,
    hover: "hover:border-cyan-400 group-hover:text-cyan-400",
  },
  {
    href: "https://x.com/DeveloperrSumit",
    label: "X (Twitter) profile of Sumit Vishwakarma",
    icon: FaXTwitter,
    hover: "hover:border-blue-400 group-hover:text-blue-400",
  },
  {
    href: "https://instagram.com/aihackwithsumit",
    label: "Instagram profile of Sumit Vishwakarma",
    icon: FaInstagram,
    hover: "hover:border-pink-400 group-hover:text-pink-400",
  },
  {
    href: "mailto:developwithsumit009@gmail.com",
    label: "Email Sumit Vishwakarma",
    icon: FaEnvelope,
    hover: "hover:border-green-400 group-hover:text-green-400",
  },
];

export default function SocialDock() {
  return (
    <div
      aria-label="Social media links"
      className="
  fixed z-40
  bottom-4 left-1/2 -translate-x-1/2
+ md:bottom-auto
  flex flex-row gap-4
  rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur
  md:left-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0
  md:flex-col md:rounded-2xl md:px-2 md:py-4
"

    >
      {socials.map(({ href, label, icon: Icon, hover }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`
            group flex h-10 w-10 items-center justify-center rounded-full
            border border-white/10 bg-black/40 backdrop-blur
            transition hover:scale-110 ${hover}
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400
          `}
        >
          <Icon aria-hidden="true" className="text-gray-400 transition" />
        </a>
      ))}
    </div>
  );
}
