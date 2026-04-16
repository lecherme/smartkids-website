import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <CapabilitiesSection />
      <AdvantagesSection />
      <FooterSection />
    </MainLayout>
  );
}
