import { useState, Suspense, useEffect, useRef, useMemo, useCallback, lazy } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

// Lazy load heavy components
const Beams = lazy(() => import("@/components/ui/beams").then(m => ({ default: m.default })));
const Spline = lazy(() => import('@splinetool/react-spline'));

const Membership = () => {
  // Memoize beam config to prevent unnecessary re-renders - reduced beamNumber for performance
  const beamConfig = useMemo(() => ({
    beamWidth: 3,
    beamHeight: 30,
    beamNumber: 15, // Reduced from 20 for better performance
    speed: 3,
    noiseIntensity: 2.5,
    scale: 0.2,
    rotation: 140,
    lightColor: "#ffffff"
  }), []);

  const [showTitle, setShowTitle] = useState(false);
  const [showExplore, setShowExplore] = useState(true);
  const [showExploreButton, setShowExploreButton] = useState(false);
  const [fadeProgress, setFadeProgress] = useState(0); // 0 to 1, controls bottom-to-top fade
  const nextSectionRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroOffsetRef = useRef<number>(0);
  const heroHeightRef = useRef<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
      setShowExploreButton(true);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = useCallback(() => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    // Cache hero section dimensions once on mount
    if (heroSectionRef.current) {
      const rect = heroSectionRef.current.getBoundingClientRect();
      heroOffsetRef.current = rect.top + window.scrollY;
      heroHeightRef.current = rect.height;
    }

    let ticking = false;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || document.documentElement.scrollTop;
          
          // Only process if scroll difference is significant (reduces calculations)
          if (Math.abs(currentScrollY - lastScrollY) > 2) {
            lastScrollY = currentScrollY;
            setShowExplore(false);
            
            // Calculate fade based on cached scroll position
            const scrollPastHeroTop = Math.max(0, currentScrollY - heroOffsetRef.current);
            const progress = Math.min(scrollPastHeroTop / heroHeightRef.current, 1);
            
            setFadeProgress(progress);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden relative">
      <Navigation />
      
      {/* Beams Background - Full Page */}
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1, pointerEvents: 'none', willChange: 'transform', contain: 'layout style paint', transform: 'translateZ(0)' }}>
        <Suspense fallback={null}>
          <Beams
            beamWidth={beamConfig.beamWidth}
            beamHeight={beamConfig.beamHeight}
            beamNumber={beamConfig.beamNumber}
            lightColor={beamConfig.lightColor}
            speed={beamConfig.speed}
            noiseIntensity={beamConfig.noiseIntensity}
            scale={beamConfig.scale}
            rotation={beamConfig.rotation}
          />
        </Suspense>
      </div>
      
      <main className="flex flex-col w-full relative z-10">
        {/* Hero Section with 3D Spline */}
        <section ref={heroSectionRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{ contain: 'layout style' }}>

          {/* Spline 3D Object - Contained within hero section */}
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0,
              bottom: 0,
              zIndex: 2,
              pointerEvents: 'none',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              opacity: 1 - fadeProgress,
              contain: 'layout style paint',
            }}
            className="spline-wrapper"
          >
            <Suspense fallback={<div className="text-white text-center">Loading 3D model...</div>}>
              <div 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  maxWidth: '100%',
                  maxHeight: '100%',
                  pointerEvents: 'none',
                  transform: 'scale(1.8) translateZ(0)',
                  transformOrigin: 'center center',
                  willChange: 'transform',
                  contain: 'layout style paint',
                  WebkitMaskImage: `linear-gradient(to top, transparent ${fadeProgress * 50}%, rgba(0,0,0,1) ${fadeProgress * 50 + 10}%, rgba(0,0,0,1) ${100 - fadeProgress * 50 - 10}%, transparent ${100 - fadeProgress * 50}%)`,
                  maskImage: `linear-gradient(to top, transparent ${fadeProgress * 50}%, rgba(0,0,0,1) ${fadeProgress * 50 + 10}%, rgba(0,0,0,1) ${100 - fadeProgress * 50 - 10}%, transparent ${100 - fadeProgress * 50}%)`,
                }}
                className="spline-container"
              >
                <Spline 
                  scene="/assets/robo.splinecode"
                />
              </div>
            </Suspense>
          </div>

          {/* Title and Button - Middle Center - Appear after 14 seconds */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8 z-10 transition-opacity duration-1000 pointer-events-none ${
              showTitle ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: 3 }}
          >
            {/* Title - Silver shining text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-center bg-[linear-gradient(110deg,#C0C0C0,45%,#FFFFFF,55%,#C0C0C0)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(192,192,192,0.5)]">
              Membership Card
            </h1>
            
            {/* Explore More button - Below title */}
            <div 
              className={`transition-all duration-1000 ease-out pointer-events-auto ${
                showExploreButton 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <ShimmerButton 
                onClick={scrollToNextSection}
                className="shadow-2xl"
              >
                <span className="whitespace-pre-wrap text-center text-sm sm:text-base md:text-lg font-medium leading-none tracking-tight text-white px-4 sm:px-6">
                  Explore More
                </span>
              </ShimmerButton>
            </div>
          </div>

          {/* Explore text with arrow at bottom */}
          <div 
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-500 pointer-events-none ${
              showExplore ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: 4 }}
          >
            <span className="text-white/80 text-sm sm:text-base font-light uppercase tracking-wider">explore</span>
            <ChevronDown className="w-5 h-5 text-white/80 animate-bounce" />
          </div>
        </section>

        {/* Blank section after hero */}
        <section ref={nextSectionRef} className="relative w-full min-h-screen bg-transparent">
          {/* Empty section for now */}
        </section>
      </main>
      
      <Footer />
      
    </div>
  );
};

export default Membership;
