import { useState, useEffect } from "react";
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
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          
          // Check if within 300px of the bottom
          const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
          setIsNearFooter(distanceFromBottom < 300);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      
      {/* Bottom fade blur - hide when near footer */}
      {!isNearFooter && (
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
      )}
    </div>
  );
};

export default Index;
