import { notFound } from "next/navigation";
import { RESOURCES, getResourceBySlug } from "@/data/resources";
import { generateResourceMetadata, generateResourceJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import ResourceDetailClient from "@/components/resources/ResourceDetailClient";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Pre-render all resource pages at build time */
export async function generateStaticParams() {
  return RESOURCES.map((resource) => ({
    slug: resource.slug,
  }));
}

/** Dynamic SEO metadata per resource */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return { title: "Resource Not Found" };
  return generateResourceMetadata(resource);
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const jsonLd = generateResourceJsonLd(resource);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ResourceDetailClient resource={resource} />
    </>
  );
}
