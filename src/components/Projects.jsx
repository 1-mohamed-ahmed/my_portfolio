import { motion } from "motion/react";
import { useContext } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { PortfolioContext } from "../contexts/portfolioContext";

export default function Projects() {
  const { data } = useContext(PortfolioContext);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-60 w-60 rounded-full bg-purple-600/10 blur-[100px]" />

        <div className="absolute bottom-20 right-1/4 h-60 w-60 rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-purple-500" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-purple-400">
              {data.projects.label || "MY WORK"}
            </p>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            {data.projects.title}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            {data.projects.subtitle}
          </p>
        </motion.div>

        {/* ================= PROJECTS ================= */}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data.projects.items.map((project, index) => (
            <motion.article
              key={project.key}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
                transition-all
                duration-400
                hover:-translate-y-1
                hover:border-purple-400/20
                hover:bg-white/5
                hover:shadow-xl
                hover:shadow-purple-950/20
              "
            >
              {/* ================= PREVIEW ================= */}

              <div className="relative h-52 overflow-hidden border-b border-white/10 sm:h-56">
                {/* Background */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-purple-500/15
                    via-blue-500/5
                    to-cyan-500/10
                  "
                />

                {/* Glow */}

                <div
                  className="
                    absolute
                    -left-16
                    -top-16
                    h-48
                    w-48
                    rounded-full
                    bg-purple-500/20
                    blur-[70px]
                    transition-all
                    duration-700
                    group-hover:scale-125
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-16
                    -right-16
                    h-48
                    w-48
                    rounded-full
                    bg-blue-500/15
                    blur-[70px]
                    transition-all
                    duration-700
                    group-hover:scale-125
                  "
                />

                {/* Grid */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-[0.035]
                    [background-image:linear-linear(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
                    bg-size:30px_30px
                  "
                />

                {/* Number */}

                <div className="absolute left-5 top-4 z-20">
                  <span className="font-mono text-[10px] tracking-widest text-slate-500">
                    PROJECT
                  </span>

                  <span className="ml-2 font-mono text-xs font-bold text-purple-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Arrow */}

                <div
                  className="
                    absolute
                    right-5
                    top-4
                    z-20
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/20
                    text-slate-400
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:border-purple-400/30
                    group-hover:bg-purple-500/20
                    group-hover:text-purple-300
                  "
                >
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  />
                </div>

                {/* Project Image */}

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        rounded-xl
                        object-cover
                        shadow-xl
                        shadow-black/30
                      "
                      whileHover={{
                        scale: 1.03,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    />
                  ) : (
                    <motion.div
                      className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        text-5xl
                        shadow-xl
                        shadow-purple-950/30
                        backdrop-blur-xl
                      "
                      whileHover={{
                        scale: 1.06,
                        rotate: 2,
                      }}
                    >
                      {project.icon}
                    </motion.div>
                  )}
                </div>

                {/* Bottom gradient */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-20
                    bg-linear-to-t
                    from-black/30
                    to-transparent
                  "
                />
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-5">
                {/* Title */}

                <div>
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-purple-400">
                    Featured Project
                  </p>

                  <h3
                    className="
                      text-xl
                      font-black
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-purple-300
                      sm:text-2xl
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        border
                        border-white/10
                        bg-white/4
                        px-2.5
                        py-1
                        text-[10px]
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        group-hover:border-purple-400/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}

                <div className="mt-5 flex gap-2.5 border-t border-white/10 pt-4">
                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-white/10
                      bg-white/5
                      px-3.5
                      py-2
                      text-xs
                      font-semibold
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-purple-400/30
                      hover:bg-purple-500/10
                      hover:text-white
                    "
                  >
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>

                  {/* Live */}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-lg
                        bg-linear-to-r
                        from-purple-600
                        to-blue-600
                        px-3.5
                        py-2
                        text-xs
                        font-bold
                        text-white
                        shadow-md
                        shadow-purple-900/20
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                      "
                    >
                      <ExternalLink size={14} />

                      {data.projects.view || "Live Demo"}

                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Border */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  border
                  border-purple-400/0
                  transition-all
                  duration-500
                  group-hover:border-purple-400/10
                "
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
