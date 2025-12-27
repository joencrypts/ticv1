import { useState, Suspense, useEffect, useRef, useMemo, useCallback, lazy } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

// Lazy load heavy components
const Beams = lazy(() => import("@/components/ui/beams").then(m => ({ default: m.default })));
const Spline = lazy(() => import('@splinetool/react-spline'));

const Membership = () => {
  // Memoize beam config to prevent unnecessary re-renders
  const beamConfig = useMemo(() => ({
    beamWidth: 3,
    beamHeight: 30,
    beamNumber: 20,
    speed: 3,
    noiseIntensity: 2.5,
    scale: 0.2,
    rotation: 140,
    lightColor: "#ffffff"
  }), []);

  const [showTitle, setShowTitle] = useState(false);
  const [showExplore, setShowExplore] = useState(true);
  const [showExploreButton, setShowExploreButton] = useState(false);
  const nextSectionRef = useRef<HTMLElement>(null);

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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowExplore(false);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden relative">
      <Navigation />
      
      {/* Beams Background - Full Page */}
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1, pointerEvents: 'none', willChange: 'transform' }}>
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
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

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
              willChange: 'transform',
              transform: 'translateZ(0)'
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
                  willChange: 'transform'
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
        <section ref={nextSectionRef} className="relative w-full min-h-screen bg-transparent" style={{ border: '1cm solid #000000' }}>
          {/* Empty section for now */}
        </section>
      </main>
      
      <Footer />
      
    </div>
  );
};

export default Membership;
