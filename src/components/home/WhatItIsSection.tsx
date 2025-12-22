import { BorderBeam } from "@/components/ui/border-beam";
import { WordRotate } from "@/components/ui/word-rotate";
import { TextAnimate } from "@/components/ui/text-animate";
import ScrollFloat from "@/components/ui/scroll-float";

const WhatItIsSection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative bg-transparent" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-8 sm:space-y-12 md:space-y-16" data-aos="fade-up">
        <ScrollFloat
          as="h1"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="text-center px-2"
          textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-body tracking-wide text-center bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          What is TIC
        </ScrollFloat>
        
        <div className="relative w-full rounded-xl bg-gradient-to-b from-black/60 via-black/50 to-black/60 p-6 sm:p-8 md:p-12 overflow-hidden">
          <BorderBeam 
            size={400} 
            duration={20} 
            delay={0} 
            borderWidth={1.5} 
            colorFrom="#ffffff" 
            colorTo="#939393"
          />
          <div className="space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
            <TextAnimate 
              animation="blurIn" 
              by="text" 
              once={true}
              className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed text-center w-full block px-2"
              segmentClassName="whitespace-normal inline"
            >
              A space where clarity replaces confusion, structure replaces chaos, and execution is about thinking clearer and not grinding harder.
            </TextAnimate>
            
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-4 border-t border-white/10 mt-6 sm:mt-8 px-2">
              <span className="text-xs sm:text-sm md:text-base text-white/50 font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-4 sm:mt-8 text-center">
                Everything is built around
              </span>
              <WordRotate 
                words={["Clear Thinking", "Focused Execution", "Strategic Structure", "Deep Intent"]} 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-display font-bold py-2 text-center px-2"
                duration={3000}
              />
              <span className="text-xs sm:text-sm md:text-base text-white/50 font-light uppercase tracking-[0.15em] sm:tracking-[0.2em] text-center">
                Beyond hype. Pure execution.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatItIsSection;
