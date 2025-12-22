import { MorphingText } from "@/components/ui/morphing-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pb-8 sm:pb-16 overflow-visible">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center pt-16 sm:pt-20 md:pt-24 px-3 sm:px-4">
        <h1 className="font-display font-bold text-foreground leading-tight flex items-center justify-center w-full mb-4 sm:mb-6 md:mb-8 min-h-[80px] sm:min-h-[90px] md:min-h-[110px] py-4 sm:py-2 md:py-0 overflow-visible">
          <MorphingText 
            texts={["the incite crew", "your unfair advantage", "One Stop Founder Solution"]} 
            className="text-white font-display !text-lg sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-5xl 2xl:!text-6xl whitespace-nowrap h-full px-1 sm:px-2"
            delay={3}
          />
        </h1>
        
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4">
          <TextAnimate 
            animation="blurInUp" 
            by="word" 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 sm:text-white/80 font-light leading-relaxed"
          >
            A clarity first ecosystem helping founders make better decisions and execute with intent.
          </TextAnimate>
        </div>
        
        <div className="animate-fade-up-delay-2 px-2 sm:px-4">
          <a href="/apply">
            <ShimmerButton className="shadow-2xl w-full sm:w-auto scale-95 sm:scale-100">
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
