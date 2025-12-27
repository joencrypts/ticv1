import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BorderBeam } from "@/components/ui/border-beam";
import { TextAnimate } from "@/components/ui/text-animate";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-transparent overflow-x-hidden relative">
      <ScrollProgress />
      <Navigation />
      
      <main className="flex flex-col w-full relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
          <div className="text-center max-w-6xl mx-auto">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-wide mb-8 bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              About Us
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
              <TextAnimate 
                animation="fadeIn"
                by="character"
                duration={2}
                delay={0.8}
                className="inline-block"
                segmentClassName="inline-block"
              >
                Clarity and execution systems for founders.
              </TextAnimate>
            </div>
          </div>
        </section>

        {/* Connecting Line */}
        <div className="flex justify-center py-4">
          <div className="h-16 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
        </div>

        {/* Who We Are - LEFT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-right" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="flex flex-col items-start">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">01</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight">
                    Who We Are
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent mt-6"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5 min-h-[280px]">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10 space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed">
                    <p>
                      The Incite Crew is a clarity first founder ecosystem built to help founders think clearly, plan deliberately, and execute with intent.
                    </p>
                    <p className="text-gray-500">
                      We focus on removing confusion before adding speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connecting Element */}
        <div className="flex justify-center py-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>

        {/* Why We Exist - RIGHT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-left" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 lg:order-1">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5 min-h-[280px]">
                  <BorderBeam size={500} duration={25} delay={8} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10 space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed">
                    <p className="text-gray-500 italic">But here's the problem we noticed:</p>
                    <p>Most founders do not fail due to lack of effort.</p>
                    <p>They fail due to unclear priorities, scattered execution, and constant second-guessing.</p>
                    <p className="text-gray-500 mt-4">
                      The Incite Crew exists to solve that.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 lg:pr-8">
                <div className="flex flex-col items-end">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">02</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight text-right">
                    Why We Exist
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-l from-white/30 via-white/20 to-transparent ml-auto mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connecting Element */}
        <div className="flex justify-center py-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>

        {/* What We Do - LEFT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-right" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="flex flex-col items-start">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">03</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight">
                    What We Do
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent mt-6"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5 min-h-[280px]">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <ul className="space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light relative z-10">
                    <li className="flex items-start gap-6">
                      <span className="text-gray-600 mt-2 font-number font-bold text-xl sm:text-2xl">01</span>
                      <span className="leading-tight">Define the right problem</span>
                    </li>
                    <li className="flex items-start gap-6">
                      <span className="text-gray-600 mt-2 font-number font-bold text-xl sm:text-2xl">02</span>
                      <span className="leading-tight">Plan the year with clarity</span>
                    </li>
                    <li className="flex items-start gap-6">
                      <span className="text-gray-600 mt-2 font-number font-bold text-xl sm:text-2xl">03</span>
                      <span className="leading-tight">Execute without noise or distraction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connecting Element */}
        <div className="flex justify-center py-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>

        {/* How we are Built - RIGHT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-left" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 lg:order-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative rounded-xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-6 sm:p-8 overflow-hidden backdrop-blur-sm border border-white/5">
                    <BorderBeam size={250} duration={20} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                    <div className="relative z-10">
                      <div className="text-gray-600 text-sm sm:text-base font-number font-bold uppercase tracking-wider mb-4">01</div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 mb-3">Internal Research</h3>
                      <p className="text-sm sm:text-base text-gray-500 font-light">All frameworks developed internally</p>
                    </div>
                  </div>
                  <div className="relative rounded-xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-6 sm:p-8 overflow-hidden backdrop-blur-sm border border-white/5">
                    <BorderBeam size={250} duration={20} delay={8} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                    <div className="relative z-10">
                      <div className="text-gray-600 text-sm sm:text-base font-number font-bold uppercase tracking-wider mb-4">02</div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 mb-3">Refined Release</h3>
                      <p className="text-sm sm:text-base text-gray-500 font-light">Tools refined before release</p>
                    </div>
                  </div>
                  <div className="relative rounded-xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-6 sm:p-8 overflow-hidden backdrop-blur-sm border border-white/5">
                    <BorderBeam size={250} duration={20} delay={16} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                    <div className="relative z-10">
                      <div className="text-gray-600 text-sm sm:text-base font-number font-bold uppercase tracking-wider mb-4">03</div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 mb-3">Controlled Access</h3>
                      <p className="text-sm sm:text-base text-gray-500 font-light">Intentional and selective access</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 lg:pr-8">
                <div className="flex flex-col items-end">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">04</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight text-right">
                    How We are Built
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-l from-white/30 via-white/20 to-transparent ml-auto mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connecting Element */}
        <div className="flex justify-center py-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>

        {/* Our Approach - LEFT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-right" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="flex flex-col items-start">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">05</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight">
                    Our Approach
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent mt-6"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5 min-h-[280px]">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10 space-y-6 text-lg sm:text-xl md:text-2xl text-gray-400 font-light leading-tight">
                    <p className="border-l-4 border-gray-600 pl-8">Clarity comes before speed.</p>
                    <p className="border-l-4 border-gray-600 pl-8">Structure comes before scale.</p>
                    <p className="border-l-4 border-gray-600 pl-8">Execution comes after decisions are clear.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connecting Element */}
        <div className="flex justify-center py-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>

        {/* Who It's For - RIGHT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-left" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 lg:order-1">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5 min-h-[280px]">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <ul className="space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light relative z-10">
                    <li className="flex items-start gap-6">
                      <span className="text-gray-600 mt-2 text-xl font-number">•</span>
                      <span>Are building real companies</span>
                    </li>
                    <li className="flex items-start gap-6">
                      <span className="text-gray-600 mt-2 text-xl font-number">•</span>
                      <span>Want structure over motivation</span>
                    </li>
                    <li className="flex items-start gap-6">
                      <span className="text-gray-600 mt-2 text-xl font-number">•</span>
                      <span>Value clear thinking over constant advice</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 lg:pr-8">
                <div className="flex flex-col items-end">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">06</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight text-right">
                    Who It is For
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-l from-white/30 via-white/20 to-transparent ml-auto mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connecting Element */}
        <div className="flex justify-center py-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>

        {/* The Team - LEFT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-right" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="flex flex-col items-start">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">07</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight">
                    The Team
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent mt-6"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5 min-h-[280px]">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10 space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light leading-relaxed">
                    <p>
                      Behind every system is the team that builds it. The Incite Crew is run by a focused internal team with backgrounds in strategy, product, operations, and research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connecting Element */}
        <div className="flex justify-center py-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>

        {/* Where we are Headed - RIGHT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-left" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 lg:order-1">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5 min-h-[280px]">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 leading-tight">
                      Build the most reliable clarity and execution system for founders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2 lg:pr-8">
                <div className="flex flex-col items-end">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">08</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight text-right">
                    Where we are Headed
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-l from-white/30 via-white/20 to-transparent ml-auto mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connecting Element */}
        <div className="flex justify-center py-6 relative">
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-white/20 to-white/40"></div>
          </div>
        </div>

        {/* Contact - LEFT */}
        <section className="px-4 sm:px-6 md:px-8 relative min-h-[400px] flex items-center" data-aos="fade-right" data-aos-duration="300" data-aos-delay="0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 lg:pr-8">
                <div className="flex flex-col items-start">
                  <div className="text-sm sm:text-base md:text-lg text-white/40 font-number font-normal uppercase tracking-[0.2em] mb-4">09</div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-wide bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:200%_100%] animate-shine bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] leading-tight">
                    Contact
                  </h2>
                  <div className="h-px w-32 bg-gradient-to-r from-white/30 via-white/20 to-transparent mt-6"></div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl bg-gradient-to-br from-black/50 via-black/40 to-black/50 p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden backdrop-blur-sm border border-white/5 min-h-[280px]">
                  <BorderBeam size={500} duration={25} delay={0} borderWidth={2} colorFrom="#ffffff" colorTo="#939393" />
                  <div className="relative z-10">
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-8">
                      Ready to join? For inquiries or applications:
                    </p>
                    <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-400 font-light">
                      <p>
                        <a href="mailto:contact@theincitecrew.com" className="text-gray-400 hover:text-gray-300 transition-all duration-300 underline decoration-gray-600 hover:decoration-gray-500 underline-offset-4 font-number">
                          contact@theincitecrew.com
                        </a>
                      </p>
                      <p>
                        <a href="https://linkedin.com/company/theincitecrew" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-all duration-300 underline decoration-gray-600 hover:decoration-gray-500 underline-offset-4">
                          <span className="font-number">LinkedIn:</span> The Incite Crew
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
