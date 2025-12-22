const HowItWorksSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-24" data-aos="fade-up" data-aos-duration="1000">
      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide text-center mb-12 sm:mb-16 md:mb-24 px-2 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" data-aos="fade-up" data-aos-duration="1000">
          HOW IT WORKS
        </h2>
        
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 group text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white font-display">01</div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Apply</h3>
              <p className="text-base sm:text-lg text-gray-400 font-light">Your application is reviewed.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 group text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white font-display">02</div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Get Access</h3>
              <p className="text-base sm:text-lg text-gray-400 font-light">You are onboarded to the right tier.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 group text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white font-display">03</div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Execute</h3>
              <p className="text-base sm:text-lg text-gray-400 font-light">Use frameworks and planning tools to run the year.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
