import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/icons";
import { portfolio } from "../data/portfolio";

function useTypewriter(words, speed = 75, pause = 1600) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && text === word) delay = pause;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialIcons = [
  { icon: GithubIcon, href: portfolio.socials.github },
  { icon: LinkedinIcon, href: portfolio.socials.linkedin },
  { icon: TwitterIcon, href: portfolio.socials.twitter },
  { icon: Mail, href: `mailto:${portfolio.email}` },
];

export default function Hero() {
  const typed = useTypewriter(portfolio.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600">
            <Sparkles size={15} className="text-teal-500" />
            {portfolio.availability}
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-7xl"
        >
          Hi, I'm{" "}
          <span className="text-gradient">{portfolio.name}</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-display mt-5 h-10 text-2xl font-semibold text-slate-700 md:h-12 md:text-3xl"
        >
          <span className="typing-caret text-gradient">{typed}</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-lg text-slate-500"
        >
          {portfolio.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400"
        >
          <MapPin size={15} />
          {portfolio.location}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-500/30 transition-transform hover:scale-105 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="glass-strong rounded-2xl px-8 py-4 font-semibold text-slate-700 transition-transform hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-3"
        >
          {socialIcons.map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass rounded-xl p-3 text-slate-600 transition-colors hover:text-blue-600"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* floating glass chips */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.9 }}
        className="animate-float glass absolute left-[8%] top-[28%] hidden rounded-2xl px-5 py-3 text-sm font-semibold text-slate-600 lg:block"
      >
        ⚛️ Frontend
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.9 }}
        className="animate-float-slow glass absolute right-[8%] top-[32%] hidden rounded-2xl px-5 py-3 text-sm font-semibold text-slate-600 lg:block"
      >
        ⚙️ Backend
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.9 }}
        className="animate-float glass absolute bottom-[22%] left-[14%] hidden rounded-2xl px-5 py-3 text-sm font-semibold text-slate-600 lg:block"
        style={{ animationDelay: "1.2s" }}
      >
        🗄️ Database
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.9 }}
        className="animate-float-slow glass absolute bottom-[26%] right-[13%] hidden rounded-2xl px-5 py-3 text-sm font-semibold text-slate-600 lg:block"
        style={{ animationDelay: "0.6s" }}
      >
        ☁️ DevOps
      </motion.div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="glass rounded-full p-3"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
