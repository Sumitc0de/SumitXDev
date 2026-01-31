import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/FeaturedProjects";
import Proof from "@/components/sections/Proof";
import AboutPreview from "@/components/sections/AboutPreview";
import CTA from "@/components/sections/CTA";
import SocialDock from "@/components/sections/SocialDock";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import VibeProjects from "@/components/sections/VibeProjects";


export default function HomePage() {
  return (
    <main className="bg-[#020617] text-white">
      <Hero />
      <FeaturedProjects />
      <VibeProjects />
      <CTA />

      {/* Floating Socials */}
      <SocialDock />
    </main>
  );
}

