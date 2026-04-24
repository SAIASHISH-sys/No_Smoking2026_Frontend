import { motion } from 'framer-motion';
import { User, Mail, ArrowRight } from 'lucide-react';

const TEAM_IMAGE =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=85&auto=format&fit=crop';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function ContactSection() {
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <motion.div
        {...fadeInUp}
        className="max-w-5xl mx-auto overflow-hidden rounded-lg sm:rounded-2xl md:rounded-[3rem] border border-orange-100 shadow-2xl"
      >
        <div className="grid md:grid-cols-2">
          {/* Form side */}
          <div className="p-6 sm:p-8 md:p-12 bg-[#FFFBF7] flex flex-col justify-center order-2 md:order-1">
            <span className="text-orange-500 font-mono text-xs font-bold uppercase tracking-widest">
              04 — Connect
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 mb-2 sm:mb-4 text-[#432818]">
              Let's Talk.
            </h2>
            <p className="text-stone-500 text-sm sm:text-base mb-6 sm:mb-8">
              Have questions about the campaign or want to volunteer? Drop us a
              line and we'll get back to you.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-2xl border border-stone-100 shadow-sm focus-within:border-orange-300 transition-colors">
                <User className="text-orange-600 flex-shrink-0" size={18} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-transparent outline-none w-full text-sm text-stone-700 placeholder:text-stone-400"
                />
              </div>
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-2xl border border-stone-100 shadow-sm focus-within:border-orange-300 transition-colors">
                <Mail className="text-orange-600 flex-shrink-0" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent outline-none w-full text-sm text-stone-700 placeholder:text-stone-400"
                />
              </div>
              <button className="w-full bg-[#432818] text-white py-3 sm:py-4 rounded-lg sm:rounded-2xl font-bold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 group text-sm sm:text-base">
                Get in Touch{' '}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="relative min-h-[300px] sm:min-h-[400px] overflow-hidden order-1 md:order-2">
            <img
              src={TEAM_IMAGE}
              alt="Campaign team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 to-[#432818]/60" />
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
              <p className="text-xs sm:text-sm font-semibold opacity-80 uppercase tracking-widest">
                Our team
              </p>
              <p className="text-lg sm:text-2xl font-black mt-1">Ready to help you</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
