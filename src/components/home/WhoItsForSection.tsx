import CardSwap, { Card } from "@/components/ui/card-swap";

const WhoItsForSection = () => {
  const audiences = [
    {
      title: "Builders",
      description: "Founders creating real companies",
      number: "01",
    },
    {
      title: "Seekers",
      description: "Those pursuing clarity over chaos",
      number: "02",
    },
    {
      title: "Executors",
      description: "Leaders who act with intent",
      number: "03",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-7xl mx-auto">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left side - Text content */}
          <div className="lg:pr-4 text-center lg:text-left" data-aos="fade-right" data-aos-duration="800">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide mb-4 sm:mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Who is it for
            </h2>
            <p className="text-white/60 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-3 sm:mb-4">
              Built for those who build.
            </p>
            <p className="text-white/40 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Not for everyone. For the intentional few who refuse to settle for chaos.
            </p>
            
            {/* Tagline */}
            <p className="text-white/30 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-8 sm:mt-12">
              Clarity • Structure • Intent
            </p>
          </div>

          {/* Right side - Card Swap */}
          <div 
            className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-end justify-center lg:justify-end overflow-visible pb-4 sm:pb-6 md:pb-10"
            data-aos="fade-left" 
            data-aos-duration="1000" 
            data-aos-delay="200"
          >
            <div className="relative w-full max-w-[380px] h-full max-h-[300px] flex items-end justify-center lg:justify-end">
              <div className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] h-[160px] sm:h-[180px] md:h-[200px]">
                <CardSwap
                  cardDistance={40}
                  verticalDistance={50}
                  delay={4000}
                  pauseOnHover={false}
                  width="100%"
                  height="100%"
                  skewAmount={4}
                  easing="elastic"
                  alignBottom={true}
                >
                  {audiences.map((audience) => (
                    <Card key={audience.number} className="p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                      <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-display">
                        {audience.number}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                          {audience.title}
                        </h3>
                        <p className="text-white/60 text-sm sm:text-base md:text-lg font-light">
                          {audience.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
