import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold text-white mb-2">The Incite Crew</h3>
          </div>
          
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-white/60">
          <a href="#" className="hover:text-white transition-colors">Legal</a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
