import { motion } from "motion/react";
import { Smartphone, Code2, Flame } from "lucide-react";
import { useContext } from "react";
import { PortfolioContext } from "../contexts/portfolioContext";

const services = [
  {
    key: "mobile",
    icon: Smartphone,
  },
  {
    key: "api",
    icon: Code2,
  },
  {
    key: "firebase",
    icon: Flame,
  },
];

export default function Services() {
  const { data } = useContext(PortfolioContext);

  return (
    <>
      <section id="services" className="relative overflow-hidden px-6 py-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-purple-400">
              Services
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              {data.services.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
              {data.services.subtitle}
            </p>
          </motion.div>

          {/* Services */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-900/20"
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/20 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Number */}
                  <span className="absolute right-7 top-7 font-mono text-sm text-text-secondary/40">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500/15 to-blue-500/15 text-purple-400 ring-1 ring-purple-400/20"
                  >
                    <Icon size={30} strokeWidth={1.8} />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="mt-7 text-2xl font-black transition-colors duration-300 group-hover:text-purple-300">
                      {data.services[service.key].title}
                    </h3>

                    <p className="mt-4 leading-7 text-text-secondary">
                      {data.services[service.key].description}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-linear-to-r from-purple-500 to-blue-500 transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
