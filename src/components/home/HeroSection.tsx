import { MorphingText } from "@/components/ui/morphing-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pb-8 sm:pb-16 overflow-hidden">
      {/* Background gradient orbs - smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-accent/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center pt-8 sm:pt-12 md:pt-20">
        <h1 className="font-display font-bold text-foreground leading-tight flex items-center justify-center w-full mb-3 sm:mb-4 min-h-[60px] sm:min-h-[80px] md:min-h-[100px]">
          <MorphingText 
            texts={["the incite crew", "your unfair advantage", "One Stop Founder Solution"]} 
            className="text-white font-display !text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-5xl 2xl:!text-6xl whitespace-nowrap h-full px-2"
            delay={3}
          />
        </h1>
        
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2">
          <TextAnimate 
            animation="blurInUp" 
            by="word" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light leading-relaxed"
          >
            A clarity first ecosystem helping founders make better decisions and execute with intent.
          </TextAnimate>
        </div>
        
        <div className="animate-fade-up-delay-2 px-2">
          <a href="/apply">
            <ShimmerButton className="shadow-2xl w-full sm:w-auto">
              <span className="whitespace-pre-wrap text-center text-xs sm:text-sm md:text-base font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg px-4 sm:px-6">
                Apply Now
              </span>
            </ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
