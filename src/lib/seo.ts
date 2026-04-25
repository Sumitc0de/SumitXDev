import type { Metadata } from "next";
import { Resource } from "@/data/resources";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.sumitxdev.online";
const SITE_NAME = "SumitXDev";
const AUTHOR = "Sumit Vishwakarma";

/**
 * Generate Next.js Metadata for a single resource detail page.
 * Includes title, description, keywords, OG tags, Twitter cards.
 */
export function generateResourceMetadata(resource: Resource): Metadata {
  const pageUrl = `${SITE_URL}/resources/${resource.slug}`;
  const title = `${resource.title} | Free Download - ${SITE_NAME}`;
  const description = resource.description.slice(0, 160);

  return {
    title,
    description,
    keywords: [
      resource.title,
      `${resource.title} free download`,
      `${resource.title} PDF`,
      resource.category,
      ...resource.tags,
      "free developer resources",
      "coding cheatsheet",
      AUTHOR,
    ],
    authors: [{ name: AUTHOR }],
    creator: AUTHOR,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: resource.thumbnail.startsWith("http")
            ? resource.thumbnail
            : `${SITE_URL}${resource.thumbnail}`,
          width: 1200,
          height: 630,
          alt: resource.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        resource.thumbnail.startsWith("http")
          ? resource.thumbnail
          : `${SITE_URL}${resource.thumbnail}`,
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

/**
 * Generate Next.js Metadata for the resources listing page.
 */
export function generateResourcesListMetadata(): Metadata {
  const pageUrl = `${SITE_URL}/resources`;
  const title = "Free Developer Resources & Cheatsheets | Download PDFs & Roadmaps";
  const description =
    "Download free developer resources: React cheatsheets, JavaScript notes, DSA roadmaps, AI tools guides, and coding interview prep materials. Curated by Sumit Vishwakarma.";

  return {
    title,
    description,
    keywords: [
      "free developer resources",
      "react cheatsheet PDF",
      "javascript notes free download",
      "DSA roadmap PDF",
      "coding interview prep",
      "fullstack developer roadmap",
      "frontend cheatsheet",
      "AI tools for developers",
      AUTHOR,
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "SumitXDev Developer Resources",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og.png`],
    },
  };
}

/**
 * Generate JSON-LD CreativeWork structured data for a single resource.
 */
export function generateResourceJsonLd(resource: Resource) {
  const pageUrl = `${SITE_URL}/resources/${resource.slug}`;
  const thumbnailUrl = resource.thumbnail.startsWith("http")
    ? resource.thumbnail
    : `${SITE_URL}${resource.thumbnail}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: resource.title,
    description: resource.description,
    url: pageUrl,
    image: thumbnailUrl,
    author: {
      "@type": "Person",
      name: AUTHOR,
      url: SITE_URL,
    },
    datePublished: resource.dateAdded,
    keywords: resource.tags.join(", "),
    genre: resource.category,
    encodingFormat:
      resource.type === "pdf"
        ? "application/pdf"
        : resource.type === "image"
          ? "image/jpeg"
          : "text/html",
    isAccessibleForFree: true,
    inLanguage: "en",
  };
}

/**
 * Generate JSON-LD ItemList for the resources listing page.
 */
export function generateResourcesListJsonLd(resources: Resource[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Developer Resources",
    description:
      "Curated collection of free developer cheatsheets, roadmaps, and coding resources",
    numberOfItems: resources.length,
    itemListElement: resources.map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: resource.title,
        description: resource.description.slice(0, 120),
        url: `${SITE_URL}/resources/${resource.slug}`,
        image: resource.thumbnail.startsWith("http")
          ? resource.thumbnail
          : `${SITE_URL}${resource.thumbnail}`,
      },
    })),
  };
}
