ai-freelance-portfolio/
│
├── app/
│   ├── layout.tsx              # Global layout + SEO metadata
│   ├── page.tsx                # Home (SEO landing)
│   ├── globals.css             # Tailwind + global styles
│
│   ├── about/
│   │   └── page.tsx            # About page
│
│   ├── services/
│   │   ├── page.tsx            # Services pillar page
│   │   ├── ai-ads/
│   │   │   └── page.tsx        # AI Ads service page
│   │   ├── ai-videos/
│   │   │   └── page.tsx        # AI Video service page
│   │   ├── ai-automation/
│   │   │   └── page.tsx        # AI Automation service page
│   │   ├── web-development/
│   │   │   └── page.tsx        # Web Dev service page
│   │
│   ├── projects/
│   │   ├── page.tsx            # Case studies listing
│   │   └── [slug]/
│   │       └── page.tsx        # Individual project (SEO)
│
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── [slug]/
│   │       └── page.tsx        # Blog post
│
│   ├── contact/
│   │   └── page.tsx            # Contact + AI intake
│
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts        # Contact form / AI intake API
│   │   └── ai-assistant/
│   │       └── route.ts        # AI sales assistant (future)
│
│   ├── sitemap.ts              # Dynamic sitemap (SEO)
│   ├── robots.ts               # Robots config
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Home sections (SEO safe)
│   │   ├── Services.tsx
│   │   ├── Proof.tsx
│   │   ├── CTA.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│
├── lib/
│   ├── seo.ts                  # SEO helpers (metadata, schema)
│   ├── data.ts                 # Services, projects, blogs
│   ├── ai.ts                   # AI logic (later)
│
├── public/
│   ├── images/
│   │   ├── services/
│   │   ├── projects/
│   │   └── blog/
│   └── favicon.ico
│
├── types/
│   ├── project.ts
│   ├── blog.ts
│   └── service.ts
│
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md