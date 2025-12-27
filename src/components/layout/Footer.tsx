import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 sm:py-6 md:py-10 lg:py-12 px-4 sm:px-6 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        <div className="text-center md:text-left order-2 md:order-1">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1 sm:mb-2">The Incite Crew</h3>
          </div>
          
        <div className="flex items-center gap-4 sm:gap-6 order-1 md:order-2">
          <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60 order-3">
          <a href="#" className="hover:text-white transition-colors">Legal</a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
