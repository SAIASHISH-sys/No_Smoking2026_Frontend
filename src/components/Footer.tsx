import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-orange-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-10 text-center md:text-left">
        <div>
          <a
            href="https://shaastra.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 font-black text-lg sm:text-2xl text-orange-700 tracking-tighter hover:opacity-80 transition-opacity"
          >
            <img src="/Shaastra logo Black.png" alt="Shaastra" className="h-6 sm:h-10 w-auto" />
            SHAASTRA. <ExternalLink size={14} className="sm:block hidden" />
          </a>
          <p className="text-stone-400 text-xs sm:text-sm mt-1 sm:mt-2 font-medium italic">
            Empowering a smoke-free generation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-bold text-stone-600 text-xs sm:text-sm tracking-widest uppercase">
          {['Sales', 'Cart', 'Profile', 'Timeline'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-orange-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="text-right">
          <p className="text-stone-400 text-xs sm:text-xs">
            © 2026 Shaastra Campaign Team.
          </p>
          <p className="text-stone-300 text-xs mt-0.5">
            IIT Madras · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
