import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Check, ArrowRight } from "lucide-react";

const programs = [
  {
    id: "founder",
    name: "Explorer",
    tagline: "For early-stage founders",
    description:
      "Designed for founders who are actively building their first or second venture. Access mentorship, capital introductions, and a peer network that understands your challenges.",
    price: "₹7,999",
    period: "one-time",
    features: [
      "1:1 mentorship with experienced operators",
      "Weekly founder roundtables",
      "Priority investor introductions",
      "Access to founder toolkit & resources",
      "Private Slack community access",
      "Quarterly in-person summits",
    ],
    highlight: false,
  },
  {
    id: "executive",
    name: "Visionary",
    tagline: "For scaling founders & executives",
    description:
      "Built for founders with traction or executives transitioning to founder roles. Deep strategic support, board-level connections, and accelerated capital access.",
    price: "₹14,999",
    period: "one-time",
    features: [
      "1:1 mentorship with industry leaders",
      "Dedicated strategic advisor",
      "Board member introductions",
      "Executive coaching sessions",
      "LP & family office access",
      "Priority deal flow sharing",
      "Annual leadership retreat",
    ],
    highlight: true,
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black to-gray-900 overflow-x-hidden">
      <Navigation />
      
      <main className="flex flex-col w-full items-center px-4 pt-20 pb-0 gap-8">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-transparent to-black/80"></div>
          <div className="absolute -top-1/2 -right-1/2 h-[200%] w-[200%] animate-[spin_30s_linear_infinite] bg-[radial-gradient(circle_at_center,hsla(0,0%,100%,0.05),transparent_50%)]"></div>
        </div>
        
        {/* Intro Section */}
        <div className="w-full flex flex-col justify-center px-6 md:px-12 py-12" data-aos="fade-up">
            <div className="max-w-xl mx-auto text-center space-y-6">
                <h1 className="font-display text-5xl md:text-7xl text-foreground mb-2 uppercase tracking-wide animate-fade-in">
                  Programs
                </h1>
                <p className="text-lg text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
                  Curated tracks for your entrepreneurial journey. Choose your path to success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <Link 
                    to="/apply" 
                    className="group relative overflow-hidden px-6 py-3 bg-transparent border border-white/20 rounded-md text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Start Application</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-white/5 group-hover:opacity-0 transition-opacity duration-300"></span>
                  </Link>
                  <Link 
                    to="#founder" 
                    className="px-6 py-3 text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                  >
                    View Tracks ↓
                  </Link>
                </div>
            </div>
        </div>

        {/* Program Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-stretch pb-12">
        {programs.map((program, index) => (
            <div 
              key={program.id} 
              id={program.id}
                  className="w-full md:w-1/2 flex justify-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
            >
              <div 
                className={`w-full max-w-sm rounded-xl p-0.5 overflow-hidden relative group ${
                  program.highlight 
                        ? 'bg-gradient-to-br from-gray-400 to-gray-600' 
                    : 'bg-gradient-to-br from-gray-700 to-gray-800'
                }`}
              >
                <div className="absolute inset-0.5 bg-gradient-to-br from-gray-900 to-black rounded-xl transition-all duration-700 group-hover:opacity-90"></div>
                
                    <div className="relative z-10 h-full bg-gradient-to-br from-gray-900 to-black/90 p-8 rounded-xl flex flex-col">
                  {program.highlight && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-gray-400 to-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      POPULAR
                    </div>
                  )}
                  
                  <div className="mb-8 space-y-4">
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                      {program.tagline}
                    </p>
                    <h2 className="font-display text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {program.name}
                    </h2>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="mb-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700/50">
                    <div className="flex items-end gap-2">
                      <span className="font-display text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        {program.price}
                      </span>
                      <span className="text-sm text-gray-400 mb-1">
                        {program.period}
                      </span>
                    </div>
                        <div className={`h-1 w-16 rounded-full mt-2 ${program.highlight ? 'bg-gradient-to-r from-gray-400 to-gray-600' : 'bg-gray-700'}`}></div>
                  </div>

                      <ul className="space-y-3 mb-10 flex-grow">
                    {program.features.map((feature, i) => (
                      <li 
                        key={feature} 
                        className="flex items-start gap-3 text-sm font-light text-gray-300 group-hover:text-white transition-colors duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                            <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/apply?track=${program.id}`}
                    className={`block w-full text-center text-sm uppercase tracking-wider py-4 rounded-lg font-medium transition-all duration-300 ${
                      program.highlight
                            ? 'bg-gradient-to-r from-gray-400 to-gray-600 text-white hover:shadow-lg hover:shadow-gray-500/30'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
        ))}
        </div>
        
        {/* Footer Section */}
        <div 
          className="w-full mt-auto relative"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
          <div className="relative z-10">
            <Footer />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>
        </div>

      </main>
    </div>
  );
};

export default Programs;
