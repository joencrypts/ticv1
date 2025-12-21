import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import TargetCursor from "@/components/ui/target-cursor";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const HowItWorksSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const smokyLayerRef = useRef<HTMLDivElement>(null);
  const radialLayerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleReveal = () => {
    if (isRevealed) return;
    
    // Immediately remove the black background
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    const tl = gsap.timeline({
      onComplete: () => setIsRevealed(true)
    });

    // Animate the radial black layer - scale up and fade
    tl.to(radialLayerRef.current, {
      scale: 3,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    }, 0);

    // Animate the smoky gradient layer - dissolve outward
    tl.to(smokyLayerRef.current, {
      scale: 2,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // Fade out the main overlay quickly
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, 0);

    // Reveal content with stagger
    tl.fromTo(
      ".how-step",
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out"
      },
      0.3
    );
  };

  useEffect(() => {
    // Initial state: content hidden
    if (contentRef.current) {
      gsap.set(".how-step", { opacity: 0, y: 40 });
    }
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient - fades out immediately on click */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
      />
      
      {/* Content Layer */}
      <div ref={contentRef} className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-5xl md:text-7xl font-bold font-display tracking-wide text-center mb-24 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          HOW IT WORKS
        </h2>
        
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="how-step cursor-target flex flex-col md:flex-row items-start md:items-center gap-6 group">
            <div className="text-6xl md:text-8xl font-bold text-white font-display">01</div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Apply</h3>
              <p className="text-lg text-gray-400 font-light">Your application is reviewed.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="how-step cursor-target flex flex-col md:flex-row items-start md:items-center gap-6 group">
            <div className="text-6xl md:text-8xl font-bold text-white font-display">02</div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Access</h3>
              <p className="text-lg text-gray-400 font-light">You're onboarded to the right tier.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="how-step cursor-target flex flex-col md:flex-row items-start md:items-center gap-6 group">
            <div className="text-6xl md:text-8xl font-bold text-white font-display">03</div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Execute</h3>
              <p className="text-lg text-gray-400 font-light">Use frameworks and planning tools to run the year.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Smoky Black Fade Overlay */}
      {!isRevealed && (
        <div 
          ref={overlayRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer"
          onClick={handleReveal}
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,1) 100%)",
            backdropFilter: "blur(8px)"
          }}
        >
          {/* Smoky animated layers */}
          <div className="absolute inset-0 opacity-30 overflow-hidden">
            <div ref={smokyLayerRef} className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div ref={radialLayerRef} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,black_70%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <p className="text-white text-3xl md:text-4xl font-light tracking-widest uppercase mb-8 animate-pulse">
              How It Works
            </p>
            <ShimmerButton 
              className="cursor-target group/btn px-10 py-5 text-lg font-medium tracking-wide relative mx-auto"
              background="transparent"
            >
              {/* Logo - visible by default, hidden on hover */}
              <img 
                src="/logo/ticlogo.svg" 
                alt="TIC Logo" 
                className="h-8 w-auto transition-all duration-300 opacity-100 scale-100 group-hover/btn:opacity-0 group-hover/btn:scale-75 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              {/* Text - hidden by default, revealed on hover */}
              <span className="transition-all duration-300 opacity-0 scale-75 group-hover/btn:opacity-100 group-hover/btn:scale-100">
                Click Here
              </span>
            </ShimmerButton>
          </div>
        </div>
      )}

      {/* Target Cursor - only active after reveal */}
      {isRevealed && (
        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={false}
          parallaxOn={true}
        />
      )}
    </section>
  );
};

export default HowItWorksSection;
