import { motion } from "motion/react";
import { useContext } from "react";
import { PortfolioContext } from "../contexts/portfolioContext";
export default function Experience() {
  const { data } = useContext(PortfolioContext);

  return (
    <>
      <section id="experience" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
              {data.experience.label}
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              {data.experience.title}
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
              {data.experience.subtitle}
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {data.experience.items.map((item, index) => (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 backdrop-blur-sm"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/20 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-6 top-6 font-mono text-sm text-slate-600">
                  0{index + 1}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-3xl"
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-black transition-colors duration-300 group-hover:text-purple-300">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-purple-400">
                    {item.date}
                  </p>

                  <p className="mt-5 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
