import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Freelance Web Developer & AI Integration Expert in India",
    description:
        "Hire a Freelance Full Stack Developer in India for Landing Page Development, React & Next.js Web Applications, AI Chatbot Integration, OpenAI API Integration, and AI Creative Services like AI Product Shoots and AI Ad Creatives.",
    keywords: [
        "Freelance Web Developer in India",
        "Landing Page Developer",
        "Website Developer",
        "Full Stack Developer",
        "React Developer",
        "Next.js Developer",
        "AI Integration Services",
        "AI Chatbot Integration",
        "OpenAI API Integration",
        "AI Product Shoot Services",
        "AI Ad Creative Services",
        "Scalable Web Applications",
        "SEO Optimized Websites",
        "Automation Systems",
        "Business Website Development",
        "D2C Brand Website",
        "Startup Website Developer",
    ],
    alternates: {
        canonical: "https://sumit-x-dev.vercel.app/services",
    },
    openGraph: {
        title: "Services | Freelance Web Developer & AI Creative Studio — Sumit Vishwakarma",
        description:
            "Full Stack Web Development, AI Integration, and AI Creative Studio services for startups, D2C brands, and businesses. Based in India.",
        url: "https://sumit-x-dev.vercel.app/services",
        siteName: "SumitXDev",
        images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sumit Vishwakarma Services" }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | Sumit Vishwakarma — Freelance Full Stack Developer & AI Expert",
        description:
            "Landing Pages, Full Stack Apps, AI Chatbots, AI Product Shoots, and Ad Creatives for Startups & D2C Brands.",
        images: ["/og.png"],
    },
};

const webServices = [
    {
        icon: "🚀",
        title: "Landing Page Development",
        desc: "High-converting, blazing-fast landing pages built to turn visitors into customers. Optimized for SEO, mobile-first, and designed with clear CTAs that drive measurable results.",
    },
    {
        icon: "🌐",
        title: "Business Website Development",
        desc: "Professional websites that establish credibility and generate leads. Whether you're a startup or an established brand, I build sites that reflect your value and convert.",
    },
    {
        icon: "⚙️",
        title: "Full Stack Web Applications",
        desc: "End-to-end scalable web applications with React, Next.js, and Node.js. Built with clean architecture, robust APIs, and production-grade performance from day one.",
    },
    {
        icon: "🤖",
        title: "AI Chatbot Integration",
        desc: "Deploy intelligent chatbots that engage users 24/7, qualify leads, and automate support — seamlessly embedded into your existing website or product.",
    },
    {
        icon: "🧠",
        title: "OpenAI API Integration",
        desc: "Unlock the power of GPT-4, embeddings, and AI tools directly in your product. I integrate OpenAI APIs to add smart features that give your business a real competitive edge.",
    },
    {
        icon: "⚡",
        title: "Automation Systems",
        desc: "Eliminate repetitive tasks with intelligent workflows and automation pipelines. Save time, reduce errors, and let your team focus on what actually moves the needle.",
    },
    {
        icon: "🔍",
        title: "SEO Optimized Websites",
        desc: "Sites built to rank. Every project includes semantic HTML, Core Web Vitals optimization, structured data, meta strategy, and performance tuning for Google's algorithm.",
    },
];

const aiCreativeServices = [
    {
        icon: "📸",
        title: "AI Product Shoots for Brands",
        desc: "Studio-quality product imagery without the cost of a physical shoot. Perfect for D2C brands that need high-converting visuals fast — at a fraction of traditional costs.",
    },
    {
        icon: "🎨",
        title: "Commercial AI Photography",
        desc: "Photorealistic commercial images tailored for your brand identity. Ideal for hero sections, e-commerce listings, and brand campaigns that demand a premium aesthetic.",
    },
    {
        icon: "📣",
        title: "AI Ad Creative Development",
        desc: "Static ad creatives for Meta, Google, and LinkedIn — strategically designed to stop the scroll, communicate value instantly, and drive click-through.",
    },
    {
        icon: "🎬",
        title: "AI Ad Video Concepts",
        desc: "AI-powered video ad concepts and storyboards that bring your campaign to life. Built for performance marketing teams who need creative assets quickly and affordably.",
    },
    {
        icon: "📱",
        title: "Social Media Ad Visuals",
        desc: "Thumb-stopping visuals for Instagram, Facebook, and beyond. Designed around your product, audience, and campaign goal — ready to scale across ad sets.",
    },
];

const processSteps = [
    { step: "01", title: "Discovery", desc: "We align on goals, audience, and success metrics — so every decision is rooted in business strategy, not guesswork." },
    { step: "02", title: "Strategy", desc: "I map out the tech stack, architecture, and creative direction. You get a clear plan before a single line of code or creative is produced." },
    { step: "03", title: "Design & Development", desc: "Rapid, iterative build cycles with regular check-ins. You stay in the loop without being buried in details." },
    { step: "04", title: "Delivery", desc: "Live, tested, and optimized. Full handoff with documentation, deployment, and a live review session." },
    { step: "05", title: "Support", desc: "Post-launch, I'm available for refinements, performance audits, and feature expansions as your business grows." },
];

const whyPoints = [
    { icon: "⚛️", title: "Modern Tech Stack", desc: "React, Next.js, Node.js, TypeScript, and the latest AI tools — built to last." },
    { icon: "📈", title: "Performance-Focused", desc: "Every project is tuned for Core Web Vitals, fast load times, and smooth UX." },
    { icon: "🏗️", title: "Clean, Scalable Architecture", desc: "Code that's easy to maintain, extend, and hand over without technical debt." },
    { icon: "🤖", title: "AI-Driven Efficiency", desc: "AI isn't an add-on here — it's woven into the workflow to ship faster and smarter." },
    { icon: "💬", title: "Clear Communication", desc: "No jargon, no ghosting. Honest timelines, proactive updates, and direct collaboration." },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sumit Vishwakarma — Freelance Web Developer & AI Services",
    url: "https://sumit-x-dev.vercel.app/services",
    description:
        "Full Stack Web Development, AI Integration, and AI Creative Studio services for startups, D2C brands, and businesses. Based in India.",
    founder: { "@type": "Person", name: "Sumit Vishwakarma" },
    areaServed: "Worldwide",
    serviceType: [
        "Landing Page Development",
        "Full Stack Web Application Development",
        "AI Chatbot Integration",
        "OpenAI API Integration",
        "AI Product Shoot Services",
        "AI Ad Creative Services",
        "SEO Optimized Website Development",
    ],
};

export default function ServicesPage() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="bg-[#020617] text-white">

                {/* ─── HERO ─────────────────────────────────────────────────── */}
                <section className="relative overflow-hidden py-28 md:py-36">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute left-1/2 top-[-30%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />
                        <div className="absolute right-[-10%] bottom-[-20%] h-[440px] w-[440px] rounded-full bg-purple-600/20 blur-[160px]" />
                    </div>

                    <div className="mx-auto max-w-5xl px-6 text-center">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                            Freelance Web Developer &amp; AI Expert · India
                        </p>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Build Faster.{" "}
                            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Convert Better.
                            </span>{" "}
                            Grow Smarter.
                        </h1>

                        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
                            I help startups, D2C brands, and founders build modern web platforms and
                            AI-powered creative assets that drive real business growth — not just
                            impressive mockups.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-8 py-3.5 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105"
                            >
                                Start a Project →
                            </Link>
                            <Link
                                href="/projects"
                                className="rounded-xl border border-white/20 px-8 py-3.5 text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                View My Work
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ─── WEB & AI WEB SOLUTIONS ───────────────────────────────── */}
                <section className="py-24 px-6 border-t border-white/10">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-14">
                            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
                                01 · Web &amp; AI Web Solutions
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                Websites &amp; Web Apps That{" "}
                                <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    Work for Your Business
                                </span>
                            </h2>
                            <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
                                From a conversion-optimized landing page to a fully integrated SaaS
                                platform — I design and develop digital products that perform, rank, and
                                scale.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {webServices.map((s) => (
                                <div
                                    key={s.title}
                                    className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1220] via-[#0e1628] to-[#101a2e] p-7 transition hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 group"
                                >
                                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.06),transparent_60%)] group-hover:opacity-150 transition" />
                                    <span className="text-3xl mb-4 block">{s.icon}</span>
                                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── AI CREATIVE STUDIO ───────────────────────────────────── */}
                <section className="relative py-24 px-6 border-t border-white/10 overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[160px]" />
                    </div>

                    <div className="mx-auto max-w-6xl">
                        <div className="mb-14">
                            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
                                02 · AI Creative Studio
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                Visuals That{" "}
                                <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Stop the Scroll
                                </span>
                            </h2>
                            <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
                                Premium AI-generated product imagery and ad creatives designed to elevate
                                your brand positioning, increase engagement, and drive conversions —
                                without the cost or timeline of a traditional shoot.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {aiCreativeServices.map((s) => (
                                <div
                                    key={s.title}
                                    className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#130b22] via-[#160d28] to-[#1a0f30] p-7 transition hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 group"
                                >
                                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.07),transparent_60%)] group-hover:opacity-150 transition" />
                                    <span className="text-3xl mb-4 block">{s.icon}</span>
                                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── PROCESS ──────────────────────────────────────────────── */}
                <section className="py-24 px-6 border-t border-white/10">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-14 text-center">
                            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
                                03 · How It Works
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                A Process Built for{" "}
                                <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    Clarity &amp; Speed
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl mx-auto text-gray-400">
                                No surprises. No scope creep. Just a straightforward engagement that
                                respects your time and produces results.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {processSteps.map((p) => (
                                <div
                                    key={p.step}
                                    className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-center lg:text-left"
                                >
                                    <p className="text-3xl font-extrabold text-cyan-400/30 mb-3">{p.step}</p>
                                    <h3 className="text-base font-semibold mb-2">{p.title}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── WHY WORK WITH ME ─────────────────────────────────────── */}
                <section className="relative py-24 px-6 border-t border-white/10 overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />
                    </div>

                    <div className="mx-auto max-w-6xl">
                        <div className="mb-14">
                            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
                                04 · Why Work With Me
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                Built Different.{" "}
                                <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                    Delivered Right.
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl text-gray-400">
                                You're not hiring a generic agency. You're working directly with a developer
                                who is invested in your outcomes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyPoints.map((w) => (
                                <div
                                    key={w.title}
                                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                                >
                                    <span className="text-2xl mt-0.5">{w.icon}</span>
                                    <div>
                                        <h3 className="font-semibold mb-1">{w.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{w.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── FINAL CTA ────────────────────────────────────────────── */}
                <section className="border-t border-white/10 px-6 py-24 md:py-32">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                            Ready to Build Something{" "}
                            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                That Moves the Needle?
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                            Whether you need a high-converting landing page, a full-scale web application,
                            AI integration, or premium ad creatives — let's build it right, the first time.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 px-10 py-4 font-semibold text-black shadow-lg shadow-cyan-500/30 transition hover:scale-105 text-base"
                            >
                                Let's Start a Project →
                            </Link>
                            <Link
                                href="/projects"
                                className="rounded-xl border border-white/20 px-10 py-4 text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                See Case Studies
                            </Link>
                        </div>

                        <p className="mt-6 text-sm text-gray-600">
                            Freelance Full Stack Developer · Based in India · Available for Remote Projects Worldwide
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
