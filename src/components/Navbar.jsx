import { useContext, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Languages } from "lucide-react";
import { PortfolioContext } from "../contexts/portfolioContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data, lang, toggleLanguage } = useContext(PortfolioContext);

  const links = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" },
    { key: "contact", href: "#contact" },
  ];

  const largeScreenLink = links.map((link) => (
    <a
      key={link.key}
      href={link.href}
      className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-purple-400"
    >
      {data.nav[link.key]}
    </a>
  ));
  const smallScreenLink = links.map((link) => (
    <a
      key={link.key}
      href={link.href}
      className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-purple-400 py-3 "
    >
      {data.nav[link.key]}
    </a>
  ));

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <nav className="mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 px-5 py-3 shadow-xl shadow-purple-950/10 backdrop-blur-xl">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="text-2xl font-black tracking-tight text-white"
          >
            Mohamed<span className="text-purple-400">.</span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-7 md:flex">
            {largeScreenLink}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-3 text-sm font-bold text-slate-300 transition-all duration-300 hover:border-purple-400/40 hover:text-purple-400"
            >
              <Languages size={17} />

              {lang === "en" ? "AR" : "EN"}
            </motion.button>

            {/* Contact */}
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="hidden rounded-xl bg-linear-to-r from-purple-500 to-blue-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 md:block"
            >
              {data.nav.talk}
            </motion.a>

            {/* Mobile Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-slate-300 transition-colors hover:text-purple-400 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col p-3">
                {smallScreenLink}

                <a
                  href="#contact"
                  className="mt-2 rounded-xl bg-linear-to-r from-purple-500 to-blue-500 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  {data.nav.talk}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
