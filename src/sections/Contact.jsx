import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/icons";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { portfolio } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have a project, role, or idea in mind? My inbox is open."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* info card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <TiltCard className="glass-strong h-full rounded-3xl p-8" intensity={8}>
              <h3 className="font-display text-2xl font-bold text-slate-800">
                Say hello <span className="text-gradient">👋</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Whether it's a full-time role, freelance work, or just a tech
                chat — I usually reply within a day.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${portfolio.email}`}
                  className="glass flex items-center gap-3 rounded-2xl p-4 text-sm font-medium text-slate-700 transition-transform hover:scale-[1.03]"
                >
                  <span className="rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 p-2.5 text-white">
                    <Mail size={16} />
                  </span>
                  {portfolio.email}
                </a>
                <div className="glass flex items-center gap-3 rounded-2xl p-4 text-sm font-medium text-slate-700">
                  <span className="rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 p-2.5 text-white">
                    <MapPin size={16} />
                  </span>
                  {portfolio.location}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                {[
                  { icon: GithubIcon, href: portfolio.socials.github },
                  { icon: LinkedinIcon, href: portfolio.socials.linkedin },
                  { icon: TwitterIcon, href: portfolio.socials.twitter },
                ].map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="glass rounded-xl p-3 text-slate-600 hover:text-blue-600"
                  >
                    <Icon size={19} />
                  </motion.a>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong space-y-5 rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Jane Doe"
                  className="glass w-full rounded-2xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-shadow focus:ring-2 focus:ring-blue-400/60"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="jane@company.com"
                  className="glass w-full rounded-2xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-shadow focus:ring-2 focus:ring-blue-400/60"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={set("message")}
                placeholder="Tell me about your project..."
                className="glass w-full resize-none rounded-2xl px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-shadow focus:ring-2 focus:ring-blue-400/60"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 py-4 font-semibold text-white shadow-xl shadow-blue-500/30"
            >
              <Send size={17} />
              {sent ? "Opening your mail app..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
