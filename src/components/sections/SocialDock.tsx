"use client";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";

export default function SocialDock() {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:flex flex-col gap-4">

      <a
        href="https://github.com/Sumitc0de/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur transition hover:scale-110 hover:border-cyan-400"
      >
        <FaGithub className="text-gray-400 transition group-hover:text-white" />
      </a>

      <a
        href="https://linkedin.com/in/sumit-vishwakarma-b818b7268/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur transition hover:scale-110 hover:border-cyan-400"
      >
        <FaLinkedin className="text-gray-400 transition group-hover:text-cyan-400" />
      </a>

      <a
        href="https://x.com/DeveloperrSumit"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur transition hover:scale-110 hover:border-blue-400"
      >
        <FaXTwitter className="text-gray-400 transition group-hover:text-blue-400" />
      </a>

      <a
        href="https://instagram.com/aihackwithsumit"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur transition hover:scale-110 hover:border-pink-400"
      >
        <FaInstagram className="text-gray-400 transition group-hover:text-pink-400" />
      </a>

      <a
        href="mailto:developwithsumit009@gmail.com"
        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur transition hover:scale-110 hover:border-green-400"
      >
        <FaEnvelope className="text-gray-400 transition group-hover:text-green-400" />
      </a>
    </div>
  );
}
