import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BorderBeam } from "@/components/ui/border-beam";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-transparent overflow-x-hidden relative">
      <ScrollProgress />
      <Navigation />
      
      <main className="flex flex-col w-full relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32 md:py-40 overflow-hidden">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-block mb-8" data-aos="fade-in" data-aos-duration="1000">
              <h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-display tracking-tight mb-8 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                About Us
              </h1>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/80 font-light max-w-4xl mx-auto leading-relaxed" data-aos="fade-in" data-aos-delay="200">
              Clarity and execution systems for founders.
            </p>
          </div>
        </section>

        {/* Who We Are - LEFT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="mb-8 lg:mb-12">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">01</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    Who We Are
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10 space-y-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed">
                    <p>
                      The Incite Crew is a clarity-first founder ecosystem built to help founders think clearly, plan deliberately, and execute with intent.
                    </p>
                    <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl">
                      We focus on removing confusion before adding speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist - RIGHT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5">
                  <BorderBeam size={500} duration={25} delay={8} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10 space-y-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed">
                    <p>Most founders don't fail due to lack of effort.</p>
                    <p>They fail due to unclear priorities, scattered execution, and constant second-guessing.</p>
                    <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl">
                      The Incite Crew exists to solve that.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 lg:pr-8">
                <div className="mb-8 lg:mb-12 text-right">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">02</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    Why We Exist
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-l from-white/30 via-white/20 to-transparent ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do - LEFT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="mb-8 lg:mb-12">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">03</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    What We Do
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-8">
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                    We provide structured frameworks, planning systems, and execution support that help founders:
                  </p>
                  <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5">
                    <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                    <ul className="space-y-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 font-light relative z-10">
                      <li className="flex items-start gap-6">
                        <span className="text-white/30 mt-2 font-bold text-2xl sm:text-3xl">01</span>
                        <span className="leading-tight">Define the right problem</span>
                      </li>
                      <li className="flex items-start gap-6">
                        <span className="text-white/30 mt-2 font-bold text-2xl sm:text-3xl">02</span>
                        <span className="leading-tight">Plan the year with clarity</span>
                      </li>
                      <li className="flex items-start gap-6">
                        <span className="text-white/30 mt-2 font-bold text-2xl sm:text-3xl">03</span>
                        <span className="leading-tight">Execute without noise or distraction</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                    Everything is designed to be practical and usable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we are Built - RIGHT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="space-y-8">
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                    TIC is built as a system, along with a community.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative rounded-xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-6 sm:p-8 overflow-hidden backdrop-blur-sm border border-white/5">
                      <BorderBeam size={250} duration={20} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                      <div className="relative z-10">
                        <div className="text-white/30 text-sm sm:text-base font-light uppercase tracking-wider mb-4">01</div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">Internal Research</h3>
                        <p className="text-base sm:text-lg text-white/80 font-light">All frameworks developed internally</p>
                      </div>
                    </div>
                    <div className="relative rounded-xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-6 sm:p-8 overflow-hidden backdrop-blur-sm border border-white/5">
                      <BorderBeam size={250} duration={20} delay={8} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                      <div className="relative z-10">
                        <div className="text-white/30 text-sm sm:text-base font-light uppercase tracking-wider mb-4">02</div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">Refined Release</h3>
                        <p className="text-base sm:text-lg text-white/80 font-light">Tools refined before release</p>
                      </div>
                    </div>
                    <div className="relative rounded-xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-6 sm:p-8 overflow-hidden backdrop-blur-sm border border-white/5">
                      <BorderBeam size={250} duration={20} delay={16} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                      <div className="relative z-10">
                        <div className="text-white/30 text-sm sm:text-base font-light uppercase tracking-wider mb-4">03</div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">Controlled Access</h3>
                        <p className="text-base sm:text-lg text-white/80 font-light">Intentional and selective access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 lg:pr-8">
                <div className="mb-8 lg:mb-12 text-right">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">04</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    How We are Built
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-l from-white/30 via-white/20 to-transparent ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach - LEFT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="mb-8 lg:mb-12">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">05</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    Our Approach
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10 space-y-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/95 font-light leading-tight">
                    <p className="border-l-4 border-white/30 pl-8">Clarity comes before speed.</p>
                    <p className="border-l-4 border-white/30 pl-8">Structure comes before scale.</p>
                    <p className="border-l-4 border-white/30 pl-8">Execution comes after decisions are clear.</p>
                  </div>
                  <p className="relative z-10 mt-10 text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                    This approach guides everything we build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For - RIGHT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="space-y-8">
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                    The Incite Crew is for founders who:
                  </p>
                  <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5">
                    <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                    <ul className="space-y-6 text-xl sm:text-2xl md:text-3xl text-white/95 font-light relative z-10">
                      <li className="flex items-start gap-6">
                        <span className="text-white/30 mt-2 text-2xl">•</span>
                        <span>Are building real companies</span>
                      </li>
                      <li className="flex items-start gap-6">
                        <span className="text-white/30 mt-2 text-2xl">•</span>
                        <span>Want structure over motivation</span>
                      </li>
                      <li className="flex items-start gap-6">
                        <span className="text-white/30 mt-2 text-2xl">•</span>
                        <span>Value clear thinking over constant advice</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                    It is not built for idea-stage exploration or passive consumption.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 lg:pr-8">
                <div className="mb-8 lg:mb-12 text-right">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">06</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    Who It is For
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-l from-white/30 via-white/20 to-transparent ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Team - LEFT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="mb-8 lg:mb-12">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">07</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    The Team
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10 space-y-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed">
                    <p>
                      The Incite Crew is run by a focused internal team with backgrounds in strategy, product, operations, and research.
                    </p>
                    <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl">
                      Frameworks and systems are developed internally and released only when ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where we are Headed - RIGHT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 lg:order-1">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10">
                    <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-8">
                      Our goal is simple:
                    </p>
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                      Build the most reliable clarity and execution system for founders.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                      Everything else is secondary.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 lg:pr-8">
                <div className="mb-8 lg:mb-12 text-right">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">08</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    Where we are Headed
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-l from-white/30 via-white/20 to-transparent ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact - LEFT */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 relative" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="mb-8 lg:mb-12">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-light uppercase tracking-[0.2em] mb-4">09</div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-tight">
                    Contact
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10">
                    <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-10">
                      For inquiries or applications:
                    </p>
                    <div className="space-y-6 text-xl sm:text-2xl md:text-3xl text-white/95 font-light">
                      <p>
                        <a href="mailto:contact@theincitecrew.com" className="text-white hover:text-white/80 transition-all duration-300 underline decoration-white/30 hover:decoration-white/60 underline-offset-4">
                          contact@theincitecrew.com
                        </a>
                      </p>
                      <p>
                        <a href="https://linkedin.com/company/theincitecrew" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-all duration-300 underline decoration-white/30 hover:decoration-white/60 underline-offset-4">
                          LinkedIn: The Incite Crew
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default About;
