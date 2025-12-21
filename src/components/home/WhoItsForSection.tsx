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
    <section className="py-24 px-6 relative" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-7xl mx-auto">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left side - Text content */}
          <div className="lg:pr-4" data-aos="fade-right" data-aos-duration="800">
            <h2 className="text-5xl md:text-7xl font-bold font-display tracking-wide mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              WHO IT'S FOR
            </h2>
            <p className="text-white/60 text-2xl md:text-3xl font-light leading-relaxed mb-4">
              Built for those who build.
            </p>
            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
              Not for everyone. For the intentional few who refuse to settle for chaos.
            </p>
            
            {/* Tagline */}
            <p className="text-white/30 text-sm md:text-base uppercase tracking-[0.3em] mt-12">
              Clarity • Structure • Intent
            </p>
          </div>

          {/* Right side - Card Swap */}
          <div 
            className="relative h-[420px] flex items-end justify-end overflow-visible pb-10"
            data-aos="fade-left" 
            data-aos-duration="1000" 
            data-aos-delay="200"
          >
            <div className="relative" style={{ width: 380, height: 300 }}>
              <CardSwap
                cardDistance={50}
                verticalDistance={60}
                delay={4000}
                pauseOnHover={false}
                width={340}
                height={200}
                skewAmount={4}
                easing="elastic"
                alignBottom={true}
              >
                {audiences.map((audience) => (
                  <Card key={audience.number} className="p-8 flex flex-col justify-between">
                    <span className="text-white text-6xl font-bold font-display">
                      {audience.number}
                    </span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {audience.title}
                      </h3>
                      <p className="text-white/60 text-lg font-light">
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
    </section>
  );
};

export default WhoItsForSection;
