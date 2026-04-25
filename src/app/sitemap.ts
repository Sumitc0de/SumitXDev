import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogs";
import { RESOURCES } from "@/data/resources";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.sumitxdev.online";

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/skills`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${baseUrl}/resources`,
            lastModified: new Date(),
            priority: 0.9,
        },
    ];

    const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        priority: 0.8,
    }));

    const resourceRoutes: MetadataRoute.Sitemap = RESOURCES.map((resource) => ({
        url: `${baseUrl}/resources/${resource.slug}`,
        lastModified: new Date(resource.dateAdded),
        priority: 0.8,
    }));

    return [...staticRoutes, ...blogRoutes, ...resourceRoutes];
}
