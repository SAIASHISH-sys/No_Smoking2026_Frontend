import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85&auto=format&fit=crop';

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Clear mountain air"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFBF7]/95 via-[#FFFBF7]/80 to-orange-100/60" />
      </div>

      {/* Decorative blobs - hidden on mobile */}
      <div className="absolute top-12 sm:top-20 right-4 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-10 sm:bottom-20 left-2 sm:left-10 w-32 sm:w-56 h-32 sm:h-56 bg-amber-200/30 rounded-full blur-2xl animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="bg-orange-100 text-orange-700 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-m font-bold uppercase tracking-widest">
            NO-SMOKING
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-4 sm:mt-8 leading-[0.9] tracking-tighter text-[#432818]">
            SHAASTRA{' '}
            <span className=" italic">SOCIAL</span>
            <br />
            CAMPAIGN{' '}
            <span className="relative text-orange-600 inline-block">
               2027.
              <span className="absolute -bottom-1 left-0 w-full h-1 sm:h-1.5 bg-orange-300 rounded-full" />
            </span>
          </h1>
          <p className="mt-4 sm:mt-8 text-sm sm:text-lg text-stone-600 max-w-md leading-relaxed">
            The Shaastra No-Smoking campaign is more than a warning — it's an
            invitation to a higher quality of life through technology and
            community.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col md:flex-row flex-wrap gap-3 sm:gap-4">
            <a 
              href="register"
             className="bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all flex items-center justify-center md:justify-start gap-2 group text-sm sm:text-base w-full md:w-auto">
              Join the Movement{' '}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="timeline"
              className="border-2 border-[#432818]/20 text-[#432818] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:border-orange-500 hover:text-orange-600 transition-all text-sm sm:text-base text-center w-full md:w-auto"
            >
              See Timeline
            </a>
          </div>
        </motion.div>

        {/* Hero image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="relative block sm:block md:block"
        >
          <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-2 sm:border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85&auto=format&fit=crop"
              alt="Healthy living - no smoking"
              className="w-full h-full object-cover"
            />
            {/* Stats badge */}
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 shadow-lg">
              <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold">
                Lives impacted
              </p>
              <p className="text-lg sm:text-2xl font-black text-orange-600">10,000+</p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-orange-200 rounded-full mix-blend-multiply blur-2xl opacity-60" />
        </motion.div>
      </div>
    </header>
  );
}
