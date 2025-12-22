import { BorderBeam } from "@/components/ui/border-beam";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import TrueFocus from "@/components/ui/true-focus";

const OfferingsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black/20" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 text-white text-center sm:text-left">
          <TrueFocus 
            sentence="OUR OFFERINGS"
            manualMode={false}
            blurAmount={4}
            borderColor="white"
            glowColor="rgba(255, 255, 255, 0.5)"
            animationDuration={0.5}
            pauseBetweenAnimations={2}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Explorer Tier */}
          <div className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-black/60 via-black/50 to-black/60 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <BorderBeam 
              size={400} 
              duration={20} 
              delay={0} 
              borderWidth={1.5} 
              colorFrom="#ffffff" 
              colorTo="#939393"
            />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Explorer</h3>
              <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px] md:h-24">
                Foundation manual and structured year planning. Self serve access to our core frameworks.
              </p>
              <div className="flex justify-start">
                <InteractiveHoverButton className="w-full sm:w-auto text-sm sm:text-base">Apply Now</InteractiveHoverButton>
              </div>
            </div>
          </div>

          {/* Visionary Tier */}
          <div className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-black/60 via-black/50 to-black/60 overflow-hidden" data-aos="fade-up" data-aos-delay="400">
            <BorderBeam 
              size={400} 
              duration={20} 
              delay={10} 
              borderWidth={1.5} 
              colorFrom="#ffffff" 
              colorTo="#939393"
            />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Visionary</h3>
              <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px] md:h-24">
                Deep execution support with focused involvement. Limited access for founders scaling rapidly.
              </p>
              <div className="flex justify-start">
                <InteractiveHoverButton className="w-full sm:w-auto text-sm sm:text-base">Apply Now</InteractiveHoverButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;

