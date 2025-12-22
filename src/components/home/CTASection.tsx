import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Globe } from "@/components/ui/globe";

const CTASection = () => {
  return (
    <section className="min-h-[70vh] sm:min-h-[80vh] w-full flex items-center justify-center p-4 sm:p-6 relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
      {/* Globe background - positioned at bottom middle, 3/4 visible on mobile */}
      <div className="absolute inset-0 flex items-end justify-center opacity-30 sm:opacity-40 pointer-events-none overflow-hidden">
        <Globe className="max-w-[700px] sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1100px] translate-y-[25%] sm:translate-y-0 sm:pb-8 md:pb-12 lg:pb-16" />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 px-3 sm:px-2" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-display bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Ready to Execute with Intent?
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 font-light max-w-2xl mx-auto px-2">
          Applications are reviewed before access is granted.
        </p>
        
        <div className="flex justify-center px-2">
          <a href="/apply" className="w-full sm:w-auto">
            <ShimmerButton className="shadow-2xl scale-90 sm:scale-100 md:scale-110 lg:scale-125 w-full sm:w-auto">
              <span className="whitespace-pre-wrap text-center text-xs sm:text-sm md:text-base font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg px-3 sm:px-4 md:px-6 lg:px-8">
                Apply for Access
              </span>
            </ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
