import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolio } from "../data/portfolio";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-3 z-[9000] flex justify-center px-4"
    >
      <nav
        className={`flex w-full max-w-3xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight"
        >
          <span className="text-gradient">{portfolio.firstName}</span>
          <span className="text-slate-400">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/60 hover:text-blue-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={portfolio.resumeUrl}
          className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 md:block"
        >
          Resume
        </a>

        <button
          className="rounded-xl p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="glass-strong absolute inset-x-4 top-[72px] flex flex-col gap-1 rounded-2xl p-4 md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
