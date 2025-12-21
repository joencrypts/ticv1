import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhatItIsSection from "@/components/home/WhatItIsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import OfferingsSection from "@/components/home/OfferingsSection";
import WhoItsForSection from "@/components/home/WhoItsForSection";
import CTASection from "@/components/home/CTASection";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import GradualBlur from "@/components/ui/gradual-blur";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-transparent overflow-x-hidden relative">
      <ScrollProgress />
      <Navigation />
      
      <main className="flex flex-col w-full">
        <HeroSection />
        <WhatItIsSection />
        <HowItWorksSection />
        <OfferingsSection />
        <WhoItsForSection />
        <CTASection />
        <Footer />
      </main>
      
      {/* Bottom fade blur */}
      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  );
};

export default Index;
