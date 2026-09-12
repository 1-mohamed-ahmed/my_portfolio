import { motion } from "motion/react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useContext, useRef, useState } from "react";
import { PortfolioContext } from "../contexts/portfolioContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { data } = useContext(PortfolioContext);

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatusMessage("loading");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatusMessage("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-purple-400">
            {data.nav.contact}
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            {data.contact.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
            {data.contact.subtitle}
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-4xl border border-border bg-card shadow-2xl shadow-purple-950/20"
        >
          {/* Top Gradient Line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent" />

          <div className="grid md:grid-cols-[0.8fr_1.2fr]">
            {/* Left Side */}
            <div className="relative overflow-hidden bg-linear-to-br from-purple-600/15 via-transparent to-blue-600/10 p-8 md:p-12">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-purple-500/10" />

              <div className="relative z-10">
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500/20 to-blue-500/20 text-purple-400 ring-1 ring-purple-400/20">
                  <Mail size={28} />
                </div>

                <h3 className="text-3xl font-black leading-tight md:text-4xl">
                  Let's build
                  <br />
                  <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    something great.
                  </span>
                </h3>

                <p className="mt-6 max-w-sm leading-7 text-text-secondary">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of something great.
                </p>

                {/* Contact Info */}
                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-purple-400">
                      <Mail size={19} />
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">Email</p>

                      <p className="mt-1 text-sm font-semibold text-text">
                        mohamed@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-blue-400">
                      <MapPin size={19} />
                    </div>

                    <div>
                      <p className="text-xs text-text-secondary">Location</p>

                      <p className="mt-1 text-sm font-semibold text-text">
                        {data.about.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-10 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                  <span className="text-sm font-medium text-text-secondary">
                    {data.hero.available}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 md:p-12">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    {data.contact.name}
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={data.contact.name}
                    className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-text outline-none transition-all duration-300 placeholder:text-text-secondary/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    {data.contact.email}
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={data.contact.email}
                    className="w-full rounded-xl border border-border bg-surface px-5 py-4 text-text outline-none transition-all duration-300 placeholder:text-text-secondary/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    {data.contact.message}
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder={data.contact.message}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-5 py-4 text-text outline-none transition-all duration-300 placeholder:text-text-secondary/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {/* Status */}
                {statusMessage === "success" && (
                  <p className="text-sm font-semibold text-emerald-500">
                    Message sent successfully ✅
                  </p>
                )}

                {statusMessage === "error" && (
                  <p className="text-sm font-semibold text-red-500">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { y: -3 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-purple-400 to-blue-400 px-6 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />

                  {loading ? "Sending..." : data.contact.send}

                  {!loading && (
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
