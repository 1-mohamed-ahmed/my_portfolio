import { motion } from "motion/react";
import { useContext } from "react";
import { PortfolioContext } from "../contexts/portfolioContext";
export default function Projects() {
  const { data } = useContext(PortfolioContext);

  return (
    <>
      <section id="projects" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
              {data.projects.label || "MY WORK"}
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              {data.projects.title}
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
              {data.projects.subtitle}
            </p>
          </motion.div>

          {/* Projects */}
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {data.projects.items.map((project, index) => (
              <motion.article
                key={project.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm"
              >
                {/* Corner Glow */}
                <div
                  className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-purple-500/30
                  blur-[80px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
                />

                {/* Project Preview */}
                <div className="relative h-64 overflow-hidden border-b border-white/10 bg-linear-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10">
                  {/* Decorative background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-purple-500 blur-3xl" />
                    <div className="absolute bottom-5 right-10 h-24 w-24 rounded-full bg-blue-500 blur-3xl" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="relative flex h-full items-center justify-center text-7xl"
                    whileHover={{ scale: 1.12, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.icon}
                  </motion.div>

                  {/* Project number */}
                  <span className="absolute left-6 top-5 font-mono text-sm text-slate-500">
                    0{index + 1}
                  </span>

                  {/* Arrow */}
                  <div
                    className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/20
                    text-slate-400
                    transition-all
                    duration-300
                    group-hover:border-purple-400/40
                    group-hover:bg-purple-500/20
                    group-hover:text-purple-300
                  "
                  >
                    <span className="text-xl">↗</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-7">
                  <h3 className="text-2xl font-black transition-colors duration-300 group-hover:text-purple-300">
                    {data.projects[project.key].title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {data.projects[project.key].description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-300
                        transition-colors
                        duration-300
                        group-hover:border-purple-400/20
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex items-center gap-3">
                    <a
                      target="_blank"
                      href={project.github}
                      className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    border
    border-white/10
    bg-white/5
    px-4
    py-2.5
    text-sm
    font-semibold
    text-slate-200
    transition-all
    duration-300
    hover:border-purple-400/30
    hover:bg-purple-500/10
    hover:text-purple-300
  "
                    >
                      <span>GitHub</span>
                    </a>
                    {/* 
                    <a
                      href={project.live}
                      className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-linear-to-r
                      from-purple-600
                      to-blue-600
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-lg
                      hover:shadow-purple-500/20
                    "
                    >
                      <span>↗</span>
                      {data.projects.view}
                    </a> */}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
