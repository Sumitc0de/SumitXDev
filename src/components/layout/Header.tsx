"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = ["Home", "Skills", "Projects", "Blog", "About", "Contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (item: string) => {
    const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    return pathname === href;
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020617]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="group inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-lg font-bold backdrop-blur transition hover:border-cyan-400"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            SumitX
          </span>
          <span className="ml-1 text-white">Dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = isActive(item);

            return (
              <Link
                key={item}
                href={href}
                className={`relative text-sm transition
                  ${active
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                  }
                `}
              >
                {item}

                {/* Active underline */}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-md shadow-cyan-500/40" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black shadow-md shadow-cyan-500/30 transition hover:scale-105"
        >
          Hire Me
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-6 px-6 py-8">

            {navItems.map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const active = isActive(item);

              return (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-lg transition
                    ${active
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                    }
                  `}
                >
                  {item}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-center font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
