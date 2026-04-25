import { motion } from 'framer-motion';
import { Mail, Phone, Briefcase } from 'lucide-react';

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
          {/* Image side */}
          <div className="relative min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-orange-100 to-stone-100 flex items-center justify-center order-1 md:order-1">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
              <img src='/jyotirdagoat.png' alt="Jyotiraditya" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details side */}
          <div className="p-6 sm:p-8 md:p-12 bg-[#FFFBF7] flex flex-col justify-center order-2 md:order-2">
            <span className="text-orange-500 font-mono text-xs font-bold uppercase tracking-widest">
              04 — Connect
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 mb-1 sm:mb-2 text-[#432818]">
              Jyotiraditya
            </h2>
            <p className="text-orange-600 font-semibold text-sm sm:text-base mb-4 sm:mb-6">
              Shaastra Core
            </p>
            <p className="text-stone-500 text-sm sm:text-base mb-6 sm:mb-8">
core mentality brand ambassador for Shaastra(Pls dont belt on these lines)           
 </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-stone-100 shadow-sm">
                <Mail className="text-orange-600 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-semibold text-stone-700">idkuremailandlowefforts@nomail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-stone-100 shadow-sm">
                <Phone className="text-orange-600 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest">Phone</p>
                  <p className="text-sm font-semibold text-stone-700">+91 6767676767</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-stone-100 shadow-sm">
                <Briefcase className="text-orange-600 flex-shrink-0" size={18} />
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest">Location</p>
                  <p className="text-sm font-semibold text-stone-700">Pune, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
