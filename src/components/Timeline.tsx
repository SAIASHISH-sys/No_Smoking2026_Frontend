import { motion } from 'framer-motion';

const days = [
  {
    day: 'Day 01',
    title: 'The Awakening',
    desc: 'Interactive exhibits and lung capacity testing booths open across the campus. Visitors experience real data about their respiratory health.',
    icon: '🌅',
  },
  {
    day: 'Day 02',
    title: 'The Tech-Talk',
    desc: 'Keynotes on nicotine-replacement technology and habit design science, led by IIT researchers and health-tech pioneers.',
    icon: '🔬',
  },
  {
    day: 'Day 03',
    title: 'The Pledge',
    desc: 'Community-wide commitment ceremony with real-time tracking and rewards distribution for those who make the pledge.',
    icon: '🤝',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-12 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#2D1B10] text-orange-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="text-orange-400 font-mono text-xs font-bold uppercase tracking-widest">
            03 — The Event
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3">Timeline of Impact</h2>
        </motion.div>

        <div className="relative pl-6 sm:pl-8">
          {/* Vertical line */}
          <div className="absolute left-2 sm:left-0 top-2 bottom-2 w-px bg-gradient-to-b from-orange-600 via-orange-800 to-transparent" />

          {days.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pb-12 sm:pb-16 md:pb-20 last:pb-0 group"
            >
              {/* Dot */}
              <div className="absolute -left-6 sm:-left-8 top-1 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-orange-600 border-4 border-[#2D1B10] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_20px_rgba(234,88,12,0.6)]" />

              <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg sm:rounded-2xl p-4 sm:p-8 transition-colors duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-orange-500 font-mono text-xs font-bold tracking-widest uppercase">
                    {item.day}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-stone-400 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
