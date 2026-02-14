import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://sumit-x-dev.vercel.app",
            lastModified: new Date(),
        },
        {
            url: "https://sumit-x-dev.vercel.app/projects",
            lastModified: new Date(),
        },
        {
            url: "https://sumit-x-dev.vercel.app/skills",
            lastModified: new Date(),
        },
        {
            url: "https://sumit-x-dev.vercel.app/contact",
            lastModified: new Date(),
        },
    ];
}
