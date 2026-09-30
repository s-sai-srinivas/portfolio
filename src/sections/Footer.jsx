import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { portfolio } from "../data/portfolio";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl px-8 py-6 sm:flex-row"
      >
        <p className="text-sm text-slate-500">
          © {YEAR}{" "}
          <span className="font-semibold text-slate-700">{portfolio.name}</span>.
          Crafted with{" "}
          <Heart size={13} className="inline text-rose-400" fill="currentColor" />{" "}
          and React.
        </p>
        <motion.a
          href="#home"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          className="glass-strong flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700"
          aria-label="Back to top"
        >
          <ArrowUp size={15} />
          Top
        </motion.a>
      </motion.div>
    </footer>
  );
}
