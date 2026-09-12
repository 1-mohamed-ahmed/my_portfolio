import { motion } from "motion/react";
import { useContext } from "react";
import { PortfolioContext } from "../contexts/portfolioContext";
export default function Skills() {
  const { data } = useContext(PortfolioContext);
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-semibold text-purple-400">
            {data.skills.label}
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            {data.skills.title}
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            {data.skills.subtitle}
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.mySkills.map((skill, index) => (
            <motion.div
              key={skill.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition duration-500 group-hover:bg-purple-500/20" />

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="relative mt-6 text-2xl font-bold">
                {data.skills[skill.key].title}
              </h3>

              {/* Description */}
              <p className="relative mt-3 leading-7 text-slate-400">
                {data.skills[skill.key].description}
              </p>

              {/* Technologies */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-purple-400/30 group-hover:text-purple-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
