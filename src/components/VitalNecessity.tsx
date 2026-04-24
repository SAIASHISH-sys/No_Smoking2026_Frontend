import { motion } from 'framer-motion';

const HEALTH_IMAGE =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85&auto=format&fit=crop';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function VitalNecessity() {
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
        {/* Image */}
        <motion.div {...fadeInUp} className="relative order-2 md:order-1">
          <div className="relative aspect-square rounded-2xl sm:rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-white">
            <img
              src={HEALTH_IMAGE}
              alt="Health impact of smoking"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#432818]/50 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest opacity-80">
                Global impact
              </p>
              <p className="text-xl sm:text-3xl font-black mt-1">8M+ deaths/year</p>
            </div>
          </div>
          <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-28 sm:w-40 h-28 sm:h-40 bg-orange-200 rounded-full mix-blend-multiply blur-2xl opacity-60 animate-pulse" />
          <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-amber-100 rounded-full blur-xl opacity-80" />
        </motion.div>

        {/* Text */}
        <motion.div {...fadeInUp} className="order-1 md:order-2">
          <span className="text-orange-500 font-mono text-xs font-bold uppercase tracking-widest">
            01 — The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-8 underline decoration-orange-300 decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8 text-[#432818]">
            The Vital Necessity
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed mb-4 sm:mb-6">
            Smoking remains the leading cause of preventable death globally.
            Within the high-stress environment of a technical fest, we often
            overlook the long-term impact of "stress-relief" habits.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed mb-6 sm:mb-8">
            We are here to provide the data, the support, and the tech-driven
            alternatives to ensure our innovators are as healthy as the machines
            they build.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { stat: '70%', label: 'Quit success with support' },
              { stat: '20 min', label: 'Until heart rate normalizes after quitting' },
            ].map(({ stat, label }) => (
              <div
                key={stat}
                className="bg-orange-50 rounded-lg sm:rounded-2xl p-3 sm:p-5 border border-orange-100"
              >
                <p className="text-lg sm:text-2xl font-black text-orange-600">{stat}</p>
                <p className="text-stone-500 text-xs sm:text-sm mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
