import { Globe } from "@/components/ui/globe";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const CTASection = () => {
  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center p-6 relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <Globe className="w-full max-w-[1000px] aspect-square" />
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-12" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-4xl md:text-6xl font-bold font-display bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Ready to Execute with Intent?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
          Applications are reviewed before access is granted.
        </p>
        
        <div className="flex justify-center">
          <a href="/apply">
            <ShimmerButton className="shadow-2xl scale-125">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg px-8">
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
