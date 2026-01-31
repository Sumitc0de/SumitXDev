"use client";

import Link from "next/link";
import { sendEmail } from "../actions/sendEmail";
import { useState, useTransition } from "react";
import { PRIMARY_MODE, PROJECTS_BUILT } from "@/constants/system";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const res = await sendEmail(form);
      setStatus(res.success ? "success" : "error");
    });
  };

  return (
    <main className="bg-[#020617] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pb-24">
        {/* Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-35%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />
          <div className="absolute right-[-10%] bottom-[-30%] h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[160px]" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Initiate{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Contact
            </span>{" "}
            Protocol
          </h1>

          <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-400">
            You’re one message away from building AI-powered systems,
            automations, and futuristic web experiences.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* LEFT — AI SYSTEM PROFILE */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1220] via-[#0e1628] to-[#101a2e] p-6 sm:p-7 backdrop-blur-xl flex flex-col">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.12),transparent_55%)]" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold tracking-wide">
                  Profile
                </h2>
                <p className="mt-1 text-xs text-cyan-400">
                  SYSTEM STATUS:{" "}
                  <span className="text-green-400">ONLINE</span>
                </p>
              </div>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                v2035.1
              </span>
            </div>

            {/* Identity */}
            <div className="mb-5">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Identity
              </p>
              <p className="mt-1 text-lg font-semibold tracking-wide">
                Sumit Vishwakarma
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                AI Engineer · Automation Architect · Web Developer
              </p>
            </div>

            {/* Location + Availability */}
            <div className="mb-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Location
                </p>
                <p className="mt-1 text-sm">
                  India 🌍 <span className="text-gray-400">(Remote)</span>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Availability
                </p>
                <p className="mt-1 text-sm text-green-400">
                  Accepting Projects
                </p>
              </div>
            </div>

            {/* Capabilities */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Core Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Ads",
                  "AI Automations",
                  "AI Video Systems",
                  "Next.js Web",
                  "Prompt Engineering",
                ].map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="mb-6 grid grid-cols-3 gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="text-xs text-gray-400">Projects</p>
                <p className="text-lg font-bold text-cyan-400">
                  {PROJECTS_BUILT}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Response</p>
                <p className="text-lg font-bold text-purple-400">&lt;24h</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Focus</p>
                <p className="text-sm sm:text-base font-semibold text-blue-400 tracking-wide">
                  {PRIMARY_MODE}
                </p>
              </div>
            </div>

            {/* System Note */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                System Note
              </p>
              <p className="mt-1 text-sm text-gray-400 leading-snug">
                AI-first systems designed to reduce manual work, scale faster,
                and deliver measurable business outcomes.
              </p>
            </div>

            {/* Footer Actions */}
            <div className="mt-auto pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/projects"
                className="flex-1 rounded-lg border border-white/20 px-4 py-2 text-center text-sm transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* RIGHT — AI CONTACT TERMINAL */}
          <div className="relative rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              AI Contact Terminal
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-black/50 px-4 py-3 text-white outline-none border border-white/10 focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-xl bg-black/50 px-4 py-3 text-white outline-none border border-white/10 focus:border-cyan-400"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-black/50 px-4 py-3 text-white outline-none border border-white/10 focus:border-cyan-400"
              >
                <option value="">Select Service</option>
                <option>AI Ads / Marketing</option>
                <option>AI Automation</option>
                <option>AI Video / Content</option>
                <option>Web Development</option>
                <option>Full AI System</option>
              </select>

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your mission..."
                required
                className="w-full rounded-xl bg-black/50 px-4 py-3 text-white outline-none border border-white/10 focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-[1.03] disabled:opacity-60"
              >
                {pending ? "Transmitting..." : "Transmit Request"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  ✅ Message transmitted successfully
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  ❌ Transmission failed. Try again.
                </p>
              )}
            </form>

            <p className="mt-6 text-center text-xs text-gray-500">
              Response time: Usually within 24 hours ⚡
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
