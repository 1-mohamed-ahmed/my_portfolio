import { motion } from "motion/react";
import { useContext } from "react";
import { PortfolioContext } from "../contexts/portfolioContext";
export default function About() {
  const { data } = useContext(PortfolioContext);
  return (
    <>
      <section id="about" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
              {data.about.title}
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              {data.about.title}
            </h2>

            <p className="mt-4 text-lg text-slate-400">{data.about.subtitle}</p>
          </motion.div>

          {/* Content */}
          <div className="grid gap-10 md:grid-cols-2">
            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-white/3 p-8 transition-all duration-500 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-700/20"
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
                className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-400/10 text-4xl"
              >
                👨‍💻
              </motion.div>

              {/* Text */}
              <p className="leading-8 text-slate-300">{data.about.text1}</p>

              <p className="mt-5 leading-8 text-slate-400">
                {data.about.text2}
              </p>
            </motion.div>

            {/* Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="grid gap-5"
            >
              {/* Location */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-500 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-700/10"
              >
                <p className="text-sm text-slate-500">Location</p>

                <p className="mt-2 font-bold">🇪🇬 {data.about.location}</p>
              </motion.div>

              {/* Focus */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-500 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-700/10"
              >
                <p className="text-sm text-slate-500">Focus</p>

                <p className="mt-3 font-bold">💻 {data.about.focus.frontend}</p>

                <p className="mt-3 font-bold">📱 {data.about.focus.mobile}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
