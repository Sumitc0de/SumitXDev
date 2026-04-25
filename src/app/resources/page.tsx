import { Suspense } from "react";
import { RESOURCES } from "@/data/resources";
import { generateResourcesListMetadata, generateResourcesListJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import ResourcesPageClient from "@/components/resources/ResourcesPageClient";

export const metadata = generateResourcesListMetadata();

export default function ResourcesPage() {
  const jsonLd = generateResourcesListJsonLd(RESOURCES);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Suspense fallback={
        <div className="min-h-screen bg-[#020617] flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <ResourcesPageClient />
      </Suspense>
    </>
  );
}
