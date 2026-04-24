import { motion } from 'framer-motion';

const WORKSHOP_IMAGE =
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=85&auto=format&fit=crop';
const COMMUNITY_IMAGE =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85&auto=format&fit=crop';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-48 sm:h-60 md:h-72 lg:h-80 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-sm:border-2 border-white">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
}

export default function ShaastraIntegration() {
  return (
    <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 bg-orange-50/50">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-20 md:space-y-32">
        <motion.div
          {...fadeInUp}
          className="text-center max-w-xl mx-auto mb-2 sm:mb-4"
        >
          <span className="text-orange-500 font-mono text-xs font-bold uppercase tracking-widest">
            02 — Our Approach
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 text-[#432818]">
            The Platform For The Need
          </h2>
        </motion.div>

        {/* Item Left */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">
          <motion.div {...fadeInUp} className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6 italic text-[#432818]">
              Engineering Wellness
            </h3>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base md:text-lg">
              Shaastra integrates wellness into its core by hosting workshops
              that use bio-feedback and data analytics to track lung recovery,
              turning the quitting journey into a measurable engineering feat.
            </p>
            <ul className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
              {[
                'Bio-feedback lung capacity stations',
                'Nicotine-replacement tech demos',
                'Data-driven habit tracking apps',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-stone-500 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeInUp} className="md:w-1/2 w-full order-1 md:order-2">
            <ImageCard src={WORKSHOP_IMAGE} alt="Tech wellness workshop" />
          </motion.div>
        </div>

        {/* Item Right */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">
          <motion.div
            {...fadeInUp}
            className="md:w-1/2 w-full md:order-1 order-2"
          >
            <ImageCard src={COMMUNITY_IMAGE} alt="Community gathering" />
          </motion.div>
          <motion.div {...fadeInUp} className="md:w-1/2 md:order-2 order-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6 italic text-[#432818]">
              A Shared Vision
            </h3>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base md:text-lg">
              By partnering with Shaastra, the campaign gains access to
              thousands of students, fostering a smoke-free culture that persists
              long after the fest ends — creating lasting communities committed
              to health and excellence.
            </p>
            <div className="mt-6 flex flex-col xs:flex-row gap-4 sm:gap-6">
              {[
                { num: '5K+', label: 'Students reached' },
                { num: '3', label: 'Days of impact' },
                { num: '20+', label: 'Workshops' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-lg sm:text-2xl font-black text-orange-600">{num}</p>
                  <p className="text-stone-400 text-xs uppercase tracking-wider mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
