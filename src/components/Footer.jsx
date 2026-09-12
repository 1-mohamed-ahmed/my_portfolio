import { motion } from "motion/react";

export default function Footer({ t }) {
  return (
    <footer className="border-t border-border px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-text-secondary md:flex-row"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-text">Mohamed Ahmed</span>
        </p>

        <p>{t.footer}</p>
      </motion.div>
    </footer>
  );
}
