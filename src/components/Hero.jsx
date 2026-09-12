// import { delay } from "motion";
import { motion } from "motion/react";
import { PortfolioContext } from "../contexts/portfolioContext";
import { useContext } from "react";

export default function Hero() {
  const { data } = useContext(PortfolioContext);

  const myName = data.hero.name.split("").map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index * 0.1,
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ));

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-15"
      >
        <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-purple-400">
              ● {data.hero.available}
            </div>

            <p className="mb-3 text-xl text-slate-400">{data.hero.hello}</p>

            <h1 className="text-3xl font-black leading-tight sm:text-5xl">
              {myName}
            </h1>

            <motion.h2
              className="mt-4 bg-linear-to-r from-purple-400 to-purple-900 bg-clip-text text-2xl font-black text-transparent sm:text-3xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              {data.hero.role}
            </motion.h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {data.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-purple-400 px-7 py-3 font-bold text-slate-950 transition hover:bg-purple-300"
              >
                {data.hero.projects}
              </a>

              {/* <a
                href="/cv.pdf"
                download
                className="rounded-full border border-slate-700 px-7 py-3 font-bold transition hover:border-purple-400 hover:text-purple-400"
              >
                {t.hero.cv}
              </a> */}
            </div>

            <div className="mt-8 flex gap-5 text-slate-400">
              <a
                target="_blank"
                href="https://github.com/1-mohamed-ahmed"
                className="social-media"
              >
                GitHub
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohamed-ahmed-5198b6425/"
                className="social-media"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <motion.div
            className="group relative  rounded-3xl sm:block"
            animate={{
              x: [-3, 3, -3, 3, -3],
              y: [3, -3, 3, -3, 3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-purple-600">
              <div
                className="
        pointer-events-none
        absolute
        -right-20
        -top-20
        h-56
        w-56
        rounded-full
        bg-purple-500/40
        blur-[80px]
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
              />

              {/* Window Header */}
              <div className="relative z-10 flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* Code */}
              <div className="relative z-10 pl-8 pt-8 pb-8 pr-6 font-mono text-sm leading-8 text-slate-300">
                <p>
                  <span className="text-purple-400">const</span> developer ={" "}
                  {"{"}
                </p>

                <p className="pl-6">
                  name: <span className="text-green-400">"Mohamed Ahmed"</span>,
                </p>

                <p className="pl-6">
                  role:{" "}
                  <span className="text-green-400">
                    "Flutter & Frontend Developer"
                  </span>
                  ,
                </p>

                <p className="pl-4">skills: [</p>

                <div className="">
                  <p className="pl-10 text-cyan-400 block">"mobile":</p>

                  <p className="text-yellow-400 pl-15 ">
                    ["Flutter", "Dart" , "BLoC &Cubit", "clean architecture "]
                  </p>
                </div>

                <div className="">
                  <p className="pl-10 text-cyan-400">"Frontend":</p>

                  <p className=" text-yellow-400 pl-15 ">
                    ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"]
                  </p>

                  <span className="text-yellow-400"></span>
                  <span className="text-yellow-400"></span>

                  <span className="text-yellow-400 pl-3">],</span>
                </div>

                <p>{"}"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
