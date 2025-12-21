import { MorphingText } from "@/components/ui/morphing-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pb-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center pt-12 md:pt-20">
        <h1 className="font-body font-bold text-foreground leading-tight flex items-center justify-center w-full mb-4 min-h-[80px] md:min-h-[100px]">
          <MorphingText 
            texts={["the incite crew", "your unfair advantage", "One Stop Founder Solution"]} 
            className="text-white font-body !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl xl:!text-6xl whitespace-nowrap h-full"
            delay={3}
          />
        </h1>
        
        <div className="max-w-3xl mx-auto mb-10">
          <TextAnimate 
            animation="blurInUp" 
            by="word" 
            className="text-xl md:text-2xl text-white/80 font-light leading-relaxed"
          >
            A clarity first ecosystem helping founders make better decisions and execute with intent.
          </TextAnimate>
        </div>
        
        <div className="animate-fade-up-delay-2">
          <a href="/apply">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
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
